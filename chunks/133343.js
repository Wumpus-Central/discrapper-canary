"use strict";
n.d(t, {
    Ay: () => ew,
    C: () => eE,
    HG: () => eI,
    L0: () => eb,
    MD: () => eT,
    NO: () => eC,
    N_: () => ev,
    Sk: () => ej,
    Vu: () => eA,
    Zx: () => ex,
    ck: () => eN,
    ml: () => ey,
    uW: () => eR,
    v7: () => eS,
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(143236),
    o = n(284009),
    c = n.n(o),
    u = n(942381),
    d = n(607399),
    h = n(136722),
    m = n(311907),
    p = n(192308),
    f = n(187322),
    g = n(511274),
    _ = n(465532),
    x = n(765671),
    A = n(775602),
    C = n(793574),
    E = n(688810),
    I = n(177640),
    v = n(989837),
    y = n(667889),
    S = n(861382),
    b = n(391848),
    N = n(186226),
    j = n(875163),
    T = n(31498),
    R = n(598071),
    w = n(151271),
    L = n(834755),
    M = n(256265),
    O = n(380544),
    k = n(857071),
    P = n(135621),
    D = n(235430),
    U = n(931664),
    V = n(631576),
    G = n(378058),
    F = n(406704),
    B = n(253932),
    H = n(696451),
    W = n(576705),
    K = n(309010),
    z = n(638128),
    Z = n(522602),
    q = n(287809),
    Y = n(821102),
    J = n(954571),
    $ = n(234320),
    X = n(203982),
    Q = n(488926),
    ee = n(723702),
    et = n(486319),
    en = n(355622),
    ei = n(415409),
    el = n(416379),
    es = n(824842),
    er = n(612394),
    ea = n(877146),
    eo = n(147025),
    ec = n(776384),
    eu = n(171593),
    ed = n(257108),
    eh = n(135261),
    em = n(711371),
    ep = n(476739),
    ef = n(652215);
n(827669);
var eg = n(698279),
    e_ = n(266599);
function ex(e, t, s, r, a) {
    let [o, c] = l.useState(!1),
        u = l.useCallback(
            (l, d, h, m, f, g) => {
                if (o) return;
                c(!0);
                let x = U.A.getStickerPreview(a, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = Z.A.getUploads(a, t.drafts.type) ?? [];
                if (null == d && !m && !f && (0, M.xz)(A, a)) {
                    c(!1),
                        (0, p.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49681"),
                                n.e("99011"),
                                n.e("94857"),
                                n.e("82561"),
                                n.e("10730"),
                                n.e("7602"),
                                n.e("9314"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    threadId: a,
                                    attachments: A,
                                    sendMessage: () => u(l, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: l,
                    uploads: A,
                    stickers: x,
                    command: d,
                    commandOptionValues: h,
                    isGif: m,
                    gifMetadata: g,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: i } = e,
                        l = (n && t.submit?.clearOnSubmit) ?? !1,
                        o = null != s.current;
                    l &&
                        (a !== K.A.getChannelId()
                            ? _.A.saveDraft(a, "", t.drafts.type)
                            : o && (s.current?.clearValue(), r.current?.hide())),
                        o && (c(!1), (0, w.v8)(), i && s.current?.focus());
                });
            },
            [s, r, e, o, t, a],
        );
    return {
        submitting: o,
        submit: u,
        handleSubmit: l.useCallback(
            (e) => {
                s?.current?.submit(e);
            },
            [s],
        ),
    };
}
function eA(e, t, n) {
    return l.useCallback(
        (i) => {
            if (t === en.oU.CREATE_FORUM_POST || t === en.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(i);
            else {
                let t = {
                    gif_provider: i.provider ?? (0, O.cf)(),
                    load_id: Y.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: i.url,
                    gif_id: i.id,
                };
                e(i.url, void 0, void 0, !0, void 0, t);
            }
            (0, w.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function eC(e) {
    return l.useCallback(
        (t) => {
            let { emoji: n, willClose: i } = t,
                l = e.current;
            null != n && null != l && l.insertEmoji({ emoji: n, willClose: i }), i && (0, w.v8)();
        },
        [e],
    );
}
function eE(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: s, chatInputType: r, submit: a } = e,
        { analyticsLocations: o } = (0, E.Ay)();
    return l.useCallback(
        (e, l) => {
            n ||
                (r === en.oU.CREATE_ANNOUNCEMENT_POST || (0, G.YS)(l, i, s, r.drafts.type)
                    ? ((0, er.fh)({
                          sticker: e,
                          stickerSelectLocation: l,
                          isReplacement: null != U.A.getStickerPreview(s, r.drafts.type),
                          analyticsLocations: o,
                      }),
                      (0, V.$x)(s, e, r.drafts.type))
                    : (a({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, w.v8)(),
                t.current?.focus());
        },
        [n, i, s, t, o, a, r],
    );
}
function eI(e) {
    return l.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, w.v8)(), n?.focus();
        },
        [e],
    );
}
function ev(e, t, n) {
    let i = l.useCallback(() => {
            t || (0, w.r$)(eg.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = l.useCallback(() => {
            !t && e.gifs?.allowSending && (0, w.r$)(eg.kx.GIF, e, n);
        }, [t, e, n]),
        r = l.useCallback(() => {
            !t && e.stickers?.allowSending && (0, w.r$)(eg.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, $.Vo)({ event: ef.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, $.Vo)({ event: ef.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, $.Vo)({ event: ef.jej.TOGGLE_STICKER_PICKER, handler: r });
}
function ey(e, t, n) {
    let [i] = l.useState(() => new a.EventEmitter());
    return (
        l.useEffect(() => {
            i.emit("text-changed", t, n);
        }, [t, n, i]),
        {
            eventEmitter: i,
            handleEditorSelectionChanged: (t) => {
                null != e.current && i.emit("selection-changed", t);
            },
        }
    );
}
function eS() {
    let e = l.useRef(null),
        t = l.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = l.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function eb(e) {
    let t = l.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function eN(e) {
    let [t, n] = l.useState(0);
    return {
        editorHeight: t,
        handleResize: l.useCallback(
            (t) => {
                n(t ?? 0), e?.(t);
            },
            [e],
        ),
    };
}
function ej(e, t, n, i) {
    let l = e.getGuildId(),
        s = (0, m.bG)([k.A], () => null != l && k.A.isLurking(l), [l]),
        r = (0, m.bG)([H.Ay, q.default], () => {
            let e = q.default.getCurrentUser();
            return (null != l && null != e ? H.Ay.getMember(l, e.id)?.isPending : null) ?? !1;
        }),
        a = (0, m.cf)([W.A], () => {
            let l = e.isPrivate(),
                s = W.A.computePermissions(e),
                a = h.zy(s, ef.xBc.CREATE_PUBLIC_THREADS) || h.zy(s, ef.xBc.CREATE_PRIVATE_THREADS),
                o =
                    (!t.permissions?.requireCreateTherads || a) &&
                    (!t.permissions?.requireSendMessages || h.zy(s, ef.xBc.SEND_MESSAGES)),
                c = o && h.zy(s, ef.xBc.ATTACH_FILES),
                u = null != n,
                d = (0, F.UJ)(e);
            return {
                disabled: i || r || (!l && !o) || d,
                canAttachFiles: !0 === t.attachments && (l || r || c || u),
                canCreateThreads: a,
                canEveryoneSendMessages: Q.MJ(ef.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, r]);
    return { isLurking: s, isPendingMember: r, ...a };
}
function eT(e, t, n) {
    let [i, s, r] = (0, w.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], u.x),
        a = (0, m.bG)([v.A], () => v.A.shouldShowPopup() && v.A.activeViewType() === e && v.A.activeChannelId() === n);
    l.useEffect(
        () => () => {
            (0, w.v8)(e, n);
        },
        [e, n],
    );
    let o = l.useCallback(() => {
            null != i || a || t.current?.handleOuterClick();
        }, [i, a, t]),
        c = null == i || null == s || s !== e || r !== n;
    return { expressionPickerView: i, shouldHideExpressionPicker: c, handleOuterClick: o };
}
let eR = (e, t) => ({
        handleAutocompleteVisibilityChange: l.useCallback(
            (n) => {
                n && (0, w.v8)(e, t);
            },
            [e, t],
        ),
    }),
    ew = l.memo(
        l.forwardRef(function (e, t) {
            let n,
                {
                    textValue: s,
                    richValue: a,
                    className: o,
                    innerClassName: u,
                    editorClassName: h,
                    id: p,
                    required: _,
                    disabled: v,
                    placeholder: M,
                    accessibilityLabel: O,
                    channel: k,
                    type: U,
                    focused: V,
                    error: G,
                    renderAttachButton: F,
                    renderApplicationCommandIcon: H,
                    renderButtons: W,
                    pendingReply: K,
                    onChange: Z,
                    onResize: q,
                    onBlur: Y,
                    onFocus: $,
                    onKeyDown: Q,
                    onSubmit: er,
                    promptToUpload: eg,
                    highlighted: ew,
                    canMentionRoles: eL,
                    canMentionChannels: eM,
                    maxCharacterCount: eO,
                    showRemainingCharsAfterCount: ek,
                    allowNewLines: eP = !0,
                    characterCountClassName: eD,
                    "aria-describedby": eU,
                    "aria-labelledby": eV,
                    setEditorRef: eG,
                    autoCompletePosition: eF,
                    children: eB,
                    disableThemedBackground: eH = !1,
                    emojiPickerCloseOnModalOuterClick: eW,
                    parentModalKey: eK,
                    pendingScheduledMessage: ez,
                    showValueWhenDisabled: eZ = !1,
                } = e;
            c()(null != U, "chat input type must be set");
            let { analyticsLocations: eq } = (0, E.Ay)(C.A.CHANNEL_TEXT_AREA),
                eY = eb(t),
                eJ = l.useRef(null),
                e$ = l.useRef(null),
                eX = l.useRef(null),
                eQ = l.useRef(null),
                e0 = l.useRef(null);
            eG?.(eX.current);
            let e1 = (0, I.A)(k),
                [e2, e3] = l.useState(!e1);
            (0, x.i4)(eY, (e) => {
                let { width: t } = e;
                return e3(!e1 && (null == t || t > 450));
            });
            let { activeCommand: e6, activeCommandSection: e7 } = (0, m.cf)([S.A], () => ({
                    activeCommand: U.commands?.enabled ? S.A.getActiveCommand(k.id) : null,
                    activeCommandSection: U.commands?.enabled ? S.A.getActiveCommandSection(k.id) : null,
                })),
                {
                    isLurking: e4,
                    isPendingMember: e8,
                    disabled: e5,
                    canAttachFiles: e9,
                    canCreateThreads: te,
                    canEveryoneSendMessages: tt,
                } = ej(k, U, e6, v),
                tn = U.toolbarType === en.O1.STATIC,
                ti = !B.D_.useSetting() && !(0, ee.isAndroidWeb)() && null != window.ResizeObserver,
                tl = !ti || !U.commands?.enabled || !V || "/" !== s,
                ts = (0, P.A)(),
                { fontSize: tr } = (0, m.cf)([A.A], () => ({ fontSize: A.A.fontSize })),
                ta = (0, m.bG)([z.A], () => z.A.isEnabled());
            ev(U, e5, k.id);
            let { eventEmitter: to, handleEditorSelectionChanged: tc } = ey(eX, s, a),
                tu = l.useRef(s);
            tu.current = s;
            let td = l.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === tu.current && U.commands?.enabled && to.emit("command-sentinel-typed"),
                            Z?.(e, t, n);
                    },
                    [Z, U.commands?.enabled, to],
                ),
                { submitting: th, submit: tm, handleSubmit: tp } = ex(er, U, eX, e0, k.id),
                { autocompleteRef: tf, handleMaybeShowAutocomplete: tg, handleHideAutocomplete: t_ } = eS(),
                tx = eA(tm, U, eX),
                tA = eC(eX),
                tC = eE({ editorRef: eX, disabled: e5, textValue: s, channelId: k.id, chatInputType: U, submit: er }),
                tE = l.useCallback(
                    (e, t, n) => {
                        let i = eX.current;
                        null != e &&
                            null != i &&
                            (J.default.track(ef.HAw.SOUNDMOJI_SELECT, {
                                channel_id: k.id,
                                guild_id: k.guild_id,
                                sound_guild_id: e.guildId,
                                sound_id: e.soundId,
                                source: t,
                            }),
                            i.insertSound(e)),
                            n && (0, w.v8)(),
                            i?.focus();
                    },
                    [eX, k.id, k.guild_id],
                ),
                tI = eI(eX),
                tv = l.useCallback(() => e0?.current?.hide(), []),
                { editorHeight: ty, handleResize: tS } = eN(q),
                {
                    handleTab: tb,
                    handleEnter: tN,
                    handleMoveSelection: tj,
                } = ((n = l.useCallback(
                    () => !!(!tl && eJ.current?.onTabOrEnter(!1)) || tf.current?.onTabOrEnter(!1) || !1,
                    [tl, eJ, tf],
                )),
                {
                    handleTab: n,
                    handleEnter: l.useCallback(
                        () => !!(!tl && eJ.current?.onTabOrEnter(!0)) || tf.current?.onTabOrEnter(!0) || !1,
                        [tl, eJ, tf],
                    ),
                    handleMoveSelection: l.useCallback(
                        (e) => !!(!tl && eJ.current?.onMoveSelection(e)) || tf.current?.onMoveSelection(e) || !1,
                        [tl, eJ, tf],
                    ),
                }),
                { expressionPickerView: tT, shouldHideExpressionPicker: tR, handleOuterClick: tw } = eT(U, eX, k.id),
                { selectedAutocompleteInputType: tL, selectedAutocompleteInputError: tM } = (function (e, t) {
                    let [n, i] = l.useState({
                            selectedAutocompleteInputType: null,
                            selectedAutocompleteInputError: !1,
                        }),
                        s = l.useCallback(() => {
                            let e,
                                n = t.current?.getSlateEditor();
                            null != n && (e = em.VW.getSelectedParentOfType(n, T.mk)?.[0]),
                                i({
                                    selectedAutocompleteInputType: e?.type ?? null,
                                    selectedAutocompleteInputError: e?.error ?? !1,
                                });
                        }, [t]);
                    return (
                        l.useEffect(
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
                })(to, eX),
                { handleAutocompleteVisibilityChange: tO } = eR(U, k.id),
                tk = (0, N.A)({ type: U, channelId: k.id }),
                tP = l.useCallback(() => {
                    to.emit("submit-failure");
                }, [to]);
            (0, et.R)(to, k.guild_id, k.id);
            let tD = null != K,
                tU = (e5 && !((e4 || e8) && tt)) || (th && U.submit?.useDisabledStylesOnSubmit),
                tV = null;
            null != e6 ? (tV = H?.(e6, e7, e_.g$)) : (!e5 || te) && (tV = F?.(tD, e_.g$));
            let tG = ti && null != a && !e5 && U.showCharacterCount && null == e6,
                tF = ti && !__OVERLAY__ && null != a && null == e6 && U.toolbarType !== en.O1.NONE && !e5,
                tB = (0, ea.Y)({
                    channel: k,
                    type: U,
                    activeCommand: e6,
                    pendingReply: K,
                    pendingScheduledMessage: ez,
                    selectedAutocompleteInputType: tL,
                    selectedAutocompleteInputError: tM,
                }),
                tH = 0 === s.trim().length,
                tW = null != K ? [eU, el.i].filter(Boolean).join(" ") : eU,
                tK = U.layout === en.wt.INLINE,
                tz = U.layout === en.wt.FLUSH,
                tZ = (0, i.jsx)("div", { ref: e$, className: e_.BW }),
                tq = tk ? (0, i.jsx)(y.A, { align: "right", positionTargetRef: e$, channel: k }) : null,
                tY =
                    null != W
                        ? W()
                        : (0, i.jsx)(eo.A, {
                              type: U,
                              disabled: e5,
                              channel: k,
                              handleSubmit: tp,
                              isEmpty: tH,
                              showAllButtons: e2,
                          }),
                tJ = tG
                    ? (0, i.jsx)(ed.A, {
                          type: U,
                          textValue: s,
                          className: eD,
                          maxCharacterCount: eO,
                          showRemainingCharsAfterCount: ek,
                      })
                    : null;
            return (
                l.useEffect(() => {
                    V && X._.dispatch(ef.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: k.id });
                }, [V, k.id]),
                (0, i.jsx)(R.Sv, {
                    value: to,
                    children: (0, i.jsxs)(E.f5, {
                        value: eq,
                        children: [
                            tF && tn
                                ? (0, i.jsx)(ep.A, { editorRef: eX, type: U, channel: k })
                                : tF
                                  ? (0, i.jsx)(eh.A, { ref: e0, editorRef: eX, containerRef: eQ, options: U.markdown })
                                  : null,
                            (0, i.jsxs)("div", {
                                ref: eY,
                                className: r()(o, {
                                    [e_.gM]: !0,
                                    [e_.h9]: tU,
                                    [e_.mr]: ew,
                                    [e_.Wn]: d.Fr,
                                    [e_.Ls]: tK,
                                    [e_.AH]: tz,
                                    [e_.z3]: null != G,
                                }),
                                children: [
                                    tK || tz ? null : (0, i.jsx)(ea.A, { bars: tB }),
                                    (0, i.jsxs)("div", {
                                        ref: eQ,
                                        onScroll: tv,
                                        className: r()(u, {
                                            [e_.xx]: !0,
                                            [e_.k6]: !eH,
                                            [e_.Ri]: tB.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, i.jsx)(es.A, { channelId: k.id, chatInputType: U }),
                                            U.hideAttachmentArea
                                                ? null
                                                : (0, i.jsx)(eu.A, { channelId: k.id, type: U, canAttachFiles: e9 }),
                                            (0, i.jsxs)("div", {
                                                className: r()(e_.vW, {
                                                    [e_.BF]: tU,
                                                    [e_.RL]:
                                                        U !== en.oU.EDIT && (null != tV || (tU && null == tV) || e4),
                                                    [e_.fk]: U === en.oU.THREAD_CREATION,
                                                    [e_.TZ]:
                                                        U === en.oU.CREATE_FORUM_POST ||
                                                        U === en.oU.FORWARD_MESSAGE_INPUT,
                                                    [e_.$i]: U === en.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tw,
                                                children: [
                                                    tq,
                                                    tV,
                                                    (0, i.jsx)(f.vN, {
                                                        ringTarget: eY,
                                                        ringClassName: e_.Rg,
                                                        children: (0, i.jsx)(ei.A, {
                                                            ref: eX,
                                                            id: p,
                                                            focused: V,
                                                            useSlate: ti,
                                                            textValue: s,
                                                            richValue: a,
                                                            disabled: e5,
                                                            placeholder: M,
                                                            required: _,
                                                            accessibilityLabel: O,
                                                            isPreviewing: (e4 || e8) && tt,
                                                            channel: k,
                                                            type: U,
                                                            canPasteFiles: e9,
                                                            uploadPromptCharacterCount: ef.CS1,
                                                            maxCharacterCount: eO ?? ts,
                                                            allowNewLines: eP,
                                                            "aria-describedby": tW,
                                                            onChange: td,
                                                            onResize: tS,
                                                            onBlur: Y,
                                                            onFocus: $,
                                                            onKeyDown: Q,
                                                            onSubmit: tm,
                                                            onSubmitFailure: tP,
                                                            onTab: tb,
                                                            onEnter: tN,
                                                            onMoveSelection: tj,
                                                            onSelectionChanged: tc,
                                                            onMaybeShowAutocomplete: tg,
                                                            onHideAutocomplete: t_,
                                                            promptToUpload: eg,
                                                            fontSize: tr,
                                                            spellcheckEnabled: ta,
                                                            canOnlyUseTextCommands: tD,
                                                            className: r()(
                                                                {
                                                                    [e_.QI]: U === en.oU.THREAD_CREATION,
                                                                    [e_.AV]: U === en.oU.PROFILE_BIO_INPUT,
                                                                    [e_.GR]: U === en.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                h,
                                                            ),
                                                            "aria-labelledby": eV,
                                                            showValueWhenDisabled: eZ,
                                                        }),
                                                    }),
                                                    tY,
                                                    tZ,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(ec.a, { channel: k, type: U, pendingScheduledMessage: ez }),
                                    tl ? null : (0, i.jsx)(b.A, { ref: eJ, channel: k, canOnlyUseTextCommands: tD }),
                                    (0, i.jsx)(j.A, {
                                        ref: tf,
                                        channel: k,
                                        canMentionRoles: eL,
                                        canMentionChannels: eM,
                                        useNewSlashCommands: ti,
                                        canOnlyUseTextCommands: tD,
                                        canSendStickers: U.stickers?.allowSending,
                                        canSendSoundmoji: U.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: V,
                                        expressionPickerView: tT,
                                        type: U,
                                        targetRef: eY,
                                        editorRef: eX,
                                        onSendMessage: tm,
                                        onSendSticker: tC,
                                        onVisibilityChange: tO,
                                        editorScrollerRef: eQ,
                                        editorHeight: ty,
                                        barsHeight: 40 * tB.floating.length,
                                        setValue: (e, t) => td?.(null, e, t),
                                        position: eF,
                                    }),
                                    (0, i.jsx)(D.A, { textValue: s, editorHeight: ty, channelId: k.id }),
                                    tJ,
                                    eB,
                                ],
                            }),
                            (0, i.jsx)(g.U, { error: G }),
                            tR
                                ? null
                                : (0, i.jsx)(L.A, {
                                      positionTargetRef: eY,
                                      type: U,
                                      onSelectGIF: tx,
                                      onSelectEmoji: tA,
                                      onSelectSticker: tC,
                                      onSelectSound: tE,
                                      onSelectKaomoji: tI,
                                      channel: k,
                                      closeOnModalOuterClick: eW,
                                      parentModalKey: eK,
                                      position: "top",
                                      align: "right",
                                      positionLayerClassName: e_.BD,
                                  }),
                        ],
                    }),
                })
            );
        }),
    );
