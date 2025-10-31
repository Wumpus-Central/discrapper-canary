n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(793030),
    l = n(481060),
    o = n(570140),
    a = n(317770),
    s = n(981631),
    c = n(388032);
function u(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let d = "ActivityInviteManager",
    p = () => {
        o.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_CLOSE" });
    };
class h extends a.Z {
    _initialize() {
        o.Z.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            o.Z.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
    }
    _terminate() {
        o.Z.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen),
            o.Z.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: o, context: a } = e,
            h = a === s.IlC.POPOUT ? l.u1M : l.z1l;
        o
            ? (0, l.h7j)(
                  (e) => {
                      var n, o;
                      return (0, r.jsx)(
                          i.Modal,
                          ((n = u(
                              {
                                  title: c.intl.formatToPlainString(c.t["2tN7ih"], { name: t.name }),
                                  actions: [
                                      {
                                          variant: "primary",
                                          text: c.intl.string(c.t.BddRzS),
                                          onClick: e.onClose,
                                          autoFocus: !0,
                                      },
                                  ],
                              },
                              e,
                          )),
                          (o = o =
                              {
                                  children: (0, r.jsx)(l.Text, {
                                      variant: "text-md/normal",
                                      children: c.intl.string(c.t.MAxtks),
                                  }),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(o)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                                }),
                          n),
                      );
                  },
                  {
                      onCloseCallback: p,
                      modalKey: d,
                  },
                  h,
              )
            : (0, l.ZDy)(
                  async () => {
                      let { default: e } = await n.e("5598").then(n.bind(n, 621566));
                      return (t) => (0, r.jsx)(e, u({}, t));
                  },
                  {
                      onCloseCallback: p,
                      modalKey: d,
                      contextKey: h,
                  },
              );
    }
    handleModalClose(e) {
        (0, l.Mr3)(d);
    }
}
let f = new h();
