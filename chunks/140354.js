(e.r(s), e.d(s, { default: () => b }));
var a = e(477900),
    i = e(582128),
    n = e(503698),
    t = e.n(n),
    r = e(17928),
    d = e(534514),
    c = e(834730),
    u = e(821609),
    h = e(765671),
    x = e(4616),
    g = e(743674),
    m = e(426660),
    o = e(71393),
    v = e(486020),
    j = e(998304),
    p = e(817818),
    C = e(608401),
    k = e(105292),
    y = e(51686),
    A = e(660238);
function b(l) {
    let { guildId: s, channelId: e } = l,
        { ref: n, width: b, height: N } = (0, h.Ay)(),
        f = i.useCallback(() => {
            null != s && null != e && ((0, p.sy)(s), (0, C.default)({ guildId: s, returnChannelId: e }));
        }, [s, e]),
        w = (0, r.bG)([o.A], () => o.A.getGuild(s)),
        D = i.useMemo(() => (null == w ? null : v.Ay.getGuildSplashURL({ id: w.id, splash: w.splash })), [w]),
        G = (0, g.S)(D);
    return (0, a.jsxs)("div", {
        className: t()(y.kf, A.iW, { [A.Me]: null == D }),
        ref: n,
        children: [
            null != D
                ? (0, a.jsx)(x.A, { className: A.xX, src: D, width: b, height: N, imageClassName: A.Iv })
                : (0, a.jsx)(m.A, {}),
            null != G &&
                null != D &&
                (0, a.jsx)("div", {
                    className: A.D7,
                    style: { background: `linear-gradient(180deg, ${(0, j.cb)(G, 0.16)} 0%, ${(0, j.cb)(G, 1)} 100%)` },
                }),
            null != D && (0, a.jsx)("div", { className: A.D7 }),
            (0, a.jsxs)("div", {
                className: t()(y.Cj, y.Vw),
                children: [
                    (0, a.jsxs)("div", {
                        className: y.wx,
                        children: [
                            (0, a.jsx)(d.D, {
                                variant: "heading-xxl/medium",
                                color: "text-overlay-light",
                                children: k.intl.string(k.t.CCmhpF),
                            }),
                            (0, a.jsx)(c.E, {
                                variant: "text-lg/normal",
                                color: "text-overlay-light",
                                children: k.intl.string(k.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.$, {
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
