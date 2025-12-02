n.d(t, {
    US: () => h,
    ZP: () => E,
    fF: () => m,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(205120),
    s = n(692547),
    l = n(780384),
    c = n(481060),
    u = n(968843),
    d = n(475595),
    f = n(455357),
    p = n(981631),
    _ = n(593710),
    m = (function (e) {
        return (e[(e.SMALL = 24)] = "SMALL"), (e[(e.MEDIUM = 32)] = "MEDIUM"), e;
    })({}),
    h = (function (e) {
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
            quest: m,
            separatorSpacing: h = 2,
            theme: E = p.BRd.DARK,
            withCosponsor: b = !0,
            withGameTile: y = !0,
            logotypeStyle: O,
            onLoadComplete: v,
        } = e,
        S = (0, l.wj)(E) ? p.BRd.DARK : p.BRd.LIGHT,
        I = (0, u.Gd)(m.id, S),
        T = b && null != m.config.cosponsorMetadata && null != I;
    return (0, r.jsxs)("div", {
        className: a()(_.partnerBranding, t),
        children: [
            y &&
                (0, r.jsx)(f.Fl, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: _.partnerBrandingGameTile,
                            alt: "",
                            src: (0, d.fh)(m, d.eC.GAME_TILE, S).url,
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
                        className: a()(_.partnerBrandingLogotype, n, { [_.partnerBrandingLogotypeWithCosponsor]: T }),
                        style: O,
                        alt: m.config.messages.gameTitle,
                        src: (0, d.fh)(m, d.eC.LOGO_TYPE, S).url,
                        onLoad: v,
                    }),
            }),
            T &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: _.cosponsorBrandSeparatorWrapper,
                            style: { margin: "0 ".concat(h, "px") },
                            children: (0, r.jsx)(c.P$X, {
                                className: _.cosponsorBrandSeparator,
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
                                        _.partnerBrandingLogotype,
                                        _.partnerBrandingLogotypeWithCosponsor,
                                        n,
                                    ),
                                    style: O,
                                    alt:
                                        null != (i = null == (t = m.config.cosponsorMetadata) ? void 0 : t.name)
                                            ? i
                                            : "",
                                    src: I.url,
                                    onLoad: v,
                                });
                            },
                        }),
                    ],
                }),
        ],
    });
};
