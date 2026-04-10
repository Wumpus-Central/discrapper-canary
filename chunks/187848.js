n.d(t, { d: () => u });
var i = n(627968),
    l = n(877624),
    s = n(311907),
    a = n(554146),
    r = n(412260),
    o = n(932001),
    d = n(46282),
    c = n(49999);
let u = (e) => {
    let t,
        n,
        { dismissibleContent: u } = e,
        { snowflakeId: h, couldShow: A } =
            ((t = (0, s.bG)([r.A], () => r.A.getGiftPromotion()?.id)),
            (n = (0, s.bG)([r.A], () => null != r.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR))),
            u === a.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
        [_, m] = (0, o.Cc)(A ? u : null, h ?? "", c.m.NOTICE_BAR, !0);
    return null == _
        ? null
        : _ === a.M.GIFTING_PROMOTION_REMINDER
          ? (0, i.jsx)(d.y, { markAsDismissed: (e) => m(e) })
          : void 0;
};
