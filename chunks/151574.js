var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(91192),
    d = r(924826),
    f = r(536895),
    p = r(468194),
    h = r(477690),
    _ = r(481060),
    m = r(100527),
    g = r(906732),
    E = r(570220),
    v = r(686546),
    y = r(28546),
    b = r(285651),
    I = r(926491),
    T = r(373228),
    S = r(378233),
    A = r(419922),
    C = r(490095),
    N = r(652136),
    R = r(626135),
    O = r(280930),
    D = r(606301),
    x = r(278754),
    L = r(981631),
    w = r(388032),
    P = r(304550);
let M = 4,
    k = (0, p.Mg)(h.Z.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
    U = (0, p.Mg)(h.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
    B = 2 * U + (0, p.Mg)(h.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * k,
    G = () => Promise.resolve();
function Z(e) {
    let { isFocused: n, isHidden: r, sendability: i, listIndex: a, sticker: s, onMouseOver: l, onSelectSticker: d } = e,
        { tabIndex: f, ...p } = (0, c.JA)(''.concat(a));
    return (0, o.jsxs)(_.Clickable, {
        ...p,
        tabIndex: r ? -1 : f,
        className: u()(P.suggestedExpression, { [P.suggestedExpressionFocused]: n }),
        focusProps: { enabled: !1 },
        onClick: () => d(s, i),
        onMouseOver: l,
        children: [
            (0, o.jsx)(v.ZP, {
                mask: v.ZP.Masks.STICKER_ROUNDED_RECT,
                width: U + M,
                height: U + M,
                className: P.mask,
                children: (0, o.jsx)('div', { className: P.maskBackground })
            }),
            (0, o.jsx)(A.ZP, {
                maskAsset: !0,
                size: U,
                sticker: s,
                className: P.__invalid_sticker
            }),
            i !== b.eb.SENDABLE && (0, o.jsx)(C.Z, { size: 14 })
        ]
    });
}
function F(e) {
    let { editorRef: n, hasStickerResults: r, shouldRenderSuggestions: i, focusedSuggestionType: a, setFocusedStickerListItem: o, setFocusedSuggestionType: l, setHasDismissed: u, setTextInputValue: c } = e,
        p = s.useCallback(
            (e, n) => {
                o(n);
            },
            [o]
        ),
        h = (0, d.ZP)({
            id: 'expression-suggestions-stickers',
            isEnabled: !0,
            scrollToStart: G,
            scrollToEnd: G,
            orientation: f.hy.HORIZONTAL,
            setFocus: p,
            useVirtualFocus: !0
        });
    return (
        s.useEffect(() => {
            let e = (e) => {
                var o, s;
                if (i && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    switch (e.key) {
                        case 'ArrowUp':
                            e.preventDefault(), null == a && r && (h.focusFirstVisibleItem(), l(0));
                            break;
                        case 'ArrowDown':
                            l(null), null === (o = n.current) || void 0 === o || o.focus();
                            break;
                        case 'Escape':
                            l(null), u(!0), c(''), null === (s = n.current) || void 0 === s || s.focus();
                    }
                    0 === a && h.containerProps.onKeyDown(e);
                }
            };
            return window.addEventListener('keydown', e, { capture: !0 }), () => window.removeEventListener('keydown', e, { capture: !0 });
        }, [h, i, a, l, r, n, u, o, c]),
        { stickersNavigator: h }
    );
}
!(function (e) {
    e[(e.STICKER = 0)] = 'STICKER';
})(i || (i = {})),
    (n.Z = s.memo(function (e) {
        var n;
        let { editorRef: r, channel: i, isEditorFocused: a, onSelectSticker: l, stickerIconVisible: d = !1, submitButtonVisible: f = !1 } = e,
            p = s.useContext(E.ZP),
            [h, v] = s.useState(null),
            [A, C] = s.useState(!1),
            [M, k] = s.useState(null),
            U = (0, y.Iu)((e) => null != e.activeView),
            G = s.useRef(null),
            [V, j] = s.useState(''),
            [H, Y] = s.useState(''),
            [W, K] = s.useState(!1),
            [z, q] = s.useState(!1),
            Q = (0, O.Z)(V, A, i),
            { analyticsLocations: X } = (0, g.ZP)(m.Z.EXPRESSION_SUGGESTIONS),
            { handleTextChange: J, debouncedSetTextInputValue: $ } = (0, O.m)({
                setTextInputValue: j,
                setHasDismissed: C,
                setHasSelection: q,
                setFocusedSuggestionType: v
            });
        s.useEffect(() => {
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
                p.addListener('text-changed', J),
                p.addListener('autocomplete-visibility-change', e),
                p.addListener('selection-changed', n),
                () => {
                    p.removeListener('text-changed', J), p.removeListener('autocomplete-visibility-change', e), p.removeListener('selection-changed', n);
                }
            );
        }, [J, r, p]),
            s.useLayoutEffect(() => {
                null == h && k(null);
            }, [h]);
        let [ee, et] = s.useState(!1);
        s.useLayoutEffect(() => {
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
                setHasDismissed: C,
                setFocusedStickerListItem: k,
                setTextInputValue: j
            }),
            ea = (e, n) => {
                if (er) {
                    if (
                        (R.default.track(L.rMx.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                            sticker_id: e.id,
                            suggestion_trigger: H
                        }),
                        n === b.eb.SENDABLE)
                    )
                        C(!0), l(e, T.V0.EXPRESSION_SUGGESTIONS), $.cancel(), j('');
                    else if ((0, S.jl)(e)) {
                        let n = I.Z.getStickerPack(e.pack_id);
                        null != n &&
                            (0, N.Z)({
                                stickerPack: n,
                                analyticsLocations: X
                            });
                    }
                    p.emit('sticker-suggestions-hidden');
                }
            },
            eo = s.useRef([]),
            es = s.useRef(!1);
        s.useEffect(() => {
            er && (eo.current = Q), er !== es.current && (p.emit(er ? 'sticker-suggestions-shown' : 'sticker-suggestions-hidden'), er && ((0, D.Tk)(V), Y(V))), (es.current = er);
        }, [p, er, Q, V]);
        let el = !er,
            eu = er ? Q : eo.current;
        return (0, o.jsx)(g.Gt, {
            value: X,
            children: (0, o.jsxs)(_.Clickable, {
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
                    (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(c.bG, {
                                navigator: ei,
                                children: (0, o.jsx)(c.SJ, {
                                    children: (e) => {
                                        let { ref: n, tabIndex: r, ...i } = e;
                                        return (0, o.jsx)('div', {
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
                                                return (0, o.jsx)(
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
                            (0, o.jsxs)('div', {
                                className: P.bottomInformationTextContainer,
                                children: [
                                    (0, o.jsx)('div', { className: P.textDivider }),
                                    (0, o.jsxs)('div', {
                                        className: P.bottomInformationLayout,
                                        children: [
                                            (0, o.jsx)(_.Text, {
                                                className: P.descriptionText,
                                                style: { maxWidth: B },
                                                variant: 'text-sm/normal',
                                                children:
                                                    null != M
                                                        ? w.intl.format(w.t['5gglIi'], { stickerName: null === (n = Q[+M]) || void 0 === n ? void 0 : n.sticker.name })
                                                        : w.intl.format(w.t['8DjNnJ'], {
                                                              upHook: (e, n) =>
                                                                  (0, o.jsx)(
                                                                      _.KeyCombo,
                                                                      {
                                                                          shortcut: 'up',
                                                                          className: P.keybind
                                                                      },
                                                                      n
                                                                  )
                                                          })
                                            }),
                                            (0, o.jsx)(_.Clickable, {
                                                onClick: () => {
                                                    R.default.track(L.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                                        enabled: !1,
                                                        location: { section: L.jXE.EXPRESSION_PICKER }
                                                    }),
                                                        (0, x.AW)(!1);
                                                },
                                                children: (0, o.jsx)(_.Tooltip, {
                                                    text: w.intl.string(w.t.XNMs5u),
                                                    children: (e) =>
                                                        (0, o.jsx)(_.XSmallIcon, {
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
                    (0, o.jsx)('div', { className: P.containerBackground })
                ]
            })
        });
    }));
