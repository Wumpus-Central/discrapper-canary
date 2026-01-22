n.d(t, {
    $: () => h,
    k: () => _,
});
var r = n(825913),
    i = n(646066),
    a = n(217512),
    s = n(284054),
    o = n(498430),
    l = n(967158),
    c = n(723906),
    u = n(803082),
    d = n(564004),
    f = n(290424),
    p = n(64700);
let _ = (0, p.createContext)({}),
    h = (0, d.U7)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, _);
        let n = e,
            { isPending: d } = n,
            { buttonProps: h, isPressed: g } = (0, s.s)(e, t);
        h = m(h, d);
        let { focusProps: E, isFocused: b, isFocusVisible: y } = (0, o.o)(e),
            { hoverProps: O, isHovered: A } = (0, l.M)({
                ...e,
                isDisabled: e.isDisabled || d,
            }),
            v = {
                isHovered: A,
                isPressed: (n.isPressed || g) && !d,
                isFocused: b,
                isFocusVisible: y,
                isDisabled: e.isDisabled || !1,
                isPending: null != d && d,
            },
            S = (0, r.Sl)({
                ...e,
                values: v,
                defaultClassName: "react-aria-Button",
            }),
            I = (0, c.Bi)(h.id),
            T = (0, c.Bi)(),
            C = h["aria-labelledby"];
        d && (C ? (C = `${C} ${T}`) : h["aria-label"] && (C = `${I} ${T}`));
        let N = (0, p.useRef)(d);
        (0, p.useEffect)(() => {
            let e = { "aria-labelledby": C || I };
            !N.current && b && d ? (0, a.iP)(e, "assertive") : N.current && b && !d && (0, a.iP)(e, "assertive"),
                (N.current = d);
        }, [d, b, C, I]);
        let R = (0, f.$)(e, { global: !0 });
        return (
            delete R.onClick,
            p.createElement(
                "button",
                {
                    ...(0, u.v)(R, S, h, E, O),
                    type: "submit" === h.type && d ? "button" : h.type,
                    id: I,
                    ref: t,
                    "aria-labelledby": C,
                    slot: e.slot || void 0,
                    "aria-disabled": d ? "true" : h["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": v.isPressed || void 0,
                    "data-hovered": A || void 0,
                    "data-focused": b || void 0,
                    "data-pending": d || void 0,
                    "data-focus-visible": y || void 0,
                },
                p.createElement(i.K.Provider, { value: { id: T } }, S.children),
            )
        );
    });
function m(e, t) {
    if (t) {
        for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = void 0);
        (e.href = void 0), (e.target = void 0);
    }
    return e;
}
