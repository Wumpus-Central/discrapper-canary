n.d(t, {
    l: () => S,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(60628),
    o = n(521767),
    l = n(450902),
    c = n(650682),
    u = n(248062),
    d = n(561392),
    f = n(720341),
    p = n(452027),
    _ = n(934551),
    h = n(862301),
    m = n(460890),
    g = n(25181);

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

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = v(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function S(e) {
    let {
            value: t,
            onChange: n,
            minValue: i,
            maxValue: E,
            placeholderValue: y,
            granularity: v = "day",
            hourCycle: S,
            hideTimeZone: I = !1,
        } = e,
        T = A(e, [
            "value",
            "onChange",
            "minValue",
            "maxValue",
            "placeholderValue",
            "granularity",
            "hourCycle",
            "hideTimeZone",
        ]),
        { i18n: C } = (0, m.G9)(),
        { fieldProps: N } = (0, p.n)(T),
        { disabled: R, errorMessage: w, required: P = !1 } = N,
        D = {
            hasError: null != w && "" !== w,
        },
        {
            refs: x,
            floatingStyles: L,
            isOpen: j,
            setIsOpen: M,
            context: k,
            getFloatingProps: U,
            getReferenceProps: G,
        } = (0, d.u)({
            matchReferenceWidth: !1,
            placement: "bottom-start",
        }),
        { isMounted: V, styles: F } = (0, d.D)(k, {
            common: (e) => {
                let { side: t } = e;
                return {
                    transformOrigin: "".concat("top" === t ? "bottom" : "top", " center"),
                };
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
        p.D,
        O(b({}, N), {
            children: (e) =>
                (0, r.jsx)(
                    h.F,
                    O(
                        b(
                            {
                                className: g.LF,
                                validation: D,
                                ref: x.setReference,
                            },
                            G(),
                        ),
                        {
                            children: (0, r.jsxs)(s.lr, {
                                id: e.controlId,
                                "aria-labelledby": e.labelId,
                                "aria-describedby": e.describedById,
                                "aria-invalid": null != e.errorMessageId,
                                "aria-errormessage": e.errorMessageId,
                                value: t,
                                onChange: B,
                                isDisabled: R,
                                isRequired: P,
                                minValue: i,
                                maxValue: E,
                                placeholderValue: y,
                                granularity: v,
                                hourCycle: S,
                                hideTimeZone: I,
                                "data-mana-component": "date-picker",
                                className: g.dn,
                                children: [
                                    (0, r.jsxs)(o.Y, {
                                        className: g.wO,
                                        children: [
                                            (0, r.jsx)(l.J3, {
                                                children: (e) =>
                                                    (0, r.jsx)(l.Eu, {
                                                        segment: e,
                                                        className: a()(g.mX, e.isPlaceholder && g.qf),
                                                    }),
                                            }),
                                            (0, r.jsx)(c.$, {
                                                className: g.B7,
                                                onClick: () => M(!j),
                                                "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                                children: (0, r.jsx)(_.CalendarIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                }),
                                            }),
                                        ],
                                    }),
                                    j &&
                                        V &&
                                        (0, r.jsx)(
                                            "div",
                                            O(b({}, U()), {
                                                ref: x.setFloating,
                                                style: L,
                                                className: g.oO,
                                                children: (0, r.jsx)(u.lG, {
                                                    style: F,
                                                    className: g.r3,
                                                    children: (0, r.jsx)(f.V, {
                                                        value: t,
                                                        onChange: B,
                                                        minValue: i,
                                                        maxValue: E,
                                                        disabled: R,
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
