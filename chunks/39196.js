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
            let g,
                h = u(e, t);
            if (null == e || null == h) return t;
            let p = (0, o.Q7)(h, n),
                f = {
                    locale: s,
                    endsAt: e.endsAt,
                    redemptionEndsAt: e.redemptionEndsAt,
                    helpCenterId: h.shared.helpCenter?.id,
                },
                E = p?.title != null && "" !== p.title ? (0, l.U)((0, a.wJ)(p.title, f)) : t.title,
                x = p?.description != null && "" !== p.description ? (0, l.U)((0, a.wJ)(p.description, f)) : t.summary;
            if (h.subtype === r.h5.BASIC) return { ...t, title: E, summary: x };
            let v =
                p?.rewardStates != null
                    ? ((c = p.rewardStates),
                      (d = e.rewardStatus),
                      (m = e.progress?.current ?? 0),
                      null != (g = (0, i.x)(c, d, m)?.heroUrl) && "" !== g ? g : void 0)
                    : void 0;
            return {
                ...t,
                title: E,
                summary: x,
                heroBannerUrl: v ?? t.heroBannerUrl,
                heroBannerAnimatedUrl: void 0,
                heroRiveUrl: void 0,
            };
        },
    },
);
