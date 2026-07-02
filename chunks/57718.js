n.d(e, { Ay: () => I, C8: () => _ });
var s,
    i = n(627968);
n(64700);
var a = n(503698),
    o = n.n(a),
    r = n(18005),
    l = n(661531),
    u = n(462887),
    c = n(401432),
    C = n(347135),
    E = n(46948),
    d = n(557637),
    A = n(652215),
    T = n(880005),
    _ = (((s = {})[(s.SMALL = 2)] = "SMALL"), (s[(s.MEDIUM = 8)] = "MEDIUM"), s);
let I = function (t) {
    let {
            className: e,
            logotypeClassName: n,
            gameTileSize: s = 24,
            quest: a,
            separatorSpacing: _ = 2,
            theme: I = A.NJ8.DARK,
            withCosponsor: x = !0,
            withGameTile: L = !0,
            logotypeStyle: N,
            onLoadComplete: O,
        } = t,
        f = (0, u.M)(I) ? A.NJ8.DARK : A.NJ8.LIGHT,
        g = (0, C.a5)(a.id, f),
        R = x && null != a.config.cosponsorMetadata && null != g;
    return (0, i.jsxs)("div", {
        className: o()(T.Iu, e),
        children: [
            L &&
                (0, i.jsx)(d._M, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: T._Y,
                            alt: "",
                            src: (0, E.tW)(a, E.fY.GAME_TILE, f).url,
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
                            onLoad: O,
                        }),
                }),
            (0, i.jsx)(d._M, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (t) =>
                    (0, i.jsx)(r.animated.img, {
                        ref: t,
                        className: o()(T.lW, n, { [T.TO]: R }),
                        style: N,
                        alt: a.config.messages.gameTitle,
                        src: (0, E.tW)(a, E.fY.LOGO_TYPE, f).url,
                        onLoad: O,
                    }),
            }),
            R &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", {
                            className: T.ub,
                            style: { margin: `0 ${_}px` },
                            children: (0, i.jsx)(c.a, { className: T.JB, color: l.A.colors.WHITE }),
                        }),
                        (0, i.jsx)(d._M, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (t) =>
                                (0, i.jsx)(r.animated.img, {
                                    ref: t,
                                    className: o()(T.lW, T.TO, n),
                                    style: N,
                                    alt: a.config.cosponsorMetadata?.name ?? "",
                                    src: g.url,
                                    onLoad: O,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
