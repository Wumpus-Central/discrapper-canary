n.d(t, { Z: () => g });
var r = n(951288),
    i = n(603113),
    l = n(657707),
    o = n(481060),
    a = n(893776),
    s = n(509613),
    u = n(313789),
    c = n(518596),
    d = n(388032);
let g = (0, s.m7)(u.n.LOGOUT_SIDEBAR_ITEM, {
    useTitle: () => d.intl.string(d.t["2jxGen"]),
    icon: l.PBZ,
    onClick: () => {
        (0, o.h7j)((e) => {
            var t, n;
            return (0, r.jsx)(
                o.ConfirmModal,
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
                })(
                    {
                        header: d.intl.string(d.t["2jxGen"]),
                        confirmText: d.intl.string(d.t["2jxGen"]),
                        cancelText: d.intl.string(d.t["ETE/oK"]),
                        onCancel: e.onClose,
                        onConfirm: () => {
                            i.flushSync(() => {
                                (0, o.Mr3)(c.USER_SETTINGS_MODAL_KEY);
                            }),
                                a.Z.logout("settings");
                        },
                    },
                    e,
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: d.intl.string(d.t.SUnWBA),
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
    },
});
