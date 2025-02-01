i.d(n, { Z: () => f });
var t = i(200651),
    l = i(481060),
    o = i(197115),
    s = i(703656),
    r = i(111361),
    a = i(785717),
    d = i(475413),
    c = i(228168),
    u = i(981631),
    m = i(474936),
    x = i(388032),
    p = i(640984);
function f(e) {
    let { currentUser: n, onClose: i } = e,
        f = (0, r.I5)(n),
        { trackUserProfileAction: I } = (0, a.KZ)();
    return f
        ? (0, t.jsx)(d.oY, {
              action: c.yM.VIEW_PREMIUM_PERKS,
              icon: l.SrA,
              tooltipText: x.intl.string(x.t.AnlV9f),
              onClick: () => {
                  (0, s.uL)(u.Z5c.APPLICATION_STORE), null == i || i();
              }
          })
        : (0, t.jsx)(o.Z, {
              onClick: () => {
                  I({ action: c.yM.GET_PREMIUM });
              },
              buttonText: x.intl.string(x.t.x6rkDg),
              subscriptionTier: m.Si.TIER_2,
              premiumModalAnalyticsLocation: { section: u.jXE.USER_PROFILE },
              shinyButtonClassName: p.getPremiumButton,
              size: l.zxk.Sizes.SMALL,
              iconClassName: p.getPremiumButtonIcon,
              look: l.zxk.Looks.BLANK,
              onlyShineOnHover: !0
          });
}
