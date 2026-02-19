"use strict";
n.d(t, {
    Ay: () => ek,
    BX: () => ex,
    C: () => eS,
    L0: () => eb,
    MD: () => eD,
    NO: () => eT,
    N_: () => ev,
    Sk: () => eO,
    Vu: () => eI,
    Zx: () => eA,
    ck: () => eR,
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
    b = n(31498),
    R = n(598071),
    O = n(151271),
    D = n(834755),
    L = n(256265),
    w = n(380544),
    x = n(857071),
    M = n(968011),
    P = n(135621),
    k = n(235430),
    U = n(931664),
    G = n(631576),
    F = n(378058),
    V = n(406704),
    B = n(253932),
    H = n(696451),
    j = n(576705),
    Y = n(309010),
    W = n(638128),
    K = n(522602),
    z = n(287809),
    $ = n(821102),
    q = n(954571),
    Z = n(234320),
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
    ep = n(111314);
let eh = 450,
    em = 250;
function eE(e) {
    return e !== Y.A.getChannelId();
}
function eg(e, t) {
    return (e && t.submit?.clearOnSubmit) ?? !1;
}
function eA(e, t, s, a, o) {
    let [l, u] = i.useState(!1),
        c = i.useCallback(
            (i, d, _, f, m, E) => {
                if (l) return;
                u(!0);
                let g = U.A.getStickerPreview(o, t.drafts.type)?.map((e) => e.id) ?? [],
                    A = K.A.getUploads(o, t.drafts.type) ?? [];
                if (null == d && !f && !m && (0, L.xz)(A, o)) {
                    u(!1),
                        (0, p.mMO)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49681"),
                                n.e("94857"),
                                n.e("48840"),
                                n.e("10730"),
                                n.e("7602"),
                                n.e("99950"),
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
                        i = eg(n, t),
                        l = null != s.current;
                    i &&
                        (eE(o)
                            ? h.A.saveDraft(o, "", t.drafts.type)
                            : l && (s.current?.clearValue(), a.current?.hide())),
                        l && (u(!1), (0, O.v8)(), r && s.current?.focus());
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
function eS(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: s, chatInputType: a, submit: o } = e,
        { analyticsLocations: l } = (0, A.Ay)();
    return i.useCallback(
        (e, i) => {
            n ||
                (a === ee.oU.CREATE_ANNOUNCEMENT_POST || (0, F.YS)(i, r, s, a.drafts.type)
                    ? ((0, er.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != U.A.getStickerPreview(s, a.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, G.$x)(s, e, a.drafts.type))
                    : (o({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
                (0, O.v8)(),
                t.current?.focus());
        },
        [n, r, s, t, l, o, a],
    );
}
function ey(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let s = e.current;
            null != n &&
                null != s &&
                (q.default.track(e_.HAw.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r,
                }),
                s.insertSound(n)),
                i && (0, O.v8)(),
                s?.focus();
        },
        [e, t.id, t.guild_id],
    );
}
function ev(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, O.r$)(ef.kx.EMOJI, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            !t && e.gifs?.allowSending && (0, O.r$)(ef.kx.GIF, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            !t && e.stickers?.allowSending && (0, O.r$)(ef.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, Z.Vo)({ event: e_.jej.TOGGLE_EMOJI_POPOUT, handler: r }),
        (0, Z.Vo)({ event: e_.jej.TOGGLE_GIF_PICKER, handler: s }),
        (0, Z.Vo)({ event: e_.jej.TOGGLE_STICKER_PICKER, handler: a });
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
function eb(e) {
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
        s = (0, f.bG)([x.A], () => null != i && x.A.isLurking(i), [i]),
        a = (0, f.bG)([H.Ay, z.default], () => {
            let e = z.default.getCurrentUser();
            return (null != i && null != e ? H.Ay.getMember(i, e.id)?.isPending : null) ?? !1;
        }),
        o = (0, f.cf)([j.A], () => {
            let i = e.isPrivate(),
                s = j.A.computePermissions(e),
                o = _.zy(s, e_.xBc.CREATE_PUBLIC_THREADS) || _.zy(s, e_.xBc.CREATE_PRIVATE_THREADS),
                l =
                    (!t.permissions?.requireCreateTherads || o) &&
                    (!t.permissions?.requireSendMessages || _.zy(s, e_.xBc.SEND_MESSAGES)),
                u = l && _.zy(s, e_.xBc.ATTACH_FILES),
                c = null != n,
                d = (0, V.UJ)(e);
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
    let [r, s, a] = (0, O.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
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
            null != n && (e = ec.VW.getSelectedParentOfType(n, b.mk)?.[0]),
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
let ex = (e) => {
        let { enabled: t, onlyExactMatch: n } = (0, M.us)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [r, s] = i.useState(!0),
            a = i.useRef(null);
        return (
            i.useLayoutEffect(() => {
                t &&
                    !n &&
                    (clearTimeout(a.current),
                    s(!1),
                    (a.current = setTimeout(() => {
                        s(!0);
                    }, em)));
            }, [n, t, e]),
            r
        );
    },
    eM = (e, t) => {
        let { enabled: n } = (0, M.us)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [r, s] = i.useState(null);
        return {
            currentAutocompleteType: r,
            handleAutocompleteVisibilityChange: i.useCallback(
                (r, i) => {
                    n && s(i), r && (0, O.v8)(e, t);
                },
                [n, e, t],
            ),
        };
    };
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
        placeholder: b,
        accessibilityLabel: O,
        channel: L,
        type: w,
        focused: x,
        error: M,
        renderAttachButton: U,
        renderApplicationCommandIcon: G,
        renderButtons: F,
        pendingReply: V,
        onChange: H,
        onResize: j,
        onBlur: Y,
        onFocus: K,
        onKeyDown: z,
        onSubmit: $,
        promptToUpload: q,
        highlighted: Z,
        canMentionRoles: X,
        canMentionChannels: er,
        maxCharacterCount: ec,
        showRemainingCharsAfterCount: ef,
        allowNewLines: em = !0,
        characterCountClassName: eE,
        "aria-describedby": eg,
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
        eW = eb(t),
        eK = i.useRef(null),
        ez = i.useRef(null),
        e$ = i.useRef(null),
        eq = i.useRef(null),
        eZ = i.useRef(null);
    ek?.(e$.current);
    let eX = (0, I.A)(L),
        [eQ, eJ] = i.useState(!eX);
    (0, m.i4)(eW, (e) => {
        let { width: t } = e;
        return eJ(!eX && (null == t || t > eh));
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
        e8 = w.toolbarType === ee.O1.STATIC,
        e9 = !B.D_.useSetting() && !(0, Q.isAndroidWeb)() && null != window.ResizeObserver,
        te = !e9 || !w.commands?.enabled || !x || "/" !== n,
        tt = (0, P.A)(),
        { fontSize: tn } = (0, f.cf)([E.A], () => ({ fontSize: E.A.fontSize })),
        tr = (0, f.bG)([W.A], () => W.A.isEnabled());
    ev(w, e6, L.id);
    let { eventEmitter: ti, handleEditorSelectionChanged: ts } = eN(e$, n, s),
        ta = i.useRef(n);
    ta.current = n;
    let to = i.useCallback(
            (e, t, n) => {
                "/" === t && "" === ta.current && w.commands?.enabled && ti.emit("command-sentinel-typed"),
                    H?.(e, t, n);
            },
            [H, w.commands?.enabled, ti],
        ),
        { submitting: tl, submit: tu, handleSubmit: tc } = eA($, w, e$, eZ, L.id),
        { autocompleteRef: td, handleMaybeShowAutocomplete: t_, handleHideAutocomplete: tf } = eC(),
        tp = eI(tu, w, e$),
        th = eT(e$),
        tm = eS({ editorRef: e$, disabled: e6, textValue: n, channelId: L.id, chatInputType: w, submit: $ }),
        tE = ey(e$, L),
        tg = i.useCallback(() => eZ?.current?.hide(), []),
        { editorHeight: tA, handleResize: tI } = eR(j),
        { handleTab: tT, handleEnter: tS, handleMoveSelection: ty } = eL(td, eK, te),
        { expressionPickerView: tv, shouldHideExpressionPicker: tN, handleOuterClick: tC } = eD(w, e$, L.id),
        { selectedAutocompleteInputType: tb, selectedAutocompleteInputError: tR } = ew(ti, e$),
        tO = ex(n),
        { currentAutocompleteType: tD, handleAutocompleteVisibilityChange: tL } = eM(w, L.id),
        tw = (0, N.A)({ type: w, channelId: L.id }),
        tx = i.useCallback(() => {
            ti.emit("submit-failure");
        }, [ti]);
    (0, J.R)(ti, L.guild_id, L.id);
    let tM = null != V,
        tP = (e6 && !((e2 || e3) && e7)) || (tl && w.submit?.useDisabledStylesOnSubmit),
        tk = null;
    null != e0 ? (tk = G?.(e0, e1, ep.g$)) : (!e6 || e5) && (tk = U?.(tM, ep.g$));
    let tU = e9 && null != s && !e6 && w.showCharacterCount && null == e0,
        tG = e9 && !__OVERLAY__ && null != s && null == e0 && w.toolbarType !== ee.O1.NONE && !e6,
        tF = (0, ei.Y)({
            channel: L,
            type: w,
            activeCommand: e0,
            pendingReply: V,
            pendingScheduledMessage: eH,
            selectedAutocompleteInputType: tb,
            selectedAutocompleteInputError: tR,
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
                      disabled: e6,
                      channel: L,
                      handleSubmit: tc,
                      isEmpty: tV,
                      showAllButtons: eQ,
                  }),
        tK = tU
            ? (0, r.jsx)(el.A, {
                  type: w,
                  textValue: n,
                  className: eE,
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
                    className: a()(o, {
                        [ep.gM]: !0,
                        [ep.h9]: tP,
                        [ep.mr]: Z,
                        [ep.Wn]: d.Fr,
                        [ep.Ls]: tB,
                        [ep.AH]: tH,
                        [ep.z3]: null != M,
                    }),
                    children: [
                        tB || tH ? null : (0, r.jsx)(ei.A, { bars: tF }),
                        (0, r.jsxs)("div", {
                            ref: eq,
                            onScroll: tg,
                            className: a()(l, { [ep.xx]: !0, [ep.k6]: !eF, [ep.Ri]: tF.stacked.length > 0 }),
                            children: [
                                (0, r.jsx)(en.A, { channelId: L.id, chatInputType: w }),
                                w.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(eo.A, { channelId: L.id, type: w, canAttachFiles: e4 }),
                                (0, r.jsxs)("div", {
                                    className: a()(ep.vW, {
                                        [ep.BF]: tP,
                                        [ep.RL]: w !== ee.oU.EDIT && (null != tk || (tP && null == tk) || e2),
                                        [ep.fk]: w === ee.oU.THREAD_CREATION,
                                        [ep.TZ]: w === ee.oU.CREATE_FORUM_POST || w === ee.oU.FORWARD_MESSAGE_INPUT,
                                        [ep.$i]: w === ee.oU.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tC,
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
                                                richValue: s,
                                                disabled: e6,
                                                placeholder: b,
                                                required: h,
                                                accessibilityLabel: O,
                                                isPreviewing: (e2 || e3) && e7,
                                                channel: L,
                                                type: w,
                                                canPasteFiles: e4,
                                                uploadPromptCharacterCount: e_.CS1,
                                                maxCharacterCount: ec ?? tt,
                                                allowNewLines: em,
                                                "aria-describedby": eg,
                                                onChange: to,
                                                onResize: tI,
                                                onBlur: Y,
                                                onFocus: K,
                                                onKeyDown: z,
                                                onSubmit: tu,
                                                onSubmitFailure: tx,
                                                onTab: tT,
                                                onEnter: tS,
                                                onMoveSelection: ty,
                                                onSelectionChanged: ts,
                                                onMaybeShowAutocomplete: t_,
                                                onHideAutocomplete: tf,
                                                promptToUpload: q,
                                                fontSize: tn,
                                                spellcheckEnabled: tr,
                                                canOnlyUseTextCommands: tM,
                                                isEditorIdle: tO,
                                                currentAutocompleteType: tD,
                                                className: a()(
                                                    {
                                                        [ep.QI]: w === ee.oU.THREAD_CREATION,
                                                        [ep.AV]: w === ee.oU.PROFILE_BIO_INPUT,
                                                        [ep.GR]: w === ee.oU.OVERLAY_INLINE_REPLY,
                                                    },
                                                    c,
                                                ),
                                                "aria-labelledby": eP,
                                                showValueWhenDisabled: ej,
                                            }),
                                        }),
                                        tW,
                                        tj,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(ea.a, { channel: L, type: w, pendingScheduledMessage: eH }),
                        te ? null : (0, r.jsx)(v.A, { ref: eK, channel: L, canOnlyUseTextCommands: tM }),
                        (0, r.jsx)(C.A, {
                            ref: td,
                            channel: L,
                            canMentionRoles: X,
                            canMentionChannels: er,
                            useNewSlashCommands: e9,
                            canOnlyUseTextCommands: tM,
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
                            barsHeight: 40 * tF.floating.length,
                            setValue: (e, t) => to?.(null, e, t),
                            position: eU,
                        }),
                        (0, r.jsx)(k.A, { textValue: n, editorHeight: tA, channelId: L.id }),
                        tK,
                        eG,
                    ],
                }),
                (0, r.jsx)(p.dzK, { error: M }),
                tN
                    ? null
                    : (0, r.jsx)(D.A, {
                          positionTargetRef: eW,
                          type: w,
                          onSelectGIF: tp,
                          onSelectEmoji: th,
                          onSelectSticker: tm,
                          onSelectSound: tE,
                          channel: L,
                          closeOnModalOuterClick: eV,
                          parentModalKey: eB,
                          position: "top",
                          align: "right",
                          positionLayerClassName: ep.BD,
                      }),
            ],
        }),
    });
}
let ek = i.memo(i.forwardRef(eP));
