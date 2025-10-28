t.d(a, { k: () => p });
var u = t(616868),
    n = t(933926),
    r = t(669231),
    i = t(750528),
    o = t(677061),
    l = t(682308),
    s = t(735437),
    d = t(43341),
    c = t(819129),
    m = t(923108),
    D = t(576173),
    h = t(970185),
    f = t(594886),
    y = t(647438);
function p(e, a, t) {
    var p;
    let g = (0, o.Me)(),
        v = (0, o.Me)(),
        b = (0, o.Me)(),
        C = (0, h.q)((p = u.Z) && p.__esModule ? p.default : p, "@react-aria/datepicker"),
        { isInvalid: x, validationErrors: B, validationDetails: E } = a.displayValidation,
        {
            labelProps: F,
            fieldProps: w,
            descriptionProps: $,
            errorMessageProps: R,
        } = (0, m.U)({
            ...e,
            labelElementType: "span",
            isInvalid: x,
            errorMessage: e.errorMessage || B,
        }),
        Z = (0, r.H)(a, t),
        k = w["aria-labelledby"] || w.id,
        { locale: A } = (0, f.j)(),
        P = a.formatValue(A, { month: "long" }),
        S = P ? C.format("selectedDateDescription", { date: P }) : "",
        M = (0, l.P)(S),
        V = [M["aria-describedby"], w["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        I = (0, s.z)(e),
        z = (0, y.useMemo)(() => (0, i.E7)(t), [t]),
        O = (0, y.useRef)(!1),
        { focusWithinProps: j } = (0, D.L)({
            ...e,
            isDisabled: a.isOpen,
            onBlurWithin: (a) => {
                let t = document.getElementById(v);
                if (!(null == t ? void 0 : t.contains(a.relatedTarget))) {
                    var u, n;
                    (O.current = !1),
                        null == (u = e.onBlur) || u.call(e, a),
                        null == (n = e.onFocusChange) || n.call(e, !1);
                }
            },
            onFocusWithin: (a) => {
                if (!O.current) {
                    var t, u;
                    (O.current = !0),
                        null == (t = e.onFocus) || t.call(e, a),
                        null == (u = e.onFocusChange) || u.call(e, !0);
                }
            },
        });
    return {
        groupProps: (0, d.d)(I, Z, w, M, j, {
            role: "group",
            "aria-disabled": e.isDisabled || null,
            "aria-labelledby": k,
            "aria-describedby": V,
            onKeyDown(t) {
                !a.isOpen && e.onKeyDown && e.onKeyDown(t);
            },
            onKeyUp(t) {
                !a.isOpen && e.onKeyUp && e.onKeyUp(t);
            },
        }),
        labelProps: {
            ...F,
            onClick: () => {
                z.focusFirst();
            },
        },
        fieldProps: {
            ...w,
            id: b,
            [n.KX]: "presentation",
            "aria-describedby": V,
            value: a.value,
            defaultValue: a.defaultValue,
            onChange: a.setValue,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            granularity: e.granularity,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior,
            [c.tL]: a,
            autoFocus: e.autoFocus,
            name: e.name,
            form: e.form,
        },
        descriptionProps: $,
        errorMessageProps: R,
        buttonProps: {
            ...M,
            id: g,
            "aria-haspopup": "dialog",
            "aria-label": C.format("calendar"),
            "aria-labelledby": `${g} ${k}`,
            "aria-describedby": V,
            "aria-expanded": a.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => a.setOpen(!0),
        },
        dialogProps: {
            id: v,
            "aria-labelledby": `${g} ${k}`,
        },
        calendarProps: {
            autoFocus: !0,
            value: a.dateValue,
            onChange: a.setDateValue,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            defaultFocusedValue: a.dateValue ? void 0 : e.placeholderValue,
            isInvalid: a.isInvalid,
            errorMessage:
                "function" == typeof e.errorMessage
                    ? e.errorMessage(a.displayValidation)
                    : e.errorMessage || a.displayValidation.validationErrors.join(" "),
            firstDayOfWeek: e.firstDayOfWeek,
            pageBehavior: e.pageBehavior,
        },
        isInvalid: x,
        validationErrors: B,
        validationDetails: E,
    };
}
