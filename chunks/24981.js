_.d(t, { c: () => N });
var A = _(412260),
    n = _(582128),
    l = _(855986),
    r = _(19191),
    E = _(597758);
function N(e) {
    var t;
    let _, N, i, T, O;
    return (
        (t = () => A.A.getMarketingComponentByType(e)),
        n.useEffect(() => {
            (0, E.BE)();
        }, []),
        (_ = (0, l.bG)([A.A, r.A], () => {
            let e = t();
            if (null == e) return null;
            let _ = e.promotionId,
                n = A.A.getMarketingPromotionForEligibility(_);
            if (n?.trialId != null) {
                let e = r.A.getUserTrialOffer(n.trialId);
                if (null == e || e.hasExpired) return null;
            }
            return e;
        })),
        (N = (0, l.bG)([A.A], () => A.A.getMarketingPromotionForEligibility(_?.promotionId ?? ""))),
        (i = N?.endDate),
        (T = n.useMemo(() => {
            let e = { endDate: i, expired: !1 },
                t = { endDate: i, expired: !0 };
            return () => (null != i && i.getTime() <= Date.now() ? t : e);
        }, [i])),
        (O = n.useCallback(
            (e) => {
                let t;
                if (null == i) return () => {};
                let _ = i.getTime(),
                    A = _ - Date.now();
                if (A <= 0 || A >= 864e5) return () => {};
                let n = () => {
                    let A = _ - Date.now();
                    A > 0 ? (t = setTimeout(n, A)) : e();
                };
                return ((t = setTimeout(n, A)), () => clearTimeout(t));
            },
            [i],
        )),
        n.useSyncExternalStore(O, T, T).expired ? null : _
    );
}
