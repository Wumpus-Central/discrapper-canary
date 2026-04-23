"use strict";
n.d(t, { A: () => W });
var i = n(627968),
    r = n(64700),
    s = n(419354),
    a = n(837381),
    o = n(17928),
    l = n(821609),
    d = n(462887),
    _ = n(717421),
    u = n(866323),
    c = n(192308),
    E = n(534514),
    h = n(939249),
    m = n(834730),
    f = n(290136),
    g = n(661531),
    p = n(956793),
    A = n(401843),
    I = n(765671),
    T = n(775602),
    S = n(267102),
    N = n(363195),
    C = n(734057),
    R = n(507107),
    O = n(838077),
    y = n(859387),
    v = n(561844),
    D = n(590202),
    L = n(792620),
    b = n(814793),
    w = n(73473),
    P = n(371912),
    k = n(646764),
    M = n(398025),
    U = n(545986),
    x = n(654487),
    G = n(652215),
    V = n(818348),
    F = n(985018),
    B = n(185952);
let H = "11px";
function j(e) {
    let {
            quest: t,
            memberListItemRef: w,
            applicationStream: j,
            position: W,
            closePopout: Y,
            updatePosition: K,
            impressionRef: z,
            name: $,
        } = e,
        q = (0, o.bG)([C.A], () => C.A.getChannel(j?.channelId) ?? null),
        X = (0, P.ix)({ quest: t, questContent: R.uF.MEMBERS_LIST, sourceQuestContent: R.uF.MEMBERS_LIST }),
        Z = t?.userStatus?.claimedAt != null,
        Q = t?.userStatus?.enrolledAt != null,
        J = t?.userStatus?.completedAt != null,
        ee = (0, o.bG)([N.A], () => N.A.getState().theme),
        et = (0, d.M)(ee) ? V.NJ.DARK : V.NJ.LIGHT,
        en = (0, o.bG)([T.A], () => T.A.useReducedMotion),
        { ref: ei, height: er } = (0, I.Ay)(),
        [es, ea] = r.useState(en),
        eo = (0, S.aL)(),
        el = (0, a.KF)();
    r.useEffect(() => {
        let e = el.current;
        return (
            e?.addEventListener("scroll", Y),
            () => {
                e?.removeEventListener("scroll", Y);
            }
        );
    }, [Y, el]),
        r.useEffect(() => {
            let e = el.current,
                t = w.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => K());
            return (
                n.observe(e, { childList: !0, subtree: !0 }),
                () => {
                    n.disconnect();
                }
            );
        }, [w, el, K]);
    let ed = (0, _.z)({
            from: { height: 0 },
            height: er ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => ea(!0),
        }),
        e_ = (0, u.p)(es, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } }),
        eu = () => {
            eo.dispatch(G.jej.POPOUT_CLOSE);
        },
        ec = "top" === W ? "8px 8px 0 0" : "0 0 8px 8px",
        eE = () => {
            (0, v.Y5)({
                questId: t.id,
                questContent: R.uF.MEMBERS_LIST,
                questContentCTA: D.Cy.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: R.uF.MEMBERS_LIST,
            }),
                (0, U.navigateToQuestHome)({ fromContent: R.uF.MEMBERS_LIST, questId: t.id });
        },
        eh = () => {
            (0, b.Ll)(j, q) && null != q
                ? ((0, v.Y5)({
                      questId: t.id,
                      questContent: R.uF.MEMBERS_LIST,
                      questContentCTA: D.Cy.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: R.uF.MEMBERS_LIST,
                  }),
                  (0, c.openModalLazy)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (n) =>
                          (0, i.jsx)(e, {
                              username: $ ?? "",
                              onConfirm: () => (
                                  (0, v.Y5)({
                                      questId: t.id,
                                      questContent: R.uF.MEMBERS_LIST,
                                      questContentCTA: D.Cy.WATCH_STREAM_CONFIRM,
                                      trackGuildAndChannelMetadata: !0,
                                      sourceQuestContent: R.uF.MEMBERS_LIST,
                                  }),
                                  p.default.selectVoiceChannel(q.id),
                                  (0, A.Nl)(j)
                              ),
                              ...n,
                          });
                  }))
                : eE();
        },
        em = (0, O.NA)({ quest: t }),
        ef = (() => {
            if (J && !Z)
                return {
                    headerText: F.intl.string(F.t.gHerLS),
                    ctaText: F.intl.string(F.t.cfY4PE),
                    handleClickCta: X,
                    tileAssetType: "reward",
                };
            if (Q && !Z)
                return {
                    headerText: F.intl.string(F.t.uH2sf2),
                    ctaText: F.intl.string(F.t.VN1Ajl),
                    handleClickCta: eE,
                    tileAssetType: "reward",
                };
            if ((0, b.Ll)(j, q))
                return {
                    headerText: F.intl.string(F.t.Bz6SkH),
                    ctaText: F.intl.string(F.t.BXFP30),
                    handleClickCta: eh,
                    tileAssetType: "game",
                };
            let e = (0, b.vA)(t) ? em : F.intl.string(F.t["BSXPZ+"]);
            return {
                headerText:
                    (0, b.vA)(t) && (0, L.vl)(t) && !t.config.features.includes(x.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : F.intl.string(F.t.Bz6SkH),
                ctaText: e,
                handleClickCta: eE,
                tileAssetType: "game",
            };
        })();
    return (0, i.jsx)(s.animated.div, {
        ref: (e) => {
            z.current = e;
        },
        "aria-expanded": es,
        className: B.iE,
        style: {
            width: w.current?.clientWidth ?? 222,
            height: ed.height,
            overflow: es ? "visible" : "hidden",
            borderRadius: ec,
        },
        children: (0, i.jsxs)("div", {
            ref: (e) => {
                ei.current = e;
            },
            className: B.kL,
            style: { borderRadius: ec },
            children: [
                (0, i.jsxs)("div", {
                    className: B.Mn,
                    children: [
                        (0, i.jsxs)("div", {
                            className: B.kb,
                            children: [
                                (0, i.jsx)(E.D, { variant: "heading-sm/semibold", children: ef.headerText }),
                                (0, i.jsxs)(h.D, {
                                    className: B.yj,
                                    onClick: (e) => {
                                        eu(),
                                            e.stopPropagation(),
                                            (0, v.Y5)({
                                                questId: t.id,
                                                questContent: R.uF.MEMBERS_LIST,
                                                questContentCTA: D.Cy.OPEN_DISCLOSURE,
                                                trackGuildAndChannelMetadata: !0,
                                                sourceQuestContent: R.uF.MEMBERS_LIST,
                                            }),
                                            (0, U.Zc)(t, {
                                                content: R.uF.MEMBERS_LIST,
                                                ctaContent: D.Cy.OPEN_DISCLOSURE,
                                                sourceQuestContent: R.uF.MEMBERS_LIST,
                                            });
                                    },
                                    children: [
                                        (0, i.jsx)(m.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: B.BK,
                                            children: F.intl.format(F.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, i.jsx)(f.c, {
                                            size: "custom",
                                            className: B.$y,
                                            width: H,
                                            height: H,
                                            color: g.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: B.pG,
                            children: (0, i.jsxs)("div", {
                                className: B.zc,
                                children: [
                                    e_(
                                        (e, t) =>
                                            t &&
                                            (0, i.jsx)(s.animated.div, {
                                                style: { opacity: (0, M.a)(e.opacity), scale: (0, M.a)(e.scale) },
                                                className: B.ae,
                                            }),
                                    ),
                                    "game" === ef.tileAssetType &&
                                        (0, i.jsx)("img", {
                                            alt: F.intl.formatToPlainString(F.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: B.TW,
                                            src: (0, y.tW)(t, y.fY.GAME_TILE, et).url,
                                        }),
                                    "reward" === ef.tileAssetType &&
                                        (0, i.jsx)(k.A, {
                                            className: B.TW,
                                            quest: t,
                                            questContent: R.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: eu,
                                            sourceQuestContent: R.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(l.$, {
                    variant: "secondary",
                    text: ef.ctaText,
                    onClick: () => {
                        eu(), ef.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function W(e) {
    return (0, i.jsx)(w.R, {
        questOrQuests: e.quest,
        questContent: R.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: R.uF.MEMBERS_LIST,
        children: (t) => (0, i.jsx)(j, { impressionRef: t, ...e }),
    });
}
