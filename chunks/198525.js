"use strict";
n.d(t, { A: () => Y });
var i = n(627968),
    r = n(64700),
    s = n(922139),
    a = n(837381),
    o = n(17928),
    l = n(821609),
    u = n(462887),
    c = n(717421),
    d = n(866323),
    _ = n(192308),
    h = n(534514),
    f = n(939249),
    p = n(834730),
    E = n(290136),
    m = n(661531),
    g = n(730852),
    A = n(401843),
    I = n(765671),
    T = n(775602),
    S = n(267102),
    y = n(363195),
    N = n(734057),
    v = n(507107),
    C = n(629455),
    R = n(551875),
    O = n(561844),
    b = n(590202),
    D = n(792620),
    L = n(814793),
    w = n(73473),
    M = n(646764),
    P = n(398025),
    x = n(617986),
    k = n(795965),
    U = n(190107),
    G = n(652215),
    F = n(818348),
    V = n(375708),
    B = n(185952);
let H = "11px";
function j(e) {
    let {
            quest: t,
            memberListItemRef: w,
            applicationStream: j,
            position: Y,
            closePopout: W,
            updatePosition: K,
            impressionRef: $,
            name: z,
        } = e,
        q = (0, o.bG)([N.A], () => N.A.getChannel(j?.channelId) ?? null),
        X = (0, k.D)({
            quest: t,
            questContent: v.uF.MEMBERS_LIST,
            sourceQuestContent: v.uF.MEMBERS_LIST,
            experimentLocation: U.rE.MEMBERS_LIST,
        }),
        Z = t?.userStatus?.claimedAt != null,
        Q = t?.userStatus?.enrolledAt != null,
        J = t?.userStatus?.completedAt != null,
        ee = (0, o.bG)([y.A], () => y.A.getState().theme),
        et = (0, u.M)(ee) ? F.NJ.DARK : F.NJ.LIGHT,
        en = (0, o.bG)([T.Ay], () => T.Ay.useReducedMotion),
        { ref: ei, height: er } = (0, I.Ay)(),
        [es, ea] = r.useState(en),
        eo = (0, S.aL)(),
        el = (0, a.KF)();
    r.useEffect(() => {
        let e = el.current;
        return (
            e?.addEventListener("scroll", W),
            () => {
                e?.removeEventListener("scroll", W);
            }
        );
    }, [W, el]),
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
    let eu = (0, c.z)({
            from: { height: 0 },
            height: er ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => ea(!0),
        }),
        ec = (0, d.p)(es, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } }),
        ed = () => {
            eo.dispatch(G.jej.POPOUT_CLOSE);
        },
        e_ = "top" === Y ? "8px 8px 0 0" : "0 0 8px 8px",
        eh = () => {
            (0, O.Y5)({
                questId: t.id,
                questContent: v.uF.MEMBERS_LIST,
                questContentCTA: b.Cy.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: v.uF.MEMBERS_LIST,
            }),
                (0, x.navigateToQuestHome)({ fromContent: v.uF.MEMBERS_LIST, questId: t.id });
        },
        ef = () => {
            (0, L.Ll)(j, q) && null != q
                ? ((0, O.Y5)({
                      questId: t.id,
                      questContent: v.uF.MEMBERS_LIST,
                      questContentCTA: b.Cy.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: v.uF.MEMBERS_LIST,
                  }),
                  (0, _.openModalLazy)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (n) =>
                          (0, i.jsx)(e, {
                              username: z ?? "",
                              onConfirm: () => (
                                  (0, O.Y5)({
                                      questId: t.id,
                                      questContent: v.uF.MEMBERS_LIST,
                                      questContentCTA: b.Cy.WATCH_STREAM_CONFIRM,
                                      trackGuildAndChannelMetadata: !0,
                                      sourceQuestContent: v.uF.MEMBERS_LIST,
                                  }),
                                  g.default.selectVoiceChannel(q.id),
                                  (0, A.Nl)(j)
                              ),
                              ...n,
                          });
                  }))
                : eh();
        },
        ep = (0, C.NA)({ quest: t }),
        eE = (() => {
            if (J && !Z)
                return {
                    headerText: V.intl.string(V.t.gHerLS),
                    ctaText: V.intl.string(V.t.cfY4PE),
                    handleClickCta: X,
                    tileAssetType: "reward",
                };
            if (Q && !Z)
                return {
                    headerText: V.intl.string(V.t.uH2sf2),
                    ctaText: V.intl.string(V.t.VN1Ajl),
                    handleClickCta: eh,
                    tileAssetType: "reward",
                };
            if ((0, L.Ll)(j, q))
                return {
                    headerText: V.intl.string(V.t.Bz6SkH),
                    ctaText: V.intl.string(V.t.BXFP30),
                    handleClickCta: ef,
                    tileAssetType: "game",
                };
            let e = (0, L.vA)(t) ? ep : V.intl.string(V.t["BSXPZ+"]);
            return {
                headerText:
                    (0, L.vA)(t) && (0, D.vl)(t) && !t.config.features.includes(U.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : V.intl.string(V.t.Bz6SkH),
                ctaText: e,
                handleClickCta: eh,
                tileAssetType: "game",
            };
        })();
    return (0, i.jsx)(s.animated.div, {
        ref: (e) => {
            $.current = e;
        },
        "aria-expanded": es,
        className: B.iE,
        style: {
            width: w.current?.clientWidth ?? 222,
            height: eu.height,
            overflow: es ? "visible" : "hidden",
            borderRadius: e_,
        },
        children: (0, i.jsxs)("div", {
            ref: (e) => {
                ei.current = e;
            },
            className: B.kL,
            style: { borderRadius: e_ },
            children: [
                (0, i.jsxs)("div", {
                    className: B.Mn,
                    children: [
                        (0, i.jsxs)("div", {
                            className: B.kb,
                            children: [
                                (0, i.jsx)(h.D, { variant: "heading-sm/semibold", children: eE.headerText }),
                                (0, i.jsxs)(f.D, {
                                    className: B.yj,
                                    onClick: (e) => {
                                        ed(),
                                            e.stopPropagation(),
                                            (0, O.Y5)({
                                                questId: t.id,
                                                questContent: v.uF.MEMBERS_LIST,
                                                questContentCTA: b.Cy.OPEN_DISCLOSURE,
                                                trackGuildAndChannelMetadata: !0,
                                                sourceQuestContent: v.uF.MEMBERS_LIST,
                                            }),
                                            (0, x.Zc)(t, {
                                                content: v.uF.MEMBERS_LIST,
                                                ctaContent: b.Cy.OPEN_DISCLOSURE,
                                                sourceQuestContent: v.uF.MEMBERS_LIST,
                                            });
                                    },
                                    children: [
                                        (0, i.jsx)(p.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: B.BK,
                                            children: V.intl.format(V.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, i.jsx)(E.c, {
                                            size: "custom",
                                            className: B.$y,
                                            width: H,
                                            height: H,
                                            color: m.A.colors.INTERACTIVE_TEXT_DEFAULT,
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
                                    ec(
                                        (e, t) =>
                                            t &&
                                            (0, i.jsx)(s.animated.div, {
                                                style: { opacity: (0, P.a)(e.opacity), scale: (0, P.a)(e.scale) },
                                                className: B.ae,
                                            }),
                                    ),
                                    "game" === eE.tileAssetType &&
                                        (0, i.jsx)("img", {
                                            alt: V.intl.formatToPlainString(V.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: B.TW,
                                            src: (0, R.tW)(t, R.fY.GAME_TILE, et).url,
                                        }),
                                    "reward" === eE.tileAssetType &&
                                        (0, i.jsx)(M.A, {
                                            className: B.TW,
                                            quest: t,
                                            questContent: v.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: ed,
                                            sourceQuestContent: v.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(l.$, {
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
function Y(e) {
    return (0, i.jsx)(w.R, {
        questOrQuests: e.quest,
        questContent: v.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: v.uF.MEMBERS_LIST,
        children: (t) => (0, i.jsx)(j, { impressionRef: t, ...e }),
    });
}
