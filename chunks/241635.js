n.d(t, { Z: () => b }), n(539854);
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(749210),
    o = n(240872),
    s = n(228643),
    c = n(299206),
    d = n(345162),
    u = n(496675),
    p = n(867108),
    m = n(388032);
function b(e, t) {
    var n;
    let b = (0, r.e7)([u.Z], () => {
            let n = u.Z.getHighestRole(e);
            return !u.Z.isRoleHigher(e, n, t);
        }),
        g = [],
        f = (0, p.Z)(e, t);
    null != f && g.push(f);
    let h = (0, c.Z)({
        id: t.id,
        label: m.intl.string(m.t.sMsaLg),
    });
    null != h && g.push(h);
    let x = (null == (n = t.tags) ? void 0 : n.guild_connections) === null,
        j = t.managed && !x,
        O = null != t && (0, d.fI)(t);
    return (
        b ||
            j ||
            O ||
            g.push(
                (0, i.jsx)(
                    l.kSQ,
                    {
                        children: (0, i.jsx)(l.sNh, {
                            id: "delete-role",
                            label: m.intl.string(m.t.oyYWHE),
                            color: "danger",
                            icon: l.XHJ,
                            action: () => {
                                o.Z.show({
                                    title: m.intl.string(m.t.YWISbQ),
                                    body: m.intl.format(m.t["9+nrUS"], { name: t.name }),
                                    cancelText: m.intl.string(m.t["ETE/oC"]),
                                    onConfirm: async () => {
                                        x && (await (0, s.L_)(e.id, t.id, [])), a.Z.deleteRole(e.id, t.id);
                                    },
                                });
                            },
                        }),
                    },
                    "delete-role",
                ),
            ),
        g
    );
}
