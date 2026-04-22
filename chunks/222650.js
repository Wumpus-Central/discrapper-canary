"use strict";
r.d(t, { A: () => p, e: () => m });
var i = r(627968);
r(64700);
var a = r(990078),
    n = r(646270),
    s = r(821609),
    l = r(192308),
    o = r(557722),
    c = r(31457),
    d = r(53516),
    _ = r(985018),
    u = r(397251);
function p() {
    return (0, i.jsx)(c.ZK, {
        className: u.jm,
        icon: n.u,
        text: _.intl.string(_.t.woMjLV),
        footnote: _.intl.string(_.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, i.jsx)(a.m, {
            asContainer: !0,
            text: _.intl.string(_.t.mGlP30),
            children: (0, i.jsx)(s.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: _.intl.string(_.t["13ofGu"]),
            }),
        }),
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        a = t ? _.intl.string(_.t.WWzQta) : _.intl.string(_.t.woMjLV);
    return (0, i.jsx)(c.ZK, {
        className: u.jm,
        icon: n.u,
        text: a,
        footnote: _.intl.string(_.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, i.jsx)(s.$, {
            variant: "primary",
            size: "sm",
            text: _.intl.string(_.t["13ofGu"]),
            onClick: () => {
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([r.e("84704"), r.e("11696")]).then(r.bind(r, 615715));
                        return (t) => (0, i.jsx)(e, { reason: o.d.GUILD_PHONE_REQUIRED, ...t });
                    },
                    { modalKey: d.V },
                );
            },
        }),
    });
}
