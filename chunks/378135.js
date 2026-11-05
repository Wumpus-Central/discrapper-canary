var i = n(582128),
    r = n(855986),
    a = n(451988),
    s = n(287809),
    l = n(19191),
    o = n(722178);
n.d(
    t,
    {},
    {
        P: function (e) {
            return e?.hasExpired ?? !1;
        },
        k: function (e) {
            let t = (0, r.bG)([l.A], () => l.A.getUserTrialOffer(e)),
                [n, d] = i.useState(t?.hasExpired ?? !1),
                c =
                    !(0, r.bG)([s.default], () => (0, o.TW)(s.default.getCurrentUser())) ||
                    l.A.canFractionalPremiumUserUseOffer();
            return (
                i.useEffect(() => {
                    if (null != t && t.hasAcknowledged) {
                        let e = new a.Ep();
                        return (
                            !(function i() {
                                if (null == t) return;
                                let r = null != t.expiresAt ? t.expiresAt.getTime() - Date.now() : 0;
                                e?.start(r, () => {
                                    !n && t.hasExpired ? d(!0) : i();
                                });
                            })(),
                            () => e.stop()
                        );
                    }
                }, [n, t]),
                !n && c ? t : null
            );
        },
    },
);
