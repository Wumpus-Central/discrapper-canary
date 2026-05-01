"use strict";
n.d(t, { c: () => u });
var i = n(64700),
    r = n(17928),
    s = n(354670),
    a = n(962644),
    o = n(374200),
    l = n(852218);
function u(e) {
    i.useEffect(() => {
        (0, a.BE)();
    }, []);
    let t = (0, r.bG)([o.A, s.A], () => {
            let t = o.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                i = o.A.getPromotionByTypeAndId(l.pt.MARKETING_MOMENT, n);
            if (i?.trialId != null) {
                let e = s.A.getUserTrialOffer(i.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        n = (0, r.bG)([o.A], () => o.A.getPromotionByTypeAndId(l.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        u = n?.endDate,
        [c, d] = i.useState(!1),
        _ = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null != u) {
                let e = u.getTime() - Date.now();
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
        }, [u]),
        c ? null : t
    );
}
