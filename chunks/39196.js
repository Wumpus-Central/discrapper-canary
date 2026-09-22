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
        p = o(e, t);
    if (null == e || null == p) return t;
    let m = (0, i.Q7)(p, r),
        h = {
            locale: l,
            endsAt: e.endsAt,
            redemptionEndsAt: e.redemptionEndsAt,
            helpCenterId: p.shared.helpCenter?.id,
        },
        E = m?.title != null && "" !== m.title ? (0, n.U)((0, s.wJ)(m.title, h)) : t.title,
        _ = m?.description != null && "" !== m.description ? (0, n.U)((0, s.wJ)(m.description, h)) : t.summary,
        S =
            null != m
                ? ((u = m.rewardStates),
                  (c = e.rewardStatus),
                  (d = e.progress?.current ?? 0),
                  null != (g = (0, a.x)(u, c, d)?.heroUrl) && "" !== g ? g : void 0)
                : void 0;
    return {
        ...t,
        title: E,
        summary: _,
        heroBannerUrl: S ?? t.heroBannerUrl,
        heroBannerAnimatedUrl: void 0,
        heroRiveUrl: void 0,
    };
}
