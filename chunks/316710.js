n.d(t, { x: () => b, default: () => j });
var i = n(627968);
n(64700);
var l = n(980707),
    s = n(442433);
n(321073);
var a = n(17928),
    r = n(314116),
    o = n(192308),
    c = n(477782),
    d = n(241326),
    u = n(66834),
    m = n(619006),
    g = n(50268),
    h = n(34457),
    x = n(576705),
    A = n(292024),
    p = n(375708);
function f(e, t) {
    let l = (0, a.bG)([x.A], () => {
            let n = x.A.getHighestRole(e);
            return !x.A.isRoleHigher(e, n, t);
        }),
        s = [],
        f = (0, A.A)(e, t);
    null != f && s.push(f);
    let b = (0, g.A)({ id: t.id, label: p.intl.string(p.t.sMsaLg) });
    null != b && s.push(b);
    let j = t.tags?.guild_connections === null,
        N = e.verificationRoleId === t.id,
        E = t.managed && !j,
        C = null != t && (0, h.Oy)(t);
    if (!l && !E && !C) {
        let l = async () => {
                j && (await (0, m.qK)(e.id, t.id, [])), u.A.deleteRole(e.id, t.id);
            },
            a = N
                ? () => {
                      (0, o.openModalLazy)(async () => {
                          let { default: e } = await n.e("54915").then(n.bind(n, 360494));
                          return (n) => (0, i.jsx)(e, { ...n, roleName: t.name, onConfirmDelete: l });
                      });
                  }
                : () => {
                      (0, r.A)({
                          title: p.intl.string(p.t.YWISbQ),
                          subtitle: p.intl.format(p.t["9+nrUS"], { name: t.name }),
                          confirmText: p.intl.string(p.t.oyYWHE),
                          cancelText: p.intl.string(p.t["ETE/oC"]),
                          onConfirm: l,
                      });
                  };
        s.push(
            (0, i.jsx)(
                c.rX,
                {
                    children: (0, i.jsx)(c.Dr, {
                        id: "delete-role",
                        label: p.intl.string(p.t.oyYWHE),
                        color: "danger",
                        icon: d.u,
                        leadingAccessory: { type: "icon", icon: d.u },
                        action: a,
                    }),
                },
                "delete-role",
            ),
        );
    }
    return s;
}
function b(e, t) {
    return f(e, t).length > 0;
}
function j(e) {
    let { role: t, guild: n, onSelect: a } = e,
        r = f(n, t);
    return 0 === r.length
        ? null
        : (0, i.jsx)(l.W, {
              "data-menu-migrated-auto": !0,
              navId: "guild-settings-role-context",
              "aria-label": p.intl.string(p.t["337Ja9"]),
              onClose: s.Z_,
              onSelect: a,
              children: r,
          });
}
