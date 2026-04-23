n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(477782),
    a = n(290136),
    r = n(576705),
    s = n(519222),
    o = n(652215),
    d = n(985018);
function c(e, t) {
    let n = t.getGuildId();
    return null != n && e.type === o.lAJ.USER_JOIN && r.A.canWithPartialContext(o.xBc.MANAGE_GUILD, { guildId: n })
        ? (0, i.jsx)(l.Dr, {
              id: "configure",
              label: d.intl.string(d.t.NpHUi1),
              leadingAccessory: { type: "icon", icon: a.c },
              icon: a.c,
              action: () => (0, s.vc)(t),
          })
        : null;
}
