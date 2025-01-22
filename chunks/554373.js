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
    o = r(495484),
    s = r(165352),
    l = r(239700),
    u = r(192379);
function c(e, n, r) {
    return (null != n && 0 > e.compare(n)) || (null != r && e.compare(r) > 0);
}
function d(e, n, r, i, a) {
    let o = {};
    for (let e in n) (o[e] = Math.floor(n[e] / 2)), o[e] > 0 && n[e] % 2 == 0 && o[e]--;
    let s = f(e, n, r).subtract(o);
    return h(e, s, n, r, i, a);
}
function f(e, n, r, a, o) {
    let s = e;
    return n.years ? (s = (0, i.em)(e)) : n.months ? (s = (0, i.Nm)(e)) : n.weeks && (s = (0, i.zJ)(e, r)), h(e, s, n, r, a, o);
}
function p(e, n, r, i, a) {
    let o = { ...n };
    n.days ? o.days-- : n.weeks ? o.weeks-- : n.months ? o.months-- : n.years && o.years--;
    let s = f(e, n, r).subtract(o);
    return h(e, s, n, r, i, a);
}
function h(e, n, r, o, s, l) {
    return s && e.compare(s) >= 0 && (n = (0, i.l7)(n, f((0, a.WG)(s), r, o))), l && 0 >= e.compare(l) && (n = (0, i.Mb)(n, p((0, a.WG)(l), r, o))), n;
}
function _(e, n, r) {
    return n && (e = (0, i.l7)(e, (0, a.WG)(n))), r && (e = (0, i.Mb)(e, (0, a.WG)(r))), e;
}
function m(e, n, r) {
    if (!r) return e;
    for (; e.compare(n) >= 0 && r(e); ) e = e.subtract({ days: 1 });
    if (e.compare(n) >= 0) return e;
}
function g(e) {
    let n = (0, u.useMemo)(() => new o.C(e.locale), [e.locale]),
        r = (0, u.useMemo)(() => n.resolvedOptions(), [n]),
        { locale: g, createCalendar: v, visibleDuration: y = { months: 1 }, minValue: b, maxValue: I, selectionAlignment: T, isDateUnavailable: S, pageBehavior: A = 'visible' } = e,
        C = (0, u.useMemo)(() => v(r.calendar), [v, r.calendar]),
        [N, R] = (0, l.zk)(e.value, e.defaultValue, e.onChange),
        O = (0, u.useMemo)(() => (N ? (0, a.Mw)((0, a.WG)(N), C) : null), [N, C]),
        D = (0, u.useMemo)(() => (N && 'timeZone' in N ? N.timeZone : r.timeZone), [N, r.timeZone]),
        x = (0, u.useMemo)(() => (e.focusedValue ? _((0, a.Mw)((0, a.WG)(e.focusedValue), C), b, I) : void 0), [e.focusedValue, C, b, I]),
        L = (0, u.useMemo)(() => _(e.defaultFocusedValue ? (0, a.Mw)((0, a.WG)(e.defaultFocusedValue), C) : O || (0, a.Mw)((0, i.Lg)(D), C), b, I), [e.defaultFocusedValue, O, D, C, b, I]),
        [w, P] = (0, l.zk)(x, L, e.onFocusChange),
        [M, k] = (0, u.useState)(() => {
            switch (T) {
                case 'start':
                    return f(w, y, g, b, I);
                case 'end':
                    return p(w, y, g, b, I);
                default:
                    return d(w, y, g, b, I);
            }
        }),
        [U, B] = (0, u.useState)(e.autoFocus || !1),
        G = (0, u.useMemo)(() => {
            let e = { ...y };
            return e.days ? e.days-- : (e.days = -1), M.add(e);
        }, [M, y]),
        [Z, F] = (0, u.useState)(C.identifier);
    if (C.identifier !== Z) {
        let e = (0, a.Mw)(w, C);
        k(d(e, y, g, b, I)), P(e), F(C.identifier);
    }
    function V(e) {
        P((e = _(e, b, I)));
    }
    function j(n) {
        !e.isDisabled && !e.isReadOnly && (n = m((n = _(n, b, I)), M, S)) && ((n = (0, a.Mw)(n, (null == N ? void 0 : N.calendar) || new s.IQ())), N && 'hour' in N ? R(N.set(n)) : R(n));
    }
    c(w, b, I) ? P(_(w, b, I)) : 0 > w.compare(M) ? k(p(w, y, g, b, I)) : w.compare(G) > 0 && k(f(w, y, g, b, I));
    let H = (0, u.useMemo)(() => !!O && (!!(S && S(O)) || c(O, b, I)), [O, S, b, I]),
        Y = e.isInvalid || 'invalid' === e.validationState || H,
        W = Y ? 'invalid' : null,
        K = (0, u.useMemo)(() => ('visible' === A ? y : E(y)), [A, y]);
    return {
        isDisabled: e.isDisabled,
        isReadOnly: e.isReadOnly,
        value: O,
        setValue: j,
        visibleRange: {
            start: M,
            end: G
        },
        minValue: b,
        maxValue: I,
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
            y.days ? this.focusNextPage() : (y.weeks || y.months || y.years) && V(w.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            y.days ? this.focusPreviousPage() : (y.weeks || y.months || y.years) && V(w.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = M.add(K);
            P(_(w.add(K), b, I)), k(f(h(w, e, K, g, b, I), K, g));
        },
        focusPreviousPage() {
            let e = M.subtract(K);
            P(_(w.subtract(K), b, I)), k(f(h(w, e, K, g, b, I), K, g));
        },
        focusSectionStart() {
            y.days ? V(M) : y.weeks ? V((0, i.zJ)(w, g)) : (y.months || y.years) && V((0, i.Nm)(w));
        },
        focusSectionEnd() {
            y.days ? V(G) : y.weeks ? V((0, i.vV)(w, g)) : (y.months || y.years) && V((0, i.Vf)(w));
        },
        focusNextSection(e) {
            if (!e && !y.days) {
                V(w.add(E(y)));
                return;
            }
            y.days ? this.focusNextPage() : y.weeks ? V(w.add({ months: 1 })) : (y.months || y.years) && V(w.add({ years: 1 }));
        },
        focusPreviousSection(e) {
            if (!e && !y.days) {
                V(w.subtract(E(y)));
                return;
            }
            y.days ? this.focusPreviousPage() : y.weeks ? V(w.subtract({ months: 1 })) : (y.months || y.years) && V(w.subtract({ years: 1 }));
        },
        selectFocusedDate() {
            j(w);
        },
        selectDate(e) {
            j(e);
        },
        isFocused: U,
        setFocused: B,
        isInvalid: (e) => c(e, b, I),
        isSelected(e) {
            return null != O && (0, i.KC)(e, O) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => U && w && (0, i.KC)(e, w),
        isCellDisabled(n) {
            return e.isDisabled || 0 > n.compare(M) || n.compare(G) > 0 || this.isInvalid(n, b, I);
        },
        isCellUnavailable: (n) => e.isDateUnavailable && e.isDateUnavailable(n),
        isPreviousVisibleRangeInvalid() {
            let e = M.subtract({ days: 1 });
            return (0, i.KC)(e, M) || this.isInvalid(e, b, I);
        },
        isNextVisibleRangeInvalid() {
            let e = G.add({ days: 1 });
            return (0, i.KC)(e, G) || this.isInvalid(e, b, I);
        },
        getDatesInWeek(e, n = M) {
            let r = n.add({ weeks: e }),
                a = [];
            r = (0, i.zJ)(r, g);
            let o = (0, i.ji)(r, g);
            for (let e = 0; e < o; e++) a.push(null);
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
    let { value: n, defaultValue: r, onChange: o, createCalendar: s, locale: f, visibleDuration: p = { months: 1 }, minValue: h, maxValue: E, ...v } = e,
        [T, S] = (0, l.zk)(n, r || null, o),
        [A, C] = (0, u.useState)(null),
        N = 'center';
    if (T && T.start && T.end) {
        let e = d((0, a.WG)(T.start), p, f, h, E)
            .add(p)
            .subtract({ days: 1 });
        T.end.compare(e) > 0 && (N = 'start');
    }
    let R = (0, u.useRef)(null),
        [O, D] = (0, u.useState)(null),
        x = (0, u.useMemo)(() => (0, i.l7)(h, null == O ? void 0 : O.start), [h, O]),
        L = (0, u.useMemo)(() => (0, i.Mb)(E, null == O ? void 0 : O.end), [E, O]),
        w = g({
            ...v,
            value: T && T.start,
            createCalendar: s,
            locale: f,
            visibleDuration: p,
            minValue: x,
            maxValue: L,
            selectionAlignment: N
        }),
        P = (n) => {
            n && e.isDateUnavailable && !e.allowsNonContiguousRanges
                ? ((R.current = {
                      start: I(n, w, -1),
                      end: I(n, w, 1)
                  }),
                  D(R.current))
                : ((R.current = null), D(null));
        },
        [M, k] = (0, u.useState)(w.visibleRange);
    (!(0, i.N9)(w.visibleRange.start, M.start) || !(0, i.N9)(w.visibleRange.end, M.end)) && (P(A), k(w.visibleRange));
    let U = (e) => {
            e ? (C(e), P(e)) : (C(null), P(null));
        },
        B = A ? y(A, w.focusedDate) : T && y(T.start, T.end),
        G = (n) => {
            if (!e.isReadOnly) {
                if ((n = m((n = _(n, x, L)), w.visibleRange.start, e.isDateUnavailable))) {
                    if (A) {
                        let e = y(A, n);
                        S({
                            start: b(e.start, null == T ? void 0 : T.start),
                            end: b(e.end, null == T ? void 0 : T.end)
                        }),
                            U(null);
                    } else U(n);
                }
            }
        },
        [Z, F] = (0, u.useState)(!1),
        { isDateUnavailable: V } = e,
        j = (0, u.useMemo)(() => !!T && !A && (!!(V && (V(T.start) || V(T.end))) || c(T.start, h, E) || c(T.end, h, E)), [V, T, A, h, E]),
        H = e.isInvalid || 'invalid' === e.validationState || j,
        Y = H ? 'invalid' : null;
    return {
        ...w,
        value: T,
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
function y(e, n) {
    return e && n
        ? (0 > n.compare(e) && ([e, n] = [n, e]),
          {
              start: (0, a.WG)(e),
              end: (0, a.WG)(n)
          })
        : null;
}
function b(e, n) {
    return ((e = (0, a.Mw)(e, (null == n ? void 0 : n.calendar) || new s.IQ())), n && 'hour' in n) ? n.set(e) : e;
}
function I(e, n, r) {
    let i = e.add({ days: r });
    for (; (r < 0 ? i.compare(n.visibleRange.start) >= 0 : 0 >= i.compare(n.visibleRange.end)) && !n.isCellUnavailable(i); ) i = i.add({ days: r });
    return n.isCellUnavailable(i) ? i.add({ days: -r }) : null;
}
