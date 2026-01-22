n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var o = n(311907),
    i = n(397927),
    l = n(688810),
    c = n(915089),
    a = n(287809),
    u = n(927578),
    s = n(536432),
    d = n(980504),
    b = n(985018);

function f(e, t) {
    let { analyticsLocations: n } = (0, l.Ay)(),
        f = (0, o.bG)([a.default], () => a.default.getCurrentUser()),
        p = (0, c.GV)(),
        y = (0, c.GV)();
    return null != t && u.Ay.canUseCustomCallSounds(f)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.Drp, {
                      id: p,
                      label: b.intl.string(b.t.p2hUt7),
                      action: () => (0, s.un)(t, e, n),
                  }),
                  (0, r.jsx)(i.Drp, {
                      id: y,
                      label: b.intl.string(b.t["/yA6Qd"]),
                      action: () => (0, s.un)(d.XH, e, n),
                  }),
              ],
          })
        : null;
}
