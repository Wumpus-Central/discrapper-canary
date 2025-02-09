e.d(n, { Z: () => Z });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    o = e(846027),
    d = e(131951),
    r = e(594174),
    s = e(36703),
    u = e(358085),
    c = e(65154),
    g = e(388032);
function Z(t) {
    var n;
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        Z = (0, l.e7)([d.Z], () => d.Z.getLocalVolume(t, e), [t, e]),
        f = t === (null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
        v = e === c.Yn.STREAM;
    return f
        ? null
        : (0, i.jsx)(a.II_, {
              id: 'user-volume',
              label: v ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH),
              control: (n, l) =>
                  (0, i.jsx)(a._wy, {
                      ...n,
                      ref: l,
                      value: (0, s.P)(Z),
                      maxValue: u.isPlatformEmbedded ? 200 : 100,
                      onChange: (n) => o.Z.setLocalVolume(t, (0, s.A)(n), e),
                      'aria-label': v ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH)
                  })
          });
}
