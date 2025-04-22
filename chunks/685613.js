n.d(t, {
    US: () => f,
    ZP: () => j,
    fF: () => h
});
var r,
    s,
    i = n(200651);
n(192379);
var o = n(120356),
    l = n.n(o),
    a = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(113434),
    m = n(475595),
    p = n(78826),
    x = n(981631),
    g = n(582835),
    h = (((r = {})[(r.SMALL = 24)] = 'SMALL'), (r[(r.MEDIUM = 32)] = 'MEDIUM'), r),
    f = (((s = {})[(s.SMALL = 2)] = 'SMALL'), (s[(s.MEDIUM = 8)] = 'MEDIUM'), s);
let j = function (e) {
    let { className: t, logotypeClassName: n, gameTileSize: r = 24, quest: s, separatorSpacing: o = 2, theme: h = x.BRd.DARK, withCosponsor: f = !0, withGameTile: j = !0 } = e,
        b = (0, c.wj)(h) ? x.BRd.DARK : x.BRd.LIGHT,
        C = (0, d.Gd)(s.id, b),
        v = f && null != s.config.cosponsorMetadata && null != C;
    return (0, i.jsxs)('div', {
        className: l()(g.partnerBranding, t),
        children: [
            j &&
                (0, i.jsx)(p.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, i.jsx)('img', {
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
            (0, i.jsx)(p.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, i.jsx)('img', {
                        ref: e,
                        className: l()(g.partnerBrandingLogotype, n, { [g.partnerBrandingLogotypeWithCosponsor]: v }),
                        alt: s.config.messages.gameTitle,
                        src: (0, m.fh)(s, m.eC.LOGO_TYPE, b).url
                    })
            }),
            v &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', {
                            className: g.cosponsorBrandSeparatorWrapper,
                            style: { margin: '0 '.concat(o, 'px') },
                            children: (0, i.jsx)(u.P$X, {
                                className: g.cosponsorBrandSeparator,
                                color: a.Z.colors.WHITE
                            })
                        }),
                        (0, i.jsx)(p.Fl, {
                            id: 'QuestPartnerBranding_cosponsorLogotype',
                            children: (e) => {
                                var t, r;
                                return (0, i.jsx)('img', {
                                    ref: e,
                                    className: l()(g.partnerBrandingLogotype, g.partnerBrandingLogotypeWithCosponsor, n),
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
