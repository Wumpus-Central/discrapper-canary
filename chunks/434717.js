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
    v = n(388032),
    g = n(985952);
function b(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: b } = e,
        _ = (0, s.ZP)(),
        w = (0, o.wjy)(_) ? x.BR.DARK : x.BR.LIGHT,
        O = (0, m.ly)(t),
        P = (0, u.aM)(),
        N = a.useMemo(() => {
            let e = f.r.build(t.config),
                n = e.defaultWatchVideoTask,
                r = null == n ? void 0 : n.messages.videoEndCtaSubtitle;
            return (0, l.Ew)(r)
                ? e.questType !== i.W.GAMEPLAY || t.config.features.includes(y.S7.NON_GAMING_PLAY_QUEST) || (0, d.Pb)(t)
                    ? v.intl.string(v.t.y8Xf3t)
                    : v.intl.string(v.t.wirwNz)
                : r;
        }, [t]),
        { isLoading: T } = (0, j.d7)();
    return (
        a.useEffect(() => {
            T || b();
        }, [T, b]),
        (0, r.jsxs)("div", {
            className: g.container,
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
                            containerClassName: g.heroDisplayContainer,
                            isInteracting: !0,
                            assetRef: e,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: g.partnerLogotypeContainer,
                    children: (0, r.jsx)(j.Fl, {
                        id: "partner-logotype",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: g.partnerLogotype,
                                alt: v.intl.formatToPlainString(v.t.rtm15O, { name: t.config.messages.gameTitle }),
                                src: (0, C.fh)(t, C.eC.LOGO_TYPE, w).url,
                            }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: g.partnerContentContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: g.partnerCopyContainer,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    className: g.partnerTitle,
                                    children: t.config.messages.questName,
                                }),
                                (0, r.jsx)(o.xvT, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    children: N,
                                }),
                            ],
                        }),
                        (0, r.jsx)(j.Fl, {
                            id: "partner-game-tile",
                            children: (e) =>
                                (0, r.jsx)("img", {
                                    ref: e,
                                    className: g.partnerGameTile,
                                    alt: v.intl.formatToPlainString(v.t.rtm15O, { name: t.config.messages.gameTitle }),
                                    src: (0, C.fh)(t, C.eC.GAME_TILE, w).url,
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: g.partnerCtaContainer,
                    children: (0, r.jsx)(o.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: O,
                        onClick: () => {
                            (0, d.nc)(t, {
                                content: p.jn.REWARD_MODAL,
                                ctaContent: c.jZ.OPEN_GAME_LINK,
                                impressionId: P,
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
