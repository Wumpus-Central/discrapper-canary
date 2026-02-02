n.d(t, {
    A: () => V,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(353709),
    o = n(837381),
    s = n(311907),
    l = n(732955),
    c = n(582754),
    u = n(397927),
    d = n(956793),
    f = n(401843),
    p = n(765671),
    _ = n(775602),
    h = n(267102),
    m = n(544028),
    g = n(734057),
    E = n(341915),
    y = n(714510),
    b = n(579473),
    O = n(561844),
    v = n(590202),
    A = n(792620),
    I = n(814793),
    S = n(73473),
    T = n(201805),
    C = n(646764),
    N = n(545986),
    w = n(654487),
    R = n(652215),
    P = n(818348),
    D = n(985018),
    L = n(784569);

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

function M(e) {
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
    k = "11px",
    U = 222;

function G(e) {
    var t, S, x, G, V;
    let {
            quest: F,
            memberListItemRef: B,
            applicationStream: H,
            position: Y,
            closePopout: W,
            updatePosition: K,
            impressionRef: z,
            name: q,
        } = e,
        Z = (0, s.bG)([g.A], () => {
            var e;
            return null != (e = g.A.getChannel(null == H ? void 0 : H.channelId)) ? e : null;
        }),
        Q = (0, T.ix)({
            quest: F,
            questContent: E.uF.MEMBERS_LIST,
            sourceQuestContent: E.uF.MEMBERS_LIST,
        }),
        X = (null == F || null == (S = F.userStatus) ? void 0 : S.claimedAt) != null,
        J = (null == F || null == (x = F.userStatus) ? void 0 : x.enrolledAt) != null,
        $ = (null == F || null == (G = F.userStatus) ? void 0 : G.completedAt) != null,
        ee = (0, s.bG)([m.A], () => m.A.getState().theme),
        et = (0, c.Mw)(ee) ? P.NJ.DARK : P.NJ.LIGHT,
        en = (0, s.bG)([_.A], () => _.A.useReducedMotion),
        { ref: er, height: ei } = (0, p.Ay)(),
        [ea, eo] = i.useState(en),
        es = (0, h.aL)(),
        el = (0, o.KF)();
    i.useEffect(() => {
        let e = el.current;
        return (
            null == e || e.addEventListener("scroll", W),
            () => {
                null == e || e.removeEventListener("scroll", W);
            }
        );
    }, [W, el]),
        i.useEffect(() => {
            let e = el.current,
                t = B.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => K());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0,
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [B, el, K]);
    let ec = (0, u.zhh)({
            from: {
                height: 0,
            },
            height: null != ei ? ei : 0,
            config: {
                tension: 450,
                friction: 45,
            },
            onRest: () => eo(!0),
        }),
        eu = (0, u.pnh)(ea, {
            from: {
                opacity: 0,
                scale: 0,
            },
            enter: {
                opacity: 1,
                scale: 1,
            },
        }),
        ed = () => {
            es.dispatch(R.jej.POPOUT_CLOSE);
        },
        ef = "top" === Y ? "".concat(j, " ").concat(j, " 0 0") : "0 0 ".concat(j, " ").concat(j),
        ep = () => {
            (0, O.Y5)({
                questId: F.id,
                questContent: E.uF.MEMBERS_LIST,
                questContentCTA: v.Cy.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: E.uF.MEMBERS_LIST,
            }),
                (0, N.Zc)(F, {
                    content: E.uF.MEMBERS_LIST,
                    ctaContent: v.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: E.uF.MEMBERS_LIST,
                });
        },
        e_ = () => {
            (0, O.Y5)({
                questId: F.id,
                questContent: E.uF.MEMBERS_LIST,
                questContentCTA: v.Cy.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: E.uF.MEMBERS_LIST,
            }),
                (0, N.navigateToQuestHome)({
                    fromContent: E.uF.MEMBERS_LIST,
                    questId: F.id,
                });
        },
        eh = (e) => {
            e.stopPropagation(), ep();
        },
        em = () => {
            (0, I.Ll)(H, Z) && null != Z
                ? ((0, O.Y5)({
                      questId: F.id,
                      questContent: E.uF.MEMBERS_LIST,
                      questContentCTA: v.Cy.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: E.uF.MEMBERS_LIST,
                  }),
                  (0, u.mMO)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              M(
                                  {
                                      username: null != q ? q : "",
                                      onConfirm: () => (
                                          (0, O.Y5)({
                                              questId: F.id,
                                              questContent: E.uF.MEMBERS_LIST,
                                              questContentCTA: v.Cy.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0,
                                              sourceQuestContent: E.uF.MEMBERS_LIST,
                                          }),
                                          d.default.selectVoiceChannel(Z.id),
                                          (0, f.Nl)(H)
                                      ),
                                  },
                                  t,
                              ),
                          );
                  }))
                : e_();
        },
        eg = (0, y.NA)({
            quest: F,
        }),
        eE = (() => {
            if ($ && !X)
                return {
                    headerText: D.intl.string(D.t.gHerLS),
                    ctaText: D.intl.string(D.t.cfY4PE),
                    handleClickCta: Q,
                    tileAssetType: "reward",
                };
            if (J && !X)
                return {
                    headerText: D.intl.string(D.t.uH2sf2),
                    ctaText: D.intl.string(D.t.VN1Ajl),
                    handleClickCta: e_,
                    tileAssetType: "reward",
                };
            if ((0, I.Ll)(H, Z))
                return {
                    headerText: D.intl.string(D.t.Bz6SkH),
                    ctaText: D.intl.string(D.t.BXFP30),
                    handleClickCta: em,
                    tileAssetType: "game",
                };
            let e = (0, I.vA)(F) ? eg : D.intl.string(D.t["BSXPZ+"]);
            return {
                headerText:
                    (0, I.vA)(F) && (0, A.vl)(F) && !F.config.features.includes(w.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : D.intl.string(D.t.Bz6SkH),
                ctaText: e,
                handleClickCta: e_,
                tileAssetType: "game",
            };
        })();
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            z.current = e;
        },
        "aria-expanded": ea,
        className: L.iE,
        style: {
            width: null != (t = null == (V = B.current) ? void 0 : V.clientWidth) ? t : U,
            height: ec.height,
            overflow: ea ? "visible" : "hidden",
            borderRadius: ef,
        },
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                er.current = e;
            },
            className: L.kL,
            style: {
                borderRadius: ef,
            },
            children: [
                (0, r.jsxs)("div", {
                    className: L.Mn,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.kb,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: eE.headerText,
                                }),
                                (0, r.jsxs)(u.DUT, {
                                    className: L.yj,
                                    onClick: (e) => {
                                        ed(), eh(e);
                                    },
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: L.BK,
                                            children: D.intl.format(D.t["Lm8/mH"], {
                                                gamePublisher: F.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(u.cBN, {
                                            size: "custom",
                                            className: L.$y,
                                            width: k,
                                            height: k,
                                            color: u.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: L.pG,
                            children: (0, r.jsxs)("div", {
                                className: L.zc,
                                children: [
                                    eu(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: e,
                                                className: L.ae,
                                            }),
                                    ),
                                    "game" === eE.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: D.intl.formatToPlainString(D.t.IskzPg, {
                                                gameTitle: F.config.messages.gameTitle,
                                                gamePublisher: F.config.messages.gamePublisher,
                                            }),
                                            className: L.TW,
                                            src: (0, b.tW)(F, b.fY.GAME_TILE, et).url,
                                        }),
                                    "reward" === eE.tileAssetType &&
                                        (0, r.jsx)(C.A, {
                                            className: L.TW,
                                            quest: F,
                                            questContent: E.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: ed,
                                            sourceQuestContent: E.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.$nd, {
                    variant: "secondary",
                    text: eE.ctaText,
                    onClick: () => {
                        ed(), eE.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}

function V(e) {
    return (0, r.jsx)(S.R, {
        questOrQuests: e.quest,
        questContent: E.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: E.uF.MEMBERS_LIST,
        children: (t) =>
            (0, r.jsx)(
                G,
                M(
                    {
                        impressionRef: t,
                    },
                    e,
                ),
            ),
    });
}
