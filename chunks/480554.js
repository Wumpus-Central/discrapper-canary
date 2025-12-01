n.d(t, {
    Wr: () => y,
    bd: () => g,
    kE: () => S,
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
    p = n(932674),
    _ = n(413565),
    m = n(880016),
    h = n(473749);
let g = (0, h.createContext)(null),
    E = (0, h.createContext)(null),
    b = (0, h.createContext)(null),
    y = (0, h.forwardRef)(function (e, t) {
        let n = (0, h.useContext)(E),
            r = (0, h.useContext)(b);
        return n || r
            ? h.createElement(v, {
                  ...e,
                  ref: t,
              })
            : h.createElement(O, {
                  ...e,
                  ref: t,
              });
    }),
    O = (0, h.forwardRef)((e, t) => {
        let [n, l] = (0, r.pE)({ slot: e.slot }, t, g),
            { locale: c } = (0, o.j)(),
            u = (0, p.R)({
                ...n,
                locale: c,
                createCalendar: f.Y,
            }),
            d = (0, h.useRef)(null),
            { fieldProps: _, inputProps: m } = (0, s.IZ)(
                {
                    ...n,
                    inputRef: d,
                },
                u,
                l,
            );
        return h.createElement(
            r.zt,
            {
                values: [
                    [E, u],
                    [
                        a.r,
                        {
                            ...m,
                            ref: d,
                        },
                    ],
                    [
                        i.E,
                        {
                            ..._,
                            ref: l,
                            isInvalid: u.isInvalid,
                            isDisabled: u.isDisabled,
                        },
                    ],
                ],
            },
            h.createElement(v, e),
        );
    }),
    v = (0, h.forwardRef)((e, t) => {
        let { className: n, children: r } = e,
            o = (0, h.useContext)(E),
            s = (0, h.useContext)(b),
            l = null != o ? o : s;
        return h.createElement(
            h.Fragment,
            null,
            h.createElement(
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
                l.segments.map((e, t) => (0, h.cloneElement)(r(e), { key: t })),
            ),
            h.createElement(a.I, null),
        );
    }),
    S = (0, h.forwardRef)(function ({ segment: e, ...t }, n) {
        let i = (0, h.useContext)(E),
            a = (0, h.useContext)(b),
            o = null != i ? i : a,
            s = (0, _.B)(n),
            { segmentProps: f } = (0, l.O)(e, o, s),
            { focusProps: p, isFocused: g, isFocusVisible: y } = (0, c.F)(),
            { hoverProps: O, isHovered: v } = (0, u.X)({
                ...t,
                isDisabled: o.isDisabled || "literal" === e.type,
            }),
            S = (0, r.aX)({
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
        return h.createElement("span", {
            ...(0, d.d)((0, m.z)(t, { global: !0 }), f, p, O),
            ...S,
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
