n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(765671),
    c = n(4616),
    u = n(743674),
    A = n(426660),
    h = n(71393),
    _ = n(486020),
    m = n(998304),
    p = n(817818),
    g = n(967305),
    E = n(985018),
    f = n(666088),
    I = n(22004);
function C(e) {
    let { guildId: t, channelId: n } = e,
        { ref: a, width: C, height: N } = (0, d.Ay)(),
        T = r.useCallback(() => {
            null != t && null != n && ((0, p.sy)(t), (0, g.default)({ guildId: t, returnChannelId: n }));
        }, [t, n]),
        S = (0, s.bG)([h.A], () => h.A.getGuild(t)),
        x = r.useMemo(() => (null == S ? null : _.Ay.getGuildSplashURL({ id: S.id, splash: S.splash })), [S]),
        v = (0, u.S)(x);
    return (0, i.jsxs)("div", {
        className: l()(f.kf, I.iW, { [I.Me]: null == x }),
        ref: a,
        children: [
            null != x
                ? (0, i.jsx)(c.A, { className: I.xX, src: x, width: C, height: N, imageClassName: I.Iv })
                : (0, i.jsx)(A.A, {}),
            null != v &&
                null != x &&
                (0, i.jsx)("div", {
                    className: I.D7,
                    style: { background: `linear-gradient(180deg, ${(0, m.cb)(v, 0.16)} 0%, ${(0, m.cb)(v, 1)} 100%)` },
                }),
            null != x && (0, i.jsx)("div", { className: I.D7 }),
            (0, i.jsxs)("div", {
                className: l()(f.Cj, f.Vw),
                children: [
                    (0, i.jsxs)("div", {
                        className: f.wx,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: "heading-xxl/normal",
                                color: "always-white",
                                children: E.intl.string(E.t.CCmhpF),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-lg/normal",
                                color: "always-white",
                                children: E.intl.string(E.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.Button, {
                        variant: "overlay-primary",
                        size: "md",
                        text: E.intl.string(E.t.VVFjAC),
                        onClick: T,
                    }),
                ],
            }),
        ],
    });
}
