n.d(t, { BB: () => o });
var r = n(12258);
class i {
    *[Symbol.iterator]() {
        let e = this.firstChild;
        for (; e; ) yield e, (e = e.nextSibling);
    }
    get firstChild() {
        return this._firstChild;
    }
    set firstChild(e) {
        (this._firstChild = e), this.ownerDocument.markDirty(this);
    }
    get lastChild() {
        return this._lastChild;
    }
    set lastChild(e) {
        (this._lastChild = e), this.ownerDocument.markDirty(this);
    }
    get previousSibling() {
        return this._previousSibling;
    }
    set previousSibling(e) {
        (this._previousSibling = e), this.ownerDocument.markDirty(this);
    }
    get nextSibling() {
        return this._nextSibling;
    }
    set nextSibling(e) {
        (this._nextSibling = e), this.ownerDocument.markDirty(this);
    }
    get parentNode() {
        return this._parentNode;
    }
    set parentNode(e) {
        (this._parentNode = e), this.ownerDocument.markDirty(this);
    }
    get isConnected() {
        var e;
        return (null == (e = this.parentNode) ? void 0 : e.isConnected) || !1;
    }
    appendChild(e) {
        this.ownerDocument.startTransaction(),
            e.parentNode && e.parentNode.removeChild(e),
            null == this.firstChild && (this.firstChild = e),
            this.lastChild
                ? ((this.lastChild.nextSibling = e),
                  (e.index = this.lastChild.index + 1),
                  (e.previousSibling = this.lastChild))
                : ((e.previousSibling = null), (e.index = 0)),
            (e.parentNode = this),
            (e.nextSibling = null),
            (this.lastChild = e),
            this.ownerDocument.markDirty(this),
            e.hasSetProps && this.ownerDocument.addNode(e),
            this.ownerDocument.endTransaction(),
            this.ownerDocument.queueUpdate();
    }
    insertBefore(e, t) {
        if (null == t) return this.appendChild(e);
        this.ownerDocument.startTransaction(),
            e.parentNode && e.parentNode.removeChild(e),
            (e.nextSibling = t),
            (e.previousSibling = t.previousSibling),
            (e.index = t.index),
            this.firstChild === t ? (this.firstChild = e) : t.previousSibling && (t.previousSibling.nextSibling = e),
            (t.previousSibling = e),
            (e.parentNode = t.parentNode);
        let n = t;
        for (; n; ) n.index++, (n = n.nextSibling);
        e.hasSetProps && this.ownerDocument.addNode(e),
            this.ownerDocument.endTransaction(),
            this.ownerDocument.queueUpdate();
    }
    removeChild(e) {
        if (e.parentNode !== this || !this.ownerDocument.isMounted) return;
        this.ownerDocument.startTransaction();
        let t = e.nextSibling;
        for (; t; ) t.index--, (t = t.nextSibling);
        e.nextSibling && (e.nextSibling.previousSibling = e.previousSibling),
            e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling),
            this.firstChild === e && (this.firstChild = e.nextSibling),
            this.lastChild === e && (this.lastChild = e.previousSibling),
            (e.parentNode = null),
            (e.nextSibling = null),
            (e.previousSibling = null),
            (e.index = 0),
            this.ownerDocument.removeNode(e),
            this.ownerDocument.endTransaction(),
            this.ownerDocument.queueUpdate();
    }
    addEventListener() {}
    removeEventListener() {}
    constructor(e) {
        (this._firstChild = null),
            (this._lastChild = null),
            (this._previousSibling = null),
            (this._nextSibling = null),
            (this._parentNode = null),
            (this.ownerDocument = e);
    }
}
class a extends i {
    get index() {
        return this._index;
    }
    set index(e) {
        (this._index = e), this.ownerDocument.markDirty(this);
    }
    get level() {
        return this.parentNode instanceof a ? this.parentNode.level + +("item" === this.node.type) : 0;
    }
    updateNode() {
        var e, t, n, r, i, o, s, l, c, u;
        let d = this.ownerDocument.getMutableNode(this);
        if (
            ((d.index = this.index),
            (d.level = this.level),
            (d.parentKey = this.parentNode instanceof a ? this.parentNode.node.key : null),
            (d.prevKey = null != (i = null == (e = this.previousSibling) ? void 0 : e.node.key) ? i : null),
            (d.nextKey = null != (o = null == (t = this.nextSibling) ? void 0 : t.node.key) ? o : null),
            (d.hasChildNodes = !!this.firstChild),
            (d.firstChildKey = null != (s = null == (n = this.firstChild) ? void 0 : n.node.key) ? s : null),
            (d.lastChildKey = null != (l = null == (r = this.lastChild) ? void 0 : r.node.key) ? l : null),
            (null != d.colSpan || null != d.colIndex) && this.nextSibling)
        ) {
            let e = (null != (c = d.colIndex) ? c : d.index) + (null != (u = d.colSpan) ? u : 1);
            e !== this.nextSibling.node.colIndex && (this.ownerDocument.getMutableNode(this.nextSibling).colIndex = e);
        }
    }
    setProps(e, t, n, r) {
        let i = this.ownerDocument.getMutableNode(this),
            { value: a, textValue: o, id: s, ...l } = e;
        if (
            ((l.ref = t),
            (i.props = l),
            (i.rendered = n),
            (i.render = r),
            (i.value = a),
            (i.textValue = o || ("string" == typeof l.children ? l.children : "") || e["aria-label"] || ""),
            null != s && s !== i.key)
        ) {
            if (this.hasSetProps) throw Error("Cannot change the id of an item");
            i.key = s;
        }
        null != l.colSpan && (i.colSpan = l.colSpan),
            this.hasSetProps ||
                (this.ownerDocument.addNode(this), this.ownerDocument.endTransaction(), (this.hasSetProps = !0)),
            this.ownerDocument.queueUpdate();
    }
    get style() {
        return {};
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
    constructor(e, t) {
        super(t),
            (this.nodeType = 8),
            (this._index = 0),
            (this.hasSetProps = !1),
            (this.node = new (0, r.S)(e, `react-aria-${++t.nodeId}`)),
            this.ownerDocument.startTransaction();
    }
}
class o extends i {
    get isConnected() {
        return this.isMounted;
    }
    createElement(e) {
        return new a(e, this);
    }
    getMutableNode(e) {
        let t = e.node;
        return (
            this.mutatedNodes.has(e) || ((t = e.node.clone()), this.mutatedNodes.add(e), (e.node = t)),
            this.markDirty(e),
            t
        );
    }
    getMutableCollection() {
        return (
            this.isSSR ||
                this.collectionMutated ||
                ((this.collection = this.collection.clone()), (this.collectionMutated = !0)),
            this.collection
        );
    }
    markDirty(e) {
        this.dirtyNodes.add(e);
    }
    startTransaction() {
        this.transactionCount++;
    }
    endTransaction() {
        this.transactionCount--;
    }
    addNode(e) {
        let t = this.getMutableCollection();
        if (!t.getItem(e.node.key)) for (let n of (t.addNode(e.node), e)) this.addNode(n);
        this.markDirty(e);
    }
    removeNode(e) {
        for (let t of e) this.removeNode(t);
        this.getMutableCollection().removeNode(e.node.key), this.markDirty(e);
    }
    getCollection() {
        return this.transactionCount > 0 || this.updateCollection(), this.collection;
    }
    updateCollection() {
        for (let e of this.dirtyNodes) e instanceof a && e.isConnected && e.updateNode();
        if ((this.dirtyNodes.clear(), this.mutatedNodes.size || this.collectionMutated)) {
            var e, t, n, r;
            let i = this.getMutableCollection();
            for (let e of this.mutatedNodes) e.isConnected && i.addNode(e.node);
            this.mutatedNodes.clear(),
                i.commit(
                    null != (n = null == (e = this.firstChild) ? void 0 : e.node.key) ? n : null,
                    null != (r = null == (t = this.lastChild) ? void 0 : t.node.key) ? r : null,
                    this.isSSR,
                );
        }
        this.collectionMutated = !1;
    }
    queueUpdate() {
        if (0 !== this.dirtyNodes.size && !(this.transactionCount > 0)) for (let e of this.subscriptions) e();
    }
    subscribe(e) {
        return this.subscriptions.add(e), () => this.subscriptions.delete(e);
    }
    resetAfterSSR() {
        this.isSSR && ((this.isSSR = !1), (this.firstChild = null), (this.lastChild = null), (this.nodeId = 0));
    }
    constructor(e) {
        super(null),
            (this.nodeType = 11),
            (this.ownerDocument = this),
            (this.dirtyNodes = new Set()),
            (this.isSSR = !1),
            (this.nodeId = 0),
            (this.nodesByProps = new WeakMap()),
            (this.isMounted = !0),
            (this.mutatedNodes = new Set()),
            (this.subscriptions = new Set()),
            (this.transactionCount = 0),
            (this.collection = e),
            (this.collectionMutated = !0);
    }
}
