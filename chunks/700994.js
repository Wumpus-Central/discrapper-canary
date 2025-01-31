n.d(e, { Z: () => Z });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    d = n(846027),
    r = n(131951),
    o = n(594174),
    s = n(36703),
    u = n(358085),
    c = n(65154),
    g = n(388032);
function Z(t) {
    var e;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        Z = (0, l.e7)([r.Z], () => r.Z.getLocalVolume(t, n), [t, n]),
        f = t === (null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id),
        v = n === c.Yn.STREAM;
    return f
        ? null
        : (0, i.jsx)(a.II_, {
              id: 'user-volume',
              label: v ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH),
              control: (e, l) =>
                  (0, i.jsx)(a._wy, {
                      ...e,
                      ref: l,
                      value: (0, s.P)(Z),
                      maxValue: u.isPlatformEmbedded ? 200 : 100,
                      onChange: (e) => d.Z.setLocalVolume(t, (0, s.A)(e), n),
                      'aria-label': v ? g.intl.string(g.t.t4JBnJ) : g.intl.string(g.t.m7TNdH)
                  })
          });
}
