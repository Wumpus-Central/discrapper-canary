n.d(e, { Ay: () => I, C8: () => x });
var s,
    i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    o = n(785651),
    r = n(661531),
    u = n(462887),
    c = n(401432),
    C = n(31587),
    d = n(859387),
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
            withCosponsor: g = !0,
            withGameTile: h = !0,
            logotypeStyle: f,
            onLoadComplete: _,
        } = t,
        N = (0, u.M)(I) ? A.NJ8.DARK : A.NJ8.LIGHT,
        L = (0, C.a5)(a.id, N),
        m = g && null != a.config.cosponsorMetadata && null != L;
    return (0, i.jsxs)("div", {
        className: l()(T.Iu, e),
        children: [
            h &&
                (0, i.jsx)(E.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: T._Y,
                            alt: "",
                            src: (0, d.tW)(a, d.fY.GAME_TILE, N).url,
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
                            onLoad: _,
                        }),
                }),
            (0, i.jsx)(E.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (t) =>
                    (0, i.jsx)(o.animated.img, {
                        ref: t,
                        className: l()(T.lW, n, { [T.TO]: m }),
                        style: f,
                        alt: a.config.messages.gameTitle,
                        src: (0, d.tW)(a, d.fY.LOGO_TYPE, N).url,
                        onLoad: _,
                    }),
            }),
            m &&
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
                                (0, i.jsx)(o.animated.img, {
                                    ref: t,
                                    className: l()(T.lW, T.TO, n),
                                    style: f,
                                    alt: a.config.cosponsorMetadata?.name ?? "",
                                    src: L.url,
                                    onLoad: _,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
