n.d(t, { D: () => o, r: () => d });
var l = n(627968),
    a = n(64700),
    i = n(818348);
let r = a.createContext(null),
    s = { registerManageWidgetButtonRef: () => i.tE, manageFocusOnReorder: i.tE, getManageButtonForWidget: () => null };
function d() {
    return a.useContext(r) ?? s;
}
function o(e) {
    let { children: t } = e,
        n = a.useRef(new Map()),
        i = a.useCallback(
            (e) => (t) => {
                null != t ? n.current.set(e, t) : n.current.delete(e);
            },
            [],
        ),
        s = a.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                t?.focus();
            });
        }, []),
        d = a.useCallback((e) => n.current.get(e) ?? null, []),
        o = a.useMemo(
            () => ({ registerManageWidgetButtonRef: i, manageFocusOnReorder: s, getManageButtonForWidget: d }),
            [i, s, d],
        );
    return (0, l.jsx)(r.Provider, { value: o, children: t });
}
