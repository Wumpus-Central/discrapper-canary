n.d(t, {
    US: () => p,
    ZP: () => j,
    fF: () => C
});
var s,
    i,
    l = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    o = n(692547),
    d = n(469244),
    u = n(780384),
    c = n(113434),
    m = n(475595),
    x = n(78826),
    h = n(981631),
    g = n(432096),
    C = (((s = {})[(s.SMALL = 24)] = 'SMALL'), (s[(s.MEDIUM = 32)] = 'MEDIUM'), s),
    p = (((i = {})[(i.SMALL = 2)] = 'SMALL'), (i[(i.MEDIUM = 8)] = 'MEDIUM'), i);
let j = function (e) {
    let { className: t, logotypeClassName: n, gameTileSize: s = 24, quest: i, separatorSpacing: a = 2, theme: C = h.BRd.DARK, withCosponsor: p = !0, withGameTile: j = !0 } = e,
        T = (0, u.wj)(C) ? h.BRd.DARK : h.BRd.LIGHT,
        E = (0, c.Gd)(i.id, T),
        v = p && null != i.config.cosponsorMetadata && null != E;
    return (0, l.jsxs)('div', {
        className: r()(g.partnerBranding, t),
        children: [
            j &&
                (0, l.jsx)(x.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, l.jsx)('img', {
                            ref: e,
                            className: g.partnerBrandingGameTile,
                            alt: '',
                            src: (0, m.fh)(i, m.eC.GAME_TILE, T).url,
                            style: {
                                borderRadius: (function (e) {
                                    switch (e) {
                                        case 24:
                                            return 3;
                                        case 32:
                                            return 4;
                                    }
                                })(s),
                                width: s,
                                height: s
                            }
                        })
                }),
            (0, l.jsx)(x.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, l.jsx)('img', {
                        ref: e,
                        className: r()(g.partnerBrandingLogotype, n, { [g.partnerBrandingLogotypeWithCosponsor]: v }),
                        alt: i.config.messages.gameTitle,
                        src: (0, m.fh)(i, m.eC.LOGO_TYPE, T).url
                    })
            }),
            v &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)('div', {
                            className: g.cosponsorBrandSeparatorWrapper,
                            style: { margin: '0 '.concat(a, 'px') },
                            children: (0, l.jsx)(d.P, {
                                className: g.cosponsorBrandSeparator,
                                color: o.Z.colors.WHITE
                            })
                        }),
                        (0, l.jsx)(x.Fl, {
                            id: 'QuestPartnerBranding_cosponsorLogotype',
                            children: (e) => {
                                var t, s;
                                return (0, l.jsx)('img', {
                                    ref: e,
                                    className: r()(g.partnerBrandingLogotype, g.partnerBrandingLogotypeWithCosponsor, n),
                                    alt: null !== (s = null === (t = i.config.cosponsorMetadata) || void 0 === t ? void 0 : t.name) && void 0 !== s ? s : '',
                                    src: E.url
                                });
                            }
                        })
                    ]
                })
        ]
    });
};
