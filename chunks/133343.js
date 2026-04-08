"use strict";
n.d(t, {
    Ay: () => ex,
    C: () => eI,
    HG: () => eS,
    L0: () => eC,
    MD: () => eb,
    NO: () => eA,
    N_: () => ey,
    Sk: () => eO,
    Vu: () => eg,
    Zx: () => eE,
    ck: () => eR,
    ml: () => ev,
    uW: () => ew,
    v7: () => eN,
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
    p = n(397927),
    h = n(465532),
    m = n(765671),
    E = n(775602),
    g = n(793574),
    A = n(688810),
    I = n(177640),
    T = n(989837),
    S = n(667889),
    y = n(861382),
    v = n(391848),
    N = n(186226),
    C = n(875163),
    R = n(31498),
    O = n(598071),
    b = n(151271),
    D = n(834755),
    L = n(256265),
    w = n(380544),
    M = n(857071),
    x = n(135621),
    P = n(235430),
    k = n(931664),
    U = n(631576),
    G = n(378058),
    F = n(406704),
    V = n(253932),
    B = n(696451),
    H = n(576705),
    j = n(309010),
    Y = n(638128),
    W = n(522602),
    K = n(287809),
    $ = n(821102),
    z = n(954571),
    q = n(234320),
    Z = n(488926),
    X = n(723702),
    Q = n(486319),
    J = n(355622),
    ee = n(415409),
    et = n(824842),
    en = n(612394),
    er = n(877146),
    ei = n(147025),
    es = n(776384),
    ea = n(171593),
    eo = n(257108),
    el = n(135261),
    eu = n(711371),
    ec = n(476739),
    ed = n(652215);
n(827669);
var e_ = n(698279),
    ef = n(526636);
let ep = 450;
function eh(e) {
    return e !== j.A.getChannelId();
}
function em(e, t) {
    return (e && t.submit?.clearOnSubmit) ?? !1;
}
function eE(e, t, s, a, o) {
    let [l, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, _, f, m, E) => {
                if (l) return;
                u(!0);
                let g = k.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = W.A.getUploads(o, t.drafts.type) ?? [];
                if (null == d && !f && !m && (0, L.xz)(A, o)) {
                    u(!1),
                        (0, p.mMO)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49681"),
                                n.e("81028"),
                                n.e("94857"),
                                n.e("34779"),
                                n.e("10730"),
                                n.e("7602"),
                                n.e("56305"),
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
                        i = em(n, t),
                        l = null != s.current;
                    i &&
                        (eh(o)
                            ? h.A.saveDraft(o, "", t.drafts.type)
                            : l && (s.current?.clearValue(), a.current?.hide())),
                        l && (u(!1), (0, b.v8)(), r && s.current?.focus());
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
function eg(e, t, n) {
    return i.useCallback(
        (r) => {
            if (t === J.oU.CREATE_FORUM_POST || t === J.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(r);
            else {
                let t = {
                    gif_provider: r.provider ?? (0, w.cf)(),
                    load_id: $.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: r.url,
                    gif_id: r.id,
                };
                e(r.url, void 0, void 0, !0, void 0, t);
            }
            (0, b.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function eA(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            null != n && null != i && i.insertEmoji({ emoji: n, willClose: r }), r && (0, b.v8)();
        },
        [e],
    );
}
function eI(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: s, chatInputType: a, submit: o } = e,
        { analyticsLocations: l } = (0, A.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (a === J.oU.CREATE_ANNOUNCEMENT_POST || (0, G.YS)(i, r, s, a.drafts.type)
                    ? ((0, en.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != k.A.getStickerPreview(s, a.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, U.$x)(s, e, a.drafts.type))
                    : (o({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, b.v8)(),
                t.current?.focus());
        },
        [n, r, s, t, l, o, a],
    );
}
function eT(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let s = e.current;
            null != n &&
                null != s &&
                (z.default.track(ed.HAw.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r,
                }),
                s.insertSound(n)),
                i && (0, b.v8)(),
                s?.focus();
        },
        [e, t.id, t.guild_id],
    );
}
function eS(e) {
    return i.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, b.v8)(), n?.focus();
        },
        [e],
    );
}
function ey(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, b.r$)(e_.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, b.r$)(e_.kx.GIF, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, b.r$)(e_.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, q.Vo)({ event: ed.jej.TOGGLE_EMOJI_POPOUT, handler: r }),
        (0, q.Vo)({ event: ed.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, q.Vo)({ event: ed.jej.TOGGLE_STICKER_PICKER, handler: a });
}
function ev(e, t, n) {
    let [r] = i.useState(() => new o.EventEmitter());
    i.useEffect(() => {
        r.emit("text-changed", t, n);
    }, [t, n, r]);
    let s = (t) => {
        null != e.current && r.emit("selection-changed", t);
    };
    return { eventEmitter: r, handleEditorSelectionChanged: s };
}
function eN() {
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
function eR(e) {
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
function eO(e, t, n, r) {
    let i = e.getGuildId(),
        s = (0, f.bG)([M.A], () => null != i && M.A.isLurking(i), [i]),
        a = (0, f.bG)([B.Ay, K.default], () => {
            let e = K.default.getCurrentUser();
            return (null != i && null != e ? B.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, f.cf)([H.A], () => {
            let i = e.isPrivate(),
                s = H.A.computePermissions(e),
                o = _.zy(s, ed.xBc.CREATE_PUBLIC_THREADS) || _.zy(s, ed.xBc.CREATE_PRIVATE_THREADS),
                l =
                    (!t.permissions?.requireCreateTherads || o) &&
                    (!t.permissions?.requireSendMessages || _.zy(s, ed.xBc.SEND_MESSAGES)),
                u = l && _.zy(s, ed.xBc.ATTACH_FILES),
                c = null != n,
                d = (0, F.UJ)(e);
            return {
                disabled: r || a || (!i && !l) || d,
                canAttachFiles: !0 === t.attachments && (i || a || u || c),
                canCreateThreads: o,
                canEveryoneSendMessages: Z.MJ(ed.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, a]);
    return { isLurking: s, isPendingMember: a, ...o };
}
function eb(e, t, n) {
    let [r, s, a] = (0, b.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        o = (0, f.bG)([T.A], () => T.A.shouldShowPopup() && T.A.activeViewType() === e && T.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, b.v8)(e, n);
        },
        [e, n],
    );
    let l = i.useCallback(() => {
            null != r || o || t.current?.handleOuterClick();
        }, [r, o, t]),
        u = null == r || null == s || s !== e || a !== n;
    return { expressionPickerView: r, shouldHideExpressionPicker: u, handleOuterClick: l };
}
function eD(e, t, n) {
    let r = i.useCallback(() => !!(!n && t.current?.onTabOrEnter(!1)) || e.current?.onTabOrEnter(!1) || !1, [n, t, e]);
    return {
        handleTab: r,
        handleEnter: i.useCallback(
            () => !!(!n && t.current?.onTabOrEnter(!0)) || e.current?.onTabOrEnter(!0) || !1,
            [n, t, e],
        ),
        handleMoveSelection: i.useCallback(
            (r) => !!(!n && t.current?.onMoveSelection(r)) || e.current?.onMoveSelection(r) || !1,
            [n, t, e],
        ),
    };
}
function eL(e, t) {
    let [n, r] = i.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
        s = i.useCallback(() => {
            let e,
                n = t.current?.getSlateEditor();
            null != n && (e = eu.VW.getSelectedParentOfType(n, R.mk)?.[0]),
                r({ selectedAutocompleteInputType: e?.type ?? null, selectedAutocompleteInputError: e?.error ?? !1 });
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
}
let ew = (e, t) => ({
    handleAutocompleteVisibilityChange: i.useCallback(
        (n) => {
            n && (0, b.v8)(e, t);
        },
        [e, t],
    ),
});
function eM(e, t) {
    let {
        textValue: n,
        richValue: s,
        className: o,
        innerClassName: l,
        editorClassName: c,
        id: _,
        required: h,
        disabled: T,
        placeholder: R,
        accessibilityLabel: b,
        channel: L,
        type: w,
        focused: M,
        error: k,
        renderAttachButton: U,
        renderApplicationCommandIcon: G,
        renderButtons: F,
        pendingReply: B,
        onChange: H,
        onResize: j,
        onBlur: W,
        onFocus: K,
        onKeyDown: $,
        onSubmit: z,
        promptToUpload: q,
        highlighted: Z,
        canMentionRoles: en,
        canMentionChannels: eu,
        maxCharacterCount: e_,
        showRemainingCharsAfterCount: eh,
        allowNewLines: em = !0,
        characterCountClassName: eM,
        "aria-describedby": ex,
        "aria-labelledby": eP,
        setEditorRef: ek,
        autoCompletePosition: eU,
        children: eG,
        disableThemedBackground: eF = !1,
        emojiPickerCloseOnModalOuterClick: eV,
        parentModalKey: eB,
        pendingScheduledMessage: eH,
        showValueWhenDisabled: ej = !1,
    } = e;
    u()(null != w, "chat input type must be set");
    let { analyticsLocations: eY } = (0, A.Ay)(g.A.CHANNEL_TEXT_AREA),
        eW = eC(t),
        eK = i.useRef(null),
        e$ = i.useRef(null),
        ez = i.useRef(null),
        eq = i.useRef(null),
        eZ = i.useRef(null);
    ek?.(ez.current);
    let eX = (0, I.A)(L),
        [eQ, eJ] = i.useState(!eX);
    (0, m.i4)(eW, (e) => {
        let { width: t } = e;
        return eJ(!eX && (null == t || t > ep));
    });
    let { activeCommand: e0, activeCommandSection: e1 } = (0, f.cf)([y.A], () => ({
            activeCommand: w.commands?.enabled ? y.A.getActiveCommand(L.id) : null,
            activeCommandSection: w.commands?.enabled ? y.A.getActiveCommandSection(L.id) : null,
        })),
        {
            isLurking: e2,
            isPendingMember: e3,
            disabled: e6,
            canAttachFiles: e4,
            canCreateThreads: e5,
            canEveryoneSendMessages: e7,
        } = eO(L, w, e0, T),
        e8 = w.toolbarType === J.O1.STATIC,
        e9 = !V.D_.useSetting() && !(0, X.isAndroidWeb)() && null != window.ResizeObserver,
        te = !e9 || !w.commands?.enabled || !M || "/" !== n,
        tt = (0, x.A)(),
        { fontSize: tn } = (0, f.cf)([E.A], () => ({ fontSize: E.A.fontSize })),
        tr = (0, f.bG)([Y.A], () => Y.A.isEnabled());
    ey(w, e6, L.id);
    let { eventEmitter: ti, handleEditorSelectionChanged: ts } = ev(ez, n, s),
        ta = i.useRef(n);
    ta.current = n;
    let to = i.useCallback(
            (e, t, n) => {
                "/" === t && "" === ta.current && w.commands?.enabled && ti.emit("command-sentinel-typed"),
                    H?.(e, t, n);
            },
            [H, w.commands?.enabled, ti],
        ),
        { submitting: tl, submit: tu, handleSubmit: tc } = eE(z, w, ez, eZ, L.id),
        { autocompleteRef: td, handleMaybeShowAutocomplete: t_, handleHideAutocomplete: tf } = eN(),
        tp = eg(tu, w, ez),
        th = eA(ez),
        tm = eI({ editorRef: ez, disabled: e6, textValue: n, channelId: L.id, chatInputType: w, submit: z }),
        tE = eT(ez, L),
        tg = eS(ez),
        tA = i.useCallback(() => eZ?.current?.hide(), []),
        { editorHeight: tI, handleResize: tT } = eR(j),
        { handleTab: tS, handleEnter: ty, handleMoveSelection: tv } = eD(td, eK, te),
        { expressionPickerView: tN, shouldHideExpressionPicker: tC, handleOuterClick: tR } = eb(w, ez, L.id),
        { selectedAutocompleteInputType: tO, selectedAutocompleteInputError: tb } = eL(ti, ez),
        { handleAutocompleteVisibilityChange: tD } = ew(w, L.id),
        tL = (0, N.A)({ type: w, channelId: L.id }),
        tw = i.useCallback(() => {
            ti.emit("submit-failure");
        }, [ti]);
    (0, Q.R)(ti, L.guild_id, L.id);
    let tM = null != B,
        tx = (e6 && !((e2 || e3) && e7)) || (tl && w.submit?.useDisabledStylesOnSubmit),
        tP = null;
    null != e0 ? (tP = G?.(e0, e1, ef.g$)) : (!e6 || e5) && (tP = U?.(tM, ef.g$));
    let tk = e9 && null != s && !e6 && w.showCharacterCount && null == e0,
        tU = e9 && !__OVERLAY__ && null != s && null == e0 && w.toolbarType !== J.O1.NONE && !e6,
        tG = (0, er.Y)({
            channel: L,
            type: w,
            activeCommand: e0,
            pendingReply: B,
            pendingScheduledMessage: eH,
            selectedAutocompleteInputType: tO,
            selectedAutocompleteInputError: tb,
        }),
        tF = 0 === n.trim().length,
        tV = w.layout === J.wt.INLINE,
        tB = w.layout === J.wt.FLUSH,
        tH = (0, r.jsx)("div", { ref: e$, className: ef.BW }),
        tj = tL ? (0, r.jsx)(S.A, { align: "right", positionTargetRef: e$, channel: L }) : null,
        tY =
            null != F
                ? F()
                : (0, r.jsx)(ei.A, {
                      type: w,
                      disabled: e6,
                      channel: L,
                      handleSubmit: tc,
                      isEmpty: tF,
                      showAllButtons: eQ,
                  }),
        tW = tk
            ? (0, r.jsx)(eo.A, {
                  type: w,
                  textValue: n,
                  className: eM,
                  maxCharacterCount: e_,
                  showRemainingCharsAfterCount: eh,
              })
            : null;
    return (0, r.jsx)(O.Sv, {
        value: ti,
        children: (0, r.jsxs)(A.f5, {
            value: eY,
            children: [
                tU && e8
                    ? (0, r.jsx)(ec.A, { editorRef: ez, type: w, channel: L })
                    : tU
                      ? (0, r.jsx)(el.A, { ref: eZ, editorRef: ez, containerRef: eq, options: w.markdown })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eW,
                    className: a()(o, {
                        [ef.gM]: !0,
                        [ef.h9]: tx,
                        [ef.mr]: Z,
                        [ef.Wn]: d.Fr,
                        [ef.Ls]: tV,
                        [ef.AH]: tB,
                        [ef.z3]: null != k,
                    }),
                    children: [
                        tV || tB ? null : (0, r.jsx)(er.A, { bars: tG }),
                        (0, r.jsxs)("div", {
                            ref: eq,
                            onScroll: tA,
                            className: a()(l, { [ef.xx]: !0, [ef.k6]: !eF, [ef.Ri]: tG.stacked.length > 0 }),
                            children: [
                                (0, r.jsx)(et.A, { channelId: L.id, chatInputType: w }),
                                w.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(ea.A, { channelId: L.id, type: w, canAttachFiles: e4 }),
                                (0, r.jsxs)("div", {
                                    className: a()(ef.vW, {
                                        [ef.BF]: tx,
                                        [ef.RL]: w !== J.oU.EDIT && (null != tP || (tx && null == tP) || e2),
                                        [ef.fk]: w === J.oU.THREAD_CREATION,
                                        [ef.TZ]: w === J.oU.CREATE_FORUM_POST || w === J.oU.FORWARD_MESSAGE_INPUT,
                                        [ef.$i]: w === J.oU.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tR,
                                    children: [
                                        tj,
                                        tP,
                                        (0, r.jsx)(p.vN3, {
                                            ringTarget: eW,
                                            ringClassName: ef.Rg,
                                            children: (0, r.jsx)(ee.A, {
                                                ref: ez,
                                                id: _,
                                                focused: M,
                                                useSlate: e9,
                                                textValue: n,
                                                richValue: s,
                                                disabled: e6,
                                                placeholder: R,
                                                required: h,
                                                accessibilityLabel: b,
                                                isPreviewing: (e2 || e3) && e7,
                                                channel: L,
                                                type: w,
                                                canPasteFiles: e4,
                                                uploadPromptCharacterCount: ed.CS1,
                                                maxCharacterCount: e_ ?? tt,
                                                allowNewLines: em,
                                                "aria-describedby": ex,
                                                onChange: to,
                                                onResize: tT,
                                                onBlur: W,
                                                onFocus: K,
                                                onKeyDown: $,
                                                onSubmit: tu,
                                                onSubmitFailure: tw,
                                                onTab: tS,
                                                onEnter: ty,
                                                onMoveSelection: tv,
                                                onSelectionChanged: ts,
                                                onMaybeShowAutocomplete: t_,
                                                onHideAutocomplete: tf,
                                                promptToUpload: q,
                                                fontSize: tn,
                                                spellcheckEnabled: tr,
                                                canOnlyUseTextCommands: tM,
                                                className: a()(
                                                    {
                                                        [ef.QI]: w === J.oU.THREAD_CREATION,
                                                        [ef.AV]: w === J.oU.PROFILE_BIO_INPUT,
                                                        [ef.GR]: w === J.oU.OVERLAY_INLINE_REPLY,
                                                    },
                                                    c,
                                                ),
                                                "aria-labelledby": eP,
                                                showValueWhenDisabled: ej,
                                            }),
                                        }),
                                        tY,
                                        tH,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(es.a, { channel: L, type: w, pendingScheduledMessage: eH }),
                        te ? null : (0, r.jsx)(v.A, { ref: eK, channel: L, canOnlyUseTextCommands: tM }),
                        (0, r.jsx)(C.A, {
                            ref: td,
                            channel: L,
                            canMentionRoles: en,
                            canMentionChannels: eu,
                            useNewSlashCommands: e9,
                            canOnlyUseTextCommands: tM,
                            canSendStickers: w.stickers?.allowSending,
                            canSendSoundmoji: w.soundmoji?.allowSending,
                            textValue: n,
                            focused: M,
                            expressionPickerView: tN,
                            type: w,
                            targetRef: eW,
                            editorRef: ez,
                            onSendMessage: tu,
                            onSendSticker: tm,
                            onVisibilityChange: tD,
                            editorScrollerRef: eq,
                            editorHeight: tI,
                            barsHeight: 40 * tG.floating.length,
                            setValue: (e, t) => to?.(null, e, t),
                            position: eU,
                        }),
                        (0, r.jsx)(P.A, { textValue: n, editorHeight: tI, channelId: L.id }),
                        tW,
                        eG,
                    ],
                }),
                (0, r.jsx)(p.dzK, { error: k }),
                tC
                    ? null
                    : (0, r.jsx)(D.A, {
                          positionTargetRef: eW,
                          type: w,
                          onSelectGIF: tp,
                          onSelectEmoji: th,
                          onSelectSticker: tm,
                          onSelectSound: tE,
                          onSelectKaomoji: tg,
                          channel: L,
                          closeOnModalOuterClick: eV,
                          parentModalKey: eB,
                          position: "top",
                          align: "right",
                          positionLayerClassName: ef.BD,
                      }),
            ],
        }),
    });
}
let ex = i.memo(i.forwardRef(eM));
