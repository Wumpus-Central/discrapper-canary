n.d(t, { H: () => c });
var r = n(473749),
    i = n(442837),
    a = n(431),
    o = n(748770),
    s = n(1844),
    l = n(397047);
function c(e) {
    return (
        r.useEffect(() => {
            (0, o.Pu)();
        }, []),
        (0, i.e7)([s.Z, a.Z], () => {
            let t = s.Z.getMarketingComponentByType(e);
            if (null == t) return null;
            let n = t.promotionId,
                r = s.Z.getPromotionByTypeAndId(l.$k.MARKETING_MOMENT, n);
            if ((null == r ? void 0 : r.trialId) != null) {
                let e = a.Z.getUserTrialOffer(r.trialId);
                if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) return null;
            }
            return t;
        })
    );
}
