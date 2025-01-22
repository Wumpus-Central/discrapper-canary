r.d(n, {
    H9: function () {
        return z;
    },
    iX: function () {
        return q;
    },
    u4: function () {
        return W;
    },
    x7: function () {
        return Q;
    }
});
var i = r(677846),
    a = r(576677),
    o = r(995453),
    s = r(338027),
    l = r(260805),
    u = r(63719),
    c = r(767679),
    d = r(500995),
    f = r(422936),
    p = r(544344),
    h = r(90468),
    _ = r(176007),
    m = r(399174),
    g = r(517280),
    E = r(540099),
    v = r(63466),
    y = r(424327),
    b = r(963547),
    I = r(608382),
    T = r(632034),
    S = r(453361),
    A = r(694214),
    C = r(724339),
    N = r(761521),
    R = r(10893),
    O = r(2728),
    D = r(42090),
    x = r(870478),
    L = r(632174),
    w = r(4598),
    P = r(367788),
    M = r(746194),
    k = r(654237),
    U = r(319719),
    B = r(661763),
    G = r(649859),
    Z = r(921336),
    F = r(726983),
    V = r(766203),
    j = r(989103);
function H(e) {
    return e && e.__esModule ? e.default : e;
}
r(192379);
var Y = {};
function W(e, n, r) {
    let { type: i = 'menu', isDisabled: a, trigger: o = 'press' } = e,
        s = (0, B.Me)(),
        { triggerProps: l, overlayProps: u } = (0, F.IB)({ type: i }, n, r),
        c = (e) => {
            if (!a) {
                if (('longPress' !== o || e.altKey) && r && r.current)
                    switch (e.key) {
                        case 'Enter':
                        case ' ':
                            if ('longPress' === o) return;
                        case 'ArrowDown':
                            !('continuePropagation' in e) && e.stopPropagation(), e.preventDefault(), n.toggle('first');
                            break;
                        case 'ArrowUp':
                            !('continuePropagation' in e) && e.stopPropagation(), e.preventDefault(), n.toggle('last');
                            break;
                        default:
                            'continuePropagation' in e && e.continuePropagation();
                    }
            }
        },
        d = (0, G.qb)(H(Y), '@react-aria/menu'),
        { longPressProps: f } = (0, Z.TA)({
            isDisabled: a || 'longPress' !== o,
            accessibilityDescription: d.format('longPressMessage'),
            onLongPressStart() {
                n.close();
            },
            onLongPress() {
                n.open('first');
            }
        }),
        p = {
            onPressStart(e) {
                'touch' !== e.pointerType && 'keyboard' !== e.pointerType && !a && n.toggle('virtual' === e.pointerType ? 'first' : null);
            },
            onPress(e) {
                'touch' === e.pointerType && !a && n.toggle();
            }
        };
    return (
        delete l.onPress,
        {
            menuTriggerProps: {
                ...l,
                ...('press' === o ? p : f),
                id: s,
                onKeyDown: c
            },
            menuProps: {
                ...u,
                'aria-labelledby': s,
                autoFocus: n.focusStrategy || !0,
                onClose: n.close
            }
        }
    );
}
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
let K = new WeakMap();
function z(e, n, r) {
    let { shouldFocusWrap: i = !0, onKeyDown: a, onKeyUp: o, ...s } = e;
    !e['aria-label'] && !e['aria-labelledby'] && console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let l = (0, B.zL)(e, { labelable: !0 }),
        { listProps: u } = (0, V._t)({
            ...s,
            ref: r,
            selectionManager: n.selectionManager,
            collection: n.collection,
            disabledKeys: n.disabledKeys,
            shouldFocusWrap: i,
            linkBehavior: 'override'
        });
    return (
        K.set(n, {
            onClose: e.onClose,
            onAction: e.onAction
        }),
        {
            menuProps: (0, B.dG)(
                l,
                {
                    onKeyDown: a,
                    onKeyUp: o
                },
                {
                    role: 'menu',
                    ...u,
                    onKeyDown: (e) => {
                        'Escape' !== e.key && u.onKeyDown(e);
                    }
                }
            )
        }
    );
}
function q(e, n, r) {
    var i, a, o;
    let { key: s, closeOnSelect: l, isVirtualized: u, 'aria-haspopup': c, onPressStart: d, onPressUp: f, onPress: p, onPressChange: h, onPressEnd: _, onHoverStart: m, onHoverChange: g, onHoverEnd: E, onKeyDown: v, onKeyUp: y, onFocus: b, onFocusChange: I, onBlur: T } = e,
        S = !!c,
        A = null !== (a = e.isDisabled) && void 0 !== a ? a : n.disabledKeys.has(s),
        C = null !== (o = e.isSelected) && void 0 !== o ? o : n.selectionManager.isSelected(s),
        N = K.get(n),
        R = e.onClose || N.onClose,
        O = S ? () => {} : e.onAction || N.onAction,
        D = (0, B.tv)(),
        x = (e) => {
            O && O(s), e.target instanceof HTMLAnchorElement && D.open(e.target, e);
        },
        L = 'menuitem';
    !S && ('single' === n.selectionManager.selectionMode ? (L = 'menuitemradio') : 'multiple' === n.selectionManager.selectionMode && (L = 'menuitemcheckbox'));
    let w = (0, B.mp)(),
        P = (0, B.mp)(),
        M = (0, B.mp)(),
        k = {
            'aria-disabled': A || void 0,
            role: L,
            'aria-label': e['aria-label'],
            'aria-labelledby': w,
            'aria-describedby': [P, M].filter(Boolean).join(' ') || void 0,
            'aria-controls': e['aria-controls'],
            'aria-haspopup': c,
            'aria-expanded': e['aria-expanded']
        };
    'none' !== n.selectionManager.selectionMode && !S && (k['aria-checked'] = C);
    let U = n.collection.getItem(s);
    u && ((k['aria-posinset'] = null == U ? void 0 : U.index), (k['aria-setsize'] = (0, j.is)(n.collection)));
    let G = (e) => {
            'keyboard' === e.pointerType && x(e), null == d || d(e);
        },
        F = (e) => {
            'keyboard' !== e.pointerType && (x(e), !S && R && (null != l ? l : 'multiple' !== n.selectionManager.selectionMode || n.selectionManager.isLink(s)) && R()), null == f || f(e);
        },
        { itemProps: H, isFocused: Y } = (0, V.Cs)({
            selectionManager: n.selectionManager,
            key: s,
            ref: r,
            shouldSelectOnPressUp: !0,
            allowsDifferentPressOrigin: !0,
            linkBehavior: 'none'
        }),
        { pressProps: W, isPressed: z } = (0, Z.r7)({
            onPressStart: G,
            onPress: p,
            onPressUp: F,
            onPressChange: h,
            onPressEnd: _,
            isDisabled: A
        }),
        { hoverProps: q } = (0, Z.XI)({
            isDisabled: A,
            onHoverStart(e) {
                !(0, Z.E)() && (n.selectionManager.setFocused(!0), n.selectionManager.setFocusedKey(s)), null == m || m(e);
            },
            onHoverChange: g,
            onHoverEnd: E
        }),
        { keyboardProps: Q } = (0, Z.v5)({
            onKeyDown: (e) => {
                if (e.repeat) {
                    e.continuePropagation();
                    return;
                }
                switch (e.key) {
                    case ' ':
                        !A && 'none' === n.selectionManager.selectionMode && !S && !1 !== l && R && R();
                        break;
                    case 'Enter':
                        !A && !1 !== l && !S && R && R();
                        break;
                    default:
                        !S && e.continuePropagation(), null == v || v(e);
                }
            },
            onKeyUp: y
        }),
        { focusProps: X } = (0, Z.KK)({
            onBlur: T,
            onFocus: b,
            onFocusChange: I
        }),
        J = (0, B.zL)(U.props, { isLink: !!(null == U ? void 0 : null === (i = U.props) || void 0 === i ? void 0 : i.href) });
    return (
        delete J.id,
        {
            menuItemProps: {
                ...k,
                ...(0, B.dG)(J, S ? { onFocus: H.onFocus } : H, W, q, Q, X),
                tabIndex: null != H.tabIndex ? -1 : void 0
            },
            labelProps: { id: w },
            descriptionProps: { id: P },
            keyboardShortcutProps: { id: M },
            isFocused: Y,
            isSelected: C,
            isPressed: z,
            isDisabled: A
        }
    );
}
function Q(e) {
    let { heading: n, 'aria-label': r } = e,
        i = (0, B.Me)();
    return {
        itemProps: { role: 'presentation' },
        headingProps: n
            ? {
                  id: i,
                  role: 'presentation'
              }
            : {},
        groupProps: {
            role: 'group',
            'aria-label': r,
            'aria-labelledby': n ? i : void 0
        }
    };
}
let X = 2,
    J = 50,
    $ = 1000,
    ee = null;
function et(e) {
    let { menuRef: n, submenuRef: r, isOpen: i, isDisabled: a } = e,
        o = $1Hnir$useRef(),
        s = $1Hnir$useRef(),
        l = $1Hnir$useRef(0),
        u = $1Hnir$useRef(),
        c = $1Hnir$useRef(),
        d = $1Hnir$useRef(),
        f = $1Hnir$useRef(2),
        [p, h] = $1Hnir$useState(!1),
        _ = () => {
            r.current && ((s.current = r.current.getBoundingClientRect()), (d.current = void 0));
        };
    $1Hnir$useResizeObserver({
        ref: r,
        onResize: _
    });
    let m = () => {
            h(!1), (f.current = X);
        },
        g = $1Hnir$useInteractionModality();
    $1Hnir$useEffect(() => {
        p && n.current ? (n.current.style.pointerEvents = 'none') : (n.current.style.pointerEvents = '');
    }, [n, p]),
        $1Hnir$useEffect(() => {
            let e = r.current,
                p = n.current;
            if (a || !e || !i || 'pointer' !== g) {
                m();
                return;
            }
            s.current = e.getBoundingClientRect();
            let _ = (e) => {
                if ('touch' === e.pointerType || 'pen' === e.pointerType) return;
                let n = Date.now();
                if (n - l.current < J) return;
                clearTimeout(u.current), clearTimeout(c.current);
                let { clientX: r, clientY: i } = e;
                if (!o.current) {
                    o.current = {
                        x: r,
                        y: i
                    };
                    return;
                }
                if (!s.current) return;
                if ((!d.current && (d.current = r > s.current.right ? 'left' : 'right'), r < p.getBoundingClientRect().left || r > p.getBoundingClientRect().right || i < p.getBoundingClientRect().top || i > p.getBoundingClientRect().bottom)) {
                    m();
                    return;
                }
                let a = o.current.x,
                    _ = o.current.y,
                    g = 'right' === d.current ? s.current.left - a : a - s.current.right,
                    E = Math.atan2(_ - s.current.top, g) + ee,
                    v = Math.atan2(_ - s.current.bottom, g) - ee,
                    y = Math.atan2(_ - i, 'left' === d.current ? -(r - a) : r - a),
                    b = y < E && y > v;
                (f.current = b ? Math.min(f.current + 1, X) : Math.max(f.current - 1, 0)),
                    f.current >= X ? h(!0) : h(!1),
                    (l.current = n),
                    (o.current = {
                        x: r,
                        y: i
                    }),
                    b &&
                        (u.current = setTimeout(() => {
                            m(),
                                (c.current = setTimeout(() => {
                                    let e = document.elementFromPoint(r, i);
                                    e &&
                                        p.contains(e) &&
                                        e.dispatchEvent(
                                            new PointerEvent('pointerover', {
                                                bubbles: !0,
                                                cancelable: !0
                                            })
                                        );
                                }, 100));
                        }, $));
            };
            return (
                window.addEventListener('pointermove', _),
                () => {
                    window.removeEventListener('pointermove', _), clearTimeout(u.current), clearTimeout(c.current), (f.current = X);
                }
            );
        }, [a, i, n, g, h, r]);
}
