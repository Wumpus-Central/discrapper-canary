"use strict";
n.d(t, { d: () => d });
var i = n(627968),
    r = n(877624),
    l = n(311907),
    s = n(554146),
    a = n(412260),
    o = n(932001),
    c = n(823901),
    u = n(49999);
let d = (e) => {
    let t,
        n,
        { dismissibleContent: d } = e,
        { snowflakeId: _, couldShow: E } =
            ((t = (0, l.bG)([a.A], () => a.A.getGiftPromotion()?.id)),
            (n = (0, l.bG)([a.A], () => null != a.A.getMarketingComponentByType(r.C.GIFT_REMINDER_NAGBAR))),
            d === s.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [A, m] = (0, o.Cc)(E ? d : null, _ ?? "", u.m.NOTICE_BAR, !0);
    return null == A
        ? null
        : A === s.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(c.y, { markAsDismissed: (e) => m(e) })
          : void 0;
};
