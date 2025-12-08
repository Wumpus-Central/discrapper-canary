n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(205120),
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
    y = n(373370),
    O = n(475595),
    v = n(254579),
    S = n(283689),
    I = n(602667),
    T = n(659302),
    A = n(644646),
    C = n(110560),
    N = n(324805),
    P = n(981631),
    R = n(231338),
    w = n(388032),
    D = n(243548);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
let j = "8px",
    M = "11px",
    k = 222;
function U(e) {
    var t, I, x, U, G;
    let {
            quest: Z,
            memberListItemRef: B,
            applicationStream: F,
            position: V,
            closePopout: H,
            updatePosition: Y,
            impressionRef: W,
            name: K,
        } = e,
        z = (0, s.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getChannel(null == F ? void 0 : F.channelId)) ? e : null;
        }),
        q = (0, T.hf)({
            quest: Z,
            questContent: b.jn.MEMBERS_LIST,
            sourceQuestContent: b.jn.MEMBERS_LIST,
        }),
        Q = (null == Z || null == (t = Z.userStatus) ? void 0 : t.claimedAt) != null,
        X = (null == Z || null == (I = Z.userStatus) ? void 0 : I.enrolledAt) != null,
        J = (null == Z || null == (x = Z.userStatus) ? void 0 : x.completedAt) != null,
        $ = (0, s.e7)([h.Z], () => h.Z.getState().theme),
        ee = (0, c.wj)($) ? R.BR.DARK : R.BR.LIGHT,
        et = (0, s.e7)([_.Z], () => _.Z.useReducedMotion),
        { ref: en, height: er } = (0, p.ZP)(),
        [ei, ea] = i.useState(et),
        eo = (0, m.Aq)(),
        es = (0, o.eg)();
    i.useEffect(() => {
        let e = es.current;
        return (
            null == e || e.addEventListener("scroll", H),
            () => {
                null == e || e.removeEventListener("scroll", H);
            }
        );
    }, [H, es]),
        i.useEffect(() => {
            let e = es.current,
                t = B.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => Y());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0,
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [B, es, Y]);
    let el = (0, u.q_F)({
            from: { height: 0 },
            height: null != er ? er : 0,
            config: {
                tension: 450,
                friction: 45,
            },
            onRest: () => ea(!0),
        }),
        ec = (0, u.Yzy)(ei, {
            from: {
                opacity: 0,
                scale: 0,
            },
            enter: {
                opacity: 1,
                scale: 1,
            },
        }),
        eu = () => {
            eo.dispatch(P.CkL.POPOUT_CLOSE);
        },
        ed = "top" === V ? "".concat(j, " ").concat(j, " 0 0") : "0 0 ".concat(j, " ").concat(j),
        ef = () => {
            (0, E._3)({
                questId: Z.id,
                questContent: b.jn.MEMBERS_LIST,
                questContentCTA: E.jZ.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: b.jn.MEMBERS_LIST,
            }),
                (0, C.openDisclosureModal)(Z, {
                    content: b.jn.MEMBERS_LIST,
                    ctaContent: E.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: b.jn.MEMBERS_LIST,
                });
        },
        ep = () => {
            (0, E._3)({
                questId: Z.id,
                questContent: b.jn.MEMBERS_LIST,
                questContentCTA: E.jZ.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: b.jn.MEMBERS_LIST,
            }),
                (0, C.navigateToQuestHome)({
                    fromContent: b.jn.MEMBERS_LIST,
                    questId: Z.id,
                });
        },
        e_ = (e) => {
            e.stopPropagation(), ef();
        },
        em = () => {
            (0, S.Rc)(F, z) && null != z
                ? ((0, E._3)({
                      questId: Z.id,
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
                              L(
                                  {
                                      username: null != K ? K : "",
                                      onConfirm: () => (
                                          (0, E._3)({
                                              questId: Z.id,
                                              questContent: b.jn.MEMBERS_LIST,
                                              questContentCTA: E.jZ.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0,
                                              sourceQuestContent: b.jn.MEMBERS_LIST,
                                          }),
                                          d.default.selectVoiceChannel(z.id),
                                          (0, f.iV)(F)
                                      ),
                                  },
                                  t,
                              ),
                          );
                  }))
                : ep();
        },
        eh = (0, y.CR)({ quest: Z }),
        eg = (() => {
            if (J && !Q)
                return {
                    headerText: w.intl.string(w.t.gHerLS),
                    ctaText: w.intl.string(w.t.cfY4PE),
                    handleClickCta: q,
                    tileAssetType: "reward",
                };
            if (X && !Q)
                return {
                    headerText: w.intl.string(w.t.uH2sf2),
                    ctaText: w.intl.string(w.t.VN1Ajl),
                    handleClickCta: ep,
                    tileAssetType: "reward",
                };
            if ((0, S.Rc)(F, z))
                return {
                    headerText: w.intl.string(w.t.Bz6SkH),
                    ctaText: w.intl.string(w.t.BXFP30),
                    handleClickCta: em,
                    tileAssetType: "game",
                };
            let e = (0, S.Rt)(Z) ? eh : w.intl.string(w.t["BSXPZ+"]);
            return {
                headerText:
                    (0, S.Rt)(Z) && (0, v.pO)(Z) && !Z.config.features.includes(N.S7.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : w.intl.string(w.t.Bz6SkH),
                ctaText: e,
                handleClickCta: ep,
                tileAssetType: "game",
            };
        })();
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            W.current = e;
        },
        "aria-expanded": ei,
        className: D.wrapper,
        style: {
            width: null != (G = null == (U = B.current) ? void 0 : U.clientWidth) ? G : k,
            height: el.height,
            overflow: ei ? "visible" : "hidden",
            borderRadius: ed,
        },
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                en.current = e;
            },
            className: D.container,
            style: { borderRadius: ed },
            children: [
                (0, r.jsxs)("div", {
                    className: D.top,
                    children: [
                        (0, r.jsxs)("div", {
                            className: D.left,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: eg.headerText,
                                }),
                                (0, r.jsxs)(u.P3F, {
                                    className: D.help,
                                    onClick: (e) => {
                                        eu(), e_(e);
                                    },
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: D.helpText,
                                            children: w.intl.format(w.t["Lm8/mH"], {
                                                gamePublisher: Z.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(u.idN, {
                                            size: "custom",
                                            className: D.helpIcon,
                                            width: M,
                                            height: M,
                                            color: u.TVs.colors.INTERACTIVE_NORMAL,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: D.right,
                            children: (0, r.jsxs)("div", {
                                className: D.imgWrapper,
                                children: [
                                    ec(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: e,
                                                className: D.imgUnderlay,
                                            }),
                                    ),
                                    "game" === eg.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: w.intl.formatToPlainString(w.t.IskzPg, {
                                                gameTitle: Z.config.messages.gameTitle,
                                                gamePublisher: Z.config.messages.gamePublisher,
                                            }),
                                            className: D.assetTile,
                                            src: (0, O.fh)(Z, O.eC.GAME_TILE, ee).url,
                                        }),
                                    "reward" === eg.tileAssetType &&
                                        (0, r.jsx)(A.Z, {
                                            className: D.assetTile,
                                            quest: Z,
                                            questContent: b.jn.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            location: N.dr.MEMBERS_LIST,
                                            onClick: eu,
                                            sourceQuestContent: b.jn.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.zxk, {
                    variant: "secondary",
                    text: eg.ctaText,
                    onClick: () => {
                        eu(), eg.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function G(e) {
    return (0, r.jsx)(I.A, {
        questOrQuests: e.quest,
        questContent: b.jn.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: b.jn.MEMBERS_LIST,
        children: (t) => (0, r.jsx)(U, L({ impressionRef: t }, e)),
    });
}
