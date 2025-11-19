n.d(t, { Z: () => w });
var r = n(54381),
    a = n(473749),
    i = n(319245),
    o = n(793030),
    s = n(681715),
    l = n(410030),
    c = n(624138),
    u = n(617136),
    d = n(915750),
    m = n(509212),
    p = n(113434),
    C = n(497505),
    f = n(475595),
    h = n(477005),
    j = n(78826),
    x = n(667105),
    y = n(46140),
    g = n(231338),
    v = n(388032),
    b = n(985952);
function _(e) {
    let { quest: t, sourceQuestContent: n, onLoadComplete: _ } = e,
        w = (0, l.ZP)(),
        O = (0, o.wjy)(w) ? g.BR.DARK : g.BR.LIGHT,
        N = (0, p.ly)(t),
        P = (0, d.aM)(),
        E = (0, m.vB)(t.config),
        T = a.useMemo(() => {
            var e;
            let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
            if (null != n) return n;
            let r = (0, m.BI)(t.config),
                a = (0, m.z1)(t.config),
                o = null == a ? void 0 : a.messages.videoEndCtaSubtitle;
            return (0, c.Ew)(o)
                ? r !== i.W.GAMEPLAY || t.config.features.includes(y.S7.NON_GAMING_PLAY_QUEST) || (0, m.Pb)(t)
                    ? v.intl.string(v.t.y8Xf3k)
                    : v.intl.string(v.t["wirwN+"])
                : o;
        }, [t]),
        { isLoading: A } = (0, j.d7)();
    a.useEffect(() => {
        A || _();
    }, [A, _]);
    let I = (0, x.yc)({
        isShareable: E,
        questId: t.id,
        trackingCtx: a.useMemo(
            () => ({
                content: C.jn.REWARD_MODAL,
                ctaContent: u.jZ.REWARD_MODAL_COPY_LINK,
                impressionId: P,
                sourceQuestContent: n,
            }),
            [P, n],
        ),
    });
    return (0, r.jsxs)("div", {
        className: b.container,
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
                        containerClassName: b.heroDisplayContainer,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, r.jsx)("div", {
                className: b.partnerLogotypeContainer,
                children: (0, r.jsx)(j.Fl, {
                    id: "partner-logotype",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: b.partnerLogotype,
                            alt: v.intl.formatToPlainString(v.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: (0, f.fh)(t, f.eC.LOGO_TYPE, O).url,
                        }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: b.partnerContentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.partnerCopyContainer,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                className: b.partnerTitle,
                                children: v.intl.format(v.t.EAYZAr, { questName: t.config.messages.questName }),
                            }),
                            (0, r.jsx)(o.xvT, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: T,
                            }),
                        ],
                    }),
                    (0, r.jsx)(j.Fl, {
                        id: "partner-game-tile",
                        children: (e) =>
                            (0, r.jsx)("img", {
                                ref: e,
                                className: b.partnerGameTile,
                                alt: v.intl.formatToPlainString(v.t.rtm15P, { name: t.config.messages.gameTitle }),
                                src: (0, f.fh)(t, f.eC.GAME_TILE, O).url,
                            }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: b.bottomContainer,
                children: (0, r.jsxs)(o.hE2, {
                    size: "sm",
                    direction: "horizontal",
                    fullWidth: !0,
                    fullWidthContainer: !0,
                    children: [
                        E &&
                            (0, r.jsx)(s.u, {
                                text: v.intl.string(v.t.WmfZHZ),
                                children: (0, r.jsx)(o.hU, {
                                    icon: o.xPt,
                                    onClick: I,
                                    "aria-label": v.intl.string(v.t.WmfZHZ),
                                    variant: "secondary",
                                }),
                            }),
                        (0, r.jsx)(o.zxk, {
                            variant: "primary",
                            text: N,
                            onClick: () => {
                                (0, m.nc)(t, {
                                    content: C.jn.REWARD_MODAL,
                                    ctaContent: u.jZ.OPEN_GAME_LINK,
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
function w(e) {
    let { quest: t, location: n } = e;
    return (0, r.jsx)(j.p, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, r.jsx)(
            _,
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
