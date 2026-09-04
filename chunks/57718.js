n.d(e, { Ay: () => T, C8: () => I });
var s,
    i = n(477900);
n(582128);
var o = n(503698),
    r = n.n(o),
    a = n(74445),
    l = n(661531),
    u = n(462887),
    c = n(401432),
    C = n(309593),
    d = n(291749),
    E = n(557637),
    x = n(652215),
    A = n(935250),
    I = (((s = {})[(s.SMALL = 2)] = "SMALL"), (s[(s.MEDIUM = 8)] = "MEDIUM"), s);
let T = function (t) {
    let {
            className: e,
            logotypeClassName: n,
            gameTileSize: s = 24,
            quest: o,
            separatorSpacing: I = 2,
            theme: T = x.NJ8.DARK,
            withCosponsor: f = !0,
            withGameTile: O = !0,
            logotypeStyle: _,
            onLoadComplete: L,
        } = t,
        y = (0, u.M)(T) ? x.NJ8.DARK : x.NJ8.LIGHT,
        N = (0, C.a5)(o.id, y),
        g = f && null != o.config.cosponsorMetadata && null != N;
    return (0, i.jsxs)("div", {
        className: r()(A.Iu, e),
        children: [
            O &&
                (0, i.jsx)(E._M, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: A._Y,
                            alt: "",
                            src: (0, d.tW)(o, d.fY.GAME_TILE, y).url,
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
                            onLoad: L,
                        }),
                }),
            (0, i.jsx)(E._M, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (t) =>
                    (0, i.jsx)(a.animated.img, {
                        ref: t,
                        className: r()(A.lW, n, { [A.TO]: g }),
                        style: _,
                        alt: o.config.messages.gameTitle,
                        src: (0, d.tW)(o, d.fY.LOGO_TYPE, y).url,
                        onLoad: L,
                    }),
            }),
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", {
                            className: A.ub,
                            style: { margin: `0 ${I}px` },
                            children: (0, i.jsx)(c.a, { className: A.JB, color: l.A.colors.WHITE }),
                        }),
                        (0, i.jsx)(E._M, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (t) =>
                                (0, i.jsx)(a.animated.img, {
                                    ref: t,
                                    className: r()(A.lW, A.TO, n),
                                    style: _,
                                    alt: o.config.cosponsorMetadata?.name ?? "",
                                    src: N.url,
                                    onLoad: L,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
