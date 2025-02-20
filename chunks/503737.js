n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140),
    o = n(468026),
    s = n(317770),
    a = n(981631),
    c = n(388032);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let d = 'ActivityInviteManager',
    _ = () => {
        l.Z.dispatch({ type: 'ACTIVITY_INVITE_MODAL_CLOSE' });
    };
class E extends s.Z {
    _initialize() {
        l.Z.subscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), l.Z.subscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    _terminate() {
        l.Z.unsubscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), l.Z.unsubscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: l, context: s } = e,
            E = s === a.IlC.POPOUT ? i.u1M : i.z1l;
        l
            ? (0, i.h7j)(
                  (e) =>
                      (0, r.jsx)(
                          o.default,
                          u(
                              {
                                  title: c.NW.formatToPlainString(c.t['2tN7io'], { name: t.name }),
                                  body: c.NW.string(c.t.MAxtkp),
                                  confirmText: c.NW.string(c.t.BddRzc)
                              },
                              e
                          )
                      ),
                  {
                      onCloseCallback: _,
                      modalKey: d
                  },
                  E
              )
            : (0, i.ZDy)(
                  async () => {
                      let { default: e } = await n.e('79921').then(n.bind(n, 699099));
                      return (t) => (0, r.jsx)(e, u({}, t));
                  },
                  {
                      onCloseCallback: _,
                      modalKey: d,
                      contextKey: E
                  }
              );
    }
    handleModalClose(e) {
        (0, i.Mr3)(d);
    }
}
let p = new E();
