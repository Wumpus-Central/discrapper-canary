var s,
    i = n(477900);
n(582128);
var o = n(503698),
    r = n.n(o),
    a = n(120692),
    l = n(646514),
    c = n(462887),
    u = n(401432),
    C = n(61387),
    d = n(760914),
    E = n(557637),
    x = n(652215),
    A = n(935250),
    I = (((s = {})[(s.SMALL = 2)] = "SMALL"), (s[(s.MEDIUM = 8)] = "MEDIUM"), s);
n.d(
    e,
    {},
    {
        Ay: function (t) {
            let {
                    className: e,
                    logotypeClassName: n,
                    gameTileSize: s = 24,
                    quest: o,
                    separatorSpacing: I = 2,
                    theme: f = x.NJ8.DARK,
                    withCosponsor: T = !0,
                    withGameTile: O = !0,
                    logotypeStyle: L,
                    onLoadComplete: y,
                } = t,
                g = (0, c.M)(f) ? x.NJ8.DARK : x.NJ8.LIGHT,
                m = (0, C.a5)(o.id, g),
                N = T && null != o.config.cosponsorMetadata && null != m;
            return (0, i.jsxs)("div", {
                className: r()(A.Iu, e),
                children: [
                    O &&
                        (0, i.jsx)(E._M, {
                            id: "QuestPartnerBranding_gameTile",
                            children: (t) =>
                                (0, i.jsx)("img", {
                                    ref: t,
                                    className: A._Y,
                                    alt: "",
                                    src: (0, d.tW)(o, d.fY.GAME_TILE, g).url,
                                    style: {
                                        borderRadius: (function (t) {
                                            switch (t) {
                                                case 24:
                                                    return 3;
                                                case 32:
                                                    return 4;
                                            }
                                        })(s),
                                        width: s,
                                        height: s,
                                    },
                                    onLoad: y,
                                }),
                        }),
                    (0, i.jsx)(E._M, {
                        id: "QuestPartnerBranding_gameLogotype",
                        children: (t) =>
                            (0, i.jsx)(a.animated.img, {
                                ref: t,
                                className: r()(A.lW, n, { [A.TO]: N }),
                                style: L,
                                alt: o.config.messages.gameTitle,
                                src: (0, d.tW)(o, d.fY.LOGO_TYPE, g).url,
                                onLoad: y,
                            }),
                    }),
                    N &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", {
                                    className: A.ub,
                                    style: { margin: `0 ${I}px` },
                                    children: (0, i.jsx)(u.XSmallBoldIcon, {
                                        className: A.JB,
                                        color: l.A.colors.WHITE,
                                    }),
                                }),
                                (0, i.jsx)(E._M, {
                                    id: "QuestPartnerBranding_cosponsorLogotype",
                                    children: (t) =>
                                        (0, i.jsx)(a.animated.img, {
                                            ref: t,
                                            className: r()(A.lW, A.TO, n),
                                            style: L,
                                            alt: o.config.cosponsorMetadata?.name ?? "",
                                            src: m.url,
                                            onLoad: y,
                                        }),
                                }),
                            ],
                        }),
                ],
            });
        },
        C8: I,
    },
);
