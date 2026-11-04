var i = e(477900);
e(582128);
var a = e(192308),
    o = e(157559),
    r = e(818348),
    s = e(792996);
e.d(
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
                        e.e(144909),
                        e.e(55994),
                        e.e(841567),
                        e.e(188941),
                        e.e(958428),
                        e.e(695067),
                        e.e(442455),
                    ]).then(e.bind(e, 66442));
                    return (e) =>
                        (0, i.jsx)(a, {
                            closeOrShowDiscardChangesAlert: u,
                            setHasPendingChanges: d,
                            channelId: t,
                            location: n,
                            ...e,
                        });
                },
                { modalKey: c, onCloseRequest: u },
            );
        },
    },
);
