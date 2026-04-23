t.d(a, { Q: () => g });
var r = t(908909),
    n = t(974111),
    i = t(185288),
    l = t(13163),
    o = t(723906),
    u = t(807177),
    s = t(290424),
    d = t(803082),
    c = t(339241),
    m = t(447432),
    h = t(744493),
    y = t(47276),
    D = t(853590),
    p = t(64700);
function g(e, a, t) {
    var g;
    let v = (0, o.Bi)(),
        f = (0, o.Bi)(),
        b = (0, o.Bi)(),
        A = (0, y.o)((g = r.A) && g.__esModule ? g.default : g, "@react-aria/datepicker"),
        { isInvalid: R, validationErrors: $, validationDetails: w } = a.displayValidation,
        {
            labelProps: P,
            fieldProps: C,
            descriptionProps: k,
            errorMessageProps: x,
        } = (0, m.M)({ ...e, labelElementType: "span", isInvalid: R, errorMessage: e.errorMessage || $ }),
        E = (0, i.P)(a, t),
        S = C["aria-labelledby"] || C.id,
        { locale: V } = (0, D.Y)(),
        F = a.formatValue(V, { month: "long" }),
        B = F ? A.format("selectedDateDescription", { date: F }) : "",
        M = (0, u.I)(B),
        I = [M["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        T = (0, s.$)(e),
        O = (0, p.useMemo)(() => (0, l.C7)(t), [t]),
        N = (0, p.useRef)(!1),
        { focusWithinProps: Z } = (0, h.R)({
            ...e,
            isDisabled: a.isOpen,
            onBlurWithin: (a) => {
                let t = document.getElementById(f);
                if (!(null == t ? void 0 : t.contains(a.relatedTarget))) {
                    var r, n;
                    (N.current = !1),
                        null == (r = e.onBlur) || r.call(e, a),
                        null == (n = e.onFocusChange) || n.call(e, !1);
                }
            },
            onFocusWithin: (a) => {
                if (!N.current) {
                    var t, r;
                    (N.current = !0),
                        null == (t = e.onFocus) || t.call(e, a),
                        null == (r = e.onFocusChange) || r.call(e, !0);
                }
            },
        });
    return {
        groupProps: (0, d.v)(T, E, C, M, Z, {
            role: "group",
            "aria-disabled": e.isDisabled || null,
            "aria-labelledby": S,
            "aria-describedby": I,
            onKeyDown(t) {
                !a.isOpen && e.onKeyDown && e.onKeyDown(t);
            },
            onKeyUp(t) {
                !a.isOpen && e.onKeyUp && e.onKeyUp(t);
            },
        }),
        labelProps: {
            ...P,
            onClick: () => {
                O.focusFirst();
            },
        },
        fieldProps: {
            ...C,
            id: b,
            [n.pK]: "presentation",
            "aria-describedby": I,
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
            [c.Lf]: a,
            autoFocus: e.autoFocus,
            name: e.name,
            form: e.form,
        },
        descriptionProps: k,
        errorMessageProps: x,
        buttonProps: {
            ...M,
            id: v,
            "aria-haspopup": "dialog",
            "aria-label": A.format("calendar"),
            "aria-labelledby": `${v} ${S}`,
            "aria-describedby": I,
            "aria-expanded": a.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => a.setOpen(!0),
        },
        dialogProps: { id: f, "aria-labelledby": `${v} ${S}` },
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
        isInvalid: R,
        validationErrors: $,
        validationDetails: w,
    };
}
