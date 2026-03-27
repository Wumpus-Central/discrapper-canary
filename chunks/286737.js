n.d(t, { A: () => h });
var a = n(627968),
    i = n(64700),
    l = n(311907),
    r = n(397927),
    s = n(289363),
    c = n(287809),
    o = n(486020),
    d = n(409626),
    u = n(305080),
    m = n(985018),
    x = n(290490);
function h(e) {
    let { trackAction: t, analyticsLocations: n } = e,
        {
            fetchedAuthorization: h,
            hasAlreadyLinked: f,
            canStartAuthorization: g,
            startAuthorization: _,
            connectionApp: p,
            officialInvite: v,
        } = (0, u.c)(),
        A = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        j = i.useCallback(() => {
            t(d.Ws.LinkAccount), _({ analyticsLocations: n });
        }, [t, _, n]);
    if (!h || null == p || !g || f || null == A) return null;
    let E = v?.guild != null ? o.Ay.getGuildSplashURL({ id: v.guild.id, splash: v.guild.splash }) : null;
    return (0, a.jsxs)("div", {
        className: x.uW,
        children: [
            (0, a.jsx)(r.Heading, {
                className: x.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: m.intl.string(m.t["VDAhr+"]),
            }),
            (0, a.jsxs)("div", {
                className: x.kL,
                children: [
                    null != E
                        ? (0, a.jsx)("img", { className: x.ll, src: E, alt: "" })
                        : (0, a.jsx)("div", { className: x.sB, children: (0, a.jsx)(s.default, { application: p }) }),
                    (0, a.jsxs)("div", {
                        className: x.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: x.FS,
                                children: [
                                    (0, a.jsx)(r.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: m.intl.formatToPlainString(m.t.hUbQT2, { gameName: p.name }),
                                    }),
                                    (0, a.jsx)(r.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: m.intl.string(m.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(r.Button, {
                                variant: "secondary",
                                icon: r.A5T,
                                text: m.intl.string(m.t.jynBQ5),
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
