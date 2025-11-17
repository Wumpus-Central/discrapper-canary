n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(722687),
    o = n(738486),
    s = n(838436),
    l = n(51331),
    c = n(630388),
    u = n(88658),
    d = n(652262),
    f = n(981631),
    _ = n(388032);
function p() {
    var e;
    let t = null != (e = (0, d.M)()) ? e : void 0,
        n = a.vB.useControlledSetting(t),
        p = i.useMemo(() => (0, u.bL)(n), [n]);
    return null == t
        ? null
        : (0, r.jsxs)(o.Z, {
              children: [
                  (0, r.jsx)(s.U, {
                      children: (0, r.jsx)(l.ZP, {
                          title: _.intl.string(_.t["7x9dyE"]),
                          value: p.all,
                          onChange: (e) => a.vB.updateControlledSetting(t, e ? f.HGf : f.HGf & ~f.SOq.NO_RELATION),
                      }),
                  }),
                  (0, r.jsx)(s.U, {
                      children: (0, r.jsx)(l.ZP, {
                          title: _.intl.string(_.t.NfeuZ3),
                          value: p.all || p.mutualFriends,
                          onChange: (e) =>
                              a.vB.updateControlledSetting(
                                  t,
                                  e ? c.pj(n, f.SOq.MUTUAL_FRIENDS) : c.M1(n, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, r.jsx)(s.U, {
                      children: (0, r.jsx)(l.ZP, {
                          title: _.intl.string(_.t.qsMfsH),
                          value: p.all || p.mutualGuilds,
                          onChange: (e) =>
                              a.vB.updateControlledSetting(
                                  t,
                                  e ? c.pj(n, f.SOq.MUTUAL_GUILDS) : c.M1(n, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
