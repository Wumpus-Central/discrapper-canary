n.d(t, { Z: () => x }), n(653041);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(749210),
    s = n(240872),
    o = n(605436),
    d = n(228643),
    c = n(299206),
    u = n(496675),
    m = n(867108),
    h = n(388032);
function x(e, t) {
    var n;
    let x = (0, l.e7)([u.Z], () => {
            let n = u.Z.getHighestRole(e);
            return !u.Z.isRoleHigher(e, n, t);
        }),
        g = [],
        p = (0, m.Z)(e, t);
    null != p && g.push(p);
    let b = (0, c.Z)({
        id: t.id,
        label: h.intl.string(h.t.sMsaLi)
    });
    null != b && g.push(b);
    let _ = (null === (n = t.tags) || void 0 === n ? void 0 : n.guild_connections) === null,
        f = t.managed && !_,
        v = null != t && (0, o.pM)(e.id, t.id);
    return (
        x ||
            f ||
            v ||
            g.push(
                (0, i.jsx)(
                    a.kSQ,
                    {
                        children: (0, i.jsx)(a.sNh, {
                            id: 'delete-role',
                            label: h.intl.string(h.t.oyYWHB),
                            color: 'danger',
                            icon: a.XHJ,
                            action: () => {
                                s.Z.show({
                                    title: h.intl.string(h.t.YWISbW),
                                    body: h.intl.format(h.t['9+nrUV'], { name: t.name }),
                                    cancelText: h.intl.string(h.t['ETE/oK']),
                                    onConfirm: async () => {
                                        _ && (await (0, d.L_)(e.id, t.id, [])), r.Z.deleteRole(e.id, t.id);
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
