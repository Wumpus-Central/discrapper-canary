"use strict";
n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(397927),
    s = n(289363),
    c = n(287809),
    o = n(486020),
    d = n(409626),
    u = n(305080),
    m = n(985018),
    x = n(889983);
function h(e) {
    let { trackAction: t } = e,
        {
            fetchedAuthorization: n,
            hasAlreadyLinked: h,
            canStartAuthorization: f,
            startAuthorization: g,
            connectionApp: p,
            officialInvite: _,
        } = (0, u.c)(),
        v = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        j = a.useCallback(() => {
            t(d.Ws.LinkAccount), g({ analyticsLocations: ["game_profile"] });
        }, [t, g]);
    if (!n || null == p || !f || h || null == v) return null;
    let A = _?.guild != null ? o.Ay.getGuildSplashURL({ id: _.guild.id, splash: _.guild.splash }) : null;
    return (0, l.jsxs)("div", {
        className: x.uW,
        children: [
            (0, l.jsx)(r.Heading, {
                className: x.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: m.intl.string(m.t["VDAhr+"]),
            }),
            (0, l.jsxs)("div", {
                className: x.kL,
                children: [
                    null != A
                        ? (0, l.jsx)("img", { className: x.ll, src: A, alt: "" })
                        : (0, l.jsx)("div", { className: x.sB, children: (0, l.jsx)(s.default, { application: p }) }),
                    (0, l.jsxs)("div", {
                        className: x.hQ,
                        children: [
                            (0, l.jsxs)("div", {
                                className: x.FS,
                                children: [
                                    (0, l.jsx)(r.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: m.intl.formatToPlainString(m.t.hUbQT2, { gameName: p.name }),
                                    }),
                                    (0, l.jsx)(r.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: m.intl.string(m.t["JKqu+4"]),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(r.Button, {
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
