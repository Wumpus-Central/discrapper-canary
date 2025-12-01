n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(95015),
    o = n(722687),
    s = n(738486),
    l = n(838436),
    c = n(51331),
    u = n(88658),
    d = n(652262),
    f = n(981631),
    p = n(388032);
function _() {
    var e;
    let t = null != (e = (0, d.M)()) ? e : void 0,
        n = o.vB.useControlledSetting(t),
        _ = i.useMemo(() => (0, u.bL)(n), [n]);
    return null == t
        ? null
        : (0, r.jsxs)(s.Z, {
              children: [
                  (0, r.jsx)(l.U, {
                      children: (0, r.jsx)(c.ZP, {
                          title: p.intl.string(p.t["7x9dyE"]),
                          value: _.all,
                          onChange: (e) => o.vB.updateControlledSetting(t, e ? f.HGf : f.HGf & ~f.SOq.NO_RELATION),
                      }),
                  }),
                  (0, r.jsx)(l.U, {
                      children: (0, r.jsx)(c.ZP, {
                          title: p.intl.string(p.t.NfeuZ3),
                          value: _.all || _.mutualFriends,
                          onChange: (e) =>
                              o.vB.updateControlledSetting(
                                  t,
                                  e ? a.pj(n, f.SOq.MUTUAL_FRIENDS) : a.M1(n, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION),
                              ),
                      }),
                  }),
                  (0, r.jsx)(l.U, {
                      children: (0, r.jsx)(c.ZP, {
                          title: p.intl.string(p.t.qsMfsH),
                          value: _.all || _.mutualGuilds,
                          onChange: (e) =>
                              o.vB.updateControlledSetting(
                                  t,
                                  e ? a.pj(n, f.SOq.MUTUAL_GUILDS) : a.M1(n, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION),
                              ),
                      }),
                  }),
              ],
          });
}
