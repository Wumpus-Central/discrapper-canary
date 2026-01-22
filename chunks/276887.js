n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(576705),
    o = n(519222),
    a = n(652215),
    c = n(985018);
function s(e, t) {
    let n = t.getGuildId();
    return null != n && e.type === a.lAJ.USER_JOIN && i.A.canWithPartialContext(a.xBc.MANAGE_GUILD, { guildId: n })
        ? (0, r.jsx)(l.Drp, {
              id: "configure",
              label: c.intl.string(c.t.NpHUi1),
              icon: l.cBN,
              action: () => (0, o.vc)(t),
          })
        : null;
}
