n.d(t, { B: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(668781),
    l = n(231338),
    o = n(388032);
let s = (e) => {
    let t = 'group-dm-edit-modal-'.concat(e),
        s = !1,
        c = (e) => {
            s = e;
        },
        u = () => {
            s
                ? a.Z.show({
                      title: o.NW.string(o.t.pvRCSk),
                      body: o.NW.string(o.t.DRi46e),
                      confirmText: o.NW.string(o.t['6GQDFh']),
                      confirmColor: i.Ttl.RED,
                      cancelText: o.NW.string(o.t.DmDzZG),
                      onConfirm: () => (0, i.Mr3)(t),
                      onCancel: l.dG
                  })
                : (0, i.Mr3)(t);
        };
    (0, i.ZDy)(
        async () => {
            let { default: t } = await n.e('41259').then(n.bind(n, 912114));
            return (n) =>
                (0, r.jsx)(
                    t,
                    (function (e) {
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
                    })(
                        {
                            closeOrShowDiscardChangesAlert: u,
                            setHasPendingChanges: c,
                            channelId: e
                        },
                        n
                    )
                );
        },
        {
            modalKey: t,
            onCloseRequest: u
        }
    );
};
