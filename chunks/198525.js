"use strict";
n.d(t, { A: () => F });
var r = n(627968),
    i = n(64700),
    s = n(4208),
    a = n(837381),
    o = n(311907),
    l = n(732955),
    u = n(582754),
    c = n(397927),
    d = n(956793),
    _ = n(401843),
    f = n(765671),
    p = n(775602),
    h = n(267102),
    m = n(544028),
    E = n(734057),
    g = n(341915),
    A = n(714510),
    I = n(579473),
    T = n(561844),
    S = n(590202),
    y = n(792620),
    v = n(814793),
    N = n(73473),
    C = n(201805),
    R = n(646764),
    O = n(398025),
    b = n(545986),
    D = n(654487),
    L = n(652215),
    w = n(818348),
    M = n(985018),
    x = n(549488);
let P = "8px",
    k = "11px",
    U = 222;
function G(e) {
    let {
            quest: t,
            memberListItemRef: N,
            applicationStream: G,
            position: F,
            closePopout: V,
            updatePosition: B,
            impressionRef: H,
            name: j,
        } = e,
        Y = (0, o.bG)([E.A], () => E.A.getChannel(G?.channelId) ?? null),
        W = (0, C.ix)({ quest: t, questContent: g.uF.MEMBERS_LIST, sourceQuestContent: g.uF.MEMBERS_LIST }),
        K = t?.userStatus?.claimedAt != null,
        $ = t?.userStatus?.enrolledAt != null,
        z = t?.userStatus?.completedAt != null,
        q = (0, o.bG)([m.A], () => m.A.getState().theme),
        Z = (0, u.Mw)(q) ? w.NJ.DARK : w.NJ.LIGHT,
        X = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        { ref: Q, height: J } = (0, f.Ay)(),
        [ee, et] = i.useState(X),
        en = (0, h.aL)(),
        er = (0, a.KF)();
    i.useEffect(() => {
        let e = er.current;
        return (
            e?.addEventListener("scroll", V),
            () => {
                e?.removeEventListener("scroll", V);
            }
        );
    }, [V, er]),
        i.useEffect(() => {
            let e = er.current,
                t = N.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => B());
            return (
                n.observe(e, { childList: !0, subtree: !0 }),
                () => {
                    n.disconnect();
                }
            );
        }, [N, er, B]);
    let ei = (0, c.zhh)({
            from: { height: 0 },
            height: J ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => et(!0),
        }),
        es = (0, c.pnh)(ee, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } }),
        ea = () => {
            en.dispatch(L.jej.POPOUT_CLOSE);
        },
        eo = "top" === F ? `${P} ${P} 0 0` : `0 0 ${P} ${P}`,
        el = () => {
            (0, T.Y5)({
                questId: t.id,
                questContent: g.uF.MEMBERS_LIST,
                questContentCTA: S.Cy.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: g.uF.MEMBERS_LIST,
            }),
                (0, b.Zc)(t, {
                    content: g.uF.MEMBERS_LIST,
                    ctaContent: S.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: g.uF.MEMBERS_LIST,
                });
        },
        eu = () => {
            (0, T.Y5)({
                questId: t.id,
                questContent: g.uF.MEMBERS_LIST,
                questContentCTA: S.Cy.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: g.uF.MEMBERS_LIST,
            }),
                (0, b.navigateToQuestHome)({ fromContent: g.uF.MEMBERS_LIST, questId: t.id });
        },
        ec = (e) => {
            e.stopPropagation(), el();
        },
        ed = () => {
            (0, v.Ll)(G, Y) && null != Y
                ? ((0, T.Y5)({
                      questId: t.id,
                      questContent: g.uF.MEMBERS_LIST,
                      questContentCTA: S.Cy.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: g.uF.MEMBERS_LIST,
                  }),
                  (0, c.mMO)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (n) =>
                          (0, r.jsx)(e, {
                              username: j ?? "",
                              onConfirm: () => (
                                  (0, T.Y5)({
                                      questId: t.id,
                                      questContent: g.uF.MEMBERS_LIST,
                                      questContentCTA: S.Cy.WATCH_STREAM_CONFIRM,
                                      trackGuildAndChannelMetadata: !0,
                                      sourceQuestContent: g.uF.MEMBERS_LIST,
                                  }),
                                  d.default.selectVoiceChannel(Y.id),
                                  (0, _.Nl)(G)
                              ),
                              ...n,
                          });
                  }))
                : eu();
        },
        e_ = (0, A.NA)({ quest: t }),
        ef = (() => {
            if (z && !K)
                return {
                    headerText: M.intl.string(M.t.gHerLS),
                    ctaText: M.intl.string(M.t.cfY4PE),
                    handleClickCta: W,
                    tileAssetType: "reward",
                };
            if ($ && !K)
                return {
                    headerText: M.intl.string(M.t.uH2sf2),
                    ctaText: M.intl.string(M.t.VN1Ajl),
                    handleClickCta: eu,
                    tileAssetType: "reward",
                };
            if ((0, v.Ll)(G, Y))
                return {
                    headerText: M.intl.string(M.t.Bz6SkH),
                    ctaText: M.intl.string(M.t.BXFP30),
                    handleClickCta: ed,
                    tileAssetType: "game",
                };
            let e = (0, v.vA)(t) ? e_ : M.intl.string(M.t["BSXPZ+"]);
            return {
                headerText:
                    (0, v.vA)(t) && (0, y.vl)(t) && !t.config.features.includes(D.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : M.intl.string(M.t.Bz6SkH),
                ctaText: e,
                handleClickCta: eu,
                tileAssetType: "game",
            };
        })();
    return (0, r.jsx)(s.animated.div, {
        ref: (e) => {
            H.current = e;
        },
        "aria-expanded": ee,
        className: x.iE,
        style: {
            width: N.current?.clientWidth ?? U,
            height: ei.height,
            overflow: ee ? "visible" : "hidden",
            borderRadius: eo,
        },
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                Q.current = e;
            },
            className: x.kL,
            style: { borderRadius: eo },
            children: [
                (0, r.jsxs)("div", {
                    className: x.Mn,
                    children: [
                        (0, r.jsxs)("div", {
                            className: x.kb,
                            children: [
                                (0, r.jsx)(c.Heading, { variant: "heading-sm/semibold", children: ef.headerText }),
                                (0, r.jsxs)(c.DUT, {
                                    className: x.yj,
                                    onClick: (e) => {
                                        ea(), ec(e);
                                    },
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: x.BK,
                                            children: M.intl.format(M.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(c.cBN, {
                                            size: "custom",
                                            className: x.$y,
                                            width: k,
                                            height: k,
                                            color: c.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
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
                                    es(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(s.animated.div, {
                                                style: { opacity: (0, O.a)(e.opacity), scale: (0, O.a)(e.scale) },
                                                className: x.ae,
                                            }),
                                    ),
                                    "game" === ef.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: M.intl.formatToPlainString(M.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: x.TW,
                                            src: (0, I.tW)(t, I.fY.GAME_TILE, Z).url,
                                        }),
                                    "reward" === ef.tileAssetType &&
                                        (0, r.jsx)(R.A, {
                                            className: x.TW,
                                            quest: t,
                                            questContent: g.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: ea,
                                            sourceQuestContent: g.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.$nd, {
                    variant: "secondary",
                    text: ef.ctaText,
                    onClick: () => {
                        ea(), ef.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function F(e) {
    return (0, r.jsx)(N.R, {
        questOrQuests: e.quest,
        questContent: g.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: g.uF.MEMBERS_LIST,
        children: (t) => (0, r.jsx)(G, { impressionRef: t, ...e }),
    });
}
