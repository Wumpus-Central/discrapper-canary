n.d(t, { y: () => _ });
var i = n(627968),
    l = n(877624),
    s = n(311907),
    a = n(397927),
    r = n(688810),
    o = n(532794),
    d = n(412260),
    c = n(49999),
    u = n(652215),
    h = n(985018),
    A = n(381703);
let _ = (e) => {
    let { markAsDismissed: t } = e,
        { analyticsLocations: n } = (0, r.Ay)(),
        _ = (0, s.bG)([d.A], () => {
            let e = d.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == _
        ? null
        : (0, i.jsxs)(a.$Td, {
              color: a.Hv$.PREMIUM_TIER_2,
              children: [
                  (0, i.jsx)(a.PMB, {
                      onClick: () => t(c.i.USER_DISMISS),
                      noticeType: u.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(a.okO, { size: "custom", width: 20, height: 20, color: "currentColor", className: A.ez }),
                  _.body,
                  (0, i.jsx)(a.Z_L, {
                      onClick: () => {
                          (0, o.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: n,
                              analyticsLocation: u.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: u.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: u.kqX.GIFTING_PROMOTION_REMINDER,
                      children: h.intl.string(h.t.RzWDqY),
                  }),
              ],
          });
};
