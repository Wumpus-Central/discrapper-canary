n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(393238),
    u = n(877604),
    d = n(998730),
    p = n(540059),
    h = n(546247),
    f = n(430824),
    g = n(768581),
    m = n(302221),
    b = n(745752),
    _ = n(17181),
    E = n(388032),
    O = n(150718),
    y = n(113728);
function I(e) {
    let { guildId: t, channelId: n } = e,
        { ref: l, width: I, height: v } = (0, c.ZP)(),
        C = (0, p.Q3)('GuildOnboardingBlockedPage'),
        S = i.useCallback(() => {
            null != t &&
                null != n &&
                ((0, b.I1)(t),
                (0, _.default)({
                    guildId: t,
                    returnChannelId: n
                }));
        }, [t, n]),
        N = (0, o.e7)([f.Z], () => f.Z.getGuild(t)),
        T = i.useMemo(
            () =>
                null == N
                    ? null
                    : g.ZP.getGuildSplashURL({
                          id: N.id,
                          splash: N.splash
                      }),
            [N]
        ),
        P = (0, d.N)(T);
    return C
        ? (0, r.jsxs)('div', {
              className: a()(O.outerWrapping, y.main, { [y.fullBorderWithGradient]: null == T }),
              ref: l,
              children: [
                  null != T
                      ? (0, r.jsx)(u.Z, {
                            className: y.artwork,
                            src: T,
                            width: I,
                            height: v,
                            imageClassName: y.cover
                        })
                      : (0, r.jsx)(h.Z, {}),
                  null != P &&
                      null != T &&
                      (0, r.jsx)('div', {
                          className: y.gradient,
                          style: { background: 'linear-gradient(180deg, '.concat((0, m.aD)(P, 0.16), ' 0%, ').concat((0, m.aD)(P, 1), ' 100%)') }
                      }),
                  null != T && (0, r.jsx)('div', { className: y.gradient }),
                  (0, r.jsxs)('div', {
                      className: a()(O.explainerContainer, O.transparentBackground),
                      children: [
                          (0, r.jsxs)('div', {
                              className: O.header,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-xxl/normal',
                                      children: E.intl.string(E.t.CCmhpK)
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-lg/normal',
                                      children: E.intl.string(E.t.gRAHcX)
                                  })
                              ]
                          }),
                          (0, r.jsx)(s.zxk, {
                              color: s.zxk.Colors.WHITE,
                              size: s.zxk.Sizes.LARGE,
                              onClick: S,
                              children: E.intl.string(E.t.VVFjAA)
                          })
                      ]
                  })
              ]
          })
        : (0, r.jsx)('div', {
              className: O.container,
              children: (0, r.jsxs)('div', {
                  className: O.explainerContainer,
                  children: [
                      (0, r.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          children: E.intl.string(E.t.FWtdQk)
                      }),
                      (0, r.jsx)(s.zxk, {
                          onClick: S,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              children: E.intl.string(E.t.VVFjAA)
                          })
                      })
                  ]
              })
          });
}
