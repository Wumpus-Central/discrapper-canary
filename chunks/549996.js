"use strict";
r.d(t, { c: () => c });
var n = r(64700),
    i = r(17928),
    a = r(354670),
    s = r(597758),
    l = r(374200),
    o = r(852218);
function c(e) {
    n.useEffect(() => {
        (0, s.BE)();
    }, []);
    let t = (0, i.bG)([l.A, a.A], () => {
            let t = l.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let r = t.promotionId,
                n = l.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, r);
            if (n?.trialId != null) {
                let e = a.A.getUserTrialOffer(n.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        r = (0, i.bG)([l.A], () => l.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        c = r?.endDate,
        [d, u] = n.useState(!1),
        _ = n.useRef(null);
    return (
        n.useEffect(() => {
            if (null != c) {
                let e = c.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (u(!1),
                          clearTimeout(_.current),
                          (_.current = setTimeout(() => {
                              u(!0);
                          }, e)))
                        : e <= 0 && u(!0),
                    () => {
                        clearTimeout(_.current);
                    }
                );
            }
            u(!1), clearTimeout(_.current);
        }, [c]),
        d ? null : t
    );
}
