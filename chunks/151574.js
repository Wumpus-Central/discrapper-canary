n.d(t, { Z: () => B }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(924826),
    u = n(536895),
    c = n(468194),
    d = n(477690),
    f = n(481060),
    _ = n(100527),
    p = n(906732),
    h = n(570220),
    m = n(686546),
    g = n(28546),
    E = n(285651),
    v = n(926491),
    y = n(373228),
    I = n(378233),
    b = n(419922),
    T = n(490095),
    S = n(652136),
    A = n(626135),
    N = n(280930),
    C = n(606301),
    R = n(278754),
    O = n(981631),
    D = n(388032),
    x = n(304550);
let L = 4,
    P = (0, c.Mg)(d.Z.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
    w = (0, c.Mg)(d.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
    M = 2 * w + (0, c.Mg)(d.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * P,
    k = () => Promise.resolve();
function U(e) {
    let { isFocused: t, isHidden: n, sendability: r, listIndex: a, sticker: l, onMouseOver: u, onSelectSticker: c } = e,
        { tabIndex: d, ..._ } = (0, o.JA)(''.concat(a));
    return (0, i.jsxs)(f.P3F, {
        ..._,
        tabIndex: n ? -1 : d,
        className: s()(x.suggestedExpression, { [x.suggestedExpressionFocused]: t }),
        focusProps: { enabled: !1 },
        onClick: () => c(l, r),
        onMouseOver: u,
        children: [
            (0, i.jsx)(m.ZP, {
                mask: m.ZP.Masks.STICKER_ROUNDED_RECT,
                width: w + L,
                height: w + L,
                className: x.mask,
                children: (0, i.jsx)('div', { className: x.maskBackground })
            }),
            (0, i.jsx)(b.ZP, {
                maskAsset: !0,
                size: w,
                sticker: l,
                className: x.__invalid_sticker
            }),
            r !== E.eb.SENDABLE && (0, i.jsx)(T.Z, { size: 14 })
        ]
    });
}
function G(e) {
    let { editorRef: t, hasStickerResults: n, shouldRenderSuggestions: i, focusedSuggestionType: a, setFocusedStickerListItem: s, setFocusedSuggestionType: o, setHasDismissed: c, setTextInputValue: d } = e,
        f = r.useCallback(
            (e, t) => {
                s(t);
            },
            [s]
        ),
        _ = (0, l.ZP)({
            id: 'expression-suggestions-stickers',
            isEnabled: !0,
            scrollToStart: k,
            scrollToEnd: k,
            orientation: u.hy.HORIZONTAL,
            setFocus: f,
            useVirtualFocus: !0
        });
    return (
        r.useEffect(() => {
            let e = (e) => {
                var r, s;
                if (i && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    switch (e.key) {
                        case 'ArrowUp':
                            e.preventDefault(), null == a && n && (_.focusFirstVisibleItem(), o(0));
                            break;
                        case 'ArrowDown':
                            o(null), null === (r = t.current) || void 0 === r || r.focus();
                            break;
                        case 'Escape':
                            o(null), c(!0), d(''), null === (s = t.current) || void 0 === s || s.focus();
                    }
                    0 === a && _.containerProps.onKeyDown(e);
                }
            };
            return window.addEventListener('keydown', e, { capture: !0 }), () => window.removeEventListener('keydown', e, { capture: !0 });
        }, [_, i, a, o, n, t, c, s, d]),
        { stickersNavigator: _ }
    );
}
let B = r.memo(function (e) {
    var t;
    let { editorRef: n, channel: a, isEditorFocused: l, onSelectSticker: u, stickerIconVisible: c = !1, submitButtonVisible: d = !1 } = e,
        m = r.useContext(h.ZP),
        [b, T] = r.useState(null),
        [L, P] = r.useState(!1),
        [w, k] = r.useState(null),
        B = (0, g.Iu)((e) => null != e.activeView),
        Z = r.useRef(null),
        [F, V] = r.useState(''),
        [j, H] = r.useState(''),
        [Y, W] = r.useState(!1),
        [K, z] = r.useState(!1),
        q = (0, N.Z)(F, L, a),
        { analyticsLocations: Q } = (0, p.ZP)(_.Z.EXPRESSION_SUGGESTIONS),
        { handleTextChange: X, debouncedSetTextInputValue: J } = (0, N.m)({
            setTextInputValue: V,
            setHasDismissed: P,
            setHasSelection: z,
            setFocusedSuggestionType: T
        });
    r.useEffect(() => {
        let e = (e) => {
                W(e);
            },
            t = (e) => {
                let t = '' !== e && null != e;
                if ((z(t), t)) {
                    var i;
                    T(null), null === (i = n.current) || void 0 === i || i.focus();
                }
            };
        return (
            m.addListener('text-changed', X),
            m.addListener('autocomplete-visibility-change', e),
            m.addListener('selection-changed', t),
            () => {
                m.removeListener('text-changed', X), m.removeListener('autocomplete-visibility-change', e), m.removeListener('selection-changed', t);
            }
        );
    }, [X, n, m]),
        r.useLayoutEffect(() => {
            null == b && k(null);
        }, [b]);
    let [$, ee] = r.useState(!1);
    r.useLayoutEffect(() => {
        requestAnimationFrame(() => {
            let e = Z.current;
            ee(l || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0);
        });
    }, [l]);
    let et = q.length > 0,
        en = $ && !B && !Y && !L && !K && et,
        { stickersNavigator: ei } = G({
            editorRef: n,
            hasStickerResults: et,
            shouldRenderSuggestions: en,
            focusedSuggestionType: b,
            setFocusedSuggestionType: T,
            setHasDismissed: P,
            setFocusedStickerListItem: k,
            setTextInputValue: V
        }),
        er = (e, t) => {
            if (en) {
                if (
                    (A.default.track(O.rMx.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                        sticker_id: e.id,
                        suggestion_trigger: j
                    }),
                    t === E.eb.SENDABLE)
                )
                    P(!0), u(e, y.V0.EXPRESSION_SUGGESTIONS), J.cancel(), V('');
                else if ((0, I.jl)(e)) {
                    let t = v.Z.getStickerPack(e.pack_id);
                    null != t &&
                        (0, S.Z)({
                            stickerPack: t,
                            analyticsLocations: Q
                        });
                }
                m.emit('sticker-suggestions-hidden');
            }
        },
        ea = r.useRef([]),
        es = r.useRef(!1);
    r.useEffect(() => {
        en && (ea.current = q), en !== es.current && (m.emit(en ? 'sticker-suggestions-shown' : 'sticker-suggestions-hidden'), en && ((0, C.Tk)(F), H(F))), (es.current = en);
    }, [m, en, q, F]);
    let eo = !en,
        el = en ? q : ea.current;
    return (0, i.jsx)(p.Gt, {
        value: Q,
        children: (0, i.jsxs)(f.P3F, {
            tabIndex: eo ? -1 : 0,
            'aria-hidden': eo,
            className: s()(x.container, {
                [x.hidden]: eo,
                [x.submitButtonOffset]: d,
                [x.stickerIconOffset]: c
            }),
            innerRef: Z,
            style: { minWidth: M },
            onClick: () => {
                var e;
                return null === (e = n.current) || void 0 === e ? void 0 : e.focus();
            },
            children: [
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.bG, {
                            navigator: ei,
                            children: (0, i.jsx)(o.SJ, {
                                children: (e) => {
                                    let { ref: t, tabIndex: n, ...r } = e;
                                    return (0, i.jsx)('div', {
                                        className: x.stickerResults,
                                        ref: (e) => {
                                            t.current = e;
                                        },
                                        onMouseLeave: () => {
                                            null == b && k(null);
                                        },
                                        tabIndex: eo ? -1 : n,
                                        ...r,
                                        children: el.map((e, t) => {
                                            let { sticker: n, sendability: r } = e;
                                            return (0, i.jsx)(
                                                U,
                                                {
                                                    isFocused: w === ''.concat(t),
                                                    isHidden: eo,
                                                    sendability: r,
                                                    listIndex: t,
                                                    onMouseOver: () => {
                                                        ei.setFocus(''.concat(t)), k(''.concat(t));
                                                    },
                                                    onSelectSticker: er,
                                                    sticker: n
                                                },
                                                n.id
                                            );
                                        })
                                    });
                                }
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: x.bottomInformationTextContainer,
                            children: [
                                (0, i.jsx)('div', { className: x.textDivider }),
                                (0, i.jsxs)('div', {
                                    className: x.bottomInformationLayout,
                                    children: [
                                        (0, i.jsx)(f.Text, {
                                            className: x.descriptionText,
                                            style: { maxWidth: M },
                                            variant: 'text-sm/normal',
                                            children:
                                                null != w
                                                    ? D.intl.format(D.t['5gglIi'], { stickerName: null === (t = q[+w]) || void 0 === t ? void 0 : t.sticker.name })
                                                    : D.intl.format(D.t['8DjNnJ'], {
                                                          upHook: (e, t) =>
                                                              (0, i.jsx)(
                                                                  f.M2$,
                                                                  {
                                                                      shortcut: 'up',
                                                                      className: x.keybind
                                                                  },
                                                                  t
                                                              )
                                                      })
                                        }),
                                        (0, i.jsx)(f.P3F, {
                                            onClick: () => {
                                                A.default.track(O.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                                    enabled: !1,
                                                    location: { section: O.jXE.EXPRESSION_PICKER }
                                                }),
                                                    (0, R.AW)(!1);
                                            },
                                            children: (0, i.jsx)(f.ua7, {
                                                text: D.intl.string(D.t.XNMs5u),
                                                children: (e) =>
                                                    (0, i.jsx)(f.Dio, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        ...e,
                                                        className: x.closeIcon
                                                    })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: x.containerBackground })
            ]
        })
    });
});
