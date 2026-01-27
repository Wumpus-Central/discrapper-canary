n.d(t, {
    Ay: () => A,
    C8: () => b,
    LU: () => _,
});
var r,
    i,
    l = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    o = n(108531),
    c = n(827734),
    u = n(582754),
    d = n(397927),
    p = n(890687),
    m = n(579473),
    f = n(241124),
    g = n(652215),
    h = n(995360),
    _ = (((r = {})[(r.SMALL = 24)] = "SMALL"), (r[(r.MEDIUM = 32)] = "MEDIUM"), r),
    b = (((i = {})[(i.SMALL = 2)] = "SMALL"), (i[(i.MEDIUM = 8)] = "MEDIUM"), i);
let A = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: r = 24,
            quest: i,
            separatorSpacing: a = 2,
            theme: _ = g.NJ8.DARK,
            withCosponsor: b = !0,
            withGameTile: A = !0,
            logotypeStyle: y,
            onLoadComplete: v,
        } = e,
        x = (0, u.Mw)(_) ? g.NJ8.DARK : g.NJ8.LIGHT,
        O = (0, p.a5)(i.id, x),
        E = b && null != i.config.cosponsorMetadata && null != O;
    return (0, l.jsxs)("div", {
        className: s()(h.Iu, t),
        children: [
            A &&
                (0, l.jsx)(f.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, l.jsx)("img", {
                            ref: e,
                            className: h._Y,
                            alt: "",
                            src: (0, m.tW)(i, m.fY.GAME_TILE, x).url,
                            style: {
                                borderRadius: (function (e) {
                                    switch (e) {
                                        case 24:
                                            return 3;
                                        case 32:
                                            return 4;
                                    }
                                })(r),
                                width: r,
                                height: r,
                            },
                            onLoad: v,
                        }),
                }),
            (0, l.jsx)(f.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, l.jsx)(o.animated.img, {
                        ref: e,
                        className: s()(h.lW, n, {
                            [h.TO]: E,
                        }),
                        style: y,
                        alt: i.config.messages.gameTitle,
                        src: (0, m.tW)(i, m.fY.LOGO_TYPE, x).url,
                        onLoad: v,
                    }),
            }),
            E &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("div", {
                            className: h.ub,
                            style: {
                                margin: "0 ".concat(a, "px"),
                            },
                            children: (0, l.jsx)(d.aoi, {
                                className: h.JB,
                                color: c.A.colors.WHITE,
                            }),
                        }),
                        (0, l.jsx)(f.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) => {
                                var t, r;
                                return (0, l.jsx)(o.animated.img, {
                                    ref: e,
                                    className: s()(h.lW, h.TO, n),
                                    style: y,
                                    alt:
                                        null != (t = null == (r = i.config.cosponsorMetadata) ? void 0 : r.name)
                                            ? t
                                            : "",
                                    src: O.url,
                                    onLoad: v,
                                });
                            },
                        }),
                    ],
                }),
        ],
    });
};
