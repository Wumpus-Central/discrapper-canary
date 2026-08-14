n.d(t, { c: () => c });
var r = n(582128),
    i = n(17928),
    l = n(354670),
    o = n(962644),
    u = n(412260),
    a = n(852218);
function c(e) {
    r.useEffect(() => {
        (0, o.BE)();
    }, []);
    let t = (0, i.bG)([u.A, l.A], () => {
            let t = u.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                r = u.A.getPromotionByTypeAndId(a.pt.MARKETING_MOMENT, n);
            if (r?.trialId != null) {
                let e = l.A.getUserTrialOffer(r.trialId);
                if (null == e || e.hasExpired()) return null;
            }
            return t;
        }),
        n = (0, i.bG)([u.A], () => u.A.getPromotionByTypeAndId(a.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        c = n?.endDate,
        [s, d] = r.useState(!1),
        p = r.useRef(null);
    return (
        r.useEffect(() => {
            if (null != c) {
                let e = c.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (d(!1),
                          clearTimeout(p.current),
                          (p.current = setTimeout(() => {
                              d(!0);
                          }, e)))
                        : e <= 0 && d(!0),
                    () => {
                        clearTimeout(p.current);
                    }
                );
            }
            d(!1), clearTimeout(p.current);
        }, [c]),
        s ? null : t
    );
}
