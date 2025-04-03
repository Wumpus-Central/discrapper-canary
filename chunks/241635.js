n.d(t, { Z: () => b }), n(653041);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(749210),
    a = n(240872),
    s = n(605436),
    c = n(228643),
    d = n(299206),
    u = n(496675),
    p = n(867108),
    m = n(388032);
function b(e, t) {
    var n;
    let b = (0, i.e7)([u.Z], () => {
            let n = u.Z.getHighestRole(e);
            return !u.Z.isRoleHigher(e, n, t);
        }),
        g = [],
        f = (0, p.Z)(e, t);
    null != f && g.push(f);
    let h = (0, d.Z)({
        id: t.id,
        label: m.NW.string(m.t.sMsaLi)
    });
    null != h && g.push(h);
    let x = (null == (n = t.tags) ? void 0 : n.guild_connections) === null,
        j = t.managed && !x,
        N = null != t && (0, s.pM)(e.id, t.id);
    return (
        b ||
            j ||
            N ||
            g.push(
                (0, r.jsx)(
                    l.kSQ,
                    {
                        children: (0, r.jsx)(l.sNh, {
                            id: 'delete-role',
                            label: m.NW.string(m.t.oyYWHB),
                            color: 'danger',
                            icon: l.XHJ,
                            action: () => {
                                a.Z.show({
                                    title: m.NW.string(m.t.YWISbW),
                                    body: m.NW.format(m.t['9+nrUV'], { name: t.name }),
                                    cancelText: m.NW.string(m.t['ETE/oK']),
                                    onConfirm: async () => {
                                        x && (await (0, c.L_)(e.id, t.id, [])), o.Z.deleteRole(e.id, t.id);
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
