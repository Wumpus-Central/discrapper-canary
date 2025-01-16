n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(460562),
    o = n(768581),
    s = n(682662),
    c = n(662146),
    u = n(285280);
function d(e) {
    let [t, d] = l.useState(!1);
    return (0, i.jsx)(s.H, {
        children: (0, i.jsx)(c.Z, {
            text: e.name,
            children: (0, i.jsx)(r.BlobMask, {
                className: u.circleIconButton,
                selected: t,
                lowerBadge: (0, i.jsx)(r.IconBadge, {
                    icon: (0, r.makeIconCompat)(a.Z),
                    disableColor: !0,
                    className: u.geoRestrictedBadge
                }),
                children: (0, i.jsx)(r.NavItem, {
                    name: e.name,
                    onMouseEnter: () => {
                        d(!0);
                    },
                    onMouseLeave: () => {
                        d(!1);
                    },
                    onClick: () => {
                        (0, r.openModalLazy)(async () => {
                            let { default: t } = await n.e('42358').then(n.bind(n, 210995));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    name: e.name,
                                    guildId: e.id,
                                    ...n
                                });
                        });
                    },
                    icon:
                        null != e.icon
                            ? o.ZP.getGuildIconURL({
                                  id: e.id,
                                  icon: e.icon,
                                  canAnimate: !1,
                                  size: 42
                              })
                            : null
                })
            })
        })
    });
}
