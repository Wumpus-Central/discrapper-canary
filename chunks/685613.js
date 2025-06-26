n.d(t, {
    US: () => j,
    ZP: () => C,
    fF: () => g
});
var r,
    s,
    o = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(692547),
    c = n(780384),
    u = n(481060),
    d = n(113434),
    m = n(475595),
    p = n(78826),
    h = n(981631),
    x = n(582835),
    g = (((r = {})[(r.SMALL = 24)] = 'SMALL'), (r[(r.MEDIUM = 32)] = 'MEDIUM'), r),
    j = (((s = {})[(s.SMALL = 2)] = 'SMALL'), (s[(s.MEDIUM = 8)] = 'MEDIUM'), s);
let C = function (e) {
    let { className: t, logotypeClassName: n, gameTileSize: r = 24, quest: s, separatorSpacing: i = 2, theme: g = h.BRd.DARK, withCosponsor: j = !0, withGameTile: C = !0, onLoadComplete: f } = e,
        b = (0, c.wj)(g) ? h.BRd.DARK : h.BRd.LIGHT,
        v = (0, d.Gd)(s.id, b),
        y = j && null != s.config.cosponsorMetadata && null != v;
    return (0, o.jsxs)('div', {
        className: l()(x.partnerBranding, t),
        children: [
            C &&
                (0, o.jsx)(p.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, o.jsx)('img', {
                            ref: e,
                            className: x.partnerBrandingGameTile,
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
                            onLoad: f
                        })
                }),
            (0, o.jsx)(p.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, o.jsx)('img', {
                        ref: e,
                        className: l()(x.partnerBrandingLogotype, n, { [x.partnerBrandingLogotypeWithCosponsor]: y }),
                        alt: s.config.messages.gameTitle,
                        src: (0, m.fh)(s, m.eC.LOGO_TYPE, b).url,
                        onLoad: f
                    })
            }),
            y &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: x.cosponsorBrandSeparatorWrapper,
                            style: { margin: '0 '.concat(i, 'px') },
                            children: (0, o.jsx)(u.P$X, {
                                className: x.cosponsorBrandSeparator,
                                color: a.Z.colors.WHITE
                            })
                        }),
                        (0, o.jsx)(p.Fl, {
                            id: 'QuestPartnerBranding_cosponsorLogotype',
                            children: (e) => {
                                var t, r;
                                return (0, o.jsx)('img', {
                                    ref: e,
                                    className: l()(x.partnerBrandingLogotype, x.partnerBrandingLogotypeWithCosponsor, n),
                                    alt: null != (r = null == (t = s.config.cosponsorMetadata) ? void 0 : t.name) ? r : '',
                                    src: v.url,
                                    onLoad: f
                                });
                            }
                        })
                    ]
                })
        ]
    });
};
