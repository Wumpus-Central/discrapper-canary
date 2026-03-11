"use strict";
n.d(t, {
    Ay: () => eM,
    C: () => eI,
    L0: () => eN,
    MD: () => eO,
    NO: () => eA,
    N_: () => eS,
    Sk: () => eR,
    Vu: () => eg,
    Zx: () => eE,
    ck: () => eC,
    ml: () => ey,
    uW: () => eL,
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
    ef = n(178588);
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
                                n.e("14138"),
                                n.e("49924"),
                                n.e("94857"),
                                n.e("48840"),
                                n.e("10730"),
                                n.e("7602"),
                                n.e("24188"),
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
function eS(e, t, n) {
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
function ey(e, t, n) {
    let [r] = i.useState(() => new o.EventEmitter());
    i.useEffect(() => {
        r.emit("text-changed", t, n);
    }, [t, n, r]);
    let s = (t) => {
        null != e.current && r.emit("selection-changed", t);
    };
    return { eventEmitter: r, handleEditorSelectionChanged: s };
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
function eN(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function eC(e) {
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
function eO(e, t, n) {
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
function eb(e, t, n) {
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
function eD(e, t) {
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
let eL = (e, t) => ({
    handleAutocompleteVisibilityChange: i.useCallback(
        (n) => {
            n && (0, b.v8)(e, t);
        },
        [e, t],
    ),
});
function ew(e, t) {
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
        characterCountClassName: ew,
        "aria-describedby": eM,
        "aria-labelledby": ex,
        setEditorRef: eP,
        autoCompletePosition: ek,
        children: eU,
        disableThemedBackground: eG = !1,
        emojiPickerCloseOnModalOuterClick: eF,
        parentModalKey: eV,
        pendingScheduledMessage: eB,
        showValueWhenDisabled: eH = !1,
    } = e;
    u()(null != w, "chat input type must be set");
    let { analyticsLocations: ej } = (0, A.Ay)(g.A.CHANNEL_TEXT_AREA),
        eY = eN(t),
        eW = i.useRef(null),
        eK = i.useRef(null),
        e$ = i.useRef(null),
        ez = i.useRef(null),
        eq = i.useRef(null);
    eP?.(e$.current);
    let eZ = (0, I.A)(L),
        [eX, eQ] = i.useState(!eZ);
    (0, m.i4)(eY, (e) => {
        let { width: t } = e;
        return eQ(!eZ && (null == t || t > ep));
    });
    let { activeCommand: eJ, activeCommandSection: e0 } = (0, f.cf)([y.A], () => ({
            activeCommand: w.commands?.enabled ? y.A.getActiveCommand(L.id) : null,
            activeCommandSection: w.commands?.enabled ? y.A.getActiveCommandSection(L.id) : null,
        })),
        {
            isLurking: e1,
            isPendingMember: e2,
            disabled: e3,
            canAttachFiles: e6,
            canCreateThreads: e4,
            canEveryoneSendMessages: e5,
        } = eR(L, w, eJ, T),
        e7 = w.toolbarType === J.O1.STATIC,
        e8 = !V.D_.useSetting() && !(0, X.isAndroidWeb)() && null != window.ResizeObserver,
        e9 = !e8 || !w.commands?.enabled || !M || "/" !== n,
        te = (0, x.A)(),
        { fontSize: tt } = (0, f.cf)([E.A], () => ({ fontSize: E.A.fontSize })),
        tn = (0, f.bG)([Y.A], () => Y.A.isEnabled());
    eS(w, e3, L.id);
    let { eventEmitter: tr, handleEditorSelectionChanged: ti } = ey(e$, n, s),
        ts = i.useRef(n);
    ts.current = n;
    let ta = i.useCallback(
            (e, t, n) => {
                "/" === t && "" === ts.current && w.commands?.enabled && tr.emit("command-sentinel-typed"),
                    H?.(e, t, n);
            },
            [H, w.commands?.enabled, tr],
        ),
        { submitting: to, submit: tl, handleSubmit: tu } = eE(z, w, e$, eq, L.id),
        { autocompleteRef: tc, handleMaybeShowAutocomplete: td, handleHideAutocomplete: t_ } = ev(),
        tf = eg(tl, w, e$),
        tp = eA(e$),
        th = eI({ editorRef: e$, disabled: e3, textValue: n, channelId: L.id, chatInputType: w, submit: z }),
        tm = eT(e$, L),
        tE = i.useCallback(() => eq?.current?.hide(), []),
        { editorHeight: tg, handleResize: tA } = eC(j),
        { handleTab: tI, handleEnter: tT, handleMoveSelection: tS } = eb(tc, eW, e9),
        { expressionPickerView: ty, shouldHideExpressionPicker: tv, handleOuterClick: tN } = eO(w, e$, L.id),
        { selectedAutocompleteInputType: tC, selectedAutocompleteInputError: tR } = eD(tr, e$),
        { handleAutocompleteVisibilityChange: tO } = eL(w, L.id),
        tb = (0, N.A)({ type: w, channelId: L.id }),
        tD = i.useCallback(() => {
            tr.emit("submit-failure");
        }, [tr]);
    (0, Q.R)(tr, L.guild_id, L.id);
    let tL = null != B,
        tw = (e3 && !((e1 || e2) && e5)) || (to && w.submit?.useDisabledStylesOnSubmit),
        tM = null;
    null != eJ ? (tM = G?.(eJ, e0, ef.g$)) : (!e3 || e4) && (tM = U?.(tL, ef.g$));
    let tx = e8 && null != s && !e3 && w.showCharacterCount && null == eJ,
        tP = e8 && !__OVERLAY__ && null != s && null == eJ && w.toolbarType !== J.O1.NONE && !e3,
        tk = (0, er.Y)({
            channel: L,
            type: w,
            activeCommand: eJ,
            pendingReply: B,
            pendingScheduledMessage: eB,
            selectedAutocompleteInputType: tC,
            selectedAutocompleteInputError: tR,
        }),
        tU = 0 === n.trim().length,
        tG = w.layout === J.wt.INLINE,
        tF = w.layout === J.wt.FLUSH,
        tV = (0, r.jsx)("div", { ref: eK, className: ef.BW }),
        tB = tb ? (0, r.jsx)(S.A, { align: "right", positionTargetRef: eK, channel: L }) : null,
        tH =
            null != F
                ? F()
                : (0, r.jsx)(ei.A, {
                      type: w,
                      disabled: e3,
                      channel: L,
                      handleSubmit: tu,
                      isEmpty: tU,
                      showAllButtons: eX,
                  }),
        tj = tx
            ? (0, r.jsx)(eo.A, {
                  type: w,
                  textValue: n,
                  className: ew,
                  maxCharacterCount: e_,
                  showRemainingCharsAfterCount: eh,
              })
            : null;
    return (0, r.jsx)(O.Sv, {
        value: tr,
        children: (0, r.jsxs)(A.f5, {
            value: ej,
            children: [
                tP && e7
                    ? (0, r.jsx)(ec.A, { editorRef: e$, type: w, channel: L })
                    : tP
                      ? (0, r.jsx)(el.A, { ref: eq, editorRef: e$, containerRef: ez, options: w.markdown })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eY,
                    className: a()(o, {
                        [ef.gM]: !0,
                        [ef.h9]: tw,
                        [ef.mr]: Z,
                        [ef.Wn]: d.Fr,
                        [ef.Ls]: tG,
                        [ef.AH]: tF,
                        [ef.z3]: null != k,
                    }),
                    children: [
                        tG || tF ? null : (0, r.jsx)(er.A, { bars: tk }),
                        (0, r.jsxs)("div", {
                            ref: ez,
                            onScroll: tE,
                            className: a()(l, { [ef.xx]: !0, [ef.k6]: !eG, [ef.Ri]: tk.stacked.length > 0 }),
                            children: [
                                (0, r.jsx)(et.A, { channelId: L.id, chatInputType: w }),
                                w.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(ea.A, { channelId: L.id, type: w, canAttachFiles: e6 }),
                                (0, r.jsxs)("div", {
                                    className: a()(ef.vW, {
                                        [ef.BF]: tw,
                                        [ef.RL]: w !== J.oU.EDIT && (null != tM || (tw && null == tM) || e1),
                                        [ef.fk]: w === J.oU.THREAD_CREATION,
                                        [ef.TZ]: w === J.oU.CREATE_FORUM_POST || w === J.oU.FORWARD_MESSAGE_INPUT,
                                        [ef.$i]: w === J.oU.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tN,
                                    children: [
                                        tB,
                                        tM,
                                        (0, r.jsx)(p.vN3, {
                                            ringTarget: eY,
                                            ringClassName: ef.Rg,
                                            children: (0, r.jsx)(ee.A, {
                                                ref: e$,
                                                id: _,
                                                focused: M,
                                                useSlate: e8,
                                                textValue: n,
                                                richValue: s,
                                                disabled: e3,
                                                placeholder: R,
                                                required: h,
                                                accessibilityLabel: b,
                                                isPreviewing: (e1 || e2) && e5,
                                                channel: L,
                                                type: w,
                                                canPasteFiles: e6,
                                                uploadPromptCharacterCount: ed.CS1,
                                                maxCharacterCount: e_ ?? te,
                                                allowNewLines: em,
                                                "aria-describedby": eM,
                                                onChange: ta,
                                                onResize: tA,
                                                onBlur: W,
                                                onFocus: K,
                                                onKeyDown: $,
                                                onSubmit: tl,
                                                onSubmitFailure: tD,
                                                onTab: tI,
                                                onEnter: tT,
                                                onMoveSelection: tS,
                                                onSelectionChanged: ti,
                                                onMaybeShowAutocomplete: td,
                                                onHideAutocomplete: t_,
                                                promptToUpload: q,
                                                fontSize: tt,
                                                spellcheckEnabled: tn,
                                                canOnlyUseTextCommands: tL,
                                                className: a()(
                                                    {
                                                        [ef.QI]: w === J.oU.THREAD_CREATION,
                                                        [ef.AV]: w === J.oU.PROFILE_BIO_INPUT,
                                                        [ef.GR]: w === J.oU.OVERLAY_INLINE_REPLY,
                                                    },
                                                    c,
                                                ),
                                                "aria-labelledby": ex,
                                                showValueWhenDisabled: eH,
                                            }),
                                        }),
                                        tH,
                                        tV,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(es.a, { channel: L, type: w, pendingScheduledMessage: eB }),
                        e9 ? null : (0, r.jsx)(v.A, { ref: eW, channel: L, canOnlyUseTextCommands: tL }),
                        (0, r.jsx)(C.A, {
                            ref: tc,
                            channel: L,
                            canMentionRoles: en,
                            canMentionChannels: eu,
                            useNewSlashCommands: e8,
                            canOnlyUseTextCommands: tL,
                            canSendStickers: w.stickers?.allowSending,
                            canSendSoundmoji: w.soundmoji?.allowSending,
                            textValue: n,
                            focused: M,
                            expressionPickerView: ty,
                            type: w,
                            targetRef: eY,
                            editorRef: e$,
                            onSendMessage: tl,
                            onSendSticker: th,
                            onVisibilityChange: tO,
                            editorScrollerRef: ez,
                            editorHeight: tg,
                            barsHeight: 40 * tk.floating.length,
                            setValue: (e, t) => ta?.(null, e, t),
                            position: ek,
                        }),
                        (0, r.jsx)(P.A, { textValue: n, editorHeight: tg, channelId: L.id }),
                        tj,
                        eU,
                    ],
                }),
                (0, r.jsx)(p.dzK, { error: k }),
                tv
                    ? null
                    : (0, r.jsx)(D.A, {
                          positionTargetRef: eY,
                          type: w,
                          onSelectGIF: tf,
                          onSelectEmoji: tp,
                          onSelectSticker: th,
                          onSelectSound: tm,
                          channel: L,
                          closeOnModalOuterClick: eF,
                          parentModalKey: eV,
                          position: "top",
                          align: "right",
                          positionLayerClassName: ef.BD,
                      }),
            ],
        }),
    });
}
let eM = i.memo(i.forwardRef(ew));
