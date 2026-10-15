A.d(t, { c: () => N });
var _ = A(582128),
    n = A(17928),
    l = A(354670),
    E = A(962644),
    r = A(412260),
    T = A(852218);
function N(e) {
    _.useEffect(() => {
        (0, E.BE)();
    }, []);
    let t = (0, n.bG)([r.A, l.A], () => {
            let t = r.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let A = t.promotionId,
                _ = r.A.getPromotionByTypeAndId(T.pt.MARKETING_MOMENT, A);
            if (_?.trialId != null) {
                let e = l.A.getUserTrialOffer(_.trialId);
                if (null == e || e.hasExpired) return null;
            }
            return t;
        }),
        A = (0, n.bG)([r.A], () => r.A.getPromotionByTypeAndId(T.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        N = A?.endDate,
        [i, I] = _.useState(!1),
        R = _.useRef(null);
    return (
        _.useEffect(() => {
            if (null != N) {
                let e = N.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (I(!1),
                          clearTimeout(R.current),
                          (R.current = setTimeout(() => {
                              I(!0);
                          }, e)))
                        : e <= 0 && I(!0),
                    () => {
                        clearTimeout(R.current);
                    }
                );
            }
            (I(!1), clearTimeout(R.current));
        }, [N]),
        i ? null : t
    );
}
