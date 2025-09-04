n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(687158),
    o = n(866035),
    s = n(594174),
    c = n(981631),
    u = n(784968);
function d() {
    var e;
    let t = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    return ((0, a.le)(null != (e = null == t ? void 0 : t.id) ? e : ""), null == t)
        ? null
        : (0, r.jsx)(l.Ttm, {
              className: u.container,
              orientation: "auto",
              children: (0, r.jsx)(o.default, {
                  user: t,
                  currentUser: t,
                  transitionState: l.Dvm.ENTERED,
                  onClose: c.dG4,
                  hideRestrictedProfile: !0,
              }),
          });
}
