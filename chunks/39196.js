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
    let p = (0, i.Q7)(m, r),
        h = {
            locale: l,
            endsAt: e.endsAt,
            redemptionEndsAt: e.redemptionEndsAt,
            helpCenterId: m.shared.helpCenter?.id,
        },
        E = p?.title != null && "" !== p.title ? (0, n.U)((0, s.wJ)(p.title, h)) : t.title,
        S = p?.description != null && "" !== p.description ? (0, n.U)((0, s.wJ)(p.description, h)) : t.summary,
        x =
            null != p
                ? ((u = p.rewardStates),
                  (c = e.rewardStatus),
                  (d = e.progress?.current ?? 0),
                  null != (g = (0, a.x)(u, c, d)?.heroUrl) && "" !== g ? g : void 0)
                : void 0;
    return {
        ...t,
        title: E,
        summary: S,
        heroBannerUrl: x ?? t.heroBannerUrl,
        heroBannerAnimatedUrl: void 0,
        heroRiveUrl: void 0,
    };
}
