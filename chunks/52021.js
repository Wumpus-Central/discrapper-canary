t.d(n, { Z: () => f });
var r = t(951288),
    a = t(793030),
    i = t(442837),
    l = t(970683),
    s = t(594174),
    o = t(49012),
    c = t(775146),
    d = t(619733),
    u = t(97200),
    m = t(388032),
    g = t(491029);
function f(e) {
    let { guildId: n } = e,
        t = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    if (null == t) return null;
    let f = (0, d.Z4)(t.id, n);
    return (0, r.jsx)(c.Z, {
        actions: (0, r.jsx)(a.zxk, {
            variant: "secondary",
            fullWidth: !0,
            text: m.intl.string(u.default.f0xbih),
            icon: a.Gr1,
            iconPosition: "end",
            onClick: () => (0, o.q)({ href: f }),
        }),
        children: (0, r.jsxs)("div", {
            className: g.content,
            children: [
                (0, r.jsx)(l.Q6, {
                    alt: "",
                    width: 117,
                    height: 78,
                }),
                (0, r.jsxs)("div", {
                    className: g.contentBody,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(u.default.qE2eqK),
                        }),
                        (0, r.jsx)(a.xvT, {
                            variant: "text-sm/medium",
                            children: m.intl.string(u.default.n4Towj),
                        }),
                    ],
                }),
            ],
        }),
    });
}
