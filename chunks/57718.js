n.d(e, { Ay: () => A, C8: () => h });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(487514),
    o = n(661531),
    u = n(462887),
    c = n(401432),
    d = n(890687),
    E = n(859387),
    C = n(241124),
    _ = n(652215),
    T = n(880005),
    h = (((i = {})[(i.SMALL = 2)] = "SMALL"), (i[(i.MEDIUM = 8)] = "MEDIUM"), i);
let A = function (t) {
    let {
            className: e,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: s,
            separatorSpacing: h = 2,
            theme: A = _.NJ8.DARK,
            withCosponsor: I = !0,
            withGameTile: f = !0,
            logotypeStyle: g,
            onLoadComplete: S,
        } = t,
        p = (0, u.M)(A) ? _.NJ8.DARK : _.NJ8.LIGHT,
        N = (0, d.a5)(s.id, p),
        m = I && null != s.config.cosponsorMetadata && null != N;
    return (0, l.jsxs)("div", {
        className: r()(T.Iu, e),
        children: [
            f &&
                (0, l.jsx)(C.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (t) =>
                        (0, l.jsx)("img", {
                            ref: t,
                            className: T._Y,
                            alt: "",
                            src: (0, E.tW)(s, E.fY.GAME_TILE, p).url,
                            style: {
                                borderRadius: (function (t) {
                                    switch (t) {
                                        case 24:
                                            return 3;
                                        case 32:
                                            return 4;
                                    }
                                })(i),
                                width: i,
                                height: i,
                            },
                            onLoad: S,
                        }),
                }),
            (0, l.jsx)(C.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (t) =>
                    (0, l.jsx)(a.animated.img, {
                        ref: t,
                        className: r()(T.lW, n, { [T.TO]: m }),
                        style: g,
                        alt: s.config.messages.gameTitle,
                        src: (0, E.tW)(s, E.fY.LOGO_TYPE, p).url,
                        onLoad: S,
                    }),
            }),
            m &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("div", {
                            className: T.ub,
                            style: { margin: `0 ${h}px` },
                            children: (0, l.jsx)(c.a, { className: T.JB, color: o.A.colors.WHITE }),
                        }),
                        (0, l.jsx)(C.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (t) =>
                                (0, l.jsx)(a.animated.img, {
                                    ref: t,
                                    className: r()(T.lW, T.TO, n),
                                    style: g,
                                    alt: s.config.cosponsorMetadata?.name ?? "",
                                    src: N.url,
                                    onLoad: S,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
