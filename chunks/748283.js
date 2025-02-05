t.d(n, { Z: () => I });
var i = t(200651),
    l = t(481060),
    o = t(197115),
    s = t(703656),
    r = t(111361),
    a = t(785717),
    d = t(475413),
    c = t(228168),
    u = t(981631),
    m = t(474936),
    x = t(388032),
    p = t(640984);
function I(e) {
    let { currentUser: n, onClose: t } = e,
        I = (0, r.I5)(n),
        { trackUserProfileAction: f } = (0, a.KZ)();
    return I
        ? (0, i.jsx)(d.oY, {
              action: c.yM.VIEW_PREMIUM_PERKS,
              icon: l.SrA,
              tooltipText: x.intl.string(x.t.AnlV9f),
              onClick: () => {
                  (0, s.uL)(u.Z5c.APPLICATION_STORE), null == t || t();
              }
          })
        : (0, i.jsx)(o.Z, {
              onClick: () => {
                  f({ action: c.yM.GET_PREMIUM });
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
