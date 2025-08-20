n.d(t, {
    US: () => C,
    ZP: () => j,
    fF: () => x,
});
var r,
    o,
    s = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(692547),
    u = n(780384),
    c = n(481060),
    d = n(113434),
    m = n(475595),
    p = n(78826),
    h = n(981631),
    g = n(593710),
    x = (((r = {})[(r.SMALL = 24)] = "SMALL"), (r[(r.MEDIUM = 32)] = "MEDIUM"), r),
    C = (((o = {})[(o.SMALL = 2)] = "SMALL"), (o[(o.MEDIUM = 8)] = "MEDIUM"), o);
let j = function (e) {
    let {
            className: t,
            logotypeClassName: n,
            gameTileSize: r = 24,
            quest: o,
            separatorSpacing: i = 2,
            theme: x = h.BRd.DARK,
            withCosponsor: C = !0,
            withGameTile: j = !0,
            onLoadComplete: f,
        } = e,
        b = (0, u.wj)(x) ? h.BRd.DARK : h.BRd.LIGHT,
        y = (0, d.Gd)(o.id, b),
        v = C && null != o.config.cosponsorMetadata && null != y;
    return (0, s.jsxs)("div", {
        className: a()(g.partnerBranding, t),
        children: [
            j &&
                (0, s.jsx)(p.Fl, {
                    id: "QuestPartnerBranding_gameTile",
                    children: (e) =>
                        (0, s.jsx)("img", {
                            ref: e,
                            className: g.partnerBrandingGameTile,
                            alt: "",
                            src: (0, m.fh)(o, m.eC.GAME_TILE, b).url,
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
                            onLoad: f,
                        }),
                }),
            (0, s.jsx)(p.Fl, {
                id: "QuestPartnerBranding_gameLogotype",
                children: (e) =>
                    (0, s.jsx)("img", {
                        ref: e,
                        className: a()(g.partnerBrandingLogotype, n, { [g.partnerBrandingLogotypeWithCosponsor]: v }),
                        alt: o.config.messages.gameTitle,
                        src: (0, m.fh)(o, m.eC.LOGO_TYPE, b).url,
                        onLoad: f,
                    }),
            }),
            v &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("div", {
                            className: g.cosponsorBrandSeparatorWrapper,
                            style: { margin: "0 ".concat(i, "px") },
                            children: (0, s.jsx)(c.P$X, {
                                className: g.cosponsorBrandSeparator,
                                color: l.Z.colors.WHITE,
                            }),
                        }),
                        (0, s.jsx)(p.Fl, {
                            id: "QuestPartnerBranding_cosponsorLogotype",
                            children: (e) => {
                                var t, r;
                                return (0, s.jsx)("img", {
                                    ref: e,
                                    className: a()(
                                        g.partnerBrandingLogotype,
                                        g.partnerBrandingLogotypeWithCosponsor,
                                        n,
                                    ),
                                    alt:
                                        null != (r = null == (t = o.config.cosponsorMetadata) ? void 0 : t.name)
                                            ? r
                                            : "",
                                    src: y.url,
                                    onLoad: f,
                                });
                            },
                        }),
                    ],
                }),
        ],
    });
};
