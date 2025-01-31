n.d(e, { L: () => r });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(51025),
    s = n(850840),
    o = n(391690);
function r(t, e, r, c, d) {
    let u = o.Z.getInstallationPath(t.id, e),
        p = null != t.eulaId && !s.Z.hasAcceptedEULA(t.eulaId);
    null == u || p
        ? (0, l.ZDy)(async () => {
              let { default: l } = await n.e('226').then(n.bind(n, 472064));
              return (n) =>
                  (0, i.jsx)(l, {
                      ...n,
                      applicationId: t.id,
                      branchId: e,
                      analyticsLocation: d
                  });
          })
        : (0, a.LO)({
              application: t,
              branchId: e,
              buildId: r,
              manifestIds: c,
              installationPath: u,
              analyticsLocation: d
          });
}
