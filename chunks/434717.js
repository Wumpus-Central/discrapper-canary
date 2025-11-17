n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    a = n(319245),
    o = n(793030),
    s = n(681715),
    l = n(410030),
    c = n(624138),
    d = n(617136),
    u = n(915750),
    m = n(509212),
    f = n(113434),
    p = n(497505),
    x = n(475595),
    h = n(566078),
    C = n(477005),
    g = n(78826),
    _ = n(667105),
    j = n(46140),
    v = n(231338),
    N = n(388032),
    y = n(985952);
function b(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: b } = e,
        w = (0, l.ZP)(),
        T = (0, o.wjy)(w) ? v.BR.DARK : v.BR.LIGHT,
        P = (0, f.ly)(t),
        A = (0, u.aM)(),
        E = (0, m.vB)(t.config),
        D = i.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            if (null != n) return n;
            let r = h.r.build(t.config),
                i = r.defaultWatchVideoTask,
                o = null == i ? void 0 : i.messages.videoEndCtaSubtitle;
            return (0, c.Ew)(o)
                ? r.questType !== a.W.GAMEPLAY || t.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST) || (0, m.Pb)(t)
                    ? N.intl.string(N.t.y8Xf3k)
                    : N.intl.string(N.t["wirwN+"])
                : o;
        }, [t]),
        { isLoading: L } = (0, g.d7)();
    i.useEffect(() => {
        L || b();
    }, [L, b]);
    let O = (0, _.yc)({
        isShareable: E,
        questId: t.id,
        trackingCtx: i.useMemo(
            () => ({
                content: p.jn.REWARD_MODAL,
                ctaContent: d.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: A,
                sourceQuestContent: n,
            }),
            [A, n],
        ),
    });
    return (0, r.jsxs)("div", {
        className: y.container,
        children: [
            (0, r.jsx)(g.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, r.jsx)(C.Z, {
                        quest: t,
                        imageSize: {
                            width: 908,
                            height: 380,
                        },
                        containerClassName: y.heroDisplayContainer,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, r.jsx)("div", {
                className: y.partnerLogotypeContainer,
                children: (0, r.jsx)(g.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: y.partnerLogotype,
                            alt: N.intl.formatToPlainString(N.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, x.fh)(t, x.eC.LOGO_TYPE, T).url,
                        }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: y.partnerContentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.partnerCopyContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: y.partnerTitle,
                                children: N.intl.format(N.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, r.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: D,
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: y.partnerGameTile,
                                alt: N.intl.formatToPlainString(N.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, x.fh)(t, x.eC.GAME_TILE, T).url,
                            }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: y.bottomContainer,
                children: (0, r.jsxs)(o.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        E &&
                            (0, r.jsx)(s.u, {
                                text: N.intl.string(N.t.WmfZHZ),
                                children: (0, r.jsx)(o.hU, {
                                    icon: o.xPt,
                                    onClick: O,
                                    "aria-label": N.intl.string(N.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            text: P,
                            onClick: () => {
                                (0, m.nc)(t, {
                                    content: p.jn.REWARD_MODAL,
                                    ctaContent: d.jZ.OPEN_GAME_LINK,
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
function w(e) {
    let { quest: t, location: n } = e;
    return (0, r.jsx)(g.p, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, r.jsx)(
            b,
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
