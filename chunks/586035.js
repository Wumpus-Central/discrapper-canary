i.d(e, { A: () => K });
var s = i(627968),
    a = i(64700),
    n = i(189213),
    l = i(815021),
    r = i(834730),
    c = i(192308),
    o = i(935462),
    d = i(289873),
    m = i(24001),
    u = i(73473),
    x = i(617986),
    f = i(323889),
    h = i(731355),
    g = i(366010),
    j = i(534514),
    v = i(825484),
    N = i(408278),
    C = i(173936),
    p = i(821609),
    A = i(743368),
    y = i(990078),
    E = i(736653),
    M = i(46948),
    _ = i(590202),
    k = i(971649),
    T = i(651892),
    L = i(901406),
    w = i(814793),
    I = i(557637),
    W = i(918338),
    b = i(371912),
    D = i(491145),
    P = i(190107),
    R = i(818348),
    O = i(375708),
    S = i(27669);
function q(t) {
    let { quest: e, sourceQuestContent: i, onLoadComplete: n, preCtaClick: l } = t,
        c = (0, E.Ay)(),
        o = (0, g.M)(c) ? R.NJ.DARK : R.NJ.LIGHT,
        d = (0, k.go)(),
        u = (0, w.E0)(e.config);
    async function x() {
        await l?.(),
            (0, L.pu)(e, {
                content: m.uF.REWARD_MODAL,
                ctaContent: _.Cy.OPEN_GAME_LINK,
                impressionId: d,
                sourceQuestContent: i,
            });
    }
    let f = a.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, w.pv)(e.config) !== h.Z.GAMEPLAY ||
                    e.config.features.includes(P.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, w.ui)(e)
                  ? O.intl.string(O.t.y8Xf3k)
                  : O.intl.string(O.t["wirwN+"]);
        }, [e]),
        q = (0, D.A)(e, { impressionId: d, sourceQuestContent: i }, l) ?? {
            ctaText: (0, T.wr)(e),
            ctaVariant: "primary",
            onClickCta: x,
            title: O.intl.format(O.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: f,
            ctaIconPosition: "end",
        },
        { isLoading: z } = (0, I.zT)();
    a.useEffect(() => {
        z || n();
    }, [z, n]);
    let G = (0, b.Lk)({
        isShareable: u,
        questId: e.id,
        trackingCtx: a.useMemo(
            () => ({
                content: m.uF.REWARD_MODAL,
                ctaContent: _.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: d,
                sourceQuestContent: i,
            }),
            [d, i],
        ),
    });
    return (0, s.jsxs)("div", {
        className: S.kL,
        children: [
            (0, s.jsx)(I._M, {
                id: "hero-display",
                children: (t) =>
                    (0, s.jsx)(W.A, {
                        quest: e,
                        imageSize: { width: P.i$ * P.K, height: P.ls * P.K },
                        containerClassName: S.WQ,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, s.jsx)("div", {
                className: S.Lt,
                children: (0, s.jsx)(I._M, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, s.jsx)("img", {
                            ref: t,
                            className: S.a$,
                            alt: O.intl.formatToPlainString(O.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, M.tW)(e, M.fY.LOGO_TYPE, o).url,
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
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: S.fx,
                                children: q.title,
                            }),
                            (0, s.jsx)(r.E, { variant: "text-sm/medium", color: "text-subtle", children: q.subtitle }),
                        ],
                    }),
                    (0, s.jsx)(I._M, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, s.jsx)("img", {
                                ref: t,
                                className: S.rw,
                                alt: O.intl.formatToPlainString(O.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, M.tW)(e, M.fY.GAME_TILE, o).url,
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
                        u &&
                            (0, s.jsx)(y.m, {
                                text: O.intl.string(O.t.WmfZHZ),
                                children: (0, s.jsx)(N.K, {
                                    icon: C.q,
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
    return (0, s.jsx)(I.y5, {
        source: i,
        adCreativeId: e.id,
        adCreativeType: f.p.QUEST,
        isPreview: e.preview,
        children: (0, s.jsx)(q, { ...t }),
    });
}
var G = i(592727);
function Y(t) {
    let { onClose: e, transitionState: i } = t;
    return (0, s.jsx)(n.Modal, {
        size: "md",
        title: O.intl.string(O.t.Hd3D8W),
        actions: [{ variant: "primary", text: O.intl.string(O.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: i,
        children: (0, s.jsx)(r.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: O.intl.string(O.t.Ij97SL),
        }),
    });
}
function K(t) {
    let {
            quest: e,
            sourceQuestContent: i,
            transitionState: n,
            onClose: r,
            rewardContent: f,
            isRewardContentLoading: h,
            rewardContentHasError: g,
            location: j,
        } = t,
        v = m.uF.REWARD_MODAL,
        [N, C] = a.useState(!0),
        p = e.config.features.some((t) => P.Tz.has(t)),
        A = a.useCallback(async () => {
            if (p) {
                r(), (0, c.closeAllModals)();
                return;
            }
            (await (0, x.f7)(e.config.ctaConfig?.link)) && (r(), (0, c.closeAllModals)());
        }, [e.config.ctaConfig?.link, r, p]);
    if (g) return (0, s.jsx)(Y, { onClose: r, transitionState: n });
    let y = h || N;
    return (0, s.jsx)(u.R, {
        questOrQuests: e,
        questContent: v,
        sourceQuestContent: i,
        children: (t) =>
            (0, s.jsxs)(o.EO, {
                "data-migration-pending": !0,
                transitionState: n,
                size: o.rI.DYNAMIC,
                className: G.yl,
                "aria-label": y ? O.intl.string(O.t.ZTNur7) : void 0,
                parentComponent: "QuestRewardModalBase",
                children: [
                    (0, s.jsx)("div", {
                        className: G.b,
                        children: (0, s.jsx)(l.J, { size: "xs", variant: "overlay-secondary", onClick: r }),
                    }),
                    y ? (0, s.jsx)(d.y, { className: G.u1, type: d.y.Type.WANDERING_CUBES }) : null,
                    (0, s.jsx)("div", {
                        ref: t,
                        className: G.BM,
                        style: { visibility: y ? "hidden" : "visible" },
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
                                        preCtaClick: A,
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
