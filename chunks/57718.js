n.d(e, { Ay: () => I, C8: () => f });
var s,
    i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    o = n(941143),
    l = n(661531),
    u = n(462887),
    c = n(401432),
    C = n(77870),
    d = n(291749),
    E = n(557637),
    x = n(652215),
    A = n(935250),
    f = (((s = {})[(s.SMALL = 2)] = "SMALL"), (s[(s.MEDIUM = 8)] = "MEDIUM"), s);
let I = function (t) {
    let {
            className: e,
            logotypeClassName: n,
            gameTileSize: s = 24,
            quest: r,
            separatorSpacing: f = 2,
            theme: I = x.NJ8.DARK,
            withCosponsor: T = !0,
            withGameTile: O = !0,
            logotypeStyle: L,
            onLoadComplete: g,
        } = t,
        y = (0, u.M)(I) ? x.NJ8.DARK : x.NJ8.LIGHT,
        N = (0, C.a5)(r.id, y),
        _ = T && null != r.config.cosponsorMetadata && null != N;
    return (0, i.jsxs)("div", {
        className: a()(A.Iu, e),
        children: [
            O &&
                (0, i.jsx)(E._M, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: A._Y,
                            alt: "",
                            src: (0, d.tW)(r, d.fY.GAME_TILE, y).url,
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
                            onLoad: g,
                        }),
                }),
            (0, i.jsx)(E._M, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (t) =>
                    (0, i.jsx)(o.animated.img, {
                        ref: t,
                        className: a()(A.lW, n, { [A.TO]: _ }),
                        style: L,
                        alt: r.config.messages.gameTitle,
                        src: (0, d.tW)(r, d.fY.LOGO_TYPE, y).url,
                        onLoad: g,
                    }),
            }),
            _ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", {
                            className: A.ub,
                            style: { margin: `0 ${f}px` },
                            children: (0, i.jsx)(c.a, { className: A.JB, color: l.A.colors.WHITE }),
                        }),
                        (0, i.jsx)(E._M, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (t) =>
                                (0, i.jsx)(o.animated.img, {
                                    ref: t,
                                    className: a()(A.lW, A.TO, n),
                                    style: L,
                                    alt: r.config.cosponsorMetadata?.name ?? "",
                                    src: N.url,
                                    onLoad: g,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
