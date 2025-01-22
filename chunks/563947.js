r.d(n, {
    C3: function () {
        return er;
    },
    IZ: function () {
        return en;
    },
    O7: function () {
        return es;
    },
    kt: function () {
        return ei;
    },
    wE: function () {
        return eu;
    }
});
var i = r(313921),
    a = r(19822),
    o = r(520872),
    s = r(42226),
    l = r(436337),
    u = r(768228),
    c = r(887881),
    d = r(335922),
    f = r(320168),
    p = r(756249),
    h = r(161964),
    _ = r(917849),
    m = r(413027),
    g = r(232342),
    E = r(223586),
    v = r(330718),
    y = r(199707),
    b = r(106941),
    I = r(414210),
    T = r(826768),
    S = r(447106),
    A = r(186699),
    C = r(897115),
    N = r(595537),
    R = r(95201),
    O = r(447306),
    D = r(679462),
    x = r(349398),
    L = r(608255),
    w = r(109793),
    P = r(149722),
    M = r(907603),
    k = r(805759),
    U = r(28306),
    B = r(662845),
    G = r(661763),
    Z = r(969129),
    F = r(192379),
    V = r(523603),
    j = r(921336),
    H = r(649859),
    Y = r(464170),
    W = r(697),
    K = r(927521),
    z = r(881085),
    q = r(98881);
function Q(e) {
    return e && e.__esModule ? e.default : e;
}
var X = {};
function J(e, n, r) {
    let { direction: i } = (0, H.bU)(),
        a = (0, F.useMemo)(() => (0, B.E7)(n), [n]),
        o = (n) => {
            if (!!n.currentTarget.contains(n.target)) {
                if ((n.altKey && ('ArrowDown' === n.key || 'ArrowUp' === n.key) && 'setOpen' in e && (n.preventDefault(), n.stopPropagation(), e.setOpen(!0)), !r))
                    switch (n.key) {
                        case 'ArrowLeft':
                            n.preventDefault(), n.stopPropagation(), 'rtl' === i ? a.focusNext() : a.focusPrevious();
                            break;
                        case 'ArrowRight':
                            n.preventDefault(), n.stopPropagation(), 'rtl' === i ? a.focusPrevious() : a.focusNext();
                    }
            }
        },
        s = () => {
            var e;
            let r = null === (e = window.event) || void 0 === e ? void 0 : e.target,
                i = (0, B.QL)(n.current, { tabbable: !0 });
            if ((r && ((i.currentNode = r), (r = i.previousNode())), !r)) {
                let e;
                do (e = i.lastChild()) && (r = e);
                while (e);
            }
            for (; null == r ? void 0 : r.hasAttribute('data-placeholder'); ) {
                let e = i.previousNode();
                if (e && e.hasAttribute('data-placeholder')) r = e;
                else break;
            }
            r && r.focus();
        },
        { pressProps: l } = (0, j.r7)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                'mouse' === e.pointerType && s();
            },
            onPress(e) {
                'mouse' !== e.pointerType && s();
            }
        });
    return (0, G.dG)(l, { onKeyDown: o });
}
X = {
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
let $ = new WeakMap(),
    ee = '__role_' + Date.now(),
    et = '__focusManager_' + Date.now();
function en(e, n, r) {
    var i;
    let a;
    let { isInvalid: o, validationErrors: s, validationDetails: l } = n.displayValidation,
        {
            labelProps: u,
            fieldProps: c,
            descriptionProps: d,
            errorMessageProps: f
        } = (0, V.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: o,
            errorMessage: e.errorMessage || s
        }),
        p = (0, F.useRef)(null),
        { focusWithinProps: h } = (0, j.L_)({
            ...e,
            onFocusWithin(r) {
                var i;
                (p.current = n.value), null === (i = e.onFocus) || void 0 === i || i.call(e, r);
            },
            onBlurWithin: (r) => {
                var i;
                n.confirmPlaceholder(), n.value !== p.current && n.commitValidation(), null === (i = e.onBlur) || void 0 === i || i.call(e, r);
            },
            onFocusWithinChange: e.onFocusChange
        }),
        _ = (0, H.qb)(Q(X), '@react-aria/datepicker'),
        m = 'hour' === n.maxGranularity ? 'selectedTimeDescription' : 'selectedDateDescription',
        g = 'hour' === n.maxGranularity ? 'time' : 'date',
        E = n.value ? _.format(m, { [g]: n.formatValue({ month: 'long' }) }) : '',
        v = (0, G.PK)(E),
        y = 'presentation' === e[ee] ? c['aria-describedby'] : [v['aria-describedby'], c['aria-describedby']].filter(Boolean).join(' ') || void 0,
        b = e[et],
        I = (0, F.useMemo)(() => b || (0, B.E7)(r), [b, r]),
        T = J(n, r, 'presentation' === e[ee]);
    $.set(n, {
        ariaLabel: e['aria-label'],
        ariaLabelledBy: [u.id, e['aria-labelledby']].filter(Boolean).join(' ') || void 0,
        ariaDescribedBy: y,
        focusManager: I
    });
    let S = (0, F.useRef)(e.autoFocus);
    (a =
        'presentation' === e[ee]
            ? { role: 'presentation' }
            : (0, G.dG)(c, {
                  role: 'group',
                  'aria-disabled': e.isDisabled || void 0,
                  'aria-describedby': y
              })),
        (0, F.useEffect)(() => {
            S.current && I.focusFirst(), (S.current = !1);
        }, [I]),
        (0, G.y$)(e.inputRef, n.value, n.setValue),
        (0, Y.Q)(
            {
                ...e,
                focus() {
                    I.focusFirst();
                }
            },
            n,
            e.inputRef
        );
    let A = {
        type: 'hidden',
        name: e.name,
        value: (null === (i = n.value) || void 0 === i ? void 0 : i.toString()) || ''
    };
    'native' === e.validationBehavior && ((A.type = 'text'), (A.hidden = !0), (A.required = e.isRequired), (A.onChange = () => {}));
    let C = (0, G.zL)(e);
    return {
        labelProps: {
            ...u,
            onClick: () => {
                I.focusFirst();
            }
        },
        fieldProps: (0, G.dG)(C, a, T, h, {
            onKeyDown(n) {
                e.onKeyDown && e.onKeyDown(n);
            },
            onKeyUp(n) {
                e.onKeyUp && e.onKeyUp(n);
            }
        }),
        inputProps: A,
        descriptionProps: d,
        errorMessageProps: f,
        isInvalid: o,
        validationErrors: s,
        validationDetails: l
    };
}
function er(e, n, r) {
    var i;
    let a = en(e, n, r);
    return (a.inputProps.value = (null === (i = n.timeValue) || void 0 === i ? void 0 : i.toString()) || ''), a;
}
function ei(e, n, r) {
    let i = (0, G.Me)(),
        a = (0, G.Me)(),
        o = (0, G.Me)(),
        s = (0, H.qb)(Q(X), '@react-aria/datepicker'),
        { isInvalid: l, validationErrors: u, validationDetails: c } = n.displayValidation,
        {
            labelProps: d,
            fieldProps: f,
            descriptionProps: p,
            errorMessageProps: h
        } = (0, V.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: l,
            errorMessage: e.errorMessage || u
        }),
        _ = J(n, r),
        m = f['aria-labelledby'] || f.id,
        { locale: g } = (0, H.bU)(),
        E = n.formatValue(g, { month: 'long' }),
        v = E ? s.format('selectedDateDescription', { date: E }) : '',
        y = (0, G.PK)(v),
        b = [y['aria-describedby'], f['aria-describedby']].filter(Boolean).join(' ') || void 0,
        I = (0, G.zL)(e),
        T = (0, F.useMemo)(() => (0, B.E7)(r), [r]),
        { focusWithinProps: S } = (0, j.L_)({
            ...e,
            isDisabled: n.isOpen,
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange
        });
    return {
        groupProps: (0, G.dG)(I, _, f, y, S, {
            role: 'group',
            'aria-disabled': e.isDisabled || null,
            'aria-labelledby': m,
            'aria-describedby': b,
            onKeyDown(r) {
                !n.isOpen && e.onKeyDown && e.onKeyDown(r);
            },
            onKeyUp(r) {
                !n.isOpen && e.onKeyUp && e.onKeyUp(r);
            }
        }),
        labelProps: {
            ...d,
            onClick: () => {
                T.focusFirst();
            }
        },
        fieldProps: {
            ...f,
            id: o,
            [ee]: 'presentation',
            'aria-describedby': b,
            value: n.value,
            onChange: n.setValue,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            granularity: e.granularity,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior,
            [Z.tL]: n,
            autoFocus: e.autoFocus,
            name: e.name
        },
        descriptionProps: p,
        errorMessageProps: h,
        buttonProps: {
            ...y,
            id: i,
            'aria-haspopup': 'dialog',
            'aria-label': s.format('calendar'),
            'aria-labelledby': `${i} ${m}`,
            'aria-describedby': b,
            'aria-expanded': n.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => n.setOpen(!0)
        },
        dialogProps: {
            id: a,
            'aria-labelledby': `${i} ${m}`
        },
        calendarProps: {
            autoFocus: !0,
            value: n.dateValue,
            onChange: n.setDateValue,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            defaultFocusedValue: n.dateValue ? void 0 : e.placeholderValue,
            isInvalid: n.isInvalid,
            errorMessage: 'function' == typeof e.errorMessage ? e.errorMessage(n.displayValidation) : e.errorMessage || n.displayValidation.validationErrors.join(' ')
        },
        isInvalid: l,
        validationErrors: u,
        validationDetails: c
    };
}
function ea() {
    let { locale: e } = (0, H.bU)(),
        n = (0, H.Kq)(Q(X), '@react-aria/datepicker');
    return (0, F.useMemo)(() => {
        try {
            return new Intl.DisplayNames(e, { type: 'dateTimeField' });
        } catch (r) {
            return new eo(e, n);
        }
    }, [e, n]);
}
class eo {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, n) {
        (this.locale = e), (this.dictionary = n);
    }
}
function es(e, n, r) {
    let i = (0, F.useRef)(''),
        { locale: a } = (0, H.bU)(),
        o = ea(),
        { ariaLabel: s, ariaLabelledBy: l, ariaDescribedBy: u, focusManager: c } = $.get(n),
        d = e.isPlaceholder ? '' : e.text,
        f = (0, F.useMemo)(() => n.dateFormatter.resolvedOptions(), [n.dateFormatter]),
        p = (0, H.aQ)({
            month: 'long',
            timeZone: f.timeZone
        }),
        h = (0, H.aQ)({
            hour: 'numeric',
            hour12: f.hour12,
            timeZone: f.timeZone
        });
    if ('month' !== e.type || e.isPlaceholder) 'hour' === e.type && !e.isPlaceholder && (d = h.format(n.dateValue));
    else {
        let e = p.format(n.dateValue);
        d = e !== d ? `${d} \u{2013} ${e}` : e;
    }
    let { spinButtonProps: _ } = (0, q.G)({
            value: e.value,
            textValue: d,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: n.isDisabled,
            isReadOnly: n.isReadOnly || !e.isEditable,
            isRequired: n.isRequired,
            onIncrement: () => {
                (i.current = ''), n.increment(e.type);
            },
            onDecrement: () => {
                (i.current = ''), n.decrement(e.type);
            },
            onIncrementPage: () => {
                (i.current = ''), n.incrementPage(e.type);
            },
            onDecrementPage: () => {
                (i.current = ''), n.decrementPage(e.type);
            },
            onIncrementToMax: () => {
                (i.current = ''), n.setSegment(e.type, e.maxValue);
            },
            onDecrementToMin: () => {
                (i.current = ''), n.setSegment(e.type, e.minValue);
            }
        }),
        m = (0, F.useMemo)(() => new z.d(a, { maximumFractionDigits: 0 }), [a]),
        g = () => {
            if (!m.isValidPartialNumber(e.text) || n.isReadOnly || e.isPlaceholder) 'dayPeriod' === e.type && n.clearSegment(e.type);
            else {
                let r = e.text.slice(0, -1),
                    a = m.parse(r);
                0 === r.length || 0 === a ? n.clearSegment(e.type) : n.setSegment(e.type, a), (i.current = r);
            }
        },
        E = (e) => {
            if (('a' === e.key && ((0, G.V5)() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey))
                switch (e.key) {
                    case 'Backspace':
                    case 'Delete':
                        e.preventDefault(), e.stopPropagation(), g();
                }
        },
        { startsWith: v } = (0, H.L0)({ sensitivity: 'base' }),
        y = (0, H.aQ)({
            hour: 'numeric',
            hour12: !0
        }),
        b = (0, F.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), y.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
        }, [y]),
        I = (0, F.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), y.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
        }, [y]),
        T = (0, H.aQ)({
            year: 'numeric',
            era: 'narrow',
            timeZone: 'UTC'
        }),
        S = (0, F.useMemo)(() => {
            if ('era' !== e.type) return [];
            let r = (0, W.Mw)(new K.aw(1, 1, 1), n.calendar),
                i = n.calendar.getEras().map((e) => {
                    let n = r
                        .set({
                            year: 1,
                            month: 1,
                            day: 1,
                            era: e
                        })
                        .toDate('UTC');
                    return {
                        era: e,
                        formatted: T.formatToParts(n).find((e) => 'era' === e.type).value
                    };
                }),
                a = el(i.map((e) => e.formatted));
            if (a) for (let e of i) e.formatted = e.formatted.slice(a);
            return i;
        }, [T, n.calendar, e.type]),
        A = (r) => {
            if (n.isDisabled || n.isReadOnly) return;
            let a = i.current + r;
            switch (e.type) {
                case 'dayPeriod':
                    if (v(b, r)) n.setSegment('dayPeriod', 0);
                    else if (v(I, r)) n.setSegment('dayPeriod', 12);
                    else break;
                    c.focusNext();
                    break;
                case 'era': {
                    let e = S.find((e) => v(e.formatted, r));
                    e && (n.setSegment('era', e.era), c.focusNext());
                    break;
                }
                case 'day':
                case 'hour':
                case 'minute':
                case 'second':
                case 'month':
                case 'year': {
                    if (!m.isValidPartialNumber(a)) return;
                    let o = m.parse(a),
                        s = o,
                        l = 0 === e.minValue;
                    if ('hour' === e.type && n.dateFormatter.resolvedOptions().hour12) {
                        switch (n.dateFormatter.resolvedOptions().hourCycle) {
                            case 'h11':
                                o > 11 && (s = m.parse(r));
                                break;
                            case 'h12':
                                (l = !1), o > 12 && (s = m.parse(r));
                        }
                        e.value >= 12 && o > 1 && (o += 12);
                    } else o > e.maxValue && (s = m.parse(r));
                    if (isNaN(o)) return;
                    let u = 0 !== s || l;
                    u && n.setSegment(e.type, s), Number(o + '0') > e.maxValue || a.length >= String(e.maxValue).length ? ((i.current = ''), u && c.focusNext()) : (i.current = a);
                }
            }
        },
        C = () => {
            (i.current = ''), (0, G.Gt)(r.current, { containingElement: (0, G.rP)(r.current) }), window.getSelection().collapse(r.current);
        },
        N = (0, F.useRef)('');
    (0, G.zX)(r, 'beforeinput', (i) => {
        switch ((i.preventDefault(), i.inputType)) {
            case 'deleteContentBackward':
            case 'deleteContentForward':
                m.isValidPartialNumber(e.text) && !n.isReadOnly && g();
                break;
            case 'insertCompositionText':
                (N.current = r.current.textContent), (r.current.textContent = r.current.textContent);
                break;
            default:
                null != i.data && A(i.data);
        }
    }),
        (0, G.zX)(r, 'input', (e) => {
            let { inputType: n, data: i } = e;
            if ('insertCompositionText' === n) (r.current.textContent = N.current), (v(b, i) || v(I, i)) && A(i);
        }),
        (0, G.bt)(() => {
            let e = r.current;
            return () => {
                document.activeElement === e && !c.focusPrevious() && c.focusNext();
            };
        }, [r, c]);
    let R =
        (0, G.gn)() || 'timeZoneName' === e.type
            ? {
                  role: 'textbox',
                  'aria-valuemax': null,
                  'aria-valuemin': null,
                  'aria-valuetext': null,
                  'aria-valuenow': null
              }
            : {};
    e !== (0, F.useMemo)(() => n.segments.find((e) => e.isEditable), [n.segments]) && !n.isInvalid && (u = void 0);
    let O = (0, G.Me)(),
        D = !n.isDisabled && !n.isReadOnly && e.isEditable,
        x = 'literal' === e.type ? '' : o.of(e.type),
        L = (0, G.bE)({
            'aria-label': `${x}${s ? `, ${s}` : ''}${l ? ', ' : ''}`,
            'aria-labelledby': l
        });
    return 'literal' === e.type
        ? { segmentProps: { 'aria-hidden': !0 } }
        : {
              segmentProps: (0, G.dG)(_, L, {
                  id: O,
                  ...R,
                  'aria-invalid': n.isInvalid ? 'true' : void 0,
                  'aria-describedby': u,
                  'aria-readonly': n.isReadOnly || !e.isEditable ? 'true' : void 0,
                  'data-placeholder': e.isPlaceholder || void 0,
                  contentEditable: D,
                  suppressContentEditableWarning: D,
                  spellCheck: D ? 'false' : void 0,
                  autoCapitalize: D ? 'off' : void 0,
                  autoCorrect: D ? 'off' : void 0,
                  [parseInt(F.version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: D ? 'next' : void 0,
                  inputMode: n.isDisabled || 'dayPeriod' === e.type || 'era' === e.type || !D ? void 0 : 'numeric',
                  tabIndex: n.isDisabled ? void 0 : 0,
                  onKeyDown: E,
                  onFocus: C,
                  style: { caretColor: 'transparent' },
                  onPointerDown(e) {
                      e.stopPropagation();
                  },
                  onMouseDown(e) {
                      e.stopPropagation();
                  }
              })
          };
}
function el(e) {
    e.sort();
    let n = e[0],
        r = e[e.length - 1];
    for (let e = 0; e < n.length; e++) if (n[e] !== r[e]) return e;
    return 0;
}
function eu(e, n, r) {
    var i, a;
    let o = (0, H.qb)(Q(X), '@react-aria/datepicker'),
        { isInvalid: s, validationErrors: l, validationDetails: u } = n.displayValidation,
        {
            labelProps: c,
            fieldProps: d,
            descriptionProps: f,
            errorMessageProps: p
        } = (0, V.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: s,
            errorMessage: e.errorMessage || l
        }),
        h = d['aria-labelledby'] || d.id,
        { locale: _ } = (0, H.bU)(),
        m = n.formatValue(_, { month: 'long' }),
        g = m
            ? o.format('selectedRangeDescription', {
                  startDate: m.start,
                  endDate: m.end
              })
            : '',
        E = (0, G.PK)(g),
        v = {
            'aria-label': o.format('startDate'),
            'aria-labelledby': h
        },
        y = {
            'aria-label': o.format('endDate'),
            'aria-labelledby': h
        },
        b = (0, G.Me)(),
        I = (0, G.Me)(),
        T = J(n, r),
        S = [E['aria-describedby'], d['aria-describedby']].filter(Boolean).join(' ') || void 0,
        A = (0, F.useMemo)(() => (0, B.E7)(r, { accept: (e) => e.id !== b }), [r, b]),
        C = {
            [et]: A,
            [ee]: 'presentation',
            'aria-describedby': S,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            granularity: e.granularity,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior
        },
        N = (0, G.zL)(e),
        { focusWithinProps: R } = (0, j.L_)({
            ...e,
            isDisabled: n.isOpen,
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange
        }),
        O = (0, F.useRef)(Z.PS),
        D = (0, F.useRef)(Z.PS);
    return {
        groupProps: (0, G.dG)(N, T, d, E, R, {
            role: 'group',
            'aria-disabled': e.isDisabled || null,
            'aria-describedby': S,
            onKeyDown(r) {
                !n.isOpen && e.onKeyDown && e.onKeyDown(r);
            },
            onKeyUp(r) {
                !n.isOpen && e.onKeyUp && e.onKeyUp(r);
            }
        }),
        labelProps: {
            ...c,
            onClick: () => {
                A.focusFirst();
            }
        },
        buttonProps: {
            ...E,
            id: b,
            'aria-haspopup': 'dialog',
            'aria-label': o.format('calendar'),
            'aria-labelledby': `${b} ${h}`,
            'aria-describedby': S,
            'aria-expanded': n.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => n.setOpen(!0)
        },
        dialogProps: {
            id: I,
            'aria-labelledby': `${b} ${h}`
        },
        startFieldProps: {
            ...v,
            ...C,
            value: null === (i = n.value) || void 0 === i ? void 0 : i.start,
            onChange: (e) => n.setDateTime('start', e),
            autoFocus: e.autoFocus,
            name: e.startName,
            [Z.tL]: {
                realtimeValidation: n.realtimeValidation,
                displayValidation: n.displayValidation,
                updateValidation(e) {
                    (O.current = e), n.updateValidation((0, Z.W0)(e, D.current));
                },
                resetValidation: n.resetValidation,
                commitValidation: n.commitValidation
            }
        },
        endFieldProps: {
            ...y,
            ...C,
            value: null === (a = n.value) || void 0 === a ? void 0 : a.end,
            onChange: (e) => n.setDateTime('end', e),
            name: e.endName,
            [Z.tL]: {
                realtimeValidation: n.realtimeValidation,
                displayValidation: n.displayValidation,
                updateValidation(e) {
                    (D.current = e), n.updateValidation((0, Z.W0)(O.current, e));
                },
                resetValidation: n.resetValidation,
                commitValidation: n.commitValidation
            }
        },
        descriptionProps: f,
        errorMessageProps: p,
        calendarProps: {
            autoFocus: !0,
            value: n.dateRange,
            onChange: n.setDateRange,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            allowsNonContiguousRanges: e.allowsNonContiguousRanges,
            defaultFocusedValue: n.dateRange ? void 0 : e.placeholderValue,
            isInvalid: n.isInvalid,
            errorMessage: 'function' == typeof e.errorMessage ? e.errorMessage(n.displayValidation) : e.errorMessage || n.displayValidation.validationErrors.join(' ')
        },
        isInvalid: s,
        validationErrors: l,
        validationDetails: u
    };
}
