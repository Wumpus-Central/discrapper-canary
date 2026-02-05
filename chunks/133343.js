"use strict";
n.d(t, {
    Ay: () => ek,
    BX: () => ex,
    C: () => ey,
    L0: () => eN,
    MD: () => eD,
    NO: () => eT,
    N_: () => ev,
    Sk: () => eO,
    Vu: () => eI,
    Zx: () => eA,
    ck: () => eR,
    ml: () => eC,
    uW: () => eP,
    v7: () => eb,
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
    p = n(397927),
    h = n(465532),
    m = n(765671),
    g = n(775602),
    E = n(793574),
    A = n(688810),
    I = n(177640),
    T = n(989837),
    y = n(667889),
    S = n(861382),
    v = n(391848),
    C = n(186226),
    b = n(875163),
    N = n(31498),
    R = n(598071),
    O = n(151271),
    D = n(834755),
    L = n(256265),
    w = n(380544),
    x = n(857071),
    P = n(968011),
    M = n(135621),
    k = n(235430),
    U = n(931664),
    G = n(631576),
    V = n(378058),
    F = n(406704),
    B = n(253932),
    j = n(696451),
    H = n(576705),
    Y = n(309010),
    W = n(638128),
    K = n(522602),
    z = n(287809),
    $ = n(821102),
    q = n(954571),
    Z = n(234320),
    Q = n(488926),
    X = n(723702),
    J = n(486319),
    ee = n(355622),
    et = n(415409),
    en = n(824842),
    er = n(612394),
    ei = n(877146),
    ea = n(147025),
    es = n(776384),
    eo = n(171593),
    el = n(257108),
    eu = n(135261),
    ec = n(711371),
    ed = n(476739),
    e_ = n(652215);
n(827669);
var ef = n(698279),
    ep = n(111314);
let eh = 450,
    em = 250;
function eg(e) {
    return e !== Y.A.getChannelId();
}
function eE(e, t) {
    return (e && t.submit?.clearOnSubmit) ?? !1;
}
function eA(e, t, a, s, o) {
    let [l, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, _, f, m, g) => {
                if (l) return;
                u(!0);
                let E = U.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = K.A.getUploads(o, t.drafts.type) ?? [];
                if (null == d && !f && !m && (0, L.xz)(A, o)) {
                    u(!1),
                        (0, p.mMO)(async () => {
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
                                    attachments: A,
                                    sendMessage: () => c(i, void 0, void 0, void 0, !0),
                                });
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: A,
                    stickers: E,
                    command: d,
                    commandOptionValues: _,
                    isGif: f,
                    gifMetadata: g,
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: r } = e,
                        i = eE(n, t),
                        l = null != a.current;
                    i &&
                        (eg(o)
                            ? h.A.saveDraft(o, "", t.drafts.type)
                            : l && (a.current?.clearValue(), s.current?.hide())),
                        l && (u(!1), (0, O.v8)(), r && a.current?.focus());
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
function eI(e, t, n) {
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
            (0, O.v8)(), n.current?.focus();
        },
        [n, e, t],
    );
}
function eT(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            null != n && null != i && i.insertEmoji({ emoji: n, willClose: r }), r && (0, O.v8)();
        },
        [e],
    );
}
function ey(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
        { analyticsLocations: l } = (0, A.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (s === ee.oU.CREATE_ANNOUNCEMENT_POST || (0, V.YS)(i, r, a, s.drafts.type)
                    ? ((0, er.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != U.A.getStickerPreview(a, s.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, G.$x)(a, e, s.drafts.type))
                    : (o({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, O.v8)(),
                t.current?.focus());
        },
        [n, r, a, t, l, o, s],
    );
}
function eS(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (q.default.track(e_.HAw.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r,
                }),
                a.insertSound(n)),
                i && (0, O.v8)(),
                a?.focus();
        },
        [e, t.id, t.guild_id],
    );
}
function ev(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, O.r$)(ef.kx.EMOJI, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, O.r$)(ef.kx.GIF, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, O.r$)(ef.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, Z.Vo)({ event: e_.jej.TOGGLE_EMOJI_POPOUT, handler: r }),
        (0, Z.Vo)({ event: e_.jej.TOGGLE_GIF_PICKER, handler: a }),
        (0, Z.Vo)({ event: e_.jej.TOGGLE_STICKER_PICKER, handler: s });
}
function eC(e, t, n) {
    let [r] = i.useState(() => new o.EventEmitter());
    i.useEffect(() => {
        r.emit("text-changed", t, n);
    }, [t, n, r]);
    let a = (t) => {
        null != e.current && r.emit("selection-changed", t);
    };
    return { eventEmitter: r, handleEditorSelectionChanged: a };
}
function eb() {
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
        a = (0, f.bG)([x.A], () => null != i && x.A.isLurking(i), [i]),
        s = (0, f.bG)([j.Ay, z.default], () => {
            let e = z.default.getCurrentUser();
            return (null != i && null != e ? j.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, f.cf)([H.A], () => {
            let i = e.isPrivate(),
                a = H.A.computePermissions(e),
                o = _.zy(a, e_.xBc.CREATE_PUBLIC_THREADS) || _.zy(a, e_.xBc.CREATE_PRIVATE_THREADS),
                l =
                    (!t.permissions?.requireCreateTherads || o) &&
                    (!t.permissions?.requireSendMessages || _.zy(a, e_.xBc.SEND_MESSAGES)),
                u = l && _.zy(a, e_.xBc.ATTACH_FILES),
                c = null != n,
                d = (0, F.UJ)(e);
            return {
                disabled: r || s || (!i && !l) || d,
                canAttachFiles: !0 === t.attachments && (i || s || u || c),
                canCreateThreads: o,
                canEveryoneSendMessages: Q.MJ(e_.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]);
    return { isLurking: a, isPendingMember: s, ...o };
}
function eD(e, t, n) {
    let [r, a, s] = (0, O.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
        o = (0, f.bG)([T.A], () => T.A.shouldShowPopup() && T.A.activeViewType() === e && T.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, O.v8)(e, n);
        },
        [e, n],
    );
    let l = i.useCallback(() => {
            null != r || o || t.current?.handleOuterClick();
        }, [r, o, t]),
        u = null == r || null == a || a !== e || s !== n;
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
        a = i.useCallback(() => {
            let e,
                n = t.current?.getSlateEditor();
            null != n && (e = ec.VW.getSelectedParentOfType(n, N.mk)?.[0]),
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
let ex = (e) => {
        let { enabled: t, onlyExactMatch: n } = (0, P.us)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
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
                    }, em)));
            }, [n, t, e]),
            r
        );
    },
    eP = (e, t) => {
        let { enabled: n } = (0, P.us)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [r, a] = i.useState(null);
        return {
            currentAutocompleteType: r,
            handleAutocompleteVisibilityChange: i.useCallback(
                (r, i) => {
                    n && a(i), r && (0, O.v8)(e, t);
                },
                [n, e, t],
            ),
        };
    };
function eM(e, t) {
    let {
        textValue: n,
        richValue: a,
        className: o,
        innerClassName: l,
        editorClassName: c,
        id: _,
        required: h,
        disabled: T,
        placeholder: N,
        accessibilityLabel: O,
        channel: L,
        type: w,
        focused: x,
        error: P,
        renderAttachButton: U,
        renderApplicationCommandIcon: G,
        renderButtons: V,
        pendingReply: F,
        onChange: j,
        onResize: H,
        onBlur: Y,
        onFocus: K,
        onKeyDown: z,
        onSubmit: $,
        promptToUpload: q,
        highlighted: Z,
        canMentionRoles: Q,
        canMentionChannels: er,
        maxCharacterCount: ec,
        showRemainingCharsAfterCount: ef,
        allowNewLines: em = !0,
        characterCountClassName: eg,
        "aria-describedby": eE,
        "aria-labelledby": eM,
        setEditorRef: ek,
        autoCompletePosition: eU,
        children: eG,
        disableThemedBackground: eV = !1,
        emojiPickerCloseOnModalOuterClick: eF,
        parentModalKey: eB,
        pendingScheduledMessage: ej,
        showValueWhenDisabled: eH = !1,
    } = e;
    u()(null != w, "chat input type must be set");
    let { analyticsLocations: eY } = (0, A.Ay)(E.A.CHANNEL_TEXT_AREA),
        eW = eN(t),
        eK = i.useRef(null),
        ez = i.useRef(null),
        e$ = i.useRef(null),
        eq = i.useRef(null),
        eZ = i.useRef(null);
    ek?.(e$.current);
    let eQ = (0, I.A)(L),
        [eX, eJ] = i.useState(!eQ);
    (0, m.i4)(eW, (e) => {
        let { width: t } = e;
        return eJ(!eQ && (null == t || t > eh));
    });
    let { activeCommand: e0, activeCommandSection: e1 } = (0, f.cf)([S.A], () => ({
            activeCommand: w.commands?.enabled ? S.A.getActiveCommand(L.id) : null,
            activeCommandSection: w.commands?.enabled ? S.A.getActiveCommandSection(L.id) : null,
        })),
        {
            isLurking: e2,
            isPendingMember: e3,
            disabled: e6,
            canAttachFiles: e4,
            canCreateThreads: e5,
            canEveryoneSendMessages: e7,
        } = eO(L, w, e0, T),
        e8 = w.toolbarType === ee.O1.STATIC,
        e9 = !B.D_.useSetting() && !(0, X.isAndroidWeb)() && null != window.ResizeObserver,
        te = !e9 || !w.commands?.enabled || !x || "/" !== n,
        tt = (0, M.A)(),
        { fontSize: tn } = (0, f.cf)([g.A], () => ({ fontSize: g.A.fontSize })),
        tr = (0, f.bG)([W.A], () => W.A.isEnabled());
    ev(w, e6, L.id);
    let { eventEmitter: ti, handleEditorSelectionChanged: ta } = eC(e$, n, a),
        ts = i.useRef(n);
    ts.current = n;
    let to = i.useCallback(
            (e, t, n) => {
                "/" === t && "" === ts.current && w.commands?.enabled && ti.emit("command-sentinel-typed"),
                    j?.(e, t, n);
            },
            [j, w.commands?.enabled, ti],
        ),
        { submitting: tl, submit: tu, handleSubmit: tc } = eA($, w, e$, eZ, L.id),
        { autocompleteRef: td, handleMaybeShowAutocomplete: t_, handleHideAutocomplete: tf } = eb(),
        tp = eI(tu, w, e$),
        th = eT(e$),
        tm = ey({ editorRef: e$, disabled: e6, textValue: n, channelId: L.id, chatInputType: w, submit: $ }),
        tg = eS(e$, L),
        tE = i.useCallback(() => eZ?.current?.hide(), []),
        { editorHeight: tA, handleResize: tI } = eR(H),
        { handleTab: tT, handleEnter: ty, handleMoveSelection: tS } = eL(td, eK, te),
        { expressionPickerView: tv, shouldHideExpressionPicker: tC, handleOuterClick: tb } = eD(w, e$, L.id),
        { selectedAutocompleteInputType: tN, selectedAutocompleteInputError: tR } = ew(ti, e$),
        tO = ex(n),
        { currentAutocompleteType: tD, handleAutocompleteVisibilityChange: tL } = eP(w, L.id),
        tw = (0, C.A)({ type: w, channelId: L.id }),
        tx = i.useCallback(() => {
            ti.emit("submit-failure");
        }, [ti]);
    (0, J.R)(ti, L.guild_id, L.id);
    let tP = null != F,
        tM = (e6 && !((e2 || e3) && e7)) || (tl && w.submit?.useDisabledStylesOnSubmit),
        tk = null;
    null != e0 ? (tk = G?.(e0, e1, ep.g$)) : (!e6 || e5) && (tk = U?.(tP, ep.g$));
    let tU = e9 && null != a && !e6 && w.showCharacterCount && null == e0,
        tG = e9 && !__OVERLAY__ && null != a && null == e0 && w.toolbarType !== ee.O1.NONE && !e6,
        tV = (0, ei.Y)({
            channel: L,
            type: w,
            activeCommand: e0,
            pendingReply: F,
            pendingScheduledMessage: ej,
            selectedAutocompleteInputType: tN,
            selectedAutocompleteInputError: tR,
        }),
        tF = 0 === n.trim().length,
        tB = w.layout === ee.wt.INLINE,
        tj = w.layout === ee.wt.FLUSH,
        tH = (0, r.jsx)("div", { ref: ez, className: ep.BW }),
        tY = tw ? (0, r.jsx)(y.A, { align: "right", positionTargetRef: ez, channel: L }) : null,
        tW =
            null != V
                ? V()
                : (0, r.jsx)(ea.A, {
                      type: w,
                      disabled: e6,
                      channel: L,
                      handleSubmit: tc,
                      isEmpty: tF,
                      showAllButtons: eX,
                  }),
        tK = tU
            ? (0, r.jsx)(el.A, {
                  type: w,
                  textValue: n,
                  className: eg,
                  maxCharacterCount: ec,
                  showRemainingCharsAfterCount: ef,
              })
            : null;
    return (0, r.jsx)(R.Sv, {
        value: ti,
        children: (0, r.jsxs)(A.f5, {
            value: eY,
            children: [
                tG && e8
                    ? (0, r.jsx)(ed.A, { editorRef: e$, options: w.markdown, channel: L })
                    : tG
                      ? (0, r.jsx)(eu.A, { ref: eZ, editorRef: e$, containerRef: eq, options: w.markdown })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eW,
                    className: s()(o, {
                        [ep.gM]: !0,
                        [ep.h9]: tM,
                        [ep.mr]: Z,
                        [ep.Wn]: d.Fr,
                        [ep.Ls]: tB,
                        [ep.AH]: tj,
                        [ep.z3]: null != P,
                    }),
                    children: [
                        tB || tj ? null : (0, r.jsx)(ei.A, { bars: tV }),
                        (0, r.jsxs)("div", {
                            ref: eq,
                            onScroll: tE,
                            className: s()(l, { [ep.xx]: !0, [ep.k6]: !eV, [ep.Ri]: tV.stacked.length > 0 }),
                            children: [
                                (0, r.jsx)(en.A, { channelId: L.id, chatInputType: w }),
                                w.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(eo.A, { channelId: L.id, type: w, canAttachFiles: e4 }),
                                (0, r.jsxs)("div", {
                                    className: s()(ep.vW, {
                                        [ep.BF]: tM,
                                        [ep.RL]: w !== ee.oU.EDIT && (null != tk || (tM && null == tk) || e2),
                                        [ep.fk]: w === ee.oU.THREAD_CREATION,
                                        [ep.TZ]: w === ee.oU.CREATE_FORUM_POST || w === ee.oU.FORWARD_MESSAGE_INPUT,
                                        [ep.$i]: w === ee.oU.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tb,
                                    children: [
                                        tY,
                                        tk,
                                        (0, r.jsx)(p.vN3, {
                                            ringTarget: eW,
                                            ringClassName: ep.Rg,
                                            children: (0, r.jsx)(et.A, {
                                                ref: e$,
                                                id: _,
                                                focused: x,
                                                useSlate: e9,
                                                textValue: n,
                                                richValue: a,
                                                disabled: e6,
                                                placeholder: N,
                                                required: h,
                                                accessibilityLabel: O,
                                                isPreviewing: (e2 || e3) && e7,
                                                channel: L,
                                                type: w,
                                                canPasteFiles: e4,
                                                uploadPromptCharacterCount: e_.CS1,
                                                maxCharacterCount: ec ?? tt,
                                                allowNewLines: em,
                                                "aria-describedby": eE,
                                                onChange: to,
                                                onResize: tI,
                                                onBlur: Y,
                                                onFocus: K,
                                                onKeyDown: z,
                                                onSubmit: tu,
                                                onSubmitFailure: tx,
                                                onTab: tT,
                                                onEnter: ty,
                                                onMoveSelection: tS,
                                                onSelectionChanged: ta,
                                                onMaybeShowAutocomplete: t_,
                                                onHideAutocomplete: tf,
                                                promptToUpload: q,
                                                fontSize: tn,
                                                spellcheckEnabled: tr,
                                                canOnlyUseTextCommands: tP,
                                                isEditorIdle: tO,
                                                currentAutocompleteType: tD,
                                                className: s()(
                                                    {
                                                        [ep.QI]: w === ee.oU.THREAD_CREATION,
                                                        [ep.AV]: w === ee.oU.PROFILE_BIO_INPUT,
                                                        [ep.GR]: w === ee.oU.OVERLAY_INLINE_REPLY,
                                                    },
                                                    c,
                                                ),
                                                "aria-labelledby": eM,
                                                showValueWhenDisabled: eH,
                                            }),
                                        }),
                                        tW,
                                        tH,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(es.a, { channel: L, type: w, pendingScheduledMessage: ej }),
                        te ? null : (0, r.jsx)(v.A, { ref: eK, channel: L, canOnlyUseTextCommands: tP }),
                        (0, r.jsx)(b.A, {
                            ref: td,
                            channel: L,
                            canMentionRoles: Q,
                            canMentionChannels: er,
                            useNewSlashCommands: e9,
                            canOnlyUseTextCommands: tP,
                            canSendStickers: w.stickers?.allowSending,
                            canSendSoundmoji: w.soundmoji?.allowSending,
                            textValue: n,
                            focused: x,
                            isEditorIdle: tO,
                            expressionPickerView: tv,
                            type: w,
                            targetRef: eW,
                            editorRef: e$,
                            onSendMessage: tu,
                            onSendSticker: tm,
                            onVisibilityChange: tL,
                            editorScrollerRef: eq,
                            editorHeight: tA,
                            barsHeight: 40 * tV.floating.length,
                            setValue: (e, t) => to?.(null, e, t),
                            position: eU,
                        }),
                        (0, r.jsx)(k.A, { textValue: n, editorHeight: tA, channelId: L.id }),
                        tK,
                        eG,
                    ],
                }),
                (0, r.jsx)(p.dzK, { error: P }),
                tC
                    ? null
                    : (0, r.jsx)(D.A, {
                          positionTargetRef: eW,
                          type: w,
                          onSelectGIF: tp,
                          onSelectEmoji: th,
                          onSelectSticker: tm,
                          onSelectSound: tg,
                          channel: L,
                          closeOnModalOuterClick: eF,
                          parentModalKey: eB,
                          position: "top",
                          align: "right",
                          positionLayerClassName: ep.BD,
                      }),
            ],
        }),
    });
}
let ek = i.memo(i.forwardRef(eM));
