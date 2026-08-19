"use strict";
r.d(t, { pM: () => k, GQ: () => v, KU: () => _, yq: () => S });
var n = r(871443);
class o {
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
class i extends o {
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
        var e, t, r, n, o, a, s, l, u, c, f, p, d, h, m;
        let v = this.nextVisibleSibling,
            y = this.getMutableNode();
        if (
            null != y &&
            ((y.index = this.index),
            (y.level = this.level),
            (y.parentKey =
                this.parentNode instanceof i && null != (u = null == (e = this.parentNode.node) ? void 0 : e.key)
                    ? u
                    : null),
            (y.prevKey =
                null != (c = null == (r = this.previousVisibleSibling) || null == (t = r.node) ? void 0 : t.key)
                    ? c
                    : null),
            (y.nextKey = null != (f = null == v || null == (n = v.node) ? void 0 : n.key) ? f : null),
            (y.hasChildNodes = !!this.firstChild),
            (y.firstChildKey =
                null != (p = null == (a = this.firstVisibleChild) || null == (o = a.node) ? void 0 : o.key) ? p : null),
            (y.lastChildKey =
                null != (d = null == (l = this.lastVisibleChild) || null == (s = l.node) ? void 0 : s.key) ? d : null),
            (null != y.colSpan || null != y.colIndex) && v)
        ) {
            let e = (null != (h = y.colIndex) ? h : y.index) + (null != (m = y.colSpan) ? m : 1);
            null != v.node && e !== v.node.colIndex && (v.getMutableNode().colIndex = e);
        }
    }
    setProps(e, t, r, n, o) {
        let i,
            { value: a, textValue: s, id: l, ...u } = e;
        if (
            (null == this.node
                ? ((i = new r(null != l ? l : `react-aria-${++this.ownerDocument.nodeId}`)), (this.node = i))
                : (i = this.getMutableNode()),
            (u.ref = t),
            (i.props = u),
            (i.rendered = n),
            (i.render = o),
            (i.value = a),
            (i.textValue = s || ("string" == typeof u.children ? u.children : "") || e["aria-label"] || ""),
            null != l && l !== i.key)
        )
            throw Error("Cannot change the id of an item");
        null != u.colSpan && (i.colSpan = u.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
    }
    get style() {
        let e = this;
        return {
            get display() {
                return e.isHidden ? "none" : "";
            },
            set display(value) {
                let n = "none" === value;
                if (e.isHidden !== n) {
                    var t, r;
                    ((null == (t = e.parentNode) ? void 0 : t.firstVisibleChild) === e ||
                        (null == (r = e.parentNode) ? void 0 : r.lastVisibleChild) === e) &&
                        e.ownerDocument.markDirty(e.parentNode);
                    let o = e.previousVisibleSibling,
                        i = e.nextVisibleSibling;
                    o && e.ownerDocument.markDirty(o),
                        i && e.ownerDocument.markDirty(i),
                        (e.isHidden = n),
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
class a extends o {
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
            var e, t, r, n, o, a;
            this.nextCollection.commit(
                null != (o = null == (t = this.firstVisibleChild) || null == (e = t.node) ? void 0 : e.key) ? o : null,
                null != (a = null == (n = this.lastVisibleChild) || null == (r = n.node) ? void 0 : r.key) ? a : null,
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
var s = r(447978),
    l = r(639456),
    u = r(333007),
    c = r(126024),
    f = r(582128),
    p = r(446649),
    d = r(937787);
let h = (0, f.createContext)(!1),
    m = (0, f.createContext)(null);
function v(e) {
    if ((0, f.useContext)(m)) return e.content;
    let { collection: t, document: r } = (function (e) {
        let [t] = (0, f.useState)(() => new a((null == e ? void 0 : e()) || new (0, n.Wk)()));
        return {
            collection: g(
                (0, f.useCallback)((e) => t.subscribe(e), [t]),
                (0, f.useCallback)(() => {
                    let e = t.getCollection();
                    return t.isSSR && t.resetAfterSSR(), e;
                }, [t]),
                (0, f.useCallback)(() => ((t.isSSR = !0), t.getCollection()), [t]),
            ),
            document: t,
        };
    })(e.createCollection);
    return f.createElement(
        f.Fragment,
        null,
        f.createElement(l.jZ, null, f.createElement(m.Provider, { value: r }, e.content)),
        f.createElement(y, { render: e.children, collection: t }),
    );
}
function y({ collection: e, render: t }) {
    return t(e);
}
let g =
        "function" == typeof f.useSyncExternalStore
            ? f.useSyncExternalStore
            : function (e, t, r) {
                  let n = (0, p.wR)(),
                      o = (0, f.useRef)(n);
                  o.current = n;
                  let i = (0, f.useCallback)(() => (o.current ? r() : t()), [t, r]);
                  return (0, d.useSyncExternalStore)(e, i);
              },
    b = (0, f.createContext)(null);
function w(e, t, r, o, i, a) {
    var s, l;
    "string" == typeof e && ((s = e), ((l = class extends n.Pt {}).type = s), (e = l));
    let u = (0, f.useCallback)(
            (n) => {
                null == n || n.setProps(t, r, e, o, a);
            },
            [t, r, o, a, e],
        ),
        c = (0, f.useContext)(b);
    if (c) {
        let n = c.ownerDocument.nodesByProps.get(t);
        return (
            n ||
                ((n = c.ownerDocument.createElement(e.type)).setProps(t, r, e, o, a),
                c.appendChild(n),
                c.ownerDocument.updateCollection(),
                c.ownerDocument.nodesByProps.set(t, n)),
            i ? f.createElement(b.Provider, { value: n }, i) : null
        );
    }
    return f.createElement(e.type, { ref: u }, i);
}
function _(e, t) {
    let r = ({ node: e }) => t(e.props, e.props.ref, e),
        n = (0, f.forwardRef)((n, o) => {
            let i = (0, f.useContext)(c.gY);
            if (!(0, f.useContext)(h)) {
                if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
                return t(n, o);
            }
            return w(e, n, o, "children" in n ? n.children : null, null, (e) =>
                f.createElement(c.gY.Provider, { value: i }, f.createElement(r, { node: e })),
            );
        });
    return (n.displayName = t.name), n;
}
function S(e, t, r = E) {
    let n = ({ node: e }) => t(e.props, e.props.ref, e),
        o = (0, f.forwardRef)((t, o) => {
            var i;
            let a = r(t);
            return null != (i = w(e, t, o, null, a, (e) => f.createElement(n, { node: e })))
                ? i
                : f.createElement(f.Fragment, null);
        });
    return (o.displayName = t.name), o;
}
function E(e) {
    return (0, s.p)({ ...e, addIdAndValue: !0 });
}
let x = (0, f.createContext)(null);
function k(e) {
    let t = (0, f.useContext)(x),
        r = ((null == t ? void 0 : t.dependencies) || []).concat(e.dependencies),
        n = e.idScope || (null == t ? void 0 : t.idScope),
        o = E({ ...e, idScope: n, dependencies: r });
    return (
        (0, f.useContext)(m) && (o = f.createElement(C, null, o)),
        (t = (0, f.useMemo)(() => ({ dependencies: r, idScope: n }), [n, ...r])),
        f.createElement(x.Provider, { value: t }, o)
    );
}
function C({ children: e }) {
    let t = (0, f.useContext)(m),
        r = (0, f.useMemo)(
            () => f.createElement(m.Provider, { value: null }, f.createElement(h.Provider, { value: !0 }, e)),
            [e],
        );
    return (0, p.wR)() ? f.createElement(b.Provider, { value: t }, r) : (0, u.createPortal)(r, t);
}
