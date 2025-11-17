n.d(t, {
    Wr: () => y,
    bd: () => g,
    kE: () => I,
});
var r = n(595707),
    i = n(540387),
    a = n(181710),
    o = n(227399),
    s = n(194784),
    l = n(155210),
    c = n(984940),
    u = n(69771),
    d = n(158821),
    f = n(86151),
    _ = n(932674),
    p = n(413565),
    h = n(880016),
    m = n(473749);
let g = (0, m.createContext)(null),
    E = (0, m.createContext)(null),
    b = (0, m.createContext)(null),
    y = (0, m.forwardRef)(function (e, t) {
        let n = (0, m.useContext)(E),
            r = (0, m.useContext)(b);
        return n || r
            ? m.createElement(v, {
                  ...e,
                  ref: t,
              })
            : m.createElement(O, {
                  ...e,
                  ref: t,
              });
    }),
    O = (0, m.forwardRef)((e, t) => {
        let [n, l] = (0, r.pE)({ slot: e.slot }, t, g),
            { locale: c } = (0, o.j)(),
            u = (0, _.R)({
                ...n,
                locale: c,
                createCalendar: f.Y,
            }),
            d = (0, m.useRef)(null),
            { fieldProps: p, inputProps: h } = (0, s.IZ)(
                {
                    ...n,
                    inputRef: d,
                },
                u,
                l,
            );
        return m.createElement(
            r.zt,
            {
                values: [
                    [E, u],
                    [
                        a.r,
                        {
                            ...h,
                            ref: d,
                        },
                    ],
                    [
                        i.E,
                        {
                            ...p,
                            ref: l,
                            isInvalid: u.isInvalid,
                            isDisabled: u.isDisabled,
                        },
                    ],
                ],
            },
            m.createElement(v, e),
        );
    }),
    v = (0, m.forwardRef)((e, t) => {
        let { className: n, children: r } = e,
            o = (0, m.useContext)(E),
            s = (0, m.useContext)(b),
            l = null != o ? o : s;
        return m.createElement(
            m.Fragment,
            null,
            m.createElement(
                i.Z,
                {
                    ...e,
                    ref: t,
                    slot: e.slot || void 0,
                    className: null != n ? n : "react-aria-DateInput",
                    isReadOnly: l.isReadOnly,
                    isInvalid: l.isInvalid,
                    isDisabled: l.isDisabled,
                },
                l.segments.map((e, t) => (0, m.cloneElement)(r(e), { key: t })),
            ),
            m.createElement(a.I, null),
        );
    }),
    I = (0, m.forwardRef)(function ({ segment: e, ...t }, n) {
        let i = (0, m.useContext)(E),
            a = (0, m.useContext)(b),
            o = null != i ? i : a,
            s = (0, p.B)(n),
            { segmentProps: f } = (0, l.O)(e, o, s),
            { focusProps: _, isFocused: g, isFocusVisible: y } = (0, c.F)(),
            { hoverProps: O, isHovered: v } = (0, u.X)({
                ...t,
                isDisabled: o.isDisabled || "literal" === e.type,
            }),
            I = (0, r.aX)({
                ...t,
                values: {
                    ...e,
                    isReadOnly: o.isReadOnly,
                    isInvalid: o.isInvalid,
                    isDisabled: o.isDisabled,
                    isHovered: v,
                    isFocused: g,
                    isFocusVisible: y,
                },
                defaultChildren: e.text,
                defaultClassName: "react-aria-DateSegment",
            });
        return m.createElement("span", {
            ...(0, d.d)((0, h.z)(t, { global: !0 }), f, _, O),
            ...I,
            style: f.style,
            ref: s,
            "data-placeholder": e.isPlaceholder || void 0,
            "data-invalid": o.isInvalid || void 0,
            "data-readonly": o.isReadOnly || void 0,
            "data-disabled": o.isDisabled || void 0,
            "data-type": e.type,
            "data-hovered": v || void 0,
            "data-focused": g || void 0,
            "data-focus-visible": y || void 0,
        });
    });
