"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    a = n(563495),
    s = n(837381),
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
    g = n(734057),
    E = n(341915),
    A = n(714510),
    I = n(579473),
    T = n(561844),
    y = n(590202),
    S = n(792620),
    v = n(814793),
    C = n(73473),
    b = n(201805),
    N = n(646764),
    R = n(398025),
    O = n(545986),
    D = n(654487),
    L = n(652215),
    w = n(818348),
    x = n(985018),
    P = n(784569);
let M = "8px",
    k = "11px",
    U = 222;
function G(e) {
    let {
            quest: t,
            memberListItemRef: C,
            applicationStream: G,
            position: V,
            closePopout: F,
            updatePosition: B,
            impressionRef: j,
            name: H,
        } = e,
        Y = (0, o.bG)([g.A], () => g.A.getChannel(G?.channelId) ?? null),
        W = (0, b.ix)({ quest: t, questContent: E.uF.MEMBERS_LIST, sourceQuestContent: E.uF.MEMBERS_LIST }),
        K = t?.userStatus?.claimedAt != null,
        z = t?.userStatus?.enrolledAt != null,
        $ = t?.userStatus?.completedAt != null,
        q = (0, o.bG)([m.A], () => m.A.getState().theme),
        Z = (0, u.Mw)(q) ? w.NJ.DARK : w.NJ.LIGHT,
        Q = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        { ref: X, height: J } = (0, f.Ay)(),
        [ee, et] = i.useState(Q),
        en = (0, h.aL)(),
        er = (0, s.KF)();
    i.useEffect(() => {
        let e = er.current;
        return (
            e?.addEventListener("scroll", F),
            () => {
                e?.removeEventListener("scroll", F);
            }
        );
    }, [F, er]),
        i.useEffect(() => {
            let e = er.current,
                t = C.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => B());
            return (
                n.observe(e, { childList: !0, subtree: !0 }),
                () => {
                    n.disconnect();
                }
            );
        }, [C, er, B]);
    let ei = (0, c.zhh)({
            from: { height: 0 },
            height: J ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => et(!0),
        }),
        ea = (0, c.pnh)(ee, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } }),
        es = () => {
            en.dispatch(L.jej.POPOUT_CLOSE);
        },
        eo = "top" === V ? `${M} ${M} 0 0` : `0 0 ${M} ${M}`,
        el = () => {
            (0, T.Y5)({
                questId: t.id,
                questContent: E.uF.MEMBERS_LIST,
                questContentCTA: y.Cy.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: E.uF.MEMBERS_LIST,
            }),
                (0, O.Zc)(t, {
                    content: E.uF.MEMBERS_LIST,
                    ctaContent: y.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: E.uF.MEMBERS_LIST,
                });
        },
        eu = () => {
            (0, T.Y5)({
                questId: t.id,
                questContent: E.uF.MEMBERS_LIST,
                questContentCTA: y.Cy.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: E.uF.MEMBERS_LIST,
            }),
                (0, O.navigateToQuestHome)({ fromContent: E.uF.MEMBERS_LIST, questId: t.id });
        },
        ec = (e) => {
            e.stopPropagation(), el();
        },
        ed = () => {
            (0, v.Ll)(G, Y) && null != Y
                ? ((0, T.Y5)({
                      questId: t.id,
                      questContent: E.uF.MEMBERS_LIST,
                      questContentCTA: y.Cy.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: E.uF.MEMBERS_LIST,
                  }),
                  (0, c.mMO)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (n) =>
                          (0, r.jsx)(e, {
                              username: H ?? "",
                              onConfirm: () => (
                                  (0, T.Y5)({
                                      questId: t.id,
                                      questContent: E.uF.MEMBERS_LIST,
                                      questContentCTA: y.Cy.WATCH_STREAM_CONFIRM,
                                      trackGuildAndChannelMetadata: !0,
                                      sourceQuestContent: E.uF.MEMBERS_LIST,
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
            if ($ && !K)
                return {
                    headerText: x.intl.string(x.t.gHerLS),
                    ctaText: x.intl.string(x.t.cfY4PE),
                    handleClickCta: W,
                    tileAssetType: "reward",
                };
            if (z && !K)
                return {
                    headerText: x.intl.string(x.t.uH2sf2),
                    ctaText: x.intl.string(x.t.VN1Ajl),
                    handleClickCta: eu,
                    tileAssetType: "reward",
                };
            if ((0, v.Ll)(G, Y))
                return {
                    headerText: x.intl.string(x.t.Bz6SkH),
                    ctaText: x.intl.string(x.t.BXFP30),
                    handleClickCta: ed,
                    tileAssetType: "game",
                };
            let e = (0, v.vA)(t) ? e_ : x.intl.string(x.t["BSXPZ+"]);
            return {
                headerText:
                    (0, v.vA)(t) && (0, S.vl)(t) && !t.config.features.includes(D.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : x.intl.string(x.t.Bz6SkH),
                ctaText: e,
                handleClickCta: eu,
                tileAssetType: "game",
            };
        })();
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            j.current = e;
        },
        "aria-expanded": ee,
        className: P.iE,
        style: {
            width: C.current?.clientWidth ?? U,
            height: ei.height,
            overflow: ee ? "visible" : "hidden",
            borderRadius: eo,
        },
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                X.current = e;
            },
            className: P.kL,
            style: { borderRadius: eo },
            children: [
                (0, r.jsxs)("div", {
                    className: P.Mn,
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.kb,
                            children: [
                                (0, r.jsx)(c.Heading, { variant: "heading-sm/semibold", children: ef.headerText }),
                                (0, r.jsxs)(c.DUT, {
                                    className: P.yj,
                                    onClick: (e) => {
                                        es(), ec(e);
                                    },
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: P.BK,
                                            children: x.intl.format(x.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(c.cBN, {
                                            size: "custom",
                                            className: P.$y,
                                            width: k,
                                            height: k,
                                            color: c.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: P.pG,
                            children: (0, r.jsxs)("div", {
                                className: P.zc,
                                children: [
                                    ea(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: { opacity: (0, R.a)(e.opacity), scale: (0, R.a)(e.scale) },
                                                className: P.ae,
                                            }),
                                    ),
                                    "game" === ef.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: x.intl.formatToPlainString(x.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: P.TW,
                                            src: (0, I.tW)(t, I.fY.GAME_TILE, Z).url,
                                        }),
                                    "reward" === ef.tileAssetType &&
                                        (0, r.jsx)(N.A, {
                                            className: P.TW,
                                            quest: t,
                                            questContent: E.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: es,
                                            sourceQuestContent: E.uF.MEMBERS_LIST,
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
                        es(), ef.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function V(e) {
    return (0, r.jsx)(C.R, {
        questOrQuests: e.quest,
        questContent: E.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: E.uF.MEMBERS_LIST,
        children: (t) => (0, r.jsx)(G, { impressionRef: t, ...e }),
    });
}
