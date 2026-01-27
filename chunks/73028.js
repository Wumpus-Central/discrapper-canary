n.d(t, {
    U: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(157559),
    o = n(818348),
    a = n(985018);
let s = (e, t) => {
    let s = "group-dm-edit-modal-".concat(e),
        c = !1,
        u = (e) => {
            c = e;
        },
        E = () => {
            c
                ? l.A.show({
                      title: a.intl.string(a.t.pvRCSu),
                      body: a.intl.string(a.t.DRi46S),
                      confirmText: a.intl.string(a.t["6GQDFu"]),
                      confirmVariant: "critical-primary",
                      cancelText: a.intl.string(a.t.DmDzZB),
                      onConfirm: () => (0, i.OoC)(s),
                      onCancel: o.tE,
                  })
                : (0, i.OoC)(s);
        };
    (0, i.mMO)(
        async () => {
            let { default: i } = await n.e("42455").then(n.bind(n, 66442));
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
                            closeOrShowDiscardChangesAlert: E,
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
            onCloseRequest: E,
        },
    );
};
