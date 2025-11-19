n.d(t, {
    US: () => m,
    ZP: () => E,
    fF: () => h,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(790519),
    s = n(692547),
    l = n(780384),
    c = n(481060),
    u = n(113434),
    d = n(475595),
    f = n(78826),
    _ = n(981631),
    p = n(593710),
    h = (function (e) {
        return (e[(e.SMALL = 24)] = "SMALL"), (e[(e.MEDIUM = 32)] = "MEDIUM"), e;
    })({}),
    m = (function (e) {
        return (e[(e.SMALL = 2)] = "SMALL"), (e[(e.MEDIUM = 8)] = "MEDIUM"), e;
    })({});
function g(e) {
    switch (e) {
        case 24:
            return 3;
        case 32:
            return 4;
    }
}
let E = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: h,
            separatorSpacing: m = 2,
            theme: E = _.BRd.DARK,
            withCosponsor: b = !0,
            withGameTile: y = !0,
            logotypeStyle: O,
            onLoadComplete: v,
        } = e,
        I = (0, l.wj)(E) ? _.BRd.DARK : _.BRd.LIGHT,
        T = (0, u.Gd)(h.id, I),
        S = b && null != h.config.cosponsorMetadata && null != T;
    return (0, r.jsxs)("div", {
        className: a()(p.partnerBranding, t),
        children: [
            y &&
                (0, r.jsx)(f.Fl, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: p.partnerBrandingGameTile,
                            alt: "",
                            src: (0, d.fh)(h, d.eC.GAME_TILE, I).url,
                            style: {
                                borderRadius: g(i),
                                width: i,
                                height: i,
                            },
                            onLoad: v,
                        }),
                }),
            (0, r.jsx)(f.Fl, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, r.jsx)(o.animated.img, {
                        ref: e,
                        className: a()(p.partnerBrandingLogotype, n, { [p.partnerBrandingLogotypeWithCosponsor]: S }),
                        style: O,
                        alt: h.config.messages.gameTitle,
                        src: (0, d.fh)(h, d.eC.LOGO_TYPE, I).url,
                        onLoad: v,
                    }),
            }),
            S &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: p.cosponsorBrandSeparatorWrapper,
                            style: { margin: "0 ".concat(m, "px") },
                            children: (0, r.jsx)(c.P$X, {
                                className: p.cosponsorBrandSeparator,
                                color: s.Z.colors.WHITE,
                            }),
                        }),
                        (0, r.jsx)(f.Fl, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) => {
                                var t, i;
                                return (0, r.jsx)(o.animated.img, {
                                    ref: e,
                                    className: a()(
                                        p.partnerBrandingLogotype,
                                        p.partnerBrandingLogotypeWithCosponsor,
                                        n,
                                    ),
                                    style: O,
                                    alt:
                                        null != (i = null == (t = h.config.cosponsorMetadata) ? void 0 : t.name)
                                            ? i
                                            : "",
                                    src: T.url,
                                    onLoad: v,
                                });
                            },
                        }),
                    ],
                }),
        ],
    });
};
