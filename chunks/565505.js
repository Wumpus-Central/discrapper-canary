"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(397927),
    a = n(854378),
    o = n(122906),
    c = n(121623),
    d = n(768397),
    u = n(210714),
    h = n(961350),
    _ = n(954571),
    p = n(900662),
    g = n(652215),
    m = n(401755),
    f = n(985018),
    A = n(473169);
function E(e, t, n) {
    e.preventDefault(),
        _.default.track(g.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = h.default.getFingerprint(),
        s = null != i ? i : h.default.getId();
    c.A.openMobileApp(n.state === m.QB.RESOLVED ? t : void 0, s);
}
function x(e) {
    let { code: t } = e,
        n = (0, r.bG)([o.A], () => o.A.getGuildTemplate(t));
    return (s.useEffect(() => {
        (0, u.d)("guild_template_mobile");
    }, []),
    null == n || n.state === m.QB.RESOLVING)
        ? (0, i.jsx)(a.Ay, { children: (0, i.jsx)(l.y$y, {}) })
        : n.state === m.QB.RESOLVED
          ? (0, i.jsxs)(a.Ay, {
                children: [
                    (0, i.jsx)(d.A, { guildTemplate: n, tall: !0 }),
                    (0, i.jsx)("div", {
                        className: A.QX,
                        children: (0, i.jsx)(l.Button, {
                            text: f.intl.string(f.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => E(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, i.jsx)(p.A, {
                text: f.intl.string(f.t["e/rZ2n"]),
                buttonCta: f.intl.string(f.t.HAvYn0),
                onClick: (e) => E(e, t, n),
            });
}
r.Ay.initialize();
