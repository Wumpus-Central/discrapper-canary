i.d(t, {
    Z: function () {
        return u;
    }
});
var n = i(200651),
    r = i(192379),
    a = i(481060),
    o = i(768581),
    l = i(924489),
    c = i(950854),
    s = i(824606),
    d = i(295519);
function u(e) {
    var t, i, u, h, _;
    let { application: p, className: m, childrenClassName: f, animatesOnHover: g, onClick: x, ...C } = e,
        b = o.ZP.getApplicationIconURL({
            id: p.id,
            icon: p.icon,
            size: 48
        }),
        I = (0, s.Z)({ application: p }),
        v = null === (t = p.categories) || void 0 === t ? void 0 : t[0],
        N = (null !== (h = null === (i = p.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== h ? h : 0) > 0 || I.length > 0,
        A = r.useCallback(() => {
            x({ mutualGuilds: I });
        }, [x, I]),
        L = (0, n.jsx)(l.Z, {
            application: p,
            textVariant: 'text-xs/normal',
            mutualGuilds: I,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0
        });
    return (0, n.jsxs)(c.Z, {
        className: m,
        onClick: A,
        iconSrc: b,
        header: p.name,
        subheader:
            null != v &&
            (0, n.jsx)(a.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: v.name
            }),
        animatesOnHover: g,
        ...C,
        children: [
            (null != p.description || null != f) &&
                (0, n.jsx)('div', {
                    className: f,
                    children: (0, n.jsx)(a.Text, {
                        className: d.listingDescription,
                        variant: 'text-sm/normal',
                        lineClamp: 2,
                        children: null !== (_ = null === (u = p.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== _ ? _ : p.description
                    })
                }),
            N &&
                (0, n.jsx)('div', {
                    className: d.bottomGuildCountContainer,
                    children: L
                })
        ]
    });
}
