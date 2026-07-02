"use strict";
n.d(t, { Ay: () => m, C8: () => p });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(661531),
    u = n(462887),
    d = n(401432),
    c = n(347135),
    _ = n(46948),
    h = n(557637),
    f = n(652215),
    E = n(880005),
    p = (((i = {})[(i.SMALL = 2)] = "SMALL"), (i[(i.MEDIUM = 8)] = "MEDIUM"), i);
let m = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: s,
            separatorSpacing: p = 2,
            theme: m = f.NJ8.DARK,
            withCosponsor: g = !0,
            withGameTile: A = !0,
            logotypeStyle: I,
            onLoadComplete: T,
        } = e,
        S = (0, u.M)(m) ? f.NJ8.DARK : f.NJ8.LIGHT,
        N = (0, c.a5)(s.id, S),
        C = g && null != s.config.cosponsorMetadata && null != N;
    return (0, r.jsxs)("div", {
        className: a()(E.Iu, t),
        children: [
            A &&
                (0, r.jsx)(h._M, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: E._Y,
                            alt: "",
                            src: (0, _.tW)(s, _.fY.GAME_TILE, S).url,
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
                            onLoad: T,
                        }),
                }),
            (0, r.jsx)(h._M, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, r.jsx)(o.animated.img, {
                        ref: e,
                        className: a()(E.lW, n, { [E.TO]: C }),
                        style: I,
                        alt: s.config.messages.gameTitle,
                        src: (0, _.tW)(s, _.fY.LOGO_TYPE, S).url,
                        onLoad: T,
                    }),
            }),
            C &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: E.ub,
                            style: { margin: `0 ${p}px` },
                            children: (0, r.jsx)(d.a, { className: E.JB, color: l.A.colors.WHITE }),
                        }),
                        (0, r.jsx)(h._M, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) =>
                                (0, r.jsx)(o.animated.img, {
                                    ref: e,
                                    className: a()(E.lW, E.TO, n),
                                    style: I,
                                    alt: s.config.cosponsorMetadata?.name ?? "",
                                    src: N.url,
                                    onLoad: T,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
