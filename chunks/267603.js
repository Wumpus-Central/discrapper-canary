n.d(t, {
    b: () => p,
    z: () => h,
});
var r = n(477831),
    i = n(920081),
    a = n(873505),
    o = n(101091),
    s = n(127096),
    l = n(553357),
    c = n(743994),
    u = n(506523),
    d = n(52759),
    f = n(753125),
    _ = n(647438);
let p = (0, _.createContext)({}),
    h = (0, d.qW)(function (e, t) {
        [e, t] = (0, r.pE)(e, t, p);
        let n = (e = m(e)),
            { isPending: d } = n,
            { buttonProps: h, isPressed: g } = (0, o.U)(e, t),
            { focusProps: E, isFocused: b, isFocusVisible: y } = (0, s.F)(e),
            { hoverProps: O, isHovered: v } = (0, l.X)({
                ...e,
                isDisabled: e.isDisabled || d,
            }),
            I = {
                isHovered: v,
                isPressed: (n.isPressed || g) && !d,
                isFocused: b,
                isFocusVisible: y,
                isDisabled: e.isDisabled || !1,
                isPending: null != d && d,
            },
            T = (0, r.aX)({
                ...e,
                values: I,
                defaultClassName: "react-aria-Button",
            }),
            S = (0, c.Me)(h.id),
            A = (0, c.Me)(),
            C = h["aria-labelledby"];
        d && (C ? (C = `${C} ${A}`) : h["aria-label"] && (C = `${S} ${A}`));
        let N = (0, _.useRef)(d);
        (0, _.useEffect)(() => {
            let e = { "aria-labelledby": C || S };
            !N.current && b && d ? (0, a.xQ)(e, "assertive") : N.current && b && !d && (0, a.xQ)(e, "assertive"),
                (N.current = d);
        }, [d, b, C, S]);
        let R = (0, f.z)(e, { global: !0 });
        return (
            delete R.onClick,
            _.createElement(
                "button",
                {
                    ...(0, u.d)(R, T, h, E, O),
                    type: "submit" === h.type && d ? "button" : h.type,
                    id: S,
                    ref: t,
                    "aria-labelledby": C,
                    slot: e.slot || void 0,
                    "aria-disabled": d ? "true" : h["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": I.isPressed || void 0,
                    "data-hovered": v || void 0,
                    "data-focused": b || void 0,
                    "data-pending": d || void 0,
                    "data-focus-visible": y || void 0,
                },
                _.createElement(i.p.Provider, { value: { id: A } }, T.children),
            )
        );
    });
function m(e) {
    return (
        e.isPending &&
            ((e.onPress = void 0),
            (e.onPressStart = void 0),
            (e.onPressEnd = void 0),
            (e.onPressChange = void 0),
            (e.onPressUp = void 0),
            (e.onKeyDown = void 0),
            (e.onKeyUp = void 0),
            (e.onClick = void 0),
            (e.href = void 0)),
        e
    );
}
