r.d(n, {
    E: function () {
        return X;
    }
});
var i = r(513394),
    a = r(621963),
    o = r(828079),
    s = r(453833),
    l = r(262234),
    u = r(398436),
    c = r(202514),
    d = r(163059),
    f = r(192722),
    p = r(740385),
    h = r(462378),
    _ = r(768107),
    m = r(224290),
    g = r(851902),
    E = r(551885),
    v = r(321531),
    y = r(685995),
    b = r(478638),
    I = r(578163),
    T = r(595048),
    S = r(762120),
    A = r(670598),
    C = r(102315),
    N = r(948109),
    R = r(918525),
    O = r(602250),
    D = r(143880),
    x = r(500652),
    L = r(147341),
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
    let { buttonRef: a, popoverRef: o, inputRef: s, listBoxRef: l, keyboardDelegate: u, shouldFocusWrap: c, isReadOnly: d, isDisabled: f } = e,
        p = (0, W.qb)(q(Q), '@react-aria/combobox'),
        { menuTriggerProps: h, menuProps: _ } = (0, K.u4)(
            {
                type: 'listbox',
                isDisabled: f || d
            },
            n,
            a
        );
    (0, Z.Oj).set(n, { id: _.id });
    let m = (0, V.useMemo)(() => u || new H.dp(n.collection, n.disabledKeys, l), [u, n.collection, n.disabledKeys, l]),
        { collectionProps: g } = (0, H.gq)({
            selectionManager: n.selectionManager,
            keyboardDelegate: m,
            disallowTypeAhead: !0,
            disallowEmptySelection: !0,
            shouldFocusWrap: c,
            ref: s,
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
        y = (r) => {
            var i;
            !(r.relatedTarget === (null == a ? void 0 : a.current) || (null === (i = o.current) || void 0 === i ? void 0 : i.contains(r.relatedTarget))) && (e.onBlur && e.onBlur(r), n.setFocused(!1));
        },
        b = (r) => {
            !n.isFocused && (e.onFocus && e.onFocus(r), n.setFocused(!0));
        },
        { isInvalid: I, validationErrors: T, validationDetails: S } = n.displayValidation,
        {
            labelProps: A,
            inputProps: C,
            descriptionProps: N,
            errorMessageProps: R
        } = (0, z.E)(
            {
                ...e,
                onChange: n.setInputValue,
                onKeyDown: d ? e.onKeyDown : (0, F.tS)(n.isOpen && g.onKeyDown, v, e.onKeyDown),
                onBlur: y,
                value: n.inputValue,
                onFocus: b,
                autoComplete: 'off',
                validate: void 0,
                [Y.tL]: n
            },
            s
        ),
        O = (e) => {
            'touch' === e.pointerType && (s.current.focus(), n.toggle(null, 'manual'));
        },
        D = (e) => {
            'touch' !== e.pointerType && (s.current.focus(), n.toggle('keyboard' === e.pointerType || 'virtual' === e.pointerType ? 'first' : null, 'manual'));
        },
        x = (0, F.bE)({
            id: h.id,
            'aria-label': p.format('buttonLabel'),
            'aria-labelledby': e['aria-labelledby'] || A.id
        }),
        L = (0, F.bE)({
            id: _.id,
            'aria-label': p.format('listboxLabel'),
            'aria-labelledby': e['aria-labelledby'] || A.id
        }),
        w = (0, V.useRef)(0),
        P = (e) => {
            if (f || d) return;
            if (e.timeStamp - w.current < 500) {
                e.preventDefault(), s.current.focus();
                return;
            }
            let r = e.target.getBoundingClientRect(),
                i = e.changedTouches[0],
                a = Math.ceil(r.left + 0.5 * r.width),
                o = Math.ceil(r.top + 0.5 * r.height);
            i.clientX === a && i.clientY === o && (e.preventDefault(), s.current.focus(), n.toggle(null, 'manual'), (w.current = e.timeStamp));
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
                a = p.format('focusAnnouncement', {
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
            let e = p.format('countAnnouncement', { optionCount: $ });
            (0, B.xQ)(e);
        }
        (ee.current = $), (et.current = n.isOpen);
    });
    let en = (0, V.useRef)(n.selectedKey);
    return (
        (0, V.useEffect)(() => {
            if ((0, F.ad)() && n.isFocused && n.selectedItem && n.selectedKey !== en.current) {
                let e = n.selectedItem['aria-label'] || n.selectedItem.textValue || '',
                    r = p.format('selectedAnnouncement', { optionText: e });
                (0, B.xQ)(r);
            }
            en.current = n.selectedKey;
        }),
        (0, V.useEffect)(() => {
            if (n.isOpen) return (0, G.RP)([s.current, o.current]);
        }, [n.isOpen, s, o]),
        {
            labelProps: A,
            buttonProps: {
                ...h,
                ...x,
                excludeFromTabOrder: !0,
                onPress: O,
                onPressStart: D,
                isDisabled: f || d
            },
            inputProps: (0, F.dG)(C, {
                role: 'combobox',
                'aria-expanded': h['aria-expanded'],
                'aria-controls': n.isOpen ? _.id : void 0,
                'aria-autocomplete': 'list',
                'aria-activedescendant': M ? (0, Z.x3)(n, M.key) : void 0,
                onTouchEnd: P,
                autoCorrect: 'off',
                spellCheck: 'false'
            }),
            listBoxProps: (0, F.dG)(_, L, {
                autoFocus: n.focusStrategy,
                shouldUseVirtualFocus: !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                linkBehavior: 'selection'
            }),
            descriptionProps: N,
            errorMessageProps: R,
            isInvalid: I,
            validationErrors: T,
            validationDetails: S
        }
    );
}
Q = {
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
