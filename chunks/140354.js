n.d(t, {
    A: () => O,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(765671),
    u = n(4616),
    d = n(743674),
    p = n(426660),
    f = n(71393),
    h = n(486020),
    A = n(998304),
    g = n(817818),
    m = n(967305),
    b = n(985018),
    _ = n(666088),
    E = n(22004);

function O(e) {
    let { guildId: t, channelId: n } = e,
        { ref: l, width: O, height: y } = (0, c.Ay)(),
        I = i.useCallback(() => {
            null != t &&
                null != n &&
                ((0, g.sy)(t),
                (0, m.default)({
                    guildId: t,
                    returnChannelId: n,
                }));
        }, [t, n]),
        v = (0, s.bG)([f.A], () => f.A.getGuild(t)),
        S = i.useMemo(
            () =>
                null == v
                    ? null
                    : h.Ay.getGuildSplashURL({
                          id: v.id,
                          splash: v.splash,
                      }),
            [v],
        ),
        C = (0, d.S)(S);
    return (0, r.jsxs)("div", {
        className: a()(_.kf, E.iW, {
            [E.Me]: null == S,
        }),
        ref: l,
        children: [
            null != S
                ? (0, r.jsx)(u.A, {
                      className: E.xX,
                      src: S,
                      width: O,
                      height: y,
                      imageClassName: E.Iv,
                  })
                : (0, r.jsx)(p.A, {}),
            null != C &&
                null != S &&
                (0, r.jsx)("div", {
                    className: E.D7,
                    style: {
                        background: "linear-gradient(180deg, "
                            .concat((0, A.cb)(C, 0.16), " 0%, ")
                            .concat((0, A.cb)(C, 1), " 100%)"),
                    },
                }),
            null != S &&
                (0, r.jsx)("div", {
                    className: E.D7,
                }),
            (0, r.jsxs)("div", {
                className: a()(_.Cj, _.Vw),
                children: [
                    (0, r.jsxs)("div", {
                        className: _.wx,
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
