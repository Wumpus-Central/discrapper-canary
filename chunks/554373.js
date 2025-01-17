r.d(n, {
    F: function () {
        return g;
    },
    t: function () {
        return v;
    }
});
var i = r(328199),
    a = r(697),
    s = r(495484),
    o = r(165352),
    l = r(239700),
    u = r(192379);
function c(e, n, r) {
    return (null != n && 0 > e.compare(n)) || (null != r && e.compare(r) > 0);
}
function d(e, n, r, i, a) {
    let s = {};
    for (let e in n) (s[e] = Math.floor(n[e] / 2)), s[e] > 0 && n[e] % 2 == 0 && s[e]--;
    let o = f(e, n, r).subtract(s);
    return h(e, o, n, r, i, a);
}
function f(e, n, r, a, s) {
    let o = e;
    return n.years ? (o = (0, i.em)(e)) : n.months ? (o = (0, i.Nm)(e)) : n.weeks && (o = (0, i.zJ)(e, r)), h(e, o, n, r, a, s);
}
function _(e, n, r, i, a) {
    let s = { ...n };
    n.days ? s.days-- : n.weeks ? s.weeks-- : n.months ? s.months-- : n.years && s.years--;
    let o = f(e, n, r).subtract(s);
    return h(e, o, n, r, i, a);
}
function h(e, n, r, s, o, l) {
    return o && e.compare(o) >= 0 && (n = (0, i.l7)(n, f((0, a.WG)(o), r, s))), l && 0 >= e.compare(l) && (n = (0, i.Mb)(n, _((0, a.WG)(l), r, s))), n;
}
function p(e, n, r) {
    return n && (e = (0, i.l7)(e, (0, a.WG)(n))), r && (e = (0, i.Mb)(e, (0, a.WG)(r))), e;
}
function m(e, n, r) {
    if (!r) return e;
    for (; e.compare(n) >= 0 && r(e); ) e = e.subtract({ days: 1 });
    if (e.compare(n) >= 0) return e;
}
function g(e) {
    let n = (0, u.useMemo)(() => new s.C(e.locale), [e.locale]),
        r = (0, u.useMemo)(() => n.resolvedOptions(), [n]),
        { locale: g, createCalendar: v, visibleDuration: I = { months: 1 }, minValue: T, maxValue: b, selectionAlignment: y, isDateUnavailable: S, pageBehavior: A = 'visible' } = e,
        N = (0, u.useMemo)(() => v(r.calendar), [v, r.calendar]),
        [C, R] = (0, l.zk)(e.value, e.defaultValue, e.onChange),
        O = (0, u.useMemo)(() => (C ? (0, a.Mw)((0, a.WG)(C), N) : null), [C, N]),
        D = (0, u.useMemo)(() => (C && 'timeZone' in C ? C.timeZone : r.timeZone), [C, r.timeZone]),
        L = (0, u.useMemo)(() => (e.focusedValue ? p((0, a.Mw)((0, a.WG)(e.focusedValue), N), T, b) : void 0), [e.focusedValue, N, T, b]),
        x = (0, u.useMemo)(() => p(e.defaultFocusedValue ? (0, a.Mw)((0, a.WG)(e.defaultFocusedValue), N) : O || (0, a.Mw)((0, i.Lg)(D), N), T, b), [e.defaultFocusedValue, O, D, N, T, b]),
        [w, P] = (0, l.zk)(L, x, e.onFocusChange),
        [M, k] = (0, u.useState)(() => {
            switch (y) {
                case 'start':
                    return f(w, I, g, T, b);
                case 'end':
                    return _(w, I, g, T, b);
                default:
                    return d(w, I, g, T, b);
            }
        }),
        [U, B] = (0, u.useState)(e.autoFocus || !1),
        G = (0, u.useMemo)(() => {
            let e = { ...I };
            return e.days ? e.days-- : (e.days = -1), M.add(e);
        }, [M, I]),
        [Z, F] = (0, u.useState)(N.identifier);
    if (N.identifier !== Z) {
        let e = (0, a.Mw)(w, N);
        k(d(e, I, g, T, b)), P(e), F(N.identifier);
    }
    function V(e) {
        P((e = p(e, T, b)));
    }
    function j(n) {
        !e.isDisabled && !e.isReadOnly && (n = m((n = p(n, T, b)), M, S)) && ((n = (0, a.Mw)(n, (null == C ? void 0 : C.calendar) || new o.IQ())), C && 'hour' in C ? R(C.set(n)) : R(n));
    }
    c(w, T, b) ? P(p(w, T, b)) : 0 > w.compare(M) ? k(_(w, I, g, T, b)) : w.compare(G) > 0 && k(f(w, I, g, T, b));
    let H = (0, u.useMemo)(() => !!O && (!!(S && S(O)) || c(O, T, b)), [O, S, T, b]),
        Y = e.isInvalid || 'invalid' === e.validationState || H,
        W = Y ? 'invalid' : null,
        K = (0, u.useMemo)(() => ('visible' === A ? I : E(I)), [A, I]);
    return {
        isDisabled: e.isDisabled,
        isReadOnly: e.isReadOnly,
        value: O,
        setValue: j,
        visibleRange: {
            start: M,
            end: G
        },
        minValue: T,
        maxValue: b,
        focusedDate: w,
        timeZone: D,
        validationState: W,
        isValueInvalid: Y,
        setFocusedDate(e) {
            V(e), B(!0);
        },
        focusNextDay() {
            V(w.add({ days: 1 }));
        },
        focusPreviousDay() {
            V(w.subtract({ days: 1 }));
        },
        focusNextRow() {
            I.days ? this.focusNextPage() : (I.weeks || I.months || I.years) && V(w.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            I.days ? this.focusPreviousPage() : (I.weeks || I.months || I.years) && V(w.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = M.add(K);
            P(p(w.add(K), T, b)), k(f(h(w, e, K, g, T, b), K, g));
        },
        focusPreviousPage() {
            let e = M.subtract(K);
            P(p(w.subtract(K), T, b)), k(f(h(w, e, K, g, T, b), K, g));
        },
        focusSectionStart() {
            I.days ? V(M) : I.weeks ? V((0, i.zJ)(w, g)) : (I.months || I.years) && V((0, i.Nm)(w));
        },
        focusSectionEnd() {
            I.days ? V(G) : I.weeks ? V((0, i.vV)(w, g)) : (I.months || I.years) && V((0, i.Vf)(w));
        },
        focusNextSection(e) {
            if (!e && !I.days) {
                V(w.add(E(I)));
                return;
            }
            I.days ? this.focusNextPage() : I.weeks ? V(w.add({ months: 1 })) : (I.months || I.years) && V(w.add({ years: 1 }));
        },
        focusPreviousSection(e) {
            if (!e && !I.days) {
                V(w.subtract(E(I)));
                return;
            }
            I.days ? this.focusPreviousPage() : I.weeks ? V(w.subtract({ months: 1 })) : (I.months || I.years) && V(w.subtract({ years: 1 }));
        },
        selectFocusedDate() {
            j(w);
        },
        selectDate(e) {
            j(e);
        },
        isFocused: U,
        setFocused: B,
        isInvalid: (e) => c(e, T, b),
        isSelected(e) {
            return null != O && (0, i.KC)(e, O) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => U && w && (0, i.KC)(e, w),
        isCellDisabled(n) {
            return e.isDisabled || 0 > n.compare(M) || n.compare(G) > 0 || this.isInvalid(n, T, b);
        },
        isCellUnavailable: (n) => e.isDateUnavailable && e.isDateUnavailable(n),
        isPreviousVisibleRangeInvalid() {
            let e = M.subtract({ days: 1 });
            return (0, i.KC)(e, M) || this.isInvalid(e, T, b);
        },
        isNextVisibleRangeInvalid() {
            let e = G.add({ days: 1 });
            return (0, i.KC)(e, G) || this.isInvalid(e, T, b);
        },
        getDatesInWeek(e, n = M) {
            let r = n.add({ weeks: e }),
                a = [];
            r = (0, i.zJ)(r, g);
            let s = (0, i.ji)(r, g);
            for (let e = 0; e < s; e++) a.push(null);
            for (; a.length < 7; ) {
                a.push(r);
                let e = r.add({ days: 1 });
                if ((0, i.KC)(r, e)) break;
                r = e;
            }
            for (; a.length < 7; ) a.push(null);
            return a;
        }
    };
}
function E(e) {
    let n = { ...e };
    for (let r in e) n[r] = 1;
    return n;
}
function v(e) {
    let { value: n, defaultValue: r, onChange: s, createCalendar: o, locale: f, visibleDuration: _ = { months: 1 }, minValue: h, maxValue: E, ...v } = e,
        [y, S] = (0, l.zk)(n, r || null, s),
        [A, N] = (0, u.useState)(null),
        C = 'center';
    if (y && y.start && y.end) {
        let e = d((0, a.WG)(y.start), _, f, h, E)
            .add(_)
            .subtract({ days: 1 });
        y.end.compare(e) > 0 && (C = 'start');
    }
    let R = (0, u.useRef)(null),
        [O, D] = (0, u.useState)(null),
        L = (0, u.useMemo)(() => (0, i.l7)(h, null == O ? void 0 : O.start), [h, O]),
        x = (0, u.useMemo)(() => (0, i.Mb)(E, null == O ? void 0 : O.end), [E, O]),
        w = g({
            ...v,
            value: y && y.start,
            createCalendar: o,
            locale: f,
            visibleDuration: _,
            minValue: L,
            maxValue: x,
            selectionAlignment: C
        }),
        P = (n) => {
            n && e.isDateUnavailable && !e.allowsNonContiguousRanges
                ? ((R.current = {
                      start: b(n, w, -1),
                      end: b(n, w, 1)
                  }),
                  D(R.current))
                : ((R.current = null), D(null));
        },
        [M, k] = (0, u.useState)(w.visibleRange);
    (!(0, i.N9)(w.visibleRange.start, M.start) || !(0, i.N9)(w.visibleRange.end, M.end)) && (P(A), k(w.visibleRange));
    let U = (e) => {
            e ? (N(e), P(e)) : (N(null), P(null));
        },
        B = A ? I(A, w.focusedDate) : y && I(y.start, y.end),
        G = (n) => {
            if (!e.isReadOnly) {
                if ((n = m((n = p(n, L, x)), w.visibleRange.start, e.isDateUnavailable))) {
                    if (A) {
                        let e = I(A, n);
                        S({
                            start: T(e.start, null == y ? void 0 : y.start),
                            end: T(e.end, null == y ? void 0 : y.end)
                        }),
                            U(null);
                    } else U(n);
                }
            }
        },
        [Z, F] = (0, u.useState)(!1),
        { isDateUnavailable: V } = e,
        j = (0, u.useMemo)(() => !!y && !A && (!!(V && (V(y.start) || V(y.end))) || c(y.start, h, E) || c(y.end, h, E)), [V, y, A, h, E]),
        H = e.isInvalid || 'invalid' === e.validationState || j,
        Y = H ? 'invalid' : null;
    return {
        ...w,
        value: y,
        setValue: S,
        anchorDate: A,
        setAnchorDate: U,
        highlightedRange: B,
        validationState: Y,
        isValueInvalid: H,
        selectFocusedDate() {
            G(w.focusedDate);
        },
        selectDate: G,
        highlightDate(e) {
            A && w.setFocusedDate(e);
        },
        isSelected: (e) => B && e.compare(B.start) >= 0 && 0 >= e.compare(B.end) && !w.isCellDisabled(e) && !w.isCellUnavailable(e),
        isInvalid(e) {
            var n, r;
            return w.isInvalid(e) || c(e, null === (n = R.current) || void 0 === n ? void 0 : n.start, null === (r = R.current) || void 0 === r ? void 0 : r.end);
        },
        isDragging: Z,
        setDragging: F
    };
}
function I(e, n) {
    return e && n
        ? (0 > n.compare(e) && ([e, n] = [n, e]),
          {
              start: (0, a.WG)(e),
              end: (0, a.WG)(n)
          })
        : null;
}
function T(e, n) {
    return ((e = (0, a.Mw)(e, (null == n ? void 0 : n.calendar) || new o.IQ())), n && 'hour' in n) ? n.set(e) : e;
}
function b(e, n, r) {
    let i = e.add({ days: r });
    for (; (r < 0 ? i.compare(n.visibleRange.start) >= 0 : 0 >= i.compare(n.visibleRange.end)) && !n.isCellUnavailable(i); ) i = i.add({ days: r });
    return n.isCellUnavailable(i) ? i.add({ days: -r }) : null;
}
