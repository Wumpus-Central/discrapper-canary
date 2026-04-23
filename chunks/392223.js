"use strict";
n.d(t, { yo: () => s });
class r {
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
    invalidateChildIndices(e) {
        (null == this._minInvalidChildIndex ||
            !this._minInvalidChildIndex.isConnected ||
            e.index < this._minInvalidChildIndex.index) &&
            ((this._minInvalidChildIndex = e), this.ownerDocument.markDirty(this));
    }
    updateChildIndices() {
        let e = this._minInvalidChildIndex;
        for (; e; ) (e.index = e.previousSibling ? e.previousSibling.index + 1 : 0), (e = e.nextSibling);
        this._minInvalidChildIndex = null;
    }
    appendChild(e) {
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
            this.isConnected && this.ownerDocument.queueUpdate();
    }
    insertBefore(e, t) {
        if (null == t) return this.appendChild(e);
        e.parentNode && e.parentNode.removeChild(e),
            (e.nextSibling = t),
            (e.previousSibling = t.previousSibling),
            (e.index = t.index - 1),
            this.firstChild === t ? (this.firstChild = e) : t.previousSibling && (t.previousSibling.nextSibling = e),
            (t.previousSibling = e),
            (e.parentNode = t.parentNode),
            this.invalidateChildIndices(e),
            this.isConnected && this.ownerDocument.queueUpdate();
    }
    removeChild(e) {
        e.parentNode === this &&
            (this._minInvalidChildIndex === e && (this._minInvalidChildIndex = null),
            e.nextSibling &&
                (this.invalidateChildIndices(e.nextSibling), (e.nextSibling.previousSibling = e.previousSibling)),
            e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling),
            this.firstChild === e && (this.firstChild = e.nextSibling),
            this.lastChild === e && (this.lastChild = e.previousSibling),
            (e.parentNode = null),
            (e.nextSibling = null),
            (e.previousSibling = null),
            (e.index = 0),
            this.ownerDocument.markDirty(e),
            this.isConnected && this.ownerDocument.queueUpdate());
    }
    addEventListener() {}
    removeEventListener() {}
    get previousVisibleSibling() {
        let e = this.previousSibling;
        for (; e && e.isHidden; ) e = e.previousSibling;
        return e;
    }
    get nextVisibleSibling() {
        let e = this.nextSibling;
        for (; e && e.isHidden; ) e = e.nextSibling;
        return e;
    }
    get firstVisibleChild() {
        let e = this.firstChild;
        for (; e && e.isHidden; ) e = e.nextSibling;
        return e;
    }
    get lastVisibleChild() {
        let e = this.lastChild;
        for (; e && e.isHidden; ) e = e.previousSibling;
        return e;
    }
    constructor(e) {
        (this._firstChild = null),
            (this._lastChild = null),
            (this._previousSibling = null),
            (this._nextSibling = null),
            (this._parentNode = null),
            (this._minInvalidChildIndex = null),
            (this.ownerDocument = e);
    }
}
class i extends r {
    get index() {
        return this._index;
    }
    set index(e) {
        (this._index = e), this.ownerDocument.markDirty(this);
    }
    get level() {
        var e;
        return this.parentNode instanceof i
            ? this.parentNode.level + +((null == (e = this.node) ? void 0 : e.type) === "item")
            : 0;
    }
    getMutableNode() {
        return null == this.node
            ? null
            : (this.isMutated || ((this.node = this.node.clone()), (this.isMutated = !0)),
              this.ownerDocument.markDirty(this),
              this.node);
    }
    updateNode() {
        var e, t, n, r, s, a, o, l, u, c, d, _, f, p, h;
        let E = this.nextVisibleSibling,
            m = this.getMutableNode();
        if (
            null != m &&
            ((m.index = this.index),
            (m.level = this.level),
            (m.parentKey =
                this.parentNode instanceof i && null != (u = null == (e = this.parentNode.node) ? void 0 : e.key)
                    ? u
                    : null),
            (m.prevKey =
                null != (c = null == (n = this.previousVisibleSibling) || null == (t = n.node) ? void 0 : t.key)
                    ? c
                    : null),
            (m.nextKey = null != (d = null == E || null == (r = E.node) ? void 0 : r.key) ? d : null),
            (m.hasChildNodes = !!this.firstChild),
            (m.firstChildKey =
                null != (_ = null == (a = this.firstVisibleChild) || null == (s = a.node) ? void 0 : s.key) ? _ : null),
            (m.lastChildKey =
                null != (f = null == (l = this.lastVisibleChild) || null == (o = l.node) ? void 0 : o.key) ? f : null),
            (null != m.colSpan || null != m.colIndex) && E)
        ) {
            let e = (null != (p = m.colIndex) ? p : m.index) + (null != (h = m.colSpan) ? h : 1);
            null != E.node && e !== E.node.colIndex && (E.getMutableNode().colIndex = e);
        }
    }
    setProps(e, t, n, r, i) {
        let s,
            { value: a, textValue: o, id: l, ...u } = e;
        if (
            (null == this.node
                ? ((s = new n(null != l ? l : `react-aria-${++this.ownerDocument.nodeId}`)), (this.node = s))
                : (s = this.getMutableNode()),
            (u.ref = t),
            (s.props = u),
            (s.rendered = r),
            (s.render = i),
            (s.value = a),
            (s.textValue = o || ("string" == typeof u.children ? u.children : "") || e["aria-label"] || ""),
            null != l && l !== s.key)
        )
            throw Error("Cannot change the id of an item");
        null != u.colSpan && (s.colSpan = u.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
    }
    get style() {
        let e = this;
        return {
            get display() {
                return e.isHidden ? "none" : "";
            },
            set display(value) {
                let r = "none" === value;
                if (e.isHidden !== r) {
                    var t, n;
                    ((null == (t = e.parentNode) ? void 0 : t.firstVisibleChild) === e ||
                        (null == (n = e.parentNode) ? void 0 : n.lastVisibleChild) === e) &&
                        e.ownerDocument.markDirty(e.parentNode);
                    let i = e.previousVisibleSibling,
                        s = e.nextVisibleSibling;
                    i && e.ownerDocument.markDirty(i),
                        s && e.ownerDocument.markDirty(s),
                        (e.isHidden = r),
                        e.ownerDocument.markDirty(e);
                }
            },
        };
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
    constructor(e, t) {
        super(t),
            (this.nodeType = 8),
            (this.isMutated = !0),
            (this._index = 0),
            (this.isHidden = !1),
            (this.node = null);
    }
}
class s extends r {
    get isConnected() {
        return !0;
    }
    createElement(e) {
        return new i(e, this);
    }
    getMutableCollection() {
        return this.nextCollection || (this.nextCollection = this.collection.clone()), this.nextCollection;
    }
    markDirty(e) {
        this.dirtyNodes.add(e);
    }
    addNode(e) {
        if (e.isHidden || null == e.node) return;
        let t = this.getMutableCollection();
        if (!t.getItem(e.node.key)) for (let t of e) this.addNode(t);
        t.addNode(e.node);
    }
    removeNode(e) {
        for (let t of e) this.removeNode(t);
        e.node && this.getMutableCollection().removeNode(e.node.key);
    }
    getCollection() {
        return this.inSubscription
            ? this.collection.clone()
            : ((this.queuedRender = !1), this.updateCollection(), this.collection);
    }
    updateCollection() {
        for (let e of this.dirtyNodes)
            e instanceof i && (!e.isConnected || e.isHidden) ? this.removeNode(e) : e.updateChildIndices();
        for (let e of this.dirtyNodes)
            e instanceof i
                ? (e.isConnected && !e.isHidden && (e.updateNode(), this.addNode(e)),
                  e.node && this.dirtyNodes.delete(e),
                  (e.isMutated = !1))
                : this.dirtyNodes.delete(e);
        if (this.nextCollection) {
            var e, t, n, r, s, a;
            this.nextCollection.commit(
                null != (s = null == (t = this.firstVisibleChild) || null == (e = t.node) ? void 0 : e.key) ? s : null,
                null != (a = null == (r = this.lastVisibleChild) || null == (n = r.node) ? void 0 : n.key) ? a : null,
                this.isSSR,
            ),
                this.isSSR || ((this.collection = this.nextCollection), (this.nextCollection = null));
        }
    }
    queueUpdate() {
        if (0 !== this.dirtyNodes.size && !this.queuedRender) {
            for (let e of ((this.queuedRender = !0), (this.inSubscription = !0), this.subscriptions)) e();
            this.inSubscription = !1;
        }
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
            (this.nextCollection = null),
            (this.subscriptions = new Set()),
            (this.queuedRender = !1),
            (this.inSubscription = !1),
            (this.collection = e),
            (this.nextCollection = e);
    }
}
