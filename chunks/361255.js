i.d(e, { default: () => p });
var n = i(627968),
    a = i(64700),
    r = i(317097),
    l = i(17928),
    o = i(783878),
    d = i(845584),
    c = i(997509),
    s = i(34457),
    u = i(317525),
    _ = i(242273),
    b = i(652215),
    g = i(985018);
function p(t) {
    let { guild: e, onClose: i, canSetNewRole: p } = t,
        [f, C] = a.useState(e.verificationRoleId ?? void 0),
        [h, v] = a.useState(null),
        x = (0, l.bG)([u.A], () => {
            let t = (t) => {
                var e;
                let i;
                return {
                    label: t.name,
                    value: t.id,
                    id: t.id,
                    leading:
                        ((i = 0 !== (e = t.color) ? (0, r.Hl)(e) : b.TpD),
                        (0, n.jsx)("div", {
                            style: { width: 12, height: 12, borderRadius: "50%", backgroundColor: i, flexShrink: 0 },
                        })),
                };
            };
            if (!p) {
                if (null != e.verificationRoleId) {
                    let i = u.A.getRole(e.id, e.verificationRoleId);
                    if (null != i) return [t(i)];
                }
                return [];
            }
            return u.A.getSortedRoles(e.id)
                .filter((t) => !(0, s.Oy)(t) && (!t.managed || t.tags?.guild_connections === null))
                .map(t);
        }, [e.id, e.verificationRoleId, p]),
        I = a.useCallback(async () => {
            v(null);
            try {
                let t = f ?? null;
                await c.A.saveGuild(e.id, { verificationRoleId: t }), i();
            } catch (t) {
                v(new d.LG(t).getAnyErrorMessage());
            }
        }, [e.id, f, i]),
        m = p ? g.t.fL2RF3 : g.t.orCDxP;
    return (0, n.jsx)(_.A, {
        ...t,
        title: g.intl.string(g.t["QyDF/z"]),
        description: g.intl.format(m, {}),
        errorText: h,
        onConfirm: I,
        onCancel: i,
        children: (0, n.jsx)(o.Z, {
            selectionMode: "single",
            options: x,
            value: f,
            onSelectionChange: C,
            placeholder: g.intl.string(g.t["bIOx+G"]),
            clearable: !0,
        }),
    });
}
