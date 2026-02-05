n.d(t, { A: () => u, e: () => m });
var r = n(627968);
n(64700);
var s = n(990078),
    l = n(397927),
    i = n(557722),
    a = n(31457),
    o = n(53516),
    d = n(985018),
    c = n(712104);
function u() {
    return (0, r.jsx)(a.ZK, {
        className: c.jm,
        icon: l.u6o,
        text: d.intl.string(d.t.woMjLV),
        footnote: d.intl.string(d.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, r.jsx)(s.m, {
            asContainer: !0,
            text: d.intl.string(d.t.mGlP30),
            children: (0, r.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: d.intl.string(d.t["13ofGu"]),
            }),
        }),
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        s = t ? d.intl.string(d.t.WWzQta) : d.intl.string(d.t.woMjLV);
    return (0, r.jsx)(a.ZK, {
        className: c.jm,
        icon: l.u6o,
        text: s,
        footnote: d.intl.string(d.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, r.jsx)(l.Button, {
            variant: "primary",
            size: "sm",
            text: d.intl.string(d.t["13ofGu"]),
            onClick: () => {
                (0, l.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("84704"), n.e("45668")]).then(n.bind(n, 615715));
                        return (t) => (0, r.jsx)(e, { reason: i.d.GUILD_PHONE_REQUIRED, ...t });
                    },
                    { modalKey: o.V },
                );
            },
        }),
    });
}
