n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(28531),
    l = n(819758),
    u = n(149203),
    c = n(388032),
    d = n(90598);
let f = (e) => {
        let { emojiSubCategory: t } = e;
        return (0, i.jsxs)('div', {
            className: a()(d.badgeLabel, t === u.t0.TOP_GUILD_EMOJI ? d.topGuildEmojiBadge : d.newlyAddedBadge),
            children: [
                t === u.t0.TOP_GUILD_EMOJI ? (0, i.jsx)(o.Z, { foreground: d.newlyAddedBadgeIcon }) : (0, i.jsx)(l.Z, { foreground: d.newlyAddedBadgeIcon }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/semibold',
                    color: 'always-white',
                    children: t === u.t0.TOP_GUILD_EMOJI ? c.intl.string(c.t.TR2B4e) : c.intl.string(c.t['1aZ4V1'])
                })
            ]
        });
    },
    _ = (e) => {
        let { className: t, graphicPrimary: n, graphicSecondary: r, titlePrimary: o, titleSecondary: l, isFavorite: _ = !1, emojiSubCategory: p = u.t0.NONE } = e;
        return (0, i.jsxs)('div', {
            className: a()(d.inspector, t),
            children: [
                (0, i.jsx)('div', {
                    className: d.graphicPrimary,
                    'aria-hidden': !0,
                    children: n
                }),
                (0, i.jsxs)('div', {
                    className: d.textWrapper,
                    children: [
                        (0, i.jsxs)(s.Text, {
                            className: d.titlePrimary,
                            variant: 'text-md/semibold',
                            children: [
                                _
                                    ? (0, i.jsx)(s.r7p, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          'aria-label': _ ? c.intl.formatToPlainString(c.t['+fdUkZ'], { names: o }) : void 0,
                                          width: 15,
                                          height: 15,
                                          className: d.favorite
                                      })
                                    : null,
                                o
                            ]
                        }),
                        null != l &&
                            (0, i.jsx)(s.Text, {
                                className: d.titleSecondary,
                                variant: 'text-xs/normal',
                                children: l
                            })
                    ]
                }),
                p === u.t0.NONE
                    ? null != r &&
                      (0, i.jsx)('div', {
                          className: d.graphicSecondary,
                          'aria-hidden': !0,
                          children: r
                      })
                    : (0, i.jsx)(f, { emojiSubCategory: p })
            ]
        });
    };
