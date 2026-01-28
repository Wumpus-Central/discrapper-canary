n.d(t, {
    Ay: () => eU,
    BX: () => eM,
    C: () => eI,
    L0: () => ew,
    MD: () => eD,
    NO: () => eA,
    N_: () => eT,
    Sk: () => eP,
    Vu: () => ev,
    Zx: () => eO,
    ck: () => eR,
    ml: () => eC,
    uW: () => ej,
    v7: () => eN,
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
    J = n(355622),
    $ = n(415409),
    ee = n(824842),
    et = n(612394),
    en = n(877146),
    er = n(147025),
    ei = n(776384),
    ea = n(171593),
    eo = n(257108),
    es = n(135261),
    el = n(711371),
    ec = n(476739),
    eu = n(652215);
n(827669);
var ed = n(698279),
    ef = n(111314);

function ep(e, t, n) {
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

function e_(e) {
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
                ep(e, t, n[t]);
            });
    }
    return e;
}

function eh(e, t) {
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

function em(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eh(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eg = 450,
    eE = 250;

function ey(e) {
    return e !== H.A.getChannelId();
}

function eb(e, t) {
    var n, r;
    return null != (n = e && (null == (r = t.submit) ? void 0 : r.clearOnSubmit)) && n;
}

function eO(e, t, a, o, s) {
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
                                n.e("99011"),
                                n.e("94857"),
                                n.e("7034"),
                                n.e("48898"),
                                n.e("39289"),
                            ]).then(n.bind(n, 538899));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    em(e_({}, t), {
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
                        d = eb(l, t),
                        f = null != a.current;
                    d &&
                        (ey(s)
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

function ev(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, a;
            t === J.oU.CREATE_FORUM_POST || t === J.oU.CREATE_ANNOUNCEMENT_POST
                ? null == (a = n.current) || a.insertGIF(r)
                : e(r.url, void 0, void 0, !0),
                (0, w.v8)(),
                null == (i = n.current) || i.focus();
        },
        [n, e, t],
    );
}

function eA(e) {
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

function eI(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: o, submit: s } = e,
        { analyticsLocations: l } = (0, y.Ay)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                (o === J.oU.CREATE_ANNOUNCEMENT_POST || (0, U.YS)(i, r, a, o.drafts.type)
                    ? ((0, et.fh)({
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

function eS(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (z.default.track(eu.HAw.SOUNDMOJI_SELECT, {
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

function eT(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, w.r$)(ed.kx.EMOJI, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            var r;
            !t && (null == (r = e.gifs) ? void 0 : r.allowSending) && (0, w.r$)(ed.kx.GIF, e, n);
        }, [t, e, n]),
        o = i.useCallback(() => {
            var r;
            !t && (null == (r = e.stickers) ? void 0 : r.allowSending) && (0, w.r$)(ed.kx.STICKER, e, n);
        }, [t, e, n]);
    (0, q.Vo)({
        event: eu.jej.TOGGLE_EMOJI_POPOUT,
        handler: r,
    }),
        (0, q.Vo)({
            event: eu.jej.TOGGLE_GIF_PICKER,
            handler: a,
        }),
        (0, q.Vo)({
            event: eu.jej.TOGGLE_STICKER_PICKER,
            handler: o,
        });
}

function eC(e, t, n) {
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

function eN() {
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

function eR(e) {
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

function eP(e, t, n, r) {
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
                c = f.zy(l, eu.xBc.CREATE_PUBLIC_THREADS) || f.zy(l, eu.xBc.CREATE_PRIVATE_THREADS),
                u =
                    (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) &&
                    (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || f.zy(l, eu.xBc.SEND_MESSAGES)),
                d = u && f.zy(l, eu.xBc.ATTACH_FILES),
                p = null != n,
                _ = (0, G.UJ)(e);
            return {
                disabled: r || o || (!s && !u) || _,
                canAttachFiles: !0 === t.attachments && (s || o || d || p),
                canCreateThreads: c,
                canEveryoneSendMessages: Z.MJ(eu.xBc.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
    return e_(
        {
            isLurking: a,
            isPendingMember: o,
        },
        s,
    );
}

function eD(e, t, n) {
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

function ex(e, t) {
    let [n, r] = i.useState({
            selectedAutocompleteInputType: null,
            selectedAutocompleteInputError: !1,
        }),
        a = i.useCallback(() => {
            var e, n, i, a;
            let o,
                s = null == (i = t.current) ? void 0 : i.getSlateEditor();
            null != s && (o = null == (a = el.VW.getSelectedParentOfType(s, C.mk)) ? void 0 : a[0]),
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
let eM = (e) => {
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
                    }, eE)));
            }, [n, t, e]),
            r
        );
    },
    ej = (e, t) => {
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

function ek(e, t) {
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
        onBlur: et,
        onFocus: el,
        onKeyDown: ed,
        onSubmit: ep,
        promptToUpload: e_,
        highlighted: eh,
        canMentionRoles: em,
        canMentionChannels: eE,
        maxCharacterCount: ey,
        showRemainingCharsAfterCount: eb,
        allowNewLines: ek = !0,
        characterCountClassName: eU,
        "aria-describedby": eG,
        "aria-labelledby": eF,
        setEditorRef: eV,
        autoCompletePosition: eB,
        children: eH,
        disableThemedBackground: eY = !1,
        emojiPickerCloseOnModalOuterClick: eW,
        parentModalKey: eK,
        pendingScheduledMessage: ez,
        showValueWhenDisabled: eq = !1,
    } = e;
    c()(null != G, "chat input type must be set");
    let { analyticsLocations: eZ } = (0, y.Ay)(E.A.CHANNEL_TEXT_AREA),
        eQ = ew(t),
        eX = i.useRef(null),
        eJ = i.useRef(null),
        e$ = i.useRef(null),
        e0 = i.useRef(null),
        e1 = i.useRef(null);
    null == eV || eV(e$.current);
    let e2 = (0, b.A)(U),
        [e3, e6] = i.useState(!e2);
    (0, m.i4)(eQ, (e) => {
        let { width: t } = e;
        return e6(!e2 && (null == t || t > eg));
    });
    let { activeCommand: e4, activeCommandSection: e5 } = (0, p.cf)([A.A], () => {
            var e, t;
            return {
                activeCommand: (null == (e = G.commands) ? void 0 : e.enabled) ? A.A.getActiveCommand(U.id) : null,
                activeCommandSection: (null == (t = G.commands) ? void 0 : t.enabled)
                    ? A.A.getActiveCommandSection(U.id)
                    : null,
            };
        }),
        {
            isLurking: e7,
            isPendingMember: e8,
            disabled: e9,
            canAttachFiles: te,
            canCreateThreads: tt,
            canEveryoneSendMessages: tn,
        } = eP(U, G, e4, L),
        tr = G.toolbarType === J.O1.STATIC,
        ti = !F.D_.useSetting() && !(0, Q.isAndroidWeb)() && null != window.ResizeObserver,
        ta = !ti || !(null == (n = G.commands) ? void 0 : n.enabled) || !V || "/" !== f,
        to = (0, x.A)(),
        { fontSize: ts } = (0, p.cf)([g.A], () => ({
            fontSize: g.A.fontSize,
        })),
        tl = (0, p.bG)([Y.A], () => Y.A.isEnabled());
    eT(G, e9, U.id);
    let { eventEmitter: tc, handleEditorSelectionChanged: tu } = eC(e$, f, h),
        td = i.useRef(f);
    td.current = f;
    let tf = i.useCallback(
            (e, t, n) => {
                var r;
                "/" === t &&
                    "" === td.current &&
                    (null == (r = G.commands) ? void 0 : r.enabled) &&
                    tc.emit("command-sentinel-typed"),
                    null == q || q(e, t, n);
            },
            [q, null == (a = G.commands) ? void 0 : a.enabled, tc],
        ),
        { submitting: tp, submit: t_, handleSubmit: th } = eO(ep, G, e$, e1, U.id),
        { autocompleteRef: tm, handleMaybeShowAutocomplete: tg, handleHideAutocomplete: tE } = eN(),
        ty = ev(t_, G, e$),
        tb = eA(e$),
        tO = eI({
            editorRef: e$,
            disabled: e9,
            textValue: f,
            channelId: U.id,
            chatInputType: G,
            submit: ep,
        }),
        tv = eS(e$, U),
        tA = i.useCallback(() => {
            var e;
            return null == e1 || null == (e = e1.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tI, handleResize: tS } = eR(Z),
        { handleTab: tT, handleEnter: tC, handleMoveSelection: tN } = eL(tm, eX, ta),
        { expressionPickerView: tw, shouldHideExpressionPicker: tR, handleOuterClick: tP } = eD(G, e$, U.id),
        { selectedAutocompleteInputType: tD, selectedAutocompleteInputError: tL } = ex(tc, e$),
        tx = eM(f),
        { currentAutocompleteType: tM, handleAutocompleteVisibilityChange: tj } = ej(G, U.id),
        tk = (0, S.A)({
            type: G,
            channelId: U.id,
        }),
        tU = i.useCallback(() => {
            tc.emit("submit-failure");
        }, [tc]);
    (0, X.R)(tc, U.guild_id, U.id);
    let tG = null != z,
        tF = (e9 && !((e7 || e8) && tn)) || (tp && (null == (s = G.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tV = null;
    null != e4 ? (tV = null == W ? void 0 : W(e4, e5, ef.g$)) : (!e9 || tt) && (tV = null == H ? void 0 : H(tG, ef.g$));
    let tB = ti && null != h && !e9 && G.showCharacterCount && null == e4,
        tH = ti && !__OVERLAY__ && null != h && null == e4 && G.toolbarType !== J.O1.NONE && !e9,
        tY = (0, en.Y)({
            channel: U,
            type: G,
            activeCommand: e4,
            pendingReply: z,
            pendingScheduledMessage: ez,
            selectedAutocompleteInputType: tD,
            selectedAutocompleteInputError: tL,
        }),
        tW = 0 === f.trim().length,
        tK = G.layout === J.wt.INLINE,
        tz = G.layout === J.wt.FLUSH,
        tq = (0, r.jsx)("div", {
            ref: eJ,
            className: ef.BW,
        }),
        tZ = tk
            ? (0, r.jsx)(v.A, {
                  align: "right",
                  positionTargetRef: eJ,
                  channel: U,
              })
            : null,
        tQ =
            null != K
                ? K()
                : (0, r.jsx)(er.A, {
                      type: G,
                      disabled: e9,
                      channel: U,
                      handleSubmit: th,
                      isEmpty: tW,
                      showAllButtons: e3,
                  }),
        tX = tB
            ? (0, r.jsx)(eo.A, {
                  type: G,
                  textValue: f,
                  className: eU,
                  maxCharacterCount: ey,
                  showRemainingCharsAfterCount: eb,
              })
            : null;
    return (0, r.jsx)(N.Sv, {
        value: tc,
        children: (0, r.jsxs)(y.f5, {
            value: eZ,
            children: [
                tH && tr
                    ? (0, r.jsx)(ec.A, {
                          editorRef: e$,
                          options: G.markdown,
                          channel: U,
                      })
                    : tH
                      ? (0, r.jsx)(es.A, {
                            ref: e1,
                            editorRef: e$,
                            containerRef: e0,
                            options: G.markdown,
                        })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eQ,
                    className: o()(O, {
                        [ef.gM]: !0,
                        [ef.h9]: tF,
                        [ef.mr]: eh,
                        [ef.Wn]: d.Fr,
                        [ef.Ls]: tK,
                        [ef.AH]: tz,
                        [ef.z3]: null != B,
                    }),
                    children: [
                        tK || tz
                            ? null
                            : (0, r.jsx)(en.A, {
                                  bars: tY,
                              }),
                        (0, r.jsxs)("div", {
                            ref: e0,
                            onScroll: tA,
                            className: o()(C, {
                                [ef.xx]: !0,
                                [ef.k6]: !eY,
                                [ef.Ri]: tY.stacked.length > 0,
                            }),
                            children: [
                                (0, r.jsx)(ee.A, {
                                    channelId: U.id,
                                    chatInputType: G,
                                }),
                                G.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(ea.A, {
                                          channelId: U.id,
                                          type: G,
                                          canAttachFiles: te,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: o()(ef.vW, {
                                        [ef.BF]: tF,
                                        [ef.RL]: G !== J.oU.EDIT && (null != tV || (tF && null == tV) || e7),
                                        [ef.fk]: G === J.oU.THREAD_CREATION,
                                        [ef.TZ]: G === J.oU.CREATE_FORUM_POST || G === J.oU.FORWARD_MESSAGE_INPUT,
                                        [ef.$i]: G === J.oU.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tP,
                                    children: [
                                        tZ,
                                        tV,
                                        (0, r.jsx)(_.vN3, {
                                            ringTarget: eQ,
                                            ringClassName: ef.Rg,
                                            children: (0, r.jsx)($.A, {
                                                ref: e$,
                                                id: P,
                                                focused: V,
                                                useSlate: ti,
                                                textValue: f,
                                                richValue: h,
                                                disabled: e9,
                                                placeholder: j,
                                                required: D,
                                                accessibilityLabel: k,
                                                isPreviewing: (e7 || e8) && tn,
                                                channel: U,
                                                type: G,
                                                canPasteFiles: te,
                                                uploadPromptCharacterCount: eu.CS1,
                                                maxCharacterCount: null != ey ? ey : to,
                                                allowNewLines: ek,
                                                "aria-describedby": eG,
                                                onChange: tf,
                                                onResize: tS,
                                                onBlur: et,
                                                onFocus: el,
                                                onKeyDown: ed,
                                                onSubmit: t_,
                                                onSubmitFailure: tU,
                                                onTab: tT,
                                                onEnter: tC,
                                                onMoveSelection: tN,
                                                onSelectionChanged: tu,
                                                onMaybeShowAutocomplete: tg,
                                                onHideAutocomplete: tE,
                                                promptToUpload: e_,
                                                fontSize: ts,
                                                spellcheckEnabled: tl,
                                                canOnlyUseTextCommands: tG,
                                                isEditorIdle: tx,
                                                currentAutocompleteType: tM,
                                                className: o()(
                                                    {
                                                        [ef.QI]: G === J.oU.THREAD_CREATION,
                                                        [ef.AV]: G === J.oU.PROFILE_BIO_INPUT,
                                                        [ef.GR]: G === J.oU.OVERLAY_INLINE_REPLY,
                                                    },
                                                    w,
                                                ),
                                                "aria-labelledby": eF,
                                                showValueWhenDisabled: eq,
                                            }),
                                        }),
                                        tQ,
                                        tq,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(ei.a, {
                            channel: U,
                            type: G,
                            pendingScheduledMessage: ez,
                        }),
                        ta
                            ? null
                            : (0, r.jsx)(I.A, {
                                  ref: eX,
                                  channel: U,
                                  canOnlyUseTextCommands: tG,
                              }),
                        (0, r.jsx)(T.A, {
                            ref: tm,
                            channel: U,
                            canMentionRoles: em,
                            canMentionChannels: eE,
                            useNewSlashCommands: ti,
                            canOnlyUseTextCommands: tG,
                            canSendStickers: null == (l = G.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = G.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: V,
                            isEditorIdle: tx,
                            expressionPickerView: tw,
                            type: G,
                            targetRef: eQ,
                            editorRef: e$,
                            onSendMessage: t_,
                            onSendSticker: tO,
                            onVisibilityChange: tj,
                            editorScrollerRef: e0,
                            editorHeight: tI,
                            barsHeight: 40 * tY.floating.length,
                            setValue: (e, t) => (null == tf ? void 0 : tf(null, e, t)),
                            position: eB,
                        }),
                        (0, r.jsx)(M.A, {
                            textValue: f,
                            editorHeight: tI,
                            channelId: U.id,
                        }),
                        tX,
                        eH,
                    ],
                }),
                (0, r.jsx)(_.dzK, {
                    error: B,
                }),
                tR
                    ? null
                    : (0, r.jsx)(R.A, {
                          positionTargetRef: eQ,
                          type: G,
                          onSelectGIF: ty,
                          onSelectEmoji: tb,
                          onSelectSticker: tO,
                          onSelectSound: tv,
                          channel: U,
                          closeOnModalOuterClick: eW,
                          parentModalKey: eK,
                          position: "top",
                          align: "right",
                          positionLayerClassName: ef.BD,
                      }),
            ],
        }),
    });
}
let eU = i.memo(i.forwardRef(ek));
