n(411104);
var i = n(200651);
n(192379);
var r = n(990547),
    l = n(481060),
    a = n(774078),
    o = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(963249),
    d = n(639119),
    m = n(474936),
    h = n(981631),
    f = n(388032),
    p = n(230278);
t.Z = function (e) {
    var t;
    let { dismissCurrentNotice: n, subscriptionTier: _ } = e,
        { analyticsLocations: g } = (0, s.ZP)(
            (function (e) {
                switch (e) {
                    case m.Si.TIER_0:
                        return o.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                    case m.Si.TIER_2:
                        return o.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                    default:
                        throw Error('Unsupported subscription tier: '.concat(e));
                }
            })(_)
        ),
        E = (0, d.N)(),
        C = (0, a.Z)(null != E && null != E.expires_at ? Date.parse(E.expires_at) : 0),
        I = null == E || (null === (t = E.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== _ || null == E.expires_at || Object.values(C).every((e) => 0 === e);
    return ((0, c.Z)(
        {
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.TRIAL_NOTICE,
            properties: { trial_id: null == E ? void 0 : E.trial_id }
        },
        { disableTrack: I }
    ),
    I)
        ? null
        : (0, i.jsxs)(l.Notice, {
              color: (function (e) {
                  switch (e) {
                      case m.Si.TIER_0:
                          return l.NoticeColors.PREMIUM_TIER_0;
                      case m.Si.TIER_2:
                          return l.NoticeColors.PREMIUM_TIER_2;
                      default:
                          throw Error('Unsupported subscription tier: '.concat(e));
                  }
              })(_),
              children: [
                  (0, i.jsx)(l.NoticeCloseButton, { onClick: n }),
                  (0, i.jsx)(l.NitroWheelIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: p.premiumIcon
                  }),
                  (function (e, t) {
                      switch (e) {
                          case m.Si.TIER_0:
                              return t.days > 0 ? f.intl.formatToPlainString(f.t.sP5OqK, { days: t.days }) : t.hours > 0 ? f.intl.formatToPlainString(f.t['7Lhfu7'], { hours: t.hours }) : f.intl.formatToPlainString(f.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
                          case m.Si.TIER_2:
                              return t.days > 0 ? f.intl.formatToPlainString(f.t['4prs5e'], { days: t.days }) : t.hours > 0 ? f.intl.formatToPlainString(f.t.OD5nIS, { hours: t.hours }) : f.intl.formatToPlainString(f.t.rvyXjI, { minutes: Math.max(t.minutes, 1) });
                          default:
                              throw Error('Unsupported subscription tier: '.concat(e));
                      }
                  })(_, C),
                  (0, i.jsx)(l.NoticeButton, {
                      onClick: () => {
                          (0, u.Z)({
                              trialId: E.trial_id,
                              subscriptionTier: _,
                              analyticsLocations: g,
                              analyticsObject: {
                                  page: h.ZY5.IN_APP,
                                  section: h.jXE.NOTIFICATION_BAR,
                                  object: h.qAy.BUTTON_CTA
                              }
                          });
                      },
                      children: (function (e) {
                          switch (e) {
                              case m.Si.TIER_0:
                                  return f.intl.string(f.t.mCG029);
                              case m.Si.TIER_2:
                                  return f.intl.string(f.t['7590PT']);
                              default:
                                  throw Error('Unsupported subscription tier: '.concat(e));
                          }
                      })(_)
                  })
              ]
          });
};
