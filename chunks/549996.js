l.d(t, { c: () => c });
var r = l(64700),
    n = l(17928),
    i = l(354670),
    s = l(597758),
    u = l(374200),
    a = l(852218);
function c(e) {
    r.useEffect(() => {
        (0, s.BE)();
    }, []);
    let t = (0, n.bG)([u.A, i.A], () => {
            let t = u.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let l = t.promotionId,
                r = u.A.getPromotionByTypeAndId(a.pt.MARKETING_MOMENT, l);
            if (r?.trialId != null) {
                let e = i.A.getUserTrialOffer(r.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        l = (0, n.bG)([u.A], () => u.A.getPromotionByTypeAndId(a.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        c = l?.endDate,
        [o, d] = r.useState(!1),
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
        o ? null : t
    );
}
