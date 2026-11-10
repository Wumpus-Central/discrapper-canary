var t = e(477900);
e(582128);
var r = e(165862),
    i = e(477782),
    a = e(442433),
    s = e(374846),
    c = e(727419),
    d = e(54304),
    o = e(652215),
    u = e(792996);
e.d(
    l,
    {},
    {
        default: function (n) {
            let { guildId: l, roleId: e, onSelect: h, composerChannelId: p } = n,
                {
                    role: x,
                    copyIdItem: j,
                    canManageRoles: b,
                    mentionItem: k,
                    hasItems: C,
                } = (0, d.A)({ guildId: l, roleId: e, targetChannelId: (0, s.I)(p) });
            return null != x && C
                ? (0, t.jsxs)(r.W, {
                      navId: "role-mention-context",
                      "aria-label": u.intl.string(u.t["337Ja9"]),
                      onClose: a.Z_,
                      onSelect: h,
                      children: [
                          null != k && (0, t.jsx)(i.rX, { children: k }),
                          b &&
                              (0, t.jsx)(i.rX, {
                                  children: (0, t.jsx)(i.Dr, {
                                      id: "edit-role",
                                      label: u.intl.string(u.t.Ln7OND),
                                      action: async () => {
                                          (await c.A.open(l, o.BEX.ROLES), c.A.selectRole(e));
                                      },
                                  }),
                              }),
                          null != j && (0, t.jsx)(i.rX, { children: j }),
                      ],
                  })
                : null;
        },
    },
);
