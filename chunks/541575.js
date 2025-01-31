n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var r = n(780384),
    l = n(481060),
    s = n(410030),
    a = n(367907),
    o = n(906732),
    c = n(91218),
    d = n(807582),
    u = n(518738),
    m = n(26323),
    h = n(764260),
    g = n(981631),
    x = n(30513),
    p = n(388032),
    _ = n(792464);
let C = function (e) {
    let { guild: t, disabled: C, role: f } = e,
        v = (0, s.ZP)(),
        N = (0, u.oC)(t.id, f),
        { analyticsLocations: j } = (0, o.ZP)(),
        I = () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('22942').then(n.bind(n, 660727));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        onUploadIcon: (e) => (0, h._l)(f.id, e, null),
                        onSelectUnicodeEmoji: (e) => (0, h._l)(f.id, null, e)
                    });
            });
        },
        E = t.features.has(g.oNc.ROLE_ICONS),
        b = (e) => {
            E ||
                ((0, a.yw)(g.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: {
                        ...e,
                        section: g.jXE.CUSTOM_ROLE_ICONS_TOOLTIP
                    },
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: j
                }),
                (0, m.Z)({
                    analyticsLocations: j,
                    analyticsSourceLocation: {
                        page: g.ZY5.GUILD_SETTINGS,
                        section: g.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: g.qAy.BADGE
                    },
                    guild: t,
                    perks: (0, x.Yp)()
                }));
        },
        T = (0, i.jsx)(d.Z, {
            className: _.availabilityIndicator,
            guild: t,
            guildFeature: g.oNc.ROLE_ICONS,
            tooltipPosition: 'top',
            hideTooltip: E,
            onClick: () =>
                b({
                    object: g.qAy.LEARN_MORE,
                    objectType: g.Qqv.TIER_2
                })
        });
    return (0, i.jsxs)(l.xJW, {
        className: _.container,
        children: [
            (0, i.jsxs)(l.vwX, {
                className: _.formTitle,
                children: [(0, i.jsx)('div', { children: p.intl.string(p.t.B9grJy) }), T]
            }),
            (0, i.jsx)(l.R94, {
                className: _.description,
                children: p.intl.string(p.t.I3YQeX)
            }),
            (0, i.jsxs)('div', {
                className: _.rolePreviewArea,
                children: [
                    (0, i.jsx)('div', {
                        className: _.previewContainer,
                        children:
                            null != N
                                ? (0, i.jsx)(c.Z, {
                                      ...N,
                                      className: _.roleIconPreview,
                                      enableTooltip: !1
                                  })
                                : (0, i.jsx)(l.FmF, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 24,
                                      height: 24,
                                      className: _.preview
                                  })
                    }),
                    (0, i.jsx)(l.zxk, {
                        className: _.button,
                        color: (0, r.ap)(v) ? l.zxk.Colors.PRIMARY : l.zxk.Colors.WHITE,
                        look: l.zxk.Looks.OUTLINED,
                        onClick: () => (t.hasFeature(g.oNc.ROLE_ICONS) ? I() : b({ object: g.qAy.UPLOAD_IMAGE })),
                        disabled: C,
                        children: p.intl.string(p.t.mD1oGB)
                    }),
                    null != N
                        ? (0, i.jsx)(l.zxk, {
                              className: _.button,
                              color: (0, r.ap)(v) ? l.zxk.Colors.PRIMARY : l.zxk.Colors.TRANSPARENT,
                              look: l.zxk.Looks.BLANK,
                              onClick: () => {
                                  (0, h._l)(f.id, null, null);
                              },
                              disabled: C,
                              children: p.intl.string(p.t['uY+Nk5'])
                          })
                        : null
                ]
            })
        ]
    });
};
