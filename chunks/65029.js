n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(28531),
    l = n(819758),
    c = n(149203),
    u = n(388032),
    d = n(669486);
let f = (e) => {
        let { emojiSubCategory: t } = e;
        return (0, r.jsxs)('div', {
            className: o()(d.badgeLabel, t === c.t0.TOP_GUILD_EMOJI ? d.topGuildEmojiBadge : d.newlyAddedBadge),
            children: [
                t === c.t0.TOP_GUILD_EMOJI ? (0, r.jsx)(s.Z, { foreground: d.newlyAddedBadgeIcon }) : (0, r.jsx)(l.Z, { foreground: d.newlyAddedBadgeIcon }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/semibold',
                    color: 'always-white',
                    children: t === c.t0.TOP_GUILD_EMOJI ? u.NW.string(u.t.TR2B4e) : u.NW.string(u.t['1aZ4V1'])
                })
            ]
        });
    },
    _ = (e) => {
        let { className: t, graphicPrimary: n, graphicSecondary: i, titlePrimary: s, titleSecondary: l, isFavorite: _ = !1, emojiSubCategory: p = c.t0.NONE } = e;
        return (0, r.jsxs)('div', {
            className: o()(d.inspector, t),
            children: [
                (0, r.jsx)('div', {
                    className: d.graphicPrimary,
                    'aria-hidden': !0,
                    children: n
                }),
                (0, r.jsxs)('div', {
                    className: d.textWrapper,
                    children: [
                        (0, r.jsxs)(a.Text, {
                            className: d.titlePrimary,
                            variant: 'text-md/semibold',
                            children: [
                                _
                                    ? (0, r.jsx)(a.r7p, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          'aria-label': _ ? u.NW.formatToPlainString(u.t['+fdUkZ'], { names: s }) : void 0,
                                          width: 15,
                                          height: 15,
                                          className: d.favorite
                                      })
                                    : null,
                                s
                            ]
                        }),
                        null != l &&
                            (0, r.jsx)(a.Text, {
                                className: d.titleSecondary,
                                variant: 'text-xs/normal',
                                children: l
                            })
                    ]
                }),
                p === c.t0.NONE
                    ? null != i &&
                      (0, r.jsx)('div', {
                          className: d.graphicSecondary,
                          'aria-hidden': !0,
                          children: i
                      })
                    : (0, r.jsx)(f, { emojiSubCategory: p })
            ]
        });
    };
