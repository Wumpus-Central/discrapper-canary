n.d(t, { A: () => x }), n(321073);
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(686956),
    r = n(579872),
    o = n(619006),
    d = n(50268),
    c = n(34457),
    u = n(576705),
    m = n(292024),
    g = n(985018);
function x(e, t) {
    let n = (0, l.bG)([u.A], () => {
            let n = u.A.getHighestRole(e);
            return !u.A.isRoleHigher(e, n, t);
        }),
        x = [],
        h = (0, m.A)(e, t);
    null != h && x.push(h);
    let p = (0, d.A)({ id: t.id, label: g.intl.string(g.t.sMsaLg) });
    null != p && x.push(p);
    let A = t.tags?.guild_connections === null,
        b = t.managed && !A,
        _ = null != t && (0, c.Oy)(t);
    return (
        n ||
            b ||
            _ ||
            x.push(
                (0, i.jsx)(
                    s.rXV,
                    {
                        children: (0, i.jsx)(s.Drp, {
                            id: "delete-role",
                            label: g.intl.string(g.t.oyYWHE),
                            color: "danger",
                            icon: s.ucK,
                            leadingAccessory: { type: "icon", icon: s.ucK },
                            action: () => {
                                r.A.show({
                                    title: g.intl.string(g.t.YWISbQ),
                                    body: g.intl.format(g.t["9+nrUS"], { name: t.name }),
                                    cancelText: g.intl.string(g.t["ETE/oC"]),
                                    onConfirm: async () => {
                                        A && (await (0, o.qK)(e.id, t.id, [])), a.A.deleteRole(e.id, t.id);
                                    },
                                });
                            },
                        }),
                    },
                    "delete-role",
                ),
            ),
        x
    );
}
