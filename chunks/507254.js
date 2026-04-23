"use strict";
r.d(t, { pM: () => w, GQ: () => _, KU: () => E, yq: () => S });
var n = r(178375);
class a {
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
class s extends a {
    get index() {
        return this._index;
    }
    set index(e) {
        (this._index = e), this.ownerDocument.markDirty(this);
    }
    get level() {
        var e;
        return this.parentNode instanceof s
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
        var e, t, r, n, a, i, o, l, u, c, d, f, p, h, m;
        let _ = this.nextVisibleSibling,
            g = this.getMutableNode();
        if (
            null != g &&
            ((g.index = this.index),
            (g.level = this.level),
            (g.parentKey =
                this.parentNode instanceof s && null != (u = null == (e = this.parentNode.node) ? void 0 : e.key)
                    ? u
                    : null),
            (g.prevKey =
                null != (c = null == (r = this.previousVisibleSibling) || null == (t = r.node) ? void 0 : t.key)
                    ? c
                    : null),
            (g.nextKey = null != (d = null == _ || null == (n = _.node) ? void 0 : n.key) ? d : null),
            (g.hasChildNodes = !!this.firstChild),
            (g.firstChildKey =
                null != (f = null == (i = this.firstVisibleChild) || null == (a = i.node) ? void 0 : a.key) ? f : null),
            (g.lastChildKey =
                null != (p = null == (l = this.lastVisibleChild) || null == (o = l.node) ? void 0 : o.key) ? p : null),
            (null != g.colSpan || null != g.colIndex) && _)
        ) {
            let e = (null != (h = g.colIndex) ? h : g.index) + (null != (m = g.colSpan) ? m : 1);
            null != _.node && e !== _.node.colIndex && (_.getMutableNode().colIndex = e);
        }
    }
    setProps(e, t, r, n, a) {
        let s,
            { value: i, textValue: o, id: l, ...u } = e;
        if (
            (null == this.node
                ? ((s = new r(null != l ? l : `react-aria-${++this.ownerDocument.nodeId}`)), (this.node = s))
                : (s = this.getMutableNode()),
            (u.ref = t),
            (s.props = u),
            (s.rendered = n),
            (s.render = a),
            (s.value = i),
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
                let n = "none" === value;
                if (e.isHidden !== n) {
                    var t, r;
                    ((null == (t = e.parentNode) ? void 0 : t.firstVisibleChild) === e ||
                        (null == (r = e.parentNode) ? void 0 : r.lastVisibleChild) === e) &&
                        e.ownerDocument.markDirty(e.parentNode);
                    let a = e.previousVisibleSibling,
                        s = e.nextVisibleSibling;
                    a && e.ownerDocument.markDirty(a),
                        s && e.ownerDocument.markDirty(s),
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
class i extends a {
    get isConnected() {
        return !0;
    }
    createElement(e) {
        return new s(e, this);
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
            e instanceof s && (!e.isConnected || e.isHidden) ? this.removeNode(e) : e.updateChildIndices();
        for (let e of this.dirtyNodes)
            e instanceof s
                ? (e.isConnected && !e.isHidden && (e.updateNode(), this.addNode(e)),
                  e.node && this.dirtyNodes.delete(e),
                  (e.isMutated = !1))
                : this.dirtyNodes.delete(e);
        if (this.nextCollection) {
            var e, t, r, n, a, i;
            this.nextCollection.commit(
                null != (a = null == (t = this.firstVisibleChild) || null == (e = t.node) ? void 0 : e.key) ? a : null,
                null != (i = null == (n = this.lastVisibleChild) || null == (r = n.node) ? void 0 : r.key) ? i : null,
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
var o = r(183590),
    l = r(564004),
    u = r(340287),
    c = r(877247),
    d = r(64700),
    f = r(341221),
    p = r(524519);
let h = (0, d.createContext)(!1),
    m = (0, d.createContext)(null);
function _(e) {
    if ((0, d.useContext)(m)) return e.content;
    let { collection: t, document: r } = (function (e) {
        let [t] = (0, d.useState)(() => new i((null == e ? void 0 : e()) || new (0, n.Wk)()));
        return {
            collection: v(
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
        d.createElement(l.jZ, null, d.createElement(m.Provider, { value: r }, e.content)),
        d.createElement(g, { render: e.children, collection: t }),
    );
}
function g({ collection: e, render: t }) {
    return t(e);
}
let v =
        "function" == typeof d.useSyncExternalStore
            ? d.useSyncExternalStore
            : function (e, t, r) {
                  let n = (0, f.wR)(),
                      a = (0, d.useRef)(n);
                  a.current = n;
                  let s = (0, d.useCallback)(() => (a.current ? r() : t()), [t, r]);
                  return (0, p.useSyncExternalStore)(e, s);
              },
    b = (0, d.createContext)(null);
function y(e, t, r, a, s, i) {
    var o, l;
    "string" == typeof e && ((o = e), ((l = class extends n.Pt {}).type = o), (e = l));
    let u = (0, d.useCallback)(
            (n) => {
                null == n || n.setProps(t, r, e, a, i);
            },
            [t, r, a, i, e],
        ),
        c = (0, d.useContext)(b);
    if (c) {
        let n = c.ownerDocument.nodesByProps.get(t);
        return (
            n ||
                ((n = c.ownerDocument.createElement(e.type)).setProps(t, r, e, a, i),
                c.appendChild(n),
                c.ownerDocument.updateCollection(),
                c.ownerDocument.nodesByProps.set(t, n)),
            s ? d.createElement(b.Provider, { value: n }, s) : null
        );
    }
    return d.createElement(e.type, { ref: u }, s);
}
function E(e, t) {
    let r = ({ node: e }) => t(e.props, e.props.ref, e),
        n = (0, d.forwardRef)((n, a) => {
            let s = (0, d.useContext)(c.gY);
            if (!(0, d.useContext)(h)) {
                if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
                return t(n, a);
            }
            return y(e, n, a, "children" in n ? n.children : null, null, (e) =>
                d.createElement(c.gY.Provider, { value: s }, d.createElement(r, { node: e })),
            );
        });
    return (n.displayName = t.name), n;
}
function S(e, t, r = T) {
    let n = ({ node: e }) => t(e.props, e.props.ref, e),
        a = (0, d.forwardRef)((t, a) => {
            var s;
            let i = r(t);
            return null != (s = y(e, t, a, null, i, (e) => d.createElement(n, { node: e })))
                ? s
                : d.createElement(d.Fragment, null);
        });
    return (a.displayName = t.name), a;
}
function T(e) {
    return (0, o.p)({ ...e, addIdAndValue: !0 });
}
let x = (0, d.createContext)(null);
function w(e) {
    let t = (0, d.useContext)(x),
        r = ((null == t ? void 0 : t.dependencies) || []).concat(e.dependencies),
        n = e.idScope || (null == t ? void 0 : t.idScope),
        a = T({ ...e, idScope: n, dependencies: r });
    return (
        (0, d.useContext)(m) && (a = d.createElement(C, null, a)),
        (t = (0, d.useMemo)(() => ({ dependencies: r, idScope: n }), [n, ...r])),
        d.createElement(x.Provider, { value: t }, a)
    );
}
function C({ children: e }) {
    let t = (0, d.useContext)(m),
        r = (0, d.useMemo)(
            () => d.createElement(m.Provider, { value: null }, d.createElement(h.Provider, { value: !0 }, e)),
            [e],
        );
    return (0, f.wR)() ? d.createElement(b.Provider, { value: t }, r) : (0, u.createPortal)(r, t);
}
