n.d(t, { Q: () => E });
var r = n(908909),
    i = n(974111),
    a = n(185288),
    s = n(13163),
    o = n(723906),
    l = n(807177),
    c = n(290424),
    u = n(803082),
    d = n(339241),
    f = n(447432),
    p = n(744493),
    _ = n(47276),
    h = n(853590),
    m = n(64700);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
function E(e, t, n) {
    let E = (0, o.Bi)(),
        b = (0, o.Bi)(),
        y = (0, o.Bi)(),
        O = (0, _.o)(g(r.A), "@react-aria/datepicker"),
        { isInvalid: A, validationErrors: v, validationDetails: S } = t.displayValidation,
        {
            labelProps: I,
            fieldProps: T,
            descriptionProps: C,
            errorMessageProps: N,
        } = (0, f.M)({
            ...e,
            labelElementType: "span",
            isInvalid: A,
            errorMessage: e.errorMessage || v,
        }),
        R = (0, a.P)(t, n),
        w = T["aria-labelledby"] || T.id,
        { locale: P } = (0, h.Y)(),
        D = t.formatValue(P, { month: "long" }),
        x = D ? O.format("selectedDateDescription", { date: D }) : "",
        L = (0, l.I)(x),
        j = [L["aria-describedby"], T["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        M = (0, c.$)(e),
        k = (0, m.useMemo)(() => (0, s.C7)(n), [n]),
        U = (0, m.useRef)(!1),
        { focusWithinProps: G } = (0, p.R)({
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
        groupProps: (0, u.v)(M, R, T, L, G, {
            role: "group",
            "aria-disabled": e.isDisabled || null,
            "aria-labelledby": w,
            "aria-describedby": j,
            onKeyDown(n) {
                !t.isOpen && e.onKeyDown && e.onKeyDown(n);
            },
            onKeyUp(n) {
                !t.isOpen && e.onKeyUp && e.onKeyUp(n);
            },
        }),
        labelProps: {
            ...I,
            onClick: () => {
                k.focusFirst();
            },
        },
        fieldProps: {
            ...T,
            id: y,
            [i.pK]: "presentation",
            "aria-describedby": j,
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
            [d.Lf]: t,
            autoFocus: e.autoFocus,
            name: e.name,
            form: e.form,
        },
        descriptionProps: C,
        errorMessageProps: N,
        buttonProps: {
            ...L,
            id: E,
            "aria-haspopup": "dialog",
            "aria-label": O.format("calendar"),
            "aria-labelledby": `${E} ${w}`,
            "aria-describedby": j,
            "aria-expanded": t.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => t.setOpen(!0),
        },
        dialogProps: {
            id: b,
            "aria-labelledby": `${E} ${w}`,
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
        isInvalid: A,
        validationErrors: v,
        validationDetails: S,
    };
}
