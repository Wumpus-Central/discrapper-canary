"use strict";
a.d(t, { c: () => d });
var r = a(64700),
    l = a(311907),
    n = a(816733),
    i = a(597758),
    s = a(412260),
    o = a(852218);
function d(e) {
    r.useEffect(() => {
        (0, i.BE)();
    }, []);
    let t = (0, l.bG)([s.A, n.A], () => {
            let t = s.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let a = t.promotionId,
                r = s.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, a);
            if (r?.trialId != null) {
                let e = n.A.getUserTrialOffer(r.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        a = (0, l.bG)([s.A], () => s.A.getPromotionByTypeAndId(o.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        d = a?.endDate,
        [c, u] = r.useState(!1),
        h = r.useRef(null);
    return (
        r.useEffect(() => {
            if (null != d) {
                let e = d.getTime() - Date.now();
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
        }, [d]),
        c ? null : t
    );
}
