_.d(t, { c: () => r });
var A = _(582128),
    n = _(17928),
    l = _(354670),
    T = _(962644),
    N = _(412260),
    E = _(852218);
function r(e) {
    A.useEffect(() => {
        (0, T.BE)();
    }, []);
    let t = (0, n.bG)([N.A, l.A], () => {
            let t = N.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let _ = t.promotionId,
                A = N.A.getPromotionByTypeAndId(E.pt.MARKETING_MOMENT, _);
            if (A?.trialId != null) {
                let e = l.A.getUserTrialOffer(A.trialId);
                if (null == e || e.hasExpired) return null;
            }
            return t;
        }),
        _ = (0, n.bG)([N.A], () => N.A.getPromotionByTypeAndId(E.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        r = _?.endDate,
        [O, I] = A.useState(!1),
        R = A.useRef(null);
    return (
        A.useEffect(() => {
            if (null != r) {
                let e = r.getTime() - Date.now();
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
        }, [r]),
        O ? null : t
    );
}
