t.d(a, { R: () => f });
var u = t(467940),
    n = t(457090),
    r = t(45728),
    i = t(533426),
    o = t(640475),
    l = t(274738),
    s = t(819129),
    d = t(379955),
    c = t(647438);
let m = {
        year: !0,
        month: !0,
        day: !0,
        hour: !0,
        minute: !0,
        second: !0,
        dayPeriod: !0,
        era: !0,
    },
    D = {
        year: 5,
        month: 2,
        day: 7,
        hour: 2,
        minute: 15,
        second: 15,
    },
    h = {
        dayperiod: "dayPeriod",
        relatedYear: "year",
        yearName: "literal",
        unknown: "literal",
    };
function f(e) {
    var a, t, f;
    let {
            locale: p,
            createCalendar: g,
            hideTimeZone: v,
            isDisabled: b = !1,
            isReadOnly: C = !1,
            isRequired: x = !1,
            minValue: B,
            maxValue: E,
            isDateUnavailable: F,
        } = e,
        w = e.value || e.defaultValue || e.placeholderValue || null,
        [$, R] = (0, u.iZ)(w, e.granularity),
        Z = R || "UTC";
    if (w && !($ in w)) throw Error("Invalid granularity " + $ + " for value " + w.toString());
    let k = (0, c.useMemo)(() => new (0, r.C)(p), [p]),
        A = (0, c.useMemo)(() => g(k.resolvedOptions().calendar), [g, k]),
        [P, S] = (0, d.z)(e.value, null != (a = e.defaultValue) ? a : null, e.onChange),
        [M] = (0, c.useState)(P),
        V = (0, c.useMemo)(() => {
            var e;
            return null != (e = (0, u.Ai)(P, A)) ? e : null;
        }, [P, A]),
        [I, z] = (0, c.useState)(() => (0, u.OJ)(e.placeholderValue, $, A, R)),
        O = "gregory" === A.identifier && "BC" === (V || I).era,
        j = (0, c.useMemo)(() => {
            var a;
            return {
                granularity: $,
                maxGranularity: null != (a = e.maxGranularity) ? a : "year",
                timeZone: R,
                hideTimeZone: v,
                hourCycle: e.hourCycle,
                showEra: O,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            };
        }, [e.maxGranularity, $, e.hourCycle, e.shouldForceLeadingZeros, R, v, O]),
        T = (0, c.useMemo)(() => (0, u.oE)({}, j), [j]),
        N = (0, c.useMemo)(() => new (0, r.C)(p, T), [p, T]),
        U = (0, c.useMemo)(() => N.resolvedOptions(), [N]),
        K = (0, c.useMemo)(
            () =>
                N.formatToParts(new Date())
                    .filter((e) => m[e.type])
                    .reduce((e, a) => ((e[h[a.type] || a.type] = !0), e), {}),
            [N],
        ),
        [L, J] = (0, c.useState)(() => (e.value || e.defaultValue ? { ...K } : {})),
        W = (0, c.useRef)(null),
        H = (0, c.useRef)(A);
    (0, c.useEffect)(() => {
        (0, i.jv)(A, H.current) ||
            ((H.current = A),
            z((a) => (Object.keys(L).length > 0 ? (0, o.Mw)(a, A) : (0, u.OJ)(e.placeholderValue, $, A, R))));
    }, [A, $, L, R, e.placeholderValue]),
        P && Object.keys(L).length < Object.keys(K).length && J((L = { ...K })),
        null == P &&
            Object.keys(L).length === Object.keys(K).length &&
            (J((L = {})), z((0, u.OJ)(e.placeholderValue, $, A, R)));
    let G = V && Object.keys(L).length >= Object.keys(K).length ? V : I,
        Q = (a) => {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(L),
                n = Object.keys(K);
            null == a
                ? (S(null), z((0, u.OJ)(e.placeholderValue, $, A, R)), J({}))
                : (0 === t.length && null == W.current) ||
                    t.length >= n.length ||
                    (t.length === n.length - 1 && K.dayPeriod && !L.dayPeriod && "dayPeriod" !== W.current)
                  ? (0 === t.length && J((L = { ...K })),
                    S((a = (0, o.Mw)(a, (null == w ? void 0 : w.calendar) || new (0, l.IQ)()))))
                  : z(a),
                (W.current = null);
        },
        Y = (0, c.useMemo)(() => G.toDate(Z), [G, Z]),
        q = (0, c.useMemo)(
            () =>
                (function (e, a, t, u, r, i, o, l) {
                    let s = ["hour", "minute", "second"],
                        d = t.formatToParts(e),
                        c = [];
                    for (let e of d) {
                        let t = h[e.type] || e.type,
                            d = m[t];
                        "era" === t && 1 === i.getEras().length && (d = !1);
                        let D = m[t] && !a[t],
                            f = m[t] ? (0, n.p)(t, e.value, o) : null,
                            p = {
                                type: t,
                                text: D ? f : e.value,
                                ...y(r, t, u),
                                isPlaceholder: D,
                                placeholder: f,
                                isEditable: d,
                            };
                        "hour" === t
                            ? (c.push({
                                  type: "literal",
                                  text: "\u2066",
                                  ...y(r, "literal", u),
                                  isPlaceholder: !1,
                                  placeholder: "",
                                  isEditable: !1,
                              }),
                              c.push(p),
                              t === l &&
                                  c.push({
                                      type: "literal",
                                      text: "\u2069",
                                      ...y(r, "literal", u),
                                      isPlaceholder: !1,
                                      placeholder: "",
                                      isEditable: !1,
                                  }))
                            : s.includes(t) && t === l
                              ? (c.push(p),
                                c.push({
                                    type: "literal",
                                    text: "\u2069",
                                    ...y(r, "literal", u),
                                    isPlaceholder: !1,
                                    placeholder: "",
                                    isEditable: !1,
                                }))
                              : c.push(p);
                    }
                    return c;
                })(Y, L, N, U, G, A, p, $),
            [Y, L, N, U, G, A, p, $],
        );
    K.era && L.year && !L.era ? ((L.era = !0), J({ ...L })) : !K.era && L.era && (delete L.era, J({ ...L }));
    let _ = (e) => {
            (L[e] = !0), "year" === e && K.era && (L.era = !0), J({ ...L });
        },
        X = (e, a) => {
            if (L[e])
                Q(
                    (function (e, a, t, u) {
                        switch (a) {
                            case "era":
                            case "year":
                            case "month":
                            case "day":
                                return e.cycle(a, t, { round: "year" === a });
                        }
                        if ("hour" in e)
                            switch (a) {
                                case "dayPeriod": {
                                    let a = e.hour;
                                    return e.set({ hour: a >= 12 ? a - 12 : a + 12 });
                                }
                                case "hour":
                                case "minute":
                                case "second":
                                    return e.cycle(a, t, {
                                        round: "hour" !== a,
                                        hourCycle: u.hour12 ? 12 : 24,
                                    });
                            }
                        throw Error("Unknown segment: " + a);
                    })(G, e, a, U),
                );
            else {
                _(e);
                let a = Object.keys(L),
                    t = Object.keys(K);
                (a.length >= t.length || (a.length === t.length - 1 && K.dayPeriod && !L.dayPeriod)) && Q(G);
            }
        },
        ee = (0, c.useMemo)(() => (0, u.p2)(P, B, E, F, j), [P, B, E, F, j]),
        ea = (0, s.Q3)({
            ...e,
            value: P,
            builtinValidation: ee,
        }),
        et = ea.displayValidation.isInvalid,
        eu = e.validationState || (et ? "invalid" : null);
    return {
        ...ea,
        value: V,
        defaultValue: null != (t = e.defaultValue) ? t : M,
        dateValue: Y,
        calendar: A,
        setValue: Q,
        segments: q,
        dateFormatter: N,
        validationState: eu,
        isInvalid: et,
        granularity: $,
        maxGranularity: null != (f = e.maxGranularity) ? f : "year",
        isDisabled: b,
        isReadOnly: C,
        isRequired: x,
        increment(e) {
            X(e, 1);
        },
        decrement(e) {
            X(e, -1);
        },
        incrementPage(e) {
            X(e, D[e] || 1);
        },
        decrementPage(e) {
            X(e, -(D[e] || 1));
        },
        setSegment(e, a) {
            _(e),
                Q(
                    (function (e, a, t, u) {
                        switch (a) {
                            case "day":
                            case "month":
                            case "year":
                            case "era":
                                return e.set({ [a]: t });
                        }
                        if ("hour" in e && "number" == typeof t)
                            switch (a) {
                                case "dayPeriod": {
                                    let a = e.hour,
                                        u = a >= 12;
                                    if (t >= 12 === u) return e;
                                    return e.set({ hour: u ? a - 12 : a + 12 });
                                }
                                case "hour":
                                    if (u.hour12) {
                                        let a = e.hour >= 12;
                                        a || 12 !== t || (t = 0), a && t < 12 && (t += 12);
                                    }
                                case "minute":
                                case "second":
                                    return e.set({ [a]: t });
                            }
                        throw Error("Unknown segment: " + a);
                    })(G, e, a, U),
                );
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let a = Object.keys(L),
                t = Object.keys(K);
            a.length === t.length - 1 && K.dayPeriod && !L.dayPeriod && (J((L = { ...K })), Q(G.copy()));
        },
        clearSegment(a) {
            delete L[a], (W.current = a), J({ ...L });
            let t = (0, u.OJ)(e.placeholderValue, $, A, R),
                n = G;
            if ("dayPeriod" === a && "hour" in G && "hour" in t) {
                let e = G.hour >= 12,
                    a = t.hour >= 12;
                e && !a ? (n = G.set({ hour: G.hour - 12 })) : !e && a && (n = G.set({ hour: G.hour + 12 }));
            } else
                "hour" === a && "hour" in G && G.hour >= 12 && L.dayPeriod
                    ? (n = G.set({ hour: t.hour + 12 }))
                    : a in G && (n = G.set({ [a]: t[a] }));
            S(null), Q(n);
        },
        formatValue(e) {
            if (!V) return "";
            let a = (0, u.oE)(e, j);
            return new (0, r.C)(p, a).format(Y);
        },
        getDateFormatter(e, a) {
            let t = {
                    ...j,
                    ...a,
                },
                n = (0, u.oE)({}, t);
            return new (0, r.C)(e, n);
        },
    };
}
function y(e, a, t) {
    switch (a) {
        case "era": {
            let a = e.calendar.getEras();
            return {
                value: a.indexOf(e.era),
                minValue: 0,
                maxValue: a.length - 1,
            };
        }
        case "year":
            return {
                value: e.year,
                minValue: 1,
                maxValue: e.calendar.getYearsInEra(e),
            };
        case "month":
            return {
                value: e.month,
                minValue: (0, i.jx)(e),
                maxValue: e.calendar.getMonthsInYear(e),
            };
        case "day":
            return {
                value: e.day,
                minValue: (0, i.PA)(e),
                maxValue: e.calendar.getDaysInMonth(e),
            };
    }
    if ("hour" in e)
        switch (a) {
            case "dayPeriod":
                return {
                    value: 12 * (e.hour >= 12),
                    minValue: 0,
                    maxValue: 12,
                };
            case "hour":
                if (t.hour12) {
                    let a = e.hour >= 12;
                    return {
                        value: e.hour,
                        minValue: 12 * !!a,
                        maxValue: a ? 23 : 11,
                    };
                }
                return {
                    value: e.hour,
                    minValue: 0,
                    maxValue: 23,
                };
            case "minute":
                return {
                    value: e.minute,
                    minValue: 0,
                    maxValue: 59,
                };
            case "second":
                return {
                    value: e.second,
                    minValue: 0,
                    maxValue: 59,
                };
        }
    return {};
}
