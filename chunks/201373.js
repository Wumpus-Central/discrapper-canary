"use strict";
n.d(t, { o: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(92077),
    s = n(293066),
    o = n(775228);
function l(e, t, l, u, c) {
    let d = o.A.getInstallationPath(e.id, t),
        _ = null != e.eulaId && !s.A.hasAcceptedEULA(e.eulaId);
    null == d || _
        ? (0, i.mMO)(async () => {
              let { default: i } = await n.e("64676").then(n.bind(n, 867087));
              return (n) => (0, r.jsx)(i, { ...n, applicationId: e.id, branchId: t, analyticsLocation: c });
          })
        : (0, a.oc)({
              application: e,
              branchId: t,
              buildId: l,
              manifestIds: u,
              installationPath: d,
              analyticsLocation: c,
          });
}
