n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(768581),
    o = n(924489),
    s = n(950854),
    c = n(824606),
    d = n(295519);
function u(e) {
    var t, n, u, p, m;
    let { application: _, className: f, childrenClassName: g, animatesOnHover: h, onClick: I, ...v } = e,
        b = l.ZP.getApplicationIconURL({
            id: _.id,
            icon: _.icon,
            size: 48
        }),
        x = (0, c.Z)({ application: _ }),
        C = null === (t = _.categories) || void 0 === t ? void 0 : t[0],
        S = (null !== (p = null === (n = _.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== p ? p : 0) > 0 || x.length > 0,
        N = a.useCallback(() => {
            I({ mutualGuilds: x });
        }, [I, x]),
        T = (0, i.jsx)(o.Z, {
            application: _,
            textVariant: 'text-xs/normal',
            mutualGuilds: x,
            mutualGuildShownMax: 3,
            guildIconSize: o.x.SMALL,
            compact: !0
        });
    return (0, i.jsxs)(s.Z, {
        className: f,
        onClick: N,
        iconSrc: b,
        header: _.name,
        subheader:
            null != C &&
            (0, i.jsx)(r.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: C.name
            }),
        animatesOnHover: h,
        ...v,
        children: [
            (null != _.description || null != g) &&
                (0, i.jsx)('div', {
                    className: g,
                    children: (0, i.jsx)(r.Text, {
                        className: d.listingDescription,
                        variant: 'text-sm/normal',
                        lineClamp: 2,
                        children: null !== (m = null === (u = _.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== m ? m : _.description
                    })
                }),
            S &&
                (0, i.jsx)('div', {
                    className: d.bottomGuildCountContainer,
                    children: T
                })
        ]
    });
}
