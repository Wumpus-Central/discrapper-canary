"use strict";
n.d(t, { c: () => c });
var r = n(64700),
    i = n(311907),
    a = n(816733),
    s = n(597758),
    o = n(412260),
    l = n(852218);
let u = 864e5;
function c(e) {
    r.useEffect(() => {
        (0, s.BE)();
    }, []);
    let t = (0, i.bG)([o.A, a.A], () => {
            let t = o.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                r = o.A.getPromotionByTypeAndId(l.pt.MARKETING_MOMENT, n);
            if (r?.trialId != null) {
                let e = a.A.getUserTrialOffer(r.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        n = (0, i.bG)([o.A], () => o.A.getPromotionByTypeAndId(l.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        c = n?.endDate,
        [d, _] = r.useState(!1),
        f = r.useRef(null);
    return (
        r.useEffect(() => {
            if (null != c) {
                let e = c.getTime() - Date.now();
                return (
                    e > 0 && e < u
                        ? (_(!1),
                          clearTimeout(f.current),
                          (f.current = setTimeout(() => {
                              _(!0);
                          }, e)))
                        : e <= 0 && _(!0),
                    () => {
                        clearTimeout(f.current);
                    }
                );
            }
            _(!1), clearTimeout(f.current);
        }, [c]),
        d ? null : t
    );
}
