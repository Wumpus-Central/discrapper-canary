"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(830215),
    a = n(439372),
    o = n(287809),
    l = n(954571),
    _ = n(536194),
    d = n(715314),
    u = n(652215),
    c = n(818348);
class E extends a.A {
    actions = { POST_CONNECTION_OPEN: this.handleConnectionOpen };
    handleConnectionOpen() {
        let e = o.default.getCurrentUser();
        if (null == e || _.P.isDisallowPopupsSet()) return;
        let t = d.A.requiredActionsIncludes(e.id, [u.Kby.UPDATE_PASSWORD]);
        d.A.wasLoginAttemptedInSession(e.id) && t
            ? (0, r.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("62680"),
                          n.e("27323"),
                          n.e("53983"),
                          n.e("65306"),
                      ]).then(n.bind(n, 846017));
                      return function (t) {
                          let n = async () => {
                              await t.onClose(), s.A.logout("login_required_account_manager", u.BVt.LOGIN);
                          };
                          return (0, i.jsx)(e, {
                              ...t,
                              onSuccess: () => {
                                  l.default.track(u.HAw.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose();
                              },
                              onClose: n,
                              requirementsUpdated: !0,
                          });
                      };
                  },
                  { modalKey: "LOGIN_REQUIRED_ACTIONS_MODAL_KEY", onCloseRequest: c.FX, instant: !0 },
              )
            : t && s.A.logout("login_required_account_manager", u.BVt.LOGIN);
    }
}
let h = new E();
