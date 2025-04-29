e.d(t, { default: () => Z }), e(388685);
var i = e(255367),
    l = e(73800),
    r = e(399606),
    s = e(481060),
    o = e(493773),
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
    x = e(372897),
    C = e(388032),
    A = e(875606);
function Z(n) {
    var t;
    let { onClose: e, transitionState: Z, guildId: E } = n,
        m = (0, r.e7)([c.default], () => c.default.getId()),
        R = (0, r.e7)([_.ZP], () => _.ZP.getMember(E, m), [E, m]),
        O = (0, r.e7)([g.Z], () => g.Z.getGuild(E), [E]),
        p = null != (t = null == O ? void 0 : O.name) ? t : '',
        M = (0, N.no)(R),
        { analyticsLocations: P } = (0, d.ZP)(a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [U, j] = (0, I.ww)({
            guildId: E,
            analyticsLocations: P,
            openWithoutBackstack: !0
        }),
        v = M.has(x.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? C.intl.string(C.t.SpDXIy) : C.intl.string(C.t['QRN+Sk']);
    j || (v = C.intl.string(C.t.FFj5Dg));
    let L = j ? C.intl.string(C.t['/PGQf3']) : C.intl.string(C.t.WikgZ2);
    return ((0, o.ZP)(() => {
        h.default.track(k.rMx.OPEN_MODAL, {
            type: f.dc,
            guild_id: E,
            other_user_id: m
        });
    }),
    l.useEffect(() => {
        if (null == O) return void e();
    }, [O, e]),
    null == O)
        ? null
        : (0, i.jsxs)(s.Y0X, {
              transitionState: Z,
              size: s.CgR.SMALL,
              children: [
                  (0, i.jsx)(s.xBx, {
                      separator: !1,
                      children: (0, i.jsxs)('div', {
                          className: A.headerContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: A.guildIconContainer,
                                  children: [
                                      (0, i.jsx)(u.Z, {
                                          guild: O,
                                          size: u.Z.Sizes.LARGER
                                      }),
                                      (0, i.jsx)('div', {
                                          className: A.statusContainer,
                                          children: (0, i.jsx)(s.ics, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: A.statusIcon
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(s.X6q, {
                                  color: 'header-primary',
                                  variant: 'heading-md/semibold',
                                  children: C.intl.format(C.t.kcYdTk, { guildName: p })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(s.hzk, {
                      children: (0, i.jsx)('div', {
                          className: A.descriptionContainer,
                          children: (0, i.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: v
                          })
                      })
                  }),
                  (0, i.jsxs)(s.mzw, {
                      children: [
                          (0, i.jsx)(s.zxk, {
                              onClick: () => {
                                  U(), e();
                              },
                              color: s.zxk.Colors.BRAND,
                              look: s.zxk.Looks.FILLED,
                              children: L
                          }),
                          (0, i.jsx)(s.zxk, {
                              onClick: e,
                              color: s.zxk.Colors.PRIMARY,
                              look: s.zxk.Looks.LINK,
                              children: C.intl.string(C.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
