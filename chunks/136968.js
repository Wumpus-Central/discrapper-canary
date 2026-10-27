i.d(n, { A: () => A });
var l = i(477900);
i(582128);
var t = i(477782),
    o = i(231483),
    a = i(192308),
    c = i(267102),
    p = i(17928),
    s = i(587895),
    d = i(260498),
    r = i(333807),
    u = i(248675),
    m = i(105292);
function A(e) {
    let n = (0, c.Us)(),
        A = (0, p.bG)(
            [s.A, d.Ay],
            () =>
                null != e && (0, r.A)(e)
                    ? (s.A.getApplication(e)?.name ?? d.Ay.findProjectByApplicationId(e)?.name ?? null)
                    : null,
            [e],
        );
    return null == e || null == A
        ? null
        : (0, l.jsx)(
              t.Dr,
              {
                  id: "conjure-device-permissions",
                  icon: o.ShieldIcon,
                  leadingAccessory: { type: "icon", icon: o.ShieldIcon },
                  label: m.intl.string(u.default.wum6n2),
                  action: () =>
                      ((e) => {
                          let { applicationId: n, appName: t, modalContextKey: o } = e;
                          (0, a.openModalLazy)(
                              async () => {
                                  let { default: e } = await Promise.all([
                                      i.e("53746"),
                                      i.e("992166"),
                                      i.e("209226"),
                                  ]).then(i.bind(i, 504785));
                                  return (i) => (0, l.jsx)(e, { ...i, applicationId: n, appName: t });
                              },
                              { contextKey: o },
                          );
                      })({ applicationId: e, appName: A, modalContextKey: (0, a.modalContextFromAppContext)(n) }),
              },
              "conjure-device-permissions",
          );
}
