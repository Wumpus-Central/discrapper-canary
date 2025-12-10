n.d(t, {
    b: () => _,
    z: () => m,
});
var r = n(595707),
    i = n(582465),
    a = n(873505),
    o = n(288783),
    s = n(984940),
    l = n(69771),
    c = n(752689),
    u = n(158821),
    d = n(176159),
    f = n(880016),
    p = n(473749);
let _ = (0, p.createContext)({}),
    m = (0, d.qW)(function (e, t) {
        [e, t] = (0, r.pE)(e, t, _);
        let n = e,
            { isPending: d } = n,
            { buttonProps: m, isPressed: g } = (0, o.U)(e, t);
        m = h(m, d);
        let { focusProps: E, isFocused: b, isFocusVisible: y } = (0, s.F)(e),
            { hoverProps: O, isHovered: v } = (0, l.X)({
                ...e,
                isDisabled: e.isDisabled || d,
            }),
            S = {
                isHovered: v,
                isPressed: (n.isPressed || g) && !d,
                isFocused: b,
                isFocusVisible: y,
                isDisabled: e.isDisabled || !1,
                isPending: null != d && d,
            },
            I = (0, r.aX)({
                ...e,
                values: S,
                defaultClassName: "react-aria-Button",
            }),
            T = (0, c.Me)(m.id),
            C = (0, c.Me)(),
            A = m["aria-labelledby"];
        d && (A ? (A = `${A} ${C}`) : m["aria-label"] && (A = `${T} ${C}`));
        let N = (0, p.useRef)(d);
        (0, p.useEffect)(() => {
            let e = { "aria-labelledby": A || T };
            !N.current && b && d ? (0, a.xQ)(e, "assertive") : N.current && b && !d && (0, a.xQ)(e, "assertive"),
                (N.current = d);
        }, [d, b, A, T]);
        let P = (0, f.z)(e, { global: !0 });
        return (
            delete P.onClick,
            p.createElement(
                "button",
                {
                    ...(0, u.d)(P, I, m, E, O),
                    type: "submit" === m.type && d ? "button" : m.type,
                    id: T,
                    ref: t,
                    "aria-labelledby": A,
                    slot: e.slot || void 0,
                    "aria-disabled": d ? "true" : m["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": S.isPressed || void 0,
                    "data-hovered": v || void 0,
                    "data-focused": b || void 0,
                    "data-pending": d || void 0,
                    "data-focus-visible": y || void 0,
                },
                p.createElement(i.p.Provider, { value: { id: C } }, I.children),
            )
        );
    });
function h(e, t) {
    if (t) {
        for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = void 0);
        (e.href = void 0), (e.target = void 0);
    }
    return e;
}
