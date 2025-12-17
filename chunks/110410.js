n.d(t, { Z: () => y });
var a = n(54381),
    r = n(473749),
    i = n(319245),
    o = n(793030),
    s = n(681715),
    l = n(410030),
    c = n(617136),
    d = n(915750),
    u = n(49436),
    m = n(475595),
    f = n(304696),
    x = n(387745),
    p = n(283689),
    C = n(455357),
    g = n(477005),
    h = n(659302),
    j = n(324805),
    b = n(231338),
    v = n(388032),
    N = n(556463);
function _(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: _ } = e,
        y = (0, l.ZP)(),
        w = (0, o.wjy)(y) ? b.BR.DARK : b.BR.LIGHT,
        A = (0, f.V_)(t),
        T = (0, d.aM)(),
        P = (0, p.VB)(t.config),
        D = r.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            return null != n
                ? n
                : (0, p.BI)(t.config) !== i.W.GAMEPLAY ||
                    t.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST) ||
                    (0, p.Pb)(t)
                  ? v.intl.string(v.t.y8Xf3k)
                  : v.intl.string(v.t["wirwN+"]);
        }, [t]),
        { isLoading: E } = (0, C.kC)();
    r.useEffect(() => {
        E || _();
    }, [E, _]);
    let L = (0, h.yc)({
        isShareable: P,
        questId: t.id,
        trackingCtx: r.useMemo(
            () => ({
                content: u.jn.REWARD_MODAL,
                ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: T,
                sourceQuestContent: n,
            }),
            [T, n],
        ),
    });
    return (0, a.jsxs)("div", {
        className: N.container,
        children: [
            (0, a.jsx)(C.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, a.jsx)(g.Z, {
                        quest: t,
                        imageSize: {
                            width: 908,
                            height: 380,
                        },
                        containerClassName: N.heroDisplayContainer,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, a.jsx)("div", {
                className: N.partnerLogotypeContainer,
                children: (0, a.jsx)(C.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, a.jsx)("img", {
                            ref: e,
                            className: N.partnerLogotype,
                            alt: v.intl.formatToPlainString(v.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, m.fh)(t, m.eC.LOGO_TYPE, w).url,
                        }),
                }),
            }),
            (0, a.jsxs)("div", {
                className: N.partnerContentContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: N.partnerCopyContainer,
                        children: [
                            (0, a.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: N.partnerTitle,
                                children: v.intl.format(v.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, a.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: D,
                            }),
                        ],
                    }),
                    (0, a.jsx)(C.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, a.jsx)("img", {
                                ref: e,
                                className: N.partnerGameTile,
                                alt: v.intl.formatToPlainString(v.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, m.fh)(t, m.eC.GAME_TILE, w).url,
                            }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: N.bottomContainer,
                children: (0, a.jsxs)(o.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        P &&
                            (0, a.jsx)(s.u, {
                                text: v.intl.string(v.t.WmfZHZ),
                                children: (0, a.jsx)(o.hU, {
                                    icon: o.xPt,
                                    onClick: L,
                                    "aria-label": v.intl.string(v.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, a.jsx)(o.zxk, {
                            variant: "primary",
                            text: A,
                            onClick: () => {
                                (0, x.nc)(t, {
                                    content: u.jn.REWARD_MODAL,
                                    ctaContent: c.jZ.OPEN_GAME_LINK,
                                    impressionId: T,
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
function y(e) {
    let { quest: t, location: n } = e;
    return (0, a.jsx)(C.x8, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, a.jsx)(
            _,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        a.forEach(function (t) {
                            var a;
                            (a = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = a);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
