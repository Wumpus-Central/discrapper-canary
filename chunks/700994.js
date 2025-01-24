t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    o = t(846027),
    a = t(131951),
    u = t(594174),
    d = t(36703),
    s = t(358085),
    c = t(65154),
    Z = t(388032);
function f(e) {
    var n;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        f = (0, l.e7)([a.Z], () => a.Z.getLocalVolume(e, t), [e, t]),
        m = e === (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
        g = t === c.Yn.STREAM;
    return m
        ? null
        : (0, i.jsx)(r.MenuControlItem, {
              id: 'user-volume',
              label: g ? Z.intl.string(Z.t.t4JBnJ) : Z.intl.string(Z.t.m7TNdH),
              control: (n, l) =>
                  (0, i.jsx)(r.MenuSliderControl, {
                      ...n,
                      ref: l,
                      value: (0, d.P)(f),
                      maxValue: s.isPlatformEmbedded ? 200 : 100,
                      onChange: (n) => o.Z.setLocalVolume(e, (0, d.A)(n), t),
                      'aria-label': g ? Z.intl.string(Z.t.t4JBnJ) : Z.intl.string(Z.t.m7TNdH)
                  })
          });
}
