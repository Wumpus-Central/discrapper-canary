"use strict";
n.d(t, { pM: () => k, GQ: () => g, KU: () => w, yq: () => x });
var r = n(871443);
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
class a extends i {
    get index() {
        return this._index;
    }
    set index(e) {
        (this._index = e), this.ownerDocument.markDirty(this);
    }
    get level() {
        var e;
        return this.parentNode instanceof a
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
        var e, t, n, r, i, o, s, l, u, c, d, f, p, h, m;
        let g = this.nextVisibleSibling,
            v = this.getMutableNode();
        if (
            null != v &&
            ((v.index = this.index),
            (v.level = this.level),
            (v.parentKey =
                this.parentNode instanceof a && null != (u = null == (e = this.parentNode.node) ? void 0 : e.key)
                    ? u
                    : null),
            (v.prevKey =
                null != (c = null == (n = this.previousVisibleSibling) || null == (t = n.node) ? void 0 : t.key)
                    ? c
                    : null),
            (v.nextKey = null != (d = null == g || null == (r = g.node) ? void 0 : r.key) ? d : null),
            (v.hasChildNodes = !!this.firstChild),
            (v.firstChildKey =
                null != (f = null == (o = this.firstVisibleChild) || null == (i = o.node) ? void 0 : i.key) ? f : null),
            (v.lastChildKey =
                null != (p = null == (l = this.lastVisibleChild) || null == (s = l.node) ? void 0 : s.key) ? p : null),
            (null != v.colSpan || null != v.colIndex) && g)
        ) {
            let e = (null != (h = v.colIndex) ? h : v.index) + (null != (m = v.colSpan) ? m : 1);
            null != g.node && e !== g.node.colIndex && (g.getMutableNode().colIndex = e);
        }
    }
    setProps(e, t, n, r, i) {
        let a,
            { value: o, textValue: s, id: l, ...u } = e;
        if (
            (null == this.node
                ? ((a = new n(null != l ? l : `react-aria-${++this.ownerDocument.nodeId}`)), (this.node = a))
                : (a = this.getMutableNode()),
            (u.ref = t),
            (a.props = u),
            (a.rendered = r),
            (a.render = i),
            (a.value = o),
            (a.textValue = s || ("string" == typeof u.children ? u.children : "") || e["aria-label"] || ""),
            null != l && l !== a.key)
        )
            throw Error("Cannot change the id of an item");
        null != u.colSpan && (a.colSpan = u.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
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
                        a = e.nextVisibleSibling;
                    i && e.ownerDocument.markDirty(i),
                        a && e.ownerDocument.markDirty(a),
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
class o extends i {
    get isConnected() {
        return !0;
    }
    createElement(e) {
        return new a(e, this);
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
            e instanceof a && (!e.isConnected || e.isHidden) ? this.removeNode(e) : e.updateChildIndices();
        for (let e of this.dirtyNodes)
            e instanceof a
                ? (e.isConnected && !e.isHidden && (e.updateNode(), this.addNode(e)),
                  e.node && this.dirtyNodes.delete(e),
                  (e.isMutated = !1))
                : this.dirtyNodes.delete(e);
        if (this.nextCollection) {
            var e, t, n, r, i, o;
            this.nextCollection.commit(
                null != (i = null == (t = this.firstVisibleChild) || null == (e = t.node) ? void 0 : e.key) ? i : null,
                null != (o = null == (r = this.lastVisibleChild) || null == (n = r.node) ? void 0 : n.key) ? o : null,
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
var s = n(447978),
    l = n(639456),
    u = n(333007),
    c = n(126024),
    d = n(582128),
    f = n(446649),
    p = n(937787);
let h = (0, d.createContext)(!1),
    m = (0, d.createContext)(null);
function g(e) {
    if ((0, d.useContext)(m)) return e.content;
    let { collection: t, document: n } = (function (e) {
        let [t] = (0, d.useState)(() => new o((null == e ? void 0 : e()) || new (0, r.Wk)()));
        return {
            collection: y(
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
        d.createElement(l.jZ, null, d.createElement(m.Provider, { value: n }, e.content)),
        d.createElement(v, { render: e.children, collection: t }),
    );
}
function v({ collection: e, render: t }) {
    return t(e);
}
let y =
        "function" == typeof d.useSyncExternalStore
            ? d.useSyncExternalStore
            : function (e, t, n) {
                  let r = (0, f.wR)(),
                      i = (0, d.useRef)(r);
                  i.current = r;
                  let a = (0, d.useCallback)(() => (i.current ? n() : t()), [t, n]);
                  return (0, p.useSyncExternalStore)(e, a);
              },
    b = (0, d.createContext)(null);
function _(e, t, n, i, a, o) {
    var s, l;
    "string" == typeof e && ((s = e), ((l = class extends r.Pt {}).type = s), (e = l));
    let u = (0, d.useCallback)(
            (r) => {
                null == r || r.setProps(t, n, e, i, o);
            },
            [t, n, i, o, e],
        ),
        c = (0, d.useContext)(b);
    if (c) {
        let r = c.ownerDocument.nodesByProps.get(t);
        return (
            r ||
                ((r = c.ownerDocument.createElement(e.type)).setProps(t, n, e, i, o),
                c.appendChild(r),
                c.ownerDocument.updateCollection(),
                c.ownerDocument.nodesByProps.set(t, r)),
            a ? d.createElement(b.Provider, { value: r }, a) : null
        );
    }
    return d.createElement(e.type, { ref: u }, a);
}
function w(e, t) {
    let n = ({ node: e }) => t(e.props, e.props.ref, e),
        r = (0, d.forwardRef)((r, i) => {
            let a = (0, d.useContext)(c.gY);
            if (!(0, d.useContext)(h)) {
                if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
                return t(r, i);
            }
            return _(e, r, i, "children" in r ? r.children : null, null, (e) =>
                d.createElement(c.gY.Provider, { value: a }, d.createElement(n, { node: e })),
            );
        });
    return (r.displayName = t.name), r;
}
function x(e, t, n = E) {
    let r = ({ node: e }) => t(e.props, e.props.ref, e),
        i = (0, d.forwardRef)((t, i) => {
            var a;
            let o = n(t);
            return null != (a = _(e, t, i, null, o, (e) => d.createElement(r, { node: e })))
                ? a
                : d.createElement(d.Fragment, null);
        });
    return (i.displayName = t.name), i;
}
function E(e) {
    return (0, s.p)({ ...e, addIdAndValue: !0 });
}
let S = (0, d.createContext)(null);
function k(e) {
    let t = (0, d.useContext)(S),
        n = ((null == t ? void 0 : t.dependencies) || []).concat(e.dependencies),
        r = e.idScope || (null == t ? void 0 : t.idScope),
        i = E({ ...e, idScope: r, dependencies: n });
    return (
        (0, d.useContext)(m) && (i = d.createElement(T, null, i)),
        (t = (0, d.useMemo)(() => ({ dependencies: n, idScope: r }), [r, ...n])),
        d.createElement(S.Provider, { value: t }, i)
    );
}
function T({ children: e }) {
    let t = (0, d.useContext)(m),
        n = (0, d.useMemo)(
            () => d.createElement(m.Provider, { value: null }, d.createElement(h.Provider, { value: !0 }, e)),
            [e],
        );
    return (0, f.wR)() ? d.createElement(b.Provider, { value: t }, n) : (0, u.createPortal)(n, t);
}
