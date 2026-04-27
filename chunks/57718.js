n.d(t, { Ay: () => f, C8: () => I, LU: () => A });
var i,
    r,
    s = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    d = n(487514),
    o = n(661531),
    _ = n(462887),
    u = n(401432),
    c = n(890687),
    E = n(859387),
    C = n(241124),
    h = n(652215),
    T = n(880005),
    A = (((i = {})[(i.SMALL = 24)] = "SMALL"), (i[(i.MEDIUM = 32)] = "MEDIUM"), i),
    I = (((r = {})[(r.SMALL = 2)] = "SMALL"), (r[(r.MEDIUM = 8)] = "MEDIUM"), r);
let f = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: r,
            separatorSpacing: l = 2,
            theme: A = h.NJ8.DARK,
            withCosponsor: I = !0,
            withGameTile: f = !0,
            logotypeStyle: m,
            onLoadComplete: g,
        } = e,
        p = (0, _.M)(A) ? h.NJ8.DARK : h.NJ8.LIGHT,
        S = (0, c.a5)(r.id, p),
        x = I && null != r.config.cosponsorMetadata && null != S;
    return (0, s.jsxs)("div", {
        className: a()(T.Iu, t),
        children: [
            f &&
                (0, s.jsx)(C.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, s.jsx)("img", {
                            ref: e,
                            className: T._Y,
                            alt: "",
                            src: (0, E.tW)(r, E.fY.GAME_TILE, p).url,
                            style: {
                                borderRadius: (function (e) {
                                    switch (e) {
                                        case 24:
                                            return 3;
                                        case 32:
                                            return 4;
                                    }
                                })(i),
                                width: i,
                                height: i,
                            },
                            onLoad: g,
                        }),
                }),
            (0, s.jsx)(C.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, s.jsx)(d.animated.img, {
                        ref: e,
                        className: a()(T.lW, n, { [T.TO]: x }),
                        style: m,
                        alt: r.config.messages.gameTitle,
                        src: (0, E.tW)(r, E.fY.LOGO_TYPE, p).url,
                        onLoad: g,
                    }),
            }),
            x &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("div", {
                            className: T.ub,
                            style: { margin: `0 ${l}px` },
                            children: (0, s.jsx)(u.a, { className: T.JB, color: o.A.colors.WHITE }),
                        }),
                        (0, s.jsx)(C.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) =>
                                (0, s.jsx)(d.animated.img, {
                                    ref: e,
                                    className: a()(T.lW, T.TO, n),
                                    style: m,
                                    alt: r.config.cosponsorMetadata?.name ?? "",
                                    src: S.url,
                                    onLoad: g,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
