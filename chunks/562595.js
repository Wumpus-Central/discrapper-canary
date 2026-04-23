s.d(t, { B: () => G, l: () => Y });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(419354),
    o = s(323889),
    c = s(440703),
    u = s(731355),
    d = s(621466),
    _ = s(827734),
    m = s(462887),
    h = s(717421),
    x = s(821609),
    f = s(331322),
    E = s(508770),
    p = s(406810),
    g = s(834730),
    A = s(628284),
    C = s(65154),
    b = s(687966),
    j = s(496431),
    v = s(736653),
    N = s(975807),
    T = s(405269),
    S = s(927813),
    O = s(341915),
    L = s(890687),
    I = s(579473),
    y = s(561844),
    R = s(18437),
    Q = s(590202),
    H = s(651892),
    M = s(92246),
    P = s(814793),
    U = s(453384),
    F = s(415441),
    k = s(646764),
    w = s(398025),
    q = s(652215),
    D = s(818348),
    B = s(985018),
    V = s(469083);
function W(e) {
    let [t, s] = l.useState(!1),
        n = l.useCallback(() => {
            t || (s(!0), e?.(!0));
        }, [t, e]),
        a = l.useCallback(() => {
            t && (s(!1), e?.(!1));
        }, [t, e]);
    return { isHovering: t, hoverProps: { onMouseEnter: n, onMouseLeave: a, onFocus: n, onBlur: a } };
}
function Y(e) {
    let { hero: t, contentPosition: s } = e,
        a = l.useRef(null),
        { isHovering: c, hoverProps: u } = W(
            l.useCallback(
                (e) => {
                    (0, y.Qg)({
                        adContentId: t.id,
                        adCreativeType: o.p.QUEST_HOME_HERO,
                        event: e ? q.HAw.QUEST_HOVER : q.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: O.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, Q.jO)(O.uF.QUEST_HOME_HERO_SHELF),
                            content_position: s,
                        },
                        sourceQuestContent: O.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [t.id, s],
            ),
        );
    l.useEffect(() => {
        let e = a.current;
        (0, d.vq)(e, HTMLVideoElement) && (c ? ((e.currentTime = 0), e.play().catch(D.tE)) : e.pause());
    }, [c]);
    let { hoverSpring: _ } = (0, h.z)({ hoverSpring: +!!c, config: i.config.gentle });
    return (0, n.jsxs)("div", {
        className: r()(V.FW, V.Bm),
        ...u,
        children: [
            (0, n.jsx)("div", {
                className: V.Ve,
                children: (0, n.jsx)(F.N, {
                    showVideo: !0,
                    assetRef: a,
                    imageAsset:
                        null != t.shelfImage
                            ? {
                                  asset: { url: t.shelfImage, mimetype: null, isAnimated: !1 },
                                  assetId: "intro-image",
                                  className: r()(V.pv, V.gI),
                              }
                            : void 0,
                    videoAsset:
                        null != t.shelfVideo
                            ? {
                                  asset: { url: t.shelfVideo, mimetype: null, isAnimated: !0 },
                                  assetId: "intro-video",
                                  className: r()(V.pv, V.Wq),
                              }
                            : void 0,
                }),
            }),
            (0, n.jsx)(i.animated.div, {
                className: V.hn,
                style: { transform: _.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: () => {
                        (0, N.A)(t.cta.url),
                            (0, y.vK)({
                                adContentId: t.id,
                                adCreativeType: o.p.QUEST_HOME_HERO,
                                questContent: O.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: Q.Cy.OPEN_GAME_LINK,
                                questContentPosition: s,
                                sourceQuestContent: O.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: t.cta.buttonLabel,
                }),
            }),
        ],
    });
}
function G(e) {
    let { quest: t, onQuestCtaClick: s, contentPosition: a } = e,
        o = (0, v.Ay)(),
        d = l.useMemo(() => (0, I.tW)(t, I.fY.LOGO_TYPE, (0, m.M)(o) ? q.NJ8.DARK : q.NJ8.LIGHT).url, [t, o]),
        N = l.useMemo(() => new Date(t.config.expiresAt), [t.config.expiresAt]),
        { days: y, hours: F, minutes: D, seconds: Y } = (0, j.A)(N, S.A.Millis.MINUTE),
        G = l.useMemo(
            () =>
                (0, T.uN)(
                    { days: y, hours: F, minutes: D, seconds: Y },
                    { days: B.t["Ux/De1"], hours: B.t.Lzd5Ie, minutes: B.t.odmpbP },
                ),
            [y, F, D, Y],
        ),
        z = l.useMemo(() => (0, M.mq)(t.config), [t.config]),
        $ = l.useMemo(
            () =>
                (function (e) {
                    switch ((0, H.xv)(e).type) {
                        case c.l.IN_GAME:
                            return B.intl.string(B.t["O/J2kr"]);
                        case c.l.COLLECTIBLE:
                            return B.intl.string(B.t.Jg17Ut);
                        case c.l.VIRTUAL_CURRENCY:
                            return B.intl.string(B.t.ElYQFS);
                        default:
                            return (0, M.mq)(e);
                    }
                })(t.config),
            [t.config],
        ),
        { completedRatio: K, completedRatioDisplay: J } = (0, L.O9)(t),
        Z = l.useMemo(() => (0, M._Z)(t.config), [t.config]),
        X = (0, R.Ut)(),
        ee = (0, R.u0)(),
        { isHovering: et, hoverProps: es } = W(
            l.useCallback(
                (e) => {
                    ee({
                        questId: t.id,
                        event: e ? q.HAw.QUEST_HOVER : q.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: O.uF.QUEST_HOME_HERO_SHELF,
                            content_name: (0, Q.jO)(O.uF.QUEST_HOME_HERO_SHELF),
                            content_position: a,
                        },
                        sourceQuestContent: O.uF.QUEST_HOME_HERO_SHELF,
                    });
                },
                [ee, t.id, a],
            ),
        ),
        { hoverSpring: en } = (0, h.z)({ hoverSpring: +!!et, config: i.config.gentle });
    return (0, n.jsxs)("div", {
        className: r()(V.FW, V.$R),
        ...es,
        children: [
            (0, n.jsxs)(f.B, {
                direction: "horizontal",
                gap: 4,
                children: [
                    (0, n.jsx)(E.E, { type: { text: $ }, variant: "expressive" }),
                    (0, n.jsx)(i.animated.div, {
                        style: { opacity: (0, w.a)(en.to([0, 1], [1, 0])) },
                        children: (0, n.jsx)(E.E, { type: { text: G }, icon: p.O }),
                    }),
                ],
            }),
            (0, n.jsx)(i.animated.div, {
                className: V.Tr,
                style: { transform: en.to([0, 1], [1, 1.1]).to((e) => `scale(${e})`) },
                children: (0, n.jsx)(U.A, {
                    percentComplete: K,
                    overlayText: et && null != Z ? `${Z}` : void 0,
                    size: 100,
                    children: (0, n.jsx)(k.A, {
                        quest: t,
                        questContent: O.uF.QUEST_HOME_HERO_SHELF,
                        sourceQuestContent: O.uF.QUEST_HOME_HERO_SHELF,
                        autoplay: et,
                        fullWidth: !0,
                    }),
                }),
            }),
            (0, n.jsx)(i.animated.div, {
                className: V.tw,
                style: {
                    opacity: (0, w.a)(en.to([0, 1], [1, 0])),
                    transform: en.to([0, 1], [1, 0.9]).to((e) => `scale(${e})`),
                    transformOrigin: "bottom left",
                },
                children: (0, n.jsxs)(f.B, {
                    gap: 8,
                    children: [
                        (0, n.jsx)("div", {
                            className: V.aP,
                            children: (0, n.jsx)("img", { src: d, alt: t.config.messages.gameTitle, className: V.rC }),
                        }),
                        (0, n.jsxs)(f.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(g.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    className: V.Ht,
                                    children: z,
                                }),
                                (0, n.jsxs)(f.B, {
                                    align: "start",
                                    direction: "horizontal",
                                    gap: 8,
                                    children: [
                                        (0, n.jsxs)(f.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, n.jsx)(A.y, { size: "xs", color: _.A.colors.ICON_MUTED.css }),
                                                (0, n.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.config.messages.gamePublisher,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(f.B, {
                                            direction: "horizontal",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, P.pv)(t.config) === u.Z.VIDEO
                                                    ? (0, n.jsx)(C.S, { size: "xs", color: _.A.colors.ICON_MUTED.css })
                                                    : (0, n.jsx)(b._, { size: "xs", color: _.A.colors.ICON_MUTED.css }),
                                                (0, n.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: J,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(i.animated.div, {
                className: V.um,
                style: { transform: en.to([0, 1], [100, 0]).to((e) => `translateY(${e}%)`) },
                children: (0, n.jsx)(x.$, {
                    fullWidth: !0,
                    onClick: () => {
                        s(t.id),
                            X({
                                questId: t.id,
                                questContent: O.uF.QUEST_HOME_HERO_SHELF,
                                questContentCTA: Q.Cy.VIEW_QUESTS,
                                questContentPosition: a,
                                sourceQuestContent: O.uF.QUEST_HOME_HERO_SHELF,
                            });
                    },
                    text: B.intl.string(B.t["th2+0j"]),
                }),
            }),
        ],
    });
}
