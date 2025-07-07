n.d(t, { Z: () => y });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(393238),
    u = n(877604),
    d = n(998730),
    p = n(546247),
    h = n(430824),
    f = n(768581),
    g = n(302221),
    m = n(745752),
    b = n(17181),
    _ = n(388032),
    E = n(150718),
    O = n(113728);
function y(e) {
    let { guildId: t, channelId: n } = e,
        { ref: l, width: y, height: I } = (0, c.ZP)(),
        v = i.useCallback(() => {
            null != t &&
                null != n &&
                ((0, m.I1)(t),
                (0, b.default)({
                    guildId: t,
                    returnChannelId: n
                }));
        }, [t, n]),
        C = (0, o.e7)([h.Z], () => h.Z.getGuild(t)),
        S = i.useMemo(
            () =>
                null == C
                    ? null
                    : f.ZP.getGuildSplashURL({
                          id: C.id,
                          splash: C.splash
                      }),
            [C]
        ),
        N = (0, d.N)(S);
    return (0, r.jsxs)('div', {
        className: a()(E.outerWrapping, O.main, { [O.fullBorderWithGradient]: null == S }),
        ref: l,
        children: [
            null != S
                ? (0, r.jsx)(u.Z, {
                      className: O.artwork,
                      src: S,
                      width: y,
                      height: I,
                      imageClassName: O.cover
                  })
                : (0, r.jsx)(p.Z, {}),
            null != N &&
                null != S &&
                (0, r.jsx)('div', {
                    className: O.gradient,
                    style: { background: 'linear-gradient(180deg, '.concat((0, g.aD)(N, 0.16), ' 0%, ').concat((0, g.aD)(N, 1), ' 100%)') }
                }),
            null != S && (0, r.jsx)('div', { className: O.gradient }),
            (0, r.jsxs)('div', {
                className: a()(E.explainerContainer, E.transparentBackground),
                children: [
                    (0, r.jsxs)('div', {
                        className: E.header,
                        children: [
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-xxl/normal',
                                children: _.intl.string(_.t.CCmhpK)
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-lg/normal',
                                children: _.intl.string(_.t.gRAHcX)
                            })
                        ]
                    }),
                    (0, r.jsx)(s.zxk, {
                        color: s.zxk.Colors.WHITE,
                        size: s.zxk.Sizes.LARGE,
                        onClick: v,
                        children: _.intl.string(_.t.VVFjAA)
                    })
                ]
            })
        ]
    });
}
