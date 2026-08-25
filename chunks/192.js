n.d(t, { D: () => c, r: () => o });
var i = n(477900),
    r = n(582128),
    l = n(818348);
let a = r.createContext(null),
    s = { registerManageWidgetButtonRef: () => l.tE, manageFocusOnReorder: l.tE, getManageButtonForWidget: () => null };
function o() {
    return r.useContext(a) ?? s;
}
function c(e) {
    let { children: t } = e,
        n = r.useRef(new Map()),
        l = r.useCallback(
            (e) => (t) => {
                null != t ? n.current.set(e, t) : n.current.delete(e);
            },
            [],
        ),
        s = r.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                t?.focus();
            });
        }, []),
        o = r.useCallback((e) => n.current.get(e) ?? null, []),
        c = r.useMemo(
            () => ({ registerManageWidgetButtonRef: l, manageFocusOnReorder: s, getManageButtonForWidget: o }),
            [l, s, o],
        );
    return (0, i.jsx)(a.Provider, { value: c, children: t });
}
