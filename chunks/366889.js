r.d(n, {
    GX: function () {
        return J;
    },
    JK: function () {
        return et;
    },
    QA: function () {
        return ee;
    },
    Zv: function () {
        return $;
    }
});
var i = r(806853),
    a = r(699590),
    o = r(684861),
    s = r(644067),
    l = r(991698),
    u = r(941307),
    c = r(175847),
    d = r(142442),
    f = r(372693),
    p = r(794223),
    h = r(270022),
    _ = r(420387),
    m = r(906235),
    g = r(665666),
    E = r(240880),
    v = r(873396),
    y = r(218465),
    b = r(238824),
    I = r(772629),
    T = r(435178),
    S = r(473626),
    A = r(667916),
    C = r(935259),
    N = r(84271),
    R = r(6011),
    O = r(905447),
    D = r(579477),
    x = r(91981),
    L = r(606737),
    w = r(667490),
    P = r(97794),
    M = r(208874),
    k = r(769491),
    U = r(697892),
    B = r(770003),
    G = r(661763),
    Z = r(649859),
    F = r(192379),
    V = r(328199),
    j = r(921336);
function H(e) {
    return e && e.__esModule ? e.default : e;
}
var Y = {};
Y = {
    'ar-AE': i.Z,
    'bg-BG': a.Z,
    'cs-CZ': o.Z,
    'da-DK': s.Z,
    'de-DE': l.Z,
    'el-GR': u.Z,
    'en-US': c.Z,
    'es-ES': d.Z,
    'et-EE': f.Z,
    'fi-FI': p.Z,
    'fr-FR': h.Z,
    'he-IL': _.Z,
    'hr-HR': m.Z,
    'hu-HU': g.Z,
    'it-IT': E.Z,
    'ja-JP': v.Z,
    'ko-KR': y.Z,
    'lt-LT': b.Z,
    'lv-LV': I.Z,
    'nb-NO': T.Z,
    'nl-NL': S.Z,
    'pl-PL': A.Z,
    'pt-BR': C.Z,
    'pt-PT': N.Z,
    'ro-RO': R.Z,
    'ru-RU': O.Z,
    'sk-SK': D.Z,
    'sl-SI': x.Z,
    'sr-SP': L.Z,
    'sv-SE': w.Z,
    'tr-TR': P.Z,
    'uk-UA': M.Z,
    'zh-CN': k.Z,
    'zh-TW': U.Z
};
let W = new WeakMap();
function K(e) {
    return (null == e ? void 0 : e.calendar.identifier) === 'gregory' && 'BC' === e.era ? 'short' : void 0;
}
function z(e) {
    let n,
        r,
        i = (0, Z.qb)(H(Y), '@react-aria/calendar');
    'highlightedRange' in e ? ({ start: n, end: r } = e.highlightedRange || {}) : (n = r = e.value);
    let a = (0, Z.aQ)({
            weekday: 'long',
            month: 'long',
            year: 'numeric',
            day: 'numeric',
            era: K(n) || K(r),
            timeZone: e.timeZone
        }),
        o = 'anchorDate' in e ? e.anchorDate : null;
    return (0, F.useMemo)(() => {
        if (!o && n && r) {
            if ((0, V.KC)(n, r)) {
                let r = a.format(n.toDate(e.timeZone));
                return i.format('selectedDateDescription', { date: r });
            }
            {
                let o = Q(a, i, n, r, e.timeZone);
                return i.format('selectedRangeDescription', { dateRange: o });
            }
        }
        return '';
    }, [n, r, o, e.timeZone, i, a]);
}
function q(e, n, r, i) {
    let a = (0, Z.qb)(H(Y), '@react-aria/calendar'),
        o = K(e) || K(n),
        s = (0, Z.aQ)({
            month: 'long',
            year: 'numeric',
            era: o,
            calendar: e.calendar.identifier,
            timeZone: r
        }),
        l = (0, Z.aQ)({
            month: 'long',
            year: 'numeric',
            day: 'numeric',
            era: o,
            calendar: e.calendar.identifier,
            timeZone: r
        });
    return (0, F.useMemo)(() => {
        if ((0, V.KC)(e, (0, V.Nm)(e))) {
            if ((0, V.KC)(n, (0, V.Vf)(e))) return s.format(e.toDate(r));
            if ((0, V.KC)(n, (0, V.Vf)(n))) return i ? Q(s, a, e, n, r) : s.formatRange(e.toDate(r), n.toDate(r));
        }
        return i ? Q(l, a, e, n, r) : l.formatRange(e.toDate(r), n.toDate(r));
    }, [e, n, s, l, a, r, i]);
}
function Q(e, n, r, i, a) {
    let o = e.formatRangeToParts(r.toDate(a), i.toDate(a)),
        s = -1;
    for (let e = 0; e < o.length; e++) {
        let n = o[e];
        if ('shared' === n.source && 'literal' === n.type) s = e;
        else if ('endRange' === n.source) break;
    }
    let l = '',
        u = '';
    for (let e = 0; e < o.length; e++) e < s ? (l += o[e].value) : e > s && (u += o[e].value);
    return n.format('dateRange', {
        startDate: l,
        endDate: u
    });
}
function X(e, n) {
    let r = (0, Z.qb)(H(Y), '@react-aria/calendar'),
        i = (0, G.zL)(e),
        a = q(n.visibleRange.start, n.visibleRange.end, n.timeZone, !1),
        o = q(n.visibleRange.start, n.visibleRange.end, n.timeZone, !0);
    (0, G.rf)(() => {
        !n.isFocused && (0, B.xQ)(o);
    }, [o]);
    let s = z(n);
    (0, G.rf)(() => {
        s && (0, B.xQ)(s, 'polite', 4000);
    }, [s]);
    let l = (0, G.mp)([!!e.errorMessage, e.isInvalid, e.validationState]);
    W.set(n, {
        ariaLabel: e['aria-label'],
        ariaLabelledBy: e['aria-labelledby'],
        errorMessageId: l,
        selectedDateDescription: s
    });
    let [u, c] = (0, F.useState)(!1),
        d = e.isDisabled || n.isNextVisibleRangeInvalid();
    d && u && (c(!1), n.setFocused(!0));
    let [f, p] = (0, F.useState)(!1),
        h = e.isDisabled || n.isPreviousVisibleRangeInvalid();
    h && f && (p(!1), n.setFocused(!0));
    let _ = (0, G.bE)({
        id: e.id,
        'aria-label': [e['aria-label'], o].filter(Boolean).join(', '),
        'aria-labelledby': e['aria-labelledby']
    });
    return {
        calendarProps: (0, G.dG)(i, _, {
            role: 'application',
            'aria-describedby': e['aria-describedby'] || void 0
        }),
        nextButtonProps: {
            onPress: () => n.focusNextPage(),
            'aria-label': r.format('next'),
            isDisabled: d,
            onFocusChange: c
        },
        prevButtonProps: {
            onPress: () => n.focusPreviousPage(),
            'aria-label': r.format('previous'),
            isDisabled: h,
            onFocusChange: p
        },
        errorMessageProps: { id: l },
        title: a
    };
}
function J(e, n) {
    return X(e, n);
}
function $(e, n, r) {
    let i = X(e, n),
        a = (0, F.useRef)(!1),
        o = (0, F.useRef)('undefined' != typeof window ? window : null);
    (0, G.zX)(o, 'pointerdown', (e) => {
        a.current = 0 === e.width && 0 === e.height;
    });
    let s = (e) => {
        if (a.current) {
            a.current = !1;
            return;
        }
        if ((n.setDragging(!1), !n.anchorDate)) return;
        let r = e.target,
            o = document.getElementById(i.calendarProps.id);
        o && o.contains(document.activeElement) && (!o.contains(r) || !r.closest('button, [role="button"]')) && n.selectFocusedDate();
    };
    return (
        (0, G.zX)(o, 'pointerup', s),
        (0, G.zX)(o, 'pointercancel', s),
        (i.calendarProps.onBlur = (e) => {
            (!e.relatedTarget || !r.current.contains(e.relatedTarget)) && n.anchorDate && n.selectFocusedDate();
        }),
        (0, G.zX)(
            r,
            'touchmove',
            (e) => {
                n.isDragging && e.preventDefault();
            },
            {
                passive: !1,
                capture: !0
            }
        ),
        i
    );
}
function ee(e, n) {
    let { startDate: r = n.visibleRange.start, endDate: i = n.visibleRange.end } = e,
        { direction: a } = (0, Z.bU)(),
        o = (e) => {
            switch (e.key) {
                case 'Enter':
                case ' ':
                    e.preventDefault(), n.selectFocusedDate();
                    break;
                case 'PageUp':
                    e.preventDefault(), e.stopPropagation(), n.focusPreviousSection(e.shiftKey);
                    break;
                case 'PageDown':
                    e.preventDefault(), e.stopPropagation(), n.focusNextSection(e.shiftKey);
                    break;
                case 'End':
                    e.preventDefault(), e.stopPropagation(), n.focusSectionEnd();
                    break;
                case 'Home':
                    e.preventDefault(), e.stopPropagation(), n.focusSectionStart();
                    break;
                case 'ArrowLeft':
                    e.preventDefault(), e.stopPropagation(), 'rtl' === a ? n.focusNextDay() : n.focusPreviousDay();
                    break;
                case 'ArrowUp':
                    e.preventDefault(), e.stopPropagation(), n.focusPreviousRow();
                    break;
                case 'ArrowRight':
                    e.preventDefault(), e.stopPropagation(), 'rtl' === a ? n.focusPreviousDay() : n.focusNextDay();
                    break;
                case 'ArrowDown':
                    e.preventDefault(), e.stopPropagation(), n.focusNextRow();
                    break;
                case 'Escape':
                    'setAnchorDate' in n && (e.preventDefault(), n.setAnchorDate(null));
            }
        },
        s = q(r, i, n.timeZone, !0),
        { ariaLabel: l, ariaLabelledBy: u } = W.get(n),
        c = (0, G.bE)({
            'aria-label': [l, s].filter(Boolean).join(', '),
            'aria-labelledby': u
        }),
        d = (0, Z.aQ)({
            weekday: e.weekdayStyle || 'narrow',
            timeZone: n.timeZone
        }),
        { locale: f } = (0, Z.bU)(),
        p = (0, F.useMemo)(() => {
            let e = (0, V.zJ)((0, V.Lg)(n.timeZone), f);
            return [...Array(7).keys()].map((r) => {
                let i = e.add({ days: r }).toDate(n.timeZone);
                return d.format(i);
            });
        }, [f, n.timeZone, d]);
    return {
        gridProps: (0, G.dG)(c, {
            role: 'grid',
            'aria-readonly': n.isReadOnly || null,
            'aria-disabled': n.isDisabled || null,
            'aria-multiselectable': 'highlightedRange' in n || void 0,
            onKeyDown: o,
            onFocus: () => n.setFocused(!0),
            onBlur: () => n.setFocused(!1)
        }),
        headerProps: { 'aria-hidden': !0 },
        weekDays: p
    };
}
function et(e, n, r) {
    let { date: i, isDisabled: a } = e,
        { errorMessageId: o, selectedDateDescription: s } = W.get(n),
        l = (0, Z.qb)(H(Y), '@react-aria/calendar'),
        u = (0, Z.aQ)({
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            era: K(i),
            timeZone: n.timeZone
        }),
        c = n.isSelected(i),
        d = n.isCellFocused(i);
    a = a || n.isCellDisabled(i);
    let f = n.isCellUnavailable(i),
        p = !a && !f,
        h = n.isValueInvalid && ('highlightedRange' in n ? !n.anchorDate && n.highlightedRange && i.compare(n.highlightedRange.start) >= 0 && 0 >= i.compare(n.highlightedRange.end) : n.value && (0, V.KC)(n.value, i));
    h && (c = !0), (i = (0, G.vE)(i, V.N9));
    let _ = (0, F.useMemo)(() => i.toDate(n.timeZone), [i, n.timeZone]),
        m = (0, V.zk)(i, n.timeZone),
        g = (0, F.useMemo)(() => {
            let e = '';
            return 'highlightedRange' in n && n.value && !n.anchorDate && ((0, V.KC)(i, n.value.start) || (0, V.KC)(i, n.value.end)) && (e = s + ', '), (e += u.format(_)), m ? (e = l.format(c ? 'todayDateSelected' : 'todayDate', { date: e })) : c && (e = l.format('dateSelected', { date: e })), n.minValue && (0, V.KC)(i, n.minValue) ? (e += ', ' + l.format('minimumDate')) : n.maxValue && (0, V.KC)(i, n.maxValue) && (e += ', ' + l.format('maximumDate')), e;
        }, [u, _, l, c, m, i, n, s]),
        E = '';
    'anchorDate' in n && d && !n.isReadOnly && p && (E = n.anchorDate ? l.format('finishRangeSelectionPrompt') : l.format('startRangeSelectionPrompt'));
    let v = (0, G.PK)(E),
        y = (0, F.useRef)(!1),
        b = (0, F.useRef)(!1),
        I = (0, F.useRef)(null),
        { pressProps: T, isPressed: S } = (0, j.r7)({
            shouldCancelOnPointerExit: 'anchorDate' in n && !!n.anchorDate,
            preventFocusOnPress: !0,
            isDisabled: !p || n.isReadOnly,
            onPressStart(e) {
                if (n.isReadOnly) {
                    n.setFocusedDate(i);
                    return;
                }
                if ('highlightedRange' in n && !n.anchorDate && ('mouse' === e.pointerType || 'touch' === e.pointerType)) {
                    if (n.highlightedRange && !h) {
                        if ((0, V.KC)(i, n.highlightedRange.start)) {
                            n.setAnchorDate(n.highlightedRange.end), n.setFocusedDate(i), n.setDragging(!0), (b.current = !0);
                            return;
                        }
                        if ((0, V.KC)(i, n.highlightedRange.end)) {
                            n.setAnchorDate(n.highlightedRange.start), n.setFocusedDate(i), n.setDragging(!0), (b.current = !0);
                            return;
                        }
                    }
                    let r = () => {
                        n.setDragging(!0), (I.current = null), n.selectDate(i), n.setFocusedDate(i), (y.current = !0);
                    };
                    'touch' === e.pointerType ? (I.current = setTimeout(r, 200)) : r();
                }
            },
            onPressEnd() {
                (b.current = !1), (y.current = !1), clearTimeout(I.current), (I.current = null);
            },
            onPress() {
                !('anchorDate' in n) && !n.isReadOnly && (n.selectDate(i), n.setFocusedDate(i));
            },
            onPressUp(e) {
                if (!n.isReadOnly && ('anchorDate' in n && I.current && (n.selectDate(i), n.setFocusedDate(i)), 'anchorDate' in n)) {
                    if (b.current) n.setAnchorDate(i);
                    else if (n.anchorDate && !y.current) n.selectDate(i), n.setFocusedDate(i);
                    else if ('keyboard' !== e.pointerType || n.anchorDate) 'virtual' === e.pointerType && (n.selectDate(i), n.setFocusedDate(i));
                    else {
                        n.selectDate(i);
                        let e = i.add({ days: 1 });
                        n.isInvalid(e) && (e = i.subtract({ days: 1 })), !n.isInvalid(e) && n.setFocusedDate(e);
                    }
                }
            }
        }),
        A = null;
    !a && (A = (0, V.KC)(i, n.focusedDate) ? 0 : -1),
        (0, F.useEffect)(() => {
            d && r.current && ((0, G.Ao)(r.current), 'pointer' !== (0, j.Jz)() && document.activeElement === r.current && (0, G.Gt)(r.current, { containingElement: (0, G.rP)(r.current) }));
        }, [d, r]);
    let C = (0, Z.aQ)({
            day: 'numeric',
            timeZone: n.timeZone,
            calendar: i.calendar.identifier
        }),
        N = (0, F.useMemo)(() => C.formatToParts(_).find((e) => 'day' === e.type).value, [C, _]);
    return {
        cellProps: {
            role: 'gridcell',
            'aria-disabled': !p || null,
            'aria-selected': c || null,
            'aria-invalid': h || null
        },
        buttonProps: (0, G.dG)(T, {
            onFocus() {
                !a && n.setFocusedDate(i);
            },
            tabIndex: A,
            role: 'button',
            'aria-disabled': !p || null,
            'aria-label': g,
            'aria-invalid': h || null,
            'aria-describedby': [h ? o : null, v['aria-describedby']].filter(Boolean).join(' ') || void 0,
            onPointerEnter(e) {
                'highlightDate' in n && ('touch' !== e.pointerType || n.isDragging) && p && n.highlightDate(i);
            },
            onPointerDown(e) {
                'releasePointerCapture' in e.target && e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu(e) {
                e.preventDefault();
            }
        }),
        isPressed: S,
        isFocused: d,
        isSelected: c,
        isDisabled: a,
        isUnavailable: f,
        isOutsideVisibleRange: 0 > i.compare(n.visibleRange.start) || i.compare(n.visibleRange.end) > 0,
        isInvalid: h,
        formattedDate: N
    };
}
