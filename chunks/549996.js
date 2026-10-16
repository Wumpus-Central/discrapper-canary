_.d(t, { c: () => r });
var A = _(582128),
    n = _(17928),
    l = _(354670),
    E = _(962644),
    T = _(412260),
    N = _(852218);
function r(e) {
    A.useEffect(() => {
        (0, E.BE)();
    }, []);
    let t = (0, n.bG)([T.A, l.A], () => {
            let t = T.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let _ = t.promotionId,
                A = T.A.getPromotionByTypeAndId(N.pt.MARKETING_MOMENT, _);
            if (A?.trialId != null) {
                let e = l.A.getUserTrialOffer(A.trialId);
                if (null == e || e.hasExpired) return null;
            }
            return t;
        }),
        _ = (0, n.bG)([T.A], () => T.A.getPromotionByTypeAndId(N.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        r = _?.endDate,
        [I, R] = A.useState(!1),
        i = A.useRef(null);
    return (
        A.useEffect(() => {
            if (null != r) {
                let e = r.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (R(!1),
                          clearTimeout(i.current),
                          (i.current = setTimeout(() => {
                              R(!0);
                          }, e)))
                        : e <= 0 && R(!0),
                    () => {
                        clearTimeout(i.current);
                    }
                );
            }
            (R(!1), clearTimeout(i.current));
        }, [r]),
        I ? null : t
    );
}
