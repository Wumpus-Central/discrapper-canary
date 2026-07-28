"use strict";
n.d(t, { $: () => m, k: () => h });
var r = n(760029),
    i = n(216956),
    a = n(230906),
    o = n(972922),
    s = n(1730),
    l = n(400274),
    u = n(709157),
    c = n(192734),
    d = n(639456),
    f = n(201092),
    p = n(582128);
let h = (0, p.createContext)({}),
    m = (0, d.U7)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, h);
        let n = e,
            { isPending: d } = n,
            { buttonProps: m, isPressed: g } = (0, o.s)(e, t);
        m = (function (e, t) {
            if (t) {
                for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = void 0);
                (e.href = void 0), (e.target = void 0);
            }
            return e;
        })(m, d);
        let { focusProps: v, isFocused: y, isFocusVisible: b } = (0, s.o)(e),
            { hoverProps: _, isHovered: w } = (0, l.M)({ ...e, isDisabled: e.isDisabled || d }),
            x = {
                isHovered: w,
                isPressed: (n.isPressed || g) && !d,
                isFocused: y,
                isFocusVisible: b,
                isDisabled: e.isDisabled || !1,
                isPending: null != d && d,
            },
            E = (0, r.Sl)({ ...e, values: x, defaultClassName: "react-aria-Button" }),
            S = (0, u.Bi)(m.id),
            k = (0, u.Bi)(),
            T = m["aria-labelledby"];
        d && (T ? (T = `${T} ${k}`) : m["aria-label"] && (T = `${S} ${k}`));
        let C = (0, p.useRef)(d);
        (0, p.useEffect)(() => {
            let e = { "aria-labelledby": T || S };
            !C.current && y && d ? (0, a.iP)(e, "assertive") : C.current && y && !d && (0, a.iP)(e, "assertive"),
                (C.current = d);
        }, [d, y, T, S]);
        let P = (0, f.$)(e, { global: !0 });
        return (
            delete P.onClick,
            p.createElement(
                "button",
                {
                    ...(0, c.v)(P, E, m, v, _),
                    type: "submit" === m.type && d ? "button" : m.type,
                    id: S,
                    ref: t,
                    "aria-labelledby": T,
                    slot: e.slot || void 0,
                    "aria-disabled": d ? "true" : m["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": x.isPressed || void 0,
                    "data-hovered": w || void 0,
                    "data-focused": y || void 0,
                    "data-pending": d || void 0,
                    "data-focus-visible": b || void 0,
                },
                p.createElement(i.K.Provider, { value: { id: k } }, E.children),
            )
        );
    });
