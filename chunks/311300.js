r.d(n, {
    E: function () {
        return X;
    }
});
var i = r(513394),
    a = r(621963),
    s = r(828079),
    o = r(453833),
    l = r(262234),
    u = r(398436),
    c = r(202514),
    d = r(163059),
    f = r(192722),
    _ = r(740385),
    h = r(462378),
    p = r(768107),
    m = r(224290),
    g = r(851902),
    E = r(551885),
    v = r(321531),
    I = r(685995),
    T = r(478638),
    b = r(578163),
    y = r(595048),
    S = r(762120),
    A = r(670598),
    N = r(102315),
    C = r(948109),
    R = r(918525),
    O = r(602250),
    D = r(143880),
    L = r(500652),
    x = r(147341),
    w = r(689845),
    P = r(365498),
    M = r(949739),
    k = r(683384),
    U = r(373141),
    B = r(770003),
    G = r(726983),
    Z = r(46670),
    F = r(661763),
    V = r(192379),
    j = r(989103),
    H = r(766203),
    Y = r(969129),
    W = r(649859),
    K = r(184495),
    z = r(298397);
function q(e) {
    return e && e.__esModule ? e.default : e;
}
var Q = {};
function X(e, n) {
    var r, i;
    let { buttonRef: a, popoverRef: s, inputRef: o, listBoxRef: l, keyboardDelegate: u, shouldFocusWrap: c, isReadOnly: d, isDisabled: f } = e,
        _ = (0, W.qb)(q(Q), '@react-aria/combobox'),
        { menuTriggerProps: h, menuProps: p } = (0, K.u4)(
            {
                type: 'listbox',
                isDisabled: f || d
            },
            n,
            a
        );
    (0, Z.Oj).set(n, { id: p.id });
    let m = (0, V.useMemo)(() => u || new H.dp(n.collection, n.disabledKeys, l), [u, n.collection, n.disabledKeys, l]),
        { collectionProps: g } = (0, H.gq)({
            selectionManager: n.selectionManager,
            keyboardDelegate: m,
            disallowTypeAhead: !0,
            disallowEmptySelection: !0,
            shouldFocusWrap: c,
            ref: o,
            isVirtualized: !0
        }),
        E = (0, F.tv)(),
        v = (r) => {
            switch (r.key) {
                case 'Enter':
                case 'Tab':
                    if ((n.isOpen && 'Enter' === r.key && r.preventDefault(), n.isOpen && null != n.selectionManager.focusedKey && n.selectionManager.isLink(n.selectionManager.focusedKey))) {
                        if ('Enter' === r.key) {
                            let e = l.current.querySelector(`[data-key="${CSS.escape(n.selectionManager.focusedKey.toString())}"]`);
                            e instanceof HTMLAnchorElement && E.open(e, r);
                        }
                        n.close();
                    } else n.commit();
                    break;
                case 'Escape':
                    (null !== n.selectedKey || '' === n.inputValue || e.allowsCustomValue) && r.continuePropagation(), n.revert();
                    break;
                case 'ArrowDown':
                    n.open('first', 'manual');
                    break;
                case 'ArrowUp':
                    n.open('last', 'manual');
                    break;
                case 'ArrowLeft':
                case 'ArrowRight':
                    n.selectionManager.setFocusedKey(null);
            }
        },
        I = (r) => {
            var i;
            !(r.relatedTarget === (null == a ? void 0 : a.current) || (null === (i = s.current) || void 0 === i ? void 0 : i.contains(r.relatedTarget))) && (e.onBlur && e.onBlur(r), n.setFocused(!1));
        },
        T = (r) => {
            !n.isFocused && (e.onFocus && e.onFocus(r), n.setFocused(!0));
        },
        { isInvalid: b, validationErrors: y, validationDetails: S } = n.displayValidation,
        {
            labelProps: A,
            inputProps: N,
            descriptionProps: C,
            errorMessageProps: R
        } = (0, z.E)(
            {
                ...e,
                onChange: n.setInputValue,
                onKeyDown: d ? e.onKeyDown : (0, F.tS)(n.isOpen && g.onKeyDown, v, e.onKeyDown),
                onBlur: I,
                value: n.inputValue,
                onFocus: T,
                autoComplete: 'off',
                validate: void 0,
                [Y.tL]: n
            },
            o
        ),
        O = (e) => {
            'touch' === e.pointerType && (o.current.focus(), n.toggle(null, 'manual'));
        },
        D = (e) => {
            'touch' !== e.pointerType && (o.current.focus(), n.toggle('keyboard' === e.pointerType || 'virtual' === e.pointerType ? 'first' : null, 'manual'));
        },
        L = (0, F.bE)({
            id: h.id,
            'aria-label': _.format('buttonLabel'),
            'aria-labelledby': e['aria-labelledby'] || A.id
        }),
        x = (0, F.bE)({
            id: p.id,
            'aria-label': _.format('listboxLabel'),
            'aria-labelledby': e['aria-labelledby'] || A.id
        }),
        w = (0, V.useRef)(0),
        P = (e) => {
            if (f || d) return;
            if (e.timeStamp - w.current < 500) {
                e.preventDefault(), o.current.focus();
                return;
            }
            let r = e.target.getBoundingClientRect(),
                i = e.changedTouches[0],
                a = Math.ceil(r.left + 0.5 * r.width),
                s = Math.ceil(r.top + 0.5 * r.height);
            i.clientX === a && i.clientY === s && (e.preventDefault(), o.current.focus(), n.toggle(null, 'manual'), (w.current = e.timeStamp));
        },
        M = null != n.selectionManager.focusedKey && n.isOpen ? n.collection.getItem(n.selectionManager.focusedKey) : void 0,
        k = null !== (r = null == M ? void 0 : M.parentKey) && void 0 !== r ? r : null,
        U = null !== (i = n.selectionManager.focusedKey) && void 0 !== i ? i : null,
        X = (0, V.useRef)(k),
        J = (0, V.useRef)(U);
    (0, V.useEffect)(() => {
        if ((0, F.ad)() && null != M && U !== J.current) {
            let e = n.selectionManager.isSelected(U),
                r = null != k ? n.collection.getItem(k) : null,
                i = (null == r ? void 0 : r['aria-label']) || ('string' == typeof (null == r ? void 0 : r.rendered) ? r.rendered : '') || '',
                a = _.format('focusAnnouncement', {
                    isGroupChange: r && k !== X.current,
                    groupTitle: i,
                    groupCount: r ? [...(0, j._P)(r, n.collection)].length : 0,
                    optionText: M['aria-label'] || M.textValue || '',
                    isSelected: e
                });
            (0, B.xQ)(a);
        }
        (X.current = k), (J.current = U);
    });
    let $ = (0, j.is)(n.collection),
        ee = (0, V.useRef)($),
        et = (0, V.useRef)(n.isOpen);
    (0, V.useEffect)(() => {
        let e = n.isOpen !== et.current && (null == n.selectionManager.focusedKey || (0, F.ad)());
        if (n.isOpen && (e || $ !== ee.current)) {
            let e = _.format('countAnnouncement', { optionCount: $ });
            (0, B.xQ)(e);
        }
        (ee.current = $), (et.current = n.isOpen);
    });
    let en = (0, V.useRef)(n.selectedKey);
    return (
        (0, V.useEffect)(() => {
            if ((0, F.ad)() && n.isFocused && n.selectedItem && n.selectedKey !== en.current) {
                let e = n.selectedItem['aria-label'] || n.selectedItem.textValue || '',
                    r = _.format('selectedAnnouncement', { optionText: e });
                (0, B.xQ)(r);
            }
            en.current = n.selectedKey;
        }),
        (0, V.useEffect)(() => {
            if (n.isOpen) return (0, G.RP)([o.current, s.current]);
        }, [n.isOpen, o, s]),
        {
            labelProps: A,
            buttonProps: {
                ...h,
                ...L,
                excludeFromTabOrder: !0,
                onPress: O,
                onPressStart: D,
                isDisabled: f || d
            },
            inputProps: (0, F.dG)(N, {
                role: 'combobox',
                'aria-expanded': h['aria-expanded'],
                'aria-controls': n.isOpen ? p.id : void 0,
                'aria-autocomplete': 'list',
                'aria-activedescendant': M ? (0, Z.x3)(n, M.key) : void 0,
                onTouchEnd: P,
                autoCorrect: 'off',
                spellCheck: 'false'
            }),
            listBoxProps: (0, F.dG)(p, x, {
                autoFocus: n.focusStrategy,
                shouldUseVirtualFocus: !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                linkBehavior: 'selection'
            }),
            descriptionProps: C,
            errorMessageProps: R,
            isInvalid: b,
            validationErrors: y,
            validationDetails: S
        }
    );
}
Q = {
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
