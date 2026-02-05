"use strict";
n.d(t, { GQ: () => p, KU: () => y, pM: () => b, yq: () => S });
var r = n(178375),
    i = n(392223),
    a = n(183590),
    s = n(564004),
    o = n(340287),
    l = n(946020),
    u = n(64700),
    c = n(341221),
    d = n(524519);
let _ = (0, u.createContext)(!1),
    f = (0, u.createContext)(null);
function p(e) {
    if ((0, u.useContext)(f)) return e.content;
    let { collection: t, document: n } = E(e.createCollection);
    return u.createElement(
        u.Fragment,
        null,
        u.createElement(s.jZ, null, u.createElement(f.Provider, { value: n }, e.content)),
        u.createElement(h, { render: e.children, collection: t }),
    );
}
function h({ collection: e, render: t }) {
    return t(e);
}
function m(e, t, n) {
    let r = (0, c.wR)(),
        i = (0, u.useRef)(r);
    i.current = r;
    let a = (0, u.useCallback)(() => (i.current ? n() : t()), [t, n]);
    return (0, d.useSyncExternalStore)(e, a);
}
let g = "function" == typeof u.useSyncExternalStore ? u.useSyncExternalStore : m;
function E(e) {
    let [t] = (0, u.useState)(() => new (0, i.yo)((null == e ? void 0 : e()) || new (0, r.Wk)()));
    return {
        collection: g(
            (0, u.useCallback)((e) => t.subscribe(e), [t]),
            (0, u.useCallback)(() => {
                let e = t.getCollection();
                return t.isSSR && t.resetAfterSSR(), e;
            }, [t]),
            (0, u.useCallback)(() => ((t.isSSR = !0), t.getCollection()), [t]),
        ),
        document: t,
    };
}
let A = (0, u.createContext)(null);
function I(e) {
    var t;
    return ((t = class extends r.Pt {}).type = e), t;
}
function T(e, t, n, r, i, a) {
    "string" == typeof e && (e = I(e));
    let s = (0, u.useCallback)(
            (i) => {
                null == i || i.setProps(t, n, e, r, a);
            },
            [t, n, r, a, e],
        ),
        o = (0, u.useContext)(A);
    if (o) {
        let s = o.ownerDocument.nodesByProps.get(t);
        return (
            s ||
                ((s = o.ownerDocument.createElement(e.type)).setProps(t, n, e, r, a),
                o.appendChild(s),
                o.ownerDocument.updateCollection(),
                o.ownerDocument.nodesByProps.set(t, s)),
            i ? u.createElement(A.Provider, { value: s }, i) : null
        );
    }
    return u.createElement(e.type, { ref: s }, i);
}
function y(e, t) {
    let n = ({ node: e }) => t(e.props, e.props.ref, e),
        r = (0, u.forwardRef)((r, i) => {
            let a = (0, u.useContext)(l.gY);
            if (!(0, u.useContext)(_)) {
                if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
                return t(r, i);
            }
            return T(e, r, i, "children" in r ? r.children : null, null, (e) =>
                u.createElement(l.gY.Provider, { value: a }, u.createElement(n, { node: e })),
            );
        });
    return (r.displayName = t.name), r;
}
function S(e, t, n = v) {
    let r = ({ node: e }) => t(e.props, e.props.ref, e),
        i = (0, u.forwardRef)((t, i) => {
            var a;
            let s = n(t);
            return null != (a = T(e, t, i, null, s, (e) => u.createElement(r, { node: e })))
                ? a
                : u.createElement(u.Fragment, null);
        });
    return (i.displayName = t.name), i;
}
function v(e) {
    return (0, a.p)({ ...e, addIdAndValue: !0 });
}
let C = (0, u.createContext)(null);
function b(e) {
    let t = (0, u.useContext)(C),
        n = ((null == t ? void 0 : t.dependencies) || []).concat(e.dependencies),
        r = e.idScope || (null == t ? void 0 : t.idScope),
        i = v({ ...e, idScope: r, dependencies: n });
    return (
        (0, u.useContext)(f) && (i = u.createElement(N, null, i)),
        (t = (0, u.useMemo)(() => ({ dependencies: n, idScope: r }), [r, ...n])),
        u.createElement(C.Provider, { value: t }, i)
    );
}
function N({ children: e }) {
    let t = (0, u.useContext)(f),
        n = (0, u.useMemo)(
            () => u.createElement(f.Provider, { value: null }, u.createElement(_.Provider, { value: !0 }, e)),
            [e],
        );
    return (0, c.wR)() ? u.createElement(A.Provider, { value: t }, n) : (0, o.createPortal)(n, t);
}
