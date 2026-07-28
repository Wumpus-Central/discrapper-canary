n.d(t, { D: () => d, r: () => o });
var i = n(477900),
    l = n(582128),
    s = n(818348);
let a = l.createContext(null),
    r = { registerManageWidgetButtonRef: () => s.tE, manageFocusOnReorder: s.tE, getManageButtonForWidget: () => null };
function o() {
    return l.useContext(a) ?? r;
}
function d(e) {
    let { children: t } = e,
        n = l.useRef(new Map()),
        s = l.useCallback(
            (e) => (t) => {
                null != t ? n.current.set(e, t) : n.current.delete(e);
            },
            [],
        ),
        r = l.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                t?.focus();
            });
        }, []),
        o = l.useCallback((e) => n.current.get(e) ?? null, []),
        d = l.useMemo(
            () => ({ registerManageWidgetButtonRef: s, manageFocusOnReorder: r, getManageButtonForWidget: o }),
            [s, r, o],
        );
    return (0, i.jsx)(a.Provider, { value: d, children: t });
}
