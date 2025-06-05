e.d(t, { default: () => Z }), e(388685);
var i = e(255367),
    r = e(73800),
    l = e(399606),
    o = e(481060),
    s = e(493773),
    a = e(100527),
    d = e(906732),
    u = e(565138),
    c = e(314897),
    _ = e(271383),
    g = e(430824),
    h = e(626135),
    N = e(715903),
    I = e(295474),
    f = e(273504),
    k = e(981631),
    A = e(372897),
    C = e(388032),
    x = e(875606);
function Z(n) {
    var t;
    let { onClose: e, transitionState: Z, guildId: E } = n,
        m = (0, l.e7)([c.default], () => c.default.getId()),
        R = (0, l.e7)([_.ZP], () => _.ZP.getMember(E, m), [E, m]),
        p = (0, l.e7)([g.Z], () => g.Z.getGuild(E), [E]),
        O = null != (t = null == p ? void 0 : p.name) ? t : '',
        P = (0, N.no)(R),
        { analyticsLocations: U } = (0, d.ZP)(a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [M, j] = (0, I.ww)({
            guildId: E,
            analyticsLocations: U,
            openWithoutBackstack: !0
        }),
        v = P.has(A.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? C.intl.string(C.t.SpDXIy) : C.intl.string(C.t['QRN+Sk']);
    j || (v = C.intl.string(C.t.FFj5Dg));
    let L = j ? C.intl.string(C.t['/PGQf3']) : C.intl.string(C.t.WikgZ2);
    return ((0, s.ZP)(() => {
        h.default.track(k.rMx.OPEN_MODAL, {
            type: f.dc,
            guild_id: E,
            other_user_id: m
        });
    }),
    r.useEffect(() => {
        if (null == p) return void e();
    }, [p, e]),
    null == p)
        ? null
        : (0, i.jsxs)(o.Y0X, {
              transitionState: Z,
              size: o.CgR.SMALL,
              parentComponent: 'AutomodUserProfileQuarantineAlert',
              children: [
                  (0, i.jsx)(o.xBx, {
                      separator: !1,
                      children: (0, i.jsxs)('div', {
                          className: x.headerContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: x.guildIconContainer,
                                  children: [
                                      (0, i.jsx)(u.Z, {
                                          guild: p,
                                          size: u.Z.Sizes.LARGER
                                      }),
                                      (0, i.jsx)('div', {
                                          className: x.statusContainer,
                                          children: (0, i.jsx)(o.ics, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: x.statusIcon
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(o.X6q, {
                                  color: 'header-primary',
                                  variant: 'heading-md/semibold',
                                  children: C.intl.format(C.t.kcYdTk, { guildName: O })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(o.hzk, {
                      children: (0, i.jsx)('div', {
                          className: x.descriptionContainer,
                          children: (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: v
                          })
                      })
                  }),
                  (0, i.jsxs)(o.mzw, {
                      children: [
                          (0, i.jsx)(o.zxk, {
                              onClick: () => {
                                  M(), e();
                              },
                              color: o.zxk.Colors.BRAND,
                              look: o.zxk.Looks.FILLED,
                              children: L
                          }),
                          (0, i.jsx)(o.zxk, {
                              onClick: e,
                              color: o.zxk.Colors.PRIMARY,
                              look: o.zxk.Looks.LINK,
                              children: C.intl.string(C.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
