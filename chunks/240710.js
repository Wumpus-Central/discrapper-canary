n.d(e, { A: () => T });
var i = n(627968),
    s = n(64700),
    a = n(731355),
    r = n(158954),
    l = n(435371),
    d = n(736653),
    o = n(341915),
    c = n(579473),
    u = n(590202),
    m = n(971649),
    h = n(651892),
    x = n(901406),
    f = n(814793),
    g = n(241124),
    C = n(918338),
    N = n(201805),
    b = n(491145),
    A = n(654487),
    p = n(818348),
    I = n(985018),
    j = n(26950);
function v(t) {
    let { quest: e, sourceQuestContent: n, onLoadComplete: v, preCtaClick: T } = t,
        E = (0, d.Ay)(),
        _ = (0, r.Mwr)(E) ? p.NJ.DARK : p.NJ.LIGHT,
        R = (0, m.go)(),
        O = (0, f.E0)(e.config),
        y = async () => {
            await T?.(),
                (0, x.pu)(e, {
                    content: o.uF.REWARD_MODAL,
                    ctaContent: u.Cy.OPEN_GAME_LINK,
                    impressionId: R,
                    sourceQuestContent: n,
                });
        },
        L = s.useMemo(() => {
            let t = e.config.ctaConfig?.subtitle;
            return null != t
                ? t
                : (0, f.pv)(e.config) !== a.Z.GAMEPLAY ||
                    e.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST) ||
                    (0, f.ui)(e)
                  ? I.intl.string(I.t.y8Xf3k)
                  : I.intl.string(I.t["wirwN+"]);
        }, [e]),
        k = (0, b.A)(e, { impressionId: R, sourceQuestContent: n }, T) ?? {
            ctaText: (0, h.wr)(e),
            ctaIcon: r.We5,
            ctaVariant: "primary",
            onClickCta: y,
            title: I.intl.format(I.t.EAYZAr, { questName: e.config.messages.questName }),
            subtitle: L,
            ctaIconPosition: "end",
        },
        { isLoading: M } = (0, g.Gk)();
    s.useEffect(() => {
        M || v();
    }, [M, v]);
    let D = (0, N.Lk)({
        isShareable: O,
        questId: e.id,
        trackingCtx: s.useMemo(
            () => ({
                content: o.uF.REWARD_MODAL,
                ctaContent: u.Cy.REWARD_MODAL_COPY_LINK,
                impressionId: R,
                sourceQuestContent: n,
            }),
            [R, n],
        ),
    });
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [
            (0, i.jsx)(g.Sn, {
                id: "hero-display",
                children: (t) =>
                    (0, i.jsx)(C.A, {
                        quest: e,
                        imageSize: { width: 908, height: 380 },
                        containerClassName: j.WQ,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, i.jsx)("div", {
                className: j.Lt,
                children: (0, i.jsx)(g.Sn, {
                    id: "partner-logotype",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: j.a$,
                            alt: I.intl.formatToPlainString(I.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: (0, c.tW)(e, c.fY.LOGO_TYPE, _).url,
                        }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: j.Th,
                children: [
                    (0, i.jsxs)("div", {
                        className: j.Ly,
                        children: [
                            (0, i.jsx)(r.DZT, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: j.fx,
                                children: k.title,
                            }),
                            (0, i.jsx)(r.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: k.subtitle,
                            }),
                        ],
                    }),
                    (0, i.jsx)(g.Sn, {
                        id: "partner-game-tile",
                        children: (t) =>
                            (0, i.jsx)("img", {
                                ref: t,
                                className: j.rw,
                                alt: I.intl.formatToPlainString(I.t.rtm15P, { name: e.config.messages.gameTitle }),
                                src: (0, c.tW)(e, c.fY.GAME_TILE, _).url,
                            }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: j.tu,
                children: (0, i.jsxs)(r.e2v, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        O &&
                            (0, i.jsx)(l.m_, {
                                text: I.intl.string(I.t.WmfZHZ),
                                children: (0, i.jsx)(r.K0, {
                                    icon: r.qYV,
                                    onClick: D,
                                    "aria-label": I.intl.string(I.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, i.jsx)(r.$nd, {
                            variant: k.ctaVariant,
                            text: k.ctaText,
                            onClick: k.onClickCta,
                            fullWidth: !0,
                            icon: k.ctaIcon,
                            iconPosition: k.ctaIconPosition,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function T(t) {
    let { quest: e, location: n } = t;
    return (0, i.jsx)(g.jY, { source: n, questId: e.id, isPreview: e.preview, children: (0, i.jsx)(v, { ...t }) });
}
