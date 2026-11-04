i.d(e, { A: () => Z });
var s = i(477900),
    n = i(582128),
    a = i(189213),
    r = i(815021),
    l = i(935462),
    c = i(834730),
    o = i(192308),
    d = i(289873),
    m = i(506988),
    u = i(280905),
    x = i(321538),
    f = i(323889),
    g = i(731355),
    h = i(366010),
    j = i(534514),
    v = i(825484),
    N = i(866665),
    C = i(408278),
    y = i(173936),
    p = i(821609),
    A = i(743368),
    E = i(736653),
    k = i(760914),
    _ = i(590202),
    L = i(971649),
    T = i(651892),
    b = i(574112),
    I = i(814793),
    M = i(557637),
    w = i(918338),
    W = i(201805),
    D = i(491145),
    P = i(221596),
    R = i(818348),
    O = i(792996),
    S = i(446498);
function q(t) {
    let { quest: e, sourceQuestContent: i, onLoadComplete: a, preCtaClick: r } = t,
        l = (0, E.Ay)(),
        o = (0, h.M)(l) ? R.NJ.DARK : R.NJ.LIGHT,
        d = (0, L.wW)(),
        u = (0, L.go)(),
        x = (0, I.E0)(e.config),
        f = n.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, I.pv)(e.config) !== g.Z.GAMEPLAY ||
                    e.config.features.includes(P.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, I.ui)(e)
                  ? O.intl.string(O.t.y8Xf3k)
                  : O.intl.string(O.t["wirwN+"]);
        }, [e]),
        q = (0, D.A)(e, { impressionId: u, sourceQuestContent: i }, r) ?? {
            ctaText: (0, T.wr)(e),
            ctaVariant: "primary",
            onClickCta: async function () {
                (await r?.(),
                    (0, b.pu)(e, {
                        content: m.uF.REWARD_MODAL,
                        ctaContent: _.Cy.OPEN_GAME_LINK,
                        impressionId: d(),
                        sourceQuestContent: i,
                    }));
            },
            title: O.intl.format(O.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: f,
            ctaIconPosition: "end",
        },
        { isLoading: z } = (0, M.zT)();
    n.useEffect(() => {
        z || a();
    }, [z, a]);
    let G = (0, W.Lk)({
        isShareable: x,
        questId: e.id,
        trackingCtx: n.useMemo(
            () => ({ content: m.uF.REWARD_MODAL, ctaContent: _.Cy.REWARD_MODAL_COPY_LINK, sourceQuestContent: i }),
            [i],
        ),
    });
    return (0, s.jsxs)("div", {
        className: S.kL,
        children: [
            (0, s.jsx)(M._M, {
                id: "hero-display",
                children: (t) =>
                    (0, s.jsx)(w.A, {
                        quest: e,
                        imageSize: (0, w.k)(),
                        variant: "modalPanel",
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, s.jsx)("div", {
                className: S.Lt,
                children: (0, s.jsx)(M._M, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, s.jsx)("img", {
                            ref: t,
                            className: S.a$,
                            alt: O.intl.formatToPlainString(O.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, k.tW)(e, k.fY.LOGO_TYPE, o).url,
                        }),
                }),
            }),
            (0, s.jsxs)("div", {
                className: S.Th,
                children: [
                    (0, s.jsxs)("div", {
                        className: S.Ly,
                        children: [
                            (0, s.jsx)(j.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                className: S.fx,
                                children: q.title,
                            }),
                            (0, s.jsx)(c.E, { variant: "body-sm/medium", color: "text-subtle", children: q.subtitle }),
                        ],
                    }),
                    (0, s.jsx)(M._M, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, s.jsx)("img", {
                                ref: t,
                                className: S.rw,
                                alt: O.intl.formatToPlainString(O.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, k.tW)(e, k.fY.GAME_TILE, o).url,
                            }),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: S.tu,
                children: (0, s.jsxs)(v.e, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        x &&
                            (0, s.jsx)(N.m, {
                                text: O.intl.string(O.t.WmfZHZ),
                                children: (0, s.jsx)(C.K, {
                                    icon: y.LinkIcon,
                                    onClick: G,
                                    "aria-label": O.intl.string(O.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, s.jsx)(p.$, {
                            variant: q.ctaVariant,
                            text: q.ctaText,
                            onClick: q.onClickCta,
                            fullWidth: !0,
                            icon: A.W,
                            iconPosition: q.ctaIconPosition,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function z(t) {
    let { quest: e, location: i } = t;
    return (0, s.jsx)(M.y5, {
        source: i,
        adCreativeId: e.id,
        adCreativeType: f.p.QUEST,
        isPreview: e.preview,
        children: (0, s.jsx)(q, { ...t }),
    });
}
var G = i(832312);
function Y(t) {
    let { onClose: e, transitionState: i } = t;
    return (0, s.jsx)(a.a, {
        size: "md",
        title: O.intl.string(O.t.Hd3D8W),
        actions: [{ variant: "primary", text: O.intl.string(O.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: i,
        children: (0, s.jsx)(c.E, {
            variant: "body-md/medium",
            color: "text-subtle",
            children: O.intl.string(O.t.Ij97SL),
        }),
    });
}
function Z(t) {
    let {
            quest: e,
            sourceQuestContent: i,
            transitionState: a,
            onClose: c,
            rewardContent: f,
            isRewardContentLoading: g,
            rewardContentHasError: h,
            location: j,
        } = t,
        v = m.uF.REWARD_MODAL,
        [N, C] = n.useState(!0),
        y = e.config.features.some((t) => P.Tz.has(t)),
        p = n.useCallback(async () => {
            if (y) {
                (c(), (0, o.s7)());
                return;
            }
            (await (0, x.f7)(e.config.ctaConfig?.link)) && (c(), (0, o.s7)());
        }, [e.config.ctaConfig?.link, c, y]);
    if (h) return (0, s.jsx)(Y, { onClose: c, transitionState: a });
    let A = g || N;
    return (0, s.jsx)(u.R, {
        questOrQuests: e,
        questContent: v,
        sourceQuestContent: i,
        children: (t) =>
            (0, s.jsxs)(l.EO, {
                "data-migration-pending": !0,
                transitionState: a,
                size: l.rI.DYNAMIC,
                className: G.yl,
                "aria-label": A ? O.intl.string(O.t.ZTNur7) : void 0,
                parentComponent: "QuestRewardModalBase",
                children: [
                    (0, s.jsx)("div", {
                        className: G.b,
                        children: (0, s.jsx)(r.J, { size: "xs", variant: "overlay-secondary", onClick: c }),
                    }),
                    A ? (0, s.jsx)(d.y, { className: G.u1, type: d.y.Type.WANDERING_CUBES }) : null,
                    (0, s.jsx)("div", {
                        ref: t,
                        className: G.BM,
                        style: { visibility: A ? "hidden" : "visible" },
                        children: (0, s.jsxs)("div", {
                            className: G.jE,
                            "data-testid": "quest-reward-modal",
                            children: [
                                (0, s.jsx)("div", { className: G._H, children: f }),
                                (0, s.jsx)("div", {
                                    className: G.xK,
                                    children: (0, s.jsx)(z, {
                                        quest: e,
                                        sourceQuestContent: i,
                                        onLoadComplete: () => C(!1),
                                        preCtaClick: p,
                                        location: j,
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
    });
}
