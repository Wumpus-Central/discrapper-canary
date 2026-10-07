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
        E = o(e, t);
    if (null == e || null == E) return t;
    let m = (0, i.Q7)(E, r),
        p = {
            locale: l,
            endsAt: e.endsAt,
            redemptionEndsAt: e.redemptionEndsAt,
            helpCenterId: E.shared.helpCenter?.id,
        },
        _ = m?.title != null && "" !== m.title ? (0, n.U)((0, s.wJ)(m.title, p)) : t.title,
        h = m?.description != null && "" !== m.description ? (0, n.U)((0, s.wJ)(m.description, p)) : t.summary,
        C =
            null != m
                ? ((u = m.rewardStates),
                  (c = e.rewardStatus),
                  (d = e.progress?.current ?? 0),
                  null != (g = (0, a.x)(u, c, d)?.heroUrl) && "" !== g ? g : void 0)
                : void 0;
    return {
        ...t,
        title: _,
        summary: h,
        heroBannerUrl: C ?? t.heroBannerUrl,
        heroBannerAnimatedUrl: void 0,
        heroRiveUrl: void 0,
    };
}
