n.d(t, { c: () => c });
var r = n(582128),
    l = n(17928),
    i = n(354670),
    a = n(962644),
    u = n(616431),
    o = n(852218);
function c(e) {
    r.useEffect(() => {
        (0, a.BE)();
    }, []);
    let t = (0, l.bG)([u.A, i.A], () => {
            let t = u.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                r = u.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, n);
            if (r?.trialId != null) {
                let e = i.A.getUserTrialOffer(r.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        n = (0, l.bG)([u.A], () => u.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        c = n?.endDate,
        [d, s] = r.useState(!1),
        f = r.useRef(null);
    return (
        r.useEffect(() => {
            if (null != c) {
                let e = c.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (s(!1),
                          clearTimeout(f.current),
                          (f.current = setTimeout(() => {
                              s(!0);
                          }, e)))
                        : e <= 0 && s(!0),
                    () => {
                        clearTimeout(f.current);
                    }
                );
            }
            s(!1), clearTimeout(f.current);
        }, [c]),
        d ? null : t
    );
}
