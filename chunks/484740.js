n.d(t, {
    A: () => p,
}),
    n(321073);
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(686956),
    s = n(579872),
    o = n(619006),
    c = n(50268),
    d = n(34457),
    u = n(576705),
    b = n(292024),
    f = n(985018);

function p(e, t) {
    var n;
    let p = (0, r.bG)([u.A], () => {
            let n = u.A.getHighestRole(e);
            return !u.A.isRoleHigher(e, n, t);
        }),
        m = [],
        g = (0, b.A)(e, t);
    null != g && m.push(g);
    let h = (0, c.A)({
        id: t.id,
        label: f.intl.string(f.t.sMsaLg),
    });
    null != h && m.push(h);
    let x = (null == (n = t.tags) ? void 0 : n.guild_connections) === null,
        j = t.managed && !x,
        O = null != t && (0, d.Oy)(t);
    return (
        p ||
            j ||
            O ||
            m.push(
                (0, i.jsx)(
                    l.rXV,
                    {
                        children: (0, i.jsx)(l.Drp, {
                            id: "delete-role",
                            label: f.intl.string(f.t.oyYWHE),
                            color: "danger",
                            icon: l.ucK,
                            action: () => {
                                s.A.show({
                                    title: f.intl.string(f.t.YWISbQ),
                                    body: f.intl.format(f.t["9+nrUS"], {
                                        name: t.name,
                                    }),
                                    cancelText: f.intl.string(f.t["ETE/oC"]),
                                    onConfirm: async () => {
                                        x && (await (0, o.qK)(e.id, t.id, [])), a.A.deleteRole(e.id, t.id);
                                    },
                                });
                            },
                        }),
                    },
                    "delete-role",
                ),
            ),
        m
    );
}
