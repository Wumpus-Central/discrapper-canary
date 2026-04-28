"use strict";
n.d(t, { A: () => W });
var l = n(627968),
    i = n(64700),
    s = n(123924),
    a = n(837381),
    r = n(17928),
    o = n(821609),
    c = n(462887),
    u = n(717421),
    d = n(866323),
    h = n(192308),
    m = n(534514),
    p = n(939249),
    f = n(834730),
    g = n(290136),
    _ = n(661531),
    x = n(956793),
    C = n(401843),
    A = n(765671),
    E = n(775602),
    I = n(267102),
    v = n(363195),
    y = n(734057),
    b = n(507107),
    S = n(838077),
    N = n(859387),
    j = n(561844),
    T = n(590202),
    w = n(792620),
    R = n(814793),
    L = n(73473),
    k = n(201805),
    O = n(646764),
    M = n(398025),
    P = n(545986),
    D = n(654487),
    U = n(652215),
    V = n(818348),
    G = n(985018),
    F = n(185952);
let B = "11px";
function H(e) {
    let {
            quest: t,
            memberListItemRef: L,
            applicationStream: H,
            position: W,
            closePopout: K,
            updatePosition: z,
            impressionRef: Z,
            name: q,
        } = e,
        J = (0, r.bG)([y.A], () => y.A.getChannel(H?.channelId) ?? null),
        Y = (0, k.ix)({ quest: t, questContent: b.uF.MEMBERS_LIST, sourceQuestContent: b.uF.MEMBERS_LIST }),
        $ = t?.userStatus?.claimedAt != null,
        X = t?.userStatus?.enrolledAt != null,
        Q = t?.userStatus?.completedAt != null,
        ee = (0, r.bG)([v.A], () => v.A.getState().theme),
        et = (0, c.M)(ee) ? V.NJ.DARK : V.NJ.LIGHT,
        en = (0, r.bG)([E.A], () => E.A.useReducedMotion),
        { ref: el, height: ei } = (0, A.Ay)(),
        [es, ea] = i.useState(en),
        er = (0, I.aL)(),
        eo = (0, a.KF)();
    i.useEffect(() => {
        let e = eo.current;
        return (
            e?.addEventListener("scroll", K),
            () => {
                e?.removeEventListener("scroll", K);
            }
        );
    }, [K, eo]),
        i.useEffect(() => {
            let e = eo.current,
                t = L.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => z());
            return (
                n.observe(e, { childList: !0, subtree: !0 }),
                () => {
                    n.disconnect();
                }
            );
        }, [L, eo, z]);
    let ec = (0, u.z)({
            from: { height: 0 },
            height: ei ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => ea(!0),
        }),
        eu = (0, d.p)(es, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } }),
        ed = () => {
            er.dispatch(U.jej.POPOUT_CLOSE);
        },
        eh = "top" === W ? "8px 8px 0 0" : "0 0 8px 8px",
        em = () => {
            (0, j.Y5)({
                questId: t.id,
                questContent: b.uF.MEMBERS_LIST,
                questContentCTA: T.Cy.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: b.uF.MEMBERS_LIST,
            }),
                (0, P.navigateToQuestHome)({ fromContent: b.uF.MEMBERS_LIST, questId: t.id });
        },
        ep = () => {
            (0, R.Ll)(H, J) && null != J
                ? ((0, j.Y5)({
                      questId: t.id,
                      questContent: b.uF.MEMBERS_LIST,
                      questContentCTA: T.Cy.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: b.uF.MEMBERS_LIST,
                  }),
                  (0, h.openModalLazy)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (n) =>
                          (0, l.jsx)(e, {
                              username: q ?? "",
                              onConfirm: () => (
                                  (0, j.Y5)({
                                      questId: t.id,
                                      questContent: b.uF.MEMBERS_LIST,
                                      questContentCTA: T.Cy.WATCH_STREAM_CONFIRM,
                                      trackGuildAndChannelMetadata: !0,
                                      sourceQuestContent: b.uF.MEMBERS_LIST,
                                  }),
                                  x.default.selectVoiceChannel(J.id),
                                  (0, C.Nl)(H)
                              ),
                              ...n,
                          });
                  }))
                : em();
        },
        ef = (0, S.NA)({ quest: t }),
        eg = (() => {
            if (Q && !$)
                return {
                    headerText: G.intl.string(G.t.gHerLS),
                    ctaText: G.intl.string(G.t.cfY4PE),
                    handleClickCta: Y,
                    tileAssetType: "reward",
                };
            if (X && !$)
                return {
                    headerText: G.intl.string(G.t.uH2sf2),
                    ctaText: G.intl.string(G.t.VN1Ajl),
                    handleClickCta: em,
                    tileAssetType: "reward",
                };
            if ((0, R.Ll)(H, J))
                return {
                    headerText: G.intl.string(G.t.Bz6SkH),
                    ctaText: G.intl.string(G.t.BXFP30),
                    handleClickCta: ep,
                    tileAssetType: "game",
                };
            let e = (0, R.vA)(t) ? ef : G.intl.string(G.t["BSXPZ+"]);
            return {
                headerText:
                    (0, R.vA)(t) && (0, w.vl)(t) && !t.config.features.includes(D.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : G.intl.string(G.t.Bz6SkH),
                ctaText: e,
                handleClickCta: em,
                tileAssetType: "game",
            };
        })();
    return (0, l.jsx)(s.animated.div, {
        ref: (e) => {
            Z.current = e;
        },
        "aria-expanded": es,
        className: F.iE,
        style: {
            width: L.current?.clientWidth ?? 222,
            height: ec.height,
            overflow: es ? "visible" : "hidden",
            borderRadius: eh,
        },
        children: (0, l.jsxs)("div", {
            ref: (e) => {
                el.current = e;
            },
            className: F.kL,
            style: { borderRadius: eh },
            children: [
                (0, l.jsxs)("div", {
                    className: F.Mn,
                    children: [
                        (0, l.jsxs)("div", {
                            className: F.kb,
                            children: [
                                (0, l.jsx)(m.D, { variant: "heading-sm/semibold", children: eg.headerText }),
                                (0, l.jsxs)(p.D, {
                                    className: F.yj,
                                    onClick: (e) => {
                                        ed(),
                                            e.stopPropagation(),
                                            (0, j.Y5)({
                                                questId: t.id,
                                                questContent: b.uF.MEMBERS_LIST,
                                                questContentCTA: T.Cy.OPEN_DISCLOSURE,
                                                trackGuildAndChannelMetadata: !0,
                                                sourceQuestContent: b.uF.MEMBERS_LIST,
                                            }),
                                            (0, P.Zc)(t, {
                                                content: b.uF.MEMBERS_LIST,
                                                ctaContent: T.Cy.OPEN_DISCLOSURE,
                                                sourceQuestContent: b.uF.MEMBERS_LIST,
                                            });
                                    },
                                    children: [
                                        (0, l.jsx)(f.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: F.BK,
                                            children: G.intl.format(G.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, l.jsx)(g.c, {
                                            size: "custom",
                                            className: F.$y,
                                            width: B,
                                            height: B,
                                            color: _.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: F.pG,
                            children: (0, l.jsxs)("div", {
                                className: F.zc,
                                children: [
                                    eu(
                                        (e, t) =>
                                            t &&
                                            (0, l.jsx)(s.animated.div, {
                                                style: { opacity: (0, M.a)(e.opacity), scale: (0, M.a)(e.scale) },
                                                className: F.ae,
                                            }),
                                    ),
                                    "game" === eg.tileAssetType &&
                                        (0, l.jsx)("img", {
                                            alt: G.intl.formatToPlainString(G.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: F.TW,
                                            src: (0, N.tW)(t, N.fY.GAME_TILE, et).url,
                                        }),
                                    "reward" === eg.tileAssetType &&
                                        (0, l.jsx)(O.A, {
                                            className: F.TW,
                                            quest: t,
                                            questContent: b.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: ed,
                                            sourceQuestContent: b.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(o.$, {
                    variant: "secondary",
                    text: eg.ctaText,
                    onClick: () => {
                        ed(), eg.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function W(e) {
    return (0, l.jsx)(L.R, {
        questOrQuests: e.quest,
        questContent: b.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: b.uF.MEMBERS_LIST,
        children: (t) => (0, l.jsx)(H, { impressionRef: t, ...e }),
    });
}
