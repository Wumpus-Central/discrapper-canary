n.d(t, { Z: () => U }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(666917),
    o = n(91192),
    s = n(442837),
    l = n(159691),
    c = n(780384),
    u = n(481060),
    d = n(287734),
    f = n(872810),
    p = n(393238),
    _ = n(607070),
    m = n(728285),
    h = n(210887),
    g = n(592125),
    E = n(617136),
    b = n(49436),
    y = n(509212),
    O = n(373370),
    v = n(475595),
    S = n(602667),
    I = n(659302),
    T = n(644646),
    A = n(110560),
    C = n(324805),
    N = n(981631),
    P = n(231338),
    R = n(388032),
    w = n(243548);
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
    j = "11px",
    M = 222;
function k(e) {
    var t, S, D, k, U;
    let {
            quest: G,
            memberListItemRef: Z,
            applicationStream: B,
            position: F,
            closePopout: V,
            updatePosition: H,
            impressionRef: Y,
            name: W,
        } = e,
        K = (0, s.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getChannel(null == B ? void 0 : B.channelId)) ? e : null;
        }),
        z = (0, I.hf)({
            quest: G,
            questContent: b.jn.MEMBERS_LIST,
            sourceQuestContent: b.jn.MEMBERS_LIST,
        }),
        q = (null == G || null == (t = G.userStatus) ? void 0 : t.claimedAt) != null,
        Q = (null == G || null == (S = G.userStatus) ? void 0 : S.enrolledAt) != null,
        X = (null == G || null == (D = G.userStatus) ? void 0 : D.completedAt) != null,
        J = (0, s.e7)([h.Z], () => h.Z.getState().theme),
        $ = (0, c.wj)(J) ? P.BR.DARK : P.BR.LIGHT,
        ee = (0, s.e7)([_.Z], () => _.Z.useReducedMotion),
        { ref: et, height: en } = (0, p.ZP)(),
        [er, ei] = i.useState(ee),
        ea = (0, m.Aq)(),
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
                t = Z.current;
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
        }, [Z, eo, H]);
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
                questContent: b.jn.MEMBERS_LIST,
                questContentCTA: E.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: b.jn.MEMBERS_LIST,
            }),
                (0, A.openDisclosureModal)(G, {
                    content: b.jn.MEMBERS_LIST,
                    ctaContent: E.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: b.jn.MEMBERS_LIST,
                });
        },
        ef = () => {
            (0, E._3)({
                questId: G.id,
                questContent: b.jn.MEMBERS_LIST,
                questContentCTA: E.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: b.jn.MEMBERS_LIST,
            }),
                (0, A.navigateToQuestHome)({
                    fromContent: b.jn.MEMBERS_LIST,
                    questId: G.id,
                });
        },
        ep = (e) => {
            e.stopPropagation(), ed();
        },
        e_ = () => {
            (0, y.Rc)(B, K) && null != K
                ? ((0, E._3)({
                      questId: G.id,
                      questContent: b.jn.MEMBERS_LIST,
                      questContentCTA: E.jZ.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: b.jn.MEMBERS_LIST,
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
                                              questContent: b.jn.MEMBERS_LIST,
                                              questContentCTA: E.jZ.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0,
                                              sourceQuestContent: b.jn.MEMBERS_LIST,
                                          }),
                                          d.default.selectVoiceChannel(K.id),
                                          (0, f.iV)(B)
                                      ),
                                  },
                                  t,
                              ),
                          );
                  }))
                : ef();
        },
        em = (0, O.CR)({ quest: G }),
        eh = (() => {
            if (X && !q)
                return {
                    headerText: R.intl.string(R.t.gHerLS),
                    ctaText: R.intl.string(R.t.cfY4PE),
                    handleClickCta: z,
                    tileAssetType: "reward",
                };
            if (Q && !q)
                return {
                    headerText: R.intl.string(R.t.uH2sf2),
                    ctaText: R.intl.string(R.t.VN1Ajl),
                    handleClickCta: ef,
                    tileAssetType: "reward",
                };
            if ((0, y.Rc)(B, K))
                return {
                    headerText: R.intl.string(R.t.Bz6SkH),
                    ctaText: R.intl.string(R.t.BXFP30),
                    handleClickCta: e_,
                    tileAssetType: "game",
                };
            let e = (0, y.Rt)(G) ? em : R.intl.string(R.t["BSXPZ+"]);
            return {
                headerText:
                    (0, y.Rt)(G) && (0, y.pO)(G) && !G.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : R.intl.string(R.t.Bz6SkH),
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
            width: null != (U = null == (k = Z.current) ? void 0 : k.clientWidth) ? U : M,
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
                                    children: eh.headerText,
                                }),
                                (0, r.jsxs)(u.P3F, {
                                    className: w.help,
                                    onClick: (e) => {
                                        ec(), ep(e);
                                    },
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: w.helpText,
                                            children: R.intl.format(R.t["Lm8/mH"], {
                                                gamePublisher: G.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(u.idN, {
                                            size: "custom",
                                            className: w.helpIcon,
                                            width: j,
                                            height: j,
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
                                    "game" === eh.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: R.intl.formatToPlainString(R.t.IskzPg, {
                                                gameTitle: G.config.messages.gameTitle,
                                                gamePublisher: G.config.messages.gamePublisher,
                                            }),
                                            className: w.assetTile,
                                            src: (0, v.fh)(G, v.eC.GAME_TILE, $).url,
                                        }),
                                    "reward" === eh.tileAssetType &&
                                        (0, r.jsx)(T.Z, {
                                            className: w.assetTile,
                                            quest: G,
                                            questContent: b.jn.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            location: C.dr.MEMBERS_LIST,
                                            onClick: ec,
                                            sourceQuestContent: b.jn.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.zxk, {
                    variant: "secondary",
                    text: eh.ctaText,
                    onClick: () => {
                        ec(), eh.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function U(e) {
    return (0, r.jsx)(S.A, {
        questOrQuests: e.quest,
        questContent: b.jn.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: b.jn.MEMBERS_LIST,
        children: (t) => (0, r.jsx)(k, x({ impressionRef: t }, e)),
    });
}
