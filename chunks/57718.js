n.d(e, { Ay: () => I, C8: () => x });
var s,
    i = n(627968);
n(64700);
var a = n(503698),
    o = n.n(a),
    l = n(873174),
    r = n(661531),
    u = n(462887),
    c = n(401432),
    C = n(31587),
    d = n(551875),
    E = n(241124),
    A = n(652215),
    T = n(880005),
    x = (((s = {})[(s.SMALL = 2)] = "SMALL"), (s[(s.MEDIUM = 8)] = "MEDIUM"), s);
let I = function (t) {
    let {
            className: e,
            logotypeClassName: n,
            gameTileSize: s = 24,
            quest: a,
            separatorSpacing: x = 2,
            theme: I = A.NJ8.DARK,
            withCosponsor: _ = !0,
            withGameTile: h = !0,
            logotypeStyle: g,
            onLoadComplete: N,
        } = t,
        L = (0, u.M)(I) ? A.NJ8.DARK : A.NJ8.LIGHT,
        f = (0, C.a5)(a.id, L),
        y = _ && null != a.config.cosponsorMetadata && null != f;
    return (0, i.jsxs)("div", {
        className: o()(T.Iu, e),
        children: [
            h &&
                (0, i.jsx)(E.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: T._Y,
                            alt: "",
                            src: (0, d.tW)(a, d.fY.GAME_TILE, L).url,
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
                            onLoad: N,
                        }),
                }),
            (0, i.jsx)(E.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (t) =>
                    (0, i.jsx)(l.animated.img, {
                        ref: t,
                        className: o()(T.lW, n, { [T.TO]: y }),
                        style: g,
                        alt: a.config.messages.gameTitle,
                        src: (0, d.tW)(a, d.fY.LOGO_TYPE, L).url,
                        onLoad: N,
                    }),
            }),
            y &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", {
                            className: T.ub,
                            style: { margin: `0 ${x}px` },
                            children: (0, i.jsx)(c.a, { className: T.JB, color: r.A.colors.WHITE }),
                        }),
                        (0, i.jsx)(E.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (t) =>
                                (0, i.jsx)(l.animated.img, {
                                    ref: t,
                                    className: o()(T.lW, T.TO, n),
                                    style: g,
                                    alt: a.config.cosponsorMetadata?.name ?? "",
                                    src: f.url,
                                    onLoad: N,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
