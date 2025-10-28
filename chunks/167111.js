t.d(a, {
    Wr: () => b,
    bd: () => p,
    kE: () => B,
});
var u = t(922387),
    n = t(276820),
    r = t(71825),
    i = t(594886),
    o = t(933926),
    l = t(322612),
    s = t(580470),
    d = t(437525),
    c = t(43341),
    m = t(86151),
    D = t(490802),
    h = t(593277),
    f = t(735437),
    y = t(647438);
let p = (0, y.createContext)(null),
    g = (0, y.createContext)(null),
    v = (0, y.createContext)(null),
    b = (0, y.forwardRef)(function (e, a) {
        let t = (0, y.useContext)(g),
            u = (0, y.useContext)(v);
        return t || u
            ? y.createElement(x, {
                  ...e,
                  ref: a,
              })
            : y.createElement(C, {
                  ...e,
                  ref: a,
              });
    }),
    C = (0, y.forwardRef)((e, a) => {
        let [t, l] = (0, u.pE)({ slot: e.slot }, a, p),
            { locale: s } = (0, i.j)(),
            d = (0, D.R)({
                ...t,
                locale: s,
                createCalendar: m.Y,
            }),
            c = (0, y.useRef)(null),
            { fieldProps: h, inputProps: f } = (0, o.IZ)(
                {
                    ...t,
                    inputRef: c,
                },
                d,
                l,
            );
        return y.createElement(
            u.zt,
            {
                values: [
                    [g, d],
                    [
                        r.r,
                        {
                            ...f,
                            ref: c,
                        },
                    ],
                    [
                        n.E,
                        {
                            ...h,
                            ref: l,
                            isInvalid: d.isInvalid,
                            isDisabled: d.isDisabled,
                        },
                    ],
                ],
            },
            y.createElement(x, e),
        );
    }),
    x = (0, y.forwardRef)((e, a) => {
        let { className: t, children: u } = e,
            i = (0, y.useContext)(g),
            o = (0, y.useContext)(v),
            l = null != i ? i : o;
        return y.createElement(
            y.Fragment,
            null,
            y.createElement(
                n.Z,
                {
                    ...e,
                    ref: a,
                    slot: e.slot || void 0,
                    className: null != t ? t : "react-aria-DateInput",
                    isReadOnly: l.isReadOnly,
                    isInvalid: l.isInvalid,
                    isDisabled: l.isDisabled,
                },
                l.segments.map((e, a) => (0, y.cloneElement)(u(e), { key: a })),
            ),
            y.createElement(r.I, null),
        );
    }),
    B = (0, y.forwardRef)(function ({ segment: e, ...a }, t) {
        let n = (0, y.useContext)(g),
            r = (0, y.useContext)(v),
            i = null != n ? n : r,
            o = (0, h.B)(t),
            { segmentProps: m } = (0, l.O)(e, i, o),
            { focusProps: D, isFocused: p, isFocusVisible: b } = (0, s.F)(),
            { hoverProps: C, isHovered: x } = (0, d.X)({
                ...a,
                isDisabled: i.isDisabled || "literal" === e.type,
            }),
            B = (0, u.aX)({
                ...a,
                values: {
                    ...e,
                    isReadOnly: i.isReadOnly,
                    isInvalid: i.isInvalid,
                    isDisabled: i.isDisabled,
                    isHovered: x,
                    isFocused: p,
                    isFocusVisible: b,
                },
                defaultChildren: e.text,
                defaultClassName: "react-aria-DateSegment",
            });
        return y.createElement("span", {
            ...(0, c.d)((0, f.z)(a, { global: !0 }), m, D, C),
            ...B,
            style: m.style,
            ref: o,
            "data-placeholder": e.isPlaceholder || void 0,
            "data-invalid": i.isInvalid || void 0,
            "data-readonly": i.isReadOnly || void 0,
            "data-disabled": i.isDisabled || void 0,
            "data-type": e.type,
            "data-hovered": x || void 0,
            "data-focused": p || void 0,
            "data-focus-visible": b || void 0,
        });
    });
