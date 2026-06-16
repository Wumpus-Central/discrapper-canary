t.d(i, { default: () => p });
var l = t(627968),
    n = t(64700),
    r = t(317097),
    o = t(17928),
    a = t(783878),
    d = t(913122),
    s = t(468689),
    c = t(34457),
    u = t(317525),
    f = t(242273),
    g = t(652215),
    h = t(375708);
function p(e) {
    let { guild: i, onClose: t, canSetNewRole: p } = e,
        [v, b] = n.useState(i.verificationRoleId ?? void 0),
        [R, C] = n.useState(null),
        k = (0, o.bG)([u.A], () => {
            let e = (e) => {
                var i;
                let t;
                return {
                    label: e.name,
                    value: e.id,
                    id: e.id,
                    leading:
                        ((t = 0 !== (i = e.color) ? (0, r.Hl)(i) : g.TpD),
                        (0, l.jsx)("div", {
                            style: { width: 12, height: 12, borderRadius: "50%", backgroundColor: t, flexShrink: 0 },
                        })),
                };
            };
            if (!p) {
                if (null != i.verificationRoleId) {
                    let t = u.A.getRole(i.id, i.verificationRoleId);
                    if (null != t) return [e(t)];
                }
                return [];
            }
            return u.A.getSortedRoles(i.id)
                .filter((e) => !(0, c.Oy)(e) && (!e.managed || e.tags?.guild_connections === null))
                .map(e);
        }, [i.id, i.verificationRoleId, p]),
        x = n.useCallback(async () => {
            C(null);
            try {
                let e = v ?? null;
                await s.A.saveGuild(i.id, { verificationRoleId: e }), t();
            } catch (e) {
                C(new d.LG(e).getAnyErrorMessage());
            }
        }, [i.id, v, t]),
        y = p ? h.t.fL2RF3 : h.t.orCDxP;
    return (0, l.jsx)(f.A, {
        ...e,
        title: h.intl.string(h.t["QyDF/z"]),
        description: h.intl.format(y, {}),
        errorText: R,
        onConfirm: x,
        onCancel: t,
        children: (0, l.jsx)(a.Z, {
            selectionMode: "single",
            options: k,
            value: v,
            onSelectionChange: b,
            placeholder: h.intl.string(h.t["bIOx+G"]),
            clearable: !0,
        }),
    });
}
