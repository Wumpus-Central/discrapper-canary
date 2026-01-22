n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(665260),
    s = n(93857),
    o = n(772927),
    l = n(871930),
    c = n(578746),
    u = n(115063),
    d = n(500470),
    f = n(652215),
    p = n(985018);
function _() {
    var e;
    let t = null != (e = (0, d.k)()) ? e : void 0,
        n = s.up.useControlledSetting(t),
        _ = i.useMemo(() => (0, u.Lx)(n), [n]);
    return null == t
        ? null
        : (0, r.jsxs)(o.A, {
              children: [
                  (0, r.jsx)(l.h, {
                      children: (0, r.jsx)(c.Ay, {
                          title: p.intl.string(p.t["7x9dyE"]),
                          value: _.all,
                          onChange: (e) => s.up.updateControlledSetting(t, e ? f.yKI : f.yKI & ~f.dzt.NO_RELATION),
                      }),
                  }),
                  (0, r.jsx)(l.h, {
                      children: (0, r.jsx)(c.Ay, {
                          title: p.intl.string(p.t.NfeuZ3),
                          value: _.all || _.mutualFriends,
                          onChange: (e) =>
                              s.up.updateControlledSetting(
                                  t,
                                  e ? a.UI(n, f.dzt.MUTUAL_FRIENDS) : a.iE(n, f.dzt.MUTUAL_FRIENDS, f.dzt.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, r.jsx)(l.h, {
                      children: (0, r.jsx)(c.Ay, {
                          title: p.intl.string(p.t.qsMfsH),
                          value: _.all || _.mutualGuilds,
                          onChange: (e) =>
                              s.up.updateControlledSetting(
                                  t,
                                  e ? a.UI(n, f.dzt.MUTUAL_GUILDS) : a.iE(n, f.dzt.MUTUAL_GUILDS, f.dzt.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
