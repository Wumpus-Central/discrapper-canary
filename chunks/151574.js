n.d(t, { Z: () => W }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(91192),
    l = n(924826),
    c = n(536895),
    u = n(468194),
    d = n(477690),
    f = n(481060),
    p = n(100527),
    _ = n(906732),
    h = n(570220),
    m = n(686546),
    g = n(28546),
    E = n(285651),
    v = n(926491),
    b = n(373228),
    y = n(378233),
    O = n(419922),
    S = n(490095),
    I = n(652136),
    T = n(626135),
    N = n(280930),
    A = n(606301),
    C = n(278754),
    R = n(981631),
    P = n(388032),
    w = n(509340);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = j(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let U = 4,
    G = (0, u.Mg)(d.Z.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
    B = (0, u.Mg)(d.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
    Z = 2 * B + (0, u.Mg)(d.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * G,
    F = () => Promise.resolve();
function V(e) {
    let { isFocused: t, isHidden: n, sendability: i, listIndex: o, sticker: l, onMouseOver: c, onSelectSticker: u } = e,
        d = (0, s.JA)(''.concat(o)),
        { tabIndex: p } = d,
        _ = k(d, ['tabIndex']);
    return (0, r.jsxs)(
        f.P3F,
        M(x({}, _), {
            tabIndex: n ? -1 : p,
            className: a()(w.suggestedExpression, { [w.suggestedExpressionFocused]: t }),
            focusProps: { enabled: !1 },
            onClick: () => u(l, i),
            onMouseOver: c,
            children: [
                (0, r.jsx)(m.ZP, {
                    mask: m.ZP.Masks.STICKER_ROUNDED_RECT,
                    width: B + U,
                    height: B + U,
                    className: w.mask,
                    children: (0, r.jsx)('div', { className: w.maskBackground })
                }),
                (0, r.jsx)(O.ZP, {
                    maskAsset: !0,
                    size: B,
                    sticker: l,
                    className: w.__invalid_sticker
                }),
                i !== E.eb.SENDABLE && (0, r.jsx)(S.Z, { size: 14 })
            ]
        })
    );
}
function H(e) {
    let { editorRef: t, hasStickerResults: n, shouldRenderSuggestions: r, focusedSuggestionType: o, setFocusedStickerListItem: a, setFocusedSuggestionType: s, setHasDismissed: u, setTextInputValue: d } = e,
        f = i.useCallback(
            (e, t) => {
                a(t);
            },
            [a]
        ),
        p = (0, l.ZP)({
            id: 'expression-suggestions-stickers',
            isEnabled: !0,
            scrollToStart: F,
            scrollToEnd: F,
            orientation: c.hy.HORIZONTAL,
            setFocus: f,
            useVirtualFocus: !0
        });
    return (
        i.useEffect(() => {
            let e = (e) => {
                var i, a;
                if (r && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    switch (e.key) {
                        case 'ArrowUp':
                            e.preventDefault(), null == o && n && (p.focusFirstVisibleItem(), s(0));
                            break;
                        case 'ArrowDown':
                            s(null), null === (i = t.current) || void 0 === i || i.focus();
                            break;
                        case 'Escape':
                            s(null), u(!0), d(''), null === (a = t.current) || void 0 === a || a.focus();
                    }
                    0 === o && p.containerProps.onKeyDown(e);
                }
            };
            return window.addEventListener('keydown', e, { capture: !0 }), () => window.removeEventListener('keydown', e, { capture: !0 });
        }, [p, r, o, s, n, t, u, a, d]),
        { stickersNavigator: p }
    );
}
let W = i.memo(function (e) {
    var t;
    let { editorRef: n, channel: o, isEditorFocused: l, onSelectSticker: c, stickerIconVisible: u = !1, submitButtonVisible: d = !1 } = e,
        m = i.useContext(h.ZP),
        [O, S] = i.useState(null),
        [D, L] = i.useState(!1),
        [j, U] = i.useState(null),
        G = (0, g.Iu)((e) => null != e.activeView),
        B = i.useRef(null),
        [F, W] = i.useState(''),
        [Y, K] = i.useState(''),
        [z, q] = i.useState(!1),
        [Q, X] = i.useState(!1),
        J = (0, N.Z)(F, D, o),
        { analyticsLocations: $ } = (0, _.ZP)(p.Z.EXPRESSION_SUGGESTIONS),
        { handleTextChange: ee, debouncedSetTextInputValue: et } = (0, N.m)({
            setTextInputValue: W,
            setHasDismissed: L,
            setHasSelection: X,
            setFocusedSuggestionType: S
        });
    i.useEffect(() => {
        let e = (e) => {
                q(e);
            },
            t = (e) => {
                let t = '' !== e && null != e;
                if ((X(t), t)) {
                    var r;
                    S(null), null === (r = n.current) || void 0 === r || r.focus();
                }
            };
        return (
            m.addListener('text-changed', ee),
            m.addListener('autocomplete-visibility-change', e),
            m.addListener('selection-changed', t),
            () => {
                m.removeListener('text-changed', ee), m.removeListener('autocomplete-visibility-change', e), m.removeListener('selection-changed', t);
            }
        );
    }, [ee, n, m]),
        i.useLayoutEffect(() => {
            null == O && U(null);
        }, [O]);
    let [en, er] = i.useState(!1);
    i.useLayoutEffect(() => {
        requestAnimationFrame(() => {
            let e = B.current;
            er(l || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0);
        });
    }, [l]);
    let ei = J.length > 0,
        eo = en && !G && !z && !D && !Q && ei,
        { stickersNavigator: ea } = H({
            editorRef: n,
            hasStickerResults: ei,
            shouldRenderSuggestions: eo,
            focusedSuggestionType: O,
            setFocusedSuggestionType: S,
            setHasDismissed: L,
            setFocusedStickerListItem: U,
            setTextInputValue: W
        }),
        es = (e, t) => {
            if (eo) {
                if (
                    (T.default.track(R.rMx.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                        sticker_id: e.id,
                        suggestion_trigger: Y
                    }),
                    t === E.eb.SENDABLE)
                )
                    L(!0), c(e, b.V0.EXPRESSION_SUGGESTIONS), et.cancel(), W('');
                else if ((0, y.jl)(e)) {
                    let t = v.Z.getStickerPack(e.pack_id);
                    null != t &&
                        (0, I.Z)({
                            stickerPack: t,
                            analyticsLocations: $
                        });
                }
                m.emit('sticker-suggestions-hidden');
            }
        },
        el = i.useRef([]),
        ec = i.useRef(!1);
    i.useEffect(() => {
        eo && (el.current = J), eo !== ec.current && (m.emit(eo ? 'sticker-suggestions-shown' : 'sticker-suggestions-hidden'), eo && ((0, A.Tk)(F), K(F))), (ec.current = eo);
    }, [m, eo, J, F]);
    let eu = !eo,
        ed = eo ? J : el.current;
    return (0, r.jsx)(_.Gt, {
        value: $,
        children: (0, r.jsxs)(f.P3F, {
            tabIndex: eu ? -1 : 0,
            'aria-hidden': eu,
            className: a()(w.container, {
                [w.hidden]: eu,
                [w.submitButtonOffset]: d,
                [w.stickerIconOffset]: u
            }),
            innerRef: B,
            style: { minWidth: Z },
            onClick: () => {
                var e;
                return null === (e = n.current) || void 0 === e ? void 0 : e.focus();
            },
            children: [
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.bG, {
                            navigator: ea,
                            children: (0, r.jsx)(s.SJ, {
                                children: (e) => {
                                    var { ref: t, tabIndex: n } = e,
                                        i = k(e, ['ref', 'tabIndex']);
                                    return (0, r.jsx)(
                                        'div',
                                        M(
                                            x(
                                                {
                                                    className: w.stickerResults,
                                                    ref: (e) => {
                                                        t.current = e;
                                                    },
                                                    onMouseLeave: () => {
                                                        null == O && U(null);
                                                    },
                                                    tabIndex: eu ? -1 : n
                                                },
                                                i
                                            ),
                                            {
                                                children: ed.map((e, t) => {
                                                    let { sticker: n, sendability: i } = e;
                                                    return (0, r.jsx)(
                                                        V,
                                                        {
                                                            isFocused: j === ''.concat(t),
                                                            isHidden: eu,
                                                            sendability: i,
                                                            listIndex: t,
                                                            onMouseOver: () => {
                                                                ea.setFocus(''.concat(t)), U(''.concat(t));
                                                            },
                                                            onSelectSticker: es,
                                                            sticker: n
                                                        },
                                                        n.id
                                                    );
                                                })
                                            }
                                        )
                                    );
                                }
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: w.bottomInformationTextContainer,
                            children: [
                                (0, r.jsx)('div', { className: w.textDivider }),
                                (0, r.jsxs)('div', {
                                    className: w.bottomInformationLayout,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            className: w.descriptionText,
                                            style: { maxWidth: Z },
                                            variant: 'text-sm/normal',
                                            children:
                                                null != j
                                                    ? P.NW.format(P.t['5gglIi'], { stickerName: null === (t = J[+j]) || void 0 === t ? void 0 : t.sticker.name })
                                                    : P.NW.format(P.t['8DjNnJ'], {
                                                          upHook: (e, t) =>
                                                              (0, r.jsx)(
                                                                  f.M2$,
                                                                  {
                                                                      shortcut: 'up',
                                                                      className: w.keybind
                                                                  },
                                                                  t
                                                              )
                                                      })
                                        }),
                                        (0, r.jsx)(f.P3F, {
                                            onClick: () => {
                                                T.default.track(R.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                                    enabled: !1,
                                                    location: { section: R.jXE.EXPRESSION_PICKER }
                                                }),
                                                    (0, C.AW)(!1);
                                            },
                                            children: (0, r.jsx)(f.ua7, {
                                                text: P.NW.string(P.t.XNMs5u),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        f.Dio,
                                                        M(
                                                            x(
                                                                {
                                                                    size: 'md',
                                                                    color: 'currentColor'
                                                                },
                                                                e
                                                            ),
                                                            { className: w.closeIcon }
                                                        )
                                                    )
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: w.containerBackground })
            ]
        })
    });
});
