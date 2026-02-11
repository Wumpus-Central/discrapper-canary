"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    a = n(92674),
    s = n(837381),
    o = n(311907),
    l = n(732955),
    u = n(582754),
    c = n(397927),
    d = n(956793),
    _ = n(401843),
    f = n(765671),
    h = n(775602),
    p = n(267102),
    g = n(544028),
    E = n(734057),
    A = n(341915),
    I = n(714510),
    T = n(579473),
    y = n(561844),
    S = n(590202),
    v = n(792620),
    C = n(814793),
    b = n(73473),
    N = n(201805),
    R = n(646764),
    O = n(398025),
    D = n(545986),
    L = n(654487),
    w = n(652215),
    x = n(818348),
    P = n(985018),
    M = n(784569);
let k = "8px",
    U = "11px",
    G = 222;
function F(e) {
    let {
            quest: t,
            memberListItemRef: b,
            applicationStream: F,
            position: V,
            closePopout: B,
            updatePosition: j,
            impressionRef: H,
            name: Y,
        } = e,
        W = (0, o.bG)([E.A], () => E.A.getChannel(F?.channelId) ?? null),
        K = (0, N.ix)({ quest: t, questContent: A.uF.MEMBERS_LIST, sourceQuestContent: A.uF.MEMBERS_LIST }),
        $ = t?.userStatus?.claimedAt != null,
        z = t?.userStatus?.enrolledAt != null,
        q = t?.userStatus?.completedAt != null,
        X = (0, o.bG)([g.A], () => g.A.getState().theme),
        Z = (0, u.Mw)(X) ? x.NJ.DARK : x.NJ.LIGHT,
        Q = (0, o.bG)([h.A], () => h.A.useReducedMotion),
        { ref: J, height: ee } = (0, f.Ay)(),
        [et, en] = i.useState(Q),
        er = (0, p.aL)(),
        ei = (0, s.KF)();
    i.useEffect(() => {
        let e = ei.current;
        return (
            e?.addEventListener("scroll", B),
            () => {
                e?.removeEventListener("scroll", B);
            }
        );
    }, [B, ei]),
        i.useEffect(() => {
            let e = ei.current,
                t = b.current;
            if (null == e || null == t) return;
            let n = new MutationObserver(() => j());
            return (
                n.observe(e, { childList: !0, subtree: !0 }),
                () => {
                    n.disconnect();
                }
            );
        }, [b, ei, j]);
    let ea = (0, c.zhh)({
            from: { height: 0 },
            height: ee ?? 0,
            config: { tension: 450, friction: 45 },
            onRest: () => en(!0),
        }),
        es = (0, c.pnh)(et, { from: { opacity: 0, scale: 0 }, enter: { opacity: 1, scale: 1 } }),
        eo = () => {
            er.dispatch(w.jej.POPOUT_CLOSE);
        },
        el = "top" === V ? `${k} ${k} 0 0` : `0 0 ${k} ${k}`,
        eu = () => {
            (0, y.Y5)({
                questId: t.id,
                questContent: A.uF.MEMBERS_LIST,
                questContentCTA: S.Cy.OPEN_DISCLOSURE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: A.uF.MEMBERS_LIST,
            }),
                (0, D.Zc)(t, {
                    content: A.uF.MEMBERS_LIST,
                    ctaContent: S.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: A.uF.MEMBERS_LIST,
                });
        },
        ec = () => {
            (0, y.Y5)({
                questId: t.id,
                questContent: A.uF.MEMBERS_LIST,
                questContentCTA: S.Cy.LEARN_MORE,
                trackGuildAndChannelMetadata: !0,
                sourceQuestContent: A.uF.MEMBERS_LIST,
            }),
                (0, D.navigateToQuestHome)({ fromContent: A.uF.MEMBERS_LIST, questId: t.id });
        },
        ed = (e) => {
            e.stopPropagation(), eu();
        },
        e_ = () => {
            (0, C.Ll)(F, W) && null != W
                ? ((0, y.Y5)({
                      questId: t.id,
                      questContent: A.uF.MEMBERS_LIST,
                      questContentCTA: S.Cy.WATCH_STREAM,
                      trackGuildAndChannelMetadata: !0,
                      sourceQuestContent: A.uF.MEMBERS_LIST,
                  }),
                  (0, c.mMO)(async () => {
                      let { default: e } = await n.e("72879").then(n.bind(n, 48274));
                      return (n) =>
                          (0, r.jsx)(e, {
                              username: Y ?? "",
                              onConfirm: () => (
                                  (0, y.Y5)({
                                      questId: t.id,
                                      questContent: A.uF.MEMBERS_LIST,
                                      questContentCTA: S.Cy.WATCH_STREAM_CONFIRM,
                                      trackGuildAndChannelMetadata: !0,
                                      sourceQuestContent: A.uF.MEMBERS_LIST,
                                  }),
                                  d.default.selectVoiceChannel(W.id),
                                  (0, _.Nl)(F)
                              ),
                              ...n,
                          });
                  }))
                : ec();
        },
        ef = (0, I.NA)({ quest: t }),
        eh = (() => {
            if (q && !$)
                return {
                    headerText: P.intl.string(P.t.gHerLS),
                    ctaText: P.intl.string(P.t.cfY4PE),
                    handleClickCta: K,
                    tileAssetType: "reward",
                };
            if (z && !$)
                return {
                    headerText: P.intl.string(P.t.uH2sf2),
                    ctaText: P.intl.string(P.t.VN1Ajl),
                    handleClickCta: ec,
                    tileAssetType: "reward",
                };
            if ((0, C.Ll)(F, W))
                return {
                    headerText: P.intl.string(P.t.Bz6SkH),
                    ctaText: P.intl.string(P.t.BXFP30),
                    handleClickCta: e_,
                    tileAssetType: "game",
                };
            let e = (0, C.vA)(t) ? ef : P.intl.string(P.t["BSXPZ+"]);
            return {
                headerText:
                    (0, C.vA)(t) && (0, v.vl)(t) && !t.config.features.includes(L.Li.CLOUD_GAMING_ACTIVITY)
                        ? e
                        : P.intl.string(P.t.Bz6SkH),
                ctaText: e,
                handleClickCta: ec,
                tileAssetType: "game",
            };
        })();
    return (0, r.jsx)(a.animated.div, {
        ref: (e) => {
            H.current = e;
        },
        "aria-expanded": et,
        className: M.iE,
        style: {
            width: b.current?.clientWidth ?? G,
            height: ea.height,
            overflow: et ? "visible" : "hidden",
            borderRadius: el,
        },
        children: (0, r.jsxs)("div", {
            ref: (e) => {
                J.current = e;
            },
            className: M.kL,
            style: { borderRadius: el },
            children: [
                (0, r.jsxs)("div", {
                    className: M.Mn,
                    children: [
                        (0, r.jsxs)("div", {
                            className: M.kb,
                            children: [
                                (0, r.jsx)(c.Heading, { variant: "heading-sm/semibold", children: eh.headerText }),
                                (0, r.jsxs)(c.DUT, {
                                    className: M.yj,
                                    onClick: (e) => {
                                        eo(), ed(e);
                                    },
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            className: M.BK,
                                            children: P.intl.format(P.t["Lm8/mH"], {
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                        }),
                                        (0, r.jsx)(c.cBN, {
                                            size: "custom",
                                            className: M.$y,
                                            width: U,
                                            height: U,
                                            color: c.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: M.pG,
                            children: (0, r.jsxs)("div", {
                                className: M.zc,
                                children: [
                                    es(
                                        (e, t) =>
                                            t &&
                                            (0, r.jsx)(a.animated.div, {
                                                style: { opacity: (0, O.a)(e.opacity), scale: (0, O.a)(e.scale) },
                                                className: M.ae,
                                            }),
                                    ),
                                    "game" === eh.tileAssetType &&
                                        (0, r.jsx)("img", {
                                            alt: P.intl.formatToPlainString(P.t.IskzPg, {
                                                gameTitle: t.config.messages.gameTitle,
                                                gamePublisher: t.config.messages.gamePublisher,
                                            }),
                                            className: M.TW,
                                            src: (0, T.tW)(t, T.fY.GAME_TILE, Z).url,
                                        }),
                                    "reward" === eh.tileAssetType &&
                                        (0, r.jsx)(R.A, {
                                            className: M.TW,
                                            quest: t,
                                            questContent: A.uF.MEMBERS_LIST,
                                            learnMoreStyle: "icon",
                                            onClick: eo,
                                            sourceQuestContent: A.uF.MEMBERS_LIST,
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(l.$nd, {
                    variant: "secondary",
                    text: eh.ctaText,
                    onClick: () => {
                        eo(), eh.handleClickCta();
                    },
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
function V(e) {
    return (0, r.jsx)(b.R, {
        questOrQuests: e.quest,
        questContent: A.uF.MEMBERS_LIST,
        trackGuildAndChannelMetadata: !0,
        sourceQuestContent: A.uF.MEMBERS_LIST,
        children: (t) => (0, r.jsx)(F, { impressionRef: t, ...e }),
    });
}
