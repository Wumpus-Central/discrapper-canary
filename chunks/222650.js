r.d(t, { A: () => m, e: () => h });
var n = r(627968);
r(64700);
var i = r(990078),
    l = r(646270),
    a = r(821609),
    s = r(192308),
    o = r(557722),
    d = r(31457),
    c = r(53516),
    u = r(985018),
    _ = r(397251);
function m() {
    return (0, n.jsx)(d.ZK, {
        className: _.jm,
        icon: l.u,
        text: u.intl.string(u.t.woMjLV),
        footnote: u.intl.string(u.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, n.jsx)(i.m, {
            asContainer: !0,
            text: u.intl.string(u.t.mGlP30),
            children: (0, n.jsx)(a.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: u.intl.string(u.t["13ofGu"]),
            }),
        }),
    });
}
function h(e) {
    let { isUserVerified: t } = e,
        i = t ? u.intl.string(u.t.WWzQta) : u.intl.string(u.t.woMjLV);
    return (0, n.jsx)(d.ZK, {
        className: _.jm,
        icon: l.u,
        text: i,
        footnote: u.intl.string(u.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, n.jsx)(a.$, {
            variant: "primary",
            size: "sm",
            text: u.intl.string(u.t["13ofGu"]),
            onClick: () => {
                (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([r.e("84704"), r.e("85543")]).then(r.bind(r, 615715));
                        return (t) => (0, n.jsx)(e, { reason: o.d.GUILD_PHONE_REQUIRED, ...t });
                    },
                    { modalKey: c.V },
                );
            },
        }),
    });
}
