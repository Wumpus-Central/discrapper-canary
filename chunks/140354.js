(a.r(s), a.d(s, { default: () => A }));
var e = a(477900),
    i = a(582128),
    n = a(503698),
    t = a.n(n),
    r = a(17928),
    d = a(534514),
    c = a(834730),
    u = a(821609),
    h = a(765671),
    x = a(4616),
    g = a(743674),
    m = a(426660),
    o = a(71393),
    v = a(486020),
    j = a(998304),
    p = a(817818),
    C = a(608401),
    y = a(105292),
    b = a(51686),
    k = a(660238);
function A(l) {
    let { guildId: s, channelId: a } = l,
        { ref: n, width: A, height: N } = (0, h.Ay)(),
        f = i.useCallback(() => {
            null != s && null != a && ((0, p.sy)(s), (0, C.default)({ guildId: s, returnChannelId: a }));
        }, [s, a]),
        w = (0, r.bG)([o.A], () => o.A.getGuild(s)),
        D = i.useMemo(() => (null == w ? null : v.Ay.getGuildSplashURL({ id: w.id, splash: w.splash })), [w]),
        G = (0, g.S)(D);
    return (0, e.jsxs)("div", {
        className: t()(b.kf, k.iW, { [k.Me]: null == D }),
        ref: n,
        children: [
            null != D
                ? (0, e.jsx)(x.A, { className: k.xX, src: D, width: A, height: N, imageClassName: k.Iv })
                : (0, e.jsx)(m.A, {}),
            null != G &&
                null != D &&
                (0, e.jsx)("div", {
                    className: k.D7,
                    style: { background: `linear-gradient(180deg, ${(0, j.cb)(G, 0.16)} 0%, ${(0, j.cb)(G, 1)} 100%)` },
                }),
            null != D && (0, e.jsx)("div", { className: k.D7 }),
            (0, e.jsxs)("div", {
                className: t()(b.Cj, b.Vw),
                children: [
                    (0, e.jsxs)("div", {
                        className: b.wx,
                        children: [
                            (0, e.jsx)(d.D, {
                                variant: "heading-xxl/medium",
                                color: "text-overlay-light",
                                children: y.intl.string(y.t.CCmhpF),
                            }),
                            (0, e.jsx)(c.E, {
                                variant: "body-lg/normal",
                                color: "text-overlay-light",
                                children: y.intl.string(y.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, e.jsx)(u.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: y.intl.string(y.t.VVFjAC),
                        onClick: f,
                    }),
                ],
            }),
        ],
    });
}
