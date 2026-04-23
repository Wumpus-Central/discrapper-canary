"use strict";
n.d(e, { A: () => f });
var r = n(627968);
n(64700);
var o = n(311907),
    i = n(477782),
    a = n(688810),
    s = n(915089),
    u = n(287809),
    l = n(927578),
    c = n(536432);
n(980504);
var d = n(985018);
function f(t, e) {
    let { analyticsLocations: n } = (0, a.Ay)(),
        f = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
        p = (0, s.GV)(),
        w = (0, s.GV)();
    return null != e && l.Ay.canUseCustomCallSounds(f)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.Dr, { id: p, label: d.intl.string(d.t.p2hUt7), action: () => (0, c.un)(e, t, n) }),
                  (0, r.jsx)(i.Dr, { id: w, label: d.intl.string(d.t["/yA6Qd"]), action: () => (0, c.un)("0", t, n) }),
              ],
          })
        : null;
}
