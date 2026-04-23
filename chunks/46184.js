l.d(t, { A: () => m });
var n = l(627968),
    i = l(64700),
    s = l(665260),
    a = l(93857),
    r = l(106148),
    d = l(650832),
    c = l(115063),
    u = l(500470),
    o = l(677428),
    x = l(652215),
    h = l(985018);
function m() {
    let e = (0, u.k)() ?? void 0,
        t = a.up.useControlledSetting(e),
        l = i.useMemo(() => (0, c.Lx)(t), [t]);
    return null == e
        ? null
        : (0, n.jsxs)(o.A, {
              children: [
                  (0, n.jsx)(r.h, {
                      children: (0, n.jsx)(d.Ay, {
                          title: h.intl.string(h.t["7x9dyE"]),
                          value: l.all,
                          onChange: (t) => a.up.updateControlledSetting(e, t ? x.yKI : x.yKI & ~x.dzt.NO_RELATION),
                      }),
                  }),
                  (0, n.jsx)(r.h, {
                      children: (0, n.jsx)(d.Ay, {
                          title: h.intl.string(h.t.NfeuZ3),
                          value: l.all || l.mutualFriends,
                          onChange: (l) =>
                              a.up.updateControlledSetting(
                                  e,
                                  l ? s.UI(t, x.dzt.MUTUAL_FRIENDS) : s.iE(t, x.dzt.MUTUAL_FRIENDS, x.dzt.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, n.jsx)(r.h, {
                      children: (0, n.jsx)(d.Ay, {
                          title: h.intl.string(h.t.qsMfsH),
                          value: l.all || l.mutualGuilds,
                          onChange: (l) =>
                              a.up.updateControlledSetting(
                                  e,
                                  l ? s.UI(t, x.dzt.MUTUAL_GUILDS) : s.iE(t, x.dzt.MUTUAL_GUILDS, x.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
