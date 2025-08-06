(n.d(t, { Z: () => es }), n(704826), n(35282), n(539854), n(388685), n(781311), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(66546),
    u = n(772848),
    d = n(442837),
    f = n(692547),
    _ = n(481060),
    p = n(166459),
    h = n(911969),
    m = n(476326),
    g = n(607070),
    E = n(100527),
    b = n(906732),
    y = n(998698),
    O = n(326133),
    v = n(507366),
    I = n(570220),
    T = n(951394),
    S = n(805680),
    A = n(374794),
    N = n(884858),
    C = n(813197),
    w = n(849522),
    R = n(665906),
    P = n(695346),
    D = n(703558),
    L = n(398327),
    x = n(117530),
    k = n(956664),
    j = n(358085),
    M = n(127654),
    U = n(746877),
    G = n(541716),
    B = n(667829),
    Z = n(258696),
    F = n(893718),
    V = n(273031),
    H = n(303628),
    Y = n(981631),
    W = n(761652),
    K = n(224837),
    z = n(200299),
    q = n(388032),
    $ = n(345782),
    X = n(302195);
function Q(e, t, n) {
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
                Q(e, t, n[t]);
            }));
    }
    return e;
}
function ee(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function et(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ee(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let en = 140;
function er(e, t, n) {
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
                var i, a;
                return !!(!n && (null == (i = t.current) ? void 0 : i.onMoveSelection(r))) || (null == (a = e.current) ? void 0 : a.onMoveSelection(r)) || !1;
            },
            [n]
        )
    };
}
function ei(e, t) {
    let n = e.startsWith('attachment://'),
        r = e;
    if (n) {
        let n = e.slice(13);
        r = t ? 'attachment://SPOILER_'.concat(ea(n)) : e;
    }
    return {
        media: {
            url: r,
            proxyUrl: r,
            loadingState: h.f.UNKNOWN,
            flags: 0
        },
        description: e,
        spoiler: t
    };
}
function ea(e) {
    return null == e ? 'unnamed_file' : e.replace(/\s/g, '_');
}
function eo(e, t) {
    var n, a, s, u;
    let { textValue: f, richValue: m, className: T, id: A, required: N, disabled: C, accessibilityLabel: k, channel: M, type: V, focused: z, onChange: Q, onResize: ee, onBlur: eo, onFocus: es, onKeyDown: ef, onSubmit: e_, promptToUpload: ep, canMentionRoles: eh, canMentionChannels: em, maxCharacterCount: eg, placeholder: eE, 'aria-describedby': eb, 'aria-labelledby': ey, setEditorRef: eO, autoCompletePosition: ev, children: eI, disableThemedBackground: eT = !1, emojiPickerCloseOnModalOuterClick: eS, parentModalKey: eA } = e,
        eN = v.Z.useField('channelDrafts')[M.id],
        eC = null != (a = null == eN ? void 0 : eN.title) ? a : '',
        ew = null == eN ? void 0 : eN.heroFile,
        eR = null == (s = null == eN ? void 0 : eN.publish) || s,
        eP = null == (u = null == eN ? void 0 : eN.createThread) || u;
    l()(null != V, 'chat input type must be set');
    let { analyticsLocations: eD } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA),
        eL = (0, F.qz)(t),
        ex = i.useRef(null),
        ek = i.useRef(null),
        ej = i.useRef(null),
        eM = i.useRef(null);
    null == eO || eO(ek.current);
    let { activeCommand: eU } = (0, d.cj)([y.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = V.commands) ? void 0 : e.enabled) ? y.Z.getActiveCommand(M.id) : null,
                activeCommandSection: (null == (t = V.commands) ? void 0 : t.enabled) ? y.Z.getActiveCommandSection(M.id) : null
            };
        }),
        { isLurking: eG, isPendingMember: eB, disabled: eZ, canAttachFiles: eF, canEveryoneSendMessages: eV } = (0, F.TE)(M, V, eU, C),
        eH = !P.dN.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
        eY = !eH || !(null == (n = V.commands) ? void 0 : n.enabled) || !z || f !== W.GI,
        eW = (0, w.Z)(),
        { fontSize: eK } = (0, d.cj)([g.Z], () => ({
            fontSize: g.Z.fontSize,
            isSubmitButtonEnabled: g.Z.isSubmitButtonEnabled
        })),
        ez = (0, d.e7)([L.Z], () => L.Z.isEnabled()),
        eq = (0, R.NE)(M);
    (0, F.hJ)(V, eZ);
    let { eventEmitter: e$, handleEditorSelectionChanged: eX } = (0, F.x2)(ek, f, m),
        eQ = i.useCallback(
            (e) => {
                var t;
                let n = [];
                (null != ew &&
                    n.push({
                        type: h.re.MEDIA_GALLERY,
                        items: [ei('attachment://'.concat(ea(ew.name)), !1)],
                        id: ''.concat(K.Vm)
                    }),
                    e.value.length > 0 &&
                        n.push({
                            type: h.re.TEXT_DISPLAY,
                            content: e.value,
                            id: ''.concat(K.Kb)
                        }));
                let r = x.Z.getUploads(M.id, D.d.ChannelMessage),
                    i = r.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == ew ? void 0 : ew.name)),
                    a = r.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == ew ? void 0 : ew.name)),
                    o = i.map((e) => ei('attachment://'.concat(ea(e.filename)), !1));
                return (
                    o.length > 0 &&
                        n.push({
                            type: h.re.MEDIA_GALLERY,
                            items: o,
                            id: ''.concat(K.m2)
                        }),
                    a.forEach((e, t) => {
                        n.push({
                            type: h.re.FILE,
                            file: ei('attachment://'.concat(ea(e.filename)), !1).media,
                            id: ''.concat(K.kn + t),
                            name: ea(e.filename),
                            size: null
                        });
                    }),
                    (0, v.c)(M.id, {
                        title: '',
                        heroFile: null
                    }),
                    null == (t = ek.current) || t.blur(),
                    e_(
                        et(J({}, e), {
                            components: n,
                            announcementSendOptions: {
                                createThread: eq && eP,
                                threadName: eC.length > 0 ? eC : q.intl.string(q.t['7Xm5QE']),
                                publish: eR
                            }
                        })
                    )
                );
            },
            [e_, eC, ew, M.id, eP, eR, eq]
        ),
        { submit: eJ, handleSubmit: e0 } = (0, F.bL)(eQ, V, ek, eM, M.id),
        { autocompleteRef: e1, handleMaybeShowAutocomplete: e2, handleHideAutocomplete: e3 } = (0, F.jx)(),
        e5 = i.useCallback(() => {
            var e;
            return null == eM || null == (e = eM.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: e4, handleResize: e6 } = (0, F.oR)(ee),
        { handleTab: e8, handleEnter: e7, handleMoveSelection: e9 } = er(e1, ex, eY),
        { expressionPickerView: te, shouldHideExpressionPicker: tt, handleAutocompleteVisibilityChange: tn, handleOuterClick: tr } = (0, F.iV)(V, e$, ek),
        ti = (0, F.ae)(ek),
        ta = (0, F.Sg)(eJ, V, ek),
        to = (0, F.O1)({
            editorRef: ek,
            disabled: eZ,
            textValue: f,
            channelId: M.id,
            chatInputType: V,
            submit: eQ
        });
    (0, U.S)(e$, M.guild_id, M.id);
    let [ts, tl] = i.useState(!1),
        tc = z || ts || f.length > 0 || null != ew || eC.length > 0,
        { editorHeaderHeight: tu, paddingTop: td } = (0, _.q_F)({
            editorHeaderHeight: 122 * !!tc,
            paddingTop: 16 * !!tc,
            config: {
                tension: 120,
                friction: 15,
                clamp: !0
            }
        }),
        tf = i.useRef(null),
        [t_, tp] = i.useState(!1),
        th = i.useRef(!1),
        tm = i.useCallback(() => {
            th.current = !0;
            let e = setTimeout(() => {
                th.current && tp(!0);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        tg = i.useCallback(() => {
            th.current = !1;
            let e = setTimeout(() => {
                th.current || tp(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        tE = i.useCallback(() => {
            var e;
            if (null == ew) return;
            let t = null == (e = x.Z.getUploads(M.id, V.drafts.type).find((e) => e.filename === ew.name)) ? void 0 : e.id;
            (null != t && p.Z.remove(M.id, t, D.d.ChannelMessage), (0, v.c)(M.id, { heroFile: null }));
        }, [M.id, ew, V.drafts.type]);
    return (0, r.jsx)(I.f6, {
        value: e$,
        children: (0, r.jsxs)(b.Gt, {
            value: eD,
            children: [
                (0, r.jsxs)('div', {
                    ref: eL,
                    className: o()(T, X.channelTextArea),
                    onMouseDown: tr,
                    children: [
                        (0, r.jsx)('div', {
                            ref: ej,
                            onScroll: e5,
                            className: o()(X.announcementScrollableContainer, { [X.themedBackground]: !eT }),
                            children: (0, r.jsxs)('div', {
                                className: o()(X.inner, $.inner),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: $.body,
                                        children: [
                                            (0, r.jsxs)(c.animated.div, {
                                                className: $.headerInput,
                                                style: {
                                                    height: tu,
                                                    paddingTop: td
                                                },
                                                children: [
                                                    null != ew
                                                        ? (0, r.jsx)(ec, {
                                                              file: ew,
                                                              onRemoveHeroImage: tE
                                                          })
                                                        : null,
                                                    null != ew
                                                        ? null
                                                        : (0, r.jsx)(ed, {
                                                              channel: M,
                                                              onImageUploaded: (e) => (0, v.c)(M.id, { heroFile: e }),
                                                              onFocus: () => tl(!0)
                                                          }),
                                                    (0, r.jsx)('input', {
                                                        onFocus: () => tl(!0),
                                                        onBlur: () => tl(!1),
                                                        maxLength: en,
                                                        className: $.titleInput,
                                                        placeholder: q.intl.string(q.t.Z8fYjI),
                                                        value: eC,
                                                        onChange: (e) => (0, v.c)(M.id, { title: e.target.value })
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)('div', {
                                                className: $.inputWrapper,
                                                children: (0, r.jsx)(_.tEY, {
                                                    ringTarget: eL,
                                                    ringClassName: X.focusRing,
                                                    children: (0, r.jsx)(B.Z, {
                                                        ref: ek,
                                                        id: A,
                                                        focused: z,
                                                        useSlate: eH,
                                                        textValue: f,
                                                        richValue: m,
                                                        disabled: eZ,
                                                        placeholder: eE,
                                                        required: N,
                                                        accessibilityLabel: k,
                                                        isPreviewing: (eG || eB) && eV,
                                                        channel: M,
                                                        type: G.Ie.CREATE_ANNOUNCEMENT_POST,
                                                        canPasteFiles: eF,
                                                        uploadPromptCharacterCount: Y.en1,
                                                        maxCharacterCount: null != eg ? eg : eW,
                                                        allowNewLines: !0,
                                                        'aria-describedby': eb,
                                                        onChange: Q,
                                                        onResize: e6,
                                                        onBlur: eo,
                                                        onFocus: es,
                                                        onKeyDown: ef,
                                                        onSubmit: eJ,
                                                        onTab: e8,
                                                        onEnter: e7,
                                                        onMoveSelection: e9,
                                                        onSelectionChanged: eX,
                                                        onMaybeShowAutocomplete: e2,
                                                        onHideAutocomplete: e3,
                                                        promptToUpload: ep,
                                                        fontSize: eK,
                                                        spellcheckEnabled: ez,
                                                        canOnlyUseTextCommands: !1,
                                                        'aria-labelledby': ey
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: $.attachmentsContainer,
                                        children: (0, r.jsx)(H.Z, {
                                            channelId: M.id,
                                            type: V,
                                            canAttachFiles: eF,
                                            ignoreFile: null == ew ? void 0 : ew.name,
                                            smallAttachments: !0
                                        })
                                    })
                                ]
                            })
                        }),
                        (0, r.jsx)('div', { className: $.divider }),
                        (0, r.jsxs)('div', {
                            className: $.footer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: $.footerPart,
                                    children: [
                                        (0, r.jsx)(eu, { channel: M }),
                                        (0, r.jsx)(Z.Z, {
                                            type: G.Ie.CREATE_ANNOUNCEMENT_POST,
                                            disabled: eZ,
                                            channel: M,
                                            handleSubmit: e0,
                                            isEmpty: 0 === f.trim().length,
                                            showAllButtons: !0
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', {
                                    className: $.footerPart,
                                    children: (0, r.jsx)('div', {
                                        ref: tf,
                                        className: $.sendButtonContainer,
                                        onMouseEnter: tm,
                                        onMouseLeave: tg,
                                        children: (0, r.jsx)(_.yRy, {
                                            targetElementRef: tf,
                                            renderPopout: () =>
                                                (0, r.jsx)(el, {
                                                    channelId: M.id,
                                                    canCreateThread: eq
                                                }),
                                            shouldShow: t_,
                                            autoInvert: !0,
                                            nudgeAlignIntoViewport: !0,
                                            position: 'top',
                                            align: 'right',
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    _.zxk,
                                                    et(J({}, e), {
                                                        onClick: () => {
                                                            eJ(''.concat(eC.length > 0 ? '# '.concat(eC, '\n') : '').concat(f));
                                                        },
                                                        disabled: 0 === f.length && 0 === eC.length,
                                                        size: 'sm',
                                                        'aria-label': q.intl.string(q.t.TXNS7e),
                                                        innerClassName: $.sendButton,
                                                        text: (0, r.jsxs)('div', {
                                                            className: $.sendButtonContents,
                                                            children: [
                                                                (0, r.jsx)(_.Text, {
                                                                    variant: 'text-sm/semibold',
                                                                    color: 'always-white',
                                                                    children: q.intl.string(q.t.TXNS7e)
                                                                }),
                                                                (0, r.jsxs)('div', {
                                                                    className: $.sendButtonIcons,
                                                                    children: [
                                                                        (0, r.jsx)(_.Uuj, {
                                                                            size: 'xs',
                                                                            color: 'white'
                                                                        }),
                                                                        eq && eP
                                                                            ? (0, r.jsx)(_.or_, {
                                                                                  size: 'xxs',
                                                                                  color: 'white',
                                                                                  className: $.subIcon
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
                        (0, r.jsx)(O.Z, {
                            targetRef: eL,
                            ref: e1,
                            channel: M,
                            canMentionRoles: eh,
                            canMentionChannels: em,
                            useNewSlashCommands: eH,
                            canOnlyUseTextCommands: !1,
                            canSendStickers: !0,
                            textValue: f,
                            focused: z,
                            expressionPickerView: te,
                            type: V,
                            editorRef: ek,
                            onSendMessage: eJ,
                            onSendSticker: () => {},
                            onVisibilityChange: tn,
                            editorHeight: e4,
                            setValue: (e, t) => (null == Q ? void 0 : Q(null, e, t)),
                            position: ev
                        }),
                        eI
                    ]
                }),
                tt
                    ? null
                    : (0, r.jsx)(S.Z, {
                          positionTargetRef: eL,
                          type: V,
                          onSelectGIF: ta,
                          onSelectEmoji: ti,
                          onSelectSticker: to,
                          channel: M,
                          closeOnModalOuterClick: eS,
                          parentModalKey: eA,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: X.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
let es = i.memo(i.forwardRef(eo));
function el(e) {
    var t, n;
    let { channelId: i, canCreateThread: a } = e,
        o = v.Z.useField('channelDrafts')[i],
        s = null == (t = null == o ? void 0 : o.createThread) || t,
        l = null == (n = null == o ? void 0 : o.publish) || n;
    return (0, r.jsxs)(_.v2r, {
        'aria-label': q.intl.string(q.t['9WnJys']),
        navId: 'send-announcement-options',
        onClose: Y.dG4,
        onSelect: Y.dG4,
        children: [
            (0, r.jsx)(_.S89, {
                id: 'create-thread',
                label: q.intl.string(q.t.rBIGBA),
                checked: a && s,
                disabled: !a,
                action: () => {
                    (0, v.c)(i, { createThread: !s });
                }
            }),
            (0, r.jsx)(_.S89, {
                id: 'send-and-publish',
                label: q.intl.string(q.t['MFGE5+']),
                checked: l,
                action: () => {
                    (0, v.c)(i, { publish: !l });
                }
            })
        ]
    });
}
function ec(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [a, o] = i.useState();
    i.useEffect(() => {
        if (null == t || !1 === ['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return (
            o(e),
            () => {
                (o(void 0), URL.revokeObjectURL(e));
            }
        );
    }, [t]);
    let [s, l] = i.useState(!1),
        c = i.useCallback(() => {
            l(!0);
        }, []),
        u = i.useCallback(() => {
            l(!1);
        }, []);
    return null == a
        ? null
        : (0, r.jsxs)('div', {
              onMouseEnter: c,
              onMouseLeave: u,
              className: $.heroImageWrapper,
              'aria-hidden': !0,
              children: [
                  (0, r.jsx)('img', {
                      src: a,
                      alt: q.intl.string(q.t['2ePvR0']),
                      className: $.heroImage
                  }),
                  s
                      ? (0, r.jsx)(T.ZP, {
                            className: $.heroOverlay,
                            children: (0, r.jsx)(V.Z, {
                                tooltip: q.intl.string(q.t.VjC219),
                                onClick: n,
                                dangerous: !0,
                                children: (0, r.jsx)(_.XHJ, {})
                            })
                        })
                      : null
              ]
          });
}
function eu(e) {
    let { channel: t } = e,
        n = (e) => {
            ((0, M.d)(e.currentTarget.files, t, D.d.ChannelMessage, {
                requireConfirm: !0,
                origin: 'file_picker'
            }),
                (e.currentTarget.value = null));
        };
    return (0, r.jsx)(A.Z, {
        'aria-label': q.intl.string(q.t['/IBYAg']),
        className: $.attachButton,
        size: 'icon',
        color: 'transparent',
        look: 'blank',
        onChange: n,
        children: (0, r.jsx)(_.xD0, {
            size: 'custom',
            width: 20,
            height: 20,
            color: f.Z.colors.INTERACTIVE_NORMAL
        })
    });
}
function ed(e) {
    let { channel: t, onImageUploaded: n, onFocus: a } = e,
        o = i.useRef(null),
        s = async (e, r) => {
            let i = await (0, k.Bo)(e, r.name, r.type),
                a = {
                    id: (0, u.Z)(),
                    file: i,
                    platform: m.ow.WEB,
                    isThumbnail: !1,
                    origin: 'file_picker'
                };
            (p.Z.addFile({
                file: a,
                channelId: t.id,
                draftType: D.d.ChannelMessage
            }),
                n(i));
        },
        [l, c] = i.useState(!1),
        d = i.useCallback(() => {
            c(!0);
        }, []),
        h = i.useCallback(() => {
            c(!1);
        }, []);
    return (0, r.jsx)(_.DY3, {
        text: q.intl.string(q.t['/IBYAg']),
        position: 'top',
        className: $.heroImageButton,
        children: (0, r.jsxs)(_.P3F, {
            className: $.heroImageButton,
            onMouseOver: d,
            onMouseOut: h,
            onFocus: a,
            children: [
                (0, r.jsx)(C.ZP, {
                    ref: o,
                    onChange: s,
                    'aria-hidden': !0,
                    tabIndex: -1,
                    maxFileSizeBytes: z.B,
                    onFileSizeError: () => (0, N.Z)(z.B)
                }),
                (0, r.jsx)(_.FmF, {
                    size: 'md',
                    color: l ? f.Z.colors.INTERACTIVE_ACTIVE : f.Z.colors.INTERACTIVE_NORMAL
                })
            ]
        })
    });
}
