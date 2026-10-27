n.d(t, { D: () => d, r: () => c });
var i = n(477900),
    r = n(582128),
    l = n(775602),
    a = n(818348);
let s = r.createContext(null),
    o = {
        registerManageWidgetButtonRef: () => a.tE,
        manageFocusOnReorder: a.tE,
        getManageButtonForWidget: () => null,
        focusAddedWidget: a.tE,
    };
function c() {
    return r.useContext(s) ?? o;
}
function d(e) {
    let { children: t } = e,
        n = r.useRef(new Map()),
        a = r.useRef(new Map()),
        o = r.useCallback(
            (e, t) => (i) => {
                null != i ? (n.current.set(e, i), a.current.set(t, i)) : (n.current.delete(e), a.current.delete(t));
            },
            [],
        ),
        c = r.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                t?.focus();
            });
        }, []),
        d = r.useCallback((e) => n.current.get(e) ?? null, []),
        u = r.useCallback((e) => {
            l.Ay.keyboardModeEnabled &&
                requestAnimationFrame(() => {
                    let t = a.current.get(e);
                    null != t && document.activeElement?.contains(t) && t.focus();
                });
        }, []),
        g = r.useMemo(
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
