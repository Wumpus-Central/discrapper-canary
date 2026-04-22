"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(873263),
    s = n(311907),
    a = n(49463),
    o = n(961350),
    l = n(652215);
let u = s.Ay.connectStores([a.A, o.default], () => {
    let e = o.default.getToken();
    return { token: e, hasLoadedExperiments: null != e || a.A.hasLoadedExperiments };
})((e) => {
    let { hasLoadedExperiments: t, token: n } = e;
    return null != n
        ? (0, r.jsx)(i.rd, { to: l.BVt.APP })
        : t
          ? (0, r.jsx)(i.rd, { to: l.BVt.DEFAULT_LOGGED_OUT })
          : null;
});
