"use strict";
n.d(t, { c: () => d });
var i = n(64700),
    r = n(17928),
    s = n(354670),
    a = n(597758),
    o = n(374200),
    l = n(852218);
function d(e) {
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
        d = n?.endDate,
        [_, u] = i.useState(!1),
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null != d) {
                let e = d.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (u(!1),
                          clearTimeout(c.current),
                          (c.current = setTimeout(() => {
                              u(!0);
                          }, e)))
                        : e <= 0 && u(!0),
                    () => {
                        clearTimeout(c.current);
                    }
                );
            }
            u(!1), clearTimeout(c.current);
        }, [d]),
        _ ? null : t
    );
}
