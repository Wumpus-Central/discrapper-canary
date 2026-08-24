"use strict";
r.d(t, { $: () => m, k: () => h });
var n = r(760029),
    i = r(216956),
    o = r(230906),
    a = r(972922),
    s = r(1730),
    l = r(400274),
    u = r(709157),
    c = r(192734),
    f = r(639456),
    d = r(201092),
    p = r(582128);
let h = (0, p.createContext)({}),
    m = (0, f.U7)(function (e, t) {
        [e, t] = (0, n.JT)(e, t, h);
        let r = e,
            { isPending: f } = r,
            { buttonProps: m, isPressed: v } = (0, a.s)(e, t);
        m = (function (e, t) {
            if (t) {
                for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = void 0);
                (e.href = void 0), (e.target = void 0);
            }
            return e;
        })(m, f);
        let { focusProps: y, isFocused: g, isFocusVisible: b } = (0, s.o)(e),
            { hoverProps: w, isHovered: _ } = (0, l.M)({ ...e, isDisabled: e.isDisabled || f }),
            S = {
                isHovered: _,
                isPressed: (r.isPressed || v) && !f,
                isFocused: g,
                isFocusVisible: b,
                isDisabled: e.isDisabled || !1,
                isPending: null != f && f,
            },
            x = (0, n.Sl)({ ...e, values: S, defaultClassName: "react-aria-Button" }),
            E = (0, u.Bi)(m.id),
            k = (0, u.Bi)(),
            C = m["aria-labelledby"];
        f && (C ? (C = `${C} ${k}`) : m["aria-label"] && (C = `${E} ${k}`));
        let T = (0, p.useRef)(f);
        (0, p.useEffect)(() => {
            let e = { "aria-labelledby": C || E };
            !T.current && g && f ? (0, o.iP)(e, "assertive") : T.current && g && !f && (0, o.iP)(e, "assertive"),
                (T.current = f);
        }, [f, g, C, E]);
        let M = (0, d.$)(e, { global: !0 });
        return (
            delete M.onClick,
            p.createElement(
                "button",
                {
                    ...(0, c.v)(M, x, m, y, w),
                    type: "submit" === m.type && f ? "button" : m.type,
                    id: E,
                    ref: t,
                    "aria-labelledby": C,
                    slot: e.slot || void 0,
                    "aria-disabled": f ? "true" : m["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": S.isPressed || void 0,
                    "data-hovered": _ || void 0,
                    "data-focused": g || void 0,
                    "data-pending": f || void 0,
                    "data-focus-visible": b || void 0,
                },
                p.createElement(i.K.Provider, { value: { id: k } }, x.children),
            )
        );
    });
