t.d(a, { lr: () => W, Ur: () => Y });
var n = t(197867),
    r = t(577684),
    i = t(825913),
    l = t(170676),
    o = t(987062),
    u = t(162376),
    s = t(461212),
    d = t(521767),
    c = t(928231),
    m = t(64700),
    h = t(126031);
let D = ["day", "month", "year"],
    y = { hour: 1, minute: 2, second: 3 };
function p(e) {
    let { state: a } = e,
        { containerProps: t, inputProps: n } = (function (e, a) {
            let { autoComplete: t, isDisabled: n, name: r } = e,
                { visuallyHiddenProps: i } = (0, h.B)({ style: { position: "fixed", top: 0, left: 0 } }),
                l = 60;
            "second" === a.granularity ? (l = 1) : "hour" === a.granularity && (l = 3600);
            let o = null == a.value ? "" : a.value.toString(),
                u = "day" === a.granularity ? "date" : "datetime-local",
                s = ["hour", "minute", "second"],
                d = 0;
            return (
                s.includes(a.granularity) && ((d = y[a.granularity]), (s = s.slice(0, d))),
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
                        disabled: n,
                        type: u,
                        form: "",
                        name: r,
                        step: l,
                        value: o,
                        onChange: (e) => {
                            let t = e.target.value.toString();
                            if (t)
                                try {
                                    let e = (0, c.DP)(t);
                                    if (("day" === a.granularity && (e = (0, c._U)(t)), "setSegment" in a))
                                        for (let t in e)
                                            D.includes(t) && a.setSegment(t, e[t]),
                                                s.includes(t) && a.setSegment(t, e[t]);
                                    a.setValue(e);
                                } catch {}
                        },
                    },
                }
            );
        })({ ...e }, a);
    return m.createElement("div", { ...t, "data-testid": "hidden-dateinput-container" }, m.createElement("input", n));
}
var g = t(129844);
let f = (0, m.createContext)(null);
var v = t(193523),
    b = t(938291),
    R = t(974111),
    $ = t(185288),
    w = t(693321),
    P = t(985620),
    C = t(807177),
    k = t(290424),
    x = t(318473),
    E = t(339241),
    S = t(986960),
    V = t(744493),
    F = t(47276),
    B = t(402112),
    M = t(498430),
    I = t(300511),
    A = t(376472),
    T = t(515702),
    O = t(492313);
function N(e) {
    let [a, t] = (0, O.P)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
        n = (0, m.useCallback)(() => {
            t(!0);
        }, [t]),
        r = (0, m.useCallback)(() => {
            t(!1);
        }, [t]),
        i = (0, m.useCallback)(() => {
            t(!a);
        }, [t, a]);
    return { isOpen: a, setOpen: t, open: n, close: r, toggle: i };
}
function Z(e) {
    return (null == e ? void 0 : e.start) != null && null != e.end;
}
function z(e) {
    let { ref: a, box: t, onResize: n } = e;
    (0, m.useEffect)(() => {
        let e = null == a ? void 0 : a.current;
        if (e)
            if (void 0 === window.ResizeObserver)
                return (
                    window.addEventListener("resize", n, !1),
                    () => {
                        window.removeEventListener("resize", n, !1);
                    }
                );
            else {
                let a = new window.ResizeObserver((e) => {
                    e.length && n();
                });
                return (
                    a.observe(e, { box: t }),
                    () => {
                        e && a.unobserve(e);
                    }
                );
            }
    }, [n, a, t]);
}
let U = (0, m.createContext)(null),
    j = (0, m.createContext)(null),
    K = (0, m.createContext)(null),
    L = (0, m.createContext)(null),
    J = [d.t, n.k, g.I, v.h],
    W = (0, m.forwardRef)(function (e, a) {
        var t, c;
        [e, a] = (0, i.JT)(e, a, U);
        let { validationBehavior: h } = (0, i.CC)(s.c) || {},
            D = null != (c = null != (t = e.validationBehavior) ? t : h) ? c : "native",
            y = (function (e) {
                var a, t;
                let n = N(e),
                    [r, i] = (0, O.P)(e.value, e.defaultValue || null, e.onChange),
                    [l] = (0, m.useState)(r),
                    o = r || e.placeholderValue || null,
                    [u, s] = (0, I.bf)(o, e.granularity),
                    d = null != r ? r.toDate(null != s ? s : "UTC") : null,
                    c = "hour" === u || "minute" === u || "second" === u,
                    h = null == (a = e.shouldCloseOnSelect) || a,
                    [D, y] = (0, m.useState)(null),
                    [p, g] = (0, m.useState)(null);
                if ((r && ((D = r), "hour" in r && (p = r)), o && !(u in o)))
                    throw Error("Invalid granularity " + u + " for value " + o.toString());
                let f = (null == r ? void 0 : r.calendar.identifier) === "gregory" && "BC" === r.era,
                    v = (0, m.useMemo)(
                        () => ({
                            granularity: u,
                            timeZone: s,
                            hideTimeZone: e.hideTimeZone,
                            hourCycle: e.hourCycle,
                            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                            showEra: f,
                        }),
                        [u, e.hourCycle, e.shouldForceLeadingZeros, s, e.hideTimeZone, f],
                    ),
                    { minValue: b, maxValue: R, isDateUnavailable: $ } = e,
                    w = (0, m.useMemo)(() => (0, I.nz)(r, b, R, $, v), [r, b, R, $, v]),
                    P = (0, E.KZ)({ ...e, value: r, builtinValidation: w }),
                    C = P.displayValidation.isInvalid,
                    k = e.validationState || (C ? "invalid" : null),
                    x = (e, a) => {
                        i("timeZone" in a ? a.set((0, A.gw)(e)) : (0, A.tR)(e, a)),
                            y(null),
                            g(null),
                            P.commitValidation();
                    };
                return {
                    ...P,
                    value: r,
                    defaultValue: null != (t = e.defaultValue) ? t : l,
                    setValue: i,
                    dateValue: D,
                    timeValue: p,
                    setDateValue: (a) => {
                        let t = "function" == typeof h ? h() : h;
                        c
                            ? p || t
                                ? x(a, p || (0, I.$l)(e.defaultValue || e.placeholderValue))
                                : y(a)
                            : (i(a), P.commitValidation()),
                            t && n.setOpen(!1);
                    },
                    setTimeValue: (e) => {
                        D && e ? x(D, e) : g(e);
                    },
                    granularity: u,
                    hasTime: c,
                    ...n,
                    setOpen(a) {
                        !a && !r && D && c && x(D, p || (0, I.$l)(e.defaultValue || e.placeholderValue)), n.setOpen(a);
                    },
                    validationState: k,
                    isInvalid: C,
                    formatValue(e, a) {
                        if (!d) return "";
                        let t = (0, I.id)(a, v);
                        return new (0, T.p)(e, t).format(d);
                    },
                    getDateFormatter(e, a) {
                        let t = { ...v, ...a },
                            n = (0, I.id)({}, t);
                        return new (0, T.p)(e, n);
                    },
                };
            })({ ...e, validationBehavior: D }),
            Z = (0, m.useRef)(null),
            [j, L] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: W,
                labelProps: Y,
                fieldProps: G,
                buttonProps: H,
                dialogProps: _,
                calendarProps: q,
                descriptionProps: Q,
                errorMessageProps: X,
                ...ee
            } = (function (e, a, t) {
                var n;
                let r = (0, P.Bi)(),
                    i = (0, P.Bi)(),
                    l = (0, P.Bi)(),
                    o = (0, F.o)((n = b.A) && n.__esModule ? n.default : n, "@react-aria/datepicker"),
                    { isInvalid: u, validationErrors: s, validationDetails: d } = a.displayValidation,
                    {
                        labelProps: c,
                        fieldProps: h,
                        descriptionProps: D,
                        errorMessageProps: y,
                    } = (0, S.M)({ ...e, labelElementType: "span", isInvalid: u, errorMessage: e.errorMessage || s }),
                    p = (0, $.P)(a, t),
                    g = h["aria-labelledby"] || h.id,
                    { locale: f } = (0, B.Y)(),
                    v = a.formatValue(f, { month: "long" }),
                    M = v ? o.format("selectedDateDescription", { date: v }) : "",
                    I = (0, C.I)(M),
                    A = [I["aria-describedby"], h["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                    T = (0, k.$)(e),
                    O = (0, m.useMemo)(() => (0, w.C7)(t), [t]),
                    N = (0, m.useRef)(!1),
                    { focusWithinProps: Z } = (0, V.R)({
                        ...e,
                        isDisabled: a.isOpen,
                        onBlurWithin: (a) => {
                            let t = document.getElementById(i);
                            if (!(null == t ? void 0 : t.contains(a.relatedTarget))) {
                                var n, r;
                                (N.current = !1),
                                    null == (n = e.onBlur) || n.call(e, a),
                                    null == (r = e.onFocusChange) || r.call(e, !1);
                            }
                        },
                        onFocusWithin: (a) => {
                            if (!N.current) {
                                var t, n;
                                (N.current = !0),
                                    null == (t = e.onFocus) || t.call(e, a),
                                    null == (n = e.onFocusChange) || n.call(e, !0);
                            }
                        },
                    });
                return {
                    groupProps: (0, x.v)(T, p, h, I, Z, {
                        role: "group",
                        "aria-disabled": e.isDisabled || null,
                        "aria-labelledby": g,
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
                            O.focusFirst();
                        },
                    },
                    fieldProps: {
                        ...h,
                        id: l,
                        [R.pK]: "presentation",
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
                        [E.Lf]: a,
                        autoFocus: e.autoFocus,
                        name: e.name,
                        form: e.form,
                    },
                    descriptionProps: D,
                    errorMessageProps: y,
                    buttonProps: {
                        ...I,
                        id: r,
                        "aria-haspopup": "dialog",
                        "aria-label": o.format("calendar"),
                        "aria-labelledby": `${r} ${g}`,
                        "aria-describedby": A,
                        "aria-expanded": a.isOpen,
                        isDisabled: e.isDisabled || e.isReadOnly,
                        onPress: () => a.setOpen(!0),
                    },
                    dialogProps: { id: i, "aria-labelledby": `${r} ${g}` },
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
            })({ ...(0, i.SK)(e), label: L, validationBehavior: D }, y, Z),
            [ea, et] = (0, m.useState)(null),
            en = (0, m.useCallback)(() => {
                Z.current && et(Z.current.offsetWidth + "px");
            }, []);
        z({ ref: Z, onResize: en });
        let { focusProps: er, isFocused: ei, isFocusVisible: el } = (0, M.o)({ within: !0 }),
            eo = (0, i.Sl)({
                ...e,
                values: {
                    state: y,
                    isFocusWithin: ei,
                    isFocusVisible: el,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: y.isInvalid,
                    isOpen: y.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                },
                defaultClassName: "react-aria-DatePicker",
            }),
            eu = (0, k.$)(e, { global: !0 });
        return (
            delete eu.id,
            m.createElement(
                i.Kq,
                {
                    values: [
                        [K, y],
                        [d.t, { ...W, ref: Z, isInvalid: y.isInvalid }],
                        [l.cQ, G],
                        [n.k, { ...H, isPressed: y.isOpen }],
                        [g.I, { ...Y, ref: j, elementType: "span" }],
                        [r.Yi, q],
                        [o.RG, y],
                        [
                            f,
                            {
                                trigger: "DatePicker",
                                triggerRef: Z,
                                placement: "bottom start",
                                style: { "--trigger-width": ea },
                                clearContexts: J,
                            },
                        ],
                        [o.MV, _],
                        [v.h, { slots: { description: Q, errorMessage: X } }],
                        [u.C, ee],
                    ],
                },
                m.createElement("div", {
                    ...(0, x.v)(eu, eo, er),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": ei || void 0,
                    "data-invalid": y.isInvalid || void 0,
                    "data-focus-visible": el || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-open": y.isOpen || void 0,
                }),
                m.createElement(p, { autoComplete: e.autoComplete, name: e.name, isDisabled: e.isDisabled, state: y }),
            )
        );
    }),
    Y = (0, m.forwardRef)(function (e, a) {
        var t, c;
        [e, a] = (0, i.JT)(e, a, j);
        let { validationBehavior: h } = (0, i.CC)(s.c) || {},
            D = null != (c = null != (t = e.validationBehavior) ? t : h) ? c : "native",
            y = (function (e) {
                var a, t, n, r;
                let i = N(e),
                    [l, o] = (0, O.P)(e.value, e.defaultValue || null, e.onChange),
                    [u] = (0, m.useState)(l),
                    [s, d] = (0, m.useState)(() => l || { start: null, end: null });
                null == l && s.start && s.end && d((s = { start: null, end: null }));
                let c = l || s,
                    h = (e) => {
                        d((c = e || { start: null, end: null })), Z(c) ? o(c) : o(null);
                    },
                    D = (null == c ? void 0 : c.start) || (null == c ? void 0 : c.end) || e.placeholderValue || null,
                    [y, p] = (0, I.bf)(D, e.granularity),
                    g = "hour" === y || "minute" === y || "second" === y,
                    f = null == (n = e.shouldCloseOnSelect) || n,
                    [v, b] = (0, m.useState)(null),
                    [R, $] = (0, m.useState)(null);
                c && Z(c) && ((v = c), "hour" in c.start && (R = c));
                let w = (e, a) => {
                        h({
                            start:
                                "timeZone" in a.start ? a.start.set((0, A.gw)(e.start)) : (0, A.tR)(e.start, a.start),
                            end: "timeZone" in a.end ? a.end.set((0, A.gw)(e.end)) : (0, A.tR)(e.end, a.end),
                        }),
                            b(null),
                            $(null),
                            M.commitValidation();
                    },
                    P = (a) => {
                        let t = "function" == typeof f ? f() : f;
                        g
                            ? Z(a) && (t || ((null == R ? void 0 : R.start) && (null == R ? void 0 : R.end)))
                                ? w(a, {
                                      start: (null == R ? void 0 : R.start) || (0, I.$l)(e.placeholderValue),
                                      end: (null == R ? void 0 : R.end) || (0, I.$l)(e.placeholderValue),
                                  })
                                : b(a)
                            : Z(a)
                              ? (h(a), M.commitValidation())
                              : b(a),
                            t && i.setOpen(!1);
                    },
                    C = (e) => {
                        Z(v) && Z(e) ? w(v, e) : $(e);
                    },
                    k =
                        ((null == c || null == (a = c.start) ? void 0 : a.calendar.identifier) === "gregory" &&
                            "BC" === c.start.era) ||
                        ((null == c || null == (t = c.end) ? void 0 : t.calendar.identifier) === "gregory" &&
                            "BC" === c.end.era),
                    x = (0, m.useMemo)(
                        () => ({
                            granularity: y,
                            timeZone: p,
                            hideTimeZone: e.hideTimeZone,
                            hourCycle: e.hourCycle,
                            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                            showEra: k,
                        }),
                        [y, e.hourCycle, e.shouldForceLeadingZeros, p, e.hideTimeZone, k],
                    ),
                    { minValue: S, maxValue: V, isDateUnavailable: F } = e,
                    B = (0, m.useMemo)(() => (0, I.eD)(c, S, V, F, x), [c, S, V, F, x]),
                    M = (0, E.KZ)({
                        ...e,
                        value: l,
                        name: (0, m.useMemo)(
                            () => [e.startName, e.endName].filter((e) => null != e),
                            [e.startName, e.endName],
                        ),
                        builtinValidation: B,
                    }),
                    z = M.displayValidation.isInvalid,
                    U = e.validationState || (z ? "invalid" : null);
                return {
                    ...M,
                    value: c,
                    defaultValue: null != (r = e.defaultValue) ? r : u,
                    setValue: h,
                    dateRange: v,
                    timeRange: R,
                    granularity: y,
                    hasTime: g,
                    setDate(e, a) {
                        var t, n;
                        "start" === e
                            ? P({ start: a, end: null != (t = null == v ? void 0 : v.end) ? t : null })
                            : P({ start: null != (n = null == v ? void 0 : v.start) ? n : null, end: a });
                    },
                    setTime(e, a) {
                        var t, n;
                        "start" === e
                            ? C({ start: a, end: null != (t = null == R ? void 0 : R.end) ? t : null })
                            : C({ start: null != (n = null == R ? void 0 : R.start) ? n : null, end: a });
                    },
                    setDateTime(e, a) {
                        var t, n;
                        "start" === e
                            ? h({ start: a, end: null != (t = null == c ? void 0 : c.end) ? t : null })
                            : h({ start: null != (n = null == c ? void 0 : c.start) ? n : null, end: a });
                    },
                    setDateRange: P,
                    setTimeRange: C,
                    ...i,
                    setOpen(a) {
                        !a &&
                            !((null == c ? void 0 : c.start) && (null == c ? void 0 : c.end)) &&
                            Z(v) &&
                            g &&
                            w(v, {
                                start: (null == R ? void 0 : R.start) || (0, I.$l)(e.placeholderValue),
                                end: (null == R ? void 0 : R.end) || (0, I.$l)(e.placeholderValue),
                            }),
                            i.setOpen(a);
                    },
                    validationState: U,
                    isInvalid: z,
                    formatValue(a, t) {
                        let n;
                        if (!c || !c.start || !c.end) return null;
                        let r = "timeZone" in c.start ? c.start.timeZone : void 0,
                            i = e.granularity || (c.start && "minute" in c.start ? "minute" : "day"),
                            l = "timeZone" in c.end ? c.end.timeZone : void 0,
                            o = e.granularity || (c.end && "minute" in c.end ? "minute" : "day"),
                            u = (0, I.id)(t, {
                                granularity: i,
                                timeZone: r,
                                hideTimeZone: e.hideTimeZone,
                                hourCycle: e.hourCycle,
                                showEra:
                                    ("gregory" === c.start.calendar.identifier && "BC" === c.start.era) ||
                                    ("gregory" === c.end.calendar.identifier && "BC" === c.end.era),
                            }),
                            s = c.start.toDate(r || "UTC"),
                            d = c.end.toDate(l || "UTC"),
                            m = new (0, T.p)(a, u);
                        if (r === l && i === o && 0 !== c.start.compare(c.end)) {
                            try {
                                let e = m.formatRangeToParts(s, d),
                                    a = -1;
                                for (let t = 0; t < e.length; t++) {
                                    let n = e[t];
                                    if ("shared" === n.source && "literal" === n.type) a = t;
                                    else if ("endRange" === n.source) break;
                                }
                                let t = "",
                                    n = "";
                                for (let r = 0; r < e.length; r++)
                                    r < a ? (t += e[r].value) : r > a && (n += e[r].value);
                                return { start: t, end: n };
                            } catch {}
                            n = m;
                        } else {
                            let r = (0, I.id)(t, {
                                granularity: o,
                                timeZone: l,
                                hideTimeZone: e.hideTimeZone,
                                hourCycle: e.hourCycle,
                            });
                            n = new (0, T.p)(a, r);
                        }
                        return { start: m.format(s), end: n.format(d) };
                    },
                    getDateFormatter(e, a) {
                        let t = { ...x, ...a },
                            n = (0, I.id)({}, t);
                        return new (0, T.p)(e, n);
                    },
                };
            })({ ...e, validationBehavior: D }),
            p = (0, m.useRef)(null),
            [U, K] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: W,
                labelProps: Y,
                startFieldProps: G,
                endFieldProps: H,
                buttonProps: _,
                dialogProps: q,
                calendarProps: Q,
                descriptionProps: X,
                errorMessageProps: ee,
                ...ea
            } = (function (e, a, t) {
                var n, r, i, l, o, u, s, d;
                let c = (0, F.o)((d = b.A) && d.__esModule ? d.default : d, "@react-aria/datepicker"),
                    { isInvalid: h, validationErrors: D, validationDetails: y } = a.displayValidation,
                    {
                        labelProps: p,
                        fieldProps: g,
                        descriptionProps: f,
                        errorMessageProps: v,
                    } = (0, S.M)({ ...e, labelElementType: "span", isInvalid: h, errorMessage: e.errorMessage || D }),
                    M = g["aria-labelledby"] || g.id,
                    { locale: I } = (0, B.Y)(),
                    A = a.formatValue(I, { month: "long" }),
                    T = A ? c.format("selectedRangeDescription", { startDate: A.start, endDate: A.end }) : "",
                    O = (0, C.I)(T),
                    N = { "aria-label": c.format("startDate"), "aria-labelledby": M },
                    Z = { "aria-label": c.format("endDate"), "aria-labelledby": M },
                    z = (0, P.Bi)(),
                    U = (0, P.Bi)(),
                    j = (0, $.P)(a, t),
                    K = [O["aria-describedby"], g["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                    L = (0, m.useMemo)(() => (0, w.C7)(t, { accept: (e) => e.id !== z }), [t, z]),
                    J = {
                        [R.so]: L,
                        [R.pK]: "presentation",
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
                    W = (0, k.$)(e),
                    Y = (0, m.useRef)(!1),
                    { focusWithinProps: G } = (0, V.R)({
                        ...e,
                        isDisabled: a.isOpen,
                        onBlurWithin: (a) => {
                            let t = document.getElementById(U);
                            if (!(null == t ? void 0 : t.contains(a.relatedTarget))) {
                                var n, r;
                                (Y.current = !1),
                                    null == (n = e.onBlur) || n.call(e, a),
                                    null == (r = e.onFocusChange) || r.call(e, !1);
                            }
                        },
                        onFocusWithin: (a) => {
                            if (!Y.current) {
                                var t, n;
                                (Y.current = !0),
                                    null == (t = e.onFocus) || t.call(e, a),
                                    null == (n = e.onFocusChange) || n.call(e, !0);
                            }
                        },
                    }),
                    H = (0, m.useRef)(E.YD),
                    _ = (0, m.useRef)(E.YD);
                return {
                    groupProps: (0, x.v)(W, j, g, O, G, {
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
                        ...p,
                        onClick: () => {
                            L.focusFirst();
                        },
                    },
                    buttonProps: {
                        ...O,
                        id: z,
                        "aria-haspopup": "dialog",
                        "aria-label": c.format("calendar"),
                        "aria-labelledby": `${z} ${M}`,
                        "aria-describedby": K,
                        "aria-expanded": a.isOpen,
                        isDisabled: e.isDisabled || e.isReadOnly,
                        onPress: () => a.setOpen(!0),
                    },
                    dialogProps: { id: U, "aria-labelledby": `${z} ${M}` },
                    startFieldProps: {
                        ...N,
                        ...J,
                        value: null != (u = null == (n = a.value) ? void 0 : n.start) ? u : null,
                        defaultValue: null == (r = a.defaultValue) ? void 0 : r.start,
                        onChange: (e) => a.setDateTime("start", e),
                        autoFocus: e.autoFocus,
                        name: e.startName,
                        form: e.form,
                        [E.Lf]: {
                            realtimeValidation: a.realtimeValidation,
                            displayValidation: a.displayValidation,
                            updateValidation(e) {
                                (H.current = e), a.updateValidation((0, E.cX)(e, _.current));
                            },
                            resetValidation: a.resetValidation,
                            commitValidation: a.commitValidation,
                        },
                    },
                    endFieldProps: {
                        ...Z,
                        ...J,
                        value: null != (s = null == (i = a.value) ? void 0 : i.end) ? s : null,
                        defaultValue: null == (l = a.defaultValue) ? void 0 : l.end,
                        onChange: (e) => a.setDateTime("end", e),
                        name: e.endName,
                        form: e.form,
                        [E.Lf]: {
                            realtimeValidation: a.realtimeValidation,
                            displayValidation: a.displayValidation,
                            updateValidation(e) {
                                (_.current = e), a.updateValidation((0, E.cX)(H.current, e));
                            },
                            resetValidation: a.resetValidation,
                            commitValidation: a.commitValidation,
                        },
                    },
                    descriptionProps: f,
                    errorMessageProps: v,
                    calendarProps: {
                        autoFocus: !0,
                        value: (null == (o = a.dateRange) ? void 0 : o.start) && a.dateRange.end ? a.dateRange : null,
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
                    isInvalid: h,
                    validationErrors: D,
                    validationDetails: y,
                };
            })({ ...(0, i.SK)(e), label: K, validationBehavior: D }, y, p),
            [et, en] = (0, m.useState)(null),
            er = (0, m.useCallback)(() => {
                p.current && en(p.current.offsetWidth + "px");
            }, []);
        z({ ref: p, onResize: er });
        let { focusProps: ei, isFocused: el, isFocusVisible: eo } = (0, M.o)({ within: !0 }),
            eu = (0, i.Sl)({
                ...e,
                values: {
                    state: y,
                    isFocusWithin: el,
                    isFocusVisible: eo,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: y.isInvalid,
                    isOpen: y.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                },
                defaultClassName: "react-aria-DateRangePicker",
            }),
            es = (0, k.$)(e, { global: !0 });
        return (
            delete es.id,
            m.createElement(
                i.Kq,
                {
                    values: [
                        [L, y],
                        [d.t, { ...W, ref: p, isInvalid: y.isInvalid }],
                        [n.k, { ..._, isPressed: y.isOpen }],
                        [g.I, { ...Y, ref: U, elementType: "span" }],
                        [r.pr, Q],
                        [o.RG, y],
                        [
                            f,
                            {
                                trigger: "DateRangePicker",
                                triggerRef: p,
                                placement: "bottom start",
                                style: { "--trigger-width": et },
                                clearContexts: J,
                            },
                        ],
                        [o.MV, q],
                        [l.cQ, { slots: { start: G, end: H } }],
                        [v.h, { slots: { description: X, errorMessage: ee } }],
                        [u.C, ea],
                    ],
                },
                m.createElement("div", {
                    ...(0, x.v)(es, eu, ei),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": el || void 0,
                    "data-invalid": y.isInvalid || void 0,
                    "data-focus-visible": eo || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-open": y.isOpen || void 0,
                }),
            )
        );
    });
