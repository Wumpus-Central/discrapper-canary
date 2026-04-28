t.d(l, { D: () => d, r: () => o });
var s = t(627968),
    i = t(64700),
    n = t(818348);
let a = i.createContext(null),
    r = { registerManageWidgetButtonRef: () => n.tE, manageFocusOnReorder: n.tE, getManageButtonForWidget: () => null };
function o() {
    return i.useContext(a) ?? r;
}
function d(e) {
    let { children: l } = e,
        t = i.useRef(new Map()),
        n = i.useCallback(
            (e) => (l) => {
                null != l ? t.current.set(e, l) : t.current.delete(e);
            },
            [],
        ),
        r = i.useCallback((e) => {
            requestAnimationFrame(() => {
                let l = t.current.get(e);
                l?.focus();
            });
        }, []),
        o = i.useCallback((e) => t.current.get(e) ?? null, []),
        d = i.useMemo(
            () => ({ registerManageWidgetButtonRef: n, manageFocusOnReorder: r, getManageButtonForWidget: o }),
            [n, r, o],
        );
    return (0, s.jsx)(a.Provider, { value: d, children: l });
}
