var i = n(582128),
    r = n(855986),
    a = n(451988),
    s = n(287809),
    l = n(19191),
    o = n(879610),
    d = n(682901);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = (0, r.bG)([l.A], () => l.A.getUserDiscountOffer(e)),
                [c, u] = i.useState(n?.hasExpired() ?? !1),
                _ = (0, r.bG)([s.default], () => (0, o.TW)(s.default.getCurrentUser())),
                E = d.i_.includes(e);
            return (
                i.useEffect(() => {
                    if (!n?.hasAcknowledged()) return;
                    let e = new a.Ep();
                    return (
                        !(function t() {
                            if (!n?.hasAcknowledged()) return;
                            let i = null != n.expiresAt ? n.expiresAt.getTime() - Date.now() : 0;
                            e?.start(i, () => {
                                !c && n.hasExpired() ? u(!0) : t();
                            });
                        })(),
                        () => e.stop()
                    );
                }, [c, n]),
                !c && (!_ || t || E) ? n : null
            );
        },
    },
);
