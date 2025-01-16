var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(906732),
    d = r(785717),
    f = r(280885),
    _ = r(171368),
    h = r(981631),
    p = r(388032),
    m = r(813238);
let g = 57.75;
n.Z = s.memo(function (e) {
    let { user: n, onClose: r, bio: i, hidePersonalInformation: o, viewFullBioDisabled: E = !1 } = e,
        { context: v } = (0, d.KZ)(),
        { analyticsLocations: I } = (0, c.ZP)(),
        [T, b] = s.useState(!1),
        [y, S] = s.useState(!1),
        A = (e) => {
            null != e && (b(!y && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > g && S(!0));
        },
        N = () => {
            null == r || r(),
                (0, _.openUserProfileModal)({
                    ...v,
                    userId: n.id,
                    sourceAnalyticsLocations: I,
                    analyticsLocation: { section: h.jXE.BITE_SIZE_PROFILE_POPOUT }
                });
        };
    return o || null == i || '' === i
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)('div', {
                      ref: A,
                      className: l()(m.descriptionClamp, y && m.maxBioHeight),
                      children: (0, a.jsx)(f.Z, {
                          userBio: i,
                          setLineClamp: !1,
                          textColor: 'header-primary'
                      })
                  }),
                  (T || y) &&
                      (0, a.jsx)(u.Button, {
                          look: u.Button.Looks.BLANK,
                          size: u.Button.Sizes.NONE,
                          className: m.viewFullBio,
                          color: l()(m.viewFullBioColor, E && m.viewFullBioDisabled),
                          onClick: N,
                          children: (0, a.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'none',
                              children: p.intl.string(p.t.YDiPq6)
                          })
                      })
              ]
          });
});
