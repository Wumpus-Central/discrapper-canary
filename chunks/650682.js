"use strict";
n.d(t, { $: () => p, k: () => f });
var i = n(825913),
    r = n(127747),
    s = n(959611),
    a = n(284054),
    o = n(498430),
    l = n(967158),
    u = n(985620),
    c = n(318473),
    d = n(564004),
    _ = n(290424),
    h = n(64700);
let f = (0, h.createContext)({}),
    p = (0, d.U7)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, f);
        let n = e,
            { isPending: d } = n,
            { buttonProps: p, isPressed: E } = (0, a.s)(e, t);
        p = (function (e, t) {
            if (t) {
                for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = void 0);
                (e.href = void 0), (e.target = void 0);
            }
            return e;
        })(p, d);
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
            y = (0, i.Sl)({ ...e, values: S, defaultClassName: "react-aria-Button" }),
            N = (0, u.Bi)(p.id),
            v = (0, u.Bi)(),
            C = p["aria-labelledby"];
        d && (C ? (C = `${C} ${v}`) : p["aria-label"] && (C = `${N} ${v}`));
        let R = (0, h.useRef)(d);
        (0, h.useEffect)(() => {
            let e = { "aria-labelledby": C || N };
            !R.current && g && d ? (0, s.iP)(e, "assertive") : R.current && g && !d && (0, s.iP)(e, "assertive"),
                (R.current = d);
        }, [d, g, C, N]);
        let O = (0, _.$)(e, { global: !0 });
        return (
            delete O.onClick,
            h.createElement(
                "button",
                {
                    ...(0, c.v)(O, y, p, m, I),
                    type: "submit" === p.type && d ? "button" : p.type,
                    id: N,
                    ref: t,
                    "aria-labelledby": C,
                    slot: e.slot || void 0,
                    "aria-disabled": d ? "true" : p["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": S.isPressed || void 0,
                    "data-hovered": T || void 0,
                    "data-focused": g || void 0,
                    "data-pending": d || void 0,
                    "data-focus-visible": A || void 0,
                },
                h.createElement(r.K.Provider, { value: { id: v } }, y.children),
            )
        );
    });
