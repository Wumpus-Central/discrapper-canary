"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(960488),
    a = n(311907),
    s = n(49463),
    o = n(961350),
    l = n(652215);
let u = (e) => {
        let { hasLoadedExperiments: t, token: n } = e;
        return null != n
            ? (0, r.jsx)(i.rd, { to: l.BVt.APP })
            : t
              ? (0, r.jsx)(i.rd, { to: l.BVt.DEFAULT_LOGGED_OUT })
              : null;
    },
    c = a.Ay.connectStores([s.A, o.default], () => {
        let e = o.default.getToken();
        return { token: e, hasLoadedExperiments: null != e || s.A.hasLoadedExperiments };
    })(u);
