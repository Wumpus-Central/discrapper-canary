a.r(s), a.d(s, { default: () => b });
var e = a(627968),
    i = a(64700),
    n = a(503698),
    t = a.n(n),
    r = a(17928),
    d = a(534514),
    c = a(834730),
    u = a(821609),
    h = a(765671),
    x = a(4616),
    g = a(743674),
    o = a(426660),
    m = a(71393),
    v = a(486020),
    j = a(998304),
    p = a(817818),
    C = a(608401),
    k = a(375708),
    y = a(342501),
    A = a(339875);
function b(l) {
    let { guildId: s, channelId: a } = l,
        { ref: n, width: b, height: N } = (0, h.Ay)(),
        f = i.useCallback(() => {
            null != s && null != a && ((0, p.sy)(s), (0, C.default)({ guildId: s, returnChannelId: a }));
        }, [s, a]),
        w = (0, r.bG)([m.A], () => m.A.getGuild(s)),
        D = i.useMemo(() => (null == w ? null : v.Ay.getGuildSplashURL({ id: w.id, splash: w.splash })), [w]),
        G = (0, g.S)(D);
    return (0, e.jsxs)("div", {
        className: t()(y.kf, A.iW, { [A.Me]: null == D }),
        ref: n,
        children: [
            null != D
                ? (0, e.jsx)(x.A, { className: A.xX, src: D, width: b, height: N, imageClassName: A.Iv })
                : (0, e.jsx)(o.A, {}),
            null != G &&
                null != D &&
                (0, e.jsx)("div", {
                    className: A.D7,
                    style: { background: `linear-gradient(180deg, ${(0, j.cb)(G, 0.16)} 0%, ${(0, j.cb)(G, 1)} 100%)` },
                }),
            null != D && (0, e.jsx)("div", { className: A.D7 }),
            (0, e.jsxs)("div", {
                className: t()(y.Cj, y.Vw),
                children: [
                    (0, e.jsxs)("div", {
                        className: y.wx,
                        children: [
                            (0, e.jsx)(d.D, {
                                variant: "heading-xxl/normal",
                                color: "text-overlay-light",
                                children: k.intl.string(k.t.CCmhpF),
                            }),
                            (0, e.jsx)(c.E, {
                                variant: "text-lg/normal",
                                color: "text-overlay-light",
                                children: k.intl.string(k.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, e.jsx)(u.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: k.intl.string(k.t.VVFjAC),
                        onClick: f,
                    }),
                ],
            }),
        ],
    });
}
