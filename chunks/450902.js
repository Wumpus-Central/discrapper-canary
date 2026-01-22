n.d(t, {
    Eu: () => v,
    J3: () => y,
    cQ: () => g,
});
var r = n(825913),
    i = n(521767),
    a = n(491850),
    s = n(853590),
    o = n(974111),
    l = n(839256),
    c = n(498430),
    u = n(967158),
    d = n(803082),
    f = n(428174),
    p = n(999914),
    _ = n(533715),
    h = n(290424),
    m = n(64700);
let g = (0, m.createContext)(null),
    E = (0, m.createContext)(null),
    b = (0, m.createContext)(null),
    y = (0, m.forwardRef)(function (e, t) {
        let n = (0, m.useContext)(E),
            r = (0, m.useContext)(b);
        return n || r
            ? m.createElement(A, {
                  ...e,
                  ref: t,
              })
            : m.createElement(O, {
                  ...e,
                  ref: t,
              });
    }),
    O = (0, m.forwardRef)((e, t) => {
        let [n, l] = (0, r.JT)(
                {
                    slot: e.slot,
                },
                t,
                g,
            ),
            { locale: c } = (0, s.Y)(),
            u = (0, p.F)({
                ...n,
                locale: c,
                createCalendar: f.d,
            }),
            d = (0, m.useRef)(null),
            { fieldProps: _, inputProps: h } = (0, o.cJ)(
                {
                    ...n,
                    inputRef: d,
                },
                u,
                l,
            );
        return m.createElement(
            r.Kq,
            {
                values: [
                    [E, u],
                    [
                        a.E,
                        {
                            ...h,
                            ref: d,
                        },
                    ],
                    [
                        i.t,
                        {
                            ..._,
                            ref: l,
                            isInvalid: u.isInvalid,
                            isDisabled: u.isDisabled,
                        },
                    ],
                ],
            },
            m.createElement(A, e),
        );
    }),
    A = (0, m.forwardRef)((e, t) => {
        let { className: n, children: r } = e,
            s = (0, m.useContext)(E),
            o = (0, m.useContext)(b),
            l = null != s ? s : o;
        return m.createElement(
            m.Fragment,
            null,
            m.createElement(
                i.Y,
                {
                    ...e,
                    ref: t,
                    slot: e.slot || void 0,
                    className: null != n ? n : "react-aria-DateInput",
                    isReadOnly: l.isReadOnly,
                    isInvalid: l.isInvalid,
                    isDisabled: l.isDisabled,
                },
                l.segments.map((e, t) =>
                    (0, m.cloneElement)(r(e), {
                        key: t,
                    }),
                ),
            ),
            m.createElement(a.p, null),
        );
    }),
    v = (0, m.forwardRef)(function ({ segment: e, ...t }, n) {
        let i = (0, m.useContext)(E),
            a = (0, m.useContext)(b),
            s = null != i ? i : a,
            o = (0, _.U)(n),
            { segmentProps: f } = (0, l.V)(e, s, o),
            { focusProps: p, isFocused: g, isFocusVisible: y } = (0, c.o)(),
            { hoverProps: O, isHovered: A } = (0, u.M)({
                ...t,
                isDisabled: s.isDisabled || "literal" === e.type,
            }),
            v = (0, r.Sl)({
                ...t,
                values: {
                    ...e,
                    isReadOnly: s.isReadOnly,
                    isInvalid: s.isInvalid,
                    isDisabled: s.isDisabled,
                    isHovered: A,
                    isFocused: g,
                    isFocusVisible: y,
                },
                defaultChildren: e.text,
                defaultClassName: "react-aria-DateSegment",
            });
        return m.createElement("span", {
            ...(0, d.v)(
                (0, h.$)(t, {
                    global: !0,
                }),
                f,
                p,
                O,
            ),
            ...v,
            style: f.style,
            ref: o,
            "data-placeholder": e.isPlaceholder || void 0,
            "data-invalid": s.isInvalid || void 0,
            "data-readonly": s.isReadOnly || void 0,
            "data-disabled": s.isDisabled || void 0,
            "data-type": e.type,
            "data-hovered": A || void 0,
            "data-focused": g || void 0,
            "data-focus-visible": y || void 0,
        });
    });
