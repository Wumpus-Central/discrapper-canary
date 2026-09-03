i.d(e, { A: () => Z });
var s = i(477900),
    n = i(582128),
    a = i(189213),
    l = i(815021),
    r = i(935462),
    c = i(834730),
    o = i(192308),
    d = i(289873),
    m = i(738822),
    u = i(73473),
    x = i(617986),
    f = i(323889),
    g = i(731355),
    h = i(366010),
    j = i(297264),
    v = i(825484),
    N = i(408278),
    C = i(173936),
    p = i(821609),
    A = i(743368),
    y = i(866665),
    E = i(736653),
    k = i(291749),
    M = i(590202),
    _ = i(971649),
    L = i(651892),
    T = i(901406),
    I = i(814793),
    w = i(557637),
    W = i(918338),
    b = i(130490),
    D = i(491145),
    P = i(190107),
    R = i(818348),
    O = i(375708),
    S = i(446498);
function q(t) {
    let { quest: e, sourceQuestContent: i, onLoadComplete: a, preCtaClick: l } = t,
        r = (0, E.Ay)(),
        o = (0, h.M)(r) ? R.NJ.DARK : R.NJ.LIGHT,
        d = (0, _.wW)(),
        u = (0, _.go)(),
        x = (0, I.E0)(e.config);
    async function f() {
        await l?.(),
            (0, T.pu)(e, {
                content: m.uF.REWARD_MODAL,
                ctaContent: M.Cy.OPEN_GAME_LINK,
                impressionId: d(),
                sourceQuestContent: i,
            });
    }
    let q = n.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, I.pv)(e.config) !== g.Z.GAMEPLAY ||
                    e.config.features.includes(P.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, I.ui)(e)
                  ? O.intl.string(O.t.y8Xf3k)
                  : O.intl.string(O.t["wirwN+"]);
        }, [e]),
        z = (0, D.A)(e, { impressionId: u, sourceQuestContent: i }, l) ?? {
            ctaText: (0, L.wr)(e),
            ctaVariant: "primary",
            onClickCta: f,
            title: O.intl.format(O.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: q,
            ctaIconPosition: "end",
        },
        { isLoading: G } = (0, w.zT)();
    n.useEffect(() => {
        G || a();
    }, [G, a]);
    let Y = (0, b.Lk)({
        isShareable: x,
        questId: e.id,
        trackingCtx: n.useMemo(
            () => ({
                content: m.uF.REWARD_MODAL,
                ctaContent: M.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: u,
                sourceQuestContent: i,
            }),
            [u, i],
        ),
    });
    return (0, s.jsxs)("div", {
        className: S.kL,
        children: [
            (0, s.jsx)(w._M, {
                id: "hero-display",
                children: (t) =>
                    (0, s.jsx)(W.A, {
                        quest: e,
                        imageSize: (0, W.k)(),
                        variant: "modalPanel",
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, s.jsx)("div", {
                className: S.Lt,
                children: (0, s.jsx)(w._M, {
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
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: S.fx,
                                children: z.title,
                            }),
                            (0, s.jsx)(c.E, { variant: "text-sm/medium", color: "text-subtle", children: z.subtitle }),
                        ],
                    }),
                    (0, s.jsx)(w._M, {
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
                            (0, s.jsx)(y.m, {
                                text: O.intl.string(O.t.WmfZHZ),
                                children: (0, s.jsx)(N.K, {
                                    icon: C.LinkIcon,
                                    onClick: Y,
                                    "aria-label": O.intl.string(O.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, s.jsx)(p.$, {
                            variant: z.ctaVariant,
                            text: z.ctaText,
                            onClick: z.onClickCta,
                            fullWidth: !0,
                            icon: A.W,
                            iconPosition: z.ctaIconPosition,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function z(t) {
    let { quest: e, location: i } = t;
    return (0, s.jsx)(w.y5, {
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
    return (0, s.jsx)(a.Modal, {
        size: "md",
        title: O.intl.string(O.t.Hd3D8W),
        actions: [{ variant: "primary", text: O.intl.string(O.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: i,
        children: (0, s.jsx)(c.E, {
            variant: "text-md/medium",
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
        p = e.config.features.some((t) => P.Tz.has(t)),
        A = n.useCallback(async () => {
            if (p) {
                c(), (0, o.closeAllModals)();
                return;
            }
            (await (0, x.f7)(e.config.ctaConfig?.link)) && (c(), (0, o.closeAllModals)());
        }, [e.config.ctaConfig?.link, c, p]);
    if (h) return (0, s.jsx)(Y, { onClose: c, transitionState: a });
    let y = g || N;
    return (0, s.jsx)(u.R, {
        questOrQuests: e,
        questContent: v,
        sourceQuestContent: i,
        children: (t) =>
            (0, s.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: a,
                size: r.rI.DYNAMIC,
                className: G.yl,
                "aria-label": y ? O.intl.string(O.t.ZTNur7) : void 0,
                parentComponent: "QuestRewardModalBase",
                children: [
                    (0, s.jsx)("div", {
                        className: G.b,
                        children: (0, s.jsx)(l.J, { size: "xs", variant: "overlay-secondary", onClick: c }),
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
