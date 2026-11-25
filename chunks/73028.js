var e = i(477900);
i(582128);
var a = i(192308),
    o = i(157559),
    r = i(818348),
    s = i(792996);
i.d(
    n,
    {},
    {
        U: function (t, n) {
            let c = `group-dm-edit-modal-${t}`,
                l = !1;
            function d(t) {
                l = t;
            }
            function u() {
                l
                    ? o.A.show({
                          title: s.intl.string(s.t.pvRCSu),
                          body: s.intl.string(s.t.DRi46S),
                          confirmText: s.intl.string(s.t["6GQDFu"]),
                          confirmVariant: "critical-primary",
                          cancelText: s.intl.string(s.t.DmDzZB),
                          onConfirm: () => (0, a.Oo)(c),
                          onCancel: r.tE,
                      })
                    : (0, a.Oo)(c);
            }
            (0, a.mM)(
                async () => {
                    let { default: a } = await Promise.all([
                        i.e(55994),
                        i.e(841567),
                        i.e(958428),
                        i.e(695067),
                        i.e(442455),
                    ]).then(i.bind(i, 66442));
                    return (i) =>
                        (0, e.jsx)(a, {
                            closeOrShowDiscardChangesAlert: u,
                            setHasPendingChanges: d,
                            channelId: t,
                            location: n,
                            ...i,
                        });
                },
                { modalKey: c, onCloseRequest: u },
            );
        },
    },
);
