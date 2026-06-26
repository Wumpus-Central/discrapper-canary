i.d(e, { A: () => z });
var s = i(627968),
    n = i(64700),
    a = i(189213),
    l = i(815021),
    r = i(834730),
    c = i(192308),
    o = i(935462),
    d = i(289873),
    u = i(507107),
    m = i(73473),
    x = i(617986),
    f = i(731355),
    h = i(366010),
    g = i(534514),
    j = i(825484),
    N = i(408278),
    v = i(173936),
    C = i(821609),
    A = i(743368),
    p = i(990078),
    y = i(736653),
    E = i(46948),
    k = i(590202),
    L = i(971649),
    M = i(651892),
    _ = i(901406),
    T = i(814793),
    w = i(241124),
    I = i(918338),
    W = i(371912),
    b = i(491145),
    D = i(190107),
    P = i(818348),
    R = i(375708),
    S = i(27669);
function q(t) {
    let { quest: e, sourceQuestContent: i, onLoadComplete: a, preCtaClick: l } = t,
        c = (0, y.Ay)(),
        o = (0, h.M)(c) ? P.NJ.DARK : P.NJ.LIGHT,
        d = (0, L.go)(),
        m = (0, T.E0)(e.config);
    async function x() {
        await l?.(),
            (0, _.pu)(e, {
                content: u.uF.REWARD_MODAL,
                ctaContent: k.Cy.OPEN_GAME_LINK,
                impressionId: d,
                sourceQuestContent: i,
            });
    }
    let q = n.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, T.pv)(e.config) !== f.Z.GAMEPLAY ||
                    e.config.features.includes(D.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, T.ui)(e)
                  ? R.intl.string(R.t.y8Xf3k)
                  : R.intl.string(R.t["wirwN+"]);
        }, [e]),
        O = (0, b.A)(e, { impressionId: d, sourceQuestContent: i }, l) ?? {
            ctaText: (0, M.wr)(e),
            ctaVariant: "primary",
            onClickCta: x,
            title: R.intl.format(R.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: q,
            ctaIconPosition: "end",
        },
        { isLoading: G } = (0, w.Gk)();
    n.useEffect(() => {
        G || a();
    }, [G, a]);
    let Y = (0, W.Lk)({
        isShareable: m,
        questId: e.id,
        trackingCtx: n.useMemo(
            () => ({
                content: u.uF.REWARD_MODAL,
                ctaContent: k.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: d,
                sourceQuestContent: i,
            }),
            [d, i],
        ),
    });
    return (0, s.jsxs)("div", {
        className: S.kL,
        children: [
            (0, s.jsx)(w.Sn, {
                id: "hero-display",
                children: (t) =>
                    (0, s.jsx)(I.A, {
                        quest: e,
                        imageSize: { width: D.i$ * D.K, height: D.ls * D.K },
                        containerClassName: S.WQ,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, s.jsx)("div", {
                className: S.Lt,
                children: (0, s.jsx)(w.Sn, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, s.jsx)("img", {
                            ref: t,
                            className: S.a$,
                            alt: R.intl.formatToPlainString(R.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, E.tW)(e, E.fY.LOGO_TYPE, o).url,
                        }),
                }),
            }),
            (0, s.jsxs)("div", {
                className: S.Th,
                children: [
                    (0, s.jsxs)("div", {
                        className: S.Ly,
                        children: [
                            (0, s.jsx)(g.D, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: S.fx,
                                children: O.title,
                            }),
                            (0, s.jsx)(r.E, { variant: "text-sm/medium", color: "text-subtle", children: O.subtitle }),
                        ],
                    }),
                    (0, s.jsx)(w.Sn, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, s.jsx)("img", {
                                ref: t,
                                className: S.rw,
                                alt: R.intl.formatToPlainString(R.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, E.tW)(e, E.fY.GAME_TILE, o).url,
                            }),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: S.tu,
                children: (0, s.jsxs)(j.e, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        m &&
                            (0, s.jsx)(p.m, {
                                text: R.intl.string(R.t.WmfZHZ),
                                children: (0, s.jsx)(N.K, {
                                    icon: v.q,
                                    onClick: Y,
                                    "aria-label": R.intl.string(R.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, s.jsx)(C.$, {
                            variant: O.ctaVariant,
                            text: O.ctaText,
                            onClick: O.onClickCta,
                            fullWidth: !0,
                            icon: A.W,
                            iconPosition: O.ctaIconPosition,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function O(t) {
    let { quest: e, location: i } = t;
    return (0, s.jsx)(w.jY, { source: i, questId: e.id, isPreview: e.preview, children: (0, s.jsx)(q, { ...t }) });
}
var G = i(592727);
function Y(t) {
    let { onClose: e, transitionState: i } = t;
    return (0, s.jsx)(a.Modal, {
        size: "md",
        title: R.intl.string(R.t.Hd3D8W),
        actions: [{ variant: "primary", text: R.intl.string(R.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: i,
        children: (0, s.jsx)(r.E, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: R.intl.string(R.t.Ij97SL),
        }),
    });
}
function z(t) {
    let {
            quest: e,
            sourceQuestContent: i,
            transitionState: a,
            onClose: r,
            rewardContent: f,
            isRewardContentLoading: h,
            rewardContentHasError: g,
            location: j,
        } = t,
        N = u.uF.REWARD_MODAL,
        [v, C] = n.useState(!0),
        A = e.config.features.some((t) => D.Tz.has(t)),
        p = n.useCallback(async () => {
            if (A) {
                r(), (0, c.closeAllModals)();
                return;
            }
            (await (0, x.f7)(e.config.ctaConfig?.link)) && (r(), (0, c.closeAllModals)());
        }, [e.config.ctaConfig?.link, r, A]);
    if (g) return (0, s.jsx)(Y, { onClose: r, transitionState: a });
    let y = h || v;
    return (0, s.jsx)(m.R, {
        questOrQuests: e,
        questContent: N,
        sourceQuestContent: i,
        children: (t) =>
            (0, s.jsxs)(o.EO, {
                "data-migration-pending": !0,
                transitionState: a,
                size: o.rI.DYNAMIC,
                className: G.yl,
                "aria-label": y ? R.intl.string(R.t.ZTNur7) : void 0,
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
                                    children: (0, s.jsx)(O, {
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
