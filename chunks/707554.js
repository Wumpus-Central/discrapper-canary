n.d(t, { $: () => d, F: () => l, H: () => o });
var i = n(477900),
    r = n(582128);
function a(e, t) {
    return { getLevelAndMarkUsed: () => ((t.current = !0), e), consumed: t, level: e };
}
let s = r.createContext(a(2, { current: !1 }));
function l(e) {
    let { component: t, children: n, forceLevel: l } = e,
        o = r.useContext(s),
        d = null != l ? l : o.level,
        c = d;
    (null != t || (null == l && o.consumed.current)) && c++;
    let u = r.useRef(!1),
        _ = r.useRef(!1),
        E = r.useMemo(() => a(d, u), [d]),
        A = r.useMemo(() => a(c, _), [c]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != t ? (0, i.jsx)(s.Provider, { value: E, children: t }) : null,
            (0, i.jsx)(s.Provider, { value: A, children: n }),
        ],
    });
}
function o(e) {
    let t = d(),
        n = `h${Math.min(t, 6)}`;
    return (0, i.jsx)(n, { ...(t > 6 ? { "data-excessive-heading-level": t } : {}), ...e });
}
function d() {
    let { getLevelAndMarkUsed: e } = r.useContext(s);
    return e();
}
s.displayName = "HeadingLevelContext";
