n.d(t, { c: () => i });
var A = n(582128),
    l = n(17928),
    _ = n(354670),
    r = n(962644),
    N = n(412260),
    T = n(852218);
function i(e) {
    A.useEffect(() => {
        (0, r.BE)();
    }, []);
    let t = (0, l.bG)([N.A, _.A], () => {
            let t = N.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                A = N.A.getPromotionByTypeAndId(T.pt.MARKETING_MOMENT, n);
            if (A?.trialId != null) {
                let e = _.A.getUserTrialOffer(A.trialId);
                if (null == e || e.hasExpired) return null;
            }
            return t;
        }),
        n = (0, l.bG)([N.A], () => N.A.getPromotionByTypeAndId(T.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        i = n?.endDate,
        [E, I] = A.useState(!1),
        u = A.useRef(null);
    return (
        A.useEffect(() => {
            if (null != i) {
                let e = i.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (I(!1),
                          clearTimeout(u.current),
                          (u.current = setTimeout(() => {
                              I(!0);
                          }, e)))
                        : e <= 0 && I(!0),
                    () => {
                        clearTimeout(u.current);
                    }
                );
            }
            (I(!1), clearTimeout(u.current));
        }, [i]),
        E ? null : t
    );
}
