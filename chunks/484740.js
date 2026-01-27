n.d(t, {
    A: () => g,
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
    p = n(292024),
    m = n(985018);

function g(e, t) {
    var n;
    let g = (0, r.bG)([u.A], () => {
            let n = u.A.getHighestRole(e);
            return !u.A.isRoleHigher(e, n, t);
        }),
        b = [],
        f = (0, p.A)(e, t);
    null != f && b.push(f);
    let h = (0, c.A)({
        id: t.id,
        label: m.intl.string(m.t.sMsaLg),
    });
    null != h && b.push(h);
    let x = (null == (n = t.tags) ? void 0 : n.guild_connections) === null,
        j = t.managed && !x,
        O = null != t && (0, d.Oy)(t);
    return (
        g ||
            j ||
            O ||
            b.push(
                (0, i.jsx)(
                    l.rXV,
                    {
                        children: (0, i.jsx)(l.Drp, {
                            id: "delete-role",
                            label: m.intl.string(m.t.oyYWHE),
                            color: "danger",
                            icon: l.ucK,
                            leadingAccessory: {
                                type: "icon",
                                icon: l.ucK,
                            },
                            action: () => {
                                s.A.show({
                                    title: m.intl.string(m.t.YWISbQ),
                                    body: m.intl.format(m.t["9+nrUS"], {
                                        name: t.name,
                                    }),
                                    cancelText: m.intl.string(m.t["ETE/oC"]),
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
        b
    );
}
