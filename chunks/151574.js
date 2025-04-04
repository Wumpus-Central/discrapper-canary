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
    _ = n(100527),
    p = n(906732),
    h = n(570220),
    m = n(686546),
    g = n(28546),
    E = n(285651),
    b = n(926491),
    y = n(373228),
    v = n(378233),
    O = n(419922),
    I = n(490095),
    S = n(652136),
    T = n(626135),
    N = n(280930),
    A = n(606301),
    C = n(278754),
    R = n(981631),
    P = n(388032),
    w = n(813567);
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
function L(e) {
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
function x(e, t) {
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
            : x(Object(t)).forEach(function (n) {
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
    F = 2 * B + (0, u.Mg)(d.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * G,
    V = () => Promise.resolve();
function Z(e) {
    let { isFocused: t, isHidden: n, sendability: i, listIndex: o, sticker: l, onMouseOver: c, onSelectSticker: u } = e,
        d = (0, s.JA)(''.concat(o)),
        { tabIndex: _ } = d,
        p = k(d, ['tabIndex']);
    return (0, r.jsxs)(
        f.P3F,
        M(L({}, p), {
            tabIndex: n ? -1 : _,
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
                (0, r.jsx)(O.Z, {
                    maskAsset: !0,
                    size: B,
                    sticker: l,
                    className: w.__invalid_sticker
                }),
                i !== E.eb.SENDABLE && (0, r.jsx)(I.Z, { size: 14 })
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
        _ = (0, l.ZP)({
            id: 'expression-suggestions-stickers',
            isEnabled: !0,
            scrollToStart: V,
            scrollToEnd: V,
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
                            e.preventDefault(), null == o && n && (_.focusFirstVisibleItem(), s(0));
                            break;
                        case 'ArrowDown':
                            s(null), null == (i = t.current) || i.focus();
                            break;
                        case 'Escape':
                            s(null), u(!0), d(''), null == (a = t.current) || a.focus();
                    }
                    0 === o && _.containerProps.onKeyDown(e);
                }
            };
            return window.addEventListener('keydown', e, { capture: !0 }), () => window.removeEventListener('keydown', e, { capture: !0 });
        }, [_, r, o, s, n, t, u, a, d]),
        { stickersNavigator: _ }
    );
}
let W = i.memo(function (e) {
    var t;
    let { editorRef: n, channel: o, isEditorFocused: l, onSelectSticker: c, stickerIconVisible: u = !1, submitButtonVisible: d = !1 } = e,
        m = i.useContext(h.ZP),
        [O, I] = i.useState(null),
        [D, x] = i.useState(!1),
        [j, U] = i.useState(null),
        G = (0, g.Iu)((e) => null != e.activeView),
        B = i.useRef(null),
        [V, W] = i.useState(''),
        [Y, K] = i.useState(''),
        [z, q] = i.useState(!1),
        [Q, X] = i.useState(!1),
        J = (0, N.Z)(V, D, o),
        { analyticsLocations: $ } = (0, p.ZP)(_.Z.EXPRESSION_SUGGESTIONS),
        { handleTextChange: ee, debouncedSetTextInputValue: et } = (0, N.m)({
            setTextInputValue: W,
            setHasDismissed: x,
            setHasSelection: X,
            setFocusedSuggestionType: I
        });
    i.useEffect(() => {
        let e = (e) => {
                q(e);
            },
            t = (e) => {
                let t = '' !== e && null != e;
                if ((X(t), t)) {
                    var r;
                    I(null), null == (r = n.current) || r.focus();
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
            setFocusedSuggestionType: I,
            setHasDismissed: x,
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
                    x(!0), c(e, y.V0.EXPRESSION_SUGGESTIONS), et.cancel(), W('');
                else if ((0, v.jl)(e)) {
                    let t = b.Z.getStickerPack(e.pack_id);
                    null != t &&
                        (0, S.Z)({
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
        eo && (el.current = J), eo !== ec.current && (m.emit(eo ? 'sticker-suggestions-shown' : 'sticker-suggestions-hidden'), eo && ((0, A.Tk)(V), K(V))), (ec.current = eo);
    }, [m, eo, J, V]);
    let eu = !eo,
        ed = eo ? J : el.current;
    return (0, r.jsx)(p.Gt, {
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
            style: { minWidth: F },
            onClick: () => {
                var e;
                return null == (e = n.current) ? void 0 : e.focus();
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
                                            L(
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
                                                        Z,
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
                                            style: { maxWidth: F },
                                            variant: 'text-sm/normal',
                                            children:
                                                null != j
                                                    ? P.NW.format(P.t['5gglIi'], { stickerName: null == (t = J[+j]) ? void 0 : t.sticker.name })
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
                                                            L(
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
