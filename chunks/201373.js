"use strict";
n.d(t, { o: () => l });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(92077),
    a = n(293066),
    o = n(775228);
function l(e, t, l, _, d) {
    let u = o.A.getInstallationPath(e.id, t),
        c = null != e.eulaId && !a.A.hasAcceptedEULA(e.eulaId);
    null == u || c
        ? (0, r.openModalLazy)(async () => {
              let { default: r } = await Promise.all([
                  n.e("17764"),
                  n.e("63397"),
                  n.e("19573"),
                  n.e("28866"),
                  n.e("34530"),
                  n.e("53729"),
                  n.e("52753"),
                  n.e("16061"),
              ]).then(n.bind(n, 125484));
              return (n) => (0, i.jsx)(r, { ...n, applicationId: e.id, branchId: t, analyticsLocation: d });
          })
        : (0, s.oc)({
              application: e,
              branchId: t,
              buildId: l,
              manifestIds: _,
              installationPath: u,
              analyticsLocation: d,
          });
}
