n.d(t, {
    c: () => c,
});
var r = n(64700),
    i = n(311907),
    a = n(816733),
    s = n(597758),
    o = n(412260),
    l = n(852218);

function c(e) {
    return (
        r.useEffect(() => {
            (0, s.BE)();
        }, []),
        (0, i.bG)([o.A, a.A], () => {
            let t = o.A.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                r = o.A.getPromotionByTypeAndId(l.pt.MARKETING_MOMENT, n);
            if ((null == r ? void 0 : r.trialId) != null) {
                let e = a.A.getUserTrialOffer(r.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        })
    );
}
