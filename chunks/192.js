t.d(n, { D: () => c, r: () => d });
var i = t(477900),
    l = t(582128),
    r = t(775602),
    a = t(818348);
let s = l.createContext(null),
    o = {
        registerManageWidgetButtonRef: () => a.tE,
        manageFocusOnReorder: a.tE,
        getManageButtonForWidget: () => null,
        focusAddedWidget: a.tE,
    };
function d() {
    return l.useContext(s) ?? o;
}
function c(e) {
    let { children: n } = e,
        t = l.useRef(new Map()),
        a = l.useRef(new Map()),
        o = l.useCallback(
            (e, n) => (i) => {
                null != i ? (t.current.set(e, i), a.current.set(n, i)) : (t.current.delete(e), a.current.delete(n));
            },
            [],
        ),
        d = l.useCallback((e) => {
            requestAnimationFrame(() => {
                let n = t.current.get(e);
                n?.focus();
            });
        }, []),
        c = l.useCallback((e) => t.current.get(e) ?? null, []),
        u = l.useCallback((e) => {
            r.Ay.keyboardModeEnabled &&
                requestAnimationFrame(() => {
                    let n = a.current.get(e);
                    null != n && document.activeElement?.contains(n) && n.focus();
                });
        }, []),
        g = l.useMemo(
            () => ({
                registerManageWidgetButtonRef: o,
                manageFocusOnReorder: d,
                getManageButtonForWidget: c,
                focusAddedWidget: u,
            }),
            [o, d, c, u],
        );
    return (0, i.jsx)(s.Provider, { value: g, children: n });
}
