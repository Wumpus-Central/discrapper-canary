var A = _(582128),
    n = _(855986),
    l = _(19191),
    r = _(597758),
    E = _(412260);
_.d(
    e,
    {},
    {
        c: function (t) {
            return (function (t) {
                A.useEffect(() => {
                    (0, r.BE)();
                }, []);
                let e = (0, n.bG)([E.A, l.A], () => {
                        let e = t();
                        if (null == e) return null;
                        let _ = e.promotionId,
                            A = E.A.getMarketingPromotionForEligibility(_);
                        if (A?.trialId != null) {
                            let t = l.A.getUserTrialOffer(A.trialId);
                            if (null == t || t.hasExpired) return null;
                        }
                        return e;
                    }),
                    _ = (0, n.bG)([E.A], () => E.A.getMarketingPromotionForEligibility(e?.promotionId ?? "")),
                    N = _?.endDate,
                    [T, i] = A.useState(!1),
                    O = A.useRef(null);
                return (
                    A.useEffect(() => {
                        if (null != N) {
                            let t = N.getTime() - Date.now();
                            return (
                                t > 0 && t < 864e5
                                    ? (i(!1),
                                      clearTimeout(O.current),
                                      (O.current = setTimeout(() => {
                                          i(!0);
                                      }, t)))
                                    : t <= 0 && i(!0),
                                () => {
                                    clearTimeout(O.current);
                                }
                            );
                        }
                        (i(!1), clearTimeout(O.current));
                    }, [N]),
                    T ? null : e
                );
            })(() => E.A.getMarketingComponentByType(t));
        },
    },
);
