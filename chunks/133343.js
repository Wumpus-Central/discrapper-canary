"use strict";
n.d(t, {
    Ay: () => ex,
    C: () => eT,
    HG: () => ey,
    L0: () => eR,
    MD: () => eD,
    NO: () => eI,
    N_: () => ev,
    Sk: () => eb,
    Vu: () => eA,
    Zx: () => eg,
    ck: () => eO,
    ml: () => eN,
    uW: () => eM,
    v7: () => eC,
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
    P = n(135621),
    x = n(235430),
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
    Z = n(203982),
    X = n(488926),
    Q = n(723702),
    J = n(486319),
    ee = n(355622),
    et = n(415409),
    en = n(824842),
    er = n(612394),
    ei = n(877146),
    es = n(147025),
    ea = n(776384),
    eo = n(171593),
    el = n(257108),
    eu = n(135261),
    ec = n(711371),
    ed = n(476739),
    e_ = n(652215);
n(827669);
var ef = n(698279),
    ep = n(266599);
let eh = 450;
function em(e) {
    return e !== j.A.getChannelId();
}
function eE(e, t) {
    return (e && t.submit?.clearOnSubmit) ?? !1;
}
function eg(e, t, s, a, o) {
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
                                n.e("94857"),
                                n.e("48840"),
                                n.e("10730"),
                                n.e("7602"),
                                n.e("41223"),
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
                        i = eE(n, t),
                        l = null != s.current;
                    i &&
                        (em(o)
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
function eA(e, t, n) {
    return i.useCallback(
        (r) => {
            if (t === ee.oU.CREATE_FORUM_POST || t === ee.oU.CREATE_ANNOUNCEMENT_POST) n.current?.insertGIF(r);
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
function eI(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            null != n && null != i && i.insertEmoji({ emoji: n, willClose: r }), r && (0, b.v8)();
        },
        [e],
    );
}
function eT(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: s, chatInputType: a, submit: o } = e,
        { analyticsLocations: l } = (0, A.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (a === ee.oU.CREATE_ANNOUNCEMENT_POST || (0, G.YS)(i, r, s, a.drafts.type)
                    ? ((0, er.fh)({
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
function eS(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let s = e.current;
            null != n &&
                null != s &&
                (z.default.track(e_.HAw.SOUNDMOJI_SELECT, {
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
function ey(e) {
    return i.useCallback(
        (t) => {
            let n = e.current;
            null != n && n.insertKaomoji(t), (0, b.v8)(), n?.focus();
        },
        [e],
    );
}
function ev(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, b.r$)(ef.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, b.r$)(ef.kx.GIF, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, b.r$)(ef.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, q.Vo)({ event: e_.jej.TOGGLE_EMOJI_POPOUT, handler: r }),
        (0, q.Vo)({ event: e_.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, q.Vo)({ event: e_.jej.TOGGLE_STICKER_PICKER, handler: a });
}
function eN(e, t, n) {
    let [r] = i.useState(() => new o.EventEmitter());
    i.useEffect(() => {
        r.emit("text-changed", t, n);
    }, [t, n, r]);
    let s = (t) => {
        null != e.current && r.emit("selection-changed", t);
    };
    return { eventEmitter: r, handleEditorSelectionChanged: s };
}
function eC() {
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
function eb(e, t, n, r) {
    let i = e.getGuildId(),
        s = (0, f.bG)([M.A], () => null != i && M.A.isLurking(i), [i]),
        a = (0, f.bG)([B.Ay, K.default], () => {
            let e = K.default.getCurrentUser();
            return (null != i && null != e ? B.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, f.cf)([H.A], () => {
            let i = e.isPrivate(),
                s = H.A.computePermissions(e),
                o = _.zy(s, e_.xBc.CREATE_PUBLIC_THREADS) || _.zy(s, e_.xBc.CREATE_PRIVATE_THREADS),
                l =
                    (!t.permissions?.requireCreateTherads || o) &&
                    (!t.permissions?.requireSendMessages || _.zy(s, e_.xBc.SEND_MESSAGES)),
                u = l && _.zy(s, e_.xBc.ATTACH_FILES),
                c = null != n,
                d = (0, F.UJ)(e);
            return {
                disabled: r || a || (!i && !l) || d,
                canAttachFiles: !0 === t.attachments && (i || a || u || c),
                canCreateThreads: o,
                canEveryoneSendMessages: X.MJ(e_.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, a]);
    return { isLurking: s, isPendingMember: a, ...o };
}
function eD(e, t, n) {
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
function eL(e, t, n) {
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
function ew(e, t) {
    let [n, r] = i.useState({ selectedAutocompleteInputType: null, selectedAutocompleteInputError: !1 }),
        s = i.useCallback(() => {
            let e,
                n = t.current?.getSlateEditor();
            null != n && (e = ec.VW.getSelectedParentOfType(n, R.mk)?.[0]),
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
let eM = (e, t) => ({
    handleAutocompleteVisibilityChange: i.useCallback(
        (n) => {
            n && (0, b.v8)(e, t);
        },
        [e, t],
    ),
});
function eP(e, t) {
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
        highlighted: X,
        canMentionRoles: er,
        canMentionChannels: ec,
        maxCharacterCount: ef,
        showRemainingCharsAfterCount: em,
        allowNewLines: eE = !0,
        characterCountClassName: eP,
        "aria-describedby": ex,
        "aria-labelledby": ek,
        setEditorRef: eU,
        autoCompletePosition: eG,
        children: eF,
        disableThemedBackground: eV = !1,
        emojiPickerCloseOnModalOuterClick: eB,
        parentModalKey: eH,
        pendingScheduledMessage: ej,
        showValueWhenDisabled: eY = !1,
    } = e;
    u()(null != w, "chat input type must be set");
    let { analyticsLocations: eW } = (0, A.Ay)(g.A.CHANNEL_TEXT_AREA),
        eK = eR(t),
        e$ = i.useRef(null),
        ez = i.useRef(null),
        eq = i.useRef(null),
        eZ = i.useRef(null),
        eX = i.useRef(null);
    eU?.(eq.current);
    let eQ = (0, I.A)(L),
        [eJ, e0] = i.useState(!eQ);
    (0, m.i4)(eK, (e) => {
        let { width: t } = e;
        return e0(!eQ && (null == t || t > eh));
    });
    let { activeCommand: e1, activeCommandSection: e2 } = (0, f.cf)([y.A], () => ({
            activeCommand: w.commands?.enabled ? y.A.getActiveCommand(L.id) : null,
            activeCommandSection: w.commands?.enabled ? y.A.getActiveCommandSection(L.id) : null,
        })),
        {
            isLurking: e3,
            isPendingMember: e6,
            disabled: e4,
            canAttachFiles: e5,
            canCreateThreads: e7,
            canEveryoneSendMessages: e8,
        } = eb(L, w, e1, T),
        e9 = w.toolbarType === ee.O1.STATIC,
        te = !V.D_.useSetting() && !(0, Q.isAndroidWeb)() && null != window.ResizeObserver,
        tt = !te || !w.commands?.enabled || !M || "/" !== n,
        tn = (0, P.A)(),
        { fontSize: tr } = (0, f.cf)([E.A], () => ({ fontSize: E.A.fontSize })),
        ti = (0, f.bG)([Y.A], () => Y.A.isEnabled());
    ev(w, e4, L.id);
    let { eventEmitter: ts, handleEditorSelectionChanged: ta } = eN(eq, n, s),
        to = i.useRef(n);
    to.current = n;
    let tl = i.useCallback(
            (e, t, n) => {
                "/" === t && "" === to.current && w.commands?.enabled && ts.emit("command-sentinel-typed"),
                    H?.(e, t, n);
            },
            [H, w.commands?.enabled, ts],
        ),
        { submitting: tu, submit: tc, handleSubmit: td } = eg(z, w, eq, eX, L.id),
        { autocompleteRef: t_, handleMaybeShowAutocomplete: tf, handleHideAutocomplete: tp } = eC(),
        th = eA(tc, w, eq),
        tm = eI(eq),
        tE = eT({ editorRef: eq, disabled: e4, textValue: n, channelId: L.id, chatInputType: w, submit: z }),
        tg = eS(eq, L),
        tA = ey(eq),
        tI = i.useCallback(() => eX?.current?.hide(), []),
        { editorHeight: tT, handleResize: tS } = eO(j),
        { handleTab: ty, handleEnter: tv, handleMoveSelection: tN } = eL(t_, e$, tt),
        { expressionPickerView: tC, shouldHideExpressionPicker: tR, handleOuterClick: tO } = eD(w, eq, L.id),
        { selectedAutocompleteInputType: tb, selectedAutocompleteInputError: tD } = ew(ts, eq),
        { handleAutocompleteVisibilityChange: tL } = eM(w, L.id),
        tw = (0, N.A)({ type: w, channelId: L.id }),
        tM = i.useCallback(() => {
            ts.emit("submit-failure");
        }, [ts]);
    (0, J.R)(ts, L.guild_id, L.id);
    let tP = null != B,
        tx = (e4 && !((e3 || e6) && e8)) || (tu && w.submit?.useDisabledStylesOnSubmit),
        tk = null;
    null != e1 ? (tk = G?.(e1, e2, ep.g$)) : (!e4 || e7) && (tk = U?.(tP, ep.g$));
    let tU = te && null != s && !e4 && w.showCharacterCount && null == e1,
        tG = te && !__OVERLAY__ && null != s && null == e1 && w.toolbarType !== ee.O1.NONE && !e4,
        tF = (0, ei.Y)({
            channel: L,
            type: w,
            activeCommand: e1,
            pendingReply: B,
            pendingScheduledMessage: ej,
            selectedAutocompleteInputType: tb,
            selectedAutocompleteInputError: tD,
        }),
        tV = 0 === n.trim().length,
        tB = w.layout === ee.wt.INLINE,
        tH = w.layout === ee.wt.FLUSH,
        tj = (0, r.jsx)("div", { ref: ez, className: ep.BW }),
        tY = tw ? (0, r.jsx)(S.A, { align: "right", positionTargetRef: ez, channel: L }) : null,
        tW =
            null != F
                ? F()
                : (0, r.jsx)(es.A, {
                      type: w,
                      disabled: e4,
                      channel: L,
                      handleSubmit: td,
                      isEmpty: tV,
                      showAllButtons: eJ,
                  }),
        tK = tU
            ? (0, r.jsx)(el.A, {
                  type: w,
                  textValue: n,
                  className: eP,
                  maxCharacterCount: ef,
                  showRemainingCharsAfterCount: em,
              })
            : null;
    return (
        i.useEffect(() => {
            M && Z._.dispatch(e_.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: L.id });
        }, [M, L.id]),
        (0, r.jsx)(O.Sv, {
            value: ts,
            children: (0, r.jsxs)(A.f5, {
                value: eW,
                children: [
                    tG && e9
                        ? (0, r.jsx)(ed.A, { editorRef: eq, type: w, channel: L })
                        : tG
                          ? (0, r.jsx)(eu.A, { ref: eX, editorRef: eq, containerRef: eZ, options: w.markdown })
                          : null,
                    (0, r.jsxs)("div", {
                        ref: eK,
                        className: a()(o, {
                            [ep.gM]: !0,
                            [ep.h9]: tx,
                            [ep.mr]: X,
                            [ep.Wn]: d.Fr,
                            [ep.Ls]: tB,
                            [ep.AH]: tH,
                            [ep.z3]: null != k,
                        }),
                        children: [
                            tB || tH ? null : (0, r.jsx)(ei.A, { bars: tF }),
                            (0, r.jsxs)("div", {
                                ref: eZ,
                                onScroll: tI,
                                className: a()(l, { [ep.xx]: !0, [ep.k6]: !eV, [ep.Ri]: tF.stacked.length > 0 }),
                                children: [
                                    (0, r.jsx)(en.A, { channelId: L.id, chatInputType: w }),
                                    w.hideAttachmentArea
                                        ? null
                                        : (0, r.jsx)(eo.A, { channelId: L.id, type: w, canAttachFiles: e5 }),
                                    (0, r.jsxs)("div", {
                                        className: a()(ep.vW, {
                                            [ep.BF]: tx,
                                            [ep.RL]: w !== ee.oU.EDIT && (null != tk || (tx && null == tk) || e3),
                                            [ep.fk]: w === ee.oU.THREAD_CREATION,
                                            [ep.TZ]: w === ee.oU.CREATE_FORUM_POST || w === ee.oU.FORWARD_MESSAGE_INPUT,
                                            [ep.$i]: w === ee.oU.USER_PROFILE_REPLY,
                                        }),
                                        onMouseDown: tO,
                                        children: [
                                            tY,
                                            tk,
                                            (0, r.jsx)(p.vN3, {
                                                ringTarget: eK,
                                                ringClassName: ep.Rg,
                                                children: (0, r.jsx)(et.A, {
                                                    ref: eq,
                                                    id: _,
                                                    focused: M,
                                                    useSlate: te,
                                                    textValue: n,
                                                    richValue: s,
                                                    disabled: e4,
                                                    placeholder: R,
                                                    required: h,
                                                    accessibilityLabel: b,
                                                    isPreviewing: (e3 || e6) && e8,
                                                    channel: L,
                                                    type: w,
                                                    canPasteFiles: e5,
                                                    uploadPromptCharacterCount: e_.CS1,
                                                    maxCharacterCount: ef ?? tn,
                                                    allowNewLines: eE,
                                                    "aria-describedby": ex,
                                                    onChange: tl,
                                                    onResize: tS,
                                                    onBlur: W,
                                                    onFocus: K,
                                                    onKeyDown: $,
                                                    onSubmit: tc,
                                                    onSubmitFailure: tM,
                                                    onTab: ty,
                                                    onEnter: tv,
                                                    onMoveSelection: tN,
                                                    onSelectionChanged: ta,
                                                    onMaybeShowAutocomplete: tf,
                                                    onHideAutocomplete: tp,
                                                    promptToUpload: q,
                                                    fontSize: tr,
                                                    spellcheckEnabled: ti,
                                                    canOnlyUseTextCommands: tP,
                                                    className: a()(
                                                        {
                                                            [ep.QI]: w === ee.oU.THREAD_CREATION,
                                                            [ep.AV]: w === ee.oU.PROFILE_BIO_INPUT,
                                                            [ep.GR]: w === ee.oU.OVERLAY_INLINE_REPLY,
                                                        },
                                                        c,
                                                    ),
                                                    "aria-labelledby": ek,
                                                    showValueWhenDisabled: eY,
                                                }),
                                            }),
                                            tW,
                                            tj,
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(ea.a, { channel: L, type: w, pendingScheduledMessage: ej }),
                            tt ? null : (0, r.jsx)(v.A, { ref: e$, channel: L, canOnlyUseTextCommands: tP }),
                            (0, r.jsx)(C.A, {
                                ref: t_,
                                channel: L,
                                canMentionRoles: er,
                                canMentionChannels: ec,
                                useNewSlashCommands: te,
                                canOnlyUseTextCommands: tP,
                                canSendStickers: w.stickers?.allowSending,
                                canSendSoundmoji: w.soundmoji?.allowSending,
                                textValue: n,
                                focused: M,
                                expressionPickerView: tC,
                                type: w,
                                targetRef: eK,
                                editorRef: eq,
                                onSendMessage: tc,
                                onSendSticker: tE,
                                onVisibilityChange: tL,
                                editorScrollerRef: eZ,
                                editorHeight: tT,
                                barsHeight: 40 * tF.floating.length,
                                setValue: (e, t) => tl?.(null, e, t),
                                position: eG,
                            }),
                            (0, r.jsx)(x.A, { textValue: n, editorHeight: tT, channelId: L.id }),
                            tK,
                            eF,
                        ],
                    }),
                    (0, r.jsx)(p.dzK, { error: k }),
                    tR
                        ? null
                        : (0, r.jsx)(D.A, {
                              positionTargetRef: eK,
                              type: w,
                              onSelectGIF: th,
                              onSelectEmoji: tm,
                              onSelectSticker: tE,
                              onSelectSound: tg,
                              onSelectKaomoji: tA,
                              channel: L,
                              closeOnModalOuterClick: eB,
                              parentModalKey: eH,
                              position: "top",
                              align: "right",
                              positionLayerClassName: ep.BD,
                          }),
                ],
            }),
        })
    );
}
let ex = i.memo(i.forwardRef(eP));
