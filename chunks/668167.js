"use strict";
n.d(t, { Q: () => E });
var r = n(908909),
    i = n(974111),
    a = n(185288),
    s = n(13163),
    o = n(723906),
    l = n(807177),
    u = n(290424),
    c = n(803082),
    d = n(339241),
    _ = n(447432),
    f = n(744493),
    p = n(47276),
    h = n(853590),
    m = n(64700);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
function E(e, t, n) {
    let E = (0, o.Bi)(),
        A = (0, o.Bi)(),
        I = (0, o.Bi)(),
        T = (0, p.o)(g(r.A), "@react-aria/datepicker"),
        { isInvalid: y, validationErrors: S, validationDetails: v } = t.displayValidation,
        {
            labelProps: C,
            fieldProps: b,
            descriptionProps: N,
            errorMessageProps: R,
        } = (0, _.M)({ ...e, labelElementType: "span", isInvalid: y, errorMessage: e.errorMessage || S }),
        O = (0, a.P)(t, n),
        D = b["aria-labelledby"] || b.id,
        { locale: L } = (0, h.Y)(),
        w = t.formatValue(L, { month: "long" }),
        x = w ? T.format("selectedDateDescription", { date: w }) : "",
        P = (0, l.I)(x),
        M = [P["aria-describedby"], b["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        k = (0, u.$)(e),
        U = (0, m.useMemo)(() => (0, s.C7)(n), [n]),
        G = (0, m.useRef)(!1),
        { focusWithinProps: V } = (0, f.R)({
            ...e,
            isDisabled: t.isOpen,
            onBlurWithin: (t) => {
                let n = document.getElementById(A);
                if (!(null == n ? void 0 : n.contains(t.relatedTarget))) {
                    var r, i;
                    (G.current = !1),
                        null == (r = e.onBlur) || r.call(e, t),
                        null == (i = e.onFocusChange) || i.call(e, !1);
                }
            },
            onFocusWithin: (t) => {
                if (!G.current) {
                    var n, r;
                    (G.current = !0),
                        null == (n = e.onFocus) || n.call(e, t),
                        null == (r = e.onFocusChange) || r.call(e, !0);
                }
            },
        });
    return {
        groupProps: (0, c.v)(k, O, b, P, V, {
            role: "group",
            "aria-disabled": e.isDisabled || null,
            "aria-labelledby": D,
            "aria-describedby": M,
            onKeyDown(n) {
                !t.isOpen && e.onKeyDown && e.onKeyDown(n);
            },
            onKeyUp(n) {
                !t.isOpen && e.onKeyUp && e.onKeyUp(n);
            },
        }),
        labelProps: {
            ...C,
            onClick: () => {
                U.focusFirst();
            },
        },
        fieldProps: {
            ...b,
            id: I,
            [i.pK]: "presentation",
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
            [d.Lf]: t,
            autoFocus: e.autoFocus,
            name: e.name,
            form: e.form,
        },
        descriptionProps: N,
        errorMessageProps: R,
        buttonProps: {
            ...P,
            id: E,
            "aria-haspopup": "dialog",
            "aria-label": T.format("calendar"),
            "aria-labelledby": `${E} ${D}`,
            "aria-describedby": M,
            "aria-expanded": t.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => t.setOpen(!0),
        },
        dialogProps: { id: A, "aria-labelledby": `${E} ${D}` },
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
        isInvalid: y,
        validationErrors: S,
        validationDetails: v,
    };
}
