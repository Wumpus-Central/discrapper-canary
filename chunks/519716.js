r.r(t), r.d(t, { default: () => w }), r(323874), r(14289), r(35956);
var a = r(627968);
r(64700);
var n = r(421380),
    s = r(397927),
    i = r(77468),
    o = r(573648),
    l = r(114716),
    d = r(321987),
    c = r(950198),
    u = r(985018),
    m = r(614597);
let w = (0, l.C)(function (e) {
    let { match: t } = e,
        r = t.params.type,
        l = o.A.get(r);
    if (null == l)
        return (0, a.jsx)(d.$, {
            children: (0, a.jsx)(s.Text, {
                className: m.z3,
                variant: "text-md/normal",
                color: "text-feedback-warning",
                children: u.intl.string(u.t.WLDKSb),
            }),
        });
    async function w() {
        let e = new URLSearchParams(window.location.search),
            { body: t } = await i.A.authorize(r, {
                location: "Connection Intermediate",
                twoWayLink: null != e.get("two_way_link") ? "true" === e.get("two_way_link") : void 0,
                twoWayLinkType: e.get("two_way_link_type") ?? void 0,
                userCode: e.get("two_way_user_code") ?? void 0,
                successRedirect: e.get("success_redirect") ?? void 0,
            });
        window.location = t.url;
    }
    return (0, a.jsx)(d.$, {
        wrapperClassName: m.iE,
        children: (0, a.jsxs)("div", {
            className: m.zr,
            children: [
                (0, a.jsx)(c.Jq, { className: m.ry, platform: l }),
                (0, a.jsx)(s.Heading, {
                    variant: "text-lg/bold",
                    className: m.wx,
                    children: u.intl.format(u.t.Pw4vee, { provider: l.name }),
                }),
                (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: m.rf,
                    children: u.intl.format(u.t.rHlSVB, { provider: l.name }),
                }),
                (0, a.jsx)(n.$n, {
                    size: n.$n.Sizes.LARGE,
                    color: n.$n.Colors.BRAND,
                    onClick: w,
                    children: u.intl.string(u.t["+NJGEj"]),
                }),
            ],
        }),
    });
});
