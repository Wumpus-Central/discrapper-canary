i.d(t, {
    Z: function () {
        return u;
    }
});
var n = i(200651),
    a = i(192379),
    r = i(481060),
    o = i(768581),
    l = i(924489),
    c = i(950854),
    s = i(824606),
    d = i(124418);
function u(e) {
    var t, i, u, _, p;
    let { application: h, className: m, childrenClassName: f, animatesOnHover: g, onClick: x, ...C } = e,
        b = o.ZP.getApplicationIconURL({
            id: h.id,
            icon: h.icon,
            size: 48
        }),
        I = (0, s.Z)({ application: h }),
        v = null === (t = h.categories) || void 0 === t ? void 0 : t[0],
        A = (null !== (_ = null === (i = h.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== _ ? _ : 0) > 0 || I.length > 0,
        N = a.useCallback(() => {
            x({ mutualGuilds: I });
        }, [x, I]),
        L = (0, n.jsx)(l.Z, {
            application: h,
            textVariant: 'text-xs/normal',
            mutualGuilds: I,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0
        });
    return (0, n.jsxs)(c.Z, {
        className: m,
        onClick: N,
        iconSrc: b,
        header: h.name,
        subheader:
            null != v &&
            (0, n.jsx)(r.Text, {
                tag: 'span',
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: v.name
            }),
        animatesOnHover: g,
        ...C,
        children: [
            (null != h.description || null != f) &&
                (0, n.jsx)('div', {
                    className: f,
                    children: (0, n.jsx)(r.Text, {
                        className: d.listingDescription,
                        variant: 'text-sm/normal',
                        lineClamp: 2,
                        children: null !== (p = null === (u = h.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== p ? p : h.description
                    })
                }),
            A &&
                (0, n.jsx)('div', {
                    className: d.bottomGuildCountContainer,
                    children: L
                })
        ]
    });
}
