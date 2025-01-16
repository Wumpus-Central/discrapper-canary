n.d(t, {
    US: function () {
        return r;
    },
    fF: function () {
        return l;
    }
});
var i,
    s,
    l,
    r,
    o = n(200651);
n(192379);
var a = n(120356),
    u = n.n(a),
    c = n(692547),
    d = n(469244),
    m = n(780384),
    x = n(113434),
    h = n(475595),
    C = n(78826),
    p = n(981631),
    g = n(806145);
((i = l || (l = {}))[(i.SMALL = 24)] = 'SMALL'), (i[(i.MEDIUM = 32)] = 'MEDIUM'), ((s = r || (r = {}))[(s.SMALL = 2)] = 'SMALL'), (s[(s.MEDIUM = 8)] = 'MEDIUM');
t.ZP = function (e) {
    let { className: t, logotypeClassName: n, gameTileSize: i = 24, quest: s, separatorSpacing: l = 2, theme: r = p.BRd.DARK, withCosponsor: a = !0, withGameTile: E = !0 } = e,
        j = (0, m.wj)(r) ? p.BRd.DARK : p.BRd.LIGHT,
        T = (0, x.Gd)(s.id, j),
        f = a && null != s.config.cosponsorMetadata && null != T;
    return (0, o.jsxs)('div', {
        className: u()(g.partnerBranding, t),
        children: [
            E &&
                (0, o.jsx)(C.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, o.jsx)('img', {
                            ref: e,
                            className: g.partnerBrandingGameTile,
                            alt: '',
                            src: (0, h.fh)(s, h.eC.GAME_TILE, j).url,
                            style: {
                                borderRadius: (function (e) {
                                    switch (e) {
                                        case 24:
                                            return 3;
                                        case 32:
                                            return 4;
                                    }
                                })(i),
                                width: i,
                                height: i
                            }
                        })
                }),
            (0, o.jsx)(C.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, o.jsx)('img', {
                        ref: e,
                        className: u()(g.partnerBrandingLogotype, n, { [g.partnerBrandingLogotypeWithCosponsor]: f }),
                        alt: s.config.messages.gameTitle,
                        src: (0, h.fh)(s, h.eC.LOGO_TYPE, j).url
                    })
            }),
            f &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: g.cosponsorBrandSeparatorWrapper,
                            style: { margin: '0 '.concat(l, 'px') },
                            children: (0, o.jsx)(d.P, {
                                className: g.cosponsorBrandSeparator,
                                color: c.Z.colors.WHITE
                            })
                        }),
                        (0, o.jsx)(C.Fl, {
                            id: 'QuestPartnerBranding_cosponsorLogotype',
                            children: (e) => {
                                var t, i;
                                return (0, o.jsx)('img', {
                                    ref: e,
                                    className: u()(g.partnerBrandingLogotype, g.partnerBrandingLogotypeWithCosponsor, n),
                                    alt: null !== (i = null === (t = s.config.cosponsorMetadata) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : '',
                                    src: T.url
                                });
                            }
                        })
                    ]
                })
        ]
    });
};
