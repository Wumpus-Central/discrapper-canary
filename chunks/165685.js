"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(830215),
    a = n(439372),
    o = n(287809),
    l = n(174459),
    u = n(536194),
    c = n(715314),
    d = n(652215),
    _ = n(818348);
class f extends a.A {
    actions = { POST_CONNECTION_OPEN: this.handleConnectionOpen };
    handleConnectionOpen() {
        let e = o.default.getCurrentUser();
        if (null == e || u.P.isDisallowPopupsSet()) return;
        let t = c.A.requiredActionsIncludes(e.id, [d.Kby.UPDATE_PASSWORD]);
        c.A.wasLoginAttemptedInSession(e.id) && t
            ? (0, r.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("62680"),
                          n.e("41043"),
                          n.e("18441"),
                          n.e("27323"),
                          n.e("47999"),
                          n.e("80890"),
                      ]).then(n.bind(n, 398177));
                      return function (t) {
                          let n = async () => {
                              await t.onClose(), s.A.logout("login_required_account_manager", d.BVt.LOGIN);
                          };
                          return (0, i.jsx)(e, {
                              ...t,
                              onSuccess: () => {
                                  l.default.track(d.HAw.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose();
                              },
                              onClose: n,
                              requirementsUpdated: !0,
                          });
                      };
                  },
                  { modalKey: "LOGIN_REQUIRED_ACTIONS_MODAL_KEY", onCloseRequest: _.FX, instant: !0 },
              )
            : t && s.A.logout("login_required_account_manager", d.BVt.LOGIN);
    }
}
let h = new f();
