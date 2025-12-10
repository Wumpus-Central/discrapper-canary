n.d(t, {
    FE: () => C,
    G5: () => v,
    IW: () => S,
    yF: () => _,
});
var r = n(557635),
    i = n(242315),
    a = n(632765),
    o = n(176159),
    s = n(24156),
    l = n(497448),
    c = n(473749),
    u = n(112683),
    d = n(525405);
let f = (0, c.createContext)(!1),
    p = (0, c.createContext)(null);
function _(e) {
    if ((0, c.useContext)(p)) return e.content;
    let { collection: t, document: n } = E(e.createCollection);
    return c.createElement(
        c.Fragment,
        null,
        c.createElement(o._G, null, c.createElement(p.Provider, { value: n }, e.content)),
        c.createElement(m, {
            render: e.children,
            collection: t,
        }),
    );
}
function m({ collection: e, render: t }) {
    return t(e);
}
function h(e, t, n) {
    let r = (0, u.Av)(),
        i = (0, c.useRef)(r);
    i.current = r;
    let a = (0, c.useCallback)(() => (i.current ? n() : t()), [t, n]);
    return (0, d.useSyncExternalStore)(e, a);
}
let g = "function" == typeof c.useSyncExternalStore ? c.useSyncExternalStore : h;
function E(e) {
    let [t] = (0, c.useState)(() => new (0, i.BB)((null == e ? void 0 : e()) || new (0, r.Mi)()));
    return {
        collection: g(
            (0, c.useCallback)((e) => t.subscribe(e), [t]),
            (0, c.useCallback)(() => {
                let e = t.getCollection();
                return t.isSSR && t.resetAfterSSR(), e;
            }, [t]),
            (0, c.useCallback)(() => ((t.isSSR = !0), t.getCollection()), [t]),
        ),
        document: t,
    };
}
let b = (0, c.createContext)(null);
function y(e) {
    var t;
    return ((t = class extends r.S3 {}).type = e), t;
}
function O(e, t, n, r, i, a) {
    "string" == typeof e && (e = y(e));
    let o = (0, c.useCallback)(
            (i) => {
                null == i || i.setProps(t, n, e, r, a);
            },
            [t, n, r, a, e],
        ),
        s = (0, c.useContext)(b);
    if (s) {
        let o = s.ownerDocument.nodesByProps.get(t);
        return (
            o ||
                ((o = s.ownerDocument.createElement(e.type)).setProps(t, n, e, r, a),
                s.appendChild(o),
                s.ownerDocument.updateCollection(),
                s.ownerDocument.nodesByProps.set(t, o)),
            i ? c.createElement(b.Provider, { value: o }, i) : null
        );
    }
    return c.createElement(e.type, { ref: o }, i);
}
function v(e, t) {
    let n = ({ node: e }) => t(e.props, e.props.ref, e),
        r = (0, c.forwardRef)((r, i) => {
            let a = (0, c.useContext)(l.RG);
            if (!(0, c.useContext)(f)) {
                if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
                return t(r, i);
            }
            return O(e, r, i, "children" in r ? r.children : null, null, (e) =>
                c.createElement(l.RG.Provider, { value: a }, c.createElement(n, { node: e })),
            );
        });
    return (r.displayName = t.name), r;
}
function S(e, t, n = I) {
    let r = ({ node: e }) => t(e.props, e.props.ref, e),
        i = (0, c.forwardRef)((t, i) => {
            var a;
            let o = n(t);
            return null != (a = O(e, t, i, null, o, (e) => c.createElement(r, { node: e })))
                ? a
                : c.createElement(c.Fragment, null);
        });
    return (i.displayName = t.name), i;
}
function I(e) {
    return (0, a.H)({
        ...e,
        addIdAndValue: !0,
    });
}
let T = (0, c.createContext)(null);
function C(e) {
    let t = (0, c.useContext)(T),
        n = ((null == t ? void 0 : t.dependencies) || []).concat(e.dependencies),
        r = e.idScope || (null == t ? void 0 : t.idScope),
        i = I({
            ...e,
            idScope: r,
            dependencies: n,
        });
    return (
        (0, c.useContext)(p) && (i = c.createElement(A, null, i)),
        (t = (0, c.useMemo)(
            () => ({
                dependencies: n,
                idScope: r,
            }),
            [r, ...n],
        )),
        c.createElement(T.Provider, { value: t }, i)
    );
}
function A({ children: e }) {
    let t = (0, c.useContext)(p),
        n = (0, c.useMemo)(
            () => c.createElement(p.Provider, { value: null }, c.createElement(f.Provider, { value: !0 }, e)),
            [e],
        );
    return (0, u.Av)() ? c.createElement(b.Provider, { value: t }, n) : (0, s.createPortal)(n, t);
}
