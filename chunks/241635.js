n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(653041);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(749210),
    o = n(240872),
    s = n(605436),
    d = n(228643),
    c = n(299206),
    u = n(496675),
    m = n(867108),
    h = n(388032);
function p(e, t) {
    var n;
    let p = (0, l.e7)([u.Z], () => {
            let n = u.Z.getHighestRole(e);
            return !u.Z.isRoleHigher(e, n, t);
        }),
        g = [],
        x = (0, m.Z)(e, t);
    null != x && g.push(x);
    let f = (0, c.Z)({
        id: t.id,
        label: h.intl.string(h.t.sMsaLi)
    });
    null != f && g.push(f);
    let b = (null === (n = t.tags) || void 0 === n ? void 0 : n.guild_connections) === null,
        v = t.managed && !b,
        C = null != t && (0, s.pM)(e.id, t.id);
    return (
        !p &&
            !v &&
            !C &&
            g.push(
                (0, i.jsx)(
                    r.MenuGroup,
                    {
                        children: (0, i.jsx)(r.MenuItem, {
                            id: 'delete-role',
                            label: h.intl.string(h.t.oyYWHB),
                            color: 'danger',
                            icon: r.TrashIcon,
                            action: () => {
                                o.Z.show({
                                    title: h.intl.string(h.t.YWISbW),
                                    body: h.intl.format(h.t['9+nrUV'], { name: t.name }),
                                    cancelText: h.intl.string(h.t['ETE/oK']),
                                    onConfirm: async () => {
                                        b && (await (0, d.L_)(e.id, t.id, [])), a.Z.deleteRole(e.id, t.id);
                                    }
                                });
                            }
                        })
                    },
                    'delete-role'
                )
            ),
        g
    );
}
