n.d(t, {
    US: () => h,
    ZP: () => g,
    fF: () => p,
});
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(692547),
    s = n(780384),
    l = n(481060),
    c = n(113434),
    u = n(475595),
    d = n(78826),
    f = n(981631),
    _ = n(593710),
    p = (function (e) {
        return (e[(e.SMALL = 24)] = "SMALL"), (e[(e.MEDIUM = 32)] = "MEDIUM"), e;
    })({}),
    h = (function (e) {
        return (e[(e.SMALL = 2)] = "SMALL"), (e[(e.MEDIUM = 8)] = "MEDIUM"), e;
    })({});
function m(e) {
    switch (e) {
        case 24:
            return 3;
        case 32:
            return 4;
    }
}
let g = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: p,
            separatorSpacing: h = 2,
            theme: g = f.BRd.DARK,
            withCosponsor: E = !0,
            withGameTile: b = !0,
            onLoadComplete: y,
        } = e,
        O = (0, s.wj)(g) ? f.BRd.DARK : f.BRd.LIGHT,
        v = (0, c.Gd)(p.id, O),
        I = E && null != p.config.cosponsorMetadata && null != v;
    return (0, r.jsxs)("div", {
        className: o()(_.partnerBranding, t),
        children: [
            b &&
                (0, r.jsx)(d.Fl, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, r.jsx)("img", {
                            ref: e,
                            className: _.partnerBrandingGameTile,
                            alt: "",
                            src: (0, u.fh)(p, u.eC.GAME_TILE, O).url,
                            style: {
                                borderRadius: m(i),
                                width: i,
                                height: i,
                            },
                            onLoad: y,
                        }),
                }),
            (0, r.jsx)(d.Fl, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, r.jsx)("img", {
                        ref: e,
                        className: o()(_.partnerBrandingLogotype, n, { [_.partnerBrandingLogotypeWithCosponsor]: I }),
                        alt: p.config.messages.gameTitle,
                        src: (0, u.fh)(p, u.eC.LOGO_TYPE, O).url,
                        onLoad: y,
                    }),
            }),
            I &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: _.cosponsorBrandSeparatorWrapper,
                            style: { margin: "0 ".concat(h, "px") },
                            children: (0, r.jsx)(l.P$X, {
                                className: _.cosponsorBrandSeparator,
                                color: a.Z.colors.WHITE,
                            }),
                        }),
                        (0, r.jsx)(d.Fl, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) => {
                                var t, i;
                                return (0, r.jsx)("img", {
                                    ref: e,
                                    className: o()(
                                        _.partnerBrandingLogotype,
                                        _.partnerBrandingLogotypeWithCosponsor,
                                        n,
                                    ),
                                    alt:
                                        null != (i = null == (t = p.config.cosponsorMetadata) ? void 0 : t.name)
                                            ? i
                                            : "",
                                    src: v.url,
                                    onLoad: y,
                                });
                            },
                        }),
                    ],
                }),
        ],
    });
};
