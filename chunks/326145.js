n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
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
    O = n(964709),
    N = n(163213);
function v(e) {
    let { guildId: t, channelId: n } = e,
        { ref: l, width: v, height: y } = (0, c.Z)(),
        I = (0, p.Q3)('GuildOnboardingBlockedPage'),
        C = i.useCallback(() => {
            null != t &&
                null != n &&
                ((0, b.I1)(t),
                (0, _.default)({
                    guildId: t,
                    returnChannelId: n
                }));
        }, [t, n]),
        S = (0, a.e7)([f.Z], () => f.Z.getGuild(t)),
        T = i.useMemo(
            () =>
                null == S
                    ? null
                    : g.ZP.getGuildSplashURL({
                          id: S.id,
                          splash: S.splash
                      }),
            [S]
        ),
        P = (0, d.N)(T);
    return I
        ? (0, r.jsxs)('div', {
              className: o()(O.outerWrapping, N.main, { [N.fullBorderWithGradient]: null == T }),
              ref: l,
              children: [
                  null != T
                      ? (0, r.jsx)(u.Z, {
                            className: N.artwork,
                            src: T,
                            width: v,
                            height: y,
                            imageClassName: N.cover
                        })
                      : (0, r.jsx)(h.Z, {}),
                  null != P &&
                      null != T &&
                      (0, r.jsx)('div', {
                          className: N.gradient,
                          style: { background: 'linear-gradient(180deg, '.concat((0, m.aD)(P, 0.16), ' 0%, ').concat((0, m.aD)(P, 1), ' 100%)') }
                      }),
                  null != T && (0, r.jsx)('div', { className: N.gradient }),
                  (0, r.jsxs)('div', {
                      className: o()(O.explainerContainer, O.transparentBackground),
                      children: [
                          (0, r.jsxs)('div', {
                              className: O.header,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-xxl/normal',
                                      children: E.NW.string(E.t.CCmhpK)
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-lg/normal',
                                      children: E.NW.string(E.t.gRAHcX)
                                  })
                              ]
                          }),
                          (0, r.jsx)(s.zxk, {
                              color: s.zxk.Colors.WHITE,
                              size: s.zxk.Sizes.LARGE,
                              onClick: C,
                              children: E.NW.string(E.t.VVFjAA)
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
                          children: E.NW.string(E.t.FWtdQk)
                      }),
                      (0, r.jsx)(s.zxk, {
                          onClick: C,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              children: E.NW.string(E.t.VVFjAA)
                          })
                      })
                  ]
              })
          });
}
