"use strict";
n.d(t, { $: () => u, F: () => o, H: () => l });
var i = n(627968),
    r = n(64700);
function s(e, t) {
    return { getLevelAndMarkUsed: () => ((t.current = !0), e), consumed: t, level: e };
}
let a = r.createContext(s(2, { current: !1 }));
function o(e) {
    let { component: t, children: n, forceLevel: o } = e,
        l = r.useContext(a),
        u = null != o ? o : l.level,
        c = u;
    (null != t || (null == o && l.consumed.current)) && c++;
    let d = r.useRef(!1),
        _ = r.useRef(!1),
        h = r.useMemo(() => s(u, d), [u]),
        f = r.useMemo(() => s(c, _), [c]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t ? (0, i.jsx)(a.Provider, { value: h, children: t }) : null,
            (0, i.jsx)(a.Provider, { value: f, children: n }),
        ],
    });
}
function l(e) {
    let t = u(),
        n = `h${Math.min(t, 6)}`;
    return (0, i.jsx)(n, { ...(t > 6 ? { "data-excessive-heading-level": t } : {}), ...e });
}
function u() {
    let { getLevelAndMarkUsed: e } = r.useContext(a);
    return e();
}
a.displayName = "HeadingLevelContext";
