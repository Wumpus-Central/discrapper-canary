n.d(t, { Z: () => O });
var r = n(54381),
    a = n(473749),
    i = n(319245),
    o = n(793030),
    s = n(681715),
    l = n(410030),
    c = n(624138),
    d = n(617136),
    u = n(915750),
    m = n(509212),
    p = n(113434),
    C = n(497505),
    f = n(475595),
    h = n(566078),
    j = n(477005),
    x = n(78826),
    y = n(667105),
    g = n(46140),
    v = n(231338),
    b = n(388032),
    _ = n(985952);
function w(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: w } = e,
        O = (0, l.ZP)(),
        P = (0, o.wjy)(O) ? v.BR.DARK : v.BR.LIGHT,
        N = (0, p.ly)(t),
        E = (0, u.aM)(),
        T = (0, m.vB)(t.config),
        D = a.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            if (null != n) return n;
            let r = h.r.build(t.config),
                a = r.defaultWatchVideoTask,
                o = null == a ? void 0 : a.messages.videoEndCtaSubtitle;
            return (0, c.Ew)(o)
                ? r.questType !== i.W.GAMEPLAY || t.config.features.includes(g.S7.NON_GAMING_PLAY_QUEST) || (0, m.Pb)(t)
                    ? b.intl.string(b.t.y8Xf3k)
                    : b.intl.string(b.t["wirwN+"])
                : o;
        }, [t]),
        { isLoading: I } = (0, x.d7)();
    a.useEffect(() => {
        I || w();
    }, [I, w]);
    let A = (0, y.yc)({
        isShareable: T,
        questId: t.id,
        trackingCtx: a.useMemo(
            () => ({
                content: C.jn.REWARD_MODAL,
                ctaContent: d.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: E,
                sourceQuestContent: n,
            }),
            [E, n],
        ),
    });
    return (0, r.jsxs)("div", {
        className: _.container,
        children: [
            (0, r.jsx)(x.Fl, {
                id: "hero-display",
                children: (e) =>
                    (0, r.jsx)(j.Z, {
                        quest: t,
                        imageSize: {
                            width: 908,
                            height: 380,
                        },
                        containerClassName: _.heroDisplayContainer,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, r.jsx)("div", {
                className: _.partnerLogotypeContainer,
                children: (0, r.jsx)(x.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: _.partnerLogotype,
                            alt: b.intl.formatToPlainString(b.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, f.fh)(t, f.eC.LOGO_TYPE, P).url,
                        }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: _.partnerContentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.partnerCopyContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: _.partnerTitle,
                                children: t.config.messages.questName,
                            }),
                            (0, r.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: D,
                            }),
                        ],
                    }),
                    (0, r.jsx)(x.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: _.partnerGameTile,
                                alt: b.intl.formatToPlainString(b.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, f.fh)(t, f.eC.GAME_TILE, P).url,
                            }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: _.bottomContainer,
                children: (0, r.jsxs)(o.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        T &&
                            (0, r.jsx)(s.u, {
                                text: b.intl.string(b.t.WmfZHZ),
                                children: (0, r.jsx)(o.hU, {
                                    icon: o.xPt,
                                    onClick: A,
                                    "aria-label": b.intl.string(b.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            text: N,
                            onClick: () => {
                                (0, m.nc)(t, {
                                    content: C.jn.REWARD_MODAL,
                                    ctaContent: d.jZ.OPEN_GAME_LINK,
                                    impressionId: E,
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
    return (0, r.jsx)(x.p, {
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
