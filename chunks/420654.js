n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(906732),
    u = n(785717),
    c = n(280885),
    d = n(171368),
    f = n(981631),
    _ = n(388032),
    p = n(348785);
let h = 57.75,
    m = r.memo(function (e) {
        let { user: t, onClose: n, bio: a, hidePersonalInformation: m, viewFullBioDisabled: g = !1 } = e,
            { context: E } = (0, u.KZ)(),
            { analyticsLocations: v } = (0, l.ZP)(),
            [y, I] = r.useState(!1),
            [T, b] = r.useState(!1),
            S = (e) => {
                null != e && (I(!T && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > h && b(!0));
            },
            A = () => {
                null == n || n(),
                    (0, d.openUserProfileModal)({
                        ...E,
                        userId: t.id,
                        sourceAnalyticsLocations: v,
                        analyticsLocation: { section: f.jXE.BITE_SIZE_PROFILE_POPOUT }
                    });
            };
        return m || null == a || '' === a
            ? null
            : (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)('div', {
                          ref: S,
                          className: s()(p.descriptionClamp, T && p.maxBioHeight),
                          children: (0, i.jsx)(c.Z, {
                              userBio: a,
                              setLineClamp: !1,
                              textColor: 'header-primary'
                          })
                      }),
                      (y || T) &&
                          (0, i.jsx)(o.zxk, {
                              look: o.zxk.Looks.BLANK,
                              size: o.zxk.Sizes.NONE,
                              className: p.viewFullBio,
                              color: s()(p.viewFullBioColor, g && p.viewFullBioDisabled),
                              onClick: A,
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'none',
                                  children: _.intl.string(_.t.YDiPq6)
                              })
                          })
                  ]
              });
    });
