t.d(a, { lr: () => Y, Ur: () => G });
var r = t(160844),
    n = t(514180),
    i = t(407815),
    o = t(54041),
    l = t(576967),
    u = t(333018),
    s = t(195438),
    d = t(139018),
    c = t(594247),
    m = t(840140),
    h = t(256062),
    y = t(582128),
    D = t(467324);
let p = ["day", "month", "year"],
    g = { hour: 1, minute: 2, second: 3 };
function f(e) {
    let { state: a } = e,
        { containerProps: t, inputProps: r } = (function (e, a) {
            let { autoComplete: t, isDisabled: r, name: n } = e,
                { visuallyHiddenProps: i } = (0, D.B)({ style: { position: "fixed", top: 0, left: 0 } }),
                o = 60;
            "second" === a.granularity ? (o = 1) : "hour" === a.granularity && (o = 3600);
            let l = "";
            a.value &&
                (l =
                    "day" === a.granularity
                        ? (0, c.gw)(a.value).toString()
                        : (0, c.tR)("timeZone" in a.value ? (0, c.Ou)(a.value) : a.value).toString());
            let u = "day" === a.granularity ? "date" : "datetime-local",
                s = ["hour", "minute", "second"],
                d = 0;
            return (
                s.includes(a.granularity) && ((d = g[a.granularity]), (s = s.slice(0, d))),
                {
                    containerProps: {
                        ...i,
                        "aria-hidden": !0,
                        "data-react-aria-prevent-focus": !0,
                        "data-a11y-ignore": "aria-hidden-focus",
                    },
                    inputProps: {
                        tabIndex: -1,
                        autoComplete: t,
                        disabled: r,
                        type: u,
                        form: "",
                        name: n,
                        step: o,
                        value: l,
                        onChange: (e) => {
                            let t = (0, h.wt)(e).value.toString();
                            if (t)
                                try {
                                    let e = (0, m.DP)(t);
                                    if (("day" === a.granularity && (e = (0, m._U)(t)), "setSegment" in a))
                                        for (let t in e)
                                            p.includes(t) && a.setSegment(t, e[t]),
                                                s.includes(t) && a.setSegment(t, e[t]);
                                    a.setValue(e);
                                } catch {}
                        },
                    },
                }
            );
        })({ ...e }, a);
    return y.createElement("div", { ...t, "data-testid": "hidden-dateinput-container" }, y.createElement("input", r));
}
var v = t(154370);
let b = (0, y.createContext)(null);
var $ = t(67105),
    R = t(117530),
    P = t(961082),
    w = t(394714),
    C = t(184093),
    x = t(995334),
    k = t(152469),
    S = t(383491),
    E = t(465878),
    V = t(761412),
    F = t(295551),
    B = t(366632),
    M = t(481238),
    I = t(572313),
    A = t(741142),
    T = t(526739);
function O(e) {
    let [a, t] = (0, T.P)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
        [r, n] = (0, y.useState)(null),
        i = (0, y.useCallback)(() => {
            t(!0);
        }, [t]),
        o = (0, y.useCallback)(() => {
            t(!1);
        }, [t]),
        l = (0, y.useCallback)(() => {
            t(!a);
        }, [t, a]);
    return { isOpen: a, setOpen: t, open: i, close: o, toggle: l, point: r, setPoint: n };
}
var N = t(825503);
function Z(e) {
    return e?.start != null && null != e.end;
}
var U = t(288378);
let z = (0, y.createContext)(null),
    j = (0, y.createContext)(null),
    K = (0, y.createContext)(null),
    L = (0, y.createContext)(null),
    J = [d.t, r.k, v.I, $.h],
    Y = (0, y.forwardRef)(function (e, a) {
        [e, a] = (0, i.JT)(e, a, z);
        let { validationBehavior: t } = (0, i.CC)(s.c) || {},
            m = e.validationBehavior ?? t ?? "native",
            D = (function (e) {
                let a = O(e),
                    [t, r] = (0, T.P)(e.value, e.defaultValue || null, e.onChange),
                    [n] = (0, y.useState)(t),
                    i = t || e.placeholderValue || null,
                    [o, l] = (0, A.bf)(i, e.granularity),
                    u = null != t ? t.toDate(l ?? "UTC") : null,
                    s = "hour" === o || "minute" === o || "second" === o,
                    d = e.shouldCloseOnSelect ?? !0,
                    [m, h] = (0, y.useState)(null),
                    [D, p] = (0, y.useState)(null);
                if ((t && ((m = t), "hour" in t && (D = t)), i && !(o in i)))
                    throw Error("Invalid granularity " + o + " for value " + i.toString());
                let g = t?.calendar.identifier === "gregory" && "BC" === t.era,
                    f = (0, y.useMemo)(
                        () => ({
                            granularity: o,
                            timeZone: l,
                            hideTimeZone: e.hideTimeZone,
                            hourCycle: e.hourCycle,
                            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                            showEra: g,
                        }),
                        [o, e.hourCycle, e.shouldForceLeadingZeros, l, e.hideTimeZone, g],
                    ),
                    { minValue: v, maxValue: b, isDateUnavailable: $ } = e,
                    R = (0, y.useMemo)(() => (0, A.nz)(t, v, b, $, f), [t, v, b, $, f]),
                    P = (0, I.KZ)({ ...e, value: t, builtinValidation: R }),
                    w = P.displayValidation.isInvalid,
                    C = e.validationState || (w ? "invalid" : null),
                    x = (e, a) => {
                        r("timeZone" in a ? a.set((0, c.gw)(e)) : (0, c.tR)(e, a)),
                            h(null),
                            p(null),
                            P.commitValidation();
                    };
                return {
                    ...P,
                    value: t,
                    defaultValue: e.defaultValue ?? n,
                    setValue: r,
                    dateValue: m,
                    timeValue: D,
                    setDateValue: (t) => {
                        let n = "function" == typeof d ? d() : d;
                        s
                            ? D || n
                                ? x(t, D || (0, A.$l)(e.defaultValue || e.placeholderValue))
                                : h(t)
                            : (r(t), P.commitValidation()),
                            n && a.setOpen(!1);
                    },
                    setTimeValue: (e) => {
                        m && e ? x(m, e) : p(e);
                    },
                    granularity: o,
                    hasTime: s,
                    ...a,
                    setOpen(r) {
                        !r && !t && m && s && x(m, D || (0, A.$l)(e.defaultValue || e.placeholderValue)), a.setOpen(r);
                    },
                    validationState: C,
                    isInvalid: w,
                    formatValue(e, a) {
                        if (!u) return "";
                        let t = (0, A.id)(a, f);
                        return new (0, N.p)(e, t).format(u);
                    },
                    getDateFormatter(e, a) {
                        let t = { ...f, ...a },
                            r = (0, A.id)({}, t);
                        return new (0, N.p)(e, r);
                    },
                };
            })({ ...e, validationBehavior: m }),
            p = (0, y.useRef)(null),
            [g, Z] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: j,
                labelProps: L,
                fieldProps: Y,
                buttonProps: G,
                dialogProps: W,
                calendarProps: q,
                descriptionProps: H,
                errorMessageProps: _,
                ...Q
            } = (function (e, a, t) {
                var r;
                let n = (0, F.Bi)(),
                    i = (0, F.Bi)(),
                    o = (0, F.Bi)(),
                    l = (0, M.o)((r = w.A) && r.__esModule ? r.default : r, "@react-aria/datepicker"),
                    { isInvalid: u, validationErrors: s, validationDetails: d } = a.displayValidation,
                    {
                        labelProps: c,
                        fieldProps: m,
                        descriptionProps: D,
                        errorMessageProps: p,
                    } = (0, E.M)({ ...e, labelElementType: "span", isInvalid: u, errorMessage: e.errorMessage || s }),
                    g = (0, k.P)(a, t),
                    f = m["aria-labelledby"] || m.id,
                    { locale: v } = (0, B.Y)(),
                    b = a.formatValue(v, { month: "long" }),
                    $ = b ? l.format("selectedDateDescription", { date: b }) : "",
                    A = (0, S.I)($),
                    T = [A["aria-describedby"], m["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                    O = (0, P.$)(e),
                    N = (0, y.useMemo)(() => (0, R.C7)(t), [t]),
                    Z = (0, y.useRef)(!1),
                    { focusWithinProps: U } = (0, V.R)({
                        ...e,
                        isDisabled: a.isOpen,
                        onBlurWithin: (a) => {
                            let t = document.getElementById(i);
                            (0, h.sD)(t, a.relatedTarget) || ((Z.current = !1), e.onBlur?.(a), e.onFocusChange?.(!1));
                        },
                        onFocusWithin: (a) => {
                            Z.current || ((Z.current = !0), e.onFocus?.(a), e.onFocusChange?.(!0));
                        },
                    });
                return {
                    groupProps: (0, C.v)(O, g, m, A, U, {
                        role: "group",
                        "aria-disabled": e.isDisabled || null,
                        "aria-labelledby": f,
                        "aria-describedby": T,
                        onKeyDown(t) {
                            !a.isOpen && e.onKeyDown && e.onKeyDown(t);
                        },
                        onKeyUp(t) {
                            !a.isOpen && e.onKeyUp && e.onKeyUp(t);
                        },
                    }),
                    labelProps: {
                        ...c,
                        onClick: () => {
                            N.focusFirst();
                        },
                    },
                    fieldProps: {
                        ...m,
                        id: o,
                        [x.pK]: "presentation",
                        "aria-describedby": T,
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
                        [I.Lf]: a,
                        autoFocus: e.autoFocus,
                        name: e.name,
                        form: e.form,
                    },
                    descriptionProps: D,
                    errorMessageProps: p,
                    buttonProps: {
                        ...A,
                        id: n,
                        "aria-haspopup": "dialog",
                        "aria-label": l.format("calendar"),
                        "aria-labelledby": `${n} ${f}`,
                        "aria-describedby": T,
                        "aria-expanded": a.isOpen,
                        isDisabled: e.isDisabled || e.isReadOnly,
                        onPress: () => a.setOpen(!0),
                    },
                    dialogProps: { id: i, "aria-labelledby": `${n} ${f}` },
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
                    isInvalid: u,
                    validationErrors: s,
                    validationDetails: d,
                };
            })({ ...(0, i.SK)(e), label: Z, validationBehavior: m }, D, p),
            { focusProps: X, isFocused: ee, isFocusVisible: ea } = (0, U.o)({ within: !0 }),
            et = (0, i.Sl)({
                ...e,
                values: {
                    state: D,
                    isFocusWithin: ee,
                    isFocusVisible: ea,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: D.isInvalid,
                    isOpen: D.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                    isRequired: e.isRequired || !1,
                },
                defaultClassName: "react-aria-DatePicker",
            }),
            er = (0, P.$)(e, { global: !0 });
        return (
            delete er.id,
            y.createElement(
                i.Kq,
                {
                    values: [
                        [K, D],
                        [d.t, { ...j, ref: p, isInvalid: D.isInvalid }],
                        [o.cQ, Y],
                        [r.k, { ...G, isPressed: D.isOpen }],
                        [v.I, { ...L, ref: g, elementType: "span" }],
                        [n.Yi, q],
                        [l.RG, D],
                        [b, { trigger: "DatePicker", triggerRef: p, placement: "bottom start", clearContexts: J }],
                        [l.MV, W],
                        [$.h, { slots: { description: H, errorMessage: _ } }],
                        [u.C, Q],
                    ],
                },
                y.createElement(i.tT.div, {
                    ...(0, C.v)(er, et, X),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": ee || void 0,
                    "data-invalid": D.isInvalid || void 0,
                    "data-focus-visible": ea || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-required": e.isRequired || void 0,
                    "data-open": D.isOpen || void 0,
                }),
                y.createElement(f, { autoComplete: e.autoComplete, name: e.name, isDisabled: e.isDisabled, state: D }),
            )
        );
    }),
    G = (0, y.forwardRef)(function (e, a) {
        [e, a] = (0, i.JT)(e, a, j);
        let { validationBehavior: t } = (0, i.CC)(s.c) || {},
            m = e.validationBehavior ?? t ?? "native",
            D = (function (e) {
                let a = O(e),
                    [t, r] = (0, T.P)(e.value, e.defaultValue || null, e.onChange),
                    [n] = (0, y.useState)(t),
                    [i, o] = (0, y.useState)(() => t || { start: null, end: null });
                null == t && i.start && i.end && o((i = { start: null, end: null }));
                let l = t || i,
                    u = (e) => {
                        o((l = e || { start: null, end: null })), Z(l) ? r(l) : r(null);
                    },
                    s = l?.start || l?.end || e.placeholderValue || null,
                    [d, m] = (0, A.bf)(s, e.granularity),
                    h = "hour" === d || "minute" === d || "second" === d,
                    D = e.shouldCloseOnSelect ?? !0,
                    [p, g] = (0, y.useState)(null),
                    [f, v] = (0, y.useState)(null);
                l && Z(l) && ((p = l), "hour" in l.start && (f = l));
                let b = (e, a) => {
                        u({
                            start:
                                "timeZone" in a.start ? a.start.set((0, c.gw)(e.start)) : (0, c.tR)(e.start, a.start),
                            end: "timeZone" in a.end ? a.end.set((0, c.gw)(e.end)) : (0, c.tR)(e.end, a.end),
                        }),
                            g(null),
                            v(null),
                            E.commitValidation();
                    },
                    $ = (t) => {
                        let r = "function" == typeof D ? D() : D;
                        h
                            ? Z(t) && (r || (f?.start && f?.end))
                                ? b(t, {
                                      start: f?.start || (0, A.$l)(e.placeholderValue),
                                      end: f?.end || (0, A.$l)(e.placeholderValue),
                                  })
                                : g(t)
                            : Z(t)
                              ? (u(t), E.commitValidation())
                              : g(t),
                            r && a.setOpen(!1);
                    },
                    R = (e) => {
                        Z(p) && Z(e) ? b(p, e) : v(e);
                    },
                    P =
                        (l?.start?.calendar.identifier === "gregory" && "BC" === l.start.era) ||
                        (l?.end?.calendar.identifier === "gregory" && "BC" === l.end.era),
                    w = (0, y.useMemo)(
                        () => ({
                            granularity: d,
                            timeZone: m,
                            hideTimeZone: e.hideTimeZone,
                            hourCycle: e.hourCycle,
                            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                            showEra: P,
                        }),
                        [d, e.hourCycle, e.shouldForceLeadingZeros, m, e.hideTimeZone, P],
                    ),
                    { minValue: C, maxValue: x, isDateUnavailable: k } = e,
                    S = (0, y.useMemo)(() => (0, A.eD)(l, C, x, k ? (e) => k(e, null) : void 0, w), [l, C, x, k, w]),
                    E = (0, I.KZ)({
                        ...e,
                        value: t,
                        name: (0, y.useMemo)(
                            () => [e.startName, e.endName].filter((e) => null != e),
                            [e.startName, e.endName],
                        ),
                        builtinValidation: S,
                    }),
                    V = E.displayValidation.isInvalid,
                    F = e.validationState || (V ? "invalid" : null);
                return {
                    ...E,
                    value: l,
                    defaultValue: e.defaultValue ?? n,
                    setValue: u,
                    dateRange: p,
                    timeRange: f,
                    granularity: d,
                    hasTime: h,
                    setDate(e, a) {
                        "start" === e ? $({ start: a, end: p?.end ?? null }) : $({ start: p?.start ?? null, end: a });
                    },
                    setTime(e, a) {
                        "start" === e ? R({ start: a, end: f?.end ?? null }) : R({ start: f?.start ?? null, end: a });
                    },
                    setDateTime(e, a) {
                        "start" === e ? u({ start: a, end: l?.end ?? null }) : u({ start: l?.start ?? null, end: a });
                    },
                    setDateRange: $,
                    setTimeRange: R,
                    ...a,
                    setOpen(t) {
                        !t &&
                            !(l?.start && l?.end) &&
                            Z(p) &&
                            h &&
                            b(p, {
                                start: f?.start || (0, A.$l)(e.placeholderValue),
                                end: f?.end || (0, A.$l)(e.placeholderValue),
                            }),
                            a.setOpen(t);
                    },
                    validationState: F,
                    isInvalid: V,
                    formatValue(a, t) {
                        let r;
                        if (!l || !l.start || !l.end) return null;
                        let n = "timeZone" in l.start ? l.start.timeZone : void 0,
                            i = e.granularity || (l.start && "minute" in l.start ? "minute" : "day"),
                            o = "timeZone" in l.end ? l.end.timeZone : void 0,
                            u = e.granularity || (l.end && "minute" in l.end ? "minute" : "day"),
                            s = (0, A.id)(t, {
                                granularity: i,
                                timeZone: n,
                                hideTimeZone: e.hideTimeZone,
                                hourCycle: e.hourCycle,
                                showEra:
                                    ("gregory" === l.start.calendar.identifier && "BC" === l.start.era) ||
                                    ("gregory" === l.end.calendar.identifier && "BC" === l.end.era),
                            }),
                            d = l.start.toDate(n || "UTC"),
                            c = l.end.toDate(o || "UTC"),
                            m = new (0, N.p)(a, s);
                        if (n === o && i === u && 0 !== l.start.compare(l.end)) {
                            try {
                                let e = m.formatRangeToParts(d, c),
                                    a = -1;
                                for (let t = 0; t < e.length; t++) {
                                    let r = e[t];
                                    if ("shared" === r.source && "literal" === r.type) a = t;
                                    else if ("endRange" === r.source) break;
                                }
                                let t = "",
                                    r = "";
                                for (let n = 0; n < e.length; n++)
                                    n < a ? (t += e[n].value) : n > a && (r += e[n].value);
                                return { start: t, end: r };
                            } catch {}
                            r = m;
                        } else {
                            let n = (0, A.id)(t, {
                                granularity: u,
                                timeZone: o,
                                hideTimeZone: e.hideTimeZone,
                                hourCycle: e.hourCycle,
                            });
                            r = new (0, N.p)(a, n);
                        }
                        return { start: m.format(d), end: r.format(c) };
                    },
                    getDateFormatter(e, a) {
                        let t = { ...w, ...a },
                            r = (0, A.id)({}, t);
                        return new (0, N.p)(e, r);
                    },
                };
            })({ ...e, validationBehavior: m }),
            p = (0, y.useRef)(null),
            [g, f] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: z,
                labelProps: K,
                startFieldProps: Y,
                endFieldProps: G,
                buttonProps: W,
                dialogProps: q,
                calendarProps: H,
                descriptionProps: _,
                errorMessageProps: Q,
                ...X
            } = (function (e, a, t) {
                var r;
                let n = (0, M.o)((r = w.A) && r.__esModule ? r.default : r, "@react-aria/datepicker"),
                    { isInvalid: i, validationErrors: o, validationDetails: l } = a.displayValidation,
                    {
                        labelProps: u,
                        fieldProps: s,
                        descriptionProps: d,
                        errorMessageProps: c,
                    } = (0, E.M)({ ...e, labelElementType: "span", isInvalid: i, errorMessage: e.errorMessage || o }),
                    m = s["aria-labelledby"] || s.id,
                    { locale: D } = (0, B.Y)(),
                    p = a.formatValue(D, { month: "long" }),
                    g = p ? n.format("selectedRangeDescription", { startDate: p.start, endDate: p.end }) : "",
                    f = (0, S.I)(g),
                    v = { "aria-label": n.format("startDate"), "aria-labelledby": m },
                    b = { "aria-label": n.format("endDate"), "aria-labelledby": m },
                    $ = (0, F.Bi)(),
                    A = (0, F.Bi)(),
                    T = (0, k.P)(a, t),
                    O = [f["aria-describedby"], s["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                    N = (0, y.useMemo)(() => (0, R.C7)(t, { accept: (e) => e.id !== $ }), [t, $]),
                    Z = {
                        [x.so]: N,
                        [x.pK]: "presentation",
                        "aria-describedby": O,
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
                    U = (0, P.$)(e),
                    z = (0, y.useRef)(!1),
                    { focusWithinProps: j } = (0, V.R)({
                        ...e,
                        isDisabled: a.isOpen,
                        onBlurWithin: (a) => {
                            let t = document.getElementById(A);
                            (0, h.sD)(t, a.relatedTarget) || ((z.current = !1), e.onBlur?.(a), e.onFocusChange?.(!1));
                        },
                        onFocusWithin: (a) => {
                            z.current || ((z.current = !0), e.onFocus?.(a), e.onFocusChange?.(!0));
                        },
                    }),
                    K = (0, y.useRef)(I.YD),
                    L = (0, y.useRef)(I.YD);
                return {
                    groupProps: (0, C.v)(U, T, s, f, j, {
                        role: "group",
                        "aria-disabled": e.isDisabled || null,
                        "aria-describedby": O,
                        onKeyDown(t) {
                            !a.isOpen && e.onKeyDown && e.onKeyDown(t);
                        },
                        onKeyUp(t) {
                            !a.isOpen && e.onKeyUp && e.onKeyUp(t);
                        },
                    }),
                    labelProps: {
                        ...u,
                        onClick: () => {
                            N.focusFirst();
                        },
                    },
                    buttonProps: {
                        ...f,
                        id: $,
                        "aria-haspopup": "dialog",
                        "aria-label": n.format("calendar"),
                        "aria-labelledby": `${$} ${m}`,
                        "aria-describedby": O,
                        "aria-expanded": a.isOpen,
                        isDisabled: e.isDisabled || e.isReadOnly,
                        onPress: () => a.setOpen(!0),
                    },
                    dialogProps: { id: A, "aria-labelledby": `${$} ${m}` },
                    startFieldProps: {
                        ...v,
                        ...Z,
                        value: a.value?.start ?? null,
                        defaultValue: a.defaultValue?.start,
                        onChange: (e) => a.setDateTime("start", e),
                        autoFocus: e.autoFocus,
                        name: e.startName,
                        form: e.form,
                        [I.Lf]: {
                            realtimeValidation: a.realtimeValidation,
                            displayValidation: a.displayValidation,
                            updateValidation(e) {
                                (K.current = e), a.updateValidation((0, I.cX)(e, L.current));
                            },
                            resetValidation: a.resetValidation,
                            commitValidation: a.commitValidation,
                        },
                    },
                    endFieldProps: {
                        ...b,
                        ...Z,
                        value: a.value?.end ?? null,
                        defaultValue: a.defaultValue?.end,
                        onChange: (e) => a.setDateTime("end", e),
                        name: e.endName,
                        form: e.form,
                        [I.Lf]: {
                            realtimeValidation: a.realtimeValidation,
                            displayValidation: a.displayValidation,
                            updateValidation(e) {
                                (L.current = e), a.updateValidation((0, I.cX)(K.current, e));
                            },
                            resetValidation: a.resetValidation,
                            commitValidation: a.commitValidation,
                        },
                    },
                    descriptionProps: d,
                    errorMessageProps: c,
                    calendarProps: {
                        autoFocus: !0,
                        value: a.dateRange?.start && a.dateRange.end ? a.dateRange : null,
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
                    isInvalid: i,
                    validationErrors: o,
                    validationDetails: l,
                };
            })({ ...(0, i.SK)(e), label: f, validationBehavior: m }, D, p),
            { focusProps: ee, isFocused: ea, isFocusVisible: et } = (0, U.o)({ within: !0 }),
            er = (0, i.Sl)({
                ...e,
                values: {
                    state: D,
                    isFocusWithin: ea,
                    isFocusVisible: et,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: D.isInvalid,
                    isOpen: D.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                    isRequired: e.isRequired || !1,
                },
                defaultClassName: "react-aria-DateRangePicker",
            }),
            en = (0, P.$)(e, { global: !0 });
        return (
            delete en.id,
            y.createElement(
                i.Kq,
                {
                    values: [
                        [L, D],
                        [d.t, { ...z, ref: p, isInvalid: D.isInvalid }],
                        [r.k, { ...W, isPressed: D.isOpen }],
                        [v.I, { ...K, ref: g, elementType: "span" }],
                        [n.pr, H],
                        [l.RG, D],
                        [b, { trigger: "DateRangePicker", triggerRef: p, placement: "bottom start", clearContexts: J }],
                        [l.MV, q],
                        [o.cQ, { slots: { start: Y, end: G } }],
                        [$.h, { slots: { description: _, errorMessage: Q } }],
                        [u.C, X],
                    ],
                },
                y.createElement(i.tT.div, {
                    ...(0, C.v)(en, er, ee),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": ea || void 0,
                    "data-invalid": D.isInvalid || void 0,
                    "data-focus-visible": et || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-required": e.isRequired || void 0,
                    "data-open": D.isOpen || void 0,
                }),
            )
        );
    });
