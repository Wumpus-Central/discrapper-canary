n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(576705),
    a = n(519222),
    o = n(652215),
    c = n(985018);

function s(e, t) {
    let n = t.getGuildId();
    return null != n &&
        e.type === o.lAJ.USER_JOIN &&
        l.A.canWithPartialContext(o.xBc.MANAGE_GUILD, {
            guildId: n,
        })
        ? (0, r.jsx)(i.Drp, {
              id: "configure",
              label: c.intl.string(c.t.NpHUi1),
              leadingAccessory: {
                  type: "icon",
                  icon: i.cBN,
              },
              icon: i.cBN,
              action: () => (0, a.vc)(t),
          })
        : null;
}
