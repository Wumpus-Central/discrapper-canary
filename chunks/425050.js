t.d(a, { Z: () => g });
var r = t(974111),
    n = t(908909),
    i = t(185288),
    l = t(13163),
    o = t(339241),
    u = t(807177),
    s = t(723906),
    d = t(290424),
    c = t(803082),
    m = t(447432),
    h = t(744493),
    y = t(47276),
    D = t(853590),
    p = t(64700);
function g(e, a, t) {
    var g, v, f, b, A, R, $, w;
    let P = (0, y.o)((w = n.A) && w.__esModule ? w.default : w, "@react-aria/datepicker"),
        { isInvalid: C, validationErrors: k, validationDetails: x } = a.displayValidation,
        {
            labelProps: E,
            fieldProps: S,
            descriptionProps: V,
            errorMessageProps: F,
        } = (0, m.M)({ ...e, labelElementType: "span", isInvalid: C, errorMessage: e.errorMessage || k }),
        B = S["aria-labelledby"] || S.id,
        { locale: M } = (0, D.Y)(),
        I = a.formatValue(M, { month: "long" }),
        T = I ? P.format("selectedRangeDescription", { startDate: I.start, endDate: I.end }) : "",
        O = (0, u.I)(T),
        N = { "aria-label": P.format("startDate"), "aria-labelledby": B },
        Z = { "aria-label": P.format("endDate"), "aria-labelledby": B },
        z = (0, s.Bi)(),
        U = (0, s.Bi)(),
        j = (0, i.P)(a, t),
        K = [O["aria-describedby"], S["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        L = (0, p.useMemo)(() => (0, l.C7)(t, { accept: (e) => e.id !== z }), [t, z]),
        J = {
            [r.so]: L,
            [r.pK]: "presentation",
            "aria-describedby": K,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            granularity: e.granularity,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior,
        },
        Y = (0, d.$)(e),
        W = (0, p.useRef)(!1),
        { focusWithinProps: G } = (0, h.R)({
            ...e,
            isDisabled: a.isOpen,
            onBlurWithin: (a) => {
                let t = document.getElementById(U);
                if (!(null == t ? void 0 : t.contains(a.relatedTarget))) {
                    var r, n;
                    (W.current = !1),
                        null == (r = e.onBlur) || r.call(e, a),
                        null == (n = e.onFocusChange) || n.call(e, !1);
                }
            },
            onFocusWithin: (a) => {
                if (!W.current) {
                    var t, r;
                    (W.current = !0),
                        null == (t = e.onFocus) || t.call(e, a),
                        null == (r = e.onFocusChange) || r.call(e, !0);
                }
            },
        }),
        H = (0, p.useRef)(o.YD),
        _ = (0, p.useRef)(o.YD);
    return {
        groupProps: (0, c.v)(Y, j, S, O, G, {
            role: "group",
            "aria-disabled": e.isDisabled || null,
            "aria-describedby": K,
            onKeyDown(t) {
                !a.isOpen && e.onKeyDown && e.onKeyDown(t);
            },
            onKeyUp(t) {
                !a.isOpen && e.onKeyUp && e.onKeyUp(t);
            },
        }),
        labelProps: {
            ...E,
            onClick: () => {
                L.focusFirst();
            },
        },
        buttonProps: {
            ...O,
            id: z,
            "aria-haspopup": "dialog",
            "aria-label": P.format("calendar"),
            "aria-labelledby": `${z} ${B}`,
            "aria-describedby": K,
            "aria-expanded": a.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => a.setOpen(!0),
        },
        dialogProps: { id: U, "aria-labelledby": `${z} ${B}` },
        startFieldProps: {
            ...N,
            ...J,
            value: null != (R = null == (g = a.value) ? void 0 : g.start) ? R : null,
            defaultValue: null == (v = a.defaultValue) ? void 0 : v.start,
            onChange: (e) => a.setDateTime("start", e),
            autoFocus: e.autoFocus,
            name: e.startName,
            form: e.form,
            [o.Lf]: {
                realtimeValidation: a.realtimeValidation,
                displayValidation: a.displayValidation,
                updateValidation(e) {
                    (H.current = e), a.updateValidation((0, o.cX)(e, _.current));
                },
                resetValidation: a.resetValidation,
                commitValidation: a.commitValidation,
            },
        },
        endFieldProps: {
            ...Z,
            ...J,
            value: null != ($ = null == (f = a.value) ? void 0 : f.end) ? $ : null,
            defaultValue: null == (b = a.defaultValue) ? void 0 : b.end,
            onChange: (e) => a.setDateTime("end", e),
            name: e.endName,
            form: e.form,
            [o.Lf]: {
                realtimeValidation: a.realtimeValidation,
                displayValidation: a.displayValidation,
                updateValidation(e) {
                    (_.current = e), a.updateValidation((0, o.cX)(H.current, e));
                },
                resetValidation: a.resetValidation,
                commitValidation: a.commitValidation,
            },
        },
        descriptionProps: V,
        errorMessageProps: F,
        calendarProps: {
            autoFocus: !0,
            value: (null == (A = a.dateRange) ? void 0 : A.start) && a.dateRange.end ? a.dateRange : null,
            onChange: a.setDateRange,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            allowsNonContiguousRanges: e.allowsNonContiguousRanges,
            defaultFocusedValue: a.dateRange ? void 0 : e.placeholderValue,
            isInvalid: a.isInvalid,
            errorMessage:
                "function" == typeof e.errorMessage
                    ? e.errorMessage(a.displayValidation)
                    : e.errorMessage || a.displayValidation.validationErrors.join(" "),
            firstDayOfWeek: e.firstDayOfWeek,
            pageBehavior: e.pageBehavior,
        },
        isInvalid: C,
        validationErrors: k,
        validationDetails: x,
    };
}
