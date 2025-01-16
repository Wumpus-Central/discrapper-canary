var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(28531),
    u = r(819758),
    c = r(149203),
    d = r(388032),
    f = r(803700);
let _ = (e) => {
        let { className: n, graphicPrimary: r, graphicSecondary: a, titlePrimary: l, titleSecondary: u, isFavorite: _ = !1, emojiSubCategory: p = c.t0.NONE } = e;
        return (0, i.jsxs)('div', {
            className: s()(f.inspector, n),
            children: [
                (0, i.jsx)('div', {
                    className: f.graphicPrimary,
                    'aria-hidden': !0,
                    children: r
                }),
                (0, i.jsxs)('div', {
                    className: f.textWrapper,
                    children: [
                        (0, i.jsxs)(o.Text, {
                            className: f.titlePrimary,
                            variant: 'text-md/semibold',
                            children: [
                                _
                                    ? (0, i.jsx)(o.StarIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          'aria-label': _ ? d.intl.formatToPlainString(d.t['+fdUkZ'], { names: l }) : void 0,
                                          width: 15,
                                          height: 15,
                                          className: f.favorite
                                      })
                                    : null,
                                l
                            ]
                        }),
                        null != u &&
                            (0, i.jsx)(o.Text, {
                                className: f.titleSecondary,
                                variant: 'text-xs/normal',
                                children: u
                            })
                    ]
                }),
                p === c.t0.NONE
                    ? null != a &&
                      (0, i.jsx)('div', {
                          className: f.graphicSecondary,
                          'aria-hidden': !0,
                          children: a
                      })
                    : (0, i.jsx)(h, { emojiSubCategory: p })
            ]
        });
    },
    h = (e) => {
        let { emojiSubCategory: n } = e;
        return (0, i.jsxs)('div', {
            className: s()(f.badgeLabel, n === c.t0.TOP_GUILD_EMOJI ? f.topGuildEmojiBadge : f.newlyAddedBadge),
            children: [
                n === c.t0.TOP_GUILD_EMOJI ? (0, i.jsx)(l.Z, { foreground: f.newlyAddedBadgeIcon }) : (0, i.jsx)(u.Z, { foreground: f.newlyAddedBadgeIcon }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-sm/semibold',
                    color: 'always-white',
                    children: n === c.t0.TOP_GUILD_EMOJI ? d.intl.string(d.t.TR2B4e) : d.intl.string(d.t['1aZ4V1'])
                })
            ]
        });
    };
n.Z = _;
