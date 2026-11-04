n.d(i, { A: () => h });
var l = n(477900);
n(582128);
var t = n(477782),
    c = n(231483),
    r = n(192308),
    a = n(267102),
    o = n(521802),
    s = n(855986),
    u = n(587895),
    d = n(260498),
    p = n(333807),
    A = n(191850),
    y = n(792996);
function h(e) {
    let i = (0, a.Us)(),
        h = (0, s.bG)(
            [u.A, d.Ay],
            () =>
                null != e && (0, p.A)(e)
                    ? (u.A.getApplication(e)?.name ?? d.Ay.findProjectByApplicationId(e)?.name ?? null)
                    : null,
            [e],
        ),
        m = (0, o.A)(e);
    return null == e || null == h || 0 === m.length
        ? null
        : (0, l.jsx)(
              t.Dr,
              {
                  id: "conjure-device-permissions",
                  icon: c.ShieldIcon,
                  leadingAccessory: { type: "icon", icon: c.ShieldIcon },
                  label: y.intl.string(A.default.wum6n2),
                  action: () =>
                      ((e) => {
                          let { applicationId: i, appName: t, modalContextKey: c } = e;
                          (0, r.mM)(
                              async () => {
                                  let { default: e } = await Promise.all([n.e(53746), n.e(628265)]).then(
                                      n.bind(n, 102544),
                                  );
                                  return (n) => (0, l.jsx)(e, { ...n, applicationId: i, appName: t });
                              },
                              { contextKey: c },
                          );
                      })({ applicationId: e, appName: h, modalContextKey: (0, r.TI)(i) }),
              },
              "conjure-device-permissions",
          );
}
