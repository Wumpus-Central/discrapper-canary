n.d(t, { D: () => s, r: () => u });
var i = n(477900),
    r = n(582128),
    l = n(818348);
let a = r.createContext(null),
    o = { registerManageWidgetButtonRef: () => l.tE, manageFocusOnReorder: l.tE, getManageButtonForWidget: () => null };
function u() {
    return r.useContext(a) ?? o;
}
function s(e) {
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
        u = r.useCallback((e) => n.current.get(e) ?? null, []),
        s = r.useMemo(
            () => ({ registerManageWidgetButtonRef: l, manageFocusOnReorder: o, getManageButtonForWidget: u }),
            [l, o, u],
        );
    return (0, i.jsx)(a.Provider, { value: s, children: t });
}
