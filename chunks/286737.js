n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(534514),
    s = n(834730),
    o = n(821609),
    c = n(141628),
    d = n(289363),
    u = n(287809),
    m = n(486020),
    h = n(409626),
    f = n(305080),
    _ = n(985018),
    g = n(448682);
function p(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: p,
            hasAlreadyLinked: x,
            canStartAuthorization: E,
            startAuthorization: A,
            connectionApp: v,
            officialInvite: I,
        } = (0, f.c)(),
        b = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        j = a.useCallback(() => {
            t(h.Ws.LinkAccount), A({ analyticsLocations: n });
        }, [t, A, n]);
    if (!p || null == v || !E || x || null == b) return null;
    let N = I?.guild != null ? m.Ay.getGuildSplashURL({ id: I.guild.id, splash: I.guild.splash }) : null;
    return (0, l.jsxs)("div", {
        className: g.uW,
        children: [
            (0, l.jsx)(r.D, {
                className: g.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: _.intl.string(_.t["VDAhr+"]),
            }),
            (0, l.jsxs)("div", {
                className: g.kL,
                children: [
                    null != N
                        ? (0, l.jsx)("img", { className: g.ll, src: N, alt: "", draggable: !1 })
                        : (0, l.jsx)("div", { className: g.sB, children: (0, l.jsx)(d.default, { application: v }) }),
                    (0, l.jsxs)("div", {
                        className: g.hQ,
                        children: [
                            (0, l.jsxs)("div", {
                                className: g.FS,
                                children: [
                                    (0, l.jsx)(r.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: _.intl.formatToPlainString(_.t.hUbQT2, { gameName: v.name }),
                                    }),
                                    (0, l.jsx)(s.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: _.intl.string(_.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(o.$, {
                                variant: "secondary",
                                icon: c.A,
                                text: _.intl.string(_.t.jynBQ5),
                                onClick: j,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
