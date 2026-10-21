n.d(t, { HF: () => u, O8: () => c });
var r = n(812095),
    l = n(604913),
    s = n(65238),
    a = n(324157),
    o = n(927812),
    i = n(306396);
function u(e, t) {
    let n = (0, s.XF)(e);
    if (null != n && null != t.categorySkuId && n.collectionId === t.categorySkuId) return n;
}
function c(e, t, n, s) {
    var c, d, p;
    let m,
        g = u(e, t);
    if (null == e || null == g) return t;
    let h = (0, i.Q7)(g, n),
        C = {
            locale: s,
            endsAt: e.endsAt,
            redemptionEndsAt: e.redemptionEndsAt,
            helpCenterId: g.shared.helpCenter?.id,
        },
        f = h?.title != null && "" !== h.title ? (0, r.U)((0, a.wJ)(h.title, C)) : t.title,
        E = h?.description != null && "" !== h.description ? (0, r.U)((0, a.wJ)(h.description, C)) : t.summary;
    if (g.subtype === l.h5.BASIC) return { ...t, title: f, summary: E };
    let v =
        h?.rewardStates != null
            ? ((c = h.rewardStates),
              (d = e.rewardStatus),
              (p = e.progress?.current ?? 0),
              null != (m = (0, o.x)(c, d, p)?.heroUrl) && "" !== m ? m : void 0)
            : void 0;
    return {
        ...t,
        title: f,
        summary: E,
        heroBannerUrl: v ?? t.heroBannerUrl,
        heroBannerAnimatedUrl: void 0,
        heroRiveUrl: void 0,
    };
}
