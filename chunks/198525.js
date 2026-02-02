n.d(t, {
    A: () => F,
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
    N = n(398025),
    w = n(545986),
    R = n(654487),
    P = n(652215),
    D = n(818348),
    L = n(985018),
    x = n(784569);

function M(e, t, n) {
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

function j(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
let k = "8px",
    U = "11px",
    G = 222;

function V(e) {
    var t, S, M, V, F;
    let {
            quest: B,
            memberListItemRef: H,
            applicationStream: Y,
            position: W,
            closePopout: K,
            updatePosition: z,
            impressionRef: q,
            name: Z,
        } = e,
        Q = (0, s.bG)([g.A], () => {
            var e;
            return null != (e = g.A.getChannel(null == Y ? void 0 : Y.channelId)) ? e : null;
        }),
        X = (0, T.ix)({
            quest: B,
            questContent: E.uF.MEMBERS_LIST,
            sourceQuestContent: E.uF.MEMBERS_LIST,
        }),
        J = (null == B || null == (S = B.userStatus) ? void 0 : S.claimedAt) != null,
        $ = (null == B || null == (M = B.userStatus) ? void 0 : M.enrolledAt) != null,
        ee = (null == B || null == (V = B.userStatus) ? void 0 : V.completedAt) != null,
        et = (0, s.bG)([m.A], () => m.A.getState().theme),
        en = (0, c.Mw)(et) ? D.NJ.DARK : D.NJ.LIGHT,
        er = (0, s.bG)([_.A], () => _.A.useReducedMotion),
        { ref: ei, height: ea } = (0, p.Ay)(),
        [eo, es] = i.useState(er),
        el = (0, h.aL)(),
        ec = (0, o.KF)();
    i.useEffect(() => {
        let e = ec.current;
        return (
            null == e || e.addEventListener("scroll", K),
            () => {
                null == e || e.removeEventListener("scroll", K);
            }
        );
    }, [K, ec]),
        i.useEffect(() => {
            let e = ec.current,
                t = H.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => z());
            return (
                n.observe(e, {
                    childList: !0,
                    subtree: !0,
                }),
                () => {
                    n.disconnect();
                }
            );
        }, [H, ec, z]);
    let eu = (0, u.zhh)({
            from: {
                height: 0,
            },
            height: null != ea ? ea : 0,
            config: {
                tension: 450,
                friction: 45,
            },
            onRest: () => es(!0),
        }),
        ed = (0, u.pnh)(eo, {
            from: {
                opacity: 0,
                scale: 0,
            },
            enter: {
                opacity: 1,
                scale: 1,
            },
        }),
        ef = () => {
            el.dispatch(P.jej.POPOUT_CLOSE);
        },
        ep = "top" === W ? "".concat(k, " ").concat(k, " 0 0") : "0 0 ".concat(k, " ").concat(k),
        e_ = () => {
            (0, O.Y5)({
                questId: B.id,
                questContent: E.uF.MEMBERS_LIST,
                questContentCTA: v.Cy.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: E.uF.MEMBERS_LIST,
            }),
                (0, w.Zc)(B, {
                    content: E.uF.MEMBERS_LIST,
                    ctaContent: v.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: E.uF.MEMBERS_LIST,
                });
        },
        eh = () => {
            (0, O.Y5)({
                questId: B.id,
                questContent: E.uF.MEMBERS_LIST,
                questContentCTA: v.Cy.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: E.uF.MEMBERS_LIST,
            }),
                (0, w.navigateToQuestHome)({
                    fromContent: E.uF.MEMBERS_LIST,
                    questId: B.id,
                });
        },
        em = (e) => {
            e.stopPropagation(), e_();
        },
        eg = () => {
            (0, I.Ll)(Y, Q) && null != Q
                ? ((0, O.Y5)({
                      questId: B.id,
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
                              j(
                                  {
                                      username: null != Z ? Z : "",
                                      onConfirm: () => (
                                          (0, O.Y5)({
                                              questId: B.id,
                                              questContent: E.uF.MEMBERS_LIST,
                                              questContentCTA: v.Cy.WATCH_STREAM_CONFIRM,
                                              trackGuildAndChannelMetadata: !0,
                                              sourceQuestContent: E.uF.MEMBERS_LIST,
                                          }),
                                          d.default.selectVoiceChannel(Q.id),
                                          (0, f.Nl)(Y)
                                      ),
                                  },
                                  t,
                              ),
                          );
                  }))
                : eh();
        },
        eE = (0, y.NA)({
            quest: B,
        }),
        ey = (() => {
            if (ee && !J)
                return {
                    headerText: L.intl.string(L.t.gHerLS),
                    ctaText: L.intl.string(L.t.cfY4PE),
                    handleClickCta: X,
                    tileAssetType: "reward",
                };
            if ($ && !J)
                return {
                    headerText: L.intl.string(L.t.uH2sf2),
                    ctaText: L.intl.string(L.t.VN1Ajl),
                    handleClickCta: eh,
                    tileAssetType: "reward",
                };
            if ((0, I.Ll)(Y, Q))
                return {
                    headerText: L.intl.string(L.t.Bz6SkH),
                    ctaText: L.intl.string(L.t.BXFP30),
                    handleClickCta: eg,
                    tileAssetType: "game",
                };
            let e = (0, I.vA)(B) ? eE : L.intl.string(L.t["BSXPZ+"]);
            return {
                headerText:
                    (0, I.vA)(B) && (0, A.vl)(B) && !B.config.features.includes(R.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : L.intl.string(L.t.Bz6SkH),
                ctaText: e,
                handleClickCta: eh,
                tileAssetType: "game",
            };
        })();
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            q.current = e;
        },
        "aria-expanded": eo,
        className: x.iE,
        style: {
            width: null != (t = null == (F = H.current) ? void 0 : F.clientWidth) ? t : G,
            height: eu.height,
            overflow: eo ? "visible" : "hidden",
            borderRadius: ep,
        },
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                ei.current = e;
            },
            className: x.kL,
            style: {
                borderRadius: ep,
            },
            children: [
                (0, r.jsxs)("div", {
                    className: x.Mn,
                    children: [
                        (0, r.jsxs)("div", {
                            className: x.kb,
                            children: [
                                (0, r.jsx)(u.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: ey.headerText,
                                }),
                                (0, r.jsxs)(u.DUT, {
                                    className: x.yj,
                                    onClick: (e) => {
                                        ef(), em(e);
                                    },
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: x.BK,
                                            children: L.intl.format(L.t["Lm8/mH"], {
                                                gamePublisher: B.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(u.cBN, {
                                            size: "custom",
                                            className: x.$y,
                                            width: U,
                                            height: U,
                                            color: u.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: x.pG,
                            children: (0, r.jsxs)("div", {
                                className: x.zc,
                                children: [
                                    ed(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: {
                                                    opacity: (0, N.a)(e.opacity),
                                                    scale: (0, N.a)(e.scale),
                                                },
                                                className: x.ae,
                                            }),
                                    ),
                                    "game" === ey.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: L.intl.formatToPlainString(L.t.IskzPg, {
                                                gameTitle: B.config.messages.gameTitle,
                                                gamePublisher: B.config.messages.gamePublisher,
                                            }),
                                            className: x.TW,
                                            src: (0, b.tW)(B, b.fY.GAME_TILE, en).url,
                                        }),
                                    "reward" === ey.tileAssetType &&
                                        (0, r.jsx)(C.A, {
                                            className: x.TW,
                                            quest: B,
                                            questContent: E.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: ef,
                                            sourceQuestContent: E.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.$nd, {
                    variant: "secondary",
                    text: ey.ctaText,
                    onClick: () => {
                        ef(), ey.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}

function F(e) {
    return (0, r.jsx)(S.R, {
        questOrQuests: e.quest,
        questContent: E.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: E.uF.MEMBERS_LIST,
        children: (t) =>
            (0, r.jsx)(
                V,
                j(
                    {
                        impressionRef: t,
                    },
                    e,
                ),
            ),
    });
}
