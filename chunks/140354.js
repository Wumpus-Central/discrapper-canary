a.r(s), a.d(s, { default: () => A });
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
    m = a(743674),
    g = a(426660),
    o = a(71393),
    j = a(486020),
    p = a(998304),
    v = a(817818),
    C = a(608401),
    w = a(375708),
    k = a(342501),
    y = a(339875);
function A(l) {
    let { guildId: s, channelId: a } = l,
        { ref: n, width: A, height: b } = (0, h.Ay)(),
        N = i.useCallback(() => {
            null != s && null != a && ((0, v.sy)(s), (0, C.default)({ guildId: s, returnChannelId: a }));
        }, [s, a]),
        f = (0, r.bG)([o.A], () => o.A.getGuild(s)),
        D = i.useMemo(() => (null == f ? null : j.Ay.getGuildSplashURL({ id: f.id, splash: f.splash })), [f]),
        G = (0, m.S)(D);
    return (0, e.jsxs)("div", {
        className: t()(k.kf, y.iW, { [y.Me]: null == D }),
        ref: n,
        children: [
            null != D
                ? (0, e.jsx)(x.A, { className: y.xX, src: D, width: A, height: b, imageClassName: y.Iv })
                : (0, e.jsx)(g.A, {}),
            null != G &&
                null != D &&
                (0, e.jsx)("div", {
                    className: y.D7,
                    style: { background: `linear-gradient(180deg, ${(0, p.cb)(G, 0.16)} 0%, ${(0, p.cb)(G, 1)} 100%)` },
                }),
            null != D && (0, e.jsx)("div", { className: y.D7 }),
            (0, e.jsxs)("div", {
                className: t()(k.Cj, k.Vw),
                children: [
                    (0, e.jsxs)("div", {
                        className: k.wx,
                        children: [
                            (0, e.jsx)(d.D, {
                                variant: "heading-xxl/normal",
                                color: "always-white",
                                children: w.intl.string(w.t.CCmhpF),
                            }),
                            (0, e.jsx)(c.E, {
                                variant: "text-lg/normal",
                                color: "always-white",
                                children: w.intl.string(w.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, e.jsx)(u.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: w.intl.string(w.t.VVFjAC),
                        onClick: N,
                    }),
                ],
            }),
        ],
    });
}
