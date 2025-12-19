n.d(t, { Z: () => O });
var r = n(54381),
    a = n(473749),
    i = n(319245),
    o = n(793030),
    s = n(681715),
    l = n(410030),
    c = n(617136),
    d = n(915750),
    u = n(49436),
    m = n(475595),
    p = n(304696),
    C = n(387745),
    f = n(283689),
    h = n(455357),
    x = n(477005),
    j = n(659302),
    g = n(324805),
    y = n(231338),
    b = n(388032),
    v = n(556463);
function w(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: w } = e,
        O = (0, l.ZP)(),
        _ = (0, o.wjy)(O) ? y.BR.DARK : y.BR.LIGHT,
        N = (0, p.V_)(t),
        P = (0, d.aM)(),
        A = (0, f.VB)(t.config),
        E = a.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            return null != n
                ? n
                : (0, f.BI)(t.config) !== i.W.GAMEPLAY ||
                    t.config.features.includes(g.S7.NON_GAMING_PLAY_QUEST) ||
                    (0, f.Pb)(t)
                  ? b.intl.string(b.t.y8Xf3k)
                  : b.intl.string(b.t["wirwN+"]);
        }, [t]),
        { isLoading: I } = (0, h.kC)();
    a.useEffect(() => {
        I || w();
    }, [I, w]);
    let D = (0, j.yc)({
        isShareable: A,
        questId: t.id,
        trackingCtx: a.useMemo(
            () => ({
                content: u.jn.REWARD_MODAL,
                ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: P,
                sourceQuestContent: n,
            }),
            [P, n],
        ),
    });
    return (0, r.jsxs)("div", {
        className: v.container,
        children: [
            (0, r.jsx)(h.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, r.jsx)(x.Z, {
                        quest: t,
                        imageSize: {
                            width: 908,
                            height: 380,
                        },
                        containerClassName: v.heroDisplayContainer,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, r.jsx)("div", {
                className: v.partnerLogotypeContainer,
                children: (0, r.jsx)(h.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: v.partnerLogotype,
                            alt: b.intl.formatToPlainString(b.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, m.fh)(t, m.eC.LOGO_TYPE, _).url,
                        }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.partnerContentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: v.partnerCopyContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: v.partnerTitle,
                                children: b.intl.format(b.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, r.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: E,
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: v.partnerGameTile,
                                alt: b.intl.formatToPlainString(b.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, m.fh)(t, m.eC.GAME_TILE, _).url,
                            }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: v.bottomContainer,
                children: (0, r.jsxs)(o.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        A &&
                            (0, r.jsx)(s.u, {
                                text: b.intl.string(b.t.WmfZHZ),
                                children: (0, r.jsx)(o.hU, {
                                    icon: o.xPt,
                                    onClick: D,
                                    "aria-label": b.intl.string(b.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            text: N,
                            onClick: () => {
                                (0, C.nc)(t, {
                                    content: u.jn.REWARD_MODAL,
                                    ctaContent: c.jZ.OPEN_GAME_LINK,
                                    impressionId: P,
                                    sourceQuestContent: n,
                                });
                            },
                            fullWidth: !0,
                            icon: o.zFc,
                            iconPosition: "end",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function O(e) {
    let { quest: t, location: n } = e;
    return (0, r.jsx)(h.x8, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, r.jsx)(
            w,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
