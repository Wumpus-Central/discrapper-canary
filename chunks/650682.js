"use strict";
n.d(t, { $: () => h, k: () => p });
var r = n(825913),
    i = n(646066),
    s = n(217512),
    a = n(284054),
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
            { buttonProps: h, isPressed: E } = (0, a.s)(e, t);
        h = (function (e, t) {
            if (t) {
                for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = void 0);
                (e.href = void 0), (e.target = void 0);
            }
            return e;
        })(h, d);
        let { focusProps: m, isFocused: g, isFocusVisible: A } = (0, o.o)(e),
            { hoverProps: I, isHovered: T } = (0, l.M)({ ...e, isDisabled: e.isDisabled || d }),
            S = {
                isHovered: T,
                isPressed: (n.isPressed || E) && !d,
                isFocused: g,
                isFocusVisible: A,
                isDisabled: e.isDisabled || !1,
                isPending: null != d && d,
            },
            y = (0, r.Sl)({ ...e, values: S, defaultClassName: "react-aria-Button" }),
            N = (0, u.Bi)(h.id),
            v = (0, u.Bi)(),
            C = h["aria-labelledby"];
        d && (C ? (C = `${C} ${v}`) : h["aria-label"] && (C = `${N} ${v}`));
        let O = (0, f.useRef)(d);
        (0, f.useEffect)(() => {
            let e = { "aria-labelledby": C || N };
            !O.current && g && d ? (0, s.iP)(e, "assertive") : O.current && g && !d && (0, s.iP)(e, "assertive"),
                (O.current = d);
        }, [d, g, C, N]);
        let R = (0, _.$)(e, { global: !0 });
        return (
            delete R.onClick,
            f.createElement(
                "button",
                {
                    ...(0, c.v)(R, y, h, m, I),
                    type: "submit" === h.type && d ? "button" : h.type,
                    id: N,
                    ref: t,
                    "aria-labelledby": C,
                    slot: e.slot || void 0,
                    "aria-disabled": d ? "true" : h["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": S.isPressed || void 0,
                    "data-hovered": T || void 0,
                    "data-focused": g || void 0,
                    "data-pending": d || void 0,
                    "data-focus-visible": A || void 0,
                },
                f.createElement(i.K.Provider, { value: { id: v } }, y.children),
            )
        );
    });
