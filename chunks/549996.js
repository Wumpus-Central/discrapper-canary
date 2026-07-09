n.d(t, { c: () => c });
var r = n(64700),
    l = n(17928),
    a = n(354670),
    i = n(962644),
    o = n(412260),
    u = n(852218);
function c(e) {
    r.useEffect(() => {
        (0, i.BE)();
    }, []);
    let t = (0, l.bG)([o.A, a.A], () => {
            let t = o.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                r = o.A.getPromotionByTypeAndId(u.pt.MARKETING_MOMENT, n);
            if (r?.trialId != null) {
                let e = a.A.getUserTrialOffer(r.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        n = (0, l.bG)([o.A], () => o.A.getPromotionByTypeAndId(u.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
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
