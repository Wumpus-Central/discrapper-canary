var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(91192),
    d = r(924826),
    f = r(536895),
    _ = r(468194),
    h = r(477690),
    p = r(481060),
    m = r(100527),
    g = r(906732),
    E = r(570220),
    v = r(686546),
    I = r(28546),
    T = r(285651),
    b = r(926491),
    y = r(373228),
    S = r(378233),
    A = r(419922),
    N = r(490095),
    C = r(652136),
    R = r(626135),
    O = r(280930),
    D = r(606301),
    L = r(278754),
    x = r(981631),
    w = r(388032),
    P = r(304550);
let M = 4,
    k = (0, _.Mg)(h.Z.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
    U = (0, _.Mg)(h.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
    B = 2 * U + (0, _.Mg)(h.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * k,
    G = () => Promise.resolve();
function Z(e) {
    let { isFocused: n, isHidden: r, sendability: i, listIndex: a, sticker: o, onMouseOver: l, onSelectSticker: d } = e,
        { tabIndex: f, ..._ } = (0, c.JA)(''.concat(a));
    return (0, s.jsxs)(p.Clickable, {
        ..._,
        tabIndex: r ? -1 : f,
        className: u()(P.suggestedExpression, { [P.suggestedExpressionFocused]: n }),
        focusProps: { enabled: !1 },
        onClick: () => d(o, i),
        onMouseOver: l,
        children: [
            (0, s.jsx)(v.ZP, {
                mask: v.ZP.Masks.STICKER_ROUNDED_RECT,
                width: U + M,
                height: U + M,
                className: P.mask,
                children: (0, s.jsx)('div', { className: P.maskBackground })
            }),
            (0, s.jsx)(A.ZP, {
                maskAsset: !0,
                size: U,
                sticker: o,
                className: P.__invalid_sticker
            }),
            i !== T.eb.SENDABLE && (0, s.jsx)(N.Z, { size: 14 })
        ]
    });
}
function F(e) {
    let { editorRef: n, hasStickerResults: r, shouldRenderSuggestions: i, focusedSuggestionType: a, setFocusedStickerListItem: s, setFocusedSuggestionType: l, setHasDismissed: u, setTextInputValue: c } = e,
        _ = o.useCallback(
            (e, n) => {
                s(n);
            },
            [s]
        ),
        h = (0, d.ZP)({
            id: 'expression-suggestions-stickers',
            isEnabled: !0,
            scrollToStart: G,
            scrollToEnd: G,
            orientation: f.hy.HORIZONTAL,
            setFocus: _,
            useVirtualFocus: !0
        });
    return (
        o.useEffect(() => {
            let e = (e) => {
                var s, o;
                if (i && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    switch (e.key) {
                        case 'ArrowUp':
                            e.preventDefault(), null == a && r && (h.focusFirstVisibleItem(), l(0));
                            break;
                        case 'ArrowDown':
                            l(null), null === (s = n.current) || void 0 === s || s.focus();
                            break;
                        case 'Escape':
                            l(null), u(!0), c(''), null === (o = n.current) || void 0 === o || o.focus();
                    }
                    0 === a && h.containerProps.onKeyDown(e);
                }
            };
            return window.addEventListener('keydown', e, { capture: !0 }), () => window.removeEventListener('keydown', e, { capture: !0 });
        }, [h, i, a, l, r, n, u, s, c]),
        { stickersNavigator: h }
    );
}
!(function (e) {
    e[(e.STICKER = 0)] = 'STICKER';
})(i || (i = {})),
    (n.Z = o.memo(function (e) {
        var n;
        let { editorRef: r, channel: i, isEditorFocused: a, onSelectSticker: l, stickerIconVisible: d = !1, submitButtonVisible: f = !1 } = e,
            _ = o.useContext(E.ZP),
            [h, v] = o.useState(null),
            [A, N] = o.useState(!1),
            [M, k] = o.useState(null),
            U = (0, I.Iu)((e) => null != e.activeView),
            G = o.useRef(null),
            [V, j] = o.useState(''),
            [H, Y] = o.useState(''),
            [W, K] = o.useState(!1),
            [z, q] = o.useState(!1),
            Q = (0, O.Z)(V, A, i),
            { analyticsLocations: X } = (0, g.ZP)(m.Z.EXPRESSION_SUGGESTIONS),
            { handleTextChange: J, debouncedSetTextInputValue: $ } = (0, O.m)({
                setTextInputValue: j,
                setHasDismissed: N,
                setHasSelection: q,
                setFocusedSuggestionType: v
            });
        o.useEffect(() => {
            let e = (e) => {
                    K(e);
                },
                n = (e) => {
                    let n = '' !== e && null != e;
                    if ((q(n), n)) {
                        var i;
                        v(null), null === (i = r.current) || void 0 === i || i.focus();
                    }
                };
            return (
                _.addListener('text-changed', J),
                _.addListener('autocomplete-visibility-change', e),
                _.addListener('selection-changed', n),
                () => {
                    _.removeListener('text-changed', J), _.removeListener('autocomplete-visibility-change', e), _.removeListener('selection-changed', n);
                }
            );
        }, [J, r, _]),
            o.useLayoutEffect(() => {
                null == h && k(null);
            }, [h]);
        let [ee, et] = o.useState(!1);
        o.useLayoutEffect(() => {
            requestAnimationFrame(() => {
                let e = G.current;
                et(a || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0);
            });
        }, [a]);
        let en = Q.length > 0,
            er = ee && !U && !W && !A && !z && en,
            { stickersNavigator: ei } = F({
                editorRef: r,
                hasStickerResults: en,
                shouldRenderSuggestions: er,
                focusedSuggestionType: h,
                setFocusedSuggestionType: v,
                setHasDismissed: N,
                setFocusedStickerListItem: k,
                setTextInputValue: j
            }),
            ea = (e, n) => {
                if (er) {
                    if (
                        (R.default.track(x.rMx.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                            sticker_id: e.id,
                            suggestion_trigger: H
                        }),
                        n === T.eb.SENDABLE)
                    )
                        N(!0), l(e, y.V0.EXPRESSION_SUGGESTIONS), $.cancel(), j('');
                    else if ((0, S.jl)(e)) {
                        let n = b.Z.getStickerPack(e.pack_id);
                        null != n &&
                            (0, C.Z)({
                                stickerPack: n,
                                analyticsLocations: X
                            });
                    }
                    _.emit('sticker-suggestions-hidden');
                }
            },
            es = o.useRef([]),
            eo = o.useRef(!1);
        o.useEffect(() => {
            er && (es.current = Q), er !== eo.current && (_.emit(er ? 'sticker-suggestions-shown' : 'sticker-suggestions-hidden'), er && ((0, D.Tk)(V), Y(V))), (eo.current = er);
        }, [_, er, Q, V]);
        let el = !er,
            eu = er ? Q : es.current;
        return (0, s.jsx)(g.Gt, {
            value: X,
            children: (0, s.jsxs)(p.Clickable, {
                tabIndex: el ? -1 : 0,
                'aria-hidden': el,
                className: u()(P.container, {
                    [P.hidden]: el,
                    [P.submitButtonOffset]: f,
                    [P.stickerIconOffset]: d
                }),
                innerRef: G,
                style: { minWidth: B },
                onClick: () => {
                    var e;
                    return null === (e = r.current) || void 0 === e ? void 0 : e.focus();
                },
                children: [
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(c.bG, {
                                navigator: ei,
                                children: (0, s.jsx)(c.SJ, {
                                    children: (e) => {
                                        let { ref: n, tabIndex: r, ...i } = e;
                                        return (0, s.jsx)('div', {
                                            className: P.stickerResults,
                                            ref: (e) => {
                                                n.current = e;
                                            },
                                            onMouseLeave: () => {
                                                null == h && k(null);
                                            },
                                            tabIndex: el ? -1 : r,
                                            ...i,
                                            children: eu.map((e, n) => {
                                                let { sticker: r, sendability: i } = e;
                                                return (0, s.jsx)(
                                                    Z,
                                                    {
                                                        isFocused: M === ''.concat(n),
                                                        isHidden: el,
                                                        sendability: i,
                                                        listIndex: n,
                                                        onMouseOver: () => {
                                                            ei.setFocus(''.concat(n)), k(''.concat(n));
                                                        },
                                                        onSelectSticker: ea,
                                                        sticker: r
                                                    },
                                                    r.id
                                                );
                                            })
                                        });
                                    }
                                })
                            }),
                            (0, s.jsxs)('div', {
                                className: P.bottomInformationTextContainer,
                                children: [
                                    (0, s.jsx)('div', { className: P.textDivider }),
                                    (0, s.jsxs)('div', {
                                        className: P.bottomInformationLayout,
                                        children: [
                                            (0, s.jsx)(p.Text, {
                                                className: P.descriptionText,
                                                style: { maxWidth: B },
                                                variant: 'text-sm/normal',
                                                children:
                                                    null != M
                                                        ? w.intl.format(w.t['5gglIi'], { stickerName: null === (n = Q[+M]) || void 0 === n ? void 0 : n.sticker.name })
                                                        : w.intl.format(w.t['8DjNnJ'], {
                                                              upHook: (e, n) =>
                                                                  (0, s.jsx)(
                                                                      p.KeyCombo,
                                                                      {
                                                                          shortcut: 'up',
                                                                          className: P.keybind
                                                                      },
                                                                      n
                                                                  )
                                                          })
                                            }),
                                            (0, s.jsx)(p.Clickable, {
                                                onClick: () => {
                                                    R.default.track(x.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                                        enabled: !1,
                                                        location: { section: x.jXE.EXPRESSION_PICKER }
                                                    }),
                                                        (0, L.AW)(!1);
                                                },
                                                children: (0, s.jsx)(p.Tooltip, {
                                                    text: w.intl.string(w.t.XNMs5u),
                                                    children: (e) =>
                                                        (0, s.jsx)(p.XSmallIcon, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            ...e,
                                                            className: P.closeIcon
                                                        })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)('div', { className: P.containerBackground })
                ]
            })
        });
    }));
