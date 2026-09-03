r.d(t, { pM: () => k, GQ: () => v, KU: () => _, yq: () => S });
var n = r(886721);
class i {
    constructor(e) {
        (this._firstChild = null),
            (this._lastChild = null),
            (this._previousSibling = null),
            (this._nextSibling = null),
            (this._parentNode = null),
            (this._minInvalidChildIndex = null),
            (this.ownerDocument = e);
    }
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
        return this.parentNode?.isConnected || !1;
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
}
class o extends i {
    constructor(e, t) {
        super(t),
            (this.nodeType = 8),
            (this.isMutated = !0),
            (this._index = 0),
            (this.isHidden = !1),
            (this.node = null);
    }
    get index() {
        return this._index;
    }
    set index(e) {
        (this._index = e), this.ownerDocument.markDirty(this);
    }
    get level() {
        return this.parentNode instanceof o ? this.parentNode.level + +(this.parentNode.node?.type === "item") : 0;
    }
    getMutableNode() {
        return null == this.node
            ? null
            : (this.isMutated || ((this.node = this.node.clone()), (this.isMutated = !0)),
              this.ownerDocument.markDirty(this),
              this.node);
    }
    updateNode() {
        let e = this.nextVisibleSibling,
            t = this.getMutableNode();
        if (
            null != t &&
            ((t.index = this.index),
            (t.level = this.level),
            (t.parentKey = this.parentNode instanceof o ? (this.parentNode.node?.key ?? null) : null),
            (t.prevKey = this.previousVisibleSibling?.node?.key ?? null),
            (t.nextKey = e?.node?.key ?? null),
            (t.hasChildNodes = !!this.firstChild),
            (t.firstChildKey = this.firstVisibleChild?.node?.key ?? null),
            (t.lastChildKey = this.lastVisibleChild?.node?.key ?? null),
            (null != t.colSpan || null != t.colIndex) && e)
        ) {
            let r = (t.colIndex ?? t.index) + (t.colSpan ?? 1);
            null != e.node && r !== e.node.colIndex && (e.getMutableNode().colIndex = r);
        }
    }
    setProps(e, t, r, n, i) {
        let o,
            { value: a, textValue: s, id: l, ...u } = e;
        if (
            (null == this.node
                ? ((o = new r(l ?? `react-aria-${++this.ownerDocument.nodeId}`)), (this.node = o))
                : (o = this.getMutableNode()),
            (u.ref = t),
            (o.props = u),
            (o.rendered = n),
            (o.render = i),
            (o.value = a),
            e["aria-label"] && (o["aria-label"] = e["aria-label"]),
            (o.textValue = s || ("string" == typeof u.children ? u.children : "") || e["aria-label"] || ""),
            null != l && l !== o.key)
        )
            throw Error("Cannot change the id of an item");
        null != u.colSpan && (o.colSpan = u.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
    }
    get style() {
        let e = this;
        return {
            get display() {
                return e.isHidden ? "none" : "";
            },
            set display(value) {
                let t = "none" === value;
                if (e.isHidden !== t) {
                    (e.parentNode?.firstVisibleChild === e || e.parentNode?.lastVisibleChild === e) &&
                        e.ownerDocument.markDirty(e.parentNode);
                    let r = e.previousVisibleSibling,
                        n = e.nextVisibleSibling;
                    r && e.ownerDocument.markDirty(r),
                        n && e.ownerDocument.markDirty(n),
                        (e.isHidden = t),
                        e.ownerDocument.markDirty(e);
                }
            },
        };
    }
    hasAttribute() {}
    setAttribute() {}
    setAttributeNS() {}
    removeAttribute() {}
}
class a extends i {
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
    get isConnected() {
        return !0;
    }
    createElement(e) {
        return new o(e, this);
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
        return this.inSubscription || ((this.queuedRender = !1), this.updateCollection()), this.collection;
    }
    updateCollection() {
        for (let e of this.dirtyNodes)
            e instanceof o && (!e.isConnected || e.isHidden) ? this.removeNode(e) : e.updateChildIndices();
        for (let e of this.dirtyNodes)
            e instanceof o
                ? (e.isConnected && !e.isHidden && (e.updateNode(), this.addNode(e)),
                  e.node && this.dirtyNodes.delete(e),
                  (e.isMutated = !1))
                : this.dirtyNodes.delete(e);
        this.nextCollection &&
            (this.nextCollection.commit(
                this.firstVisibleChild?.node?.key ?? null,
                this.lastVisibleChild?.node?.key ?? null,
                this.isSSR,
            ),
            this.isSSR || ((this.collection = this.nextCollection), (this.nextCollection = null)));
    }
    queueUpdate() {
        if (0 !== this.dirtyNodes.size && !this.queuedRender) {
            for (let e of ((this.queuedRender = !0),
            (this.inSubscription = !0),
            this.isSSR || (this.collection = this.collection.clone()),
            this.subscriptions))
                e();
            this.inSubscription = !1;
        }
    }
    subscribe(e) {
        return this.subscriptions.add(e), this.queuedRender && e(), () => this.subscriptions.delete(e);
    }
    resetAfterSSR() {
        this.isSSR && ((this.isSSR = !1), (this.firstChild = null), (this.lastChild = null), (this.nodeId = 0));
    }
}
var s = r(592288),
    l = r(957397),
    u = r(215510),
    c = r(447502),
    f = r(333007),
    d = r(582128),
    p = r(937787);
let h = (0, d.createContext)(!1),
    m = (0, d.createContext)(null);
function v(e) {
    if ((0, d.useContext)(m)) return e.content;
    let { collection: t, document: r } = (function (e) {
        let [t] = (0, d.useState)(() => new a(e?.() || new (0, n.Wk)()));
        return {
            collection: g(
                (0, d.useCallback)((e) => t.subscribe(e), [t]),
                (0, d.useCallback)(() => {
                    let e = t.getCollection();
                    return t.isSSR && t.resetAfterSSR(), e;
                }, [t]),
                (0, d.useCallback)(() => ((t.isSSR = !0), t.getCollection()), [t]),
            ),
            document: t,
        };
    })(e.createCollection);
    return d.createElement(
        d.Fragment,
        null,
        d.createElement(u.jZ, null, d.createElement(m.Provider, { value: r }, e.content)),
        d.createElement(y, { render: e.children, collection: t }),
    );
}
function y({ collection: e, render: t }) {
    return t(e);
}
let g =
        "function" == typeof d.useSyncExternalStore
            ? d.useSyncExternalStore
            : function (e, t, r) {
                  let n = (0, c.wR)(),
                      i = (0, d.useRef)(n);
                  i.current = n;
                  let o = (0, d.useCallback)(() => (i.current ? r() : t()), [t, r]);
                  return (0, p.useSyncExternalStore)(e, o);
              },
    b = (0, d.createContext)(null);
function w(e, t, r, i, o, a) {
    "string" == typeof e &&
        (e = (function (e) {
            return class extends n.Pt {
                static {
                    this.type = e;
                }
            };
        })(e));
    let s = (0, d.useCallback)(
            (n) => {
                n?.setProps(t, r, e, i, a);
            },
            [t, r, i, a, e],
        ),
        l = (0, d.useContext)(b);
    if (l) {
        let n = l.ownerDocument.nodesByProps.get(t);
        return (
            n ||
                ((n = l.ownerDocument.createElement(e.type)).setProps(t, r, e, i, a),
                l.appendChild(n),
                l.ownerDocument.updateCollection(),
                l.ownerDocument.nodesByProps.set(t, n)),
            o ? d.createElement(b.Provider, { value: n }, o) : null
        );
    }
    return d.createElement(e.type, { ref: s }, o);
}
function _(e, t) {
    let r = ({ node: e }) => t(e.props, e.props.ref, e),
        n = (0, d.forwardRef)((n, i) => {
            let o = (0, d.useContext)(l.gY);
            if (!(0, d.useContext)(h)) {
                if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
                return t(n, i);
            }
            return w(e, n, i, "children" in n ? n.children : null, null, (e) =>
                d.createElement(l.gY.Provider, { value: o }, d.createElement(r, { node: e })),
            );
        });
    return (n.displayName = t.name), n;
}
function S(e, t, r = x) {
    let n = ({ node: e }) => t(e.props, e.props.ref, e),
        i = (0, d.forwardRef)((t, i) => {
            let o = r(t);
            return w(e, t, i, null, o, (e) => d.createElement(n, { node: e })) ?? d.createElement(d.Fragment, null);
        });
    return (i.displayName = t.name), i;
}
function x(e) {
    return (0, s.p)({ ...e, addIdAndValue: !0 });
}
let E = (0, d.createContext)(null);
function k(e) {
    let t = (0, d.useContext)(E),
        r = (t?.dependencies || []).concat(e.dependencies),
        n = e.idScope ?? t?.idScope,
        i = x({ ...e, idScope: n, dependencies: r });
    return (
        (0, d.useContext)(m) && (i = d.createElement(C, null, i)),
        (t = (0, d.useMemo)(() => ({ dependencies: r, idScope: n }), [n, ...r])),
        d.createElement(E.Provider, { value: t }, i)
    );
}
function C({ children: e }) {
    let t = (0, d.useContext)(m),
        r = (0, d.useMemo)(
            () => d.createElement(m.Provider, { value: null }, d.createElement(h.Provider, { value: !0 }, e)),
            [e],
        );
    return (0, c.wR)() ? d.createElement(b.Provider, { value: t }, r) : (0, f.createPortal)(r, t);
}
