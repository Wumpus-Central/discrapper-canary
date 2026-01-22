n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(830215),
    s = n(439372),
    o = n(287809),
    l = n(954571),
    c = n(536194),
    u = n(715314),
    d = n(652215),
    f = n(818348);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = "LOGIN_REQUIRED_ACTIONS_MODAL_KEY";
class E extends s.A {
    handleConnectionOpen() {
        let e = o.default.getCurrentUser();
        if (null == e || c.P.isDisallowPopupsSet()) return;
        let t = u.A.requiredActionsIncludes(e.id, [d.Kby.UPDATE_PASSWORD]);
        u.A.wasLoginAttemptedInSession(e.id) && t
            ? (0, i.mMO)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(n.bind(n, 739693));
                      return function (t) {
                          let n = async () => {
                                  await t.onClose(), a.A.logout("login_required_account_manager", d.BVt.LOGIN);
                              },
                              i = () => {
                                  l.default.track(d.HAw.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose();
                              };
                          return (0, r.jsx)(
                              e,
                              m(_({}, t), {
                                  onSuccess: i,
                                  onClose: n,
                                  requirementsUpdated: !0,
                              }),
                          );
                      };
                  },
                  {
                      modalKey: g,
                      onCloseRequest: f.FX,
                      instant: !0,
                  },
              )
            : t && a.A.logout("login_required_account_manager", d.BVt.LOGIN);
    }
    constructor(...e) {
        super(...e),
            p(this, "actions", {
                POST_CONNECTION_OPEN: this.handleConnectionOpen,
            });
    }
}
let b = new E();
