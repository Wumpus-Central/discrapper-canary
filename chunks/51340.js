r.d(t, { $: () => m, k: () => h });
var n = r(980807),
    i = r(149154),
    o = r(29474),
    a = r(477692),
    s = r(805206),
    l = r(892730),
    u = r(519837),
    c = r(582128),
    f = r(736570),
    d = r(599291),
    p = r(834559);
let h = (0, c.createContext)({}),
    m = (0, s.U7)(function (e, t) {
        [e, t] = (0, n.JT)(e, t, h);
        let r = e,
            { isPending: s } = r,
            { buttonProps: m, isPressed: y } = (0, a.s)(e, t);
        m = (function (e, t) {
            if (t) {
                for (let t in e) t.startsWith("on") && !v.test(t) && (e[t] = void 0);
                ((e.href = void 0), (e.target = void 0));
            }
            return e;
        })(m, s);
        let { focusProps: g, isFocused: b, isFocusVisible: w } = (0, f.o)(e),
            { hoverProps: _, isHovered: S } = (0, d.M)({ ...e, isDisabled: e.isDisabled || s }),
            E = {
                isHovered: S,
                isPressed: (r.isPressed || y) && !s,
                isFocused: b,
                isFocusVisible: w,
                isDisabled: e.isDisabled || !1,
                isPending: s ?? !1,
            },
            x = (0, n.Sl)({ ...e, values: E, defaultClassName: "react-aria-Button" }),
            C = (0, p.Bi)(m.id),
            k = (0, p.Bi)(),
            T = m["aria-labelledby"];
        s && (T ? (T = `${T} ${k}`) : m["aria-label"] && (T = `${C} ${k}`));
        let M = (0, c.useRef)(s);
        (0, c.useEffect)(() => {
            let e = { "aria-labelledby": T || C };
            (!M.current && b && s ? (0, o.iP)(e, "assertive") : M.current && b && !s && (0, o.iP)(e, "assertive"),
                (M.current = s));
        }, [s, b, T, C]);
        let P = (0, l.$)(e, { global: !0 });
        return (
            delete P.onClick,
            c.createElement(
                n.tT.button,
                {
                    ...(0, u.v)(P, x, m, g, _),
                    type: "submit" === m.type && s ? "button" : m.type,
                    id: C,
                    ref: t,
                    "aria-labelledby": T,
                    slot: e.slot || void 0,
                    "aria-disabled": s ? "true" : m["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": E.isPressed || void 0,
                    "data-hovered": S || void 0,
                    "data-focused": b || void 0,
                    "data-pending": s || void 0,
                    "data-focus-visible": w || void 0,
                },
                c.createElement(i.K.Provider, { value: { id: k } }, x.children),
            )
        );
    }),
    v = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
