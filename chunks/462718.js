n.d(e, { Z: () => E });
var i = n(54381),
    l = n(657707),
    u = n(481060),
    r = n(893776),
    s = n(509613),
    a = n(313789),
    o = n(342386),
    c = n(388032);
let E = (0, s.m7)(a.n.LOGOUT_SIDEBAR_ITEM, {
    useTitle: () => c.intl.string(c.t["2jxGer"]),
    icon: l.PBZ,
    onClick: () => {
        (0, u.h7j)((t) => {
            var e, n;
            return (0, i.jsx)(
                u.ConfirmModal,
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }),
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = i);
                            });
                    }
                    return t;
                })(
                    {
                        header: c.intl.string(c.t["2jxGer"]),
                        confirmText: c.intl.string(c.t["2jxGer"]),
                        cancelText: c.intl.string(c.t["ETE/oC"]),
                        onCancel: t.onClose,
                        onConfirm: () => {
                            (0, o.default)(), r.Z.logout("settings");
                        },
                    },
                    t,
                )),
                (n = n =
                    {
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: c.intl.string(c.t.SUnWBB),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : (function (t, e) {
                          var n = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      }),
                e),
            );
        });
    },
    buildLayout: () => [],
});
