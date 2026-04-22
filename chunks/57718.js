n.d(t, { Ay: () => x, C8: () => f, LU: () => A });
var i,
    l,
    a = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    o = n(517738),
    d = n(827734),
    c = n(462887),
    u = n(401432),
    m = n(890687),
    _ = n(579473),
    h = n(241124),
    p = n(652215),
    g = n(880005),
    A = (((i = {})[(i.SMALL = 24)] = "SMALL"), (i[(i.MEDIUM = 32)] = "MEDIUM"), i),
    f = (((l = {})[(l.SMALL = 2)] = "SMALL"), (l[(l.MEDIUM = 8)] = "MEDIUM"), l);
let x = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: l,
            separatorSpacing: s = 2,
            theme: A = p.NJ8.DARK,
            withCosponsor: f = !0,
            withGameTile: x = !0,
            logotypeStyle: C,
            onLoadComplete: E,
        } = e,
        I = (0, c.M)(A) ? p.NJ8.DARK : p.NJ8.LIGHT,
        v = (0, m.a5)(l.id, I),
        b = f && null != l.config.cosponsorMetadata && null != v;
    return (0, a.jsxs)("div", {
        className: r()(g.Iu, t),
        children: [
            x &&
                (0, a.jsx)(h.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, a.jsx)("img", {
                            ref: e,
                            className: g._Y,
                            alt: "",
                            src: (0, _.tW)(l, _.fY.GAME_TILE, I).url,
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
                            onLoad: E,
                        }),
                }),
            (0, a.jsx)(h.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, a.jsx)(o.animated.img, {
                        ref: e,
                        className: r()(g.lW, n, { [g.TO]: b }),
                        style: C,
                        alt: l.config.messages.gameTitle,
                        src: (0, _.tW)(l, _.fY.LOGO_TYPE, I).url,
                        onLoad: E,
                    }),
            }),
            b &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: g.ub,
                            style: { margin: `0 ${s}px` },
                            children: (0, a.jsx)(u.a, { className: g.JB, color: d.A.colors.WHITE }),
                        }),
                        (0, a.jsx)(h.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) =>
                                (0, a.jsx)(o.animated.img, {
                                    ref: e,
                                    className: r()(g.lW, g.TO, n),
                                    style: C,
                                    alt: l.config.cosponsorMetadata?.name ?? "",
                                    src: v.url,
                                    onLoad: E,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
