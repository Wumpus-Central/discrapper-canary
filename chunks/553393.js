n.d(t, { Z: () => U }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(509442),
    o = n(91192),
    s = n(442837),
    l = n(159691),
    c = n(780384),
    u = n(481060),
    d = n(287734),
    f = n(872810),
    _ = n(393238),
    p = n(607070),
    h = n(728285),
    m = n(210887),
    g = n(592125),
    E = n(617136),
    b = n(509212),
    y = n(497505),
    O = n(373370),
    v = n(475595),
    I = n(602667),
    S = n(644646),
    T = n(110560),
    A = n(667105),
    C = n(46140),
    N = n(981631),
    R = n(231338),
    P = n(388032),
    w = n(419953);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
let L = "8px",
    M = "11px",
    j = 222;
function k(e) {
    var t, I, D, k, U;
    let {
            quest: G,
            memberListItemRef: B,
            applicationStream: Z,
            position: F,
            closePopout: V,
            updatePosition: H,
            impressionRef: Y,
            name: W,
        } = e,
        K = (0, s.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getChannel(null == Z ? void 0 : Z.channelId)) ? e : null;
        }),
        z = (0, A.hf)({
            quest: G,
            questContent: y.jn.MEMBERS_LIST,
            sourceQuestContent: y.jn.MEMBERS_LIST,
        }),
        q = (null == G || null == (t = G.userStatus) ? void 0 : t.claimedAt) != null,
        X = (null == G || null == (I = G.userStatus) ? void 0 : I.enrolledAt) != null,
        Q = (null == G || null == (D = G.userStatus) ? void 0 : D.completedAt) != null,
        J = (0, s.e7)([m.Z], () => m.Z.getState().theme),
        $ = (0, c.wj)(J) ? R.BR.DARK : R.BR.LIGHT,
        ee = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        { ref: et, height: en } = (0, _.ZP)(),
        [er, ei] = i.useState(ee),
        ea = (0, h.Aq)(),
        eo = (0, o.eg)();
    i.useEffect(() => {
        let e = eo.current;
        return (
            null == e || e.addEventListener("scroll", V),
            () => {
                null == e || e.removeEventListener("scroll", V);
            }
        );
    }, [V, eo]),
        i.useEffect(() => {
            let e = eo.current,
                t = B.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => H());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0,
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [B, eo, H]);
    let es = (0, u.q_F)({
            from: { height: 0 },
            height: null != en ? en : 0,
            config: {
                tension: 450,
                friction: 45,
            },
            onRest: () => ei(!0),
        }),
        el = (0, u.Yzy)(er, {
            from: {
                opacity: 0,
                scale: 0,
            },
            enter: {
                opacity: 1,
                scale: 1,
            },
        }),
        ec = () => {
            ea.dispatch(N.CkL.POPOUT_CLOSE);
        },
        eu = "top" === F ? "".concat(L, " ").concat(L, " 0 0") : "0 0 ".concat(L, " ").concat(L),
        ed = () => {
            (0, E._3)({
                questId: G.id,
                questContent: y.jn.MEMBERS_LIST,
                questContentCTA: E.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: y.jn.MEMBERS_LIST,
            }),
                (0, T.openDisclosureModal)(G, {
                    content: y.jn.MEMBERS_LIST,
                    ctaContent: E.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: y.jn.MEMBERS_LIST,
                });
        },
        ef = () => {
            (0, E._3)({
                questId: G.id,
                questContent: y.jn.MEMBERS_LIST,
                questContentCTA: E.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: y.jn.MEMBERS_LIST,
            }),
                (0, T.navigateToQuestHome)({
                    fromContent: y.jn.MEMBERS_LIST,
                    questId: G.id,
                });
        },
        e_ = (e) => {
            e.stopPropagation(), ed();
        },
        ep = () => {
            (0, b.Rc)(Z, K) && null != K
                ? ((0, E._3)({
                      questId: G.id,
                      questContent: y.jn.MEMBERS_LIST,
                      questContentCTA: E.jZ.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: y.jn.MEMBERS_LIST,
                  }),
                  (0, u.ZDy)(async () => {
                      let { default: e } = await n.e("85045").then(n.bind(n, 748862));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              x(
                                  {
                                      username: null != W ? W : "",
                                      onConfirm: () => (
                                          (0, E._3)({
                                              questId: G.id,
                                              questContent: y.jn.MEMBERS_LIST,
                                              questContentCTA: E.jZ.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0,
                                              sourceQuestContent: y.jn.MEMBERS_LIST,
                                          }),
                                          d.default.selectVoiceChannel(K.id),
                                          (0, f.iV)(Z)
                                      ),
                                  },
                                  t,
                              ),
                          );
                  }))
                : ef();
        },
        eh = (0, O.CR)({ quest: G }),
        em = (() => {
            if (Q && !q)
                return {
                    headerText: P.intl.string(P.t.gHerLS),
                    ctaText: P.intl.string(P.t.cfY4PE),
                    handleClickCta: z,
                    tileAssetType: "reward",
                };
            if (X && !q)
                return {
                    headerText: P.intl.string(P.t.uH2sf2),
                    ctaText: P.intl.string(P.t.VN1Ajl),
                    handleClickCta: ef,
                    tileAssetType: "reward",
                };
            if ((0, b.Rc)(Z, K))
                return {
                    headerText: P.intl.string(P.t.Bz6SkH),
                    ctaText: P.intl.string(P.t.BXFP30),
                    handleClickCta: ep,
                    tileAssetType: "game",
                };
            let e = (0, b.Rt)(G) ? eh : P.intl.string(P.t["BSXPZ+"]);
            return {
                headerText:
                    (0, b.Rt)(G) && (0, b.pO)(G) && !G.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : P.intl.string(P.t.Bz6SkH),
                ctaText: e,
                handleClickCta: ef,
                tileAssetType: "game",
            };
        })();
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            Y.current = e;
        },
        "aria-expanded": er,
        className: w.wrapper,
        style: {
            width: null != (U = null == (k = B.current) ? void 0 : k.clientWidth) ? U : j,
            height: es.height,
            overflow: er ? "visible" : "hidden",
            borderRadius: eu,
        },
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                et.current = e;
            },
            className: w.container,
            style: { borderRadius: eu },
            children: [
                (0, r.jsxs)("div", {
                    className: w.top,
                    children: [
                        (0, r.jsxs)("div", {
                            className: w.left,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: em.headerText,
                                }),
                                (0, r.jsxs)(u.P3F, {
                                    className: w.help,
                                    onClick: (e) => {
                                        ec(), e_(e);
                                    },
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: w.helpText,
                                            children: P.intl.format(P.t["Lm8/mH"], {
                                                gamePublisher: G.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(u.idN, {
                                            size: "custom",
                                            className: w.helpIcon,
                                            width: M,
                                            height: M,
                                            color: u.TVs.colors.INTERACTIVE_NORMAL,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: w.right,
                            children: (0, r.jsxs)("div", {
                                className: w.imgWrapper,
                                children: [
                                    el(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: e,
                                                className: w.imgUnderlay,
                                            }),
                                    ),
                                    "game" === em.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: P.intl.formatToPlainString(P.t.IskzPg, {
                                                gameTitle: G.config.messages.gameTitle,
                                                gamePublisher: G.config.messages.gamePublisher,
                                            }),
                                            className: w.assetTile,
                                            src: (0, v.fh)(G, v.eC.GAME_TILE, $).url,
                                        }),
                                    "reward" === em.tileAssetType &&
                                        (0, r.jsx)(S.Z, {
                                            className: w.assetTile,
                                            quest: G,
                                            questContent: y.jn.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            location: C.dr.MEMBERS_LIST,
                                            onClick: ec,
                                            sourceQuestContent: y.jn.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.zxk, {
                    variant: "secondary",
                    text: em.ctaText,
                    onClick: () => {
                        ec(), em.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function U(e) {
    return (0, r.jsx)(I.A, {
        questOrQuests: e.quest,
        questContent: y.jn.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: y.jn.MEMBERS_LIST,
        children: (t) => (0, r.jsx)(k, x({ impressionRef: t }, e)),
    });
}
