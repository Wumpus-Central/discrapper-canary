n.r(t), n.d(t, { default: () => Y });
var s = n(627968),
    a = n(64700),
    i = n(580929),
    r = n(837381),
    u = n(323889),
    l = n(17928),
    d = n(821609),
    c = n(462887),
    o = n(717421),
    C = n(866323),
    E = n(192308),
    T = n(534514),
    S = n(939249),
    M = n(834730),
    I = n(290136),
    _ = n(661531),
    A = n(730852),
    L = n(401843),
    h = n(765671),
    m = n(775602),
    p = n(274670),
    R = n(144779),
    N = n(267102),
    f = n(363195),
    y = n(734057),
    g = n(24001),
    x = n(104886),
    F = n(3738),
    B = n(46948),
    k = n(561844),
    v = n(590202),
    q = n(792620),
    j = n(814793),
    b = n(73473),
    P = n(646764),
    G = n(398025),
    Q = n(617986),
    O = n(795965),
    D = n(190107),
    K = n(652215),
    w = n(818348),
    H = n(375708),
    U = n(185952);
let W = "11px";
function z(e) {
    let {
            quest: t,
            memberListItemRef: b,
            applicationStream: z,
            position: Y,
            closePopout: V,
            updatePosition: X,
            impressionRef: J,
            name: Z,
        } = e,
        $ = (0, l.bG)([y.A], () => y.A.getChannel(z?.channelId) ?? null),
        ee = (0, O.D)({
            quest: t,
            questContent: g.uF.MEMBERS_LIST,
            sourceQuestContent: g.uF.MEMBERS_LIST,
            experimentLocation: D.rE.MEMBERS_LIST,
        }),
        et = t?.userStatus?.claimedAt != null,
        en = t?.userStatus?.enrolledAt != null,
        es = t?.userStatus?.completedAt != null,
        ea = (0, l.bG)([f.A], () => f.A.getState().theme),
        ei = (0, c.M)(ea) ? w.NJ.DARK : w.NJ.LIGHT,
        er = (0, l.bG)([m.Ay], () => m.Ay.useReducedMotion),
        { ref: eu, height: el } = (0, h.Ay)(),
        [ed, ec] = a.useState(er),
        eo = (0, N.aL)(),
        eC = (0, r.KF)();
    a.useEffect(() => {
        let e = eC.current;
        return (
            e?.addEventListener("scroll", V),
            () => {
                e?.removeEventListener("scroll", V);
            }
        );
    }, [V, eC]),
        a.useEffect(() => {
            let e = eC.current,
                t = b.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => X());
            return (
                n.observe(e, { childList: !0, subtree: !0 }),
                () => {
                    n.disconnect();
                }
            );
        }, [b, eC, X]);
    let eE = (0, o.z)({
            from: { height: 0 },
            height: el ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => ec(!0),
        }),
        eT = (0, C.p)(ed, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } });
    function eS() {
        eo.dispatch(K.jej.POPOUT_CLOSE);
    }
    let eM = "top" === Y ? "8px 8px 0 0" : "0 0 8px 8px";
    function eI() {
        (0, x.E5)(x.kI.STEP_2_CLICKED_INTERNAL, "quest_members_list_popout")
            ? (0, p.r)({
                  type: R.F.CLICK_INTERNAL,
                  adCreativeType: u.p.QUEST,
                  adCreativeId: t.id,
                  questContentCTA: v.Cy.LEARN_MORE,
                  surfaceId: g.uF.MEMBERS_LIST,
                  sourceQuestContent: g.uF.MEMBERS_LIST,
                  trackGuildAndChannelMetadata: !0,
              })
            : (0, k.Y5)({
                  questId: t.id,
                  questContent: g.uF.MEMBERS_LIST,
                  questContentCTA: v.Cy.LEARN_MORE,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: g.uF.MEMBERS_LIST,
              }),
            (0, Q.mA)({ fromContent: g.uF.MEMBERS_LIST, questId: t.id });
    }
    let e_ = () => {
            (0, j.Ll)(z, $) && null != $
                ? ((0, x.E5)(x.kI.STEP_2_CLICKED_INTERNAL, "quest_members_list_popout")
                      ? (0, p.r)({
                            type: R.F.CLICK_INTERNAL,
                            adCreativeType: u.p.QUEST,
                            adCreativeId: t.id,
                            questContentCTA: v.Cy.WATCH_STREAM,
                            surfaceId: g.uF.MEMBERS_LIST,
                            sourceQuestContent: g.uF.MEMBERS_LIST,
                            trackGuildAndChannelMetadata: !0,
                        })
                      : (0, k.Y5)({
                            questId: t.id,
                            questContent: g.uF.MEMBERS_LIST,
                            questContentCTA: v.Cy.WATCH_STREAM,
                            trackGuildAndChannelMetadata: !0,
                            sourceQuestContent: g.uF.MEMBERS_LIST,
                        }),
                  (0, E.openModalLazy)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (n) =>
                          (0, s.jsx)(e, {
                              username: Z ?? "",
                              onConfirm: () => (
                                  (0, x.E5)(x.kI.STEP_2_CLICKED_INTERNAL, "quest_members_list_popout")
                                      ? (0, p.r)({
                                            type: R.F.CLICK_INTERNAL,
                                            adCreativeType: u.p.QUEST,
                                            adCreativeId: t.id,
                                            questContentCTA: v.Cy.WATCH_STREAM_CONFIRM,
                                            surfaceId: g.uF.MEMBERS_LIST,
                                            sourceQuestContent: g.uF.MEMBERS_LIST,
                                            trackGuildAndChannelMetadata: !0,
                                        })
                                      : (0, k.Y5)({
                                            questId: t.id,
                                            questContent: g.uF.MEMBERS_LIST,
                                            questContentCTA: v.Cy.WATCH_STREAM_CONFIRM,
                                            trackGuildAndChannelMetadata: !0,
                                            sourceQuestContent: g.uF.MEMBERS_LIST,
                                        }),
                                  A.default.selectVoiceChannel($.id),
                                  (0, L.Nl)(z)
                              ),
                              ...n,
                          });
                  }))
                : eI();
        },
        eA = (0, F.NA)({ quest: t }),
        eL = (function () {
            if (es && !et)
                return {
                    headerText: H.intl.string(H.t.gHerLS),
                    ctaText: H.intl.string(H.t.cfY4PE),
                    handleClickCta: ee,
                    tileAssetType: "reward",
                };
            if (en && !et)
                return {
                    headerText: H.intl.string(H.t.uH2sf2),
                    ctaText: H.intl.string(H.t.VN1Ajl),
                    handleClickCta: eI,
                    tileAssetType: "reward",
                };
            if ((0, j.Ll)(z, $))
                return {
                    headerText: H.intl.string(H.t.Bz6SkH),
                    ctaText: H.intl.string(H.t.BXFP30),
                    handleClickCta: e_,
                    tileAssetType: "game",
                };
            let e = (0, j.vA)(t) ? eA : H.intl.string(H.t["BSXPZ+"]);
            return {
                headerText:
                    (0, j.vA)(t) && (0, q.vl)(t) && !t.config.features.includes(D.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : H.intl.string(H.t.Bz6SkH),
                ctaText: e,
                handleClickCta: eI,
                tileAssetType: "game",
            };
        })();
    return (0, s.jsx)(i.animated.div, {
        ref: (e) => {
            J.current = e;
        },
        "aria-expanded": ed,
        className: U.iE,
        style: {
            width: b.current?.clientWidth ?? 222,
            height: eE.height,
            overflow: ed ? "visible" : "hidden",
            borderRadius: eM,
        },
        children: (0, s.jsxs)("div", {
            ref: (e) => {
                eu.current = e;
            },
            className: U.kL,
            style: { borderRadius: eM },
            children: [
                (0, s.jsxs)("div", {
                    className: U.Mn,
                    children: [
                        (0, s.jsxs)("div", {
                            className: U.kb,
                            children: [
                                (0, s.jsx)(T.D, { variant: "heading-sm/semibold", children: eL.headerText }),
                                (0, s.jsxs)(S.D, {
                                    className: U.yj,
                                    onClick: (e) => {
                                        eS(),
                                            e.stopPropagation(),
                                            (0, x.E5)(x.kI.STEP_2_CLICKED_INTERNAL, "quest_members_list_popout")
                                                ? (0, p.r)({
                                                      type: R.F.CLICK_INTERNAL,
                                                      adCreativeType: u.p.QUEST,
                                                      adCreativeId: t.id,
                                                      questContentCTA: v.Cy.OPEN_DISCLOSURE,
                                                      surfaceId: g.uF.MEMBERS_LIST,
                                                      sourceQuestContent: g.uF.MEMBERS_LIST,
                                                      trackGuildAndChannelMetadata: !0,
                                                  })
                                                : (0, k.Y5)({
                                                      questId: t.id,
                                                      questContent: g.uF.MEMBERS_LIST,
                                                      questContentCTA: v.Cy.OPEN_DISCLOSURE,
                                                      trackGuildAndChannelMetadata: !0,
                                                      sourceQuestContent: g.uF.MEMBERS_LIST,
                                                  }),
                                            (0, Q.Zc)(t, {
                                                content: g.uF.MEMBERS_LIST,
                                                ctaContent: v.Cy.OPEN_DISCLOSURE,
                                                sourceQuestContent: g.uF.MEMBERS_LIST,
                                            });
                                    },
                                    children: [
                                        (0, s.jsx)(M.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: U.BK,
                                            children: H.intl.format(H.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, s.jsx)(I.c, {
                                            size: "custom",
                                            className: U.$y,
                                            width: W,
                                            height: W,
                                            color: _.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: U.pG,
                            children: (0, s.jsxs)("div", {
                                className: U.zc,
                                children: [
                                    eT(
                                        (e, t) =>
                                            t &&
                                            (0, s.jsx)(i.animated.div, {
                                                style: { opacity: (0, G.a)(e.opacity), scale: (0, G.a)(e.scale) },
                                                className: U.ae,
                                            }),
                                    ),
                                    "game" === eL.tileAssetType &&
                                        (0, s.jsx)("img", {
                                            alt: H.intl.formatToPlainString(H.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: U.TW,
                                            src: (0, B.tW)(t, B.fY.GAME_TILE, ei).url,
                                        }),
                                    "reward" === eL.tileAssetType &&
                                        (0, s.jsx)(P.A, {
                                            className: U.TW,
                                            quest: t,
                                            questContent: g.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: eS,
                                            sourceQuestContent: g.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(d.$, {
                    variant: "secondary",
                    text: eL.ctaText,
                    onClick: () => {
                        eS(), eL.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function Y(e) {
    return (0, s.jsx)(b.R, {
        questOrQuests: e.quest,
        questContent: g.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: g.uF.MEMBERS_LIST,
        children: (t) => (0, s.jsx)(z, { impressionRef: t, ...e }),
    });
}
