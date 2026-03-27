n.d(t, { Ay: () => f, C8: () => x, LU: () => A });
var i,
    a,
    r = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    o = n(880013),
    d = n(827734),
    c = n(582754),
    u = n(397927),
    _ = n(890687),
    m = n(579473),
    h = n(241124),
    p = n(652215),
    g = n(917094),
    A = (((i = {})[(i.SMALL = 24)] = "SMALL"), (i[(i.MEDIUM = 32)] = "MEDIUM"), i),
    x = (((a = {})[(a.SMALL = 2)] = "SMALL"), (a[(a.MEDIUM = 8)] = "MEDIUM"), a);
let f = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: a,
            separatorSpacing: l = 2,
            theme: A = p.NJ8.DARK,
            withCosponsor: x = !0,
            withGameTile: f = !0,
            logotypeStyle: C,
            onLoadComplete: I,
        } = e,
        E = (0, c.Mw)(A) ? p.NJ8.DARK : p.NJ8.LIGHT,
        b = (0, _.a5)(a.id, E),
        v = x && null != a.config.cosponsorMetadata && null != b;
    return (0, r.jsxs)("div", {
        className: s()(g.Iu, t),
        children: [
            f &&
                (0, r.jsx)(h.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: g._Y,
                            alt: "",
                            src: (0, m.tW)(a, m.fY.GAME_TILE, E).url,
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
                            onLoad: I,
                        }),
                }),
            (0, r.jsx)(h.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, r.jsx)(o.animated.img, {
                        ref: e,
                        className: s()(g.lW, n, { [g.TO]: v }),
                        style: C,
                        alt: a.config.messages.gameTitle,
                        src: (0, m.tW)(a, m.fY.LOGO_TYPE, E).url,
                        onLoad: I,
                    }),
            }),
            v &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: g.ub,
                            style: { margin: `0 ${l}px` },
                            children: (0, r.jsx)(u.aoi, { className: g.JB, color: d.A.colors.WHITE }),
                        }),
                        (0, r.jsx)(h.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) =>
                                (0, r.jsx)(o.animated.img, {
                                    ref: e,
                                    className: s()(g.lW, g.TO, n),
                                    style: C,
                                    alt: a.config.cosponsorMetadata?.name ?? "",
                                    src: b.url,
                                    onLoad: I,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
