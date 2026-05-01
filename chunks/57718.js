n.d(e, { Ay: () => g, C8: () => E });
var s,
    i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(925747),
    o = n(661531),
    c = n(462887),
    u = n(401432),
    d = n(890687),
    C = n(859387),
    h = n(241124),
    A = n(652215),
    T = n(880005),
    E = (((s = {})[(s.SMALL = 2)] = "SMALL"), (s[(s.MEDIUM = 8)] = "MEDIUM"), s);
let g = function (t) {
    let {
            className: e,
            logotypeClassName: n,
            gameTileSize: s = 24,
            quest: l,
            separatorSpacing: E = 2,
            theme: g = A.NJ8.DARK,
            withCosponsor: f = !0,
            withGameTile: x = !0,
            logotypeStyle: m,
            onLoadComplete: I,
        } = t,
        p = (0, c.M)(g) ? A.NJ8.DARK : A.NJ8.LIGHT,
        v = (0, d.a5)(l.id, p),
        _ = f && null != l.config.cosponsorMetadata && null != v;
    return (0, i.jsxs)("div", {
        className: a()(T.Iu, e),
        children: [
            x &&
                (0, i.jsx)(h.Sn, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (t) =>
                        (0, i.jsx)("img", {
                            ref: t,
                            className: T._Y,
                            alt: "",
                            src: (0, C.tW)(l, C.fY.GAME_TILE, p).url,
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
                            onLoad: I,
                        }),
                }),
            (0, i.jsx)(h.Sn, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (t) =>
                    (0, i.jsx)(r.animated.img, {
                        ref: t,
                        className: a()(T.lW, n, { [T.TO]: _ }),
                        style: m,
                        alt: l.config.messages.gameTitle,
                        src: (0, C.tW)(l, C.fY.LOGO_TYPE, p).url,
                        onLoad: I,
                    }),
            }),
            _ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("div", {
                            className: T.ub,
                            style: { margin: `0 ${E}px` },
                            children: (0, i.jsx)(u.a, { className: T.JB, color: o.A.colors.WHITE }),
                        }),
                        (0, i.jsx)(h.Sn, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (t) =>
                                (0, i.jsx)(r.animated.img, {
                                    ref: t,
                                    className: a()(T.lW, T.TO, n),
                                    style: m,
                                    alt: l.config.cosponsorMetadata?.name ?? "",
                                    src: v.url,
                                    onLoad: I,
                                }),
                        }),
                    ],
                }),
        ],
    });
};
