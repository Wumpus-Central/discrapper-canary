n.d(e, { Ay: () => I, C8: () => x });
var s,
    i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(873174),
    o = n(661531),
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
            withGameTile: g = !0,
            logotypeStyle: L,
            onLoadComplete: f,
        } = t,
        h = (0, u.M)(I) ? A.NJ8.DARK : A.NJ8.LIGHT,
        O = (0, C.a5)(a.id, h),
        N = _ && null != a.config.cosponsorMetadata && null != O;
    return (0, i.jsxs)("div", {
        className: l()(T.Iu, e),
        children: [
            g &&
                (0, i.jsx)(E.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: T._Y,
                            alt: "",
                            src: (0, d.tW)(a, d.fY.GAME_TILE, h).url,
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
                            onLoad: f,
                        }),
                }),
            (0, i.jsx)(E.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (t) =>
                    (0, i.jsx)(r.animated.img, {
                        ref: t,
                        className: l()(T.lW, n, { [T.TO]: N }),
                        style: L,
                        alt: a.config.messages.gameTitle,
                        src: (0, d.tW)(a, d.fY.LOGO_TYPE, h).url,
                        onLoad: f,
                    }),
            }),
            N &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", {
                            className: T.ub,
                            style: { margin: `0 ${x}px` },
                            children: (0, i.jsx)(c.a, { className: T.JB, color: o.A.colors.WHITE }),
                        }),
                        (0, i.jsx)(E.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (t) =>
                                (0, i.jsx)(r.animated.img, {
                                    ref: t,
                                    className: l()(T.lW, T.TO, n),
                                    style: L,
                                    alt: a.config.cosponsorMetadata?.name ?? "",
                                    src: O.url,
                                    onLoad: f,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
