var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(906732),
    d = r(785717),
    f = r(280885),
    p = r(171368),
    h = r(981631),
    _ = r(388032),
    m = r(813238);
let g = 57.75;
n.Z = o.memo(function (e) {
    let { user: n, onClose: r, bio: i, hidePersonalInformation: s, viewFullBioDisabled: E = !1 } = e,
        { context: v } = (0, d.KZ)(),
        { analyticsLocations: y } = (0, c.ZP)(),
        [b, I] = o.useState(!1),
        [T, S] = o.useState(!1),
        A = (e) => {
            null != e && (I(!T && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > g && S(!0));
        },
        C = () => {
            null == r || r(),
                (0, p.openUserProfileModal)({
                    ...v,
                    userId: n.id,
                    sourceAnalyticsLocations: y,
                    analyticsLocation: { section: h.jXE.BITE_SIZE_PROFILE_POPOUT }
                });
        };
    return s || null == i || '' === i
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)('div', {
                      ref: A,
                      className: l()(m.descriptionClamp, T && m.maxBioHeight),
                      children: (0, a.jsx)(f.Z, {
                          userBio: i,
                          setLineClamp: !1,
                          textColor: 'header-primary'
                      })
                  }),
                  (b || T) &&
                      (0, a.jsx)(u.Button, {
                          look: u.Button.Looks.BLANK,
                          size: u.Button.Sizes.NONE,
                          className: m.viewFullBio,
                          color: l()(m.viewFullBioColor, E && m.viewFullBioDisabled),
                          onClick: C,
                          children: (0, a.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'none',
                              children: _.intl.string(_.t.YDiPq6)
                          })
                      })
              ]
          });
});
