t.d(e, { c: () => r });
var A = t(582128),
    n = t(17928),
    l = t(354670),
    T = t(962644),
    N = t(412260),
    E = t(852218);
function r(_) {
    A.useEffect(() => {
        (0, T.BE)();
    }, []);
    let e = (0, n.bG)([N.A, l.A], () => {
            let e = N.A.getMarketingComponentByType(_);
            if (null == e) return null;
            let t = e.promotionId,
                A = N.A.getPromotionByTypeAndId(E.pt.MARKETING_MOMENT, t);
            if (A?.trialId != null) {
                let _ = l.A.getUserTrialOffer(A.trialId);
                if (null == _ || _.hasExpired) return null;
            }
            return e;
        }),
        t = (0, n.bG)([N.A], () => N.A.getPromotionByTypeAndId(E.pt.MARKETING_MOMENT, e?.promotionId ?? "")),
        r = t?.endDate,
        [O, R] = A.useState(!1),
        I = A.useRef(null);
    return (
        A.useEffect(() => {
            if (null != r) {
                let _ = r.getTime() - Date.now();
                return (
                    _ > 0 && _ < 864e5
                        ? (R(!1),
                          clearTimeout(I.current),
                          (I.current = setTimeout(() => {
                              R(!0);
                          }, _)))
                        : _ <= 0 && R(!0),
                    () => {
                        clearTimeout(I.current);
                    }
                );
            }
            (R(!1), clearTimeout(I.current));
        }, [r]),
        O ? null : e
    );
}
