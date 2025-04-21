n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var o = n(442837),
    i = n(481060),
    a = n(906732),
    c = n(313201),
    u = n(594174),
    l = n(74538),
    s = n(242291),
    d = n(710111),
    f = n(388032);
function b(e, t) {
    let { analyticsLocations: n } = (0, a.ZP)(),
        b = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        p = (0, c.Dt)(),
        y = (0, c.Dt)();
    return null != t && l.ZP.canUseCustomCallSounds(b)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.sNh, {
                      id: p,
                      label: f.intl.string(f.t.p2hUt7),
                      action: () => (0, s.SZ)(t, e, n)
                  }),
                  (0, r.jsx)(i.sNh, {
                      id: y,
                      label: f.intl.string(f.t['/yA6QU']),
                      action: () => (0, s.SZ)(d.hY, e, n)
                  })
              ]
          })
        : null;
}
