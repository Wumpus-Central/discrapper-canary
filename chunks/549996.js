"use strict";
n.d(t, { c: () => u });
var r = n(64700),
    i = n(311907),
    s = n(816733),
    a = n(597758),
    o = n(412260),
    l = n(852218);
function u(e) {
    r.useEffect(() => {
        (0, a.BE)();
    }, []);
    let t = (0, i.bG)([o.A, s.A], () => {
            let t = o.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                r = o.A.getPromotionByTypeAndId(l.pt.MARKETING_MOMENT, n);
            if (r?.trialId != null) {
                let e = s.A.getUserTrialOffer(r.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        n = (0, i.bG)([o.A], () => o.A.getPromotionByTypeAndId(l.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        u = n?.endDate,
        [c, d] = r.useState(!1),
        _ = r.useRef(null);
    return (
        r.useEffect(() => {
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
