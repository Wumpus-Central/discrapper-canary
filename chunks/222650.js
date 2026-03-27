n.d(t, { A: () => u, e: () => _ });
var r = n(627968);
n(64700);
var s = n(990078),
    i = n(397927),
    l = n(557722),
    a = n(31457),
    o = n(53516),
    d = n(985018),
    c = n(430426);
function u() {
    return (0, r.jsx)(a.ZK, {
        className: c.jm,
        icon: i.u6o,
        text: d.intl.string(d.t.woMjLV),
        footnote: d.intl.string(d.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, r.jsx)(s.m, {
            asContainer: !0,
            text: d.intl.string(d.t.mGlP30),
            children: (0, r.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: d.intl.string(d.t["13ofGu"]),
            }),
        }),
    });
}
function _(e) {
    let { isUserVerified: t } = e,
        s = t ? d.intl.string(d.t.WWzQta) : d.intl.string(d.t.woMjLV);
    return (0, r.jsx)(a.ZK, {
        className: c.jm,
        icon: i.u6o,
        text: s,
        footnote: d.intl.string(d.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, r.jsx)(i.Button, {
            variant: "primary",
            size: "sm",
            text: d.intl.string(d.t["13ofGu"]),
            onClick: () => {
                (0, i.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("84704"), n.e("75904")]).then(n.bind(n, 615715));
                        return (t) => (0, r.jsx)(e, { reason: l.d.GUILD_PHONE_REQUIRED, ...t });
                    },
                    { modalKey: o.V },
                );
            },
        }),
    });
}
