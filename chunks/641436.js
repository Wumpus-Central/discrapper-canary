var l = n(582128),
    r = n(855986),
    i = n(19191),
    u = n(597758),
    o = n(412260);
function a(e) {
    l.useEffect(() => {
        (0, u.BE)();
    }, []);
    let t = (0, r.bG)([o.A, i.A], () => {
            let t = e();
            if (null == t) return null;
            let n = t.promotionId,
                l = o.A.getMarketingPromotionForEligibility(n);
            if (l?.trialId != null) {
                let e = i.A.getUserTrialOffer(l.trialId);
                if (null == e || e.hasExpired) return null;
            }
            return t;
        }),
        n = (0, r.bG)([o.A], () => o.A.getMarketingPromotionForEligibility(t?.promotionId ?? "")),
        a = n?.endDate,
        s = l.useMemo(() => {
            let e = { endDate: a, expired: !1 },
                t = { endDate: a, expired: !0 };
            return () => (null != a && a.getTime() <= Date.now() ? t : e);
        }, [a]),
        c = l.useCallback(
            (e) => {
                let t;
                if (null == a) return () => {};
                let n = a.getTime(),
                    l = n - Date.now();
                if (l <= 0 || l >= 864e5) return () => {};
                let r = () => {
                    let l = n - Date.now();
                    l > 0 ? (t = setTimeout(r, l)) : e();
                };
                return ((t = setTimeout(r, l)), () => clearTimeout(t));
            },
            [a],
        );
    return l.useSyncExternalStore(c, s, s).expired ? null : t;
}
n.d(
    t,
    {},
    {
        C: a,
        u: function (e) {
            return a(() => o.A.getMarketingComponentBySurface(e));
        },
    },
);
