var _ = n(582128),
    A = n(855986),
    l = n(19191),
    r = n(597758),
    i = n(412260);
function E(e) {
    _.useEffect(() => {
        (0, r.BE)();
    }, []);
    let t = (0, A.bG)([i.A, l.A], () => {
            let t = e();
            if (null == t) return null;
            let n = t.promotionId,
                _ = i.A.getMarketingPromotionForEligibility(n);
            if (_?.trialId != null) {
                let e = l.A.getUserTrialOffer(_.trialId);
                if (null == e || e.hasExpired) return null;
            }
            return t;
        }),
        n = (0, A.bG)([i.A], () => i.A.getMarketingPromotionForEligibility(t?.promotionId ?? "")),
        E = n?.endDate,
        N = _.useMemo(() => {
            let e = { endDate: E, expired: !1 },
                t = { endDate: E, expired: !0 };
            return () => (null != E && E.getTime() <= Date.now() ? t : e);
        }, [E]),
        T = _.useCallback(
            (e) => {
                let t;
                if (null == E) return () => {};
                let n = E.getTime(),
                    _ = n - Date.now();
                if (_ <= 0 || _ >= 864e5) return () => {};
                let A = () => {
                    let _ = n - Date.now();
                    _ > 0 ? (t = setTimeout(A, _)) : e();
                };
                return ((t = setTimeout(A, _)), () => clearTimeout(t));
            },
            [E],
        );
    return _.useSyncExternalStore(T, N, N).expired ? null : t;
}
n.d(
    t,
    {},
    {
        C: E,
        u: function (e) {
            return E(() => i.A.getMarketingComponentBySurface(e));
        },
    },
);
