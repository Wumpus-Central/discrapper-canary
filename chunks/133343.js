"use strict";
n.d(t, {
    Ay: () => eL,
    C: () => eT,
    HG: () => eS,
    L0: () => eC,
    MD: () => eb,
    NO: () => eI,
    N_: () => ey,
    Sk: () => eR,
    Vu: () => eA,
    Zx: () => eg,
    ck: () => eO,
    ml: () => eN,
    uW: () => eD,
    v7: () => ev,
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(143236),
    l = n(284009),
    u = n.n(l),
    c = n(942381),
    d = n(607399),
    _ = n(136722),
    f = n(311907),
    p = n(192308),
    h = n(187322),
    E = n(511274),
    m = n(465532),
    g = n(765671),
    A = n(775602),
    I = n(793574),
    T = n(688810),
    S = n(177640),
    y = n(989837),
    N = n(667889),
    v = n(861382),
    C = n(391848),
    O = n(186226),
    R = n(875163),
    b = n(31498),
    D = n(598071),
    L = n(151271),
    w = n(834755),
    M = n(256265),
    P = n(380544),
    x = n(857071),
    k = n(135621),
    U = n(235430),
    G = n(931664),
    F = n(631576),
    V = n(378058),
    B = n(406704),
    H = n(253932),
    j = n(696451),
    Y = n(576705),
    W = n(309010),
    K = n(638128),
    $ = n(522602),
    z = n(287809),
    q = n(821102),
    X = n(954571),
    Q = n(234320),
    Z = n(203982),
    J = n(488926),
    ee = n(723702),
    et = n(486319),
    en = n(355622),
    er = n(415409),
    ei = n(416379),
    es = n(824842),
    ea = n(612394),
    eo = n(877146),
    el = n(147025),
    eu = n(776384),
    ec = n(171593),
    ed = n(257108),
    e_ = n(135261),
    ef = n(711371),
    ep = n(476739),
    eh = n(652215);
n(827669);
var eE = n(698279),
    em = n(266599);
function eg(e, t, s, a, o) {
    let [l, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, _, f, h, E) => {
                if (l) return;
                u(!0);
                let g = G.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = $.A.getUploads(o, t.drafts.type) ?? [];
                if (null == d && !f && !h && (0, M.xz)(A, o)) {
                    u(!1),
                        (0, p.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49681"),
                                n.e("99011"),
                                n.e("94857"),
                                n.e("82561"),
                                n.e("10730"),
                                n.e("7602"),
                                n.e("22192"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    ...t,
                                    threadId: o,
                                    attachments: A,
                                    sendMessage: () => c(i, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: A,
                    stickers: g,
                    command: d,
                    commandOptionValues: _,
                    isGif: f,
                    gifMetadata: E,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: r } = e,
                        i = (n && t.submit?.clearOnSubmit) ?? !1,
                        l = null != s.current;
                    i &&
                        (o !== W.A.getChannelId()
                            ? m.A.saveDraft(o, "", t.drafts.type)
                            : l && (s.current?.clearValue(), a.current?.hide())),
                        l && (u(!1), (0, L.v8)(), r && s.current?.focus());
                });
            },
            [s, a, e, l, t, o],
        );
    return {
        submitting: l,
        submit: c,
        handleSubmit: i.useCallback(
            (e) => {
                s?.current?.submit(e);
            },
            [s],
        ),
    };
}
function eA(e, t, n) {
    return i.useCallback(
        (r) => {
            if (t === en.oU.CREATE_FORUM_POST || t === en.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(r);
            else {
                let t = {
                    gif_provider: r.provider ?? (0, P.cf)(),
                    load_id: q.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: r.url,
                    gif_id: r.id,
                };
                e(r.url, void 0, void 0, !0, void 0, t);
            }
            (0, L.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function eI(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            null != n && null != i && i.insertEmoji({ emoji: n, willClose: r }), r && (0, L.v8)();
        },
        [e],
    );
}
function eT(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: s, chatInputType: a, submit: o } = e,
        { analyticsLocations: l } = (0, T.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (a === en.oU.CREATE_ANNOUNCEMENT_POST || (0, V.YS)(i, r, s, a.drafts.type)
                    ? ((0, ea.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != G.A.getStickerPreview(s, a.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, F.$x)(s, e, a.drafts.type))
                    : (o({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, L.v8)(),
                t.current?.focus());
        },
        [n, r, s, t, l, o, a],
    );
}
function eS(e) {
    return i.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, L.v8)(), n?.focus();
        },
        [e],
    );
}
function ey(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, L.r$)(eE.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, L.r$)(eE.kx.GIF, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, L.r$)(eE.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, Q.Vo)({ event: eh.jej.TOGGLE_EMOJI_POPOUT, handler: r }),
        (0, Q.Vo)({ event: eh.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, Q.Vo)({ event: eh.jej.TOGGLE_STICKER_PICKER, handler: a });
}
function eN(e, t, n) {
    let [r] = i.useState(() => new o.EventEmitter());
    return (
        i.useEffect(() => {
            r.emit("text-changed", t, n);
        }, [t, n, r]),
        {
            eventEmitter: r,
            handleEditorSelectionChanged: (t) => {
                null != e.current && r.emit("selection-changed", t);
            },
        }
    );
}
function ev() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function eC(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function eO(e) {
    let [t, n] = i.useState(0);
    return {
        editorHeight: t,
        handleResize: i.useCallback(
            (t) => {
                n(t ?? 0), e?.(t);
            },
            [e],
        ),
    };
}
function eR(e, t, n, r) {
    let i = e.getGuildId(),
        s = (0, f.bG)([x.A], () => null != i && x.A.isLurking(i), [i]),
        a = (0, f.bG)([j.Ay, z.default], () => {
            let e = z.default.getCurrentUser();
            return (null != i && null != e ? j.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, f.cf)([Y.A], () => {
            let i = e.isPrivate(),
                s = Y.A.computePermissions(e),
                o = _.zy(s, eh.xBc.CREATE_PUBLIC_THREADS) || _.zy(s, eh.xBc.CREATE_PRIVATE_THREADS),
                l =
                    (!t.permissions?.requireCreateTherads || o) &&
                    (!t.permissions?.requireSendMessages || _.zy(s, eh.xBc.SEND_MESSAGES)),
                u = l && _.zy(s, eh.xBc.ATTACH_FILES),
                c = null != n,
                d = (0, B.UJ)(e);
            return {
                disabled: r || a || (!i && !l) || d,
                canAttachFiles: !0 === t.attachments && (i || a || u || c),
                canCreateThreads: o,
                canEveryoneSendMessages: J.MJ(eh.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, a]);
    return { isLurking: s, isPendingMember: a, ...o };
}
function eb(e, t, n) {
    let [r, s, a] = (0, L.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        o = (0, f.bG)([y.A], () => y.A.shouldShowPopup() && y.A.activeViewType() === e && y.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, L.v8)(e, n);
        },
        [e, n],
    );
    let l = i.useCallback(() => {
            null != r || o || t.current?.handleOuterClick();
        }, [r, o, t]),
        u = null == r || null == s || s !== e || a !== n;
    return { expressionPickerView: r, shouldHideExpressionPicker: u, handleOuterClick: l };
}
let eD = (e, t) => ({
        handleAutocompleteVisibilityChange: i.useCallback(
            (n) => {
                n && (0, L.v8)(e, t);
            },
            [e, t],
        ),
    }),
    eL = i.memo(
        i.forwardRef(function (e, t) {
            let n,
                {
                    textValue: s,
                    richValue: o,
                    className: l,
                    innerClassName: c,
                    editorClassName: _,
                    id: p,
                    required: m,
                    disabled: y,
                    placeholder: M,
                    accessibilityLabel: P,
                    channel: x,
                    type: G,
                    focused: F,
                    error: V,
                    renderAttachButton: B,
                    renderApplicationCommandIcon: j,
                    renderButtons: Y,
                    pendingReply: W,
                    onChange: $,
                    onResize: z,
                    onBlur: q,
                    onFocus: Q,
                    onKeyDown: J,
                    onSubmit: ea,
                    promptToUpload: eE,
                    highlighted: eL,
                    canMentionRoles: ew,
                    canMentionChannels: eM,
                    maxCharacterCount: eP,
                    showRemainingCharsAfterCount: ex,
                    allowNewLines: ek = !0,
                    characterCountClassName: eU,
                    "aria-describedby": eG,
                    "aria-labelledby": eF,
                    setEditorRef: eV,
                    autoCompletePosition: eB,
                    children: eH,
                    disableThemedBackground: ej = !1,
                    emojiPickerCloseOnModalOuterClick: eY,
                    parentModalKey: eW,
                    pendingScheduledMessage: eK,
                    showValueWhenDisabled: e$ = !1,
                } = e;
            u()(null != G, "chat input type must be set");
            let { analyticsLocations: ez } = (0, T.Ay)(I.A.CHANNEL_TEXT_AREA),
                eq = eC(t),
                eX = i.useRef(null),
                eQ = i.useRef(null),
                eZ = i.useRef(null),
                eJ = i.useRef(null),
                e0 = i.useRef(null);
            eV?.(eZ.current);
            let e1 = (0, S.A)(x),
                [e2, e3] = i.useState(!e1);
            (0, g.i4)(eq, (e) => {
                let { width: t } = e;
                return e3(!e1 && (null == t || t > 450));
            });
            let { activeCommand: e6, activeCommandSection: e4 } = (0, f.cf)([v.A], () => ({
                    activeCommand: G.commands?.enabled ? v.A.getActiveCommand(x.id) : null,
                    activeCommandSection: G.commands?.enabled ? v.A.getActiveCommandSection(x.id) : null,
                })),
                {
                    isLurking: e7,
                    isPendingMember: e5,
                    disabled: e8,
                    canAttachFiles: e9,
                    canCreateThreads: te,
                    canEveryoneSendMessages: tt,
                } = eR(x, G, e6, y),
                tn = G.toolbarType === en.O1.STATIC,
                tr = !H.D_.useSetting() && !(0, ee.isAndroidWeb)() && null != window.ResizeObserver,
                ti = !tr || !G.commands?.enabled || !F || "/" !== s,
                ts = (0, k.A)(),
                { fontSize: ta } = (0, f.cf)([A.A], () => ({ fontSize: A.A.fontSize })),
                to = (0, f.bG)([K.A], () => K.A.isEnabled());
            ey(G, e8, x.id);
            let { eventEmitter: tl, handleEditorSelectionChanged: tu } = eN(eZ, s, o),
                tc = i.useRef(s);
            tc.current = s;
            let td = i.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === tc.current && G.commands?.enabled && tl.emit("command-sentinel-typed"),
                            $?.(e, t, n);
                    },
                    [$, G.commands?.enabled, tl],
                ),
                { submitting: t_, submit: tf, handleSubmit: tp } = eg(ea, G, eZ, e0, x.id),
                { autocompleteRef: th, handleMaybeShowAutocomplete: tE, handleHideAutocomplete: tm } = ev(),
                tg = eA(tf, G, eZ),
                tA = eI(eZ),
                tI = eT({ editorRef: eZ, disabled: e8, textValue: s, channelId: x.id, chatInputType: G, submit: ea }),
                tT = i.useCallback(
                    (e, t, n) => {
                        let r = eZ.current;
                        null != e &&
                            null != r &&
                            (X.default.track(eh.HAw.SOUNDMOJI_SELECT, {
                                channel_id: x.id,
                                guild_id: x.guild_id,
                                sound_guild_id: e.guildId,
                                sound_id: e.soundId,
                                source: t,
                            }),
                            r.insertSound(e)),
                            n && (0, L.v8)(),
                            r?.focus();
                    },
                    [eZ, x.id, x.guild_id],
                ),
                tS = eS(eZ),
                ty = i.useCallback(() => e0?.current?.hide(), []),
                { editorHeight: tN, handleResize: tv } = eO(z),
                {
                    handleTab: tC,
                    handleEnter: tO,
                    handleMoveSelection: tR,
                } = ((n = i.useCallback(
                    () => !!(!ti && eX.current?.onTabOrEnter(!1)) || th.current?.onTabOrEnter(!1) || !1,
                    [ti, eX, th],
                )),
                {
                    handleTab: n,
                    handleEnter: i.useCallback(
                        () => !!(!ti && eX.current?.onTabOrEnter(!0)) || th.current?.onTabOrEnter(!0) || !1,
                        [ti, eX, th],
                    ),
                    handleMoveSelection: i.useCallback(
                        (e) => !!(!ti && eX.current?.onMoveSelection(e)) || th.current?.onMoveSelection(e) || !1,
                        [ti, eX, th],
                    ),
                }),
                { expressionPickerView: tb, shouldHideExpressionPicker: tD, handleOuterClick: tL } = eb(G, eZ, x.id),
                { selectedAutocompleteInputType: tw, selectedAutocompleteInputError: tM } = (function (e, t) {
                    let [n, r] = i.useState({
                            selectedAutocompleteInputType: null,
                            selectedAutocompleteInputError: !1,
                        }),
                        s = i.useCallback(() => {
                            let e,
                                n = t.current?.getSlateEditor();
                            null != n && (e = ef.VW.getSelectedParentOfType(n, b.mk)?.[0]),
                                r({
                                    selectedAutocompleteInputType: e?.type ?? null,
                                    selectedAutocompleteInputError: e?.error ?? !1,
                                });
                        }, [t]);
                    return (
                        i.useEffect(
                            () => (
                                e.on("selection-changed", s),
                                e.on("submit-failure", s),
                                s(),
                                () => {
                                    e.off("selection-changed", s), e.on("submit-failure", s);
                                }
                            ),
                            [s, e],
                        ),
                        n
                    );
                })(tl, eZ),
                { handleAutocompleteVisibilityChange: tP } = eD(G, x.id),
                tx = (0, O.A)({ type: G, channelId: x.id }),
                tk = i.useCallback(() => {
                    tl.emit("submit-failure");
                }, [tl]);
            (0, et.R)(tl, x.guild_id, x.id);
            let tU = null != W,
                tG = (e8 && !((e7 || e5) && tt)) || (t_ && G.submit?.useDisabledStylesOnSubmit),
                tF = null;
            null != e6 ? (tF = j?.(e6, e4, em.g$)) : (!e8 || te) && (tF = B?.(tU, em.g$));
            let tV = tr && null != o && !e8 && G.showCharacterCount && null == e6,
                tB = tr && !__OVERLAY__ && null != o && null == e6 && G.toolbarType !== en.O1.NONE && !e8,
                tH = (0, eo.Y)({
                    channel: x,
                    type: G,
                    activeCommand: e6,
                    pendingReply: W,
                    pendingScheduledMessage: eK,
                    selectedAutocompleteInputType: tw,
                    selectedAutocompleteInputError: tM,
                }),
                tj = 0 === s.trim().length,
                tY = null != W ? [eG, ei.i].filter(Boolean).join(" ") : eG,
                tW = G.layout === en.wt.INLINE,
                tK = G.layout === en.wt.FLUSH,
                t$ = (0, r.jsx)("div", { ref: eQ, className: em.BW }),
                tz = tx ? (0, r.jsx)(N.A, { align: "right", positionTargetRef: eQ, channel: x }) : null,
                tq =
                    null != Y
                        ? Y()
                        : (0, r.jsx)(el.A, {
                              type: G,
                              disabled: e8,
                              channel: x,
                              handleSubmit: tp,
                              isEmpty: tj,
                              showAllButtons: e2,
                          }),
                tX = tV
                    ? (0, r.jsx)(ed.A, {
                          type: G,
                          textValue: s,
                          className: eU,
                          maxCharacterCount: eP,
                          showRemainingCharsAfterCount: ex,
                      })
                    : null;
            return (
                i.useEffect(() => {
                    F && Z._.dispatch(eh.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: x.id });
                }, [F, x.id]),
                (0, r.jsx)(D.Sv, {
                    value: tl,
                    children: (0, r.jsxs)(T.f5, {
                        value: ez,
                        children: [
                            tB && tn
                                ? (0, r.jsx)(ep.A, { editorRef: eZ, type: G, channel: x })
                                : tB
                                  ? (0, r.jsx)(e_.A, { ref: e0, editorRef: eZ, containerRef: eJ, options: G.markdown })
                                  : null,
                            (0, r.jsxs)("div", {
                                ref: eq,
                                className: a()(l, {
                                    [em.gM]: !0,
                                    [em.h9]: tG,
                                    [em.mr]: eL,
                                    [em.Wn]: d.Fr,
                                    [em.Ls]: tW,
                                    [em.AH]: tK,
                                    [em.z3]: null != V,
                                }),
                                children: [
                                    tW || tK ? null : (0, r.jsx)(eo.A, { bars: tH }),
                                    (0, r.jsxs)("div", {
                                        ref: eJ,
                                        onScroll: ty,
                                        className: a()(c, {
                                            [em.xx]: !0,
                                            [em.k6]: !ej,
                                            [em.Ri]: tH.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, r.jsx)(es.A, { channelId: x.id, chatInputType: G }),
                                            G.hideAttachmentArea
                                                ? null
                                                : (0, r.jsx)(ec.A, { channelId: x.id, type: G, canAttachFiles: e9 }),
                                            (0, r.jsxs)("div", {
                                                className: a()(em.vW, {
                                                    [em.BF]: tG,
                                                    [em.RL]:
                                                        G !== en.oU.EDIT && (null != tF || (tG && null == tF) || e7),
                                                    [em.fk]: G === en.oU.THREAD_CREATION,
                                                    [em.TZ]:
                                                        G === en.oU.CREATE_FORUM_POST ||
                                                        G === en.oU.FORWARD_MESSAGE_INPUT,
                                                    [em.$i]: G === en.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tL,
                                                children: [
                                                    tz,
                                                    tF,
                                                    (0, r.jsx)(h.vN, {
                                                        ringTarget: eq,
                                                        ringClassName: em.Rg,
                                                        children: (0, r.jsx)(er.A, {
                                                            ref: eZ,
                                                            id: p,
                                                            focused: F,
                                                            useSlate: tr,
                                                            textValue: s,
                                                            richValue: o,
                                                            disabled: e8,
                                                            placeholder: M,
                                                            required: m,
                                                            accessibilityLabel: P,
                                                            isPreviewing: (e7 || e5) && tt,
                                                            channel: x,
                                                            type: G,
                                                            canPasteFiles: e9,
                                                            uploadPromptCharacterCount: eh.CS1,
                                                            maxCharacterCount: eP ?? ts,
                                                            allowNewLines: ek,
                                                            "aria-describedby": tY,
                                                            onChange: td,
                                                            onResize: tv,
                                                            onBlur: q,
                                                            onFocus: Q,
                                                            onKeyDown: J,
                                                            onSubmit: tf,
                                                            onSubmitFailure: tk,
                                                            onTab: tC,
                                                            onEnter: tO,
                                                            onMoveSelection: tR,
                                                            onSelectionChanged: tu,
                                                            onMaybeShowAutocomplete: tE,
                                                            onHideAutocomplete: tm,
                                                            promptToUpload: eE,
                                                            fontSize: ta,
                                                            spellcheckEnabled: to,
                                                            canOnlyUseTextCommands: tU,
                                                            className: a()(
                                                                {
                                                                    [em.QI]: G === en.oU.THREAD_CREATION,
                                                                    [em.AV]: G === en.oU.PROFILE_BIO_INPUT,
                                                                    [em.GR]: G === en.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                _,
                                                            ),
                                                            "aria-labelledby": eF,
                                                            showValueWhenDisabled: e$,
                                                        }),
                                                    }),
                                                    tq,
                                                    t$,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(eu.a, { channel: x, type: G, pendingScheduledMessage: eK }),
                                    ti ? null : (0, r.jsx)(C.A, { ref: eX, channel: x, canOnlyUseTextCommands: tU }),
                                    (0, r.jsx)(R.A, {
                                        ref: th,
                                        channel: x,
                                        canMentionRoles: ew,
                                        canMentionChannels: eM,
                                        useNewSlashCommands: tr,
                                        canOnlyUseTextCommands: tU,
                                        canSendStickers: G.stickers?.allowSending,
                                        canSendSoundmoji: G.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: F,
                                        expressionPickerView: tb,
                                        type: G,
                                        targetRef: eq,
                                        editorRef: eZ,
                                        onSendMessage: tf,
                                        onSendSticker: tI,
                                        onVisibilityChange: tP,
                                        editorScrollerRef: eJ,
                                        editorHeight: tN,
                                        barsHeight: 40 * tH.floating.length,
                                        setValue: (e, t) => td?.(null, e, t),
                                        position: eB,
                                    }),
                                    (0, r.jsx)(U.A, { textValue: s, editorHeight: tN, channelId: x.id }),
                                    tX,
                                    eH,
                                ],
                            }),
                            (0, r.jsx)(E.U, { error: V }),
                            tD
                                ? null
                                : (0, r.jsx)(w.A, {
                                      positionTargetRef: eq,
                                      type: G,
                                      onSelectGIF: tg,
                                      onSelectEmoji: tA,
                                      onSelectSticker: tI,
                                      onSelectSound: tT,
                                      onSelectKaomoji: tS,
                                      channel: x,
                                      closeOnModalOuterClick: eY,
                                      parentModalKey: eW,
                                      position: "top",
                                      align: "right",
                                      positionLayerClassName: em.BD,
                                  }),
                        ],
                    }),
                })
            );
        }),
    );
