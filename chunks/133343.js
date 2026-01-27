n.d(t, {
    Ay: () => eG,
    BX: () => ej,
    C: () => eS,
    L0: () => eR,
    MD: () => eL,
    NO: () => eI,
    N_: () => eC,
    Sk: () => eD,
    Vu: () => eA,
    Zx: () => ev,
    ck: () => eP,
    ml: () => eN,
    uW: () => ek,
    v7: () => ew,
}),
    n(896048),
    n(65821),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(143236),
    l = n(284009),
    c = n.n(l),
    u = n(942381),
    d = n(607399),
    f = n(136722),
    p = n(311907),
    _ = n(397927),
    h = n(465532),
    m = n(765671),
    g = n(775602),
    E = n(793574),
    y = n(688810),
    b = n(177640),
    O = n(989837),
    v = n(667889),
    A = n(861382),
    I = n(391848),
    S = n(186226),
    T = n(875163),
    C = n(31498),
    N = n(598071),
    w = n(151271),
    R = n(834755),
    P = n(256265),
    D = n(857071),
    L = n(968011),
    x = n(135621),
    M = n(235430),
    j = n(931664),
    k = n(631576),
    U = n(378058),
    G = n(406704),
    F = n(253932),
    V = n(696451),
    B = n(576705),
    H = n(309010),
    Y = n(638128),
    W = n(522602),
    K = n(287809),
    z = n(954571),
    q = n(234320),
    Z = n(488926),
    Q = n(723702),
    X = n(486319),
    J = n(184761),
    $ = n(355622),
    ee = n(415409),
    et = n(824842),
    en = n(612394),
    er = n(877146),
    ei = n(147025),
    ea = n(776384),
    eo = n(171593),
    es = n(257108),
    el = n(135261),
    ec = n(711371),
    eu = n(476739),
    ed = n(652215);
n(827669);
var ef = n(698279),
    ep = n(111314);

function e_(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                e_(e, t, n[t]);
            });
    }
    return e;
}

function em(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function eg(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : em(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eE = 450,
    ey = 250;

function eb(e) {
    return e !== H.A.getChannelId();
}

function eO(e, t) {
    var n, r;
    return null != (n = e && (null == (r = t.submit) ? void 0 : r.clearOnSubmit)) && n;
}

function ev(e, t, a, o, s) {
    let [l, c] = i.useState(!1),
        u = i.useCallback(
            (i, d, f, p, m) => {
                var g, E, y;
                if (l) return;
                c(!0);
                let b =
                        null !=
                        (g = null == (y = j.A.getStickerPreview(s, t.drafts.type)) ? void 0 : y.map((e) => e.id))
                            ? g
                            : [],
                    O = null != (E = W.A.getUploads(s, t.drafts.type)) ? E : [];
                if (null == d && !p && !m && (0, P.xz)(O, s)) {
                    c(!1),
                        (0, _.mMO)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49681"),
                                n.e("94857"),
                                n.e("99011"),
                                n.e("7034"),
                                n.e("48898"),
                                n.e("39289"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    eg(eh({}, t), {
                                        threadId: s,
                                        attachments: O,
                                        sendMessage: () => u(i, void 0, void 0, void 0, !0),
                                    }),
                                );
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: O,
                    stickers: b,
                    command: d,
                    commandOptionValues: f,
                    isGif: p,
                }).then((e) => {
                    var n, r, i;
                    let { shouldClear: l, shouldRefocus: u } = e,
                        d = eO(l, t),
                        f = null != a.current;
                    d &&
                        (eb(s)
                            ? h.A.saveDraft(s, "", t.drafts.type)
                            : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())),
                        f && (c(!1), (0, w.v8)(), u && (null == (n = a.current) || n.focus()));
                });
            },
            [a, o, e, l, t, s],
        );
    return {
        submitting: l,
        submit: u,
        handleSubmit: i.useCallback(
            (e) => {
                var t;
                null == a || null == (t = a.current) || t.submit(e);
            },
            [a],
        ),
    };
}

function eA(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, a;
            t === $.oU.CREATE_FORUM_POST || t === $.oU.CREATE_ANNOUNCEMENT_POST
                ? null == (a = n.current) || a.insertGIF(r)
                : e(r.url, void 0, void 0, !0),
                (0, w.v8)(),
                null == (i = n.current) || i.focus();
        },
        [n, e, t],
    );
}

function eI(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            null != n &&
                null != i &&
                i.insertEmoji({
                    emoji: n,
                    willClose: r,
                }),
                r && (0, w.v8)();
        },
        [e],
    );
}

function eS(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: o, submit: s } = e,
        { analyticsLocations: l } = (0, y.Ay)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                (o === $.oU.CREATE_ANNOUNCEMENT_POST || (0, U.YS)(i, r, a, o.drafts.type)
                    ? ((0, en.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != j.A.getStickerPreview(a, o.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, k.$x)(a, e, o.drafts.type))
                    : (s({
                          value: "",
                          uploads: void 0,
                          stickers: [e.id],
                      }),
                      null == (u = t.current) || u.clearValue()),
                (0, w.v8)(),
                null == (c = t.current) || c.focus());
        },
        [n, r, a, t, l, s, o],
    );
}

function eT(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (z.default.track(ed.HAw.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r,
                }),
                a.insertSound(n)),
                i && (0, w.v8)(),
                null == a || a.focus();
        },
        [e, t.id, t.guild_id],
    );
}

function eC(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, w.r$)(ef.kx.EMOJI, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            var r;
            !t && (null == (r = e.gifs) ? void 0 : r.allowSending) && (0, w.r$)(ef.kx.GIF, e, n);
        }, [t, e, n]),
        o = i.useCallback(() => {
            var r;
            !t && (null == (r = e.stickers) ? void 0 : r.allowSending) && (0, w.r$)(ef.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, q.Vo)({
        event: ed.jej.TOGGLE_EMOJI_POPOUT,
        handler: r,
    }),
        (0, q.Vo)({
            event: ed.jej.TOGGLE_GIF_PICKER,
            handler: a,
        }),
        (0, q.Vo)({
            event: ed.jej.TOGGLE_STICKER_PICKER,
            handler: o,
        });
}

function eN(e, t, n) {
    let [r] = i.useState(() => new s.EventEmitter());
    i.useEffect(() => {
        r.emit("text-changed", t, n);
    }, [t, n, r]);
    let a = (t) => {
        null != e.current && r.emit("selection-changed", t);
    };
    return {
        eventEmitter: r,
        handleEditorSelectionChanged: a,
    };
}

function ew() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            var t;
            null == (t = e.current) || t.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            var t;
            null == (t = e.current) || t.onHideAutocomplete();
        }, []);
    return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: t,
        handleHideAutocomplete: n,
    };
}

function eR(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}

function eP(e) {
    let [t, n] = i.useState(0);
    return {
        editorHeight: t,
        handleResize: i.useCallback(
            (t) => {
                n(null != t ? t : 0), null == e || e(t);
            },
            [e],
        ),
    };
}

function eD(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, p.bG)([D.A], () => null != i && D.A.isLurking(i), [i]),
        o = (0, p.bG)([V.Ay, K.default], () => {
            var e, t;
            let n = K.default.getCurrentUser();
            return (
                null !=
                    (e =
                        null != i && null != n
                            ? null == (t = V.Ay.getMember(i, n.id))
                                ? void 0
                                : t.isPending
                            : null) && e
            );
        }),
        s = (0, p.cf)([B.A], () => {
            var i, a;
            let s = e.isPrivate(),
                l = B.A.computePermissions(e),
                c = f.zy(l, ed.xBc.CREATE_PUBLIC_THREADS) || f.zy(l, ed.xBc.CREATE_PRIVATE_THREADS),
                u =
                    (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) &&
                    (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || f.zy(l, ed.xBc.SEND_MESSAGES)),
                d = u && f.zy(l, ed.xBc.ATTACH_FILES),
                p = null != n,
                _ = (0, G.UJ)(e);
            return {
                disabled: r || o || (!s && !u) || _,
                canAttachFiles: !0 === t.attachments && (s || o || d || p),
                canCreateThreads: c,
                canEveryoneSendMessages: Z.MJ(ed.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
    return eh(
        {
            isLurking: a,
            isPendingMember: o,
        },
        s,
    );
}

function eL(e, t, n) {
    let [r, a, o] = (0, w.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], u.x),
        s = (0, p.bG)([O.A], () => O.A.shouldShowPopup() && O.A.activeViewType() === e && O.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, w.v8)(e, n);
        },
        [e, n],
    );
    let l = i.useCallback(() => {
            var e;
            null != r || s || null == (e = t.current) || e.handleOuterClick();
        }, [r, s, t]),
        c = null == r || null == a || a !== e || o !== n;
    return {
        expressionPickerView: r,
        shouldHideExpressionPicker: c,
        handleOuterClick: l,
    };
}

function ex(e, t, n) {
    let r = i.useCallback(() => {
        var r, i;
        return (
            !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!1))) ||
            (null == (i = e.current) ? void 0 : i.onTabOrEnter(!1)) ||
            !1
        );
    }, [n, t, e]);
    return {
        handleTab: r,
        handleEnter: i.useCallback(() => {
            var r, i;
            return (
                !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!0))) ||
                (null == (i = e.current) ? void 0 : i.onTabOrEnter(!0)) ||
                !1
            );
        }, [n, t, e]),
        handleMoveSelection: i.useCallback(
            (r) => {
                var i, a;
                return (
                    !!(!n && (null == (i = t.current) ? void 0 : i.onMoveSelection(r))) ||
                    (null == (a = e.current) ? void 0 : a.onMoveSelection(r)) ||
                    !1
                );
            },
            [n, t, e],
        ),
    };
}

function eM(e, t) {
    let [n, r] = i.useState({
            selectedAutocompleteInputType: null,
            selectedAutocompleteInputError: !1,
        }),
        a = i.useCallback(() => {
            var e, n, i, a;
            let o,
                s = null == (i = t.current) ? void 0 : i.getSlateEditor();
            null != s && (o = null == (a = ec.VW.getSelectedParentOfType(s, C.mk)) ? void 0 : a[0]),
                r({
                    selectedAutocompleteInputType: null != (e = null == o ? void 0 : o.type) ? e : null,
                    selectedAutocompleteInputError: null != (n = null == o ? void 0 : o.error) && n,
                });
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
let ej = (e) => {
        let { enabled: t, onlyExactMatch: n } = (0, L.us)("ChannelTextAreaContainer", {
                autoTrackExposure: !1,
            }),
            [r, a] = i.useState(!0),
            o = i.useRef(null);
        return (
            i.useLayoutEffect(() => {
                t &&
                    !n &&
                    (clearTimeout(o.current),
                    a(!1),
                    (o.current = setTimeout(() => {
                        a(!0);
                    }, ey)));
            }, [n, t, e]),
            r
        );
    },
    ek = (e, t) => {
        let { enabled: n } = (0, L.us)("ChannelTextAreaContainer", {
                autoTrackExposure: !1,
            }),
            [r, a] = i.useState(null);
        return {
            currentAutocompleteType: r,
            handleAutocompleteVisibilityChange: i.useCallback(
                (r, i) => {
                    n && a(i), r && (0, w.v8)(e, t);
                },
                [n, e, t],
            ),
        };
    };

function eU(e, t) {
    var n, a, s, l, u;
    let {
        textValue: f,
        richValue: h,
        className: O,
        innerClassName: C,
        editorClassName: w,
        id: P,
        required: D,
        disabled: L,
        placeholder: j,
        accessibilityLabel: k,
        channel: U,
        type: G,
        focused: V,
        error: B,
        renderAttachButton: H,
        renderApplicationCommandIcon: W,
        renderButtons: K,
        pendingReply: z,
        onChange: q,
        onResize: Z,
        onBlur: en,
        onFocus: ec,
        onKeyDown: ef,
        onSubmit: e_,
        promptToUpload: eh,
        highlighted: em,
        canMentionRoles: eg,
        canMentionChannels: ey,
        maxCharacterCount: eb,
        showRemainingCharsAfterCount: eO,
        allowNewLines: eU = !0,
        characterCountClassName: eG,
        "aria-describedby": eF,
        "aria-labelledby": eV,
        setEditorRef: eB,
        autoCompletePosition: eH,
        children: eY,
        disableThemedBackground: eW = !1,
        emojiPickerCloseOnModalOuterClick: eK,
        parentModalKey: ez,
        pendingScheduledMessage: eq,
        showValueWhenDisabled: eZ = !1,
    } = e;
    c()(null != G, "chat input type must be set");
    let { analyticsLocations: eQ } = (0, y.Ay)(E.A.CHANNEL_TEXT_AREA),
        eX = eR(t),
        eJ = i.useRef(null),
        e$ = i.useRef(null),
        e0 = i.useRef(null),
        e1 = i.useRef(null),
        e2 = i.useRef(null);
    null == eB || eB(e0.current);
    let e3 = (0, b.A)(U),
        [e6, e4] = i.useState(!e3);
    (0, m.i4)(eX, (e) => {
        let { width: t } = e;
        return e4(!e3 && (null == t || t > eE));
    });
    let { activeCommand: e5, activeCommandSection: e7 } = (0, p.cf)([A.A], () => {
            var e, t;
            return {
                activeCommand: (null == (e = G.commands) ? void 0 : e.enabled) ? A.A.getActiveCommand(U.id) : null,
                activeCommandSection: (null == (t = G.commands) ? void 0 : t.enabled)
                    ? A.A.getActiveCommandSection(U.id)
                    : null,
            };
        }),
        {
            isLurking: e8,
            isPendingMember: e9,
            disabled: te,
            canAttachFiles: tt,
            canCreateThreads: tn,
            canEveryoneSendMessages: tr,
        } = eD(U, G, e5, L),
        ti = G.toolbarType === $.O1.STATIC,
        ta = !F.D_.useSetting() && !(0, Q.isAndroidWeb)() && null != window.ResizeObserver,
        to = !ta || !(null == (n = G.commands) ? void 0 : n.enabled) || !V || "/" !== f,
        ts = (0, x.A)(),
        { fontSize: tl } = (0, p.cf)([g.A], () => ({
            fontSize: g.A.fontSize,
        })),
        tc = (0, p.bG)([Y.A], () => Y.A.isEnabled());
    eC(G, te, U.id);
    let { eventEmitter: tu, handleEditorSelectionChanged: td } = eN(e0, f, h),
        tf = i.useRef(f);
    tf.current = f;
    let tp = i.useCallback(
            (e, t, n) => {
                var r;
                "/" === t &&
                    "" === tf.current &&
                    (null == (r = G.commands) ? void 0 : r.enabled) &&
                    tu.emit("command-sentinel-typed"),
                    null == q || q(e, t, n);
            },
            [q, null == (a = G.commands) ? void 0 : a.enabled, tu],
        ),
        { submitting: t_, submit: th, handleSubmit: tm } = ev(e_, G, e0, e2, U.id),
        { autocompleteRef: tg, handleMaybeShowAutocomplete: tE, handleHideAutocomplete: ty } = ew(),
        tb = eA(th, G, e0),
        tO = eI(e0),
        tv = eS({
            editorRef: e0,
            disabled: te,
            textValue: f,
            channelId: U.id,
            chatInputType: G,
            submit: e_,
        }),
        tA = eT(e0, U),
        tI = i.useCallback(() => {
            var e;
            return null == e2 || null == (e = e2.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tS, handleResize: tT } = eP(Z),
        { handleTab: tC, handleEnter: tN, handleMoveSelection: tw } = ex(tg, eJ, to),
        { expressionPickerView: tR, shouldHideExpressionPicker: tP, handleOuterClick: tD } = eL(G, e0, U.id),
        { selectedAutocompleteInputType: tL, selectedAutocompleteInputError: tx } = eM(tu, e0),
        tM = ej(f),
        { currentAutocompleteType: tj, handleAutocompleteVisibilityChange: tk } = ek(G, U.id),
        { moveAppsEntrypointToOverflow: tU } = J.C.useConfig({
            location: "ChannelAppLauncher",
        }),
        tG = (0, S.A)({
            type: G,
            channelId: U.id,
        }),
        tF = i.useCallback(() => {
            tu.emit("submit-failure");
        }, [tu]);
    (0, X.R)(tu, U.guild_id, U.id);
    let tV = null != z,
        tB = (te && !((e8 || e9) && tr)) || (t_ && (null == (s = G.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tH = null;
    null != e5 ? (tH = null == W ? void 0 : W(e5, e7, ep.g$)) : (!te || tn) && (tH = null == H ? void 0 : H(tV, ep.g$));
    let tY = ta && null != h && !te && G.showCharacterCount && null == e5,
        tW = ta && !__OVERLAY__ && null != h && null == e5 && G.toolbarType !== $.O1.NONE && !te,
        tK = (0, er.Y)({
            channel: U,
            type: G,
            activeCommand: e5,
            pendingReply: z,
            pendingScheduledMessage: eq,
            selectedAutocompleteInputType: tL,
            selectedAutocompleteInputError: tx,
        }),
        tz = 0 === f.trim().length,
        tq = G.layout === $.wt.INLINE,
        tZ = G.layout === $.wt.FLUSH,
        tQ = (0, r.jsx)("div", {
            ref: e$,
            className: ep.BW,
        }),
        tX = tG
            ? (0, r.jsx)(v.A, {
                  align: tU && G !== $.oU.SIDEBAR ? "left" : "right",
                  positionTargetRef: e$,
                  channel: U,
              })
            : null,
        tJ =
            null != K
                ? K()
                : (0, r.jsx)(ei.A, {
                      type: G,
                      disabled: te,
                      channel: U,
                      handleSubmit: tm,
                      isEmpty: tz,
                      showAllButtons: e6,
                  }),
        t$ = tY
            ? (0, r.jsx)(es.A, {
                  type: G,
                  textValue: f,
                  className: eG,
                  maxCharacterCount: eb,
                  showRemainingCharsAfterCount: eO,
              })
            : null;
    return (0, r.jsx)(N.Sv, {
        value: tu,
        children: (0, r.jsxs)(y.f5, {
            value: eQ,
            children: [
                tW && ti
                    ? (0, r.jsx)(eu.A, {
                          editorRef: e0,
                          options: G.markdown,
                          channel: U,
                      })
                    : tW
                      ? (0, r.jsx)(el.A, {
                            ref: e2,
                            editorRef: e0,
                            containerRef: e1,
                            options: G.markdown,
                        })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eX,
                    className: o()(O, {
                        [ep.gM]: !0,
                        [ep.h9]: tB,
                        [ep.mr]: em,
                        [ep.Wn]: d.Fr,
                        [ep.Ls]: tq,
                        [ep.AH]: tZ,
                        [ep.z3]: null != B,
                    }),
                    children: [
                        tq || tZ
                            ? null
                            : (0, r.jsx)(er.A, {
                                  bars: tK,
                              }),
                        (0, r.jsxs)("div", {
                            ref: e1,
                            onScroll: tI,
                            className: o()(C, {
                                [ep.xx]: !0,
                                [ep.k6]: !eW,
                                [ep.Ri]: tK.stacked.length > 0,
                            }),
                            children: [
                                (0, r.jsx)(et.A, {
                                    channelId: U.id,
                                    chatInputType: G,
                                }),
                                G.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(eo.A, {
                                          channelId: U.id,
                                          type: G,
                                          canAttachFiles: tt,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: o()(ep.vW, {
                                        [ep.BF]: tB,
                                        [ep.RL]: G !== $.oU.EDIT && (null != tH || (tB && null == tH) || e8),
                                        [ep.fk]: G === $.oU.THREAD_CREATION,
                                        [ep.TZ]: G === $.oU.CREATE_FORUM_POST || G === $.oU.FORWARD_MESSAGE_INPUT,
                                        [ep.$i]: G === $.oU.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tD,
                                    children: [
                                        tX,
                                        tU && tQ,
                                        tH,
                                        (0, r.jsx)(_.vN3, {
                                            ringTarget: eX,
                                            ringClassName: ep.Rg,
                                            children: (0, r.jsx)(ee.A, {
                                                ref: e0,
                                                id: P,
                                                focused: V,
                                                useSlate: ta,
                                                textValue: f,
                                                richValue: h,
                                                disabled: te,
                                                placeholder: j,
                                                required: D,
                                                accessibilityLabel: k,
                                                isPreviewing: (e8 || e9) && tr,
                                                channel: U,
                                                type: G,
                                                canPasteFiles: tt,
                                                uploadPromptCharacterCount: ed.CS1,
                                                maxCharacterCount: null != eb ? eb : ts,
                                                allowNewLines: eU,
                                                "aria-describedby": eF,
                                                onChange: tp,
                                                onResize: tT,
                                                onBlur: en,
                                                onFocus: ec,
                                                onKeyDown: ef,
                                                onSubmit: th,
                                                onSubmitFailure: tF,
                                                onTab: tC,
                                                onEnter: tN,
                                                onMoveSelection: tw,
                                                onSelectionChanged: td,
                                                onMaybeShowAutocomplete: tE,
                                                onHideAutocomplete: ty,
                                                promptToUpload: eh,
                                                fontSize: tl,
                                                spellcheckEnabled: tc,
                                                canOnlyUseTextCommands: tV,
                                                isEditorIdle: tM,
                                                currentAutocompleteType: tj,
                                                className: o()(
                                                    {
                                                        [ep.QI]: G === $.oU.THREAD_CREATION,
                                                        [ep.AV]: G === $.oU.PROFILE_BIO_INPUT,
                                                        [ep.GR]: G === $.oU.OVERLAY_INLINE_REPLY,
                                                    },
                                                    w,
                                                ),
                                                "aria-labelledby": eV,
                                                showValueWhenDisabled: eZ,
                                            }),
                                        }),
                                        tJ,
                                        !tU && tQ,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(ea.a, {
                            channel: U,
                            type: G,
                            pendingScheduledMessage: eq,
                        }),
                        to
                            ? null
                            : (0, r.jsx)(I.A, {
                                  ref: eJ,
                                  channel: U,
                                  canOnlyUseTextCommands: tV,
                              }),
                        (0, r.jsx)(T.A, {
                            ref: tg,
                            channel: U,
                            canMentionRoles: eg,
                            canMentionChannels: ey,
                            useNewSlashCommands: ta,
                            canOnlyUseTextCommands: tV,
                            canSendStickers: null == (l = G.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = G.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: V,
                            isEditorIdle: tM,
                            expressionPickerView: tR,
                            type: G,
                            targetRef: eX,
                            editorRef: e0,
                            onSendMessage: th,
                            onSendSticker: tv,
                            onVisibilityChange: tk,
                            editorScrollerRef: e1,
                            editorHeight: tS,
                            barsHeight: 40 * tK.floating.length,
                            setValue: (e, t) => (null == tp ? void 0 : tp(null, e, t)),
                            position: eH,
                        }),
                        (0, r.jsx)(M.A, {
                            textValue: f,
                            editorHeight: tS,
                            channelId: U.id,
                        }),
                        t$,
                        eY,
                    ],
                }),
                (0, r.jsx)(_.dzK, {
                    error: B,
                }),
                tP
                    ? null
                    : (0, r.jsx)(R.A, {
                          positionTargetRef: eX,
                          type: G,
                          onSelectGIF: tb,
                          onSelectEmoji: tO,
                          onSelectSticker: tv,
                          onSelectSound: tA,
                          channel: U,
                          closeOnModalOuterClick: eK,
                          parentModalKey: ez,
                          position: "top",
                          align: "right",
                          positionLayerClassName: ep.BD,
                      }),
            ],
        }),
    });
}
let eG = i.memo(i.forwardRef(eU));
