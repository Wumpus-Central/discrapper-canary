t.d(a, { F: () => d });
var u = t(932319),
    n = t(45728),
    r = t(640475),
    i = t(533426),
    o = t(274738),
    l = t(379955),
    s = t(647438);
function d(e) {
    var a, t, d;
    let m = (0, s.useMemo)(() => new (0, n.C)(e.locale), [e.locale]),
        D = (0, s.useMemo)(() => m.resolvedOptions(), [m]),
        {
            locale: h,
            createCalendar: f,
            visibleDuration: y = { months: 1 },
            minValue: p,
            maxValue: g,
            selectionAlignment: v,
            isDateUnavailable: b,
            pageBehavior: C = "visible",
            firstDayOfWeek: x,
        } = e,
        B = (0, s.useMemo)(() => f(D.calendar), [f, D.calendar]),
        [E, F] = (0, l.z)(e.value, null != (a = e.defaultValue) ? a : null, e.onChange),
        w = (0, s.useMemo)(() => (E ? (0, r.Mw)((0, r.WG)(E), B) : null), [E, B]),
        $ = (0, s.useMemo)(() => (E && "timeZone" in E ? E.timeZone : D.timeZone), [E, D.timeZone]),
        R = (0, s.useMemo)(
            () => (e.focusedValue ? (0, u.Me)((0, r.Mw)((0, r.WG)(e.focusedValue), B), p, g) : void 0),
            [e.focusedValue, B, p, g],
        ),
        Z = (0, s.useMemo)(
            () =>
                (0, u.Me)(
                    e.defaultFocusedValue
                        ? (0, r.Mw)((0, r.WG)(e.defaultFocusedValue), B)
                        : w || (0, r.Mw)((0, i.Lg)($), B),
                    p,
                    g,
                ),
            [e.defaultFocusedValue, w, $, B, p, g],
        ),
        [k, A] = (0, l.z)(R, Z, e.onFocusChange),
        [P, S] = (0, s.useState)(() => {
            switch (v) {
                case "start":
                    return (0, u.Yn)(k, y, h, p, g);
                case "end":
                    return (0, u.N2)(k, y, h, p, g);
                default:
                    return (0, u.A8)(k, y, h, p, g);
            }
        }),
        [M, V] = (0, s.useState)(e.autoFocus || !1),
        I = (0, s.useMemo)(() => {
            let e = { ...y };
            return e.days ? e.days-- : (e.days = -1), P.add(e);
        }, [P, y]),
        [z, O] = (0, s.useState)(B);
    if (!(0, i.jv)(B, z)) {
        let e = (0, r.Mw)(k, B);
        S((0, u.A8)(e, y, h, p, g)), A(e), O(B);
    }
    function j(e) {
        A((e = (0, u.Me)(e, p, g)));
    }
    function T(a) {
        if (!e.isDisabled && !e.isReadOnly) {
            let e = a;
            if (null === e) return void F(null);
            (e = (0, u.Me)(e, p, g)),
                (e = (0, u.UC)(e, P, b)) &&
                    ((e = (0, r.Mw)(e, (null == E ? void 0 : E.calendar) || new (0, o.IQ)())),
                    E && "hour" in E ? F(E.set(e)) : F(e));
        }
    }
    (0, u.wp)(k, p, g)
        ? A((0, u.Me)(k, p, g))
        : 0 > k.compare(P)
          ? S((0, u.N2)(k, y, h, p, g))
          : k.compare(I) > 0 && S((0, u.Yn)(k, y, h, p, g));
    let N = (0, s.useMemo)(() => !!w && (!!(b && b(w)) || (0, u.wp)(w, p, g)), [w, b, p, g]),
        U = e.isInvalid || "invalid" === e.validationState || N,
        K = (0, s.useMemo)(() => ("visible" === C ? y : c(y)), [C, y]);
    return {
        isDisabled: null != (t = e.isDisabled) && t,
        isReadOnly: null != (d = e.isReadOnly) && d,
        value: w,
        setValue: T,
        visibleRange: {
            start: P,
            end: I,
        },
        minValue: p,
        maxValue: g,
        focusedDate: k,
        timeZone: $,
        validationState: U ? "invalid" : null,
        isValueInvalid: U,
        setFocusedDate(e) {
            j(e), V(!0);
        },
        focusNextDay() {
            j(k.add({ days: 1 }));
        },
        focusPreviousDay() {
            j(k.subtract({ days: 1 }));
        },
        focusNextRow() {
            y.days ? this.focusNextPage() : (y.weeks || y.months || y.years) && j(k.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            y.days ? this.focusPreviousPage() : (y.weeks || y.months || y.years) && j(k.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = P.add(K);
            A((0, u.Me)(k.add(K), p, g)), S((0, u.Yn)((0, u.PJ)(k, e, K, h, p, g), K, h));
        },
        focusPreviousPage() {
            let e = P.subtract(K);
            A((0, u.Me)(k.subtract(K), p, g)), S((0, u.Yn)((0, u.PJ)(k, e, K, h, p, g), K, h));
        },
        focusSectionStart() {
            y.days ? j(P) : y.weeks ? j((0, i.zJ)(k, h)) : (y.months || y.years) && j((0, i.Nm)(k));
        },
        focusSectionEnd() {
            y.days ? j(I) : y.weeks ? j((0, i.vV)(k, h)) : (y.months || y.years) && j((0, i.Vf)(k));
        },
        focusNextSection(e) {
            if (!e && !y.days) return void j(k.add(c(y)));
            y.days
                ? this.focusNextPage()
                : y.weeks
                  ? j(k.add({ months: 1 }))
                  : (y.months || y.years) && j(k.add({ years: 1 }));
        },
        focusPreviousSection(e) {
            if (!e && !y.days) return void j(k.subtract(c(y)));
            y.days
                ? this.focusPreviousPage()
                : y.weeks
                  ? j(k.subtract({ months: 1 }))
                  : (y.months || y.years) && j(k.subtract({ years: 1 }));
        },
        selectFocusedDate() {
            (b && b(k)) || T(k);
        },
        selectDate(e) {
            T(e);
        },
        isFocused: M,
        setFocused: V,
        isInvalid: (e) => (0, u.wp)(e, p, g),
        isSelected(e) {
            return null != w && (0, i.KC)(e, w) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => M && k && (0, i.KC)(e, k),
        isCellDisabled(a) {
            return e.isDisabled || 0 > a.compare(P) || a.compare(I) > 0 || this.isInvalid(a);
        },
        isCellUnavailable: (a) => !!e.isDateUnavailable && e.isDateUnavailable(a),
        isPreviousVisibleRangeInvalid() {
            let e = P.subtract({ days: 1 });
            return (0, i.KC)(e, P) || this.isInvalid(e);
        },
        isNextVisibleRangeInvalid() {
            let e = I.add({ days: 1 });
            return (0, i.KC)(e, I) || this.isInvalid(e);
        },
        getDatesInWeek(e, a = P) {
            let t = a.add({ weeks: e }),
                u = [];
            t = (0, i.zJ)(t, h, x);
            let n = (0, i.ji)(t, h, x);
            for (let e = 0; e < n; e++) u.push(null);
            for (; u.length < 7; ) {
                u.push(t);
                let e = t.add({ days: 1 });
                if ((0, i.KC)(t, e)) break;
                t = e;
            }
            for (; u.length < 7; ) u.push(null);
            return u;
        },
    };
}
function c(e) {
    let a = { ...e };
    for (let t in e) a[t] = 1;
    return a;
}
