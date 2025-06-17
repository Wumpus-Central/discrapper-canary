n.d(t, {
    US: () => j,
    ZP: () => f,
    fF: () => g
});
var r,
    i,
    s = n(255367);
n(73800);
var o = n(120356),
    a = n.n(o),
    l = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(113434),
    m = n(475595),
    x = n(78826),
    p = n(981631),
    h = n(582835),
    g = (((r = {})[(r.SMALL = 24)] = 'SMALL'), (r[(r.MEDIUM = 32)] = 'MEDIUM'), r),
    j = (((i = {})[(i.SMALL = 2)] = 'SMALL'), (i[(i.MEDIUM = 8)] = 'MEDIUM'), i);
let f = function (e) {
    let { className: t, logotypeClassName: n, gameTileSize: r = 24, quest: i, separatorSpacing: o = 2, theme: g = p.BRd.DARK, withCosponsor: j = !0, withGameTile: f = !0, onLoadComplete: b } = e,
        C = (0, c.wj)(g) ? p.BRd.DARK : p.BRd.LIGHT,
        v = (0, d.Gd)(i.id, C),
        y = j && null != i.config.cosponsorMetadata && null != v;
    return (0, s.jsxs)('div', {
        className: a()(h.partnerBranding, t),
        children: [
            f &&
                (0, s.jsx)(x.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, s.jsx)('img', {
                            ref: e,
                            className: h.partnerBrandingGameTile,
                            alt: '',
                            src: (0, m.fh)(i, m.eC.GAME_TILE, C).url,
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
            (0, s.jsx)(x.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, s.jsx)('img', {
                        ref: e,
                        className: a()(h.partnerBrandingLogotype, n, { [h.partnerBrandingLogotypeWithCosponsor]: y }),
                        alt: i.config.messages.gameTitle,
                        src: (0, m.fh)(i, m.eC.LOGO_TYPE, C).url,
                        onLoad: b
                    })
            }),
            y &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)('div', {
                            className: h.cosponsorBrandSeparatorWrapper,
                            style: { margin: '0 '.concat(o, 'px') },
                            children: (0, s.jsx)(u.P$X, {
                                className: h.cosponsorBrandSeparator,
                                color: l.Z.colors.WHITE
                            })
                        }),
                        (0, s.jsx)(x.Fl, {
                            id: 'QuestPartnerBranding_cosponsorLogotype',
                            children: (e) => {
                                var t, r;
                                return (0, s.jsx)('img', {
                                    ref: e,
                                    className: a()(h.partnerBrandingLogotype, h.partnerBrandingLogotypeWithCosponsor, n),
                                    alt: null != (r = null == (t = i.config.cosponsorMetadata) ? void 0 : t.name) ? r : '',
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
