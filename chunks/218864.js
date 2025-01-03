i.d(t, {
    Z: function () {
        return d;
    }
});
var n = i(200651),
    r = i(192379),
    a = i(481060),
    o = i(924489),
    l = i(950854),
    c = i(824606),
    s = i(722261);
function d(e) {
    var t, i, d, u, h;
    let { application: _, onClick: p, imageSrc: m, className: f, animatesOnHover: g } = e,
        x = (0, c.Z)({ application: _ }),
        C = null === (t = _.categories) || void 0 === t ? void 0 : t[0],
        b = (null !== (u = null === (i = _.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== u ? u : 0) > 0 || x.length > 0,
        I = r.useCallback(() => {
            p({ mutualGuilds: x });
        }, [p, x]),
        v = (0, n.jsx)(o.Z, {
            application: _,
            textVariant: 'text-xs/normal',
            mutualGuilds: x,
            mutualGuildShownMax: 3,
            guildIconSize: o.x.SMALL,
            compact: !0
        });
    return (0, n.jsx)(l.Z, {
        className: f,
        imageSrc: m,
        onClick: I,
        header: _.name,
        subheader: (0, n.jsxs)('div', {
            className: s.subheader,
            children: [
                null != C &&
                    (0, n.jsx)(a.Text, {
                        tag: 'span',
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        children: C.name
                    }),
                b &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            null != C &&
                                (0, n.jsx)('span', {
                                    className: s.bullet,
                                    children: '\u2022'
                                }),
                            v
                        ]
                    })
            ]
        }),
        animatesOnHover: g,
        children:
            null != _.description &&
            (0, n.jsx)('div', {
                className: s.__invalid_children,
                children: (0, n.jsx)(a.Text, {
                    className: s.listingDescription,
                    variant: 'text-sm/normal',
                    lineClamp: 2,
                    children: null !== (h = null === (d = _.directory_entry) || void 0 === d ? void 0 : d.short_description) && void 0 !== h ? h : _.description
                })
            })
    });
}
