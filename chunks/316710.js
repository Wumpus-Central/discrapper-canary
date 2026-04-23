n.d(t, { x: () => f, default: () => _ });
var i = n(627968);
n(64700);
var l = n(550079),
    s = n(442433);
n(321073);
var a = n(17928),
    r = n(314116),
    o = n(192308),
    d = n(477782),
    c = n(241326),
    u = n(686956),
    m = n(619006),
    g = n(50268),
    h = n(34457),
    x = n(576705),
    p = n(292024),
    A = n(985018);
function b(e, t) {
    let l = (0, a.bG)([x.A], () => {
            let n = x.A.getHighestRole(e);
            return !x.A.isRoleHigher(e, n, t);
        }),
        s = [],
        b = (0, p.A)(e, t);
    null != b && s.push(b);
    let f = (0, g.A)({ id: t.id, label: A.intl.string(A.t.sMsaLg) });
    null != f && s.push(f);
    let _ = t.tags?.guild_connections === null,
        j = e.verificationRoleId === t.id,
        N = t.managed && !_,
        v = null != t && (0, h.Oy)(t);
    if (!l && !N && !v) {
        let l = async () => {
                _ && (await (0, m.qK)(e.id, t.id, [])), u.A.deleteRole(e.id, t.id);
            },
            a = j
                ? () => {
                      (0, o.openModalLazy)(async () => {
                          let { default: e } = await n.e("54915").then(n.bind(n, 360494));
                          return (n) => (0, i.jsx)(e, { ...n, roleName: t.name, onConfirmDelete: l });
                      });
                  }
                : () => {
                      (0, r.A)({
                          title: A.intl.string(A.t.YWISbQ),
                          subtitle: A.intl.format(A.t["9+nrUS"], { name: t.name }),
                          confirmText: A.intl.string(A.t.oyYWHE),
                          cancelText: A.intl.string(A.t["ETE/oC"]),
                          onConfirm: l,
                      });
                  };
        s.push(
            (0, i.jsx)(
                d.rX,
                {
                    children: (0, i.jsx)(d.Dr, {
                        id: "delete-role",
                        label: A.intl.string(A.t.oyYWHE),
                        color: "danger",
                        icon: c.u,
                        leadingAccessory: { type: "icon", icon: c.u },
                        action: a,
                    }),
                },
                "delete-role",
            ),
        );
    }
    return s;
}
function f(e, t) {
    return b(e, t).length > 0;
}
function _(e) {
    let { role: t, guild: n, onSelect: a } = e,
        r = b(n, t);
    return 0 === r.length
        ? null
        : (0, i.jsx)(l.W, {
              "data-menu-migrated-auto": !0,
              navId: "guild-settings-role-context",
              "aria-label": A.intl.string(A.t["337Ja9"]),
              onClose: s.Z_,
              onSelect: a,
              children: r,
          });
}
