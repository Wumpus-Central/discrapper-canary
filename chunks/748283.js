t.d(n, {
    Z: function () {
        return x;
    }
});
var i = t(200651),
    l = t(481060),
    o = t(197115),
    r = t(703656),
    s = t(111361),
    c = t(785717),
    a = t(475413),
    d = t(228168),
    u = t(981631),
    f = t(474936),
    m = t(388032),
    I = t(640984);
function x(e) {
    let { currentUser: n, onClose: t } = e,
        x = (0, s.I5)(n),
        { trackUserProfileAction: p } = (0, c.KZ)();
    return x
        ? (0, i.jsx)(a.oY, {
              action: d.yM.VIEW_PREMIUM_PERKS,
              icon: l.NitroWheelIcon,
              tooltipText: m.intl.string(m.t.AnlV9f),
              onClick: () => {
                  (0, r.uL)(u.Z5c.APPLICATION_STORE), null == t || t();
              }
          })
        : (0, i.jsx)(o.Z, {
              onClick: () => {
                  p({ action: d.yM.GET_PREMIUM });
              },
              buttonText: m.intl.string(m.t.x6rkDg),
              subscriptionTier: f.Si.TIER_2,
              premiumModalAnalyticsLocation: { section: u.jXE.USER_PROFILE },
              shinyButtonClassName: I.getPremiumButton,
              size: l.Button.Sizes.SMALL,
              iconClassName: I.getPremiumButtonIcon,
              look: l.Button.Looks.BLANK,
              onlyShineOnHover: !0
          });
}
