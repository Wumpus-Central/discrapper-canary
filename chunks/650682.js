"use strict";
n.d(t, { $: () => p, k: () => h });
var i = n(825913),
    r = n(127747),
    s = n(217512),
    a = n(284054),
    o = n(498430),
    l = n(967158),
    u = n(985620),
    c = n(318473),
    d = n(564004),
    _ = n(290424),
    f = n(64700);
let h = (0, f.createContext)({}),
    p = (0, d.U7)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, h);
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
            N = (0, i.Sl)({ ...e, values: S, defaultClassName: "react-aria-Button" }),
            y = (0, u.Bi)(p.id),
            C = (0, u.Bi)(),
            v = p["aria-labelledby"];
        d && (v ? (v = `${v} ${C}`) : p["aria-label"] && (v = `${y} ${C}`));
        let O = (0, f.useRef)(d);
        (0, f.useEffect)(() => {
            let e = { "aria-labelledby": v || y };
            !O.current && g && d ? (0, s.iP)(e, "assertive") : O.current && g && !d && (0, s.iP)(e, "assertive"),
                (O.current = d);
        }, [d, g, v, y]);
        let R = (0, _.$)(e, { global: !0 });
        return (
            delete R.onClick,
            f.createElement(
                "button",
                {
                    ...(0, c.v)(R, N, p, m, I),
                    type: "submit" === p.type && d ? "button" : p.type,
                    id: y,
                    ref: t,
                    "aria-labelledby": v,
                    slot: e.slot || void 0,
                    "aria-disabled": d ? "true" : p["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": S.isPressed || void 0,
                    "data-hovered": T || void 0,
                    "data-focused": g || void 0,
                    "data-pending": d || void 0,
                    "data-focus-visible": A || void 0,
                },
                f.createElement(r.K.Provider, { value: { id: C } }, N.children),
            )
        );
    });
