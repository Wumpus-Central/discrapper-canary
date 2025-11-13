n.d(t, { Z: () => O });
var a = n(951288),
    r = n(647438),
    i = n(319245),
    s = n(793030),
    o = n(681715),
    l = n(410030),
    c = n(624138),
    d = n(617136),
    u = n(915750),
    m = n(509212),
    p = n(113434),
    b = n(497505),
    f = n(475595),
    h = n(566078),
    x = n(477005),
    C = n(78826),
    _ = n(667105),
    j = n(46140),
    g = n(231338),
    y = n(388032),
    v = n(985952);
function N(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: N } = e,
        O = (0, l.ZP)(),
        T = (0, s.wjy)(O) ? g.BR.DARK : g.BR.LIGHT,
        w = (0, p.ly)(t),
        P = (0, u.aM)(),
        S = (0, m.vB)(t.config),
        L = r.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            if (null != n) return n;
            let a = h.r.build(t.config),
                r = a.defaultWatchVideoTask,
                s = null == r ? void 0 : r.messages.videoEndCtaSubtitle;
            return (0, c.Ew)(s)
                ? a.questType !== i.W.GAMEPLAY || t.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST) || (0, m.Pb)(t)
                    ? y.intl.string(y.t.y8Xf3k)
                    : y.intl.string(y.t["wirwN+"])
                : s;
        }, [t]),
        { isLoading: E } = (0, C.d7)();
    r.useEffect(() => {
        E || N();
    }, [E, N]);
    let R = (0, _.yc)({
        isShareable: S,
        questId: t.id,
        trackingCtx: r.useMemo(
            () => ({
                content: b.jn.REWARD_MODAL,
                ctaContent: d.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: P,
                sourceQuestContent: n,
            }),
            [P, n],
        ),
    });
    return (0, a.jsxs)("div", {
        className: v.container,
        children: [
            (0, a.jsx)(C.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, a.jsx)(x.Z, {
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
            (0, a.jsx)("div", {
                className: v.partnerLogotypeContainer,
                children: (0, a.jsx)(C.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, a.jsx)("img", {
                            ref: e,
                            className: v.partnerLogotype,
                            alt: y.intl.formatToPlainString(y.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, f.fh)(t, f.eC.LOGO_TYPE, T).url,
                        }),
                }),
            }),
            (0, a.jsxs)("div", {
                className: v.partnerContentContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: v.partnerCopyContainer,
                        children: [
                            (0, a.jsx)(s.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: v.partnerTitle,
                                children: t.config.messages.questName,
                            }),
                            (0, a.jsx)(s.xvT, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: L,
                            }),
                        ],
                    }),
                    (0, a.jsx)(C.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, a.jsx)("img", {
                                ref: e,
                                className: v.partnerGameTile,
                                alt: y.intl.formatToPlainString(y.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, f.fh)(t, f.eC.GAME_TILE, T).url,
                            }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: v.bottomContainer,
                children: (0, a.jsxs)(s.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        S &&
                            (0, a.jsx)(o.u, {
                                text: y.intl.string(y.t.WmfZHZ),
                                children: (0, a.jsx)(s.hU, {
                                    icon: s.xPt,
                                    onClick: R,
                                    "aria-label": y.intl.string(y.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, a.jsx)(s.zxk, {
                            variant: "primary",
                            text: w,
                            onClick: () => {
                                (0, m.nc)(t, {
                                    content: b.jn.REWARD_MODAL,
                                    ctaContent: d.jZ.OPEN_GAME_LINK,
                                    impressionId: P,
                                    sourceQuestContent: n,
                                });
                            },
                            fullWidth: !0,
                            icon: s.zFc,
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
    return (0, a.jsx)(C.p, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, a.jsx)(
            N,
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
