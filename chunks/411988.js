n.d(t, {
    FE: () => S,
    G5: () => v,
    yF: () => h,
});
var r = n(12258),
    i = n(696595),
    a = n(898534),
    o = n(677137),
    s = n(603113),
    l = n(312238),
    c = n(647438),
    u = n(145937),
    d = n(436283),
    f = n(13826);
let _ = (0, c.createContext)(!1),
    p = (0, c.createContext)(null);
function h(e) {
    if ((0, c.useContext)(p)) return e.content;
    let { collection: t, document: n } = b(e.createCollection);
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
function g(e, t, n) {
    let r = (0, u.Av)(),
        i = (0, c.useRef)(r);
    i.current = r;
    let a = (0, c.useCallback)(() => (i.current ? n() : t()), [t, n]);
    return (0, f.useSyncExternalStore)(e, a);
}
let E = "function" == typeof c.useSyncExternalStore ? c.useSyncExternalStore : g;
function b(e) {
    let [t] = (0, c.useState)(() => new (0, i.BB)((null == e ? void 0 : e()) || new (0, r.M)())),
        n = E(
            (0, c.useCallback)((e) => t.subscribe(e), [t]),
            (0, c.useCallback)(() => {
                let e = t.getCollection();
                return t.isSSR && t.resetAfterSSR(), e;
            }, [t]),
            (0, c.useCallback)(() => ((t.isSSR = !0), t.getCollection()), [t]),
        );
    return (
        (0, d.b)(
            () => (
                (t.isMounted = !0),
                () => {
                    t.isMounted = !1;
                }
            ),
            [t],
        ),
        {
            collection: n,
            document: t,
        }
    );
}
let y = (0, c.createContext)(null);
function O(e, t, n, r, i, a) {
    let o = (0, c.useCallback)(
            (e) => {
                null == e || e.setProps(t, n, r, a);
            },
            [t, n, r, a],
        ),
        s = (0, c.useContext)(y);
    if (s) {
        let o = s.ownerDocument.nodesByProps.get(t);
        return (
            o ||
                ((o = s.ownerDocument.createElement(e)).setProps(t, n, r, a),
                s.appendChild(o),
                s.ownerDocument.updateCollection(),
                s.ownerDocument.nodesByProps.set(t, o)),
            i ? c.createElement(y.Provider, { value: o }, i) : null
        );
    }
    return c.createElement(e, { ref: o }, i);
}
function v(e, t) {
    let n = ({ node: e }) => t(e.props, e.props.ref, e),
        r = (0, c.forwardRef)((r, i) => {
            let a = (0, c.useContext)(l.RG);
            if (!(0, c.useContext)(_)) {
                if (t.length >= 3) throw Error(t.name + " cannot be rendered outside a collection.");
                return t(r, i);
            }
            return O(e, r, i, "children" in r ? r.children : null, null, (e) =>
                c.createElement(l.RG.Provider, { value: a }, c.createElement(n, { node: e })),
            );
        });
    return (r.displayName = t.name), r;
}
function I(e) {
    return (0, a.H)({
        ...e,
        addIdAndValue: !0,
    });
}
let T = (0, c.createContext)(null);
function S(e) {
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
            () => c.createElement(p.Provider, { value: null }, c.createElement(_.Provider, { value: !0 }, e)),
            [e],
        );
    return (0, u.Av)() ? c.createElement(y.Provider, { value: t }, n) : (0, s.createPortal)(n, t);
}
