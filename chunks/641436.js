var l = n(582128),
    r = n(855986),
    i = n(19191),
    u = n(597758),
    o = n(412260);
n.d(
    t,
    {},
    {
        u: function (e) {
            var t;
            let n, a, s, c, d;
            return (
                (t = () => o.A.getMarketingComponentBySurface(e)),
                l.useEffect(() => {
                    (0, u.BE)();
                }, []),
                (n = (0, r.bG)([o.A, i.A], () => {
                    let e = t();
                    if (null == e) return null;
                    let n = e.promotionId,
                        l = o.A.getMarketingPromotionForEligibility(n);
                    if (l?.trialId != null) {
                        let e = i.A.getUserTrialOffer(l.trialId);
                        if (null == e || e.hasExpired) return null;
                    }
                    return e;
                })),
                (a = (0, r.bG)([o.A], () => o.A.getMarketingPromotionForEligibility(n?.promotionId ?? ""))),
                (s = a?.endDate),
                (c = l.useMemo(() => {
                    let e = { endDate: s, expired: !1 },
                        t = { endDate: s, expired: !0 };
                    return () => (null != s && s.getTime() <= Date.now() ? t : e);
                }, [s])),
                (d = l.useCallback(
                    (e) => {
                        let t;
                        if (null == s) return () => {};
                        let n = s.getTime(),
                            l = n - Date.now();
                        if (l <= 0 || l >= 864e5) return () => {};
                        let r = () => {
                            let l = n - Date.now();
                            l > 0 ? (t = setTimeout(r, l)) : e();
                        };
                        return ((t = setTimeout(r, l)), () => clearTimeout(t));
                    },
                    [s],
                )),
                l.useSyncExternalStore(d, c, c).expired ? null : n
            );
        },
    },
);
