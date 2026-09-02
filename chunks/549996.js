n.d(t, { c: () => a });
var r = n(582128),
    i = n(17928),
    l = n(354670),
    u = n(962644),
    o = n(412260),
    c = n(852218);
function a(e) {
    r.useEffect(() => {
        (0, u.BE)();
    }, []);
    let t = (0, i.bG)([o.A, l.A], () => {
            let t = o.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                r = o.A.getPromotionByTypeAndId(c.pt.MARKETING_MOMENT, n);
            if (r?.trialId != null) {
                let e = l.A.getUserTrialOffer(r.trialId);
                if (null == e || e.hasExpired) return null;
            }
            return t;
        }),
        n = (0, i.bG)([o.A], () => o.A.getPromotionByTypeAndId(c.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        a = n?.endDate,
        [s, d] = r.useState(!1),
        p = r.useRef(null);
    return (
        r.useEffect(() => {
            if (null != a) {
                let e = a.getTime() - Date.now();
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
        }, [a]),
        s ? null : t
    );
}
