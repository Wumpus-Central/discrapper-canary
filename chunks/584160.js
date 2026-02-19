"use strict";
n.d(t, { M: () => l, u: () => u });
var r = n(397927),
    i = n(166532),
    s = n(788868),
    a = n(756366),
    o = n(985018);
let l = [i.pn.PLAN_SELECT, i.pn.REVIEW, i.pn.ADD_PAYMENT_STEPS],
    u = (e) => {
        let { skuId: t, step: n, showTrialBadge: l, showPromoBadge: u } = e,
            c = o.intl.string(o.t.q9EGps);
        n === i.pn.ADD_PAYMENT_STEPS && (c = o.intl.string(o.t.CpOiEO));
        let d = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        return (l
            ? ((d.headerBadgeText = o.intl.string(a.default["mWL08+"])), (d.headerBadgeIcon = r.gqV))
            : u && (d.headerBadgeText = o.intl.string(a.default.Fjpyfj)),
        null == t)
            ? { title: c, gradientColor: void 0, ...d }
            : t === s.pe.TIER_0 || t === s.pe.TIER_1
              ? { title: c, gradientColor: "nitro-green", ...d }
              : t === s.pe.TIER_2
                ? { title: c, gradientColor: "nitro-pink", ...d }
                : { title: c, ...d };
    };
