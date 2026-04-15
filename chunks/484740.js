n.d(t, { A: () => g }), n(321073);
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(314116),
    a = n(397927),
    r = n(686956),
    o = n(619006),
    d = n(50268),
    c = n(34457),
    u = n(576705),
    m = n(292024),
    x = n(985018);
function g(e, t) {
    let g = (0, l.bG)([u.A], () => {
            let n = u.A.getHighestRole(e);
            return !u.A.isRoleHigher(e, n, t);
        }),
        h = [],
        p = (0, m.A)(e, t);
    null != p && h.push(p);
    let A = (0, d.A)({ id: t.id, label: x.intl.string(x.t.sMsaLg) });
    null != A && h.push(A);
    let b = t.tags?.guild_connections === null,
        f = e.verificationRoleId === t.id,
        _ = t.managed && !b,
        j = null != t && (0, c.Oy)(t);
    if (!g && !_ && !j) {
        let l = async () => {
                b && (await (0, o.qK)(e.id, t.id, [])), r.A.deleteRole(e.id, t.id);
            },
            d = f
                ? () => {
                      (0, a.mMO)(async () => {
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
        h.push(
            (0, i.jsx)(
                a.rXV,
                {
                    children: (0, i.jsx)(a.Drp, {
                        id: "delete-role",
                        label: x.intl.string(x.t.oyYWHE),
                        color: "danger",
                        icon: a.ucK,
                        leadingAccessory: { type: "icon", icon: a.ucK },
                        action: d,
                    }),
                },
                "delete-role",
            ),
        );
    }
    return h;
}
