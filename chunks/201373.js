"use strict";
n.d(t, { o: () => l });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(92077),
    a = n(293066),
    o = n(775228);
function l(e, t, l, u, d) {
    let c = o.A.getInstallationPath(e.id, t),
        _ = null != e.eulaId && !a.A.hasAcceptedEULA(e.eulaId);
    null == c || _
        ? (0, i.openModalLazy)(async () => {
              let { default: i } = await n.e("64676").then(n.bind(n, 867087));
              return (n) => (0, r.jsx)(i, { ...n, applicationId: e.id, branchId: t, analyticsLocation: d });
          })
        : (0, s.oc)({
              application: e,
              branchId: t,
              buildId: l,
              manifestIds: u,
              installationPath: c,
              analyticsLocation: d,
          });
}
