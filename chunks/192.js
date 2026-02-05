n.d(t, { D: () => d, r: () => o });
var i = n(627968),
    l = n(64700),
    a = n(818348);
let r = l.createContext(null),
    s = { registerManageWidgetButtonRef: () => a.tE, manageFocusOnReorder: a.tE, getManageButtonForWidget: () => null };
function o() {
    return l.useContext(r) ?? s;
}
function d(e) {
    let { children: t } = e,
        n = l.useRef(new Map()),
        a = l.useCallback(
            (e) => (t) => {
                null != t ? n.current.set(e, t) : n.current.delete(e);
            },
            [],
        ),
        s = l.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                t?.focus();
            });
        }, []),
        o = l.useCallback((e) => n.current.get(e) ?? null, []),
        d = l.useMemo(
            () => ({ registerManageWidgetButtonRef: a, manageFocusOnReorder: s, getManageButtonForWidget: o }),
            [a, s, o],
        );
    return (0, i.jsx)(r.Provider, { value: d, children: t });
}
