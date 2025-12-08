n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(755721),
    l = n(481060),
    a = n(570140),
    s = n(317770),
    o = n(388032);
class c extends s.Z {
    _initialize() {
        a.Z.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        a.Z.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, l.h7j)((e) => {
            var t, n;
            return (0, r.jsx)(
                l.VoidConfirmModal,
                ((t = (function (e) {
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
                })({}, e)),
                (n = n =
                    {
                        header: o.intl.string(o.t.wDQgnX),
                        confirmText: o.intl.string(o.t["cY+Oob"]),
                        confirmButtonColor: i.zx.Colors.GREEN,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: o.intl.string(o.t.OJklbS),
                        }),
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
                t),
            );
        });
    }
}
let u = new c();
