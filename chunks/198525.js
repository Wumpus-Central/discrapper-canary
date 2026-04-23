"use strict";
n.d(t, { A: () => Y });
var r = n(627968),
    i = n(64700),
    s = n(419354),
    a = n(837381),
    o = n(311907),
    l = n(821609),
    u = n(462887),
    c = n(717421),
    d = n(866323),
    _ = n(192308),
    f = n(534514),
    p = n(939249),
    h = n(834730),
    E = n(290136),
    m = n(827734),
    g = n(956793),
    A = n(401843),
    I = n(765671),
    T = n(775602),
    S = n(267102),
    y = n(544028),
    N = n(734057),
    v = n(341915),
    C = n(714510),
    O = n(579473),
    R = n(561844),
    b = n(590202),
    D = n(792620),
    L = n(814793),
    w = n(73473),
    M = n(201805),
    P = n(646764),
    x = n(398025),
    k = n(545986),
    U = n(654487),
    G = n(652215),
    F = n(818348),
    V = n(985018),
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
        X = (0, M.ix)({ quest: t, questContent: v.uF.MEMBERS_LIST, sourceQuestContent: v.uF.MEMBERS_LIST }),
        Q = t?.userStatus?.claimedAt != null,
        Z = t?.userStatus?.enrolledAt != null,
        J = t?.userStatus?.completedAt != null,
        ee = (0, o.bG)([y.A], () => y.A.getState().theme),
        et = (0, u.M)(ee) ? F.NJ.DARK : F.NJ.LIGHT,
        en = (0, o.bG)([T.A], () => T.A.useReducedMotion),
        { ref: er, height: ei } = (0, I.Ay)(),
        [es, ea] = i.useState(en),
        eo = (0, S.aL)(),
        el = (0, a.KF)();
    i.useEffect(() => {
        let e = el.current;
        return (
            e?.addEventListener("scroll", W),
            () => {
                e?.removeEventListener("scroll", W);
            }
        );
    }, [W, el]),
        i.useEffect(() => {
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
            height: ei ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => ea(!0),
        }),
        ec = (0, d.p)(es, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } }),
        ed = () => {
            eo.dispatch(G.jej.POPOUT_CLOSE);
        },
        e_ = "top" === Y ? "8px 8px 0 0" : "0 0 8px 8px",
        ef = () => {
            (0, R.Y5)({
                questId: t.id,
                questContent: v.uF.MEMBERS_LIST,
                questContentCTA: b.Cy.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: v.uF.MEMBERS_LIST,
            }),
                (0, k.navigateToQuestHome)({ fromContent: v.uF.MEMBERS_LIST, questId: t.id });
        },
        ep = () => {
            (0, L.Ll)(j, q) && null != q
                ? ((0, R.Y5)({
                      questId: t.id,
                      questContent: v.uF.MEMBERS_LIST,
                      questContentCTA: b.Cy.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: v.uF.MEMBERS_LIST,
                  }),
                  (0, _.openModalLazy)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (n) =>
                          (0, r.jsx)(e, {
                              username: z ?? "",
                              onConfirm: () => (
                                  (0, R.Y5)({
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
                : ef();
        },
        eh = (0, C.NA)({ quest: t }),
        eE = (() => {
            if (J && !Q)
                return {
                    headerText: V.intl.string(V.t.gHerLS),
                    ctaText: V.intl.string(V.t.cfY4PE),
                    handleClickCta: X,
                    tileAssetType: "reward",
                };
            if (Z && !Q)
                return {
                    headerText: V.intl.string(V.t.uH2sf2),
                    ctaText: V.intl.string(V.t.VN1Ajl),
                    handleClickCta: ef,
                    tileAssetType: "reward",
                };
            if ((0, L.Ll)(j, q))
                return {
                    headerText: V.intl.string(V.t.Bz6SkH),
                    ctaText: V.intl.string(V.t.BXFP30),
                    handleClickCta: ep,
                    tileAssetType: "game",
                };
            let e = (0, L.vA)(t) ? eh : V.intl.string(V.t["BSXPZ+"]);
            return {
                headerText:
                    (0, L.vA)(t) && (0, D.vl)(t) && !t.config.features.includes(U.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : V.intl.string(V.t.Bz6SkH),
                ctaText: e,
                handleClickCta: ef,
                tileAssetType: "game",
            };
        })();
    return (0, r.jsx)(s.animated.div, {
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
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                er.current = e;
            },
            className: B.kL,
            style: { borderRadius: e_ },
            children: [
                (0, r.jsxs)("div", {
                    className: B.Mn,
                    children: [
                        (0, r.jsxs)("div", {
                            className: B.kb,
                            children: [
                                (0, r.jsx)(f.D, { variant: "heading-sm/semibold", children: eE.headerText }),
                                (0, r.jsxs)(p.D, {
                                    className: B.yj,
                                    onClick: (e) => {
                                        ed(),
                                            e.stopPropagation(),
                                            (0, R.Y5)({
                                                questId: t.id,
                                                questContent: v.uF.MEMBERS_LIST,
                                                questContentCTA: b.Cy.OPEN_DISCLOSURE,
                                                trackGuildAndChannelMetadata: !0,
                                                sourceQuestContent: v.uF.MEMBERS_LIST,
                                            }),
                                            (0, k.Zc)(t, {
                                                content: v.uF.MEMBERS_LIST,
                                                ctaContent: b.Cy.OPEN_DISCLOSURE,
                                                sourceQuestContent: v.uF.MEMBERS_LIST,
                                            });
                                    },
                                    children: [
                                        (0, r.jsx)(h.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: B.BK,
                                            children: V.intl.format(V.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(E.c, {
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
                        (0, r.jsx)("div", {
                            className: B.pG,
                            children: (0, r.jsxs)("div", {
                                className: B.zc,
                                children: [
                                    ec(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(s.animated.div, {
                                                style: { opacity: (0, x.a)(e.opacity), scale: (0, x.a)(e.scale) },
                                                className: B.ae,
                                            }),
                                    ),
                                    "game" === eE.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: V.intl.formatToPlainString(V.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: B.TW,
                                            src: (0, O.tW)(t, O.fY.GAME_TILE, et).url,
                                        }),
                                    "reward" === eE.tileAssetType &&
                                        (0, r.jsx)(P.A, {
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
                (0, r.jsx)(l.$, {
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
    return (0, r.jsx)(w.R, {
        questOrQuests: e.quest,
        questContent: v.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: v.uF.MEMBERS_LIST,
        children: (t) => (0, r.jsx)(j, { impressionRef: t, ...e }),
    });
}
