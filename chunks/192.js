n.d(t, {
    D: () => c,
    r: () => o,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(818348);
let a = l.createContext(null),
    s = {
        registerManageWidgetButtonRef: () => i.tE,
        manageFocusOnReorder: i.tE,
        getManageButtonForWidget: () => null,
    };
function o() {
    let e = l.useContext(a);
    return null != e ? e : s;
}
function c(e) {
    let { children: t } = e,
        n = l.useRef(new Map()),
        i = l.useCallback(
            (e) => (t) => {
                null != t ? n.current.set(e, t) : n.current.delete(e);
            },
            [],
        ),
        s = l.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                null == t || t.focus();
            });
        }, []),
        o = l.useCallback((e) => {
            var t;
            return null != (t = n.current.get(e)) ? t : null;
        }, []),
        c = l.useMemo(
            () => ({
                registerManageWidgetButtonRef: i,
                manageFocusOnReorder: s,
                getManageButtonForWidget: o,
            }),
            [i, s, o],
        );
    return (0, r.jsx)(a.Provider, {
        value: c,
        children: t,
    });
}
