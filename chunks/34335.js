n.d(t, {
    K: () => s,
    j: () => c,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(231338);
let l = i.createContext(null),
    o = {
        registerManageWidgetButtonRef: () => a.dG,
        manageFocusOnReorder: a.dG,
        getManageButtonForWidget: () => null,
    };
function c() {
    let e = i.useContext(l);
    return null != e ? e : o;
}
function s(e) {
    let { children: t } = e,
        n = i.useRef(new Map()),
        a = i.useCallback(
            (e) => (t) => {
                null != t ? n.current.set(e, t) : n.current.delete(e);
            },
            [],
        ),
        o = i.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                null == t || t.focus();
            });
        }, []),
        c = i.useCallback((e) => {
            var t;
            return null != (t = n.current.get(e)) ? t : null;
        }, []),
        s = i.useMemo(
            () => ({
                registerManageWidgetButtonRef: a,
                manageFocusOnReorder: o,
                getManageButtonForWidget: c,
            }),
            [a, o, c],
        );
    return (0, r.jsx)(l.Provider, {
        value: s,
        children: t,
    });
}
