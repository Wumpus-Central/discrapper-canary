n.d(t, { Z: () => A });
var r = n(951288),
    a = n(647438),
    i = n(319245),
    l = n(793030),
    s = n(410030),
    o = n(624138),
    c = n(617136),
    d = n(915750),
    u = n(509212),
    _ = n(113434),
    h = n(497505),
    m = n(475595),
    C = n(566078),
    p = n(968435),
    f = n(78826),
    g = n(46140),
    E = n(231338),
    R = n(388032),
    b = n(834586);
function y(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: y } = e,
        A = (0, s.ZP)(),
        N = (0, l.wjy)(A) ? E.BR.DARK : E.BR.LIGHT,
        x = (0, _.ly)(t),
        v = (0, d.aM)(),
        S = a.useMemo(() => {
            let e = C.r.build(t.config),
                n = e.defaultWatchVideoTask,
                r = null == n ? void 0 : n.messages.videoEndCtaSubtitle;
            return (0, o.Ew)(r)
                ? e.questType !== i.W.GAMEPLAY || t.config.features.includes(g.S7.NON_GAMING_PLAY_QUEST) || (0, u.Pb)(t)
                    ? R.intl.string(R.t.y8Xf3t)
                    : R.intl.string(R.t.wirwNz)
                : r;
        }, [t]),
        { isLoading: j } = (0, f.d7)();
    return (
        a.useEffect(() => {
            j || y();
        }, [j, y]),
        (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsx)(f.Fl, {
                    id: "hero-display",
                    children: (e) =>
                        (0, r.jsx)(p.Z, {
                            quest: t,
                            dimensions: {
                                width: 908,
                                height: 380,
                            },
                            className: b.heroDisplayContainer,
                            assetRef: e,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: b.partnerLogotypeContainer,
                    children: (0, r.jsx)(f.Fl, {
                        id: "partner-logotype",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: b.partnerLogotype,
                                alt: R.intl.formatToPlainString(R.t.rtm15O, { name: t.config.messages.gameTitle }),
                                src: (0, m.fh)(t, m.eC.LOGO_TYPE, N).url,
                            }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: b.partnerContentContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: b.partnerCopyContainer,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: "heading-lg/bold",
                                    color: "header-primary",
                                    className: b.partnerTitle,
                                    children: t.config.messages.questName,
                                }),
                                (0, r.jsx)(l.xvT, {
                                    variant: "text-sm/medium",
                                    color: "text-secondary",
                                    children: S,
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.Fl, {
                            id: "partner-game-tile",
                            children: (e) =>
                                (0, r.jsx)("img", {
                                    ref: e,
                                    className: b.partnerGameTile,
                                    alt: R.intl.formatToPlainString(R.t.rtm15O, { name: t.config.messages.gameTitle }),
                                    src: (0, m.fh)(t, m.eC.GAME_TILE, N).url,
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: b.partnerCtaContainer,
                    children: (0, r.jsx)(l.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: x,
                        onClick: () => {
                            (0, u.nc)(t, {
                                content: h.jn.REWARD_MODAL,
                                ctaContent: c.jZ.OPEN_GAME_LINK,
                                impressionId: v,
                                sourceQuestContent: n,
                            });
                        },
                        fullWidth: !0,
                        icon: l.zFc,
                        iconPosition: "end",
                    }),
                }),
            ],
        })
    );
}
function A(e) {
    let { quest: t, location: n } = e;
    return (0, r.jsx)(f.p, {
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
