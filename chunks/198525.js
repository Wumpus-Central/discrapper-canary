"use strict";
n.d(t, { A: () => z });
var i = n(627968),
    r = n(64700),
    s = n(580929),
    a = n(837381),
    o = n(323889),
    l = n(17928),
    u = n(821609),
    d = n(462887),
    c = n(717421),
    _ = n(866323),
    h = n(192308),
    f = n(534514),
    E = n(939249),
    p = n(834730),
    m = n(290136),
    g = n(661531),
    A = n(730852),
    I = n(401843),
    T = n(765671),
    S = n(775602),
    N = n(274670),
    C = n(144779),
    y = n(267102),
    v = n(363195),
    R = n(734057),
    O = n(24001),
    b = n(104886),
    L = n(3738),
    D = n(46948),
    P = n(561844),
    w = n(590202),
    M = n(792620),
    x = n(814793),
    U = n(73473),
    k = n(646764),
    G = n(398025),
    V = n(617986),
    F = n(795965),
    B = n(190107),
    j = n(652215),
    H = n(818348),
    W = n(375708),
    Y = n(185952);
let K = "11px";
function $(e) {
    let {
            quest: t,
            memberListItemRef: U,
            applicationStream: $,
            position: z,
            closePopout: q,
            updatePosition: Z,
            impressionRef: X,
            name: Q,
        } = e,
        J = (0, l.bG)([R.A], () => R.A.getChannel($?.channelId) ?? null),
        ee = (0, F.D)({
            quest: t,
            questContent: O.uF.MEMBERS_LIST,
            sourceQuestContent: O.uF.MEMBERS_LIST,
            experimentLocation: B.rE.MEMBERS_LIST,
        }),
        et = t?.userStatus?.claimedAt != null,
        en = t?.userStatus?.enrolledAt != null,
        ei = t?.userStatus?.completedAt != null,
        er = (0, l.bG)([v.A], () => v.A.getState().theme),
        es = (0, d.M)(er) ? H.NJ.DARK : H.NJ.LIGHT,
        ea = (0, l.bG)([S.Ay], () => S.Ay.useReducedMotion),
        { ref: eo, height: el } = (0, T.Ay)(),
        [eu, ed] = r.useState(ea),
        ec = (0, y.aL)(),
        e_ = (0, a.KF)();
    r.useEffect(() => {
        let e = e_.current;
        return (
            e?.addEventListener("scroll", q),
            () => {
                e?.removeEventListener("scroll", q);
            }
        );
    }, [q, e_]),
        r.useEffect(() => {
            let e = e_.current,
                t = U.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => Z());
            return (
                n.observe(e, { childList: !0, subtree: !0 }),
                () => {
                    n.disconnect();
                }
            );
        }, [U, e_, Z]);
    let eh = (0, c.z)({
            from: { height: 0 },
            height: el ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => ed(!0),
        }),
        ef = (0, _.p)(eu, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } });
    function eE() {
        ec.dispatch(j.jej.POPOUT_CLOSE);
    }
    let ep = "top" === z ? "8px 8px 0 0" : "0 0 8px 8px";
    function em() {
        (0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_members_list_popout")
            ? (0, N.r)({
                  type: C.F.CLICK_INTERNAL,
                  adCreativeType: o.p.QUEST,
                  adCreativeId: t.id,
                  questContentCTA: w.Cy.LEARN_MORE,
                  surfaceId: O.uF.MEMBERS_LIST,
                  sourceQuestContent: O.uF.MEMBERS_LIST,
                  trackGuildAndChannelMetadata: !0,
              })
            : (0, P.Y5)({
                  questId: t.id,
                  questContent: O.uF.MEMBERS_LIST,
                  questContentCTA: w.Cy.LEARN_MORE,
                  trackGuildAndChannelMetadata: !0,
                  sourceQuestContent: O.uF.MEMBERS_LIST,
              }),
            (0, V.navigateToQuestHome)({ fromContent: O.uF.MEMBERS_LIST, questId: t.id });
    }
    let eg = () => {
            (0, x.Ll)($, J) && null != J
                ? ((0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_members_list_popout")
                      ? (0, N.r)({
                            type: C.F.CLICK_INTERNAL,
                            adCreativeType: o.p.QUEST,
                            adCreativeId: t.id,
                            questContentCTA: w.Cy.WATCH_STREAM,
                            surfaceId: O.uF.MEMBERS_LIST,
                            sourceQuestContent: O.uF.MEMBERS_LIST,
                            trackGuildAndChannelMetadata: !0,
                        })
                      : (0, P.Y5)({
                            questId: t.id,
                            questContent: O.uF.MEMBERS_LIST,
                            questContentCTA: w.Cy.WATCH_STREAM,
                            trackGuildAndChannelMetadata: !0,
                            sourceQuestContent: O.uF.MEMBERS_LIST,
                        }),
                  (0, h.openModalLazy)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (n) =>
                          (0, i.jsx)(e, {
                              username: Q ?? "",
                              onConfirm: () => (
                                  (0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_members_list_popout")
                                      ? (0, N.r)({
                                            type: C.F.CLICK_INTERNAL,
                                            adCreativeType: o.p.QUEST,
                                            adCreativeId: t.id,
                                            questContentCTA: w.Cy.WATCH_STREAM_CONFIRM,
                                            surfaceId: O.uF.MEMBERS_LIST,
                                            sourceQuestContent: O.uF.MEMBERS_LIST,
                                            trackGuildAndChannelMetadata: !0,
                                        })
                                      : (0, P.Y5)({
                                            questId: t.id,
                                            questContent: O.uF.MEMBERS_LIST,
                                            questContentCTA: w.Cy.WATCH_STREAM_CONFIRM,
                                            trackGuildAndChannelMetadata: !0,
                                            sourceQuestContent: O.uF.MEMBERS_LIST,
                                        }),
                                  A.default.selectVoiceChannel(J.id),
                                  (0, I.Nl)($)
                              ),
                              ...n,
                          });
                  }))
                : em();
        },
        eA = (0, L.NA)({ quest: t }),
        eI = (function () {
            if (ei && !et)
                return {
                    headerText: W.intl.string(W.t.gHerLS),
                    ctaText: W.intl.string(W.t.cfY4PE),
                    handleClickCta: ee,
                    tileAssetType: "reward",
                };
            if (en && !et)
                return {
                    headerText: W.intl.string(W.t.uH2sf2),
                    ctaText: W.intl.string(W.t.VN1Ajl),
                    handleClickCta: em,
                    tileAssetType: "reward",
                };
            if ((0, x.Ll)($, J))
                return {
                    headerText: W.intl.string(W.t.Bz6SkH),
                    ctaText: W.intl.string(W.t.BXFP30),
                    handleClickCta: eg,
                    tileAssetType: "game",
                };
            let e = (0, x.vA)(t) ? eA : W.intl.string(W.t["BSXPZ+"]);
            return {
                headerText:
                    (0, x.vA)(t) && (0, M.vl)(t) && !t.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : W.intl.string(W.t.Bz6SkH),
                ctaText: e,
                handleClickCta: em,
                tileAssetType: "game",
            };
        })();
    return (0, i.jsx)(s.animated.div, {
        ref: (e) => {
            X.current = e;
        },
        "aria-expanded": eu,
        className: Y.iE,
        style: {
            width: U.current?.clientWidth ?? 222,
            height: eh.height,
            overflow: eu ? "visible" : "hidden",
            borderRadius: ep,
        },
        children: (0, i.jsxs)("div", {
            ref: (e) => {
                eo.current = e;
            },
            className: Y.kL,
            style: { borderRadius: ep },
            children: [
                (0, i.jsxs)("div", {
                    className: Y.Mn,
                    children: [
                        (0, i.jsxs)("div", {
                            className: Y.kb,
                            children: [
                                (0, i.jsx)(f.D, { variant: "heading-sm/semibold", children: eI.headerText }),
                                (0, i.jsxs)(E.D, {
                                    className: Y.yj,
                                    onClick: (e) => {
                                        eE(),
                                            e.stopPropagation(),
                                            (0, b.E5)(b.kI.STEP_2_CLICKED_INTERNAL, "quest_members_list_popout")
                                                ? (0, N.r)({
                                                      type: C.F.CLICK_INTERNAL,
                                                      adCreativeType: o.p.QUEST,
                                                      adCreativeId: t.id,
                                                      questContentCTA: w.Cy.OPEN_DISCLOSURE,
                                                      surfaceId: O.uF.MEMBERS_LIST,
                                                      sourceQuestContent: O.uF.MEMBERS_LIST,
                                                      trackGuildAndChannelMetadata: !0,
                                                  })
                                                : (0, P.Y5)({
                                                      questId: t.id,
                                                      questContent: O.uF.MEMBERS_LIST,
                                                      questContentCTA: w.Cy.OPEN_DISCLOSURE,
                                                      trackGuildAndChannelMetadata: !0,
                                                      sourceQuestContent: O.uF.MEMBERS_LIST,
                                                  }),
                                            (0, V.Zc)(t, {
                                                content: O.uF.MEMBERS_LIST,
                                                ctaContent: w.Cy.OPEN_DISCLOSURE,
                                                sourceQuestContent: O.uF.MEMBERS_LIST,
                                            });
                                    },
                                    children: [
                                        (0, i.jsx)(p.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: Y.BK,
                                            children: W.intl.format(W.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, i.jsx)(m.c, {
                                            size: "custom",
                                            className: Y.$y,
                                            width: K,
                                            height: K,
                                            color: g.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: Y.pG,
                            children: (0, i.jsxs)("div", {
                                className: Y.zc,
                                children: [
                                    ef(
                                        (e, t) =>
                                            t &&
                                            (0, i.jsx)(s.animated.div, {
                                                style: { opacity: (0, G.a)(e.opacity), scale: (0, G.a)(e.scale) },
                                                className: Y.ae,
                                            }),
                                    ),
                                    "game" === eI.tileAssetType &&
                                        (0, i.jsx)("img", {
                                            alt: W.intl.formatToPlainString(W.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: Y.TW,
                                            src: (0, D.tW)(t, D.fY.GAME_TILE, es).url,
                                        }),
                                    "reward" === eI.tileAssetType &&
                                        (0, i.jsx)(k.A, {
                                            className: Y.TW,
                                            quest: t,
                                            questContent: O.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: eE,
                                            sourceQuestContent: O.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(u.$, {
                    variant: "secondary",
                    text: eI.ctaText,
                    onClick: () => {
                        eE(), eI.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function z(e) {
    return (0, i.jsx)(U.R, {
        questOrQuests: e.quest,
        questContent: O.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: O.uF.MEMBERS_LIST,
        children: (t) => (0, i.jsx)($, { impressionRef: t, ...e }),
    });
}
