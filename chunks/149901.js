r.d(n, {
    I: function () {
        return K;
    }
});
var i = r(443704),
    a = r(44730),
    s = r(240257),
    o = r(187700),
    l = r(89223),
    u = r(306063),
    c = r(741546),
    d = r(364762),
    f = r(995031),
    _ = r(981752),
    h = r(805711),
    p = r(588290),
    m = r(414842),
    g = r(565894),
    E = r(819931),
    v = r(324600),
    I = r(112741),
    T = r(421607),
    b = r(595938),
    y = r(154072),
    S = r(999209),
    A = r(374705),
    N = r(868055),
    C = r(443507),
    R = r(7439),
    O = r(466071),
    D = r(703788),
    L = r(710879),
    x = r(713933),
    w = r(445879),
    P = r(114946),
    M = r(434054),
    k = r(40889),
    U = r(686949),
    B = r(661763),
    G = r(192379),
    Z = r(969129),
    F = r(921336),
    V = r(298397),
    j = r(649859),
    H = r(98881);
function Y(e) {
    return e && e.__esModule ? e.default : e;
}
var W = {};
function K(e, n, r) {
    let i,
        { id: a, decrementAriaLabel: s, incrementAriaLabel: o, isDisabled: l, isReadOnly: u, isRequired: c, minValue: d, maxValue: f, autoFocus: _, label: h, formatOptions: p, onBlur: m = () => {}, onFocus: g, onFocusChange: E, onKeyDown: v, onKeyUp: I, description: T, errorMessage: b, ...y } = e,
        { increment: S, incrementToMax: A, decrement: N, decrementToMin: C, numberValue: R, inputValue: O, commit: D, commitValidation: L } = n,
        x = (0, j.qb)(Y(W), '@react-aria/numberfield'),
        w = (0, B.Me)(a),
        { focusProps: P } = (0, F.KK)({
            onBlur() {
                D();
            }
        }),
        M = (0, j.Ux)(p),
        k = (0, G.useMemo)(() => M.resolvedOptions(), [M]),
        U = (0, j.Ux)({
            ...p,
            currencySign: void 0
        }),
        K = (0, G.useMemo)(() => (isNaN(R) ? '' : U.format(R)), [U, R]),
        {
            spinButtonProps: z,
            incrementButtonProps: q,
            decrementButtonProps: Q
        } = (0, H.G)({
            isDisabled: l,
            isReadOnly: u,
            isRequired: c,
            maxValue: f,
            minValue: d,
            onIncrement: S,
            onIncrementToMax: A,
            onDecrement: N,
            onDecrementToMin: C,
            value: R,
            textValue: K
        }),
        [X, J] = (0, G.useState)(!1),
        { focusWithinProps: $ } = (0, F.L_)({
            isDisabled: l,
            onFocusWithinChange: J
        }),
        ee = (0, G.useCallback)(
            (e) => {
                !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) && (e.deltaY > 0 ? S() : e.deltaY < 0 && N());
            },
            [N, S]
        ),
        et = l || u || !X;
    (0, F.y0)(
        {
            onScroll: ee,
            isDisabled: et
        },
        r
    );
    let en = k.maximumFractionDigits > 0,
        er = isNaN(n.minValue) || n.minValue < 0,
        ei = 'numeric';
    (0, B.IN)() ? (er ? (ei = 'text') : en && (ei = 'decimal')) : (0, B.Dt)() && (er ? (ei = 'numeric') : en && (ei = 'decimal'));
    let ea = (e) => {
            n.validate(e) && n.setInputValue(e);
        },
        es = (0, B.zL)(e),
        eo = (0, G.useCallback)(
            (e) => {
                'Enter' === e.key ? (D(), L()) : e.continuePropagation();
            },
            [D, L]
        ),
        { isInvalid: el, validationErrors: eu, validationDetails: ec } = n.displayValidation,
        {
            labelProps: ed,
            inputProps: ef,
            descriptionProps: e_,
            errorMessageProps: eh
        } = (0, V.h)(
            {
                ...y,
                ...es,
                name: void 0,
                label: h,
                autoFocus: _,
                isDisabled: l,
                isReadOnly: u,
                isRequired: c,
                validate: void 0,
                [Z.tL]: n,
                value: O,
                defaultValue: void 0,
                autoComplete: 'off',
                'aria-label': e['aria-label'] || null,
                'aria-labelledby': e['aria-labelledby'] || null,
                id: w,
                type: 'text',
                inputMode: ei,
                onChange: ea,
                onBlur: m,
                onFocus: g,
                onFocusChange: E,
                onKeyDown: (0, G.useMemo)(() => (0, B.tS)(eo, v), [eo, v]),
                onKeyUp: I,
                description: T,
                errorMessage: b
            },
            n,
            r
        );
    (0, B.y$)(r, n.numberValue, n.setNumberValue);
    let ep = (0, B.dG)(z, P, ef, {
        role: null,
        'aria-roledescription': (0, B.gn)() ? null : x.format('numberField'),
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
        'aria-valuetext': null,
        autoCorrect: 'off',
        spellCheck: 'false'
    });
    'native' === e.validationBehavior && (ep['aria-required'] = void 0);
    let em = (e) => {
            document.activeElement !== r.current && ('mouse' === e.pointerType ? r.current.focus() : e.target.focus());
        },
        eg = e['aria-label'] || ('string' == typeof e.label ? e.label : '');
    !eg && (i = null != e.label ? ed.id : e['aria-labelledby']);
    let eE = (0, B.Me)(),
        ev = (0, B.Me)(),
        eI = (0, B.dG)(q, {
            'aria-label': o || x.format('increase', { fieldLabel: eg }).trim(),
            id: i && !o ? eE : null,
            'aria-labelledby': i && !o ? `${eE} ${i}` : null,
            'aria-controls': w,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !n.canIncrement,
            onPressStart: em
        }),
        eT = (0, B.dG)(Q, {
            'aria-label': s || x.format('decrease', { fieldLabel: eg }).trim(),
            id: i && !s ? ev : null,
            'aria-labelledby': i && !s ? `${ev} ${i}` : null,
            'aria-controls': w,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !n.canDecrement,
            onPressStart: em
        });
    return {
        groupProps: {
            ...$,
            role: 'group',
            'aria-disabled': l,
            'aria-invalid': el ? 'true' : void 0
        },
        labelProps: ed,
        inputProps: ep,
        incrementButtonProps: eI,
        decrementButtonProps: eT,
        errorMessageProps: eh,
        descriptionProps: e_,
        isInvalid: el,
        validationErrors: eu,
        validationDetails: ec
    };
}
W = {
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
