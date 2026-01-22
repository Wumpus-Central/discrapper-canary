n.d(t, {
    Ay: () => eG,
    BX: () => eM,
    C: () => eI,
    L0: () => ew,
    MD: () => ex,
    NO: () => eS,
    N_: () => eC,
    Sk: () => eD,
    Vu: () => ev,
    Zx: () => eA,
    ck: () => eP,
    ml: () => eN,
    uW: () => ek,
    v7: () => eR,
}),
    n(896048),
    n(65821),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(143236),
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
    b = n(688810),
    y = n(177640),
    O = n(989837),
    A = n(667889),
    v = n(861382),
    S = n(391848),
    I = n(186226),
    T = n(875163),
    C = n(31498),
    N = n(598071),
    R = n(151271),
    w = n(834755),
    P = n(256265),
    D = n(857071),
    x = n(968011),
    L = n(135621),
    j = n(235430),
    M = n(931664),
    k = n(631576),
    U = n(378058),
    G = n(406704),
    V = n(253932),
    F = n(696451),
    B = n(576705),
    H = n(309010),
    Y = n(638128),
    W = n(522602),
    K = n(287809),
    z = n(954571),
    q = n(234320),
    X = n(488926),
    Z = n(723702),
    Q = n(486319),
    $ = n(184761),
    J = n(355622),
    ee = n(415409),
    et = n(824842),
    en = n(612394),
    er = n(877146),
    ei = n(147025),
    ea = n(776384),
    es = n(171593),
    eo = n(257108),
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
    eb = 250;

function ey(e) {
    return e !== H.A.getChannelId();
}

function eO(e, t) {
    var n, r;
    return null != (n = e && (null == (r = t.submit) ? void 0 : r.clearOnSubmit)) && n;
}

function eA(e, t, a, s, o) {
    let [l, c] = i.useState(!1),
        u = i.useCallback(
            (i, d, f, p, m) => {
                var g, E, b;
                if (l) return;
                c(!0);
                let y =
                        null !=
                        (g = null == (b = M.A.getStickerPreview(o, t.drafts.type)) ? void 0 : b.map((e) => e.id))
                            ? g
                            : [],
                    O = null != (E = W.A.getUploads(o, t.drafts.type)) ? E : [];
                if (null == d && !p && !m && (0, P.xz)(O, o)) {
                    c(!1),
                        (0, _.mMO)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("49681"),
                                n.e("99011"),
                                n.e("48898"),
                                n.e("91798"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    eg(eh({}, t), {
                                        threadId: o,
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
                    stickers: y,
                    command: d,
                    commandOptionValues: f,
                    isGif: p,
                }).then((e) => {
                    var n, r, i;
                    let { shouldClear: l, shouldRefocus: u } = e,
                        d = eO(l, t),
                        f = null != a.current;
                    d &&
                        (ey(o)
                            ? h.A.saveDraft(o, "", t.drafts.type)
                            : f && (null == (r = a.current) || r.clearValue(), null == (i = s.current) || i.hide())),
                        f && (c(!1), (0, R.v8)(), u && (null == (n = a.current) || n.focus()));
                });
            },
            [a, s, e, l, t, o],
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

function ev(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, a;
            t === J.oU.CREATE_FORUM_POST || t === J.oU.CREATE_ANNOUNCEMENT_POST
                ? null == (a = n.current) || a.insertGIF(r)
                : e(r.url, void 0, void 0, !0),
                (0, R.v8)(),
                null == (i = n.current) || i.focus();
        },
        [n, e, t],
    );
}

function eS(e) {
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
                r && (0, R.v8)();
        },
        [e],
    );
}

function eI(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: s, submit: o } = e,
        { analyticsLocations: l } = (0, b.Ay)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                (s === J.oU.CREATE_ANNOUNCEMENT_POST || (0, U.YS)(i, r, a, s.drafts.type)
                    ? ((0, en.fh)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != M.A.getStickerPreview(a, s.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, k.$x)(a, e, s.drafts.type))
                    : (o({
                          value: "",
                          uploads: void 0,
                          stickers: [e.id],
                      }),
                      null == (u = t.current) || u.clearValue()),
                (0, R.v8)(),
                null == (c = t.current) || c.focus());
        },
        [n, r, a, t, l, o, s],
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
                i && (0, R.v8)(),
                null == a || a.focus();
        },
        [e, t.id, t.guild_id],
    );
}

function eC(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, R.r$)(ef.kx.EMOJI, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            var r;
            !t && (null == (r = e.gifs) ? void 0 : r.allowSending) && (0, R.r$)(ef.kx.GIF, e, n);
        }, [t, e, n]),
        s = i.useCallback(() => {
            var r;
            !t && (null == (r = e.stickers) ? void 0 : r.allowSending) && (0, R.r$)(ef.kx.STICKER, e, n);
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
            handler: s,
        });
}

function eN(e, t, n) {
    let [r] = i.useState(() => new o.EventEmitter());
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

function eR() {
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

function ew(e) {
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
        s = (0, p.bG)([F.Ay, K.default], () => {
            var e, t;
            let n = K.default.getCurrentUser();
            return (
                null !=
                    (e =
                        null != i && null != n
                            ? null == (t = F.Ay.getMember(i, n.id))
                                ? void 0
                                : t.isPending
                            : null) && e
            );
        }),
        o = (0, p.cf)([B.A], () => {
            var i, a;
            let o = e.isPrivate(),
                l = B.A.computePermissions(e),
                c = f.zy(l, ed.xBc.CREATE_PUBLIC_THREADS) || f.zy(l, ed.xBc.CREATE_PRIVATE_THREADS),
                u =
                    (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) &&
                    (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || f.zy(l, ed.xBc.SEND_MESSAGES)),
                d = u && f.zy(l, ed.xBc.ATTACH_FILES),
                p = null != n,
                _ = (0, G.UJ)(e);
            return {
                disabled: r || s || (!o && !u) || _,
                canAttachFiles: !0 === t.attachments && (o || s || d || p),
                canCreateThreads: c,
                canEveryoneSendMessages: X.MJ(ed.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, s]);
    return eh(
        {
            isLurking: a,
            isPendingMember: s,
        },
        o,
    );
}

function ex(e, t, n) {
    let [r, a, s] = (0, R.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], u.x),
        o = (0, p.bG)([O.A], () => O.A.shouldShowPopup() && O.A.activeViewType() === e && O.A.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, R.v8)(e, n);
        },
        [e, n],
    );
    let l = i.useCallback(() => {
            var e;
            null != r || o || null == (e = t.current) || e.handleOuterClick();
        }, [r, o, t]),
        c = null == r || null == a || a !== e || s !== n;
    return {
        expressionPickerView: r,
        shouldHideExpressionPicker: c,
        handleOuterClick: l,
    };
}

function eL(e, t, n) {
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

function ej(e, t) {
    let [n, r] = i.useState({
            selectedAutocompleteInputType: null,
            selectedAutocompleteInputError: !1,
        }),
        a = i.useCallback(() => {
            var e, n, i, a;
            let s,
                o = null == (i = t.current) ? void 0 : i.getSlateEditor();
            null != o && (s = null == (a = ec.VW.getSelectedParentOfType(o, C.mk)) ? void 0 : a[0]),
                r({
                    selectedAutocompleteInputType: null != (e = null == s ? void 0 : s.type) ? e : null,
                    selectedAutocompleteInputError: null != (n = null == s ? void 0 : s.error) && n,
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
let eM = (e) => {
        let { enabled: t, onlyExactMatch: n } = (0, x.us)("ChannelTextAreaContainer", {
                autoTrackExposure: !1,
            }),
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
                    }, eb)));
            }, [n, t, e]),
            r
        );
    },
    ek = (e, t) => {
        let { enabled: n } = (0, x.us)("ChannelTextAreaContainer", {
                autoTrackExposure: !1,
            }),
            [r, a] = i.useState(null);
        return {
            currentAutocompleteType: r,
            handleAutocompleteVisibilityChange: i.useCallback(
                (r, i) => {
                    n && a(i), r && (0, R.v8)(e, t);
                },
                [n, e, t],
            ),
        };
    };

function eU(e, t) {
    var n, a, o, l, u;
    let {
        textValue: f,
        richValue: h,
        className: O,
        innerClassName: C,
        editorClassName: R,
        id: P,
        required: D,
        disabled: x,
        placeholder: M,
        accessibilityLabel: k,
        channel: U,
        type: G,
        focused: F,
        error: B,
        renderAttachButton: H,
        renderApplicationCommandIcon: W,
        renderButtons: K,
        pendingReply: z,
        onChange: q,
        onResize: X,
        onBlur: en,
        onFocus: ec,
        onKeyDown: ef,
        onSubmit: e_,
        promptToUpload: eh,
        highlighted: em,
        canMentionRoles: eg,
        canMentionChannels: eb,
        maxCharacterCount: ey,
        showRemainingCharsAfterCount: eO,
        allowNewLines: eU = !0,
        characterCountClassName: eG,
        "aria-describedby": eV,
        "aria-labelledby": eF,
        setEditorRef: eB,
        autoCompletePosition: eH,
        children: eY,
        disableThemedBackground: eW = !1,
        emojiPickerCloseOnModalOuterClick: eK,
        parentModalKey: ez,
        pendingScheduledMessage: eq,
        showValueWhenDisabled: eX = !1,
    } = e;
    c()(null != G, "chat input type must be set");
    let { analyticsLocations: eZ } = (0, b.Ay)(E.A.CHANNEL_TEXT_AREA),
        eQ = ew(t),
        e$ = i.useRef(null),
        eJ = i.useRef(null),
        e0 = i.useRef(null),
        e1 = i.useRef(null),
        e2 = i.useRef(null);
    null == eB || eB(e0.current);
    let e3 = (0, y.A)(U),
        [e6, e4] = i.useState(!e3);
    (0, m.i4)(eQ, (e) => {
        let { width: t } = e;
        return e4(!e3 && (null == t || t > eE));
    });
    let { activeCommand: e5, activeCommandSection: e7 } = (0, p.cf)([v.A], () => {
            var e, t;
            return {
                activeCommand: (null == (e = G.commands) ? void 0 : e.enabled) ? v.A.getActiveCommand(U.id) : null,
                activeCommandSection: (null == (t = G.commands) ? void 0 : t.enabled)
                    ? v.A.getActiveCommandSection(U.id)
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
        } = eD(U, G, e5, x),
        ti = G.toolbarType === J.O1.STATIC,
        ta = !V.D_.useSetting() && !(0, Z.isAndroidWeb)() && null != window.ResizeObserver,
        ts = !ta || !(null == (n = G.commands) ? void 0 : n.enabled) || !F || "/" !== f,
        to = (0, L.A)(),
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
        { submitting: t_, submit: th, handleSubmit: tm } = eA(e_, G, e0, e2, U.id),
        { autocompleteRef: tg, handleMaybeShowAutocomplete: tE, handleHideAutocomplete: tb } = eR(),
        ty = ev(th, G, e0),
        tO = eS(e0),
        tA = eI({
            editorRef: e0,
            disabled: te,
            textValue: f,
            channelId: U.id,
            chatInputType: G,
            submit: e_,
        }),
        tv = eT(e0, U),
        tS = i.useCallback(() => {
            var e;
            return null == e2 || null == (e = e2.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tI, handleResize: tT } = eP(X),
        { handleTab: tC, handleEnter: tN, handleMoveSelection: tR } = eL(tg, e$, ts),
        { expressionPickerView: tw, shouldHideExpressionPicker: tP, handleOuterClick: tD } = ex(G, e0, U.id),
        { selectedAutocompleteInputType: tx, selectedAutocompleteInputError: tL } = ej(tu, e0),
        tj = eM(f),
        { currentAutocompleteType: tM, handleAutocompleteVisibilityChange: tk } = ek(G, U.id),
        { moveAppsEntrypointToOverflow: tU } = $.C.useConfig({
            location: "ChannelAppLauncher",
        }),
        tG = (0, I.A)({
            type: G,
            channelId: U.id,
        }),
        tV = i.useCallback(() => {
            tu.emit("submit-failure");
        }, [tu]);
    (0, Q.R)(tu, U.guild_id, U.id);
    let tF = null != z,
        tB = (te && !((e8 || e9) && tr)) || (t_ && (null == (o = G.submit) ? void 0 : o.useDisabledStylesOnSubmit)),
        tH = null;
    null != e5 ? (tH = null == W ? void 0 : W(e5, e7, ep.g$)) : (!te || tn) && (tH = null == H ? void 0 : H(tF, ep.g$));
    let tY = ta && null != h && !te && G.showCharacterCount && null == e5,
        tW = ta && !__OVERLAY__ && null != h && null == e5 && G.toolbarType !== J.O1.NONE && !te,
        tK = (0, er.Y)({
            channel: U,
            type: G,
            activeCommand: e5,
            pendingReply: z,
            pendingScheduledMessage: eq,
            selectedAutocompleteInputType: tx,
            selectedAutocompleteInputError: tL,
        }),
        tz = 0 === f.trim().length,
        tq = G.layout === J.wt.INLINE,
        tX = G.layout === J.wt.FLUSH,
        tZ = (0, r.jsx)("div", {
            ref: eJ,
            className: ep.BW,
        }),
        tQ = tG
            ? (0, r.jsx)(A.A, {
                  align: tU && G !== J.oU.SIDEBAR ? "left" : "right",
                  positionTargetRef: eJ,
                  channel: U,
              })
            : null,
        t$ =
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
        tJ = tY
            ? (0, r.jsx)(eo.A, {
                  type: G,
                  textValue: f,
                  className: eG,
                  maxCharacterCount: ey,
                  showRemainingCharsAfterCount: eO,
              })
            : null;
    return (0, r.jsx)(N.Sv, {
        value: tu,
        children: (0, r.jsxs)(b.f5, {
            value: eZ,
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
                    ref: eQ,
                    className: s()(O, {
                        [ep.gM]: !0,
                        [ep.h9]: tB,
                        [ep.mr]: em,
                        [ep.Wn]: d.Fr,
                        [ep.Ls]: tq,
                        [ep.AH]: tX,
                        [ep.z3]: null != B,
                    }),
                    children: [
                        tq || tX
                            ? null
                            : (0, r.jsx)(er.A, {
                                  bars: tK,
                              }),
                        (0, r.jsxs)("div", {
                            ref: e1,
                            onScroll: tS,
                            className: s()(C, {
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
                                    : (0, r.jsx)(es.A, {
                                          channelId: U.id,
                                          type: G,
                                          canAttachFiles: tt,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: s()(ep.vW, {
                                        [ep.BF]: tB,
                                        [ep.RL]: G !== J.oU.EDIT && (null != tH || (tB && null == tH) || e8),
                                        [ep.fk]: G === J.oU.THREAD_CREATION,
                                        [ep.TZ]: G === J.oU.CREATE_FORUM_POST || G === J.oU.FORWARD_MESSAGE_INPUT,
                                        [ep.$i]: G === J.oU.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tD,
                                    children: [
                                        tQ,
                                        tU && tZ,
                                        tH,
                                        (0, r.jsx)(_.vN3, {
                                            ringTarget: eQ,
                                            ringClassName: ep.Rg,
                                            children: (0, r.jsx)(ee.A, {
                                                ref: e0,
                                                id: P,
                                                focused: F,
                                                useSlate: ta,
                                                textValue: f,
                                                richValue: h,
                                                disabled: te,
                                                placeholder: M,
                                                required: D,
                                                accessibilityLabel: k,
                                                isPreviewing: (e8 || e9) && tr,
                                                channel: U,
                                                type: G,
                                                canPasteFiles: tt,
                                                uploadPromptCharacterCount: ed.CS1,
                                                maxCharacterCount: null != ey ? ey : to,
                                                allowNewLines: eU,
                                                "aria-describedby": eV,
                                                onChange: tp,
                                                onResize: tT,
                                                onBlur: en,
                                                onFocus: ec,
                                                onKeyDown: ef,
                                                onSubmit: th,
                                                onSubmitFailure: tV,
                                                onTab: tC,
                                                onEnter: tN,
                                                onMoveSelection: tR,
                                                onSelectionChanged: td,
                                                onMaybeShowAutocomplete: tE,
                                                onHideAutocomplete: tb,
                                                promptToUpload: eh,
                                                fontSize: tl,
                                                spellcheckEnabled: tc,
                                                canOnlyUseTextCommands: tF,
                                                isEditorIdle: tj,
                                                currentAutocompleteType: tM,
                                                className: s()(
                                                    {
                                                        [ep.QI]: G === J.oU.THREAD_CREATION,
                                                        [ep.AV]: G === J.oU.PROFILE_BIO_INPUT,
                                                        [ep.GR]: G === J.oU.OVERLAY_INLINE_REPLY,
                                                    },
                                                    R,
                                                ),
                                                "aria-labelledby": eF,
                                                showValueWhenDisabled: eX,
                                            }),
                                        }),
                                        t$,
                                        !tU && tZ,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(ea.a, {
                            channel: U,
                            type: G,
                            pendingScheduledMessage: eq,
                        }),
                        ts
                            ? null
                            : (0, r.jsx)(S.A, {
                                  ref: e$,
                                  channel: U,
                                  canOnlyUseTextCommands: tF,
                              }),
                        (0, r.jsx)(T.A, {
                            ref: tg,
                            channel: U,
                            canMentionRoles: eg,
                            canMentionChannels: eb,
                            useNewSlashCommands: ta,
                            canOnlyUseTextCommands: tF,
                            canSendStickers: null == (l = G.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = G.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: F,
                            isEditorIdle: tj,
                            expressionPickerView: tw,
                            type: G,
                            targetRef: eQ,
                            editorRef: e0,
                            onSendMessage: th,
                            onSendSticker: tA,
                            onVisibilityChange: tk,
                            editorScrollerRef: e1,
                            editorHeight: tI,
                            barsHeight: 40 * tK.floating.length,
                            setValue: (e, t) => (null == tp ? void 0 : tp(null, e, t)),
                            position: eH,
                        }),
                        (0, r.jsx)(j.A, {
                            textValue: f,
                            editorHeight: tI,
                            channelId: U.id,
                        }),
                        tJ,
                        eY,
                    ],
                }),
                (0, r.jsx)(_.dzK, {
                    error: B,
                }),
                tP
                    ? null
                    : (0, r.jsx)(w.A, {
                          positionTargetRef: eQ,
                          type: G,
                          onSelectGIF: ty,
                          onSelectEmoji: tO,
                          onSelectSticker: tA,
                          onSelectSound: tv,
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
