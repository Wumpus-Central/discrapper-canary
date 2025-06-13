n.d(t, {
    US: () => j,
    ZP: () => f,
    fF: () => h
});
var r,
    s,
    i = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    l = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(113434),
    m = n(475595),
    x = n(78826),
    g = n(981631),
    p = n(582835),
    h = (((r = {})[(r.SMALL = 24)] = 'SMALL'), (r[(r.MEDIUM = 32)] = 'MEDIUM'), r),
    j = (((s = {})[(s.SMALL = 2)] = 'SMALL'), (s[(s.MEDIUM = 8)] = 'MEDIUM'), s);
let f = function (e) {
    let { className: t, logotypeClassName: n, gameTileSize: r = 24, quest: s, separatorSpacing: o = 2, theme: h = g.BRd.DARK, withCosponsor: j = !0, withGameTile: f = !0, onLoadComplete: b } = e,
        C = (0, c.wj)(h) ? g.BRd.DARK : g.BRd.LIGHT,
        v = (0, d.Gd)(s.id, C),
        y = j && null != s.config.cosponsorMetadata && null != v;
    return (0, i.jsxs)('div', {
        className: a()(p.partnerBranding, t),
        children: [
            f &&
                (0, i.jsx)(x.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, i.jsx)('img', {
                            ref: e,
                            className: p.partnerBrandingGameTile,
                            alt: '',
                            src: (0, m.fh)(s, m.eC.GAME_TILE, C).url,
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
                            },
                            onLoad: b
                        })
                }),
            (0, i.jsx)(x.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, i.jsx)('img', {
                        ref: e,
                        className: a()(p.partnerBrandingLogotype, n, { [p.partnerBrandingLogotypeWithCosponsor]: y }),
                        alt: s.config.messages.gameTitle,
                        src: (0, m.fh)(s, m.eC.LOGO_TYPE, C).url,
                        onLoad: b
                    })
            }),
            y &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', {
                            className: p.cosponsorBrandSeparatorWrapper,
                            style: { margin: '0 '.concat(o, 'px') },
                            children: (0, i.jsx)(u.P$X, {
                                className: p.cosponsorBrandSeparator,
                                color: l.Z.colors.WHITE
                            })
                        }),
                        (0, i.jsx)(x.Fl, {
                            id: 'QuestPartnerBranding_cosponsorLogotype',
                            children: (e) => {
                                var t, r;
                                return (0, i.jsx)('img', {
                                    ref: e,
                                    className: a()(p.partnerBrandingLogotype, p.partnerBrandingLogotypeWithCosponsor, n),
                                    alt: null != (r = null == (t = s.config.cosponsorMetadata) ? void 0 : t.name) ? r : '',
                                    src: v.url,
                                    onLoad: b
                                });
                            }
                        })
                    ]
                })
        ]
    });
};
