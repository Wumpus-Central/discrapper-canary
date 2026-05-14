"use strict";
n.d(t, { Ay: () => m, C8: () => E });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(661531),
    u = n(462887),
    c = n(401432),
    d = n(31587),
    _ = n(859387),
    f = n(241124),
    h = n(652215),
    p = n(880005),
    E = (((i = {})[(i.SMALL = 2)] = "SMALL"), (i[(i.MEDIUM = 8)] = "MEDIUM"), i);
let m = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: s,
            separatorSpacing: E = 2,
            theme: m = h.NJ8.DARK,
            withCosponsor: g = !0,
            withGameTile: A = !0,
            logotypeStyle: I,
            onLoadComplete: T,
        } = e,
        S = (0, u.M)(m) ? h.NJ8.DARK : h.NJ8.LIGHT,
        N = (0, d.a5)(s.id, S),
        y = g && null != s.config.cosponsorMetadata && null != N;
    return (0, r.jsxs)("div", {
        className: a()(p.Iu, t),
        children: [
            A &&
                (0, r.jsx)(f.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: p._Y,
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
            (0, r.jsx)(f.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, r.jsx)(o.animated.img, {
                        ref: e,
                        className: a()(p.lW, n, { [p.TO]: y }),
                        style: I,
                        alt: s.config.messages.gameTitle,
                        src: (0, _.tW)(s, _.fY.LOGO_TYPE, S).url,
                        onLoad: T,
                    }),
            }),
            y &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: p.ub,
                            style: { margin: `0 ${E}px` },
                            children: (0, r.jsx)(c.a, { className: p.JB, color: l.A.colors.WHITE }),
                        }),
                        (0, r.jsx)(f.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) =>
                                (0, r.jsx)(o.animated.img, {
                                    ref: e,
                                    className: a()(p.lW, p.TO, n),
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
