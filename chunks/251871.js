t.d(n, { default: () => A }), t(47120);
var i = t(200651),
    r = t(192379),
    l = t(399606),
    s = t(481060),
    o = t(493773),
    a = t(100527),
    d = t(906732),
    u = t(565138),
    c = t(314897),
    N = t(271383),
    _ = t(430824),
    g = t(626135),
    h = t(715903),
    I = t(295474),
    f = t(273504),
    k = t(981631),
    x = t(372897),
    C = t(388032),
    Z = t(875606);
function A(e) {
    var n;
    let { onClose: t, transitionState: A, guildId: E } = e,
        m = (0, l.e7)([c.default], () => c.default.getId()),
        R = (0, l.e7)([N.ZP], () => N.ZP.getMember(E, m), [E, m]),
        O = (0, l.e7)([_.Z], () => _.Z.getGuild(E), [E]),
        P = null != (n = null == O ? void 0 : O.name) ? n : '',
        p = (0, h.no)(R),
        { analyticsLocations: L } = (0, d.ZP)(a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [M, U] = (0, I.ww)({
            guildId: E,
            analyticsLocations: L,
            openWithoutBackstack: !0
        }),
        j = p.has(x.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? C.NW.string(C.t.SpDXIy) : C.NW.string(C.t['QRN+Sk']);
    U || (j = C.NW.string(C.t.FFj5Dg));
    let v = U ? C.NW.string(C.t['/PGQf3']) : C.NW.string(C.t.WikgZ2);
    return ((0, o.ZP)(() => {
        g.default.track(k.rMx.OPEN_MODAL, {
            type: f.dc,
            guild_id: E,
            other_user_id: m
        });
    }),
    r.useEffect(() => {
        if (null == O) return void t();
    }, [O, t]),
    null == O)
        ? null
        : (0, i.jsxs)(s.Y0X, {
              transitionState: A,
              size: s.CgR.SMALL,
              children: [
                  (0, i.jsx)(s.xBx, {
                      separator: !1,
                      children: (0, i.jsxs)('div', {
                          className: Z.headerContainer,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: Z.guildIconContainer,
                                  children: [
                                      (0, i.jsx)(u.Z, {
                                          guild: O,
                                          size: u.Z.Sizes.LARGER
                                      }),
                                      (0, i.jsx)('div', {
                                          className: Z.statusContainer,
                                          children: (0, i.jsx)(s.ics, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: Z.statusIcon
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(s.X6q, {
                                  color: 'header-primary',
                                  variant: 'heading-md/semibold',
                                  children: C.NW.format(C.t.kcYdTk, { guildName: P })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(s.hzk, {
                      children: (0, i.jsx)('div', {
                          className: Z.descriptionContainer,
                          children: (0, i.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: j
                          })
                      })
                  }),
                  (0, i.jsxs)(s.mzw, {
                      children: [
                          (0, i.jsx)(s.zxk, {
                              onClick: () => {
                                  M(), t();
                              },
                              color: s.zxk.Colors.BRAND,
                              look: s.zxk.Looks.FILLED,
                              children: v
                          }),
                          (0, i.jsx)(s.zxk, {
                              onClick: t,
                              color: s.zxk.Colors.PRIMARY,
                              look: s.zxk.Looks.LINK,
                              children: C.NW.string(C.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
