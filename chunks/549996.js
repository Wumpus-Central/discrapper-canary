a.d(t, { c: () => c });
var n = a(64700),
    r = a(17928),
    l = a(354670),
    i = a(597758),
    s = a(374200),
    o = a(852218);
function c(e) {
    n.useEffect(() => {
        (0, i.BE)();
    }, []);
    let t = (0, r.bG)([s.A, l.A], () => {
            let t = s.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let a = t.promotionId,
                n = s.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, a);
            if (n?.trialId != null) {
                let e = l.A.getUserTrialOffer(n.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        a = (0, r.bG)([s.A], () => s.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        c = a?.endDate,
        [d, u] = n.useState(!1),
        h = n.useRef(null);
    return (
        n.useEffect(() => {
            if (null != c) {
                let e = c.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (u(!1),
                          clearTimeout(h.current),
                          (h.current = setTimeout(() => {
                              u(!0);
                          }, e)))
                        : e <= 0 && u(!0),
                    () => {
                        clearTimeout(h.current);
                    }
                );
            }
            u(!1), clearTimeout(h.current);
        }, [c]),
        d ? null : t
    );
}
