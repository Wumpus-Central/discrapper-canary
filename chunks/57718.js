n.d(e, { Ay: () => x, C8: () => _ });
var s,
    i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    o = n(922139),
    r = n(661531),
    u = n(462887),
    c = n(401432),
    C = n(347135),
    E = n(551875),
    d = n(241124),
    A = n(652215),
    T = n(880005),
    _ = (((s = {})[(s.SMALL = 2)] = "SMALL"), (s[(s.MEDIUM = 8)] = "MEDIUM"), s);
let x = function (t) {
    let {
            className: e,
            logotypeClassName: n,
            gameTileSize: s = 24,
            quest: a,
            separatorSpacing: _ = 2,
            theme: x = A.NJ8.DARK,
            withCosponsor: I = !0,
            withGameTile: L = !0,
            logotypeStyle: O,
            onLoadComplete: g,
        } = t,
        h = (0, u.M)(x) ? A.NJ8.DARK : A.NJ8.LIGHT,
        N = (0, C.a5)(a.id, h),
        f = I && null != a.config.cosponsorMetadata && null != N;
    return (0, i.jsxs)("div", {
        className: l()(T.Iu, e),
        children: [
            L &&
                (0, i.jsx)(d.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: T._Y,
                            alt: "",
                            src: (0, E.tW)(a, E.fY.GAME_TILE, h).url,
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
                            onLoad: g,
                        }),
                }),
            (0, i.jsx)(d.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (t) =>
                    (0, i.jsx)(o.animated.img, {
                        ref: t,
                        className: l()(T.lW, n, { [T.TO]: f }),
                        style: O,
                        alt: a.config.messages.gameTitle,
                        src: (0, E.tW)(a, E.fY.LOGO_TYPE, h).url,
                        onLoad: g,
                    }),
            }),
            f &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", {
                            className: T.ub,
                            style: { margin: `0 ${_}px` },
                            children: (0, i.jsx)(c.a, { className: T.JB, color: r.A.colors.WHITE }),
                        }),
                        (0, i.jsx)(d.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (t) =>
                                (0, i.jsx)(o.animated.img, {
                                    ref: t,
                                    className: l()(T.lW, T.TO, n),
                                    style: O,
                                    alt: a.config.cosponsorMetadata?.name ?? "",
                                    src: N.url,
                                    onLoad: g,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
