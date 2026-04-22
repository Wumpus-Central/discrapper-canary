"use strict";
n.d(t, {
    Ay: () => eR,
    C: () => eC,
    HG: () => eE,
    L0: () => eS,
    MD: () => eT,
    NO: () => eA,
    N_: () => eI,
    Sk: () => eN,
    Vu: () => ex,
    Zx: () => e_,
    ck: () => eb,
    ml: () => ev,
    uW: () => ej,
    v7: () => ey,
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
    T = n(875163),
    j = n(31498),
    R = n(598071),
    w = n(151271),
    L = n(834755),
    M = n(256265),
    k = n(380544),
    O = n(857071),
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
    el = n(824842),
    es = n(612394),
    er = n(877146),
    ea = n(147025),
    eo = n(776384),
    ec = n(171593),
    eu = n(257108),
    ed = n(135261),
    eh = n(711371),
    em = n(476739),
    ep = n(652215);
n(827669);
var ef = n(698279),
    eg = n(266599);
function e_(e, t, s, r, a) {
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
                                n.e("7034"),
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
function ex(e, t, n) {
    return l.useCallback(
        (i) => {
            if (t === en.oU.CREATE_FORUM_POST || t === en.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(i);
            else {
                let t = {
                    gif_provider: i.provider ?? (0, k.cf)(),
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
function eA(e) {
    return l.useCallback(
        (t) => {
            let { emoji: n, willClose: i } = t,
                l = e.current;
            null != n && null != l && l.insertEmoji({ emoji: n, willClose: i }), i && (0, w.v8)();
        },
        [e],
    );
}
function eC(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: s, chatInputType: r, submit: a } = e,
        { analyticsLocations: o } = (0, E.Ay)();
    return l.useCallback(
        (e, l) => {
            n ||
                (r === en.oU.CREATE_ANNOUNCEMENT_POST || (0, G.YS)(l, i, s, r.drafts.type)
                    ? ((0, es.fh)({
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
function eE(e) {
    return l.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, w.v8)(), n?.focus();
        },
        [e],
    );
}
function eI(e, t, n) {
    let i = l.useCallback(() => {
            t || (0, w.r$)(ef.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = l.useCallback(() => {
            !t && e.gifs?.allowSending && (0, w.r$)(ef.kx.GIF, e, n);
        }, [t, e, n]),
        r = l.useCallback(() => {
            !t && e.stickers?.allowSending && (0, w.r$)(ef.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, $.Vo)({ event: ep.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
        (0, $.Vo)({ event: ep.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, $.Vo)({ event: ep.jej.TOGGLE_STICKER_PICKER, handler: r });
}
function ev(e, t, n) {
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
function ey() {
    let e = l.useRef(null),
        t = l.useCallback(() => {
            e.current?.onMaybeShowAutocomplete();
        }, []),
        n = l.useCallback(() => {
            e.current?.onHideAutocomplete();
        }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
}
function eS(e) {
    let t = l.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function eb(e) {
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
function eN(e, t, n, i) {
    let l = e.getGuildId(),
        s = (0, m.bG)([O.A], () => null != l && O.A.isLurking(l), [l]),
        r = (0, m.bG)([H.Ay, q.default], () => {
            let e = q.default.getCurrentUser();
            return (null != l && null != e ? H.Ay.getMember(l, e.id)?.isPending : null) ?? !1;
        }),
        a = (0, m.cf)([W.A], () => {
            let l = e.isPrivate(),
                s = W.A.computePermissions(e),
                a = h.zy(s, ep.xBc.CREATE_PUBLIC_THREADS) || h.zy(s, ep.xBc.CREATE_PRIVATE_THREADS),
                o =
                    (!t.permissions?.requireCreateTherads || a) &&
                    (!t.permissions?.requireSendMessages || h.zy(s, ep.xBc.SEND_MESSAGES)),
                c = o && h.zy(s, ep.xBc.ATTACH_FILES),
                u = null != n,
                d = (0, F.UJ)(e);
            return {
                disabled: i || r || (!l && !o) || d,
                canAttachFiles: !0 === t.attachments && (l || r || c || u),
                canCreateThreads: a,
                canEveryoneSendMessages: Q.MJ(ep.xBc.SEND_MESSAGES, e),
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
let ej = (e, t) => ({
        handleAutocompleteVisibilityChange: l.useCallback(
            (n) => {
                n && (0, w.v8)(e, t);
            },
            [e, t],
        ),
    }),
    eR = l.memo(
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
                    accessibilityLabel: k,
                    channel: O,
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
                    onSubmit: es,
                    promptToUpload: ef,
                    highlighted: eR,
                    canMentionRoles: ew,
                    canMentionChannels: eL,
                    maxCharacterCount: eM,
                    showRemainingCharsAfterCount: ek,
                    allowNewLines: eO = !0,
                    characterCountClassName: eP,
                    "aria-describedby": eD,
                    "aria-labelledby": eU,
                    setEditorRef: eV,
                    autoCompletePosition: eG,
                    children: eF,
                    disableThemedBackground: eB = !1,
                    emojiPickerCloseOnModalOuterClick: eH,
                    parentModalKey: eW,
                    pendingScheduledMessage: eK,
                    showValueWhenDisabled: ez = !1,
                } = e;
            c()(null != U, "chat input type must be set");
            let { analyticsLocations: eZ } = (0, E.Ay)(C.A.CHANNEL_TEXT_AREA),
                eq = eS(t),
                eY = l.useRef(null),
                eJ = l.useRef(null),
                e$ = l.useRef(null),
                eX = l.useRef(null),
                eQ = l.useRef(null);
            eV?.(e$.current);
            let e0 = (0, I.A)(O),
                [e1, e2] = l.useState(!e0);
            (0, x.i4)(eq, (e) => {
                let { width: t } = e;
                return e2(!e0 && (null == t || t > 450));
            });
            let { activeCommand: e3, activeCommandSection: e6 } = (0, m.cf)([S.A], () => ({
                    activeCommand: U.commands?.enabled ? S.A.getActiveCommand(O.id) : null,
                    activeCommandSection: U.commands?.enabled ? S.A.getActiveCommandSection(O.id) : null,
                })),
                {
                    isLurking: e7,
                    isPendingMember: e4,
                    disabled: e8,
                    canAttachFiles: e5,
                    canCreateThreads: e9,
                    canEveryoneSendMessages: te,
                } = eN(O, U, e3, v),
                tt = U.toolbarType === en.O1.STATIC,
                tn = !B.D_.useSetting() && !(0, ee.isAndroidWeb)() && null != window.ResizeObserver,
                ti = !tn || !U.commands?.enabled || !V || "/" !== s,
                tl = (0, P.A)(),
                { fontSize: ts } = (0, m.cf)([A.A], () => ({ fontSize: A.A.fontSize })),
                tr = (0, m.bG)([z.A], () => z.A.isEnabled());
            eI(U, e8, O.id);
            let { eventEmitter: ta, handleEditorSelectionChanged: to } = ev(e$, s, a),
                tc = l.useRef(s);
            tc.current = s;
            let tu = l.useCallback(
                    (e, t, n) => {
                        "/" === t && "" === tc.current && U.commands?.enabled && ta.emit("command-sentinel-typed"),
                            Z?.(e, t, n);
                    },
                    [Z, U.commands?.enabled, ta],
                ),
                { submitting: td, submit: th, handleSubmit: tm } = e_(es, U, e$, eQ, O.id),
                { autocompleteRef: tp, handleMaybeShowAutocomplete: tf, handleHideAutocomplete: tg } = ey(),
                t_ = ex(th, U, e$),
                tx = eA(e$),
                tA = eC({ editorRef: e$, disabled: e8, textValue: s, channelId: O.id, chatInputType: U, submit: es }),
                tC = l.useCallback(
                    (e, t, n) => {
                        let i = e$.current;
                        null != e &&
                            null != i &&
                            (J.default.track(ep.HAw.SOUNDMOJI_SELECT, {
                                channel_id: O.id,
                                guild_id: O.guild_id,
                                sound_guild_id: e.guildId,
                                sound_id: e.soundId,
                                source: t,
                            }),
                            i.insertSound(e)),
                            n && (0, w.v8)(),
                            i?.focus();
                    },
                    [e$, O.id, O.guild_id],
                ),
                tE = eE(e$),
                tI = l.useCallback(() => eQ?.current?.hide(), []),
                { editorHeight: tv, handleResize: ty } = eb(q),
                {
                    handleTab: tS,
                    handleEnter: tb,
                    handleMoveSelection: tN,
                } = ((n = l.useCallback(
                    () => !!(!ti && eY.current?.onTabOrEnter(!1)) || tp.current?.onTabOrEnter(!1) || !1,
                    [ti, eY, tp],
                )),
                {
                    handleTab: n,
                    handleEnter: l.useCallback(
                        () => !!(!ti && eY.current?.onTabOrEnter(!0)) || tp.current?.onTabOrEnter(!0) || !1,
                        [ti, eY, tp],
                    ),
                    handleMoveSelection: l.useCallback(
                        (e) => !!(!ti && eY.current?.onMoveSelection(e)) || tp.current?.onMoveSelection(e) || !1,
                        [ti, eY, tp],
                    ),
                }),
                { expressionPickerView: tT, shouldHideExpressionPicker: tj, handleOuterClick: tR } = eT(U, e$, O.id),
                { selectedAutocompleteInputType: tw, selectedAutocompleteInputError: tL } = (function (e, t) {
                    let [n, i] = l.useState({
                            selectedAutocompleteInputType: null,
                            selectedAutocompleteInputError: !1,
                        }),
                        s = l.useCallback(() => {
                            let e,
                                n = t.current?.getSlateEditor();
                            null != n && (e = eh.VW.getSelectedParentOfType(n, j.mk)?.[0]),
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
                })(ta, e$),
                { handleAutocompleteVisibilityChange: tM } = ej(U, O.id),
                tk = (0, N.A)({ type: U, channelId: O.id }),
                tO = l.useCallback(() => {
                    ta.emit("submit-failure");
                }, [ta]);
            (0, et.R)(ta, O.guild_id, O.id);
            let tP = null != K,
                tD = (e8 && !((e7 || e4) && te)) || (td && U.submit?.useDisabledStylesOnSubmit),
                tU = null;
            null != e3 ? (tU = H?.(e3, e6, eg.g$)) : (!e8 || e9) && (tU = F?.(tP, eg.g$));
            let tV = tn && null != a && !e8 && U.showCharacterCount && null == e3,
                tG = tn && !__OVERLAY__ && null != a && null == e3 && U.toolbarType !== en.O1.NONE && !e8,
                tF = (0, er.Y)({
                    channel: O,
                    type: U,
                    activeCommand: e3,
                    pendingReply: K,
                    pendingScheduledMessage: eK,
                    selectedAutocompleteInputType: tw,
                    selectedAutocompleteInputError: tL,
                }),
                tB = 0 === s.trim().length,
                tH = U.layout === en.wt.INLINE,
                tW = U.layout === en.wt.FLUSH,
                tK = (0, i.jsx)("div", { ref: eJ, className: eg.BW }),
                tz = tk ? (0, i.jsx)(y.A, { align: "right", positionTargetRef: eJ, channel: O }) : null,
                tZ =
                    null != W
                        ? W()
                        : (0, i.jsx)(ea.A, {
                              type: U,
                              disabled: e8,
                              channel: O,
                              handleSubmit: tm,
                              isEmpty: tB,
                              showAllButtons: e1,
                          }),
                tq = tV
                    ? (0, i.jsx)(eu.A, {
                          type: U,
                          textValue: s,
                          className: eP,
                          maxCharacterCount: eM,
                          showRemainingCharsAfterCount: ek,
                      })
                    : null;
            return (
                l.useEffect(() => {
                    V && X._.dispatch(ep.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: O.id });
                }, [V, O.id]),
                (0, i.jsx)(R.Sv, {
                    value: ta,
                    children: (0, i.jsxs)(E.f5, {
                        value: eZ,
                        children: [
                            tG && tt
                                ? (0, i.jsx)(em.A, { editorRef: e$, type: U, channel: O })
                                : tG
                                  ? (0, i.jsx)(ed.A, { ref: eQ, editorRef: e$, containerRef: eX, options: U.markdown })
                                  : null,
                            (0, i.jsxs)("div", {
                                ref: eq,
                                className: r()(o, {
                                    [eg.gM]: !0,
                                    [eg.h9]: tD,
                                    [eg.mr]: eR,
                                    [eg.Wn]: d.Fr,
                                    [eg.Ls]: tH,
                                    [eg.AH]: tW,
                                    [eg.z3]: null != G,
                                }),
                                children: [
                                    tH || tW ? null : (0, i.jsx)(er.A, { bars: tF }),
                                    (0, i.jsxs)("div", {
                                        ref: eX,
                                        onScroll: tI,
                                        className: r()(u, {
                                            [eg.xx]: !0,
                                            [eg.k6]: !eB,
                                            [eg.Ri]: tF.stacked.length > 0,
                                        }),
                                        children: [
                                            (0, i.jsx)(el.A, { channelId: O.id, chatInputType: U }),
                                            U.hideAttachmentArea
                                                ? null
                                                : (0, i.jsx)(ec.A, { channelId: O.id, type: U, canAttachFiles: e5 }),
                                            (0, i.jsxs)("div", {
                                                className: r()(eg.vW, {
                                                    [eg.BF]: tD,
                                                    [eg.RL]:
                                                        U !== en.oU.EDIT && (null != tU || (tD && null == tU) || e7),
                                                    [eg.fk]: U === en.oU.THREAD_CREATION,
                                                    [eg.TZ]:
                                                        U === en.oU.CREATE_FORUM_POST ||
                                                        U === en.oU.FORWARD_MESSAGE_INPUT,
                                                    [eg.$i]: U === en.oU.USER_PROFILE_REPLY,
                                                }),
                                                onMouseDown: tR,
                                                children: [
                                                    tz,
                                                    tU,
                                                    (0, i.jsx)(f.vN, {
                                                        ringTarget: eq,
                                                        ringClassName: eg.Rg,
                                                        children: (0, i.jsx)(ei.A, {
                                                            ref: e$,
                                                            id: p,
                                                            focused: V,
                                                            useSlate: tn,
                                                            textValue: s,
                                                            richValue: a,
                                                            disabled: e8,
                                                            placeholder: M,
                                                            required: _,
                                                            accessibilityLabel: k,
                                                            isPreviewing: (e7 || e4) && te,
                                                            channel: O,
                                                            type: U,
                                                            canPasteFiles: e5,
                                                            uploadPromptCharacterCount: ep.CS1,
                                                            maxCharacterCount: eM ?? tl,
                                                            allowNewLines: eO,
                                                            "aria-describedby": eD,
                                                            onChange: tu,
                                                            onResize: ty,
                                                            onBlur: Y,
                                                            onFocus: $,
                                                            onKeyDown: Q,
                                                            onSubmit: th,
                                                            onSubmitFailure: tO,
                                                            onTab: tS,
                                                            onEnter: tb,
                                                            onMoveSelection: tN,
                                                            onSelectionChanged: to,
                                                            onMaybeShowAutocomplete: tf,
                                                            onHideAutocomplete: tg,
                                                            promptToUpload: ef,
                                                            fontSize: ts,
                                                            spellcheckEnabled: tr,
                                                            canOnlyUseTextCommands: tP,
                                                            className: r()(
                                                                {
                                                                    [eg.QI]: U === en.oU.THREAD_CREATION,
                                                                    [eg.AV]: U === en.oU.PROFILE_BIO_INPUT,
                                                                    [eg.GR]: U === en.oU.OVERLAY_INLINE_REPLY,
                                                                },
                                                                h,
                                                            ),
                                                            "aria-labelledby": eU,
                                                            showValueWhenDisabled: ez,
                                                        }),
                                                    }),
                                                    tZ,
                                                    tK,
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(eo.a, { channel: O, type: U, pendingScheduledMessage: eK }),
                                    ti ? null : (0, i.jsx)(b.A, { ref: eY, channel: O, canOnlyUseTextCommands: tP }),
                                    (0, i.jsx)(T.A, {
                                        ref: tp,
                                        channel: O,
                                        canMentionRoles: ew,
                                        canMentionChannels: eL,
                                        useNewSlashCommands: tn,
                                        canOnlyUseTextCommands: tP,
                                        canSendStickers: U.stickers?.allowSending,
                                        canSendSoundmoji: U.soundmoji?.allowSending,
                                        textValue: s,
                                        focused: V,
                                        expressionPickerView: tT,
                                        type: U,
                                        targetRef: eq,
                                        editorRef: e$,
                                        onSendMessage: th,
                                        onSendSticker: tA,
                                        onVisibilityChange: tM,
                                        editorScrollerRef: eX,
                                        editorHeight: tv,
                                        barsHeight: 40 * tF.floating.length,
                                        setValue: (e, t) => tu?.(null, e, t),
                                        position: eG,
                                    }),
                                    (0, i.jsx)(D.A, { textValue: s, editorHeight: tv, channelId: O.id }),
                                    tq,
                                    eF,
                                ],
                            }),
                            (0, i.jsx)(g.U, { error: G }),
                            tj
                                ? null
                                : (0, i.jsx)(L.A, {
                                      positionTargetRef: eq,
                                      type: U,
                                      onSelectGIF: t_,
                                      onSelectEmoji: tx,
                                      onSelectSticker: tA,
                                      onSelectSound: tC,
                                      onSelectKaomoji: tE,
                                      channel: O,
                                      closeOnModalOuterClick: eH,
                                      parentModalKey: eW,
                                      position: "top",
                                      align: "right",
                                      positionLayerClassName: eg.BD,
                                  }),
                        ],
                    }),
                })
            );
        }),
    );
