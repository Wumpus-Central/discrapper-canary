n.d(t, { Z: () => _ });
var r = n(951288),
    a = n(647438),
    i = n(319245),
    o = n(793030),
    s = n(410030),
    l = n(624138),
    c = n(617136),
    u = n(915750),
    d = n(509212),
    m = n(113434),
    p = n(497505),
    C = n(475595),
    f = n(566078),
    h = n(477005),
    j = n(78826),
    y = n(46140),
    x = n(231338),
    g = n(388032),
    v = n(985952);
function b(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: b } = e,
        _ = (0, s.ZP)(),
        w = (0, o.wjy)(_) ? x.BR.DARK : x.BR.LIGHT,
        O = (0, m.ly)(t),
        N = (0, u.aM)(),
        P = a.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            if (null != n) return n;
            let r = f.r.build(t.config),
                a = r.defaultWatchVideoTask,
                o = null == a ? void 0 : a.messages.videoEndCtaSubtitle;
            return (0, l.Ew)(o)
                ? r.questType !== i.W.GAMEPLAY || t.config.features.includes(y.S7.NON_GAMING_PLAY_QUEST) || (0, d.Pb)(t)
                    ? g.intl.string(g.t.y8Xf3t)
                    : g.intl.string(g.t.wirwNz)
                : o;
        }, [t]),
        { isLoading: T } = (0, j.d7)();
    return (
        a.useEffect(() => {
            T || b();
        }, [T, b]),
        (0, r.jsxs)("div", {
            className: v.container,
            children: [
                (0, r.jsx)(j.Fl, {
                    id: "hero-display",
                    children: (e) =>
                        (0, r.jsx)(h.Z, {
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
                    children: (0, r.jsx)(j.Fl, {
                        id: "partner-logotype",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: v.partnerLogotype,
                                alt: g.intl.formatToPlainString(g.t.rtm15O, { name: t.config.messages.gameTitle }),
                                src: (0, C.fh)(t, C.eC.LOGO_TYPE, w).url,
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
                                    color: "header-primary",
                                    className: v.partnerTitle,
                                    children: t.config.messages.questName,
                                }),
                                (0, r.jsx)(o.xvT, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    children: P,
                                }),
                            ],
                        }),
                        (0, r.jsx)(j.Fl, {
                            id: "partner-game-tile",
                            children: (e) =>
                                (0, r.jsx)("img", {
                                    ref: e,
                                    className: v.partnerGameTile,
                                    alt: g.intl.formatToPlainString(g.t.rtm15O, { name: t.config.messages.gameTitle }),
                                    src: (0, C.fh)(t, C.eC.GAME_TILE, w).url,
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: v.partnerCtaContainer,
                    children: (0, r.jsx)(o.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: O,
                        onClick: () => {
                            (0, d.nc)(t, {
                                content: p.jn.REWARD_MODAL,
                                ctaContent: c.jZ.OPEN_GAME_LINK,
                                impressionId: N,
                                sourceQuestContent: n,
                            });
                        },
                        fullWidth: !0,
                        icon: o.zFc,
                        iconPosition: "end",
                    }),
                }),
            ],
        })
    );
}
function _(e) {
    let { quest: t, location: n } = e;
    return (0, r.jsx)(j.p, {
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
