e.d(a, { Ay: () => L, C8: () => M });
var r,
    n = e(627968);
e(64700);
var t = e(503698),
    i = e.n(t),
    l = e(580929),
    c = e(661531),
    o = e(462887),
    d = e(401432),
    u = e(347135),
    g = e(46948),
    m = e(557637),
    h = e(652215),
    p = e(880005),
    M = (((r = {})[(r.SMALL = 2)] = "SMALL"), (r[(r.MEDIUM = 8)] = "MEDIUM"), r);
let L = function (s) {
    let {
            className: a,
            logotypeClassName: e,
            gameTileSize: r = 24,
            quest: t,
            separatorSpacing: M = 2,
            theme: L = h.NJ8.DARK,
            withCosponsor: x = !0,
            withGameTile: _ = !0,
            logotypeStyle: f,
            onLoadComplete: j,
        } = s,
        N = (0, o.M)(L) ? h.NJ8.DARK : h.NJ8.LIGHT,
        T = (0, u.a5)(t.id, N),
        y = x && null != t.config.cosponsorMetadata && null != T;
    return (0, n.jsxs)("div", {
        className: i()(p.Iu, a),
        children: [
            _ &&
                (0, n.jsx)(m._M, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (s) =>
                        (0, n.jsx)("img", {
                            ref: s,
                            className: p._Y,
                            alt: "",
                            src: (0, g.tW)(t, g.fY.GAME_TILE, N).url,
                            style: {
                                borderRadius: (function (s) {
                                    switch (s) {
                                        case 24:
                                            return 3;
                                        case 32:
                                            return 4;
                                    }
                                })(r),
                                width: r,
                                height: r,
                            },
                            onLoad: j,
                        }),
                }),
            (0, n.jsx)(m._M, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (s) =>
                    (0, n.jsx)(l.animated.img, {
                        ref: s,
                        className: i()(p.lW, e, { [p.TO]: y }),
                        style: f,
                        alt: t.config.messages.gameTitle,
                        src: (0, g.tW)(t, g.fY.LOGO_TYPE, N).url,
                        onLoad: j,
                    }),
            }),
            y &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("div", {
                            className: p.ub,
                            style: { margin: `0 ${M}px` },
                            children: (0, n.jsx)(d.a, { className: p.JB, color: c.A.colors.WHITE }),
                        }),
                        (0, n.jsx)(m._M, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (s) =>
                                (0, n.jsx)(l.animated.img, {
                                    ref: s,
                                    className: i()(p.lW, p.TO, e),
                                    style: f,
                                    alt: t.config.cosponsorMetadata?.name ?? "",
                                    src: T.url,
                                    onLoad: j,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
