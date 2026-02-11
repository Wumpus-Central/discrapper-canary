n.d(t, { Ay: () => x, C8: () => f, LU: () => A });
var i,
    l,
    a = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    o = n(563495),
    d = n(827734),
    c = n(582754),
    u = n(397927),
    m = n(890687),
    _ = n(579473),
    h = n(241124),
    p = n(652215),
    g = n(428246),
    A = (((i = {})[(i.SMALL = 24)] = "SMALL"), (i[(i.MEDIUM = 32)] = "MEDIUM"), i),
    f = (((l = {})[(l.SMALL = 2)] = "SMALL"), (l[(l.MEDIUM = 8)] = "MEDIUM"), l);
let x = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: l,
            separatorSpacing: r = 2,
            theme: A = p.NJ8.DARK,
            withCosponsor: f = !0,
            withGameTile: x = !0,
            logotypeStyle: E,
            onLoadComplete: C,
        } = e,
        I = (0, c.Mw)(A) ? p.NJ8.DARK : p.NJ8.LIGHT,
        T = (0, m.a5)(l.id, I),
        v = f && null != l.config.cosponsorMetadata && null != T;
    return (0, a.jsxs)("div", {
        className: s()(g.Iu, t),
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
                            onLoad: C,
                        }),
                }),
            (0, a.jsx)(h.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, a.jsx)(o.animated.img, {
                        ref: e,
                        className: s()(g.lW, n, { [g.TO]: v }),
                        style: E,
                        alt: l.config.messages.gameTitle,
                        src: (0, _.tW)(l, _.fY.LOGO_TYPE, I).url,
                        onLoad: C,
                    }),
            }),
            v &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: g.ub,
                            style: { margin: `0 ${r}px` },
                            children: (0, a.jsx)(u.aoi, { className: g.JB, color: d.A.colors.WHITE }),
                        }),
                        (0, a.jsx)(h.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) =>
                                (0, a.jsx)(o.animated.img, {
                                    ref: e,
                                    className: s()(g.lW, g.TO, n),
                                    style: E,
                                    alt: l.config.cosponsorMetadata?.name ?? "",
                                    src: T.url,
                                    onLoad: C,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
