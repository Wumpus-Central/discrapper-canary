n.d(t, { k: () => E });
var r = n(925521),
    i = n(194784),
    a = n(380869),
    o = n(605294),
    s = n(752689),
    l = n(645537),
    c = n(880016),
    u = n(158821),
    d = n(134915),
    f = n(426902),
    _ = n(921448),
    p = n(218769),
    h = n(227399),
    m = n(473749);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
function E(e, t, n) {
    let E = (0, s.Me)(),
        b = (0, s.Me)(),
        y = (0, s.Me)(),
        O = (0, p.q)(g(r.Z), "@react-aria/datepicker"),
        { isInvalid: v, validationErrors: I, validationDetails: T } = t.displayValidation,
        {
            labelProps: S,
            fieldProps: A,
            descriptionProps: C,
            errorMessageProps: N,
        } = (0, f.U)({
            ...e,
            labelElementType: "span",
            isInvalid: v,
            errorMessage: e.errorMessage || I,
        }),
        R = (0, a.H)(t, n),
        P = A["aria-labelledby"] || A.id,
        { locale: D } = (0, h.j)(),
        w = t.formatValue(D, { month: "long" }),
        L = w ? O.format("selectedDateDescription", { date: w }) : "",
        x = (0, l.P)(L),
        M = [x["aria-describedby"], A["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        j = (0, c.z)(e),
        k = (0, m.useMemo)(() => (0, o.E7)(n), [n]),
        U = (0, m.useRef)(!1),
        { focusWithinProps: G } = (0, _.L)({
            ...e,
            isDisabled: t.isOpen,
            onBlurWithin: (t) => {
                let n = document.getElementById(b);
                if (!(null == n ? void 0 : n.contains(t.relatedTarget))) {
                    var r, i;
                    (U.current = !1),
                        null == (r = e.onBlur) || r.call(e, t),
                        null == (i = e.onFocusChange) || i.call(e, !1);
                }
            },
            onFocusWithin: (t) => {
                if (!U.current) {
                    var n, r;
                    (U.current = !0),
                        null == (n = e.onFocus) || n.call(e, t),
                        null == (r = e.onFocusChange) || r.call(e, !0);
                }
            },
        });
    return {
        groupProps: (0, u.d)(j, R, A, x, G, {
            role: "group",
            "aria-disabled": e.isDisabled || null,
            "aria-labelledby": P,
            "aria-describedby": M,
            onKeyDown(n) {
                !t.isOpen && e.onKeyDown && e.onKeyDown(n);
            },
            onKeyUp(n) {
                !t.isOpen && e.onKeyUp && e.onKeyUp(n);
            },
        }),
        labelProps: {
            ...S,
            onClick: () => {
                k.focusFirst();
            },
        },
        fieldProps: {
            ...A,
            id: y,
            [i.KX]: "presentation",
            "aria-describedby": M,
            value: t.value,
            defaultValue: t.defaultValue,
            onChange: t.setValue,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            granularity: e.granularity,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior,
            [d.tL]: t,
            autoFocus: e.autoFocus,
            name: e.name,
            form: e.form,
        },
        descriptionProps: C,
        errorMessageProps: N,
        buttonProps: {
            ...x,
            id: E,
            "aria-haspopup": "dialog",
            "aria-label": O.format("calendar"),
            "aria-labelledby": `${E} ${P}`,
            "aria-describedby": M,
            "aria-expanded": t.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => t.setOpen(!0),
        },
        dialogProps: {
            id: b,
            "aria-labelledby": `${E} ${P}`,
        },
        calendarProps: {
            autoFocus: !0,
            value: t.dateValue,
            onChange: t.setDateValue,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
            isInvalid: t.isInvalid,
            errorMessage:
                "function" == typeof e.errorMessage
                    ? e.errorMessage(t.displayValidation)
                    : e.errorMessage || t.displayValidation.validationErrors.join(" "),
            firstDayOfWeek: e.firstDayOfWeek,
            pageBehavior: e.pageBehavior,
        },
        isInvalid: v,
        validationErrors: I,
        validationDetails: T,
    };
}
