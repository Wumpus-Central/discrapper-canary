"use strict";
n.d(t, { $: () => h, k: () => p });
var r = n(825913),
    i = n(646066),
    a = n(217512),
    s = n(284054),
    o = n(498430),
    l = n(967158),
    u = n(723906),
    c = n(803082),
    d = n(564004),
    _ = n(290424),
    f = n(64700);
let p = (0, f.createContext)({}),
    h = (0, d.U7)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, p);
        let n = e,
            { isPending: d } = n,
            { buttonProps: h, isPressed: g } = (0, s.s)(e, t);
        h = m(h, d);
        let { focusProps: E, isFocused: A, isFocusVisible: I } = (0, o.o)(e),
            { hoverProps: T, isHovered: y } = (0, l.M)({ ...e, isDisabled: e.isDisabled || d }),
            S = {
                isHovered: y,
                isPressed: (n.isPressed || g) && !d,
                isFocused: A,
                isFocusVisible: I,
                isDisabled: e.isDisabled || !1,
                isPending: null != d && d,
            },
            v = (0, r.Sl)({ ...e, values: S, defaultClassName: "react-aria-Button" }),
            C = (0, u.Bi)(h.id),
            b = (0, u.Bi)(),
            N = h["aria-labelledby"];
        d && (N ? (N = `${N} ${b}`) : h["aria-label"] && (N = `${C} ${b}`));
        let R = (0, f.useRef)(d);
        (0, f.useEffect)(() => {
            let e = { "aria-labelledby": N || C };
            !R.current && A && d ? (0, a.iP)(e, "assertive") : R.current && A && !d && (0, a.iP)(e, "assertive"),
                (R.current = d);
        }, [d, A, N, C]);
        let O = (0, _.$)(e, { global: !0 });
        return (
            delete O.onClick,
            f.createElement(
                "button",
                {
                    ...(0, c.v)(O, v, h, E, T),
                    type: "submit" === h.type && d ? "button" : h.type,
                    id: C,
                    ref: t,
                    "aria-labelledby": N,
                    slot: e.slot || void 0,
                    "aria-disabled": d ? "true" : h["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": S.isPressed || void 0,
                    "data-hovered": y || void 0,
                    "data-focused": A || void 0,
                    "data-pending": d || void 0,
                    "data-focus-visible": I || void 0,
                },
                f.createElement(i.K.Provider, { value: { id: b } }, v.children),
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
