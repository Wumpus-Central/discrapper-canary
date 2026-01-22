n.d(t, { A: () => E }), n(228524);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(854378),
    o = n(122906),
    c = n(121623),
    u = n(768397),
    d = n(210714),
    h = n(961350),
    f = n(954571),
    p = n(900662),
    g = n(652215),
    m = n(401755),
    A = n(985018),
    x = n(473169);
function _(e, t, n) {
    e.preventDefault(),
        f.default.track(g.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let r = h.default.getFingerprint(),
        i = null != r ? r : h.default.getId();
    c.A.openMobileApp(n.state === m.QB.RESOLVED ? t : void 0, i);
}
function E(e) {
    let { code: t } = e,
        n = (0, s.bG)([o.A], () => o.A.getGuildTemplate(t));
    return (i.useEffect(() => {
        (0, d.d)("guild_template_mobile");
    }, []),
    null == n || n.state === m.QB.RESOLVING)
        ? (0, r.jsx)(a.Ay, { children: (0, r.jsx)(l.y$y, {}) })
        : n.state === m.QB.RESOLVED
          ? (0, r.jsxs)(a.Ay, {
                children: [
                    (0, r.jsx)(u.A, {
                        guildTemplate: n,
                        tall: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: x.QX,
                        children: (0, r.jsx)(l.Button, {
                            text: A.intl.string(A.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => _(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, r.jsx)(p.A, {
                text: A.intl.string(A.t["e/rZ2n"]),
                buttonCta: A.intl.string(A.t.HAvYn0),
                onClick: (e) => _(e, t, n),
            });
}
s.Ay.initialize();
