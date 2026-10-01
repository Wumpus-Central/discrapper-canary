r.d(t, { HF: () => o, O8: () => u });
var n = r(812095),
    l = r(65238),
    s = r(324157),
    a = r(927812),
    i = r(306396);
function o(e, t) {
    let r = (0, l.XF)(e);
    if (null != r && null != t.categorySkuId && r.collectionId === t.categorySkuId) return r;
}
function u(e, t, r, l) {
    var u, c, d;
    let g,
        m = o(e, t);
    if (null == e || null == m) return t;
    let _ = (0, i.Q7)(m, r),
        E = {
            locale: l,
            endsAt: e.endsAt,
            redemptionEndsAt: e.redemptionEndsAt,
            helpCenterId: m.shared.helpCenter?.id,
        },
        C = _?.title != null && "" !== _.title ? (0, n.U)((0, s.wJ)(_.title, E)) : t.title,
        p = _?.description != null && "" !== _.description ? (0, n.U)((0, s.wJ)(_.description, E)) : t.summary,
        h =
            null != _
                ? ((u = _.rewardStates),
                  (c = e.rewardStatus),
                  (d = e.progress?.current ?? 0),
                  null != (g = (0, a.x)(u, c, d)?.heroUrl) && "" !== g ? g : void 0)
                : void 0;
    return {
        ...t,
        title: C,
        summary: p,
        heroBannerUrl: h ?? t.heroBannerUrl,
        heroBannerAnimatedUrl: void 0,
        heroRiveUrl: void 0,
    };
}
