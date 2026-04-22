"use strict";
n.d(t, { $: () => h, k: () => E });
var r = n(825913),
    i = n(646066),
    s = n(217512),
    a = n(284054),
    o = n(498430),
    l = n(967158),
    u = n(723906),
    d = n(803082),
    c = n(564004),
    _ = n(290424),
    f = n(64700);
let E = (0, f.createContext)({}),
    h = (0, c.U7)(function (e, t) {
        [e, t] = (0, r.JT)(e, t, E);
        let n = e,
            { isPending: c } = n,
            { buttonProps: h, isPressed: p } = (0, a.s)(e, t);
        h = (function (e, t) {
            if (t) {
                for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = void 0);
                (e.href = void 0), (e.target = void 0);
            }
            return e;
        })(h, c);
        let { focusProps: m, isFocused: g, isFocusVisible: A } = (0, o.o)(e),
            { hoverProps: I, isHovered: T } = (0, l.M)({ ...e, isDisabled: e.isDisabled || c }),
            S = {
                isHovered: T,
                isPressed: (n.isPressed || p) && !c,
                isFocused: g,
                isFocusVisible: A,
                isDisabled: e.isDisabled || !1,
                isPending: null != c && c,
            },
            y = (0, r.Sl)({ ...e, values: S, defaultClassName: "react-aria-Button" }),
            N = (0, u.Bi)(h.id),
            O = (0, u.Bi)(),
            R = h["aria-labelledby"];
        c && (R ? (R = `${R} ${O}`) : h["aria-label"] && (R = `${N} ${O}`));
        let v = (0, f.useRef)(c);
        (0, f.useEffect)(() => {
            let e = { "aria-labelledby": R || N };
            !v.current && g && c ? (0, s.iP)(e, "assertive") : v.current && g && !c && (0, s.iP)(e, "assertive"),
                (v.current = c);
        }, [c, g, R, N]);
        let C = (0, _.$)(e, { global: !0 });
        return (
            delete C.onClick,
            f.createElement(
                "button",
                {
                    ...(0, d.v)(C, y, h, m, I),
                    type: "submit" === h.type && c ? "button" : h.type,
                    id: N,
                    ref: t,
                    "aria-labelledby": R,
                    slot: e.slot || void 0,
                    "aria-disabled": c ? "true" : h["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": S.isPressed || void 0,
                    "data-hovered": T || void 0,
                    "data-focused": g || void 0,
                    "data-pending": c || void 0,
                    "data-focus-visible": A || void 0,
                },
                f.createElement(i.K.Provider, { value: { id: O } }, y.children),
            )
        );
    });
