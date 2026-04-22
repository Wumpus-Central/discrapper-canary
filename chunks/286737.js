n.d(t, { A: () => p });
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(534514),
    s = n(834730),
    o = n(821609),
    d = n(141628),
    c = n(289363),
    u = n(287809),
    m = n(486020),
    _ = n(409626),
    h = n(305080),
    f = n(985018),
    g = n(448682);
function p(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: p,
            hasAlreadyLinked: x,
            canStartAuthorization: b,
            startAuthorization: A,
            connectionApp: v,
            officialInvite: E,
        } = (0, h.c)(),
        I = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        C = l.useCallback(() => {
            t(_.Ws.LinkAccount), A({ analyticsLocations: n });
        }, [t, A, n]);
    if (!p || null == v || !b || x || null == I) return null;
    let N = E?.guild != null ? m.Ay.getGuildSplashURL({ id: E.guild.id, splash: E.guild.splash }) : null;
    return (0, a.jsxs)("div", {
        className: g.uW,
        children: [
            (0, a.jsx)(r.D, {
                className: g.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: f.intl.string(f.t["VDAhr+"]),
            }),
            (0, a.jsxs)("div", {
                className: g.kL,
                children: [
                    null != N
                        ? (0, a.jsx)("img", { className: g.ll, src: N, alt: "", draggable: !1 })
                        : (0, a.jsx)("div", { className: g.sB, children: (0, a.jsx)(c.default, { application: v }) }),
                    (0, a.jsxs)("div", {
                        className: g.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: g.FS,
                                children: [
                                    (0, a.jsx)(r.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: f.intl.formatToPlainString(f.t.hUbQT2, { gameName: v.name }),
                                    }),
                                    (0, a.jsx)(s.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: f.intl.string(f.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(o.$, {
                                variant: "secondary",
                                icon: d.A,
                                text: f.intl.string(f.t.jynBQ5),
                                onClick: C,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
