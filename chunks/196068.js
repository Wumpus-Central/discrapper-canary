n.d(t, { c: () => m });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    c = n(230711),
    s = n(163684),
    u = n(518638),
    d = n(748770),
    _ = n(594174),
    E = n(626135),
    I = n(74538),
    T = n(243778),
    O = n(921944),
    p = n(981631),
    N = n(474936),
    f = n(388032),
    S = n(961987);
let m = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, u.a0)(),
        m = (0, l.e7)([_.default], () => I.ZP.isPremiumExactly(_.default.getCurrentUser(), N.p9.TIER_2)),
        { enabled: R } = s.g.useExperiment(
            { location: "OutboundPromotionNotice" },
            {
                autoTrackExposure: !1,
                disable: m,
            },
        ),
        A = i.useCallback(() => {
            E.default.track(p.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                c.Z.open(p.oAB.INVENTORY),
                d.ZP.dismissOutboundPromotionNotice();
        }, []);
    return null == n
        ? null
        : (0, r.jsx)(T.O1, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: O.R.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, r.jsxs)(o.qXd, {
                          color: o.DM8.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(o.RyX, {
                                  noticeType: p.kVF.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      d.ZP.dismissOutboundPromotionNotice(), null !== n && n(O.L.USER_DISMISS);
                                  },
                              }),
                              (0, r.jsx)(o.SrA, {
                                  size: "md",
                                  color: "currentColor",
                                  className: S.premiumIcon,
                              }),
                              R ? f.intl.string(f.t["5JMiOj"]) : f.intl.string(f.t["Pzh+Gx"]),
                              (0, r.jsx)(o.NoS, {
                                  noticeType: p.kVF.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      A(), null !== n && n(O.L.TAKE_ACTION);
                                  },
                                  children: f.intl.string(f.t.jVcuVV),
                              }),
                          ],
                      });
              },
          });
};
