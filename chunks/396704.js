n.d(t, { default: () => N, x: () => j });
var i = n(477900);
n(582128);
var l = n(165862),
    s = n(442433);
n(321073);
var a = n(855986),
    r = n(314116),
    o = n(477782),
    c = n(624479),
    d = n(192308),
    u = n(241326),
    m = n(778858),
    g = n(619006),
    h = n(50268),
    x = n(34457),
    A = n(576705),
    p = n(292024),
    b = n(792996);
function f(e, t, l) {
    let s = (0, a.bG)([A.A], () => {
            let n = A.A.getHighestRole(e);
            return !A.A.isRoleHigher(e, n, t);
        }),
        f = [],
        j = t.tags?.guild_connections === null,
        N = e.verificationRoleId === t.id,
        E = t.managed && !j,
        C = null != t && (0, x.Oy)(t);
    s ||
        E ||
        C ||
        null == l ||
        f.push(
            (0, i.jsx)(
                o.rX,
                {
                    children: (0, i.jsx)(o.Dr, {
                        id: "duplicate-role",
                        label: b.intl.string(b.t["7gEVxQ"]),
                        icon: c.CopyIcon,
                        leadingAccessory: { type: "icon", icon: c.CopyIcon },
                        action: () => l(t),
                    }),
                },
                "duplicate-role",
            ),
        );
    let v = (0, p.A)(e, t);
    null != v && f.push(v);
    let T = (0, h.A)({ id: t.id, label: b.intl.string(b.t.sMsaLg) });
    if ((null != T && f.push(T), !s && !E && !C)) {
        async function I() {
            (j && (await (0, g.qK)(e.id, t.id, [])), m.A.deleteRole(e.id, t.id));
        }
        let l = N
            ? () => {
                  (0, d.mM)(async () => {
                      let { default: e } = await n.e(154915).then(n.bind(n, 360494));
                      return (n) => (0, i.jsx)(e, { ...n, roleName: t.name, onConfirmDelete: I });
                  });
              }
            : () => {
                  (0, r.A)({
                      title: b.intl.string(b.t.YWISbQ),
                      subtitle: b.intl.format(b.t["9+nrUS"], { name: t.name }),
                      confirmText: b.intl.string(b.t.oyYWHE),
                      cancelText: b.intl.string(b.t["ETE/oC"]),
                      onConfirm: I,
                  });
              };
        f.push(
            (0, i.jsx)(
                o.rX,
                {
                    children: (0, i.jsx)(o.Dr, {
                        id: "delete-role",
                        label: b.intl.string(b.t.oyYWHE),
                        color: "danger",
                        icon: u.TrashIcon,
                        leadingAccessory: { type: "icon", icon: u.TrashIcon },
                        action: l,
                    }),
                },
                "delete-role",
            ),
        );
    }
    return f;
}
function j(e, t, n) {
    return f(e, t, n).length > 0;
}
function N(e) {
    let { role: t, guild: n, onDuplicateRole: a, onSelect: r } = e,
        o = f(n, t, a);
    return 0 === o.length
        ? null
        : (0, i.jsx)(l.W, {
              "data-menu-migrated-auto": !0,
              navId: "guild-settings-role-context",
              "aria-label": b.intl.string(b.t["337Ja9"]),
              onClose: s.Z_,
              onSelect: r,
              children: o,
          });
}
