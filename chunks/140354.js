r.r(t), r.d(t, { default: () => B });
var l = r(627968),
    s = r(64700),
    i = r(503698),
    n = r.n(i),
    a = r(17928),
    o = r(534514),
    d = r(834730),
    c = r(821609),
    u = r(765671),
    h = r(4616),
    f = r(743674),
    p = r(426660),
    g = r(71393),
    x = r(486020),
    m = r(998304),
    j = r(817818),
    _ = r(608401),
    v = r(985018),
    b = r(342501),
    w = r(339875);
function B(e) {
    let { guildId: t, channelId: r } = e,
        { ref: i, width: B, height: k } = (0, u.Ay)(),
        y = s.useCallback(() => {
            null != t && null != r && ((0, j.sy)(t), (0, _.default)({ guildId: t, returnChannelId: r }));
        }, [t, r]),
        F = (0, a.bG)([g.A], () => g.A.getGuild(t)),
        S = s.useMemo(() => (null == F ? null : x.Ay.getGuildSplashURL({ id: F.id, splash: F.splash })), [F]),
        C = (0, f.S)(S);
    return (0, l.jsxs)("div", {
        className: n()(b.kf, w.iW, { [w.Me]: null == S }),
        ref: i,
        children: [
            null != S
                ? (0, l.jsx)(h.A, { className: w.xX, src: S, width: B, height: k, imageClassName: w.Iv })
                : (0, l.jsx)(p.A, {}),
            null != C &&
                null != S &&
                (0, l.jsx)("div", {
                    className: w.D7,
                    style: { background: `linear-gradient(180deg, ${(0, m.cb)(C, 0.16)} 0%, ${(0, m.cb)(C, 1)} 100%)` },
                }),
            null != S && (0, l.jsx)("div", { className: w.D7 }),
            (0, l.jsxs)("div", {
                className: n()(b.Cj, b.Vw),
                children: [
                    (0, l.jsxs)("div", {
                        className: b.wx,
                        children: [
                            (0, l.jsx)(o.D, {
                                variant: "heading-xxl/normal",
                                color: "always-white",
                                children: v.intl.string(v.t.CCmhpF),
                            }),
                            (0, l.jsx)(d.E, {
                                variant: "text-lg/normal",
                                color: "always-white",
                                children: v.intl.string(v.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, l.jsx)(c.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: v.intl.string(v.t.VVFjAC),
                        onClick: y,
                    }),
                ],
            }),
        ],
    });
}
