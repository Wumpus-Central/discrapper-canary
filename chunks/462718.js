n.d(e, { Z: () => d });
var i = n(951288),
    l = n(603113),
    u = n(657707),
    r = n(481060),
    s = n(893776),
    a = n(509613),
    o = n(313789),
    c = n(518596),
    E = n(388032);
let d = (0, a.m7)(o.n.LOGOUT_SIDEBAR_ITEM, {
    useTitle: () => E.intl.string(E.t["2jxGen"]),
    icon: u.PBZ,
    onClick: () => {
        (0, r.h7j)((t) => {
            var e, n;
            return (0, i.jsx)(
                r.ConfirmModal,
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
                        header: E.intl.string(E.t["2jxGen"]),
                        confirmText: E.intl.string(E.t["2jxGen"]),
                        cancelText: E.intl.string(E.t["ETE/oK"]),
                        onCancel: t.onClose,
                        onConfirm: () => {
                            l.flushSync(() => {
                                (0, r.Mr3)(c.USER_SETTINGS_MODAL_KEY);
                            }),
                                s.Z.logout("settings");
                        },
                    },
                    t,
                )),
                (n = n =
                    {
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: E.intl.string(E.t.SUnWBA),
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
