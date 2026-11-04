t.d(a, { lr: () => Y, Ur: () => G });
var r = t(51340),
    n = t(221174),
    i = t(980807),
    o = t(10083),
    l = t(372177),
    s = t(592026),
    d = t(582510),
    u = t(755357),
    c = t(594247),
    m = t(840140),
    h = t(518206),
    y = t(582128),
    g = t(77692);
let p = ["day", "month", "year"],
    f = { hour: 1, minute: 2, second: 3 };
function D(e) {
    let { state: a } = e,
        { containerProps: t, inputProps: r } = (function (e, a) {
            let { autoComplete: t, isDisabled: r, name: n } = e,
                { visuallyHiddenProps: i } = (0, g.B)({ style: { position: "fixed", top: 0, left: 0 } }),
                o = 60;
            "second" === a.granularity ? (o = 1) : "hour" === a.granularity && (o = 3600);
            let l = "";
            a.value &&
                (l =
                    "day" === a.granularity
                        ? (0, c.gw)(a.value).toString()
                        : (0, c.tR)("timeZone" in a.value ? (0, c.Ou)(a.value) : a.value).toString());
            let s = "day" === a.granularity ? "date" : "datetime-local",
                d = ["hour", "minute", "second"],
                u = 0;
            return (
                d.includes(a.granularity) && ((u = f[a.granularity]), (d = d.slice(0, u))),
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
                        type: s,
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
                                            (p.includes(t) && a.setSegment(t, e[t]),
                                                d.includes(t) && a.setSegment(t, e[t]));
                                    a.setValue(e);
                                } catch {}
                        },
                    },
                }
            );
        })({ ...e }, a);
    return y.createElement("div", { ...t, "data-testid": "hidden-dateinput-container" }, y.createElement("input", r));
}
var v = t(24322);
let b = (0, y.createContext)(null);
var $ = t(301153),
    R = t(912295),
    P = t(892730),
    w = t(879452),
    x = t(652664),
    k = t(886598),
    S = t(531157),
    V = t(23619),
    C = t(795094),
    M = t(371716),
    I = t(802649),
    E = t(677654),
    F = t(95638),
    T = t(997401),
    O = t(127190),
    A = t(500243);
function N(e) {
    let [a, t] = (0, A.P)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
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
var Z = t(825503);
function U(e) {
    return e?.start != null && null != e.end;
}
var z = t(736570);
let B = (0, y.createContext)(null),
    j = (0, y.createContext)(null),
    K = (0, y.createContext)(null),
    L = (0, y.createContext)(null),
    J = [u.t, r.k, v.I, $.h],
    Y = (0, y.forwardRef)(function (e, a) {
        [e, a] = (0, i.JT)(e, a, B);
        let { validationBehavior: t } = (0, i.CC)(d.c) || {},
            m = e.validationBehavior ?? t ?? "native",
            g = (function (e) {
                let a = N(e),
                    [t, r] = (0, A.P)(e.value, e.defaultValue || null, e.onChange),
                    [n] = (0, y.useState)(t),
                    i = t || e.placeholderValue || null,
                    [o, l] = (0, O.bf)(i, e.granularity),
                    s = null != t ? t.toDate(l ?? "UTC") : null,
                    d = "hour" === o || "minute" === o || "second" === o,
                    u = e.shouldCloseOnSelect ?? !0,
                    [m, h] = (0, y.useState)(null),
                    [g, p] = (0, y.useState)(null);
                if ((t && ((m = t), "hour" in t && (g = t)), i && !(o in i)))
                    throw Error("Invalid granularity " + o + " for value " + i.toString());
                let f = t?.calendar.identifier === "gregory" && "BC" === t.era,
                    D = (0, y.useMemo)(
                        () => ({
                            granularity: o,
                            timeZone: l,
                            hideTimeZone: e.hideTimeZone,
                            hourCycle: e.hourCycle,
                            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                            showEra: f,
                        }),
                        [o, e.hourCycle, e.shouldForceLeadingZeros, l, e.hideTimeZone, f],
                    ),
                    { minValue: v, maxValue: b, isDateUnavailable: $ } = e,
                    R = (0, y.useMemo)(() => (0, O.nz)(t, v, b, $, D), [t, v, b, $, D]),
                    P = (0, T.KZ)({ ...e, value: t, builtinValidation: R }),
                    w = P.displayValidation.isInvalid,
                    x = e.validationState || (w ? "invalid" : null),
                    k = (e, a) => {
                        (r("timeZone" in a ? a.set((0, c.gw)(e)) : (0, c.tR)(e, a)),
                            h(null),
                            p(null),
                            P.commitValidation());
                    };
                return {
                    ...P,
                    value: t,
                    defaultValue: e.defaultValue ?? n,
                    setValue: r,
                    dateValue: m,
                    timeValue: g,
                    setDateValue: (t) => {
                        let n = "function" == typeof u ? u() : u;
                        (d
                            ? g || n
                                ? k(t, g || (0, O.$l)(e.defaultValue || e.placeholderValue))
                                : h(t)
                            : (r(t), P.commitValidation()),
                            n && a.setOpen(!1));
                    },
                    setTimeValue: (e) => {
                        m && e ? k(m, e) : p(e);
                    },
                    granularity: o,
                    hasTime: d,
                    ...a,
                    setOpen(r) {
                        (!r && !t && m && d && k(m, g || (0, O.$l)(e.defaultValue || e.placeholderValue)),
                            a.setOpen(r));
                    },
                    validationState: x,
                    isInvalid: w,
                    formatValue(e, a) {
                        if (!s) return "";
                        let t = (0, O.id)(a, D);
                        return new (0, Z.p)(e, t).format(s);
                    },
                    getDateFormatter(e, a) {
                        let t = { ...D, ...a },
                            r = (0, O.id)({}, t);
                        return new (0, Z.p)(e, r);
                    },
                };
            })({ ...e, validationBehavior: m }),
            p = (0, y.useRef)(null),
            [f, U] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
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
                let n = (0, I.Bi)(),
                    i = (0, I.Bi)(),
                    o = (0, I.Bi)(),
                    l = (0, F.o)((r = w.A) && r.__esModule ? r.default : r, "@react-aria/datepicker"),
                    { isInvalid: s, validationErrors: d, validationDetails: u } = a.displayValidation,
                    {
                        labelProps: c,
                        fieldProps: m,
                        descriptionProps: g,
                        errorMessageProps: p,
                    } = (0, C.M)({ ...e, labelElementType: "span", isInvalid: s, errorMessage: e.errorMessage || d }),
                    f = (0, S.P)(a, t),
                    D = m["aria-labelledby"] || m.id,
                    { locale: v } = (0, E.Y)(),
                    b = a.formatValue(v, { month: "long" }),
                    $ = b ? l.format("selectedDateDescription", { date: b }) : "",
                    O = (0, V.I)($),
                    A = [O["aria-describedby"], m["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                    N = (0, P.$)(e),
                    Z = (0, y.useMemo)(() => (0, R.C7)(t), [t]),
                    U = (0, y.useRef)(!1),
                    { focusWithinProps: z } = (0, M.R)({
                        ...e,
                        isDisabled: a.isOpen,
                        onBlurWithin: (a) => {
                            let t = document.getElementById(i);
                            (0, h.sD)(t, a.relatedTarget) || ((U.current = !1), e.onBlur?.(a), e.onFocusChange?.(!1));
                        },
                        onFocusWithin: (a) => {
                            U.current || ((U.current = !0), e.onFocus?.(a), e.onFocusChange?.(!0));
                        },
                    });
                return {
                    groupProps: (0, x.v)(N, f, m, O, z, {
                        role: "group",
                        "aria-disabled": e.isDisabled || null,
                        "aria-labelledby": D,
                        "aria-describedby": A,
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
                            Z.focusFirst();
                        },
                    },
                    fieldProps: {
                        ...m,
                        id: o,
                        [k.pK]: "presentation",
                        "aria-describedby": A,
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
                        [T.Lf]: a,
                        autoFocus: e.autoFocus,
                        name: e.name,
                        form: e.form,
                    },
                    descriptionProps: g,
                    errorMessageProps: p,
                    buttonProps: {
                        ...O,
                        id: n,
                        "aria-haspopup": "dialog",
                        "aria-label": l.format("calendar"),
                        "aria-labelledby": `${n} ${D}`,
                        "aria-describedby": A,
                        "aria-expanded": a.isOpen,
                        isDisabled: e.isDisabled || e.isReadOnly,
                        onPress: () => a.setOpen(!0),
                    },
                    dialogProps: { id: i, "aria-labelledby": `${n} ${D}` },
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
                    isInvalid: s,
                    validationErrors: d,
                    validationDetails: u,
                };
            })({ ...(0, i.SK)(e), label: U, validationBehavior: m }, g, p),
            { focusProps: X, isFocused: ee, isFocusVisible: ea } = (0, z.o)({ within: !0 }),
            et = (0, i.Sl)({
                ...e,
                values: {
                    state: g,
                    isFocusWithin: ee,
                    isFocusVisible: ea,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: g.isInvalid,
                    isOpen: g.isOpen,
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
                        [K, g],
                        [u.t, { ...j, ref: p, isInvalid: g.isInvalid }],
                        [o.cQ, Y],
                        [r.k, { ...G, isPressed: g.isOpen }],
                        [v.I, { ...L, ref: f, elementType: "span" }],
                        [n.Yi, q],
                        [l.RG, g],
                        [b, { trigger: "DatePicker", triggerRef: p, placement: "bottom start", clearContexts: J }],
                        [l.MV, W],
                        [$.h, { slots: { description: H, errorMessage: _ } }],
                        [s.C, Q],
                    ],
                },
                y.createElement(i.tT.div, {
                    ...(0, x.v)(er, et, X),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": ee || void 0,
                    "data-invalid": g.isInvalid || void 0,
                    "data-focus-visible": ea || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-required": e.isRequired || void 0,
                    "data-open": g.isOpen || void 0,
                }),
                y.createElement(D, { autoComplete: e.autoComplete, name: e.name, isDisabled: e.isDisabled, state: g }),
            )
        );
    }),
    G = (0, y.forwardRef)(function (e, a) {
        [e, a] = (0, i.JT)(e, a, j);
        let { validationBehavior: t } = (0, i.CC)(d.c) || {},
            m = e.validationBehavior ?? t ?? "native",
            g = (function (e) {
                let a = N(e),
                    [t, r] = (0, A.P)(e.value, e.defaultValue || null, e.onChange),
                    [n] = (0, y.useState)(t),
                    [i, o] = (0, y.useState)(() => t || { start: null, end: null });
                null == t && i.start && i.end && o((i = { start: null, end: null }));
                let l = t || i,
                    s = (e) => {
                        (o((l = e || { start: null, end: null })), U(l) ? r(l) : r(null));
                    },
                    d = l?.start || l?.end || e.placeholderValue || null,
                    [u, m] = (0, O.bf)(d, e.granularity),
                    h = "hour" === u || "minute" === u || "second" === u,
                    g = e.shouldCloseOnSelect ?? !0,
                    [p, f] = (0, y.useState)(null),
                    [D, v] = (0, y.useState)(null);
                l && U(l) && ((p = l), "hour" in l.start && (D = l));
                let b = (e, a) => {
                        (s({
                            start:
                                "timeZone" in a.start ? a.start.set((0, c.gw)(e.start)) : (0, c.tR)(e.start, a.start),
                            end: "timeZone" in a.end ? a.end.set((0, c.gw)(e.end)) : (0, c.tR)(e.end, a.end),
                        }),
                            f(null),
                            v(null),
                            C.commitValidation());
                    },
                    $ = (t) => {
                        let r = "function" == typeof g ? g() : g;
                        (h
                            ? U(t) && (r || (D?.start && D?.end))
                                ? b(t, {
                                      start: D?.start || (0, O.$l)(e.placeholderValue),
                                      end: D?.end || (0, O.$l)(e.placeholderValue),
                                  })
                                : f(t)
                            : U(t)
                              ? (s(t), C.commitValidation())
                              : f(t),
                            r && a.setOpen(!1));
                    },
                    R = (e) => {
                        U(p) && U(e) ? b(p, e) : v(e);
                    },
                    P =
                        (l?.start?.calendar.identifier === "gregory" && "BC" === l.start.era) ||
                        (l?.end?.calendar.identifier === "gregory" && "BC" === l.end.era),
                    w = (0, y.useMemo)(
                        () => ({
                            granularity: u,
                            timeZone: m,
                            hideTimeZone: e.hideTimeZone,
                            hourCycle: e.hourCycle,
                            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                            showEra: P,
                        }),
                        [u, e.hourCycle, e.shouldForceLeadingZeros, m, e.hideTimeZone, P],
                    ),
                    { minValue: x, maxValue: k, isDateUnavailable: S } = e,
                    V = (0, y.useMemo)(() => (0, O.eD)(l, x, k, S ? (e) => S(e, null) : void 0, w), [l, x, k, S, w]),
                    C = (0, T.KZ)({
                        ...e,
                        value: t,
                        name: (0, y.useMemo)(
                            () => [e.startName, e.endName].filter((e) => null != e),
                            [e.startName, e.endName],
                        ),
                        builtinValidation: V,
                    }),
                    M = C.displayValidation.isInvalid,
                    I = e.validationState || (M ? "invalid" : null);
                return {
                    ...C,
                    value: l,
                    defaultValue: e.defaultValue ?? n,
                    setValue: s,
                    dateRange: p,
                    timeRange: D,
                    granularity: u,
                    hasTime: h,
                    setDate(e, a) {
                        "start" === e ? $({ start: a, end: p?.end ?? null }) : $({ start: p?.start ?? null, end: a });
                    },
                    setTime(e, a) {
                        "start" === e ? R({ start: a, end: D?.end ?? null }) : R({ start: D?.start ?? null, end: a });
                    },
                    setDateTime(e, a) {
                        "start" === e ? s({ start: a, end: l?.end ?? null }) : s({ start: l?.start ?? null, end: a });
                    },
                    setDateRange: $,
                    setTimeRange: R,
                    ...a,
                    setOpen(t) {
                        (!t &&
                            !(l?.start && l?.end) &&
                            U(p) &&
                            h &&
                            b(p, {
                                start: D?.start || (0, O.$l)(e.placeholderValue),
                                end: D?.end || (0, O.$l)(e.placeholderValue),
                            }),
                            a.setOpen(t));
                    },
                    validationState: I,
                    isInvalid: M,
                    formatValue(a, t) {
                        let r;
                        if (!l || !l.start || !l.end) return null;
                        let n = "timeZone" in l.start ? l.start.timeZone : void 0,
                            i = e.granularity || (l.start && "minute" in l.start ? "minute" : "day"),
                            o = "timeZone" in l.end ? l.end.timeZone : void 0,
                            s = e.granularity || (l.end && "minute" in l.end ? "minute" : "day"),
                            d = (0, O.id)(t, {
                                granularity: i,
                                timeZone: n,
                                hideTimeZone: e.hideTimeZone,
                                hourCycle: e.hourCycle,
                                showEra:
                                    ("gregory" === l.start.calendar.identifier && "BC" === l.start.era) ||
                                    ("gregory" === l.end.calendar.identifier && "BC" === l.end.era),
                            }),
                            u = l.start.toDate(n || "UTC"),
                            c = l.end.toDate(o || "UTC"),
                            m = new (0, Z.p)(a, d);
                        if (n === o && i === s && 0 !== l.start.compare(l.end)) {
                            try {
                                let e = m.formatRangeToParts(u, c),
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
                            let n = (0, O.id)(t, {
                                granularity: s,
                                timeZone: o,
                                hideTimeZone: e.hideTimeZone,
                                hourCycle: e.hourCycle,
                            });
                            r = new (0, Z.p)(a, n);
                        }
                        return { start: m.format(u), end: r.format(c) };
                    },
                    getDateFormatter(e, a) {
                        let t = { ...w, ...a },
                            r = (0, O.id)({}, t);
                        return new (0, Z.p)(e, r);
                    },
                };
            })({ ...e, validationBehavior: m }),
            p = (0, y.useRef)(null),
            [f, D] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: B,
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
                let n = (0, F.o)((r = w.A) && r.__esModule ? r.default : r, "@react-aria/datepicker"),
                    { isInvalid: i, validationErrors: o, validationDetails: l } = a.displayValidation,
                    {
                        labelProps: s,
                        fieldProps: d,
                        descriptionProps: u,
                        errorMessageProps: c,
                    } = (0, C.M)({ ...e, labelElementType: "span", isInvalid: i, errorMessage: e.errorMessage || o }),
                    m = d["aria-labelledby"] || d.id,
                    { locale: g } = (0, E.Y)(),
                    p = a.formatValue(g, { month: "long" }),
                    f = p ? n.format("selectedRangeDescription", { startDate: p.start, endDate: p.end }) : "",
                    D = (0, V.I)(f),
                    v = { "aria-label": n.format("startDate"), "aria-labelledby": m },
                    b = { "aria-label": n.format("endDate"), "aria-labelledby": m },
                    $ = (0, I.Bi)(),
                    O = (0, I.Bi)(),
                    A = (0, S.P)(a, t),
                    N = [D["aria-describedby"], d["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                    Z = (0, y.useMemo)(() => (0, R.C7)(t, { accept: (e) => e.id !== $ }), [t, $]),
                    U = {
                        [k.so]: Z,
                        [k.pK]: "presentation",
                        "aria-describedby": N,
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
                    z = (0, P.$)(e),
                    B = (0, y.useRef)(!1),
                    { focusWithinProps: j } = (0, M.R)({
                        ...e,
                        isDisabled: a.isOpen,
                        onBlurWithin: (a) => {
                            let t = document.getElementById(O);
                            (0, h.sD)(t, a.relatedTarget) || ((B.current = !1), e.onBlur?.(a), e.onFocusChange?.(!1));
                        },
                        onFocusWithin: (a) => {
                            B.current || ((B.current = !0), e.onFocus?.(a), e.onFocusChange?.(!0));
                        },
                    }),
                    K = (0, y.useRef)(T.YD),
                    L = (0, y.useRef)(T.YD);
                return {
                    groupProps: (0, x.v)(z, A, d, D, j, {
                        role: "group",
                        "aria-disabled": e.isDisabled || null,
                        "aria-describedby": N,
                        onKeyDown(t) {
                            !a.isOpen && e.onKeyDown && e.onKeyDown(t);
                        },
                        onKeyUp(t) {
                            !a.isOpen && e.onKeyUp && e.onKeyUp(t);
                        },
                    }),
                    labelProps: {
                        ...s,
                        onClick: () => {
                            Z.focusFirst();
                        },
                    },
                    buttonProps: {
                        ...D,
                        id: $,
                        "aria-haspopup": "dialog",
                        "aria-label": n.format("calendar"),
                        "aria-labelledby": `${$} ${m}`,
                        "aria-describedby": N,
                        "aria-expanded": a.isOpen,
                        isDisabled: e.isDisabled || e.isReadOnly,
                        onPress: () => a.setOpen(!0),
                    },
                    dialogProps: { id: O, "aria-labelledby": `${$} ${m}` },
                    startFieldProps: {
                        ...v,
                        ...U,
                        value: a.value?.start ?? null,
                        defaultValue: a.defaultValue?.start,
                        onChange: (e) => a.setDateTime("start", e),
                        autoFocus: e.autoFocus,
                        name: e.startName,
                        form: e.form,
                        [T.Lf]: {
                            realtimeValidation: a.realtimeValidation,
                            displayValidation: a.displayValidation,
                            updateValidation(e) {
                                ((K.current = e), a.updateValidation((0, T.cX)(e, L.current)));
                            },
                            resetValidation: a.resetValidation,
                            commitValidation: a.commitValidation,
                        },
                    },
                    endFieldProps: {
                        ...b,
                        ...U,
                        value: a.value?.end ?? null,
                        defaultValue: a.defaultValue?.end,
                        onChange: (e) => a.setDateTime("end", e),
                        name: e.endName,
                        form: e.form,
                        [T.Lf]: {
                            realtimeValidation: a.realtimeValidation,
                            displayValidation: a.displayValidation,
                            updateValidation(e) {
                                ((L.current = e), a.updateValidation((0, T.cX)(K.current, e)));
                            },
                            resetValidation: a.resetValidation,
                            commitValidation: a.commitValidation,
                        },
                    },
                    descriptionProps: u,
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
            })({ ...(0, i.SK)(e), label: D, validationBehavior: m }, g, p),
            { focusProps: ee, isFocused: ea, isFocusVisible: et } = (0, z.o)({ within: !0 }),
            er = (0, i.Sl)({
                ...e,
                values: {
                    state: g,
                    isFocusWithin: ea,
                    isFocusVisible: et,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: g.isInvalid,
                    isOpen: g.isOpen,
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
                        [L, g],
                        [u.t, { ...B, ref: p, isInvalid: g.isInvalid }],
                        [r.k, { ...W, isPressed: g.isOpen }],
                        [v.I, { ...K, ref: f, elementType: "span" }],
                        [n.pr, H],
                        [l.RG, g],
                        [b, { trigger: "DateRangePicker", triggerRef: p, placement: "bottom start", clearContexts: J }],
                        [l.MV, q],
                        [o.cQ, { slots: { start: Y, end: G } }],
                        [$.h, { slots: { description: _, errorMessage: Q } }],
                        [s.C, X],
                    ],
                },
                y.createElement(i.tT.div, {
                    ...(0, x.v)(en, er, ee),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": ea || void 0,
                    "data-invalid": g.isInvalid || void 0,
                    "data-focus-visible": et || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-required": e.isRequired || void 0,
                    "data-open": g.isOpen || void 0,
                }),
            )
        );
    });
