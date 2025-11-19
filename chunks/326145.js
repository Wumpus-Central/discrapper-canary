n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(393238),
    u = n(877604),
    d = n(998730),
    p = n(546247),
    f = n(430824),
    h = n(768581),
    g = n(302221),
    m = n(745752),
    _ = n(17181),
    b = n(388032),
    E = n(76531),
    O = n(718215);
function y(e) {
    let { guildId: t, channelId: n } = e,
        { ref: l, width: y, height: v } = (0, c.ZP)(),
        I = i.useCallback(() => {
            null != t &&
                null != n &&
                ((0, m.I1)(t),
                (0, _.default)({
                    guildId: t,
                    returnChannelId: n,
                }));
        }, [t, n]),
        C = (0, s.e7)([f.Z], () => f.Z.getGuild(t)),
        S = i.useMemo(
            () =>
                null == C
                    ? null
                    : h.ZP.getGuildSplashURL({
                          id: C.id,
                          splash: C.splash,
                      }),
            [C],
        ),
        T = (0, d.N)(S);
    return (0, r.jsxs)("div", {
        className: a()(E.outerWrapping, O.main, { [O.fullBorderWithGradient]: null == S }),
        ref: l,
        children: [
            null != S
                ? (0, r.jsx)(u.Z, {
                      className: O.artwork,
                      src: S,
                      width: y,
                      height: v,
                      imageClassName: O.cover,
                  })
                : (0, r.jsx)(p.Z, {}),
            null != T &&
                null != S &&
                (0, r.jsx)("div", {
                    className: O.gradient,
                    style: {
                        background: "linear-gradient(180deg, "
                            .concat((0, g.aD)(T, 0.16), " 0%, ")
                            .concat((0, g.aD)(T, 1), " 100%)"),
                    },
                }),
            null != S && (0, r.jsx)("div", { className: O.gradient }),
            (0, r.jsxs)("div", {
                className: a()(E.explainerContainer, E.transparentBackground),
                children: [
                    (0, r.jsxs)("div", {
                        className: E.header,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-xxl/normal",
                                color: "always-white",
                                children: b.intl.string(b.t.CCmhpF),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-lg/normal",
                                color: "always-white",
                                children: b.intl.string(b.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.Button, {
                        variant: "overlay-primary",
                        size: "md",
                        text: b.intl.string(b.t.VVFjAC),
                        onClick: I,
                    }),
                ],
            }),
        ],
    });
}
