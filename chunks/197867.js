"use strict";
r.d(t, { $: () => m, k: () => h });
var n = r(825913),
    a = r(64700);
let s = (0, a.createContext)(null);
var i = r(217512),
    o = r(284054),
    l = r(498430),
    u = r(967158),
    c = r(985620),
    d = r(318473),
    f = r(564004),
    p = r(290424);
let h = (0, a.createContext)({}),
    m = (0, f.U7)(function (e, t) {
        [e, t] = (0, n.JT)(e, t, h);
        let r = e,
            { isPending: f } = r,
            { buttonProps: m, isPressed: _ } = (0, o.s)(e, t);
        m = (function (e, t) {
            if (t) {
                for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = void 0);
                (e.href = void 0), (e.target = void 0);
            }
            return e;
        })(m, f);
        let { focusProps: g, isFocused: v, isFocusVisible: b } = (0, l.o)(e),
            { hoverProps: y, isHovered: E } = (0, u.M)({ ...e, isDisabled: e.isDisabled || f }),
            S = {
                isHovered: E,
                isPressed: (r.isPressed || _) && !f,
                isFocused: v,
                isFocusVisible: b,
                isDisabled: e.isDisabled || !1,
                isPending: null != f && f,
            },
            T = (0, n.Sl)({ ...e, values: S, defaultClassName: "react-aria-Button" }),
            x = (0, c.Bi)(m.id),
            w = (0, c.Bi)(),
            C = m["aria-labelledby"];
        f && (C ? (C = `${C} ${w}`) : m["aria-label"] && (C = `${x} ${w}`));
        let D = (0, a.useRef)(f);
        (0, a.useEffect)(() => {
            let e = { "aria-labelledby": C || x };
            !D.current && v && f ? (0, i.iP)(e, "assertive") : D.current && v && !f && (0, i.iP)(e, "assertive"),
                (D.current = f);
        }, [f, v, C, x]);
        let O = (0, p.$)(e, { global: !0 });
        return (
            delete O.onClick,
            a.createElement(
                "button",
                {
                    ...(0, d.v)(O, T, m, g, y),
                    type: "submit" === m.type && f ? "button" : m.type,
                    id: x,
                    ref: t,
                    "aria-labelledby": C,
                    slot: e.slot || void 0,
                    "aria-disabled": f ? "true" : m["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": S.isPressed || void 0,
                    "data-hovered": E || void 0,
                    "data-focused": v || void 0,
                    "data-pending": f || void 0,
                    "data-focus-visible": b || void 0,
                },
                a.createElement(s.Provider, { value: { id: w } }, T.children),
            )
        );
    });
