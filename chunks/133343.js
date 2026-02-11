"use strict";
n.d(t, {
    Ay: () => eU,
    BX: () => eP,
    C: () => eS,
    L0: () => eR,
    MD: () => eL,
    NO: () => ey,
    N_: () => eC,
    Sk: () => eD,
    Vu: () => eT,
    Zx: () => eI,
    ck: () => eO,
    ml: () => eb,
    uW: () => eM,
    v7: () => eN,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(143236),
    l = n(284009),
    u = n.n(l),
    c = n(942381),
    d = n(607399),
    _ = n(136722),
    f = n(311907),
    h = n(397927),
    p = n(465532),
    g = n(765671),
    E = n(775602),
    A = n(793574),
    I = n(688810),
    T = n(177640),
    y = n(989837),
    S = n(667889),
    v = n(861382),
    C = n(391848),
    b = n(186226),
    N = n(875163),
    R = n(31498),
    O = n(598071),
    D = n(151271),
    L = n(834755),
    w = n(256265),
    x = n(380544),
    P = n(857071),
    M = n(968011),
    k = n(135621),
    U = n(235430),
    G = n(931664),
    F = n(631576),
    V = n(378058),
    B = n(406704),
    j = n(253932),
    H = n(696451),
    Y = n(576705),
    W = n(309010),
    K = n(638128),
    $ = n(522602),
    z = n(287809),
    q = n(821102),
    X = n(954571),
    Z = n(234320),
    Q = n(488926),
    J = n(723702),
    ee = n(486319),
    et = n(355622),
    en = n(415409),
    er = n(824842),
    ei = n(612394),
    ea = n(877146),
    es = n(147025),
    eo = n(776384),
    el = n(171593),
    eu = n(257108),
    ec = n(135261),
    ed = n(711371),
    e_ = n(476739),
    ef = n(652215);
n(827669);
var eh = n(698279),
    ep = n(111314);
let em = 450,
    eg = 250;
function eE(e) {
    return e !== W.A.getChannelId();
}
function eA(e, t) {
    return (e && t.submit?.clearOnSubmit) ?? !1;
}
function eI(e, t, a, s, o) {
    let [l, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, _, f, g, E) => {
                if (l) return;
                u(!0);
                let A = G.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    I = $.A.getUploads(o, t.drafts.type) ?? [];
                if (null == d && !f && !g && (0, w.xz)(I, o)) {
                    u(!1),
                        (0, h.mMO)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49681"),
                                n.e("99011"),
                                n.e("94857"),
                                n.e("7034"),
                                n.e("10730"),
                                n.e("7602"),
                                n.e("40899"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    ...t,
                                    threadId: o,
                                    attachments: I,
                                    sendMessage: () => c(i, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: I,
                    stickers: A,
                    command: d,
                    commandOptionValues: _,
                    isGif: f,
                    gifMetadata: E,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: r } = e,
                        i = eA(n, t),
                        l = null != a.current;
                    i &&
                        (eE(o)
                            ? p.A.saveDraft(o, "", t.drafts.type)
                            : l && (a.current?.clearValue(), s.current?.hide())),
                        l && (u(!1), (0, D.v8)(), r && a.current?.focus());
                });
            },
            [a, s, e, l, t, o],
        );
    return {
        submitting: l,
        submit: c,
        handleSubmit: i.useCallback(
            (e) => {
                a?.current?.submit(e);
            },
            [a],
        ),
    };
}
function eT(e, t, n) {
    return i.useCallback(
        (r) => {
            if (t === et.oU.CREATE_FORUM_POST || t === et.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(r);
            else {
                let t = {
                    gif_provider: r.provider ?? (0, x.cf)(),
                    load_id: q.A.getAnalyticsID(),
                    source_object: "GIF Picker",
                    gif_url: r.url,
                    gif_id: r.id,
                };
                e(r.url, void 0, void 0, !0, void 0, t);
            }
            (0, D.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function ey(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            null != n && null != i && i.insertEmoji({ emoji: n, willClose: r }), r && (0, D.v8)();
        },
        [e],
    );
}
function eS(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
        { analyticsLocations: l } = (0, I.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (s === et.oU.CREATE_ANNOUNCEMENT_POST || (0, V.YS)(i, r, a, s.drafts.type)
                    ? ((0, ei.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != G.A.getStickerPreview(a, s.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, F.$x)(a, e, s.drafts.type))
                    : (o({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, D.v8)(),
                t.current?.focus());
        },
        [n, r, a, t, l, o, s],
    );
}
function ev(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (X.default.track(ef.HAw.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r,
                }),
                a.insertSound(n)),
                i && (0, D.v8)(),
                a?.focus();
        },
        [e, t.id, t.guild_id],
    );
}
function eC(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, D.r$)(eh.kx.EMOJI, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, D.r$)(eh.kx.GIF, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, D.r$)(eh.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, Z.Vo)({ event: ef.jej.TOGGLE_EMOJI_POPOUT, handler: r }),
        (0, Z.Vo)({ event: ef.jej.TOGGLE_GIF_PICKER, handler: a }),
        (0, Z.Vo)({ event: ef.jej.TOGGLE_STICKER_PICKER, handler: s });
}
function eb(e, t, n) {
    let [r] = i.useState(() => new o.EventEmitter());
    i.useEffect(() => {
        r.emit("text-changed", t, n);
    }, [t, n, r]);
    let a = (t) => {
        null != e.current && r.emit("selection-changed", t);
    };
    return { eventEmitter: r, handleEditorSelectionChanged: a };
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
function eR(e) {
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
function eD(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, f.bG)([P.A], () => null != i && P.A.isLurking(i), [i]),
        s = (0, f.bG)([H.Ay, z.default], () => {
            let e = z.default.getCurrentUser();
            return (null != i && null != e ? H.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, f.cf)([Y.A], () => {
            let i = e.isPrivate(),
                a = Y.A.computePermissions(e),
                o = _.zy(a, ef.xBc.CREATE_PUBLIC_THREADS) || _.zy(a, ef.xBc.CREATE_PRIVATE_THREADS),
                l =
                    (!t.permissions?.requireCreateTherads || o) &&
                    (!t.permissions?.requireSendMessages || _.zy(a, ef.xBc.SEND_MESSAGES)),
                u = l && _.zy(a, ef.xBc.ATTACH_FILES),
                c = null != n,
                d = (0, B.UJ)(e);
            return {
                disabled: r || s || (!i && !l) || d,
                canAttachFiles: !0 === t.attachments && (i || s || u || c),
                canCreateThreads: o,
                canEveryoneSendMessages: Q.MJ(ef.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]);
    return { isLurking: a, isPendingMember: s, ...o };
}
function eL(e, t, n) {
    let [r, a, s] = (0, D.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        o = (0, f.bG)([y.A], () => y.A.shouldShowPopup() && y.A.activeViewType() === e && y.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, D.v8)(e, n);
        },
        [e, n],
    );
    let l = i.useCallback(() => {
            null != r || o || t.current?.handleOuterClick();
        }, [r, o, t]),
        u = null == r || null == a || a !== e || s !== n;
    return { expressionPickerView: r, shouldHideExpressionPicker: u, handleOuterClick: l };
}
function ew(e, t, n) {
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
function ex(e, t) {
    let [n, r] = i.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
        a = i.useCallback(() => {
            let e,
                n = t.current?.getSlateEditor();
            null != n && (e = ed.VW.getSelectedParentOfType(n, R.mk)?.[0]),
                r({ selectedAutocompleteInputType: e?.type ?? null, selectedAutocompleteInputError: e?.error ?? !1 });
        }, [t]);
    return (
        i.useEffect(
            () => (
                e.on("selection-changed", a),
                e.on("submit-failure", a),
                a(),
                () => {
                    e.off("selection-changed", a), e.on("submit-failure", a);
                }
            ),
            [a, e],
        ),
        n
    );
}
let eP = (e) => {
        let { enabled: t, onlyExactMatch: n } = (0, M.us)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [r, a] = i.useState(!0),
            s = i.useRef(null);
        return (
            i.useLayoutEffect(() => {
                t &&
                    !n &&
                    (clearTimeout(s.current),
                    a(!1),
                    (s.current = setTimeout(() => {
                        a(!0);
                    }, eg)));
            }, [n, t, e]),
            r
        );
    },
    eM = (e, t) => {
        let { enabled: n } = (0, M.us)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [r, a] = i.useState(null);
        return {
            currentAutocompleteType: r,
            handleAutocompleteVisibilityChange: i.useCallback(
                (r, i) => {
                    n && a(i), r && (0, D.v8)(e, t);
                },
                [n, e, t],
            ),
        };
    };
function ek(e, t) {
    let {
        textValue: n,
        richValue: a,
        className: o,
        innerClassName: l,
        editorClassName: c,
        id: _,
        required: p,
        disabled: y,
        placeholder: R,
        accessibilityLabel: D,
        channel: w,
        type: x,
        focused: P,
        error: M,
        renderAttachButton: G,
        renderApplicationCommandIcon: F,
        renderButtons: V,
        pendingReply: B,
        onChange: H,
        onResize: Y,
        onBlur: W,
        onFocus: $,
        onKeyDown: z,
        onSubmit: q,
        promptToUpload: X,
        highlighted: Z,
        canMentionRoles: Q,
        canMentionChannels: ei,
        maxCharacterCount: ed,
        showRemainingCharsAfterCount: eh,
        allowNewLines: eg = !0,
        characterCountClassName: eE,
        "aria-describedby": eA,
        "aria-labelledby": ek,
        setEditorRef: eU,
        autoCompletePosition: eG,
        children: eF,
        disableThemedBackground: eV = !1,
        emojiPickerCloseOnModalOuterClick: eB,
        parentModalKey: ej,
        pendingScheduledMessage: eH,
        showValueWhenDisabled: eY = !1,
    } = e;
    u()(null != x, "chat input type must be set");
    let { analyticsLocations: eW } = (0, I.Ay)(A.A.CHANNEL_TEXT_AREA),
        eK = eR(t),
        e$ = i.useRef(null),
        ez = i.useRef(null),
        eq = i.useRef(null),
        eX = i.useRef(null),
        eZ = i.useRef(null);
    eU?.(eq.current);
    let eQ = (0, T.A)(w),
        [eJ, e0] = i.useState(!eQ);
    (0, g.i4)(eK, (e) => {
        let { width: t } = e;
        return e0(!eQ && (null == t || t > em));
    });
    let { activeCommand: e1, activeCommandSection: e2 } = (0, f.cf)([v.A], () => ({
            activeCommand: x.commands?.enabled ? v.A.getActiveCommand(w.id) : null,
            activeCommandSection: x.commands?.enabled ? v.A.getActiveCommandSection(w.id) : null,
        })),
        {
            isLurking: e3,
            isPendingMember: e6,
            disabled: e4,
            canAttachFiles: e5,
            canCreateThreads: e7,
            canEveryoneSendMessages: e8,
        } = eD(w, x, e1, y),
        e9 = x.toolbarType === et.O1.STATIC,
        te = !j.D_.useSetting() && !(0, J.isAndroidWeb)() && null != window.ResizeObserver,
        tt = !te || !x.commands?.enabled || !P || "/" !== n,
        tn = (0, k.A)(),
        { fontSize: tr } = (0, f.cf)([E.A], () => ({ fontSize: E.A.fontSize })),
        ti = (0, f.bG)([K.A], () => K.A.isEnabled());
    eC(x, e4, w.id);
    let { eventEmitter: ta, handleEditorSelectionChanged: ts } = eb(eq, n, a),
        to = i.useRef(n);
    to.current = n;
    let tl = i.useCallback(
            (e, t, n) => {
                "/" === t && "" === to.current && x.commands?.enabled && ta.emit("command-sentinel-typed"),
                    H?.(e, t, n);
            },
            [H, x.commands?.enabled, ta],
        ),
        { submitting: tu, submit: tc, handleSubmit: td } = eI(q, x, eq, eZ, w.id),
        { autocompleteRef: t_, handleMaybeShowAutocomplete: tf, handleHideAutocomplete: th } = eN(),
        tp = eT(tc, x, eq),
        tm = ey(eq),
        tg = eS({ editorRef: eq, disabled: e4, textValue: n, channelId: w.id, chatInputType: x, submit: q }),
        tE = ev(eq, w),
        tA = i.useCallback(() => eZ?.current?.hide(), []),
        { editorHeight: tI, handleResize: tT } = eO(Y),
        { handleTab: ty, handleEnter: tS, handleMoveSelection: tv } = ew(t_, e$, tt),
        { expressionPickerView: tC, shouldHideExpressionPicker: tb, handleOuterClick: tN } = eL(x, eq, w.id),
        { selectedAutocompleteInputType: tR, selectedAutocompleteInputError: tO } = ex(ta, eq),
        tD = eP(n),
        { currentAutocompleteType: tL, handleAutocompleteVisibilityChange: tw } = eM(x, w.id),
        tx = (0, b.A)({ type: x, channelId: w.id }),
        tP = i.useCallback(() => {
            ta.emit("submit-failure");
        }, [ta]);
    (0, ee.R)(ta, w.guild_id, w.id);
    let tM = null != B,
        tk = (e4 && !((e3 || e6) && e8)) || (tu && x.submit?.useDisabledStylesOnSubmit),
        tU = null;
    null != e1 ? (tU = F?.(e1, e2, ep.g$)) : (!e4 || e7) && (tU = G?.(tM, ep.g$));
    let tG = te && null != a && !e4 && x.showCharacterCount && null == e1,
        tF = te && !__OVERLAY__ && null != a && null == e1 && x.toolbarType !== et.O1.NONE && !e4,
        tV = (0, ea.Y)({
            channel: w,
            type: x,
            activeCommand: e1,
            pendingReply: B,
            pendingScheduledMessage: eH,
            selectedAutocompleteInputType: tR,
            selectedAutocompleteInputError: tO,
        }),
        tB = 0 === n.trim().length,
        tj = x.layout === et.wt.INLINE,
        tH = x.layout === et.wt.FLUSH,
        tY = (0, r.jsx)("div", { ref: ez, className: ep.BW }),
        tW = tx ? (0, r.jsx)(S.A, { align: "right", positionTargetRef: ez, channel: w }) : null,
        tK =
            null != V
                ? V()
                : (0, r.jsx)(es.A, {
                      type: x,
                      disabled: e4,
                      channel: w,
                      handleSubmit: td,
                      isEmpty: tB,
                      showAllButtons: eJ,
                  }),
        t$ = tG
            ? (0, r.jsx)(eu.A, {
                  type: x,
                  textValue: n,
                  className: eE,
                  maxCharacterCount: ed,
                  showRemainingCharsAfterCount: eh,
              })
            : null;
    return (0, r.jsx)(O.Sv, {
        value: ta,
        children: (0, r.jsxs)(I.f5, {
            value: eW,
            children: [
                tF && e9
                    ? (0, r.jsx)(e_.A, { editorRef: eq, options: x.markdown, channel: w })
                    : tF
                      ? (0, r.jsx)(ec.A, { ref: eZ, editorRef: eq, containerRef: eX, options: x.markdown })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eK,
                    className: s()(o, {
                        [ep.gM]: !0,
                        [ep.h9]: tk,
                        [ep.mr]: Z,
                        [ep.Wn]: d.Fr,
                        [ep.Ls]: tj,
                        [ep.AH]: tH,
                        [ep.z3]: null != M,
                    }),
                    children: [
                        tj || tH ? null : (0, r.jsx)(ea.A, { bars: tV }),
                        (0, r.jsxs)("div", {
                            ref: eX,
                            onScroll: tA,
                            className: s()(l, { [ep.xx]: !0, [ep.k6]: !eV, [ep.Ri]: tV.stacked.length > 0 }),
                            children: [
                                (0, r.jsx)(er.A, { channelId: w.id, chatInputType: x }),
                                x.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(el.A, { channelId: w.id, type: x, canAttachFiles: e5 }),
                                (0, r.jsxs)("div", {
                                    className: s()(ep.vW, {
                                        [ep.BF]: tk,
                                        [ep.RL]: x !== et.oU.EDIT && (null != tU || (tk && null == tU) || e3),
                                        [ep.fk]: x === et.oU.THREAD_CREATION,
                                        [ep.TZ]: x === et.oU.CREATE_FORUM_POST || x === et.oU.FORWARD_MESSAGE_INPUT,
                                        [ep.$i]: x === et.oU.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tN,
                                    children: [
                                        tW,
                                        tU,
                                        (0, r.jsx)(h.vN3, {
                                            ringTarget: eK,
                                            ringClassName: ep.Rg,
                                            children: (0, r.jsx)(en.A, {
                                                ref: eq,
                                                id: _,
                                                focused: P,
                                                useSlate: te,
                                                textValue: n,
                                                richValue: a,
                                                disabled: e4,
                                                placeholder: R,
                                                required: p,
                                                accessibilityLabel: D,
                                                isPreviewing: (e3 || e6) && e8,
                                                channel: w,
                                                type: x,
                                                canPasteFiles: e5,
                                                uploadPromptCharacterCount: ef.CS1,
                                                maxCharacterCount: ed ?? tn,
                                                allowNewLines: eg,
                                                "aria-describedby": eA,
                                                onChange: tl,
                                                onResize: tT,
                                                onBlur: W,
                                                onFocus: $,
                                                onKeyDown: z,
                                                onSubmit: tc,
                                                onSubmitFailure: tP,
                                                onTab: ty,
                                                onEnter: tS,
                                                onMoveSelection: tv,
                                                onSelectionChanged: ts,
                                                onMaybeShowAutocomplete: tf,
                                                onHideAutocomplete: th,
                                                promptToUpload: X,
                                                fontSize: tr,
                                                spellcheckEnabled: ti,
                                                canOnlyUseTextCommands: tM,
                                                isEditorIdle: tD,
                                                currentAutocompleteType: tL,
                                                className: s()(
                                                    {
                                                        [ep.QI]: x === et.oU.THREAD_CREATION,
                                                        [ep.AV]: x === et.oU.PROFILE_BIO_INPUT,
                                                        [ep.GR]: x === et.oU.OVERLAY_INLINE_REPLY,
                                                    },
                                                    c,
                                                ),
                                                "aria-labelledby": ek,
                                                showValueWhenDisabled: eY,
                                            }),
                                        }),
                                        tK,
                                        tY,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(eo.a, { channel: w, type: x, pendingScheduledMessage: eH }),
                        tt ? null : (0, r.jsx)(C.A, { ref: e$, channel: w, canOnlyUseTextCommands: tM }),
                        (0, r.jsx)(N.A, {
                            ref: t_,
                            channel: w,
                            canMentionRoles: Q,
                            canMentionChannels: ei,
                            useNewSlashCommands: te,
                            canOnlyUseTextCommands: tM,
                            canSendStickers: x.stickers?.allowSending,
                            canSendSoundmoji: x.soundmoji?.allowSending,
                            textValue: n,
                            focused: P,
                            isEditorIdle: tD,
                            expressionPickerView: tC,
                            type: x,
                            targetRef: eK,
                            editorRef: eq,
                            onSendMessage: tc,
                            onSendSticker: tg,
                            onVisibilityChange: tw,
                            editorScrollerRef: eX,
                            editorHeight: tI,
                            barsHeight: 40 * tV.floating.length,
                            setValue: (e, t) => tl?.(null, e, t),
                            position: eG,
                        }),
                        (0, r.jsx)(U.A, { textValue: n, editorHeight: tI, channelId: w.id }),
                        t$,
                        eF,
                    ],
                }),
                (0, r.jsx)(h.dzK, { error: M }),
                tb
                    ? null
                    : (0, r.jsx)(L.A, {
                          positionTargetRef: eK,
                          type: x,
                          onSelectGIF: tp,
                          onSelectEmoji: tm,
                          onSelectSticker: tg,
                          onSelectSound: tE,
                          channel: w,
                          closeOnModalOuterClick: eB,
                          parentModalKey: ej,
                          position: "top",
                          align: "right",
                          positionLayerClassName: ep.BD,
                      }),
            ],
        }),
    });
}
let eU = i.memo(i.forwardRef(ek));
