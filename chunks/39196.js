n.d(t, { HF: () => i, O8: () => u });
var r = n(812095),
    l = n(65238),
    s = n(324157),
    a = n(927812),
    o = n(306396);
function i(e, t) {
    let n = (0, l.XF)(e);
    if (null != n && null != t.categorySkuId && n.collectionId === t.categorySkuId) return n;
}
function u(e, t, n, l) {
    var u, c, d;
    let p,
        m = i(e, t);
    if (null == e || null == m) return t;
    let g = (0, o.Q7)(m, n),
        h = {
            locale: l,
            endsAt: e.endsAt,
            redemptionEndsAt: e.redemptionEndsAt,
            helpCenterId: m.shared.helpCenter?.id,
        },
        C = g?.title != null && "" !== g.title ? (0, r.U)((0, s.wJ)(g.title, h)) : t.title,
        f = g?.description != null && "" !== g.description ? (0, r.U)((0, s.wJ)(g.description, h)) : t.summary,
        E =
            null != g
                ? ((u = g.rewardStates),
                  (c = e.rewardStatus),
                  (d = e.progress?.current ?? 0),
                  null != (p = (0, a.x)(u, c, d)?.heroUrl) && "" !== p ? p : void 0)
                : void 0;
    return {
        ...t,
        title: C,
        summary: f,
        heroBannerUrl: E ?? t.heroBannerUrl,
        heroBannerAnimatedUrl: void 0,
        heroRiveUrl: void 0,
    };
}
