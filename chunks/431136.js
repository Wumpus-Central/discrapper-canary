n.d(t, {
    m: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var a = n(468194),
    l = n(399606),
    s = n(481060),
    c = n(430824),
    o = n(768581),
    r = n(272416);
function d(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
    if (null == n) return null;
    let d = null;
    if (null != n.icon) {
        let e = o.ZP.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: 40
        });
        d = (0, i.jsx)(s.Avatar, {
            src: e,
            'aria-label': n.name,
            size: s.AvatarSizes.SIZE_24
        });
    } else {
        let e = (0, a.Zg)(n.name).slice(0, 2);
        d = (0, i.jsx)(s.Text, {
            variant: 'text-xs/semibold',
            className: r.acronym,
            'aria-hidden': !0,
            children: e
        });
    }
    return (0, i.jsxs)('div', {
        className: r.container,
        children: [
            d,
            (0, i.jsx)(s.Text, {
                variant: 'text-md/semibold',
                className: r.text,
                children: n.name
            })
        ]
    });
}
