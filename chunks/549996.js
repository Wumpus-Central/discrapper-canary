"use strict";
n.d(t, { c: () => c });
var r = n(64700),
    a = n(17928),
    i = n(354670),
    l = n(597758),
    s = n(374200),
    o = n(852218);
function c(e) {
    r.useEffect(() => {
        (0, l.BE)();
    }, []);
    let t = (0, a.bG)([s.A, i.A], () => {
            let t = s.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                r = s.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, n);
            if (r?.trialId != null) {
                let e = i.A.getUserTrialOffer(r.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        n = (0, a.bG)([s.A], () => s.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        c = n?.endDate,
        [d, u] = r.useState(!1),
        _ = r.useRef(null);
    return (
        r.useEffect(() => {
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
