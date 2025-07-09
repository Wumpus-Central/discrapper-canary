n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(393238),
    d = n(877604),
    p = n(998730),
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
        { ref: l, width: I, height: v } = (0, u.ZP)(),
        C = i.useCallback(() => {
            null != t &&
                null != n &&
                ((0, b.I1)(t),
                (0, _.default)({
                    guildId: t,
                    returnChannelId: n
                }));
        }, [t, n]),
        S = (0, o.e7)([f.Z], () => f.Z.getGuild(t)),
        N = i.useMemo(
            () =>
                null == S
                    ? null
                    : g.ZP.getGuildSplashURL({
                          id: S.id,
                          splash: S.splash
                      }),
            [S]
        ),
        T = (0, p.N)(N);
    return (0, r.jsxs)('div', {
        className: a()(O.outerWrapping, y.main, { [y.fullBorderWithGradient]: null == N }),
        ref: l,
        children: [
            null != N
                ? (0, r.jsx)(d.Z, {
                      className: y.artwork,
                      src: N,
                      width: I,
                      height: v,
                      imageClassName: y.cover
                  })
                : (0, r.jsx)(h.Z, {}),
            null != T &&
                null != N &&
                (0, r.jsx)('div', {
                    className: y.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, m.aD)(T, 0.16), ' 0%, ').concat((0, m.aD)(T, 1), ' 100%)') }
                }),
            null != N && (0, r.jsx)('div', { className: y.gradient }),
            (0, r.jsxs)('div', {
                className: a()(O.explainerContainer, O.transparentBackground),
                children: [
                    (0, r.jsxs)('div', {
                        className: O.header,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                variant: 'heading-xxl/normal',
                                children: E.intl.string(E.t.CCmhpK)
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-lg/normal',
                                children: E.intl.string(E.t.gRAHcX)
                            })
                        ]
                    }),
                    (0, r.jsx)(s.zx, {
                        color: s.zx.Colors.WHITE,
                        size: s.zx.Sizes.LARGE,
                        onClick: C,
                        children: E.intl.string(E.t.VVFjAA)
                    })
                ]
            })
        ]
    });
}
