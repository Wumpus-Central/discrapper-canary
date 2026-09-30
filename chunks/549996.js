i.d(t, { c: () => c });
var n = i(582128),
    s = i(17928),
    r = i(354670),
    l = i(962644),
    a = i(412260),
    o = i(852218);
function c(e) {
    n.useEffect(() => {
        (0, l.BE)();
    }, []);
    let t = (0, s.bG)([a.A, r.A], () => {
            let t = a.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let i = t.promotionId,
                n = a.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, i);
            if (n?.trialId != null) {
                let e = r.A.getUserTrialOffer(n.trialId);
                if (null == e || e.hasExpired) return null;
            }
            return t;
        }),
        i = (0, s.bG)([a.A], () => a.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        c = i?.endDate,
        [d, u] = n.useState(!1),
        m = n.useRef(null);
    return (
        n.useEffect(() => {
            if (null != c) {
                let e = c.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (u(!1),
                          clearTimeout(m.current),
                          (m.current = setTimeout(() => {
                              u(!0);
                          }, e)))
                        : e <= 0 && u(!0),
                    () => {
                        clearTimeout(m.current);
                    }
                );
            }
            (u(!1), clearTimeout(m.current));
        }, [c]),
        d ? null : t
    );
}
