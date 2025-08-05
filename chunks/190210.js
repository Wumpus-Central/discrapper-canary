(n.d(t, { Z: () => en }), n(704826), n(35282), n(539854), n(388685), n(781311), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(66546),
    u = n(772848),
    d = n(442837),
    p = n(692547),
    h = n(481060),
    f = n(166459),
    m = n(911969),
    g = n(476326),
    b = n(607070),
    _ = n(100527),
    y = n(906732),
    C = n(998698),
    x = n(326133),
    v = n(507366),
    j = n(570220),
    O = n(951394),
    E = n(805680),
    S = n(374794),
    P = n(884858),
    I = n(813197),
    Z = n(849522),
    T = n(665906),
    N = n(695346),
    A = n(703558),
    w = n(398327),
    R = n(117530),
    M = n(956664),
    D = n(358085),
    k = n(127654),
    L = n(746877),
    U = n(541716),
    B = n(667829),
    F = n(258696),
    H = n(893718),
    G = n(273031),
    V = n(303628),
    z = n(981631),
    W = n(761652),
    Y = n(224837),
    q = n(200299),
    K = n(388032),
    X = n(345782),
    Q = n(302195);
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ee(e, t) {
    let n = e.startsWith('attachment://'),
        r = e;
    if (n) {
        let n = e.slice(13);
        r = t ? 'attachment://SPOILER_'.concat(et(n)) : e;
    }
    return {
        media: {
            url: r,
            proxyUrl: r,
            loadingState: m.f.UNKNOWN,
            flags: 0
        },
        description: e,
        spoiler: t
    };
}
function et(e) {
    return null == e ? 'unnamed_file' : e.replace(/\s/g, '_');
}
let en = i.memo(
    i.forwardRef(function (e, t) {
        var n, l, o, u;
        let { textValue: p, richValue: g, className: O, id: S, required: P, disabled: I, accessibilityLabel: M, channel: k, type: G, focused: q, onChange: en, onResize: eo, onBlur: es, onFocus: ec, onKeyDown: eu, onSubmit: ed, promptToUpload: ep, canMentionRoles: eh, canMentionChannels: ef, maxCharacterCount: em, placeholder: eg, 'aria-describedby': eb, 'aria-labelledby': e_, setEditorRef: ey, autoCompletePosition: eC, children: ex, disableThemedBackground: ev = !1, emojiPickerCloseOnModalOuterClick: ej, parentModalKey: eO } = e,
            eE = v.Z.useField('channelDrafts')[k.id],
            eS = null != (l = null == eE ? void 0 : eE.title) ? l : '',
            eP = null == eE ? void 0 : eE.heroFile,
            eI = null == (o = null == eE ? void 0 : eE.publish) || o,
            eZ = null == (u = null == eE ? void 0 : eE.createThread) || u;
        s()(null != G, 'chat input type must be set');
        let { analyticsLocations: eT } = (0, y.ZP)(_.Z.CHANNEL_TEXT_AREA),
            eN = (0, H.qz)(t),
            eA = i.useRef(null),
            ew = i.useRef(null),
            eR = i.useRef(null),
            eM = i.useRef(null);
        null == ey || ey(ew.current);
        let { activeCommand: eD } = (0, d.cj)([C.Z], () => {
                var e, t;
                return {
                    activeCommand: (null == (e = G.commands) ? void 0 : e.enabled) ? C.Z.getActiveCommand(k.id) : null,
                    activeCommandSection: (null == (t = G.commands) ? void 0 : t.enabled) ? C.Z.getActiveCommandSection(k.id) : null
                };
            }),
            { isLurking: ek, isPendingMember: eL, disabled: eU, canAttachFiles: eB, canEveryoneSendMessages: eF } = (0, H.TE)(k, G, eD, I),
            eH = !N.dN.useSetting() && !(0, D.isAndroidWeb)() && null != window.ResizeObserver,
            eG = !eH || !(null == (n = G.commands) ? void 0 : n.enabled) || !q || p !== W.GI,
            eV = (0, Z.Z)(),
            { fontSize: ez } = (0, d.cj)([b.Z], () => ({
                fontSize: b.Z.fontSize,
                isSubmitButtonEnabled: b.Z.isSubmitButtonEnabled
            })),
            eW = (0, d.e7)([w.Z], () => w.Z.isEnabled()),
            eY = (0, T.NE)(k);
        (0, H.hJ)(G, eU);
        let { eventEmitter: eq, handleEditorSelectionChanged: eK } = (0, H.x2)(ew, p, g),
            eX = i.useCallback(
                (e) => {
                    var t;
                    let n = [];
                    (null != eP &&
                        n.push({
                            type: m.re.MEDIA_GALLERY,
                            items: [ee('attachment://'.concat(et(eP.name)), !1)],
                            id: ''.concat(Y.Vm)
                        }),
                        e.value.length > 0 &&
                            n.push({
                                type: m.re.TEXT_DISPLAY,
                                content: e.value,
                                id: ''.concat(Y.Kb)
                            }));
                    let r = R.Z.getUploads(k.id, A.d.ChannelMessage),
                        i = r.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == eP ? void 0 : eP.name)),
                        l = r.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == eP ? void 0 : eP.name)),
                        a = i.map((e) => ee('attachment://'.concat(et(e.filename)), !1));
                    return (
                        a.length > 0 &&
                            n.push({
                                type: m.re.MEDIA_GALLERY,
                                items: a,
                                id: ''.concat(Y.m2)
                            }),
                        l.forEach((e, t) => {
                            n.push({
                                type: m.re.FILE,
                                file: ee('attachment://'.concat(et(e.filename)), !1).media,
                                id: ''.concat(Y.kn + t),
                                name: et(e.filename),
                                size: null
                            });
                        }),
                        (0, v.c)(k.id, {
                            title: '',
                            heroFile: null
                        }),
                        null == (t = ew.current) || t.blur(),
                        ed(
                            $(J({}, e), {
                                components: n,
                                announcementSendOptions: {
                                    createThread: eY && eZ,
                                    threadName: eS.length > 0 ? eS : K.intl.string(K.t['7Xm5QE']),
                                    publish: eI
                                }
                            })
                        )
                    );
                },
                [ed, eS, eP, k.id, eZ, eI, eY]
            ),
            { submit: eQ, handleSubmit: eJ } = (0, H.bL)(eX, G, ew, eM, k.id),
            { autocompleteRef: e$, handleMaybeShowAutocomplete: e0, handleHideAutocomplete: e1 } = (0, H.jx)(),
            e2 = i.useCallback(() => {
                var e;
                return null == eM || null == (e = eM.current) ? void 0 : e.hide();
            }, []),
            { editorHeight: e3, handleResize: e7 } = (0, H.oR)(eo),
            {
                handleTab: e8,
                handleEnter: e5,
                handleMoveSelection: e6
            } = (function (e, t, n) {
                let r = i.useCallback(() => {
                    var r, i;
                    return !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!1))) || (null == (i = e.current) ? void 0 : i.onTabOrEnter(!1)) || !1;
                }, [n]);
                return {
                    handleTab: r,
                    handleEnter: i.useCallback(() => {
                        var r, i;
                        return !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!0))) || (null == (i = e.current) ? void 0 : i.onTabOrEnter(!1)) || !1;
                    }, [n]),
                    handleMoveSelection: i.useCallback(
                        (r) => {
                            var i, l;
                            return !!(!n && (null == (i = t.current) ? void 0 : i.onMoveSelection(r))) || (null == (l = e.current) ? void 0 : l.onMoveSelection(r)) || !1;
                        },
                        [n]
                    )
                };
            })(e$, eA, eG),
            { expressionPickerView: e4, shouldHideExpressionPicker: e9, handleAutocompleteVisibilityChange: te, handleOuterClick: tt } = (0, H.iV)(G, eq, ew),
            tn = (0, H.ae)(ew),
            tr = (0, H.Sg)(eQ, G, ew),
            ti = (0, H.O1)({
                editorRef: ew,
                disabled: eU,
                textValue: p,
                channelId: k.id,
                chatInputType: G,
                submit: eX
            });
        (0, L.S)(eq, k.guild_id, k.id);
        let [tl, ta] = i.useState(!1),
            to = q || tl || p.length > 0 || null != eP || eS.length > 0,
            { editorHeaderHeight: ts, paddingTop: tc } = (0, h.q_F)({
                editorHeaderHeight: 120 * !!to,
                paddingTop: 16 * !!to,
                config: {
                    tension: 120,
                    friction: 15,
                    clamp: !0
                }
            }),
            tu = i.useRef(null),
            [td, tp] = i.useState(!1),
            th = i.useRef(!1),
            tf = i.useCallback(() => {
                th.current = !0;
                let e = setTimeout(() => {
                    th.current && tp(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tm = i.useCallback(() => {
                th.current = !1;
                let e = setTimeout(() => {
                    th.current || tp(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tg = i.useCallback(() => {
                var e;
                if (null == eP) return;
                let t = null == (e = R.Z.getUploads(k.id, G.drafts.type).find((e) => e.filename === eP.name)) ? void 0 : e.id;
                (null != t && f.Z.remove(k.id, t, A.d.ChannelMessage), (0, v.c)(k.id, { heroFile: null }));
            }, [k.id, eP, G.drafts.type]);
        return (0, r.jsx)(j.f6, {
            value: eq,
            children: (0, r.jsxs)(y.Gt, {
                value: eT,
                children: [
                    (0, r.jsxs)('div', {
                        ref: eN,
                        className: a()(O, Q.channelTextArea),
                        onMouseDown: tt,
                        children: [
                            (0, r.jsx)('div', {
                                ref: eR,
                                onScroll: e2,
                                className: a()(Q.announcementScrollableContainer, { [Q.themedBackground]: !ev }),
                                children: (0, r.jsxs)('div', {
                                    className: a()(Q.inner, X.inner),
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: X.body,
                                            children: [
                                                (0, r.jsxs)(c.animated.div, {
                                                    className: X.headerInput,
                                                    style: {
                                                        height: ts,
                                                        paddingTop: tc
                                                    },
                                                    children: [
                                                        null != eP
                                                            ? (0, r.jsx)(ei, {
                                                                  file: eP,
                                                                  onRemoveHeroImage: tg
                                                              })
                                                            : null,
                                                        null != eP
                                                            ? null
                                                            : (0, r.jsx)(ea, {
                                                                  channel: k,
                                                                  onImageUploaded: (e) => (0, v.c)(k.id, { heroFile: e }),
                                                                  onFocus: () => ta(!0)
                                                              }),
                                                        (0, r.jsx)('input', {
                                                            onFocus: () => ta(!0),
                                                            onBlur: () => ta(!1),
                                                            maxLength: 140,
                                                            className: X.titleInput,
                                                            placeholder: K.intl.string(K.t.Z8fYjI),
                                                            value: eS,
                                                            onChange: (e) => (0, v.c)(k.id, { title: e.target.value })
                                                        })
                                                    ]
                                                }),
                                                (0, r.jsx)('div', {
                                                    className: X.inputWrapper,
                                                    children: (0, r.jsx)(h.tEY, {
                                                        ringTarget: eN,
                                                        ringClassName: Q.focusRing,
                                                        children: (0, r.jsx)(B.Z, {
                                                            ref: ew,
                                                            id: S,
                                                            focused: q,
                                                            useSlate: eH,
                                                            textValue: p,
                                                            richValue: g,
                                                            disabled: eU,
                                                            placeholder: eg,
                                                            required: P,
                                                            accessibilityLabel: M,
                                                            isPreviewing: (ek || eL) && eF,
                                                            channel: k,
                                                            type: U.Ie.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eB,
                                                            uploadPromptCharacterCount: z.en1,
                                                            maxCharacterCount: null != em ? em : eV,
                                                            allowNewLines: !0,
                                                            'aria-describedby': eb,
                                                            onChange: en,
                                                            onResize: e7,
                                                            onBlur: es,
                                                            onFocus: ec,
                                                            onKeyDown: eu,
                                                            onSubmit: eQ,
                                                            onTab: e8,
                                                            onEnter: e5,
                                                            onMoveSelection: e6,
                                                            onSelectionChanged: eK,
                                                            onMaybeShowAutocomplete: e0,
                                                            onHideAutocomplete: e1,
                                                            promptToUpload: ep,
                                                            fontSize: ez,
                                                            spellcheckEnabled: eW,
                                                            canOnlyUseTextCommands: !1,
                                                            'aria-labelledby': e_
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)('div', {
                                            className: X.attachmentsContainer,
                                            children: (0, r.jsx)(V.Z, {
                                                channelId: k.id,
                                                type: G,
                                                canAttachFiles: eB,
                                                ignoreFile: null == eP ? void 0 : eP.name,
                                                smallAttachments: !0
                                            })
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)('div', { className: X.divider }),
                            (0, r.jsxs)('div', {
                                className: X.footer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: X.footerPart,
                                        children: [
                                            (0, r.jsx)(el, { channel: k }),
                                            (0, r.jsx)(F.Z, {
                                                type: U.Ie.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eU,
                                                channel: k,
                                                handleSubmit: eJ,
                                                isEmpty: 0 === p.trim().length,
                                                showAllButtons: !0
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: X.footerPart,
                                        children: (0, r.jsx)('div', {
                                            ref: tu,
                                            className: X.sendButtonContainer,
                                            onMouseEnter: tf,
                                            onMouseLeave: tm,
                                            children: (0, r.jsx)(h.yRy, {
                                                targetElementRef: tu,
                                                renderPopout: () =>
                                                    (0, r.jsx)(er, {
                                                        channelId: k.id,
                                                        canCreateThread: eY
                                                    }),
                                                shouldShow: td,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: 'top',
                                                align: 'right',
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        h.zxk,
                                                        $(J({}, e), {
                                                            onClick: () => {
                                                                eQ(''.concat(eS.length > 0 ? '# '.concat(eS, '\n') : '').concat(p));
                                                            },
                                                            disabled: 0 === p.length && 0 === eS.length,
                                                            size: 'sm',
                                                            'aria-label': K.intl.string(K.t.TXNS7e),
                                                            innerClassName: X.sendButton,
                                                            text: (0, r.jsxs)('div', {
                                                                className: X.sendButtonContents,
                                                                children: [
                                                                    (0, r.jsx)(h.Text, {
                                                                        variant: 'text-sm/semibold',
                                                                        color: 'always-white',
                                                                        children: K.intl.string(K.t.TXNS7e)
                                                                    }),
                                                                    (0, r.jsxs)('div', {
                                                                        className: X.sendButtonIcons,
                                                                        children: [
                                                                            (0, r.jsx)(h.Uuj, {
                                                                                size: 'xs',
                                                                                color: 'white'
                                                                            }),
                                                                            eY && eZ
                                                                                ? (0, r.jsx)(h.or_, {
                                                                                      size: 'xxs',
                                                                                      color: 'white',
                                                                                      className: X.subIcon
                                                                                  })
                                                                                : null
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    )
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(x.Z, {
                                targetRef: eN,
                                ref: e$,
                                channel: k,
                                canMentionRoles: eh,
                                canMentionChannels: ef,
                                useNewSlashCommands: eH,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: p,
                                focused: q,
                                expressionPickerView: e4,
                                type: G,
                                editorRef: ew,
                                onSendMessage: eQ,
                                onSendSticker: () => {},
                                onVisibilityChange: te,
                                editorHeight: e3,
                                setValue: (e, t) => (null == en ? void 0 : en(null, e, t)),
                                position: eC
                            }),
                            ex
                        ]
                    }),
                    e9
                        ? null
                        : (0, r.jsx)(E.Z, {
                              positionTargetRef: eN,
                              type: G,
                              onSelectGIF: tr,
                              onSelectEmoji: tn,
                              onSelectSticker: ti,
                              channel: k,
                              closeOnModalOuterClick: ej,
                              parentModalKey: eO,
                              position: 'top',
                              align: 'right',
                              positionLayerClassName: Q.expressionPickerPositionLayer
                          })
                ]
            })
        });
    })
);
function er(e) {
    var t, n;
    let { channelId: i, canCreateThread: l } = e,
        a = v.Z.useField('channelDrafts')[i],
        o = null == (t = null == a ? void 0 : a.createThread) || t,
        s = null == (n = null == a ? void 0 : a.publish) || n;
    return (0, r.jsxs)(h.v2r, {
        'aria-label': K.intl.string(K.t['9WnJys']),
        navId: 'send-announcement-options',
        onClose: z.dG4,
        onSelect: z.dG4,
        children: [
            (0, r.jsx)(h.S89, {
                id: 'create-thread',
                label: K.intl.string(K.t.rBIGBA),
                checked: l && o,
                disabled: !l,
                action: () => {
                    (0, v.c)(i, { createThread: !o });
                }
            }),
            (0, r.jsx)(h.S89, {
                id: 'send-and-publish',
                label: K.intl.string(K.t['MFGE5+']),
                checked: s,
                action: () => {
                    (0, v.c)(i, { publish: !s });
                }
            })
        ]
    });
}
function ei(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [l, a] = i.useState();
    i.useEffect(() => {
        if (null == t || !1 === ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return (
            a(e),
            () => {
                (a(void 0), URL.revokeObjectURL(e));
            }
        );
    }, [t]);
    let [o, s] = i.useState(!1),
        c = i.useCallback(() => {
            s(!0);
        }, []),
        u = i.useCallback(() => {
            s(!1);
        }, []);
    return null == l
        ? null
        : (0, r.jsxs)('div', {
              onMouseEnter: c,
              onMouseLeave: u,
              className: X.heroImageWrapper,
              'aria-hidden': !0,
              children: [
                  (0, r.jsx)('img', {
                      src: l,
                      alt: K.intl.string(K.t['2ePvR0']),
                      className: X.heroImage
                  }),
                  o
                      ? (0, r.jsx)(O.ZP, {
                            className: X.heroOverlay,
                            children: (0, r.jsx)(G.Z, {
                                tooltip: K.intl.string(K.t.VjC219),
                                onClick: n,
                                dangerous: !0,
                                children: (0, r.jsx)(h.XHJ, {})
                            })
                        })
                      : null
              ]
          });
}
function el(e) {
    let { channel: t } = e;
    return (0, r.jsx)(S.Z, {
        'aria-label': K.intl.string(K.t['/IBYAg']),
        className: X.attachButton,
        size: 'icon',
        color: 'transparent',
        look: 'blank',
        onChange: (e) => {
            ((0, k.d)(e.currentTarget.files, t, A.d.ChannelMessage, { requireConfirm: !0 }), (e.currentTarget.value = null));
        },
        children: (0, r.jsx)(h.xD0, {
            size: 'custom',
            width: 20,
            height: 20,
            color: p.Z.colors.INTERACTIVE_NORMAL
        })
    });
}
function ea(e) {
    let { channel: t, onImageUploaded: n, onFocus: l } = e,
        a = i.useRef(null),
        o = async (e, r) => {
            let i = await (0, M.Bo)(e, r.name, r.type),
                l = {
                    id: (0, u.Z)(),
                    file: i,
                    platform: g.ow.WEB,
                    isThumbnail: !1
                };
            (f.Z.addFile({
                file: l,
                channelId: t.id,
                draftType: A.d.ChannelMessage
            }),
                n(i));
        },
        [s, c] = i.useState(!1),
        d = i.useCallback(() => {
            c(!0);
        }, []),
        m = i.useCallback(() => {
            c(!1);
        }, []);
    return (0, r.jsx)(h.DY3, {
        text: K.intl.string(K.t['/IBYAg']),
        position: 'top',
        className: X.heroImageButton,
        children: (0, r.jsxs)(h.P3F, {
            className: X.heroImageButton,
            onMouseOver: d,
            onMouseOut: m,
            onFocus: l,
            children: [
                (0, r.jsx)(I.ZP, {
                    ref: a,
                    onChange: o,
                    'aria-hidden': !0,
                    tabIndex: -1,
                    maxFileSizeBytes: q.B,
                    onFileSizeError: () => (0, P.Z)(q.B)
                }),
                (0, r.jsx)(h.FmF, {
                    size: 'md',
                    color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL
                })
            ]
        })
    });
}
