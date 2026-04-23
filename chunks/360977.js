n.d(t, { A: () => g }), n(938796);
var i = n(627968);
n(64700);
var l = n(665260),
    a = n(477782),
    r = n(563119),
    s = n(581925),
    o = n(843472),
    d = n(521427),
    c = n(652215),
    u = n(985018);
function g(e, t) {
    let n = (0, d.Vc)(t.guild_id, t, "MessageContextMenu"),
        g = (0, l.Lt)(e.flags, c.pr7.IS_GUILD_OFFICIAL);
    return n
        ? g
            ? (0, i.jsx)(a.Dr, {
                  id: "guild-official-unset",
                  action: () => {
                      o.A.patchMessageGuildOfficial(t.id, e.id, !1);
                  },
                  label: u.intl.string(u.t["2km5Gf"]),
                  leadingAccessory: { type: "icon", icon: r.$ },
              })
            : (0, i.jsx)(a.Dr, {
                  id: "guild-official-set",
                  action: () => {
                      o.A.patchMessageGuildOfficial(t.id, e.id, !0);
                  },
                  label: u.intl.string(u.t["lE/PG3"]),
                  leadingAccessory: { type: "icon", icon: s.L },
              })
        : null;
}
