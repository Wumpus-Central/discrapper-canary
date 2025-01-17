r.d(n, {
    C3: function () {
        return er;
    },
    IZ: function () {
        return en;
    },
    O7: function () {
        return eo;
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
    s = r(520872),
    o = r(42226),
    l = r(436337),
    u = r(768228),
    c = r(887881),
    d = r(335922),
    f = r(320168),
    _ = r(756249),
    h = r(161964),
    p = r(917849),
    m = r(413027),
    g = r(232342),
    E = r(223586),
    v = r(330718),
    I = r(199707),
    T = r(106941),
    b = r(414210),
    y = r(826768),
    S = r(447106),
    A = r(186699),
    N = r(897115),
    C = r(595537),
    R = r(95201),
    O = r(447306),
    D = r(679462),
    L = r(349398),
    x = r(608255),
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
        s = (n) => {
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
        o = () => {
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
                'mouse' === e.pointerType && o();
            },
            onPress(e) {
                'mouse' !== e.pointerType && o();
            }
        });
    return (0, G.dG)(l, { onKeyDown: s });
}
X = {
    'ar-AE': i.Z,
    'bg-BG': a.Z,
    'cs-CZ': s.Z,
    'da-DK': o.Z,
    'de-DE': l.Z,
    'el-GR': u.Z,
    'en-US': c.Z,
    'es-ES': d.Z,
    'et-EE': f.Z,
    'fi-FI': _.Z,
    'fr-FR': h.Z,
    'he-IL': p.Z,
    'hr-HR': m.Z,
    'hu-HU': g.Z,
    'it-IT': E.Z,
    'ja-JP': v.Z,
    'ko-KR': I.Z,
    'lt-LT': T.Z,
    'lv-LV': b.Z,
    'nb-NO': y.Z,
    'nl-NL': S.Z,
    'pl-PL': A.Z,
    'pt-BR': N.Z,
    'pt-PT': C.Z,
    'ro-RO': R.Z,
    'ru-RU': O.Z,
    'sk-SK': D.Z,
    'sl-SI': L.Z,
    'sr-SP': x.Z,
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
    let { isInvalid: s, validationErrors: o, validationDetails: l } = n.displayValidation,
        {
            labelProps: u,
            fieldProps: c,
            descriptionProps: d,
            errorMessageProps: f
        } = (0, V.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: s,
            errorMessage: e.errorMessage || o
        }),
        _ = (0, F.useRef)(null),
        { focusWithinProps: h } = (0, j.L_)({
            ...e,
            onFocusWithin(r) {
                var i;
                (_.current = n.value), null === (i = e.onFocus) || void 0 === i || i.call(e, r);
            },
            onBlurWithin: (r) => {
                var i;
                n.confirmPlaceholder(), n.value !== _.current && n.commitValidation(), null === (i = e.onBlur) || void 0 === i || i.call(e, r);
            },
            onFocusWithinChange: e.onFocusChange
        }),
        p = (0, H.qb)(Q(X), '@react-aria/datepicker'),
        m = 'hour' === n.maxGranularity ? 'selectedTimeDescription' : 'selectedDateDescription',
        g = 'hour' === n.maxGranularity ? 'time' : 'date',
        E = n.value ? p.format(m, { [g]: n.formatValue({ month: 'long' }) }) : '',
        v = (0, G.PK)(E),
        I = 'presentation' === e[ee] ? c['aria-describedby'] : [v['aria-describedby'], c['aria-describedby']].filter(Boolean).join(' ') || void 0,
        T = e[et],
        b = (0, F.useMemo)(() => T || (0, B.E7)(r), [T, r]),
        y = J(n, r, 'presentation' === e[ee]);
    $.set(n, {
        ariaLabel: e['aria-label'],
        ariaLabelledBy: [u.id, e['aria-labelledby']].filter(Boolean).join(' ') || void 0,
        ariaDescribedBy: I,
        focusManager: b
    });
    let S = (0, F.useRef)(e.autoFocus);
    (a =
        'presentation' === e[ee]
            ? { role: 'presentation' }
            : (0, G.dG)(c, {
                  role: 'group',
                  'aria-disabled': e.isDisabled || void 0,
                  'aria-describedby': I
              })),
        (0, F.useEffect)(() => {
            S.current && b.focusFirst(), (S.current = !1);
        }, [b]),
        (0, G.y$)(e.inputRef, n.value, n.setValue),
        (0, Y.Q)(
            {
                ...e,
                focus() {
                    b.focusFirst();
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
    let N = (0, G.zL)(e);
    return {
        labelProps: {
            ...u,
            onClick: () => {
                b.focusFirst();
            }
        },
        fieldProps: (0, G.dG)(N, a, y, h, {
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
        isInvalid: s,
        validationErrors: o,
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
        s = (0, G.Me)(),
        o = (0, H.qb)(Q(X), '@react-aria/datepicker'),
        { isInvalid: l, validationErrors: u, validationDetails: c } = n.displayValidation,
        {
            labelProps: d,
            fieldProps: f,
            descriptionProps: _,
            errorMessageProps: h
        } = (0, V.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: l,
            errorMessage: e.errorMessage || u
        }),
        p = J(n, r),
        m = f['aria-labelledby'] || f.id,
        { locale: g } = (0, H.bU)(),
        E = n.formatValue(g, { month: 'long' }),
        v = E ? o.format('selectedDateDescription', { date: E }) : '',
        I = (0, G.PK)(v),
        T = [I['aria-describedby'], f['aria-describedby']].filter(Boolean).join(' ') || void 0,
        b = (0, G.zL)(e),
        y = (0, F.useMemo)(() => (0, B.E7)(r), [r]),
        { focusWithinProps: S } = (0, j.L_)({
            ...e,
            isDisabled: n.isOpen,
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange
        });
    return {
        groupProps: (0, G.dG)(b, p, f, I, S, {
            role: 'group',
            'aria-disabled': e.isDisabled || null,
            'aria-labelledby': m,
            'aria-describedby': T,
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
                y.focusFirst();
            }
        },
        fieldProps: {
            ...f,
            id: s,
            [ee]: 'presentation',
            'aria-describedby': T,
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
        descriptionProps: _,
        errorMessageProps: h,
        buttonProps: {
            ...I,
            id: i,
            'aria-haspopup': 'dialog',
            'aria-label': o.format('calendar'),
            'aria-labelledby': `${i} ${m}`,
            'aria-describedby': T,
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
            return new es(e, n);
        }
    }, [e, n]);
}
class es {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, n) {
        (this.locale = e), (this.dictionary = n);
    }
}
function eo(e, n, r) {
    let i = (0, F.useRef)(''),
        { locale: a } = (0, H.bU)(),
        s = ea(),
        { ariaLabel: o, ariaLabelledBy: l, ariaDescribedBy: u, focusManager: c } = $.get(n),
        d = e.isPlaceholder ? '' : e.text,
        f = (0, F.useMemo)(() => n.dateFormatter.resolvedOptions(), [n.dateFormatter]),
        _ = (0, H.aQ)({
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
        let e = _.format(n.dateValue);
        d = e !== d ? `${d} \u{2013} ${e}` : e;
    }
    let { spinButtonProps: p } = (0, q.G)({
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
        I = (0, H.aQ)({
            hour: 'numeric',
            hour12: !0
        }),
        T = (0, F.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), I.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
        }, [I]),
        b = (0, F.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), I.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
        }, [I]),
        y = (0, H.aQ)({
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
                        formatted: y.formatToParts(n).find((e) => 'era' === e.type).value
                    };
                }),
                a = el(i.map((e) => e.formatted));
            if (a) for (let e of i) e.formatted = e.formatted.slice(a);
            return i;
        }, [y, n.calendar, e.type]),
        A = (r) => {
            if (n.isDisabled || n.isReadOnly) return;
            let a = i.current + r;
            switch (e.type) {
                case 'dayPeriod':
                    if (v(T, r)) n.setSegment('dayPeriod', 0);
                    else if (v(b, r)) n.setSegment('dayPeriod', 12);
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
                    let s = m.parse(a),
                        o = s,
                        l = 0 === e.minValue;
                    if ('hour' === e.type && n.dateFormatter.resolvedOptions().hour12) {
                        switch (n.dateFormatter.resolvedOptions().hourCycle) {
                            case 'h11':
                                s > 11 && (o = m.parse(r));
                                break;
                            case 'h12':
                                (l = !1), s > 12 && (o = m.parse(r));
                        }
                        e.value >= 12 && s > 1 && (s += 12);
                    } else s > e.maxValue && (o = m.parse(r));
                    if (isNaN(s)) return;
                    let u = 0 !== o || l;
                    u && n.setSegment(e.type, o), Number(s + '0') > e.maxValue || a.length >= String(e.maxValue).length ? ((i.current = ''), u && c.focusNext()) : (i.current = a);
                }
            }
        },
        N = () => {
            (i.current = ''), (0, G.Gt)(r.current, { containingElement: (0, G.rP)(r.current) }), window.getSelection().collapse(r.current);
        },
        C = (0, F.useRef)('');
    (0, G.zX)(r, 'beforeinput', (i) => {
        switch ((i.preventDefault(), i.inputType)) {
            case 'deleteContentBackward':
            case 'deleteContentForward':
                m.isValidPartialNumber(e.text) && !n.isReadOnly && g();
                break;
            case 'insertCompositionText':
                (C.current = r.current.textContent), (r.current.textContent = r.current.textContent);
                break;
            default:
                null != i.data && A(i.data);
        }
    }),
        (0, G.zX)(r, 'input', (e) => {
            let { inputType: n, data: i } = e;
            if ('insertCompositionText' === n) (r.current.textContent = C.current), (v(T, i) || v(b, i)) && A(i);
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
        L = 'literal' === e.type ? '' : s.of(e.type),
        x = (0, G.bE)({
            'aria-label': `${L}${o ? `, ${o}` : ''}${l ? ', ' : ''}`,
            'aria-labelledby': l
        });
    return 'literal' === e.type
        ? { segmentProps: { 'aria-hidden': !0 } }
        : {
              segmentProps: (0, G.dG)(p, x, {
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
                  onFocus: N,
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
    let s = (0, H.qb)(Q(X), '@react-aria/datepicker'),
        { isInvalid: o, validationErrors: l, validationDetails: u } = n.displayValidation,
        {
            labelProps: c,
            fieldProps: d,
            descriptionProps: f,
            errorMessageProps: _
        } = (0, V.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: o,
            errorMessage: e.errorMessage || l
        }),
        h = d['aria-labelledby'] || d.id,
        { locale: p } = (0, H.bU)(),
        m = n.formatValue(p, { month: 'long' }),
        g = m
            ? s.format('selectedRangeDescription', {
                  startDate: m.start,
                  endDate: m.end
              })
            : '',
        E = (0, G.PK)(g),
        v = {
            'aria-label': s.format('startDate'),
            'aria-labelledby': h
        },
        I = {
            'aria-label': s.format('endDate'),
            'aria-labelledby': h
        },
        T = (0, G.Me)(),
        b = (0, G.Me)(),
        y = J(n, r),
        S = [E['aria-describedby'], d['aria-describedby']].filter(Boolean).join(' ') || void 0,
        A = (0, F.useMemo)(() => (0, B.E7)(r, { accept: (e) => e.id !== T }), [r, T]),
        N = {
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
        C = (0, G.zL)(e),
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
        groupProps: (0, G.dG)(C, y, d, E, R, {
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
            id: T,
            'aria-haspopup': 'dialog',
            'aria-label': s.format('calendar'),
            'aria-labelledby': `${T} ${h}`,
            'aria-describedby': S,
            'aria-expanded': n.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => n.setOpen(!0)
        },
        dialogProps: {
            id: b,
            'aria-labelledby': `${T} ${h}`
        },
        startFieldProps: {
            ...v,
            ...N,
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
            ...I,
            ...N,
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
        errorMessageProps: _,
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
        isInvalid: o,
        validationErrors: l,
        validationDetails: u
    };
}
