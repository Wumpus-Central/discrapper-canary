n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(576705),
    r = n(519222),
    s = n(652215),
    o = n(985018);
function d(e, t) {
    let n = t.getGuildId();
    return null != n && e.type === s.lAJ.USER_JOIN && a.A.canWithPartialContext(s.xBc.MANAGE_GUILD, { guildId: n })
        ? (0, i.jsx)(l.Drp, {
              id: "configure",
              label: o.intl.string(o.t.NpHUi1),
              leadingAccessory: { type: "icon", icon: l.cBN },
              icon: l.cBN,
              action: () => (0, r.vc)(t),
          })
        : null;
}
