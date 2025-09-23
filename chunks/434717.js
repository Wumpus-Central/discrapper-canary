n.d(t, { Z: () => j });
var r = n(951288),
    a = n(647438),
    i = n(319245),
    o = n(793030),
    s = n(410030),
    l = n(624138),
    c = n(617136),
    d = n(915750),
    u = n(509212),
    p = n(113434),
    f = n(497505),
    m = n(475595),
    C = n(566078),
    h = n(968435),
    _ = n(46140),
    g = n(231338),
    v = n(388032),
    y = n(834586);
function j(e) {
    let { quest: t, sourceQuestContent: n } = e,
        j = (0, s.ZP)(),
        w = (0, o.wjy)(j) ? g.BR.DARK : g.BR.LIGHT,
        b = (0, p.ly)(t),
        x = (0, d.aM)(),
        P = a.useMemo(() => {
            let e = C.r.build(t.config),
                n = e.defaultWatchVideoTask,
                r = null == n ? void 0 : n.messages.videoEndCtaSubtitle;
            return (0, l.Ew)(r)
                ? e.questType !== i.W.GAMEPLAY || t.config.features.includes(_.S7.NON_GAMING_PLAY_QUEST) || (0, u.Pb)(t)
                    ? v.intl.string(v.t.y8Xf3t)
                    : v.intl.string(v.t.wirwNz)
                : r;
        }, [t]);
    return (0, r.jsxs)("div", {
        className: y.container,
        children: [
            (0, r.jsx)(h.Z, {
                quest: t,
                dimensions: {
                    width: 908,
                    height: 380,
                },
                className: y.heroDisplayContainer,
            }),
            (0, r.jsx)("div", {
                className: y.partnerLogotypeContainer,
                children: (0, r.jsx)("img", {
                    className: y.partnerLogotype,
                    alt: v.intl.formatToPlainString(v.t.rtm15O, { name: t.config.messages.gameTitle }),
                    src: (0, m.fh)(t, m.eC.LOGO_TYPE, w).url,
                }),
            }),
            (0, r.jsxs)("div", {
                className: y.partnerContentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.partnerCopyContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-lg/bold",
                                color: "header-primary",
                                className: y.partnerTitle,
                                children: t.config.messages.questName,
                            }),
                            (0, r.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: P,
                            }),
                        ],
                    }),
                    (0, r.jsx)("img", {
                        className: y.partnerGameTile,
                        alt: v.intl.formatToPlainString(v.t.rtm15O, { name: t.config.messages.gameTitle }),
                        src: (0, m.fh)(t, m.eC.GAME_TILE, w).url,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: y.partnerCtaContainer,
                children: (0, r.jsx)(o.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: b,
                    onClick: () => {
                        (0, u.nc)(t, {
                            content: f.jn.REWARD_MODAL,
                            ctaContent: c.jZ.OPEN_GAME_LINK,
                            impressionId: x,
                            sourceQuestContent: n,
                        });
                    },
                    fullWidth: !0,
                    icon: o.zFc,
                    iconPosition: "end",
                }),
            }),
        ],
    });
}
