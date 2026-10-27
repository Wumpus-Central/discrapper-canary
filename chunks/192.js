n.d(t, { D: () => d, r: () => c });
var i = n(477900),
    l = n(582128),
    r = n(775602),
    a = n(818348);
let s = l.createContext(null),
    o = {
        registerManageWidgetButtonRef: () => a.tE,
        manageFocusOnReorder: a.tE,
        getManageButtonForWidget: () => null,
        focusAddedWidget: a.tE,
    };
function c() {
    return l.useContext(s) ?? o;
}
function d(e) {
    let { children: t } = e,
        n = l.useRef(new Map()),
        a = l.useRef(new Map()),
        o = l.useCallback(
            (e, t) => (i) => {
                null != i ? (n.current.set(e, i), a.current.set(t, i)) : (n.current.delete(e), a.current.delete(t));
            },
            [],
        ),
        c = l.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                t?.focus();
            });
        }, []),
        d = l.useCallback((e) => n.current.get(e) ?? null, []),
        u = l.useCallback((e) => {
            r.Ay.keyboardModeEnabled &&
                requestAnimationFrame(() => {
                    let t = a.current.get(e);
                    null != t && document.activeElement?.contains(t) && t.focus();
                });
        }, []),
        g = l.useMemo(
            () => ({
                registerManageWidgetButtonRef: o,
                manageFocusOnReorder: c,
                getManageButtonForWidget: d,
                focusAddedWidget: u,
            }),
            [o, c, d, u],
        );
    return (0, i.jsx)(s.Provider, { value: g, children: t });
}
