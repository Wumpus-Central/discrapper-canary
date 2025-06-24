n.d(t, {
    US: () => j,
    ZP: () => f,
    fF: () => g
});
var r,
    s,
    o = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    l = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(113434),
    m = n(475595),
    x = n(78826),
    p = n(981631),
    h = n(582835),
    g = (((r = {})[(r.SMALL = 24)] = 'SMALL'), (r[(r.MEDIUM = 32)] = 'MEDIUM'), r),
    j = (((s = {})[(s.SMALL = 2)] = 'SMALL'), (s[(s.MEDIUM = 8)] = 'MEDIUM'), s);
let f = function (e) {
    let { className: t, logotypeClassName: n, gameTileSize: r = 24, quest: s, separatorSpacing: i = 2, theme: g = p.BRd.DARK, withCosponsor: j = !0, withGameTile: f = !0, onLoadComplete: C } = e,
        b = (0, c.wj)(g) ? p.BRd.DARK : p.BRd.LIGHT,
        v = (0, d.Gd)(s.id, b),
        y = j && null != s.config.cosponsorMetadata && null != v;
    return (0, o.jsxs)('div', {
        className: a()(h.partnerBranding, t),
        children: [
            f &&
                (0, o.jsx)(x.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, o.jsx)('img', {
                            ref: e,
                            className: h.partnerBrandingGameTile,
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
                            },
                            onLoad: C
                        })
                }),
            (0, o.jsx)(x.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, o.jsx)('img', {
                        ref: e,
                        className: a()(h.partnerBrandingLogotype, n, { [h.partnerBrandingLogotypeWithCosponsor]: y }),
                        alt: s.config.messages.gameTitle,
                        src: (0, m.fh)(s, m.eC.LOGO_TYPE, b).url,
                        onLoad: C
                    })
            }),
            y &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: h.cosponsorBrandSeparatorWrapper,
                            style: { margin: '0 '.concat(i, 'px') },
                            children: (0, o.jsx)(u.P$X, {
                                className: h.cosponsorBrandSeparator,
                                color: l.Z.colors.WHITE
                            })
                        }),
                        (0, o.jsx)(x.Fl, {
                            id: 'QuestPartnerBranding_cosponsorLogotype',
                            children: (e) => {
                                var t, r;
                                return (0, o.jsx)('img', {
                                    ref: e,
                                    className: a()(h.partnerBrandingLogotype, h.partnerBrandingLogotypeWithCosponsor, n),
                                    alt: null != (r = null == (t = s.config.cosponsorMetadata) ? void 0 : t.name) ? r : '',
                                    src: v.url,
                                    onLoad: C
                                });
                            }
                        })
                    ]
                })
        ]
    });
};
