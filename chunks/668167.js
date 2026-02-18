t.d(a, { Q: () => g });
var r = t(908909),
    n = t(974111),
    i = t(185288),
    o = t(13163),
    u = t(723906),
    l = t(807177),
    s = t(290424),
    d = t(803082),
    c = t(339241),
    m = t(447432),
    h = t(744493),
    D = t(47276),
    y = t(853590),
    p = t(64700);
function g(e, a, t) {
    var g;
    let f = (0, u.Bi)(),
        v = (0, u.Bi)(),
        b = (0, u.Bi)(),
        A = (0, D.o)((g = r.A) && g.__esModule ? g.default : g, "@react-aria/datepicker"),
        { isInvalid: $, validationErrors: w, validationDetails: R } = a.displayValidation,
        {
            labelProps: P,
            fieldProps: k,
            descriptionProps: x,
            errorMessageProps: C,
        } = (0, m.M)({ ...e, labelElementType: "span", isInvalid: $, errorMessage: e.errorMessage || w }),
        E = (0, i.P)(a, t),
        S = k["aria-labelledby"] || k.id,
        { locale: F } = (0, y.Y)(),
        B = a.formatValue(F, { month: "long" }),
        V = B ? A.format("selectedDateDescription", { date: B }) : "",
        M = (0, l.I)(V),
        I = [M["aria-describedby"], k["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        T = (0, s.$)(e),
        O = (0, p.useMemo)(() => (0, o.C7)(t), [t]),
        N = (0, p.useRef)(!1),
        { focusWithinProps: z } = (0, h.R)({
            ...e,
            isDisabled: a.isOpen,
            onBlurWithin: (a) => {
                let t = document.getElementById(v);
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
        groupProps: (0, d.v)(T, E, k, M, z, {
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
            ...k,
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
        descriptionProps: x,
        errorMessageProps: C,
        buttonProps: {
            ...M,
            id: f,
            "aria-haspopup": "dialog",
            "aria-label": A.format("calendar"),
            "aria-labelledby": `${f} ${S}`,
            "aria-describedby": I,
            "aria-expanded": a.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => a.setOpen(!0),
        },
        dialogProps: { id: v, "aria-labelledby": `${f} ${S}` },
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
        isInvalid: $,
        validationErrors: w,
        validationDetails: R,
    };
}
