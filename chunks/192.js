"use strict";
n.d(t, { D: () => c, r: () => o });
var a = n(627968),
    r = n(64700),
    i = n(818348);
let l = r.createContext(null),
    s = { registerManageWidgetButtonRef: () => i.tE, manageFocusOnReorder: i.tE, getManageButtonForWidget: () => null };
function o() {
    return r.useContext(l) ?? s;
}
function c(e) {
    let { children: t } = e,
        n = r.useRef(new Map()),
        i = r.useCallback(
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
            () => ({ registerManageWidgetButtonRef: i, manageFocusOnReorder: s, getManageButtonForWidget: o }),
            [i, s, o],
        );
    return (0, a.jsx)(l.Provider, { value: c, children: t });
}
