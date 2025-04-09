n.d(t, {
    US: () => f,
    ZP: () => j,
    fF: () => h
});
var r,
    s,
    o = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(692547),
    c = n(469244),
    u = n(780384),
    d = n(113434),
    m = n(475595),
    p = n(78826),
    x = n(981631),
    g = n(582835),
    h = (((r = {})[(r.SMALL = 24)] = 'SMALL'), (r[(r.MEDIUM = 32)] = 'MEDIUM'), r),
    f = (((s = {})[(s.SMALL = 2)] = 'SMALL'), (s[(s.MEDIUM = 8)] = 'MEDIUM'), s);
let j = function (e) {
    let { className: t, logotypeClassName: n, gameTileSize: r = 24, quest: s, separatorSpacing: i = 2, theme: h = x.BRd.DARK, withCosponsor: f = !0, withGameTile: j = !0 } = e,
        b = (0, u.wj)(h) ? x.BRd.DARK : x.BRd.LIGHT,
        C = (0, d.Gd)(s.id, b),
        N = f && null != s.config.cosponsorMetadata && null != C;
    return (0, o.jsxs)('div', {
        className: a()(g.partnerBranding, t),
        children: [
            j &&
                (0, o.jsx)(p.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, o.jsx)('img', {
                            ref: e,
                            className: g.partnerBrandingGameTile,
                            alt: '',
                            src: (0, m.fh)(s, m.eC.GAME_TILE, b).url,
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
                                height: r
                            }
                        })
                }),
            (0, o.jsx)(p.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, o.jsx)('img', {
                        ref: e,
                        className: a()(g.partnerBrandingLogotype, n, { [g.partnerBrandingLogotypeWithCosponsor]: N }),
                        alt: s.config.messages.gameTitle,
                        src: (0, m.fh)(s, m.eC.LOGO_TYPE, b).url
                    })
            }),
            N &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: g.cosponsorBrandSeparatorWrapper,
                            style: { margin: '0 '.concat(i, 'px') },
                            children: (0, o.jsx)(c.P, {
                                className: g.cosponsorBrandSeparator,
                                color: l.Z.colors.WHITE
                            })
                        }),
                        (0, o.jsx)(p.Fl, {
                            id: 'QuestPartnerBranding_cosponsorLogotype',
                            children: (e) => {
                                var t, r;
                                return (0, o.jsx)('img', {
                                    ref: e,
                                    className: a()(g.partnerBrandingLogotype, g.partnerBrandingLogotypeWithCosponsor, n),
                                    alt: null != (r = null == (t = s.config.cosponsorMetadata) ? void 0 : t.name) ? r : '',
                                    src: C.url
                                });
                            }
                        })
                    ]
                })
        ]
    });
};
