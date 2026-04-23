n.d(t, { A: () => p }), n(321073);
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(314116),
    a = n(192308),
    r = n(477782),
    o = n(241326),
    d = n(686956),
    c = n(619006),
    u = n(50268),
    m = n(34457),
    g = n(576705),
    h = n(292024),
    x = n(985018);
function p(e, t) {
    let p = (0, l.bG)([g.A], () => {
            let n = g.A.getHighestRole(e);
            return !g.A.isRoleHigher(e, n, t);
        }),
        A = [],
        b = (0, h.A)(e, t);
    null != b && A.push(b);
    let f = (0, u.A)({ id: t.id, label: x.intl.string(x.t.sMsaLg) });
    null != f && A.push(f);
    let _ = t.tags?.guild_connections === null,
        j = e.verificationRoleId === t.id,
        N = t.managed && !_,
        v = null != t && (0, m.Oy)(t);
    if (!p && !N && !v) {
        let l = async () => {
                _ && (await (0, c.qK)(e.id, t.id, [])), d.A.deleteRole(e.id, t.id);
            },
            u = j
                ? () => {
                      (0, a.openModalLazy)(async () => {
                          let { default: e } = await n.e("54915").then(n.bind(n, 360494));
                          return (n) => (0, i.jsx)(e, { ...n, roleName: t.name, onConfirmDelete: l });
                      });
                  }
                : () => {
                      (0, s.A)({
                          title: x.intl.string(x.t.YWISbQ),
                          subtitle: x.intl.format(x.t["9+nrUS"], { name: t.name }),
                          confirmText: x.intl.string(x.t.oyYWHE),
                          cancelText: x.intl.string(x.t["ETE/oC"]),
                          onConfirm: l,
                      });
                  };
        A.push(
            (0, i.jsx)(
                r.rX,
                {
                    children: (0, i.jsx)(r.Dr, {
                        id: "delete-role",
                        label: x.intl.string(x.t.oyYWHE),
                        color: "danger",
                        icon: o.u,
                        leadingAccessory: { type: "icon", icon: o.u },
                        action: u,
                    }),
                },
                "delete-role",
            ),
        );
    }
    return A;
}
