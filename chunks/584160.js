"use strict";
n.d(t, { u: () => o });
var r = n(397927),
    i = n(788868),
    a = n(756366),
    s = n(985018);
let o = (e) => {
    let { skuId: t, showTrialBadge: n, showPromoBadge: o } = e,
        l = s.intl.string(s.t.q9EGps),
        u = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
    return (n
        ? ((u.headerBadgeText = s.intl.string(a.default["mWL08+"])), (u.headerBadgeIcon = r.gqV))
        : o && (u.headerBadgeText = s.intl.string(a.default.Fjpyfj)),
    null == t)
        ? { title: l, gradientColor: void 0, ...u }
        : t === i.pe.TIER_0 || t === i.pe.TIER_1
          ? { title: l, gradientColor: "nitro-green", ...u }
          : t === i.pe.TIER_2
            ? { title: l, gradientColor: "nitro-pink", ...u }
            : { title: l, ...u };
};
