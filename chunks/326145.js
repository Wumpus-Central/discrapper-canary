n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(393238),
    u = n(877604),
    d = n(998730),
    p = n(546247),
    f = n(430824),
    m = n(768581),
    h = n(302221),
    g = n(745752),
    _ = n(17181),
    b = n(388032),
    E = n(812070),
    O = n(904885);
function I(e) {
    let { guildId: t, channelId: n } = e,
        { ref: l, width: I, height: y } = (0, c.ZP)(),
        v = i.useCallback(() => {
            null != t &&
                null != n &&
                ((0, g.I1)(t),
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
                    : m.ZP.getGuildSplashURL({
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
                      width: I,
                      height: y,
                      imageClassName: O.cover,
                  })
                : (0, r.jsx)(p.Z, {}),
            null != T &&
                null != S &&
                (0, r.jsx)("div", {
                    className: O.gradient,
                    style: {
                        background: "linear-gradient(180deg, "
                            .concat((0, h.aD)(T, 0.16), " 0%, ")
                            .concat((0, h.aD)(T, 1), " 100%)"),
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
                        onClick: v,
                    }),
                ],
            }),
        ],
    });
}
