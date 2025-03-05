n.d(t, { Z: () => y });
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
    g = n(594174),
    m = n(768581),
    b = n(302221),
    _ = n(745752),
    E = n(17181),
    O = n(388032),
    N = n(964709),
    v = n(163213);
function y(e) {
    var t, n;
    let { guildId: l, channelId: y } = e,
        { ref: I, width: C, height: S } = (0, c.Z)(),
        T = (0, p.Q3)('GuildOnboardingBlockedPage'),
        P = null !== (n = null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n,
        j = i.useCallback(() => {
            null != l &&
                null != y &&
                ((0, _.I1)(l),
                (0, E.default)({
                    guildId: l,
                    returnChannelId: y
                }));
        }, [l, y]),
        A = (0, a.e7)([f.Z], () => f.Z.getGuild(l)),
        Z = i.useMemo(
            () =>
                null == A
                    ? null
                    : m.ZP.getGuildSplashURL({
                          id: A.id,
                          splash: A.splash
                      }),
            [A]
        ),
        x = (0, d.N)(Z);
    return T && P
        ? (0, r.jsxs)('div', {
              className: o()(N.outerWrapping, v.main, { [v.fullBorderWithGradient]: null == Z }),
              ref: I,
              children: [
                  null != Z
                      ? (0, r.jsx)(u.Z, {
                            className: v.artwork,
                            src: Z,
                            width: C,
                            height: S,
                            imageClassName: v.cover
                        })
                      : (0, r.jsx)(h.Z, {}),
                  null != x &&
                      null != Z &&
                      (0, r.jsx)('div', {
                          className: v.gradient,
                          style: { background: 'linear-gradient(180deg, '.concat((0, b.aD)(x, 0.16), ' 0%, ').concat((0, b.aD)(x, 1), ' 100%)') }
                      }),
                  null != Z && (0, r.jsx)('div', { className: v.gradient }),
                  (0, r.jsxs)('div', {
                      className: o()(N.explainerContainer, N.transparentBackground),
                      children: [
                          (0, r.jsxs)('div', {
                              className: N.header,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-xxl/normal',
                                      children: O.NW.string(O.t.CCmhpK)
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-lg/normal',
                                      children: O.NW.string(O.t.gRAHcX)
                                  })
                              ]
                          }),
                          (0, r.jsx)(s.zxk, {
                              color: s.zxk.Colors.WHITE,
                              size: s.zxk.Sizes.LARGE,
                              onClick: j,
                              children: O.NW.string(O.t.VVFjAA)
                          })
                      ]
                  })
              ]
          })
        : (0, r.jsx)('div', {
              className: N.container,
              children: (0, r.jsxs)('div', {
                  className: N.explainerContainer,
                  children: [
                      (0, r.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          children: O.NW.string(O.t.FWtdQk)
                      }),
                      (0, r.jsx)(s.zxk, {
                          onClick: j,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              children: O.NW.string(O.t.VVFjAA)
                          })
                      })
                  ]
              })
          });
}
