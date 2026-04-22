"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(289873),
    a = n(821609),
    o = n(854378),
    c = n(122906),
    d = n(121623),
    u = n(768397),
    _ = n(210714),
    h = n(961350),
    m = n(954571),
    p = n(900662),
    g = n(652215),
    A = n(401755),
    f = n(985018),
    x = n(818050);
function E(e, t, n) {
    e.preventDefault(),
        m.default.track(g.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = h.default.getFingerprint(),
        s = null != i ? i : h.default.getId();
    d.A.openMobileApp(n.state === A.QB.RESOLVED ? t : void 0, s);
}
function I(e) {
    let { code: t } = e,
        n = (0, r.bG)([c.A], () => c.A.getGuildTemplate(t));
    return (s.useEffect(() => {
        (0, _.d)("guild_template_mobile");
    }, []),
    null == n || n.state === A.QB.RESOLVING)
        ? (0, i.jsx)(o.Ay, { children: (0, i.jsx)(l.y, {}) })
        : n.state === A.QB.RESOLVED
          ? (0, i.jsxs)(o.Ay, {
                children: [
                    (0, i.jsx)(u.A, { guildTemplate: n, tall: !0 }),
                    (0, i.jsx)("div", {
                        className: x.QX,
                        children: (0, i.jsx)(a.$, {
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
