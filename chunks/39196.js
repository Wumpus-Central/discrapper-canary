n.d(t, { HF: () => c, O8: () => u });
var r = n(812095),
    l = n(604913),
    s = n(65238),
    a = n(324157),
    o = n(927812),
    i = n(306396);
function c(e, t) {
    let n = (0, s.XF)(e);
    if (null != n && null != t.categorySkuId && n.collectionId === t.categorySkuId) return n;
}
function u(e, t, n, s) {
    var u, d, p;
    let m,
        g = c(e, t);
    if (null == e || null == g) return t;
    let h = (0, i.Q7)(g, n),
        E = {
            locale: s,
            endsAt: e.endsAt,
            redemptionEndsAt: e.redemptionEndsAt,
            helpCenterId: g.shared.helpCenter?.id,
        },
        C = h?.title != null && "" !== h.title ? (0, r.U)((0, a.wJ)(h.title, E)) : t.title,
        f = h?.description != null && "" !== h.description ? (0, r.U)((0, a.wJ)(h.description, E)) : t.summary;
    if (g.subtype === l.h5.BASIC) return { ...t, title: C, summary: f };
    let v =
        h?.rewardStates != null
            ? ((u = h.rewardStates),
              (d = e.rewardStatus),
              (p = e.progress?.current ?? 0),
              null != (m = (0, o.x)(u, d, p)?.heroUrl) && "" !== m ? m : void 0)
            : void 0;
    return {
        ...t,
        title: C,
        summary: f,
        heroBannerUrl: v ?? t.heroBannerUrl,
        heroBannerAnimatedUrl: void 0,
        heroRiveUrl: void 0,
    };
}
