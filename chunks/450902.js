t.d(a, { Eu: () => $, J3: () => b, cQ: () => g });
var r = t(825913),
    n = t(521767),
    i = t(491850),
    l = t(853590),
    o = t(974111),
    u = t(839256),
    s = t(498430),
    d = t(967158),
    c = t(803082),
    m = t(428174),
    h = t(999914),
    y = t(533715),
    D = t(290424),
    p = t(64700);
let g = (0, p.createContext)(null),
    v = (0, p.createContext)(null),
    f = (0, p.createContext)(null),
    b = (0, p.forwardRef)(function (e, a) {
        let t = (0, p.useContext)(v),
            r = (0, p.useContext)(f);
        return t || r ? p.createElement(R, { ...e, ref: a }) : p.createElement(A, { ...e, ref: a });
    }),
    A = (0, p.forwardRef)((e, a) => {
        let [t, u] = (0, r.JT)({ slot: e.slot }, a, g),
            { locale: s } = (0, l.Y)(),
            d = (0, h.F)({ ...t, locale: s, createCalendar: m.d }),
            c = (0, p.useRef)(null),
            { fieldProps: y, inputProps: D } = (0, o.cJ)({ ...t, inputRef: c }, d, u);
        return p.createElement(
            r.Kq,
            {
                values: [
                    [v, d],
                    [i.E, { ...D, ref: c }],
                    [n.t, { ...y, ref: u, isInvalid: d.isInvalid, isDisabled: d.isDisabled }],
                ],
            },
            p.createElement(R, e),
        );
    }),
    R = (0, p.forwardRef)((e, a) => {
        let { className: t, children: r } = e,
            l = (0, p.useContext)(v),
            o = (0, p.useContext)(f),
            u = null != l ? l : o;
        return p.createElement(
            p.Fragment,
            null,
            p.createElement(
                n.Y,
                {
                    ...e,
                    ref: a,
                    slot: e.slot || void 0,
                    className: null != t ? t : "react-aria-DateInput",
                    isReadOnly: u.isReadOnly,
                    isInvalid: u.isInvalid,
                    isDisabled: u.isDisabled,
                },
                u.segments.map((e, a) => (0, p.cloneElement)(r(e), { key: a })),
            ),
            p.createElement(i.p, null),
        );
    }),
    $ = (0, p.forwardRef)(function ({ segment: e, ...a }, t) {
        let n = (0, p.useContext)(v),
            i = (0, p.useContext)(f),
            l = null != n ? n : i,
            o = (0, y.U)(t),
            { segmentProps: m } = (0, u.V)(e, l, o),
            { focusProps: h, isFocused: g, isFocusVisible: b } = (0, s.o)(),
            { hoverProps: A, isHovered: R } = (0, d.M)({ ...a, isDisabled: l.isDisabled || "literal" === e.type }),
            $ = (0, r.Sl)({
                ...a,
                values: {
                    ...e,
                    isReadOnly: l.isReadOnly,
                    isInvalid: l.isInvalid,
                    isDisabled: l.isDisabled,
                    isHovered: R,
                    isFocused: g,
                    isFocusVisible: b,
                },
                defaultChildren: e.text,
                defaultClassName: "react-aria-DateSegment",
            });
        return p.createElement("span", {
            ...(0, c.v)((0, D.$)(a, { global: !0 }), m, h, A),
            ...$,
            style: m.style,
            ref: o,
            "data-placeholder": e.isPlaceholder || void 0,
            "data-invalid": l.isInvalid || void 0,
            "data-readonly": l.isReadOnly || void 0,
            "data-disabled": l.isDisabled || void 0,
            "data-type": e.type,
            "data-hovered": R || void 0,
            "data-focused": g || void 0,
            "data-focus-visible": b || void 0,
        });
    });
