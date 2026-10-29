i.d(n, { A: () => m });
var t = i(477900);
i(582128);
var l = i(477782),
    o = i(231483),
    a = i(192308),
    c = i(267102),
    r = i(521802),
    s = i(17928),
    u = i(587895),
    d = i(260498),
    p = i(333807),
    A = i(87501),
    y = i(105292);
function m(e) {
    let n = (0, c.Us)(),
        m = (0, s.bG)(
            [u.A, d.Ay],
            () =>
                null != e && (0, p.A)(e)
                    ? (u.A.getApplication(e)?.name ?? d.Ay.findProjectByApplicationId(e)?.name ?? null)
                    : null,
            [e],
        ),
        h = (0, r.A)(e);
    return null == e || null == m || 0 === h.length
        ? null
        : (0, t.jsx)(
              l.Dr,
              {
                  id: "conjure-device-permissions",
                  icon: o.ShieldIcon,
                  leadingAccessory: { type: "icon", icon: o.ShieldIcon },
                  label: y.intl.string(A.default.wum6n2),
                  action: () =>
                      ((e) => {
                          let { applicationId: n, appName: l, modalContextKey: o } = e;
                          (0, a.openModalLazy)(
                              async () => {
                                  let { default: e } = await Promise.all([i.e("53746"), i.e("209226")]).then(
                                      i.bind(i, 504785),
                                  );
                                  return (i) => (0, t.jsx)(e, { ...i, applicationId: n, appName: l });
                              },
                              { contextKey: o },
                          );
                      })({ applicationId: e, appName: m, modalContextKey: (0, a.modalContextFromAppContext)(n) }),
              },
              "conjure-device-permissions",
          );
}
