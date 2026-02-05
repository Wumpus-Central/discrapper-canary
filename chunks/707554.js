"use strict";
n.d(t, { $: () => u, F: () => o, H: () => l });
var r = n(627968),
    i = n(64700);
function a(e, t) {
    return { getLevelAndMarkUsed: () => ((t.current = !0), e), consumed: t, level: e };
}
let s = i.createContext(a(2, { current: !1 }));
function o(e) {
    let { component: t, children: n, forceLevel: o } = e,
        l = i.useContext(s),
        u = null != o ? o : l.level,
        c = u;
    (null != t || (null == o && l.consumed.current)) && c++;
    let d = i.useRef(!1),
        _ = i.useRef(!1),
        f = i.useMemo(() => a(u, d), [u]),
        p = i.useMemo(() => a(c, _), [c]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t ? (0, r.jsx)(s.Provider, { value: f, children: t }) : null,
            (0, r.jsx)(s.Provider, { value: p, children: n }),
        ],
    });
}
function l(e) {
    let t = u(),
        n = `h${Math.min(t, 6)}`;
    return (0, r.jsx)(n, { ...(t > 6 ? { "data-excessive-heading-level": t } : {}), ...e });
}
function u() {
    let { getLevelAndMarkUsed: e } = i.useContext(s);
    return e();
}
s.displayName = "HeadingLevelContext";
