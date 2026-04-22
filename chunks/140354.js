n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(534514),
    d = n(834730),
    u = n(821609),
    c = n(765671),
    A = n(4616),
    h = n(743674),
    _ = n(426660),
    E = n(71393),
    p = n(486020),
    m = n(998304),
    g = n(817818),
    I = n(967305),
    C = n(985018),
    f = n(342501),
    T = n(339875);
function S(e) {
    let { guildId: t, channelId: n } = e,
        { ref: a, width: S, height: N } = (0, c.Ay)(),
        O = r.useCallback(() => {
            null != t && null != n && ((0, g.sy)(t), (0, I.default)({ guildId: t, returnChannelId: n }));
        }, [t, n]),
        L = (0, s.bG)([E.A], () => E.A.getGuild(t)),
        y = r.useMemo(() => (null == L ? null : p.Ay.getGuildSplashURL({ id: L.id, splash: L.splash })), [L]),
        v = (0, h.S)(y);
    return (0, i.jsxs)("div", {
        className: l()(f.kf, T.iW, { [T.Me]: null == y }),
        ref: a,
        children: [
            null != y
                ? (0, i.jsx)(A.A, { className: T.xX, src: y, width: S, height: N, imageClassName: T.Iv })
                : (0, i.jsx)(_.A, {}),
            null != v &&
                null != y &&
                (0, i.jsx)("div", {
                    className: T.D7,
                    style: { background: `linear-gradient(180deg, ${(0, m.cb)(v, 0.16)} 0%, ${(0, m.cb)(v, 1)} 100%)` },
                }),
            null != y && (0, i.jsx)("div", { className: T.D7 }),
            (0, i.jsxs)("div", {
                className: l()(f.Cj, f.Vw),
                children: [
                    (0, i.jsxs)("div", {
                        className: f.wx,
                        children: [
                            (0, i.jsx)(o.D, {
                                variant: "heading-xxl/normal",
                                color: "always-white",
                                children: C.intl.string(C.t.CCmhpF),
                            }),
                            (0, i.jsx)(d.E, {
                                variant: "text-lg/normal",
                                color: "always-white",
                                children: C.intl.string(C.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, i.jsx)(u.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: C.intl.string(C.t.VVFjAC),
                        onClick: O,
                    }),
                ],
            }),
        ],
    });
}
