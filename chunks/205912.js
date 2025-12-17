n.d(t, { M: () => I });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(290338),
    s = n(540387),
    l = n(480554),
    c = n(23893),
    u = n(929887),
    d = n(407558),
    f = n(787304),
    p = n(483566),
    _ = n(657707),
    m = n(454389),
    h = n(402453),
    g = n(836605);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e) {
    var {
            value: t,
            onChange: n,
            minValue: i,
            maxValue: E,
            placeholderValue: y,
            granularity: S = "day",
            hourCycle: I,
            hideTimeZone: T = !1,
        } = e,
        C = v(e, [
            "value",
            "onChange",
            "minValue",
            "maxValue",
            "placeholderValue",
            "granularity",
            "hourCycle",
            "hideTimeZone",
        ]);
    let { i18n: A } = (0, h.ZF)(),
        { fieldProps: N } = (0, p.X)(C),
        { disabled: P, errorMessage: R, required: w = !1 } = N,
        D = { hasError: null != R && "" !== R },
        {
            refs: x,
            floatingStyles: L,
            isOpen: j,
            setIsOpen: M,
            context: k,
            getFloatingProps: U,
            getReferenceProps: G,
        } = (0, d.O)({
            matchReferenceWidth: !1,
            placement: "bottom-start",
        }),
        { isMounted: Z, styles: F } = (0, d.Y)(k, {
            common: (e) => {
                let { side: t } = e;
                return { transformOrigin: "".concat("top" === t ? "bottom" : "top", " center") };
            },
            initial: {
                opacity: 0.5,
                transform: "scaleY(0.96)",
            },
            duration: 100,
        }),
        B = (e) => {
            null == n || n(e), M(!1);
        };
    return (0, r.jsx)(
        p.g,
        O(b({}, N), {
            children: (e) =>
                (0, r.jsx)(
                    m.U,
                    O(
                        b(
                            {
                                className: g.inputField,
                                validation: D,
                                ref: x.setReference,
                            },
                            G(),
                        ),
                        {
                            children: (0, r.jsxs)(o.Mt, {
                                id: e.controlId,
                                "aria-labelledby": e.labelId,
                                "aria-describedby": e.describedById,
                                "aria-invalid": null != e.errorMessageId,
                                "aria-errormessage": e.errorMessageId,
                                value: t,
                                onChange: B,
                                isDisabled: P,
                                isRequired: w,
                                minValue: i,
                                maxValue: E,
                                placeholderValue: y,
                                granularity: S,
                                hourCycle: I,
                                hideTimeZone: T,
                                "data-mana-component": "date-picker",
                                className: g.datePicker,
                                children: [
                                    (0, r.jsxs)(s.Z, {
                                        className: g.inputGroup,
                                        children: [
                                            (0, r.jsx)(l.Wr, {
                                                children: (e) =>
                                                    (0, r.jsx)(l.kE, {
                                                        segment: e,
                                                        className: a()(g.segment, e.isPlaceholder && g.placeholder),
                                                    }),
                                            }),
                                            (0, r.jsx)(c.z, {
                                                className: g.calendarButton,
                                                onClick: () => M(!j),
                                                "aria-label": A.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                                children: (0, r.jsx)(_.Que, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                }),
                                            }),
                                        ],
                                    }),
                                    j &&
                                        Z &&
                                        (0, r.jsx)(
                                            "div",
                                            O(b({}, U()), {
                                                ref: x.setFloating,
                                                style: L,
                                                className: g.popover,
                                                children: (0, r.jsx)(u.Vq, {
                                                    style: F,
                                                    className: g.dialog,
                                                    children: (0, r.jsx)(f.f, {
                                                        value: t,
                                                        onChange: B,
                                                        minValue: i,
                                                        maxValue: E,
                                                        disabled: P,
                                                    }),
                                                }),
                                            }),
                                        ),
                                ],
                            }),
                        },
                    ),
                ),
        }),
    );
}
