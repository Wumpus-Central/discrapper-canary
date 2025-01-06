var i = n(200651);
n(192379);
var r = n(780384),
    l = n(481060),
    a = n(410030),
    s = n(367907),
    o = n(906732),
    c = n(91218),
    d = n(807582),
    u = n(518738),
    m = n(26323),
    h = n(764260),
    g = n(981631),
    x = n(30513),
    p = n(388032),
    f = n(792464);
t.Z = function (e) {
    let { guild: t, disabled: C, role: v } = e,
        _ = (0, a.ZP)(),
        I = (0, u.oC)(t.id, v),
        { analyticsLocations: N } = (0, o.ZP)(),
        T = () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e('22942').then(n.bind(n, 660727));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t.id,
                        onUploadIcon: (e) => (0, h._l)(v.id, e, null),
                        onSelectUnicodeEmoji: (e) => (0, h._l)(v.id, null, e)
                    });
            });
        },
        j = t.features.has(g.oNc.ROLE_ICONS),
        b = (e) => {
            !j &&
                ((0, s.yw)(g.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: {
                        ...e,
                        section: g.jXE.CUSTOM_ROLE_ICONS_TOOLTIP
                    },
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: N
                }),
                (0, m.Z)({
                    analyticsLocations: N,
                    analyticsSourceLocation: {
                        page: g.ZY5.GUILD_SETTINGS,
                        section: g.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: g.qAy.BADGE
                    },
                    guild: t,
                    perks: (0, x.Yp)()
                }));
        },
        S = (0, i.jsx)(d.Z, {
            className: f.availabilityIndicator,
            guild: t,
            guildFeature: g.oNc.ROLE_ICONS,
            tooltipPosition: 'top',
            hideTooltip: j,
            onClick: () =>
                b({
                    object: g.qAy.LEARN_MORE,
                    objectType: g.Qqv.TIER_2
                })
        });
    return (0, i.jsxs)(l.FormItem, {
        className: f.container,
        children: [
            (0, i.jsxs)(l.FormTitle, {
                className: f.formTitle,
                children: [(0, i.jsx)('div', { children: p.intl.string(p.t.B9grJy) }), S]
            }),
            (0, i.jsx)(l.FormText, {
                className: f.description,
                children: p.intl.string(p.t.I3YQeX)
            }),
            (0, i.jsxs)('div', {
                className: f.rolePreviewArea,
                children: [
                    (0, i.jsx)('div', {
                        className: f.previewContainer,
                        children:
                            null != I
                                ? (0, i.jsx)(c.Z, {
                                      ...I,
                                      className: f.roleIconPreview,
                                      enableTooltip: !1
                                  })
                                : (0, i.jsx)(l.ImagePlusIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 24,
                                      height: 24,
                                      className: f.preview
                                  })
                    }),
                    (0, i.jsx)(l.Button, {
                        className: f.button,
                        color: (0, r.ap)(_) ? l.Button.Colors.PRIMARY : l.Button.Colors.WHITE,
                        look: l.Button.Looks.OUTLINED,
                        onClick: () => (t.hasFeature(g.oNc.ROLE_ICONS) ? T() : b({ object: g.qAy.UPLOAD_IMAGE })),
                        disabled: C,
                        children: p.intl.string(p.t.mD1oGB)
                    }),
                    null != I
                        ? (0, i.jsx)(l.Button, {
                              className: f.button,
                              color: (0, r.ap)(_) ? l.Button.Colors.PRIMARY : l.Button.Colors.TRANSPARENT,
                              look: l.Button.Looks.BLANK,
                              onClick: () => {
                                  (0, h._l)(v.id, null, null);
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
