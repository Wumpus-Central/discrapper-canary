(e.d(n, { default: () => E }), e(388685));
var i = e(255367),
    r = e(73800),
    l = e(399606),
    a = e(481060),
    s = e(493773),
    d = e(100527),
    o = e(906732),
    u = e(565138),
    c = e(314897),
    _ = e(271383),
    h = e(430824),
    g = e(626135),
    f = e(715903),
    N = e(295474),
    I = e(273504),
    x = e(981631),
    A = e(372897),
    C = e(388032),
    Z = e(875606);
function E(t) {
    var n;
    let { onClose: e, transitionState: E, guildId: m } = t,
        k = (0, l.e7)([c.default], () => c.default.getId()),
        p = (0, l.e7)([_.ZP], () => _.ZP.getMember(m, k), [m, k]),
        v = (0, l.e7)([h.Z], () => h.Z.getGuild(m), [m]),
        O = null != (n = null == v ? void 0 : v.name) ? n : '',
        U = (0, f.no)(p),
        { analyticsLocations: j } = (0, o.ZP)(d.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [P, R] = (0, N.ww)({
            guildId: m,
            analyticsLocations: j,
            openWithoutBackstack: !0
        }),
        M = U.has(A.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? C.intl.string(C.t.SpDXIy) : C.intl.string(C.t['QRN+Sk']);
    R || (M = C.intl.string(C.t.FFj5Dg));
    let T = R ? C.intl.string(C.t['/PGQf3']) : C.intl.string(C.t.WikgZ2);
    return ((0, s.ZP)(() => {
        g.default.track(x.rMx.OPEN_MODAL, {
            type: I.dc,
            guild_id: m,
            other_user_id: k
        });
    }),
    r.useEffect(() => {
        if (null == v) return void e();
    }, [v, e]),
    null == v)
        ? null
        : (0, i.jsxs)(a.Y0X, {
              transitionState: E,
              size: a.CgR.SMALL,
              parentComponent: 'AutomodUserProfileQuarantineAlert',
              children: [
                  (0, i.jsx)(a.xBx, {
                      separator: !1,
                      children: (0, i.jsxs)('div', {
                          className: Z.headerContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: Z.guildIconContainer,
                                  children: [
                                      (0, i.jsx)(u.Z, {
                                          guild: v,
                                          size: u.Z.Sizes.LARGER
                                      }),
                                      (0, i.jsx)('div', {
                                          className: Z.statusContainer,
                                          children: (0, i.jsx)(a.ics, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: Z.statusIcon
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(a.X6q, {
                                  color: 'header-primary',
                                  variant: 'heading-md/semibold',
                                  children: C.intl.format(C.t.kcYdTk, { guildName: O })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(a.hzk, {
                      children: (0, i.jsx)('div', {
                          className: Z.descriptionContainer,
                          children: (0, i.jsx)(a.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: M
                          })
                      })
                  }),
                  (0, i.jsx)(a.mzw, {
                      children: (0, i.jsxs)(a.hE2, {
                          direction: 'horizontal-reverse',
                          children: [
                              (0, i.jsx)(a.zxk, {
                                  variant: 'primary',
                                  text: T,
                                  onClick: () => {
                                      (P(), e());
                                  }
                              }),
                              (0, i.jsx)(a.zxk, {
                                  variant: 'secondary',
                                  text: C.intl.string(C.t['ETE/oK']),
                                  onClick: e
                              })
                          ]
                      })
                  })
              ]
          });
}
