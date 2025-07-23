n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(82659),
    l = n(481060),
    o = n(570140),
    s = n(317770),
    a = n(981631),
    c = n(388032);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let d = 'ActivityInviteManager',
    h = () => {
        o.Z.dispatch({ type: 'ACTIVITY_INVITE_MODAL_CLOSE' });
    };
class p extends s.Z {
    _initialize() {
        (o.Z.subscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), o.Z.subscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose));
    }
    _terminate() {
        (o.Z.unsubscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), o.Z.unsubscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose));
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: o, context: s } = e,
            p = s === a.IlC.POPOUT ? l.u1M : l.z1l;
        o
            ? (0, l.h7j)(
                  (e) => {
                      var n, o;
                      return (0, r.jsx)(
                          i.Modal,
                          ((n = u(
                              {
                                  title: c.intl.formatToPlainString(c.t['2tN7io'], { name: t.name }),
                                  actions: [
                                      {
                                          variant: 'primary',
                                          text: c.intl.string(c.t.BddRzc),
                                          onClick: e.onClose,
                                          autoFocus: !0
                                      }
                                  ]
                              },
                              e
                          )),
                          (o = o =
                              {
                                  children: (0, r.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: c.intl.string(c.t.MAxtkp)
                                  })
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
                          n)
                      );
                  },
                  {
                      onCloseCallback: h,
                      modalKey: d
                  },
                  p
              )
            : (0, l.ZDy)(
                  async () => {
                      let { default: e } = await n.e('95463').then(n.bind(n, 699099));
                      return (t) => (0, r.jsx)(e, u({}, t));
                  },
                  {
                      onCloseCallback: h,
                      modalKey: d,
                      contextKey: p
                  }
              );
    }
    handleModalClose(e) {
        (0, l.Mr3)(d);
    }
}
let f = new p();
