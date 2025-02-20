n.d(t, { m: () => d });
var a = n(200651);
n(192379);
var i = n(468194),
    l = n(399606),
    s = n(481060),
    r = n(430824),
    c = n(768581),
    o = n(666707);
function d(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([r.Z], () => r.Z.getGuild(t));
    if (null == n) return null;
    let d = null;
    if (null != n.icon) {
        let e = c.ZP.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: 40
        });
        d = (0, a.jsx)(s.qEK, {
            src: e,
            'aria-label': n.name,
            size: s.EFr.SIZE_24
        });
    } else {
        let e = (0, i.Zg)(n.name).slice(0, 2);
        d = (0, a.jsx)(s.Text, {
            variant: 'text-xs/semibold',
            className: o.acronym,
            'aria-hidden': !0,
            children: e
        });
    }
    return (0, a.jsxs)('div', {
        className: o.container,
        children: [
            d,
            (0, a.jsx)(s.Text, {
                variant: 'text-md/semibold',
                className: o.text,
                children: n.name
            })
        ]
    });
}
