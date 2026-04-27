"use strict";
r.d(t, { c: () => c });
var n = r(64700),
    i = r(17928),
    a = r(354670),
    l = r(597758),
    s = r(374200),
    o = r(852218);
function c(e) {
    n.useEffect(() => {
        (0, l.BE)();
    }, []);
    let t = (0, i.bG)([s.A, a.A], () => {
            let t = s.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let r = t.promotionId,
                n = s.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, r);
            if (n?.trialId != null) {
                let e = a.A.getUserTrialOffer(n.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        r = (0, i.bG)([s.A], () => s.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        c = r?.endDate,
        [u, d] = n.useState(!1),
        _ = n.useRef(null);
    return (
        n.useEffect(() => {
            if (null != c) {
                let e = c.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (d(!1),
                          clearTimeout(_.current),
                          (_.current = setTimeout(() => {
                              d(!0);
                          }, e)))
                        : e <= 0 && d(!0),
                    () => {
                        clearTimeout(_.current);
                    }
                );
            }
            d(!1), clearTimeout(_.current);
        }, [c]),
        u ? null : t
    );
}
