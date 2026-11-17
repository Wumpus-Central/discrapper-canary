var l = n(812095),
    r = n(604913),
    s = n(65238),
    a = n(324157),
    i = n(927812),
    o = n(306396);
function u(e, t) {
    let n = (0, s.XF)(e);
    if (null != n && null != t.categorySkuId && n.collectionId === t.categorySkuId) return n;
}
n.d(
    t,
    {},
    {
        HF: u,
        O8: function (e, t, n, s) {
            var c, d, m;
            let h,
                g = u(e, t);
            if (null == e || null == g) return t;
            let p = (0, o.Q7)(g, n),
                E = {
                    locale: s,
                    endsAt: e.endsAt,
                    redemptionEndsAt: e.redemptionEndsAt,
                    helpCenterId: g.shared.helpCenter?.id,
                },
                f = p?.title != null && "" !== p.title ? (0, l.U)((0, a.wJ)(p.title, E)) : t.title,
                x = p?.description != null && "" !== p.description ? (0, l.U)((0, a.wJ)(p.description, E)) : t.summary;
            if (g.subtype === r.h5.BASIC) return { ...t, title: f, summary: x };
            let C =
                p?.rewardStates != null
                    ? ((c = p.rewardStates),
                      (d = e.rewardStatus),
                      (m = e.progress?.current ?? 0),
                      null != (h = (0, i.x)(c, d, m)?.heroUrl) && "" !== h ? h : void 0)
                    : void 0;
            return {
                ...t,
                title: f,
                summary: x,
                heroBannerUrl: C ?? t.heroBannerUrl,
                heroBannerAnimatedUrl: void 0,
                heroRiveUrl: void 0,
            };
        },
    },
);
