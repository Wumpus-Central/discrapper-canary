l.d(t, { c: () => h });
var i = l(64700),
    r = l(17928),
    c = l(354670),
    n = l(962644),
    a = l(374200),
    s = l(852218);
function h(e) {
    i.useEffect(() => {
        (0, n.BE)();
    }, []);
    let t = (0, r.bG)([a.A, c.A], () => {
            let t = a.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let l = t.promotionId,
                i = a.A.getPromotionByTypeAndId(s.pt.MARKETING_MOMENT, l);
            if (i?.trialId != null) {
                let e = c.A.getUserTrialOffer(i.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        }),
        l = (0, r.bG)([a.A], () => a.A.getPromotionByTypeAndId(s.pt.MARKETING_MOMENT, t?.promotionId ?? "")),
        h = l?.endDate,
        [d, u] = i.useState(!1),
        v = i.useRef(null);
    return (
        i.useEffect(() => {
            if (null != h) {
                let e = h.getTime() - Date.now();
                return (
                    e > 0 && e < 864e5
                        ? (u(!1),
                          clearTimeout(v.current),
                          (v.current = setTimeout(() => {
                              u(!0);
                          }, e)))
                        : e <= 0 && u(!0),
                    () => {
                        clearTimeout(v.current);
                    }
                );
            }
            u(!1), clearTimeout(v.current);
        }, [h]),
        d ? null : t
    );
}
