n.d(t, { B: () => s });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(668781),
    o = n(231338),
    a = n(388032);
let s = (e, t) => {
    let s = "group-dm-edit-modal-".concat(e),
        c = !1,
        u = (e) => {
            c = e;
        },
        d = () => {
            c
                ? l.Z.show({
                      title: a.intl.string(a.t.pvRCSk),
                      body: a.intl.string(a.t.DRi46e),
                      confirmText: a.intl.string(a.t["6GQDFh"]),
                      confirmVariant: "critical-primary",
                      cancelText: a.intl.string(a.t.DmDzZG),
                      onConfirm: () => (0, i.Mr3)(s),
                      onCancel: o.dG,
                  })
                : (0, i.Mr3)(s);
        };
    (0, i.ZDy)(
        async () => {
            let { default: i } = await n.e("41259").then(n.bind(n, 912114));
            return (n) =>
                (0, r.jsx)(
                    i,
                    (function (e) {
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
                            closeOrShowDiscardChangesAlert: d,
                            setHasPendingChanges: u,
                            channelId: e,
                            location: t,
                        },
                        n,
                    ),
                );
        },
        {
            modalKey: s,
            onCloseRequest: d,
        },
    );
};
