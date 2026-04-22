"use strict";
n.d(t, { D: () => o, r: () => d });
var a = n(627968),
    i = n(64700),
    r = n(818348);
let l = i.createContext(null),
    s = { registerManageWidgetButtonRef: () => r.tE, manageFocusOnReorder: r.tE, getManageButtonForWidget: () => null };
function d() {
    return i.useContext(l) ?? s;
}
function o(e) {
    let { children: t } = e,
        n = i.useRef(new Map()),
        r = i.useCallback(
            (e) => (t) => {
                null != t ? n.current.set(e, t) : n.current.delete(e);
            },
            [],
        ),
        s = i.useCallback((e) => {
            requestAnimationFrame(() => {
                let t = n.current.get(e);
                t?.focus();
            });
        }, []),
        d = i.useCallback((e) => n.current.get(e) ?? null, []),
        o = i.useMemo(
            () => ({ registerManageWidgetButtonRef: r, manageFocusOnReorder: s, getManageButtonForWidget: d }),
            [r, s, d],
        );
    return (0, a.jsx)(l.Provider, { value: o, children: t });
}
