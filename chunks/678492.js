n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140),
    a = n(317770),
    o = n(388032);
class s extends a.Z {
    _initialize() {
        l.Z.subscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        l.Z.unsubscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, i.h7j)((e) => {
            var t, n;
            return (0, r.jsx)(
                i.ConfirmModal,
                ((t = (function (e) {
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
                })({}, e)),
                (n = n =
                    {
                        header: o.NW.string(o.t.wDQgnZ),
                        confirmText: o.NW.string(o.t['cY+Ooa']),
                        confirmButtonColor: i.zxk.Colors.GREEN,
                        children: (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            children: o.NW.string(o.t.OJklbW)
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        });
    }
}
let c = new s();
