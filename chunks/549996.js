"use strict";
n.d(t, { c: () => d });
var i = n(64700),
    r = n(17928),
    a = n(354670),
    s = n(962644),
    l = n(412260),
    o = n(852218);
function d(e) {
    i.useEffect(() => {
        (0, s.BE)();
    }, []);
    let t = (0, r.bG)([l.A, a.A], () => {
            let t = l.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                i = l.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, n);
            if (i?.trialId != null) {
                let e = a.A.getUserTrialOffer(i.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        n = (0, r.bG)([l.A], () => l.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        d = n?.endDate,
        [c, u] = i.useState(!1),
        _ = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null != d) {
                let e = d.getTime() - Date.now();
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
        }, [d]),
        c ? null : t
    );
}
