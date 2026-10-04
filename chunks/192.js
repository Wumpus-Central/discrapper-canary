n.d(t, { D: () => u, r: () => s });
var i = n(477900),
    r = n(582128),
    l = n(818348);
let a = r.createContext(null),
    o = { registerManageWidgetButtonRef: () => l.tE, manageFocusOnReorder: l.tE, getManageButtonForWidget: () => null };
function s() {
    return r.useContext(a) ?? o;
}
function u(e) {
    let { children: t } = e,
        n = r.useRef(new Map()),
        l = r.useCallback(
            (e) => (t) => {
                null != t ? n.current.set(e, t) : n.current.delete(e);
            },
            [],
        ),
        o = r.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                t?.focus();
            });
        }, []),
        s = r.useCallback((e) => n.current.get(e) ?? null, []),
        u = r.useMemo(
            () => ({ registerManageWidgetButtonRef: l, manageFocusOnReorder: o, getManageButtonForWidget: s }),
            [l, o, s],
        );
    return (0, i.jsx)(a.Provider, { value: u, children: t });
}
