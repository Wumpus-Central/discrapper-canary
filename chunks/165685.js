"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(830215),
    s = n(439372),
    o = n(287809),
    l = n(954571),
    u = n(536194),
    c = n(715314),
    d = n(652215),
    _ = n(818348);
let f = "LOGIN_REQUIRED_ACTIONS_MODAL_KEY";
class p extends s.A {
    actions = { POST_CONNECTION_OPEN: this.handleConnectionOpen };
    handleConnectionOpen() {
        let e = o.default.getCurrentUser();
        if (null == e || u.P.isDisallowPopupsSet()) return;
        let t = c.A.requiredActionsIncludes(e.id, [d.Kby.UPDATE_PASSWORD]);
        c.A.wasLoginAttemptedInSession(e.id) && t
            ? (0, i.mMO)(
                  async () => {
                      let { default: e } = await n.e("10302").then(n.bind(n, 739693));
                      return function (t) {
                          let n = async () => {
                                  await t.onClose(), a.A.logout("login_required_account_manager", d.BVt.LOGIN);
                              },
                              i = () => {
                                  l.default.track(d.HAw.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose();
                              };
                          return (0, r.jsx)(e, { ...t, onSuccess: i, onClose: n, requirementsUpdated: !0 });
                      };
                  },
                  { modalKey: f, onCloseRequest: _.FX, instant: !0 },
              )
            : t && a.A.logout("login_required_account_manager", d.BVt.LOGIN);
    }
}
let h = new p();
