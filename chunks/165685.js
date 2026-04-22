"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(830215),
    a = n(439372),
    o = n(287809),
    l = n(954571),
    u = n(536194),
    d = n(715314),
    c = n(652215),
    _ = n(818348);
class f extends a.A {
    actions = { POST_CONNECTION_OPEN: this.handleConnectionOpen };
    handleConnectionOpen() {
        let e = o.default.getCurrentUser();
        if (null == e || u.P.isDisallowPopupsSet()) return;
        let t = d.A.requiredActionsIncludes(e.id, [c.Kby.UPDATE_PASSWORD]);
        d.A.wasLoginAttemptedInSession(e.id) && t
            ? (0, i.openModalLazy)(
                  async () => {
                      let { default: e } = await n.e("65306").then(n.bind(n, 846017));
                      return function (t) {
                          let n = async () => {
                              await t.onClose(), s.A.logout("login_required_account_manager", c.BVt.LOGIN);
                          };
                          return (0, r.jsx)(e, {
                              ...t,
                              onSuccess: () => {
                                  l.default.track(c.HAw.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose();
                              },
                              onClose: n,
                              requirementsUpdated: !0,
                          });
                      };
                  },
                  { modalKey: "LOGIN_REQUIRED_ACTIONS_MODAL_KEY", onCloseRequest: _.FX, instant: !0 },
              )
            : t && s.A.logout("login_required_account_manager", c.BVt.LOGIN);
    }
}
let E = new f();
