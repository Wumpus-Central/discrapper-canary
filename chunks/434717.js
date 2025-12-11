n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(319245),
    o = n(793030),
    s = n(681715),
    l = n(410030),
    c = n(617136),
    d = n(915750),
    u = n(49436),
    m = n(475595),
    b = n(304696),
    f = n(387745),
    x = n(283689),
    p = n(455357),
    C = n(477005),
    g = n(659302),
    h = n(324805),
    j = n(231338),
    v = n(388032),
    N = n(563812);
function y(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: y } = e,
        _ = (0, l.ZP)(),
        w = (0, o.wjy)(_) ? j.BR.DARK : j.BR.LIGHT,
        T = (0, b.V_)(t),
        A = (0, d.aM)(),
        P = (0, x.VB)(t.config),
        D = i.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            return null != n
                ? n
                : (0, x.BI)(t.config) !== a.W.GAMEPLAY ||
                    t.config.features.includes(h.S7.NON_GAMING_PLAY_QUEST) ||
                    (0, x.Pb)(t)
                  ? v.intl.string(v.t.y8Xf3k)
                  : v.intl.string(v.t["wirwN+"]);
        }, [t]),
        { isLoading: E } = (0, p.kC)();
    i.useEffect(() => {
        E || y();
    }, [E, y]);
    let L = (0, g.yc)({
        isShareable: P,
        questId: t.id,
        trackingCtx: i.useMemo(
            () => ({
                content: u.jn.REWARD_MODAL,
                ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: A,
                sourceQuestContent: n,
            }),
            [A, n],
        ),
    });
    return (0, r.jsxs)("div", {
        className: N.container,
        children: [
            (0, r.jsx)(p.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, r.jsx)(C.Z, {
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
            (0, r.jsx)("div", {
                className: N.partnerLogotypeContainer,
                children: (0, r.jsx)(p.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: N.partnerLogotype,
                            alt: v.intl.formatToPlainString(v.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, m.fh)(t, m.eC.LOGO_TYPE, w).url,
                        }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: N.partnerContentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: N.partnerCopyContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: N.partnerTitle,
                                children: v.intl.format(v.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, r.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: D,
                            }),
                        ],
                    }),
                    (0, r.jsx)(p.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: N.partnerGameTile,
                                alt: v.intl.formatToPlainString(v.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, m.fh)(t, m.eC.GAME_TILE, w).url,
                            }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: N.bottomContainer,
                children: (0, r.jsxs)(o.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        P &&
                            (0, r.jsx)(s.u, {
                                text: v.intl.string(v.t.WmfZHZ),
                                children: (0, r.jsx)(o.hU, {
                                    icon: o.xPt,
                                    onClick: L,
                                    "aria-label": v.intl.string(v.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            text: T,
                            onClick: () => {
                                (0, f.nc)(t, {
                                    content: u.jn.REWARD_MODAL,
                                    ctaContent: c.jZ.OPEN_GAME_LINK,
                                    impressionId: A,
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
function _(e) {
    let { quest: t, location: n } = e;
    return (0, r.jsx)(p.x8, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, r.jsx)(
            y,
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
