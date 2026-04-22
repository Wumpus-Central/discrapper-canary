"use strict";
n.d(t, { GQ: () => E, KU: () => A, pM: () => y, yq: () => I });
var r = n(178375),
    i = n(392223),
    s = n(183590),
    a = n(564004),
    o = n(340287),
    l = n(946020),
    u = n(64700),
    d = n(341221),
    c = n(524519);
let _ = (0, u.createContext)(!1),
    f = (0, u.createContext)(null);
function E(e) {
    if ((0, u.useContext)(f)) return e.content;
    let { collection: t, document: n } = (function (e) {
        let [t] = (0, u.useState)(() => new (0, i.yo)((null == e ? void 0 : e()) || new (0, r.Wk)()));
        return {
            collection: p(
                (0, u.useCallback)((e) => t.subscribe(e), [t]),
                (0, u.useCallback)(() => {
                    let e = t.getCollection();
                    return t.isSSR && t.resetAfterSSR(), e;
                }, [t]),
                (0, u.useCallback)(() => ((t.isSSR = !0), t.getCollection()), [t]),
            ),
            document: t,
        };
    })(e.createCollection);
    return u.createElement(
        u.Fragment,
        null,
        u.createElement(a.jZ, null, u.createElement(f.Provider, { value: n }, e.content)),
        u.createElement(h, { render: e.children, collection: t }),
    );
}
function h({ collection: e, render: t }) {
    return t(e);
}
let p =
        "function" == typeof u.useSyncExternalStore
            ? u.useSyncExternalStore
            : function (e, t, n) {
                  let r = (0, d.wR)(),
                      i = (0, u.useRef)(r);
                  i.current = r;
                  let s = (0, u.useCallback)(() => (i.current ? n() : t()), [t, n]);
                  return (0, c.useSyncExternalStore)(e, s);
              },
    m = (0, u.createContext)(null);
function g(e, t, n, i, s, a) {
    var o, l;
    "string" == typeof e && ((o = e), ((l = class extends r.Pt {}).type = o), (e = l));
    let d = (0, u.useCallback)(
            (r) => {
                null == r || r.setProps(t, n, e, i, a);
            },
            [t, n, i, a, e],
        ),
        c = (0, u.useContext)(m);
    if (c) {
        let r = c.ownerDocument.nodesByProps.get(t);
        return (
            r ||
                ((r = c.ownerDocument.createElement(e.type)).setProps(t, n, e, i, a),
                c.appendChild(r),
                c.ownerDocument.updateCollection(),
                c.ownerDocument.nodesByProps.set(t, r)),
            s ? u.createElement(m.Provider, { value: r }, s) : null
        );
    }
    return u.createElement(e.type, { ref: d }, s);
}
function A(e, t) {
    let n = ({ node: e }) => t(e.props, e.props.ref, e),
        r = (0, u.forwardRef)((r, i) => {
            let s = (0, u.useContext)(l.gY);
            if (!(0, u.useContext)(_)) {
                if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
                return t(r, i);
            }
            return g(e, r, i, "children" in r ? r.children : null, null, (e) =>
                u.createElement(l.gY.Provider, { value: s }, u.createElement(n, { node: e })),
            );
        });
    return (r.displayName = t.name), r;
}
function I(e, t, n = T) {
    let r = ({ node: e }) => t(e.props, e.props.ref, e),
        i = (0, u.forwardRef)((t, i) => {
            var s;
            let a = n(t);
            return null != (s = g(e, t, i, null, a, (e) => u.createElement(r, { node: e })))
                ? s
                : u.createElement(u.Fragment, null);
        });
    return (i.displayName = t.name), i;
}
function T(e) {
    return (0, s.p)({ ...e, addIdAndValue: !0 });
}
let S = (0, u.createContext)(null);
function y(e) {
    let t = (0, u.useContext)(S),
        n = ((null == t ? void 0 : t.dependencies) || []).concat(e.dependencies),
        r = e.idScope || (null == t ? void 0 : t.idScope),
        i = T({ ...e, idScope: r, dependencies: n });
    return (
        (0, u.useContext)(f) && (i = u.createElement(N, null, i)),
        (t = (0, u.useMemo)(() => ({ dependencies: n, idScope: r }), [r, ...n])),
        u.createElement(S.Provider, { value: t }, i)
    );
}
function N({ children: e }) {
    let t = (0, u.useContext)(f),
        n = (0, u.useMemo)(
            () => u.createElement(f.Provider, { value: null }, u.createElement(_.Provider, { value: !0 }, e)),
            [e],
        );
    return (0, d.wR)() ? u.createElement(m.Provider, { value: t }, n) : (0, o.createPortal)(n, t);
}
