n.d(t, {
    b: () => h,
    z: () => m,
});
var r = n(681897),
    i = n(108025),
    a = n(873505),
    o = n(660187),
    s = n(264195),
    l = n(731602),
    c = n(795074),
    u = n(506364),
    d = n(677137),
    f = n(436242),
    _ = n(647438);
let p = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]),
    h = (0, _.createContext)({}),
    m = (0, d.qW)(function (e, t) {
        [e, t] = (0, r.pE)(e, t, h);
        let n = (e = g(e)),
            { isPending: d } = n,
            { buttonProps: m, isPressed: E } = (0, o.U)(e, t),
            { focusProps: b, isFocused: y, isFocusVisible: O } = (0, s.F)(e),
            { hoverProps: v, isHovered: I } = (0, l.X)({
                ...e,
                isDisabled: e.isDisabled || d,
            }),
            T = {
                isHovered: I,
                isPressed: (n.isPressed || E) && !d,
                isFocused: y,
                isFocusVisible: O,
                isDisabled: e.isDisabled || !1,
                isPending: null != d && d,
            },
            S = (0, r.aX)({
                ...e,
                values: T,
                defaultClassName: "react-aria-Button",
            }),
            A = (0, c.Me)(m.id),
            C = (0, c.Me)(),
            N = m["aria-labelledby"];
        d && (N ? (N = `${N} ${C}`) : m["aria-label"] && (N = `${A} ${C}`));
        let R = (0, _.useRef)(d);
        return (
            (0, _.useEffect)(() => {
                let e = { "aria-labelledby": N || A };
                !R.current && y && d ? (0, a.xQ)(e, "assertive") : R.current && y && !d && (0, a.xQ)(e, "assertive"),
                    (R.current = d);
            }, [d, y, N, A]),
            _.createElement(
                "button",
                {
                    ...(0, f.z)(e, { propNames: p }),
                    ...(0, u.d)(m, b, v),
                    ...S,
                    type: "submit" === m.type && d ? "button" : m.type,
                    id: A,
                    ref: t,
                    "aria-labelledby": N,
                    slot: e.slot || void 0,
                    "aria-disabled": d ? "true" : m["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": T.isPressed || void 0,
                    "data-hovered": I || void 0,
                    "data-focused": y || void 0,
                    "data-pending": d || void 0,
                    "data-focus-visible": O || void 0,
                },
                _.createElement(i.p.Provider, { value: { id: C } }, S.children),
            )
        );
    });
function g(e) {
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
