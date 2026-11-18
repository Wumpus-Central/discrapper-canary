var l = n(582128),
    r = n(855986),
    i = n(19191),
    u = n(597758),
    o = n(412260),
    a = n(316511);
n.d(
    t,
    {},
    {
        Th: 864e5,
        uF: function (e) {
            var t;
            let n, c, s, d, f;
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
                    return (0, a.A)(l, i.A) ? e : null;
                })),
                (c = (0, r.bG)([o.A], () => o.A.getMarketingPromotionForEligibility(n?.promotionId ?? ""))),
                (s = c?.endDate),
                (d = l.useMemo(() => {
                    let e = { endDate: s, expired: !1 },
                        t = { endDate: s, expired: !0 };
                    return () => (null != s && s.getTime() <= Date.now() ? t : e);
                }, [s])),
                (f = l.useCallback(
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
                l.useSyncExternalStore(f, d, d).expired ? null : n
            );
        },
    },
);
