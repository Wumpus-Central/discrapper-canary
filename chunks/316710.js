n.d(t, { x: () => j, default: () => N });
var i = n(627968);
n(64700);
var l = n(980707),
    s = n(442433);
n(321073);
var a = n(17928),
    r = n(314116),
    o = n(477782),
    c = n(624479),
    d = n(192308),
    u = n(241326),
    m = n(66834),
    g = n(619006),
    h = n(50268),
    x = n(34457),
    p = n(576705),
    A = n(292024),
    f = n(375708);
function b(e, t, l) {
    let s = (0, a.bG)([p.A], () => {
            let n = p.A.getHighestRole(e);
            return !p.A.isRoleHigher(e, n, t);
        }),
        b = [],
        j = t.tags?.guild_connections === null,
        N = e.verificationRoleId === t.id,
        E = t.managed && !j,
        C = null != t && (0, x.Oy)(t);
    s ||
        E ||
        C ||
        null == l ||
        b.push(
            (0, i.jsx)(
                o.rX,
                {
                    children: (0, i.jsx)(o.Dr, {
                        id: "duplicate-role",
                        label: f.intl.string(f.t["7gEVxQ"]),
                        icon: c.T,
                        leadingAccessory: { type: "icon", icon: c.T },
                        action: () => l(t),
                    }),
                },
                "duplicate-role",
            ),
        );
    let v = (0, A.A)(e, t);
    null != v && b.push(v);
    let T = (0, h.A)({ id: t.id, label: f.intl.string(f.t.sMsaLg) });
    if ((null != T && b.push(T), !s && !E && !C)) {
        async function I() {
            j && (await (0, g.qK)(e.id, t.id, [])), m.A.deleteRole(e.id, t.id);
        }
        let l = N
            ? () => {
                  (0, d.openModalLazy)(async () => {
                      let { default: e } = await n.e("54915").then(n.bind(n, 360494));
                      return (n) => (0, i.jsx)(e, { ...n, roleName: t.name, onConfirmDelete: I });
                  });
              }
            : () => {
                  (0, r.A)({
                      title: f.intl.string(f.t.YWISbQ),
                      subtitle: f.intl.format(f.t["9+nrUS"], { name: t.name }),
                      confirmText: f.intl.string(f.t.oyYWHE),
                      cancelText: f.intl.string(f.t["ETE/oC"]),
                      onConfirm: I,
                  });
              };
        b.push(
            (0, i.jsx)(
                o.rX,
                {
                    children: (0, i.jsx)(o.Dr, {
                        id: "delete-role",
                        label: f.intl.string(f.t.oyYWHE),
                        color: "danger",
                        icon: u.u,
                        leadingAccessory: { type: "icon", icon: u.u },
                        action: l,
                    }),
                },
                "delete-role",
            ),
        );
    }
    return b;
}
function j(e, t, n) {
    return b(e, t, n).length > 0;
}
function N(e) {
    let { role: t, guild: n, onDuplicateRole: a, onSelect: r } = e,
        o = b(n, t, a);
    return 0 === o.length
        ? null
        : (0, i.jsx)(l.W, {
              "data-menu-migrated-auto": !0,
              navId: "guild-settings-role-context",
              "aria-label": f.intl.string(f.t["337Ja9"]),
              onClose: s.Z_,
              onSelect: r,
              children: o,
          });
}
