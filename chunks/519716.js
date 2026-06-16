a.r(t), a.d(t, { default: () => p }), a(323874), a(14289), a(35956);
var r = a(627968);
a(64700);
var i = a(862482),
    n = a(834730),
    s = a(534514),
    l = a(77468),
    o = a(573648),
    c = a(114716),
    d = a(321987),
    w = a(950198),
    m = a(375708),
    u = a(614597);
let p = (0, c.C)(function (e) {
    let { match: t } = e,
        a = t.params.type,
        c = o.A.get(a);
    if (null == c)
        return (0, r.jsx)(d.$, {
            children: (0, r.jsx)(n.E, {
                className: u.z3,
                variant: "text-md/normal",
                color: "text-feedback-warning",
                children: m.intl.string(m.t.WLDKSb),
            }),
        });
    async function p() {
        let e = new URLSearchParams(window.location.search),
            { body: t } = await l.A.authorize(a, {
                location: "Connection Intermediate",
                twoWayLink: null != e.get("two_way_link") ? "true" === e.get("two_way_link") : void 0,
                twoWayLinkType: e.get("two_way_link_type") ?? void 0,
                userCode: e.get("two_way_user_code") ?? void 0,
                successRedirect: e.get("success_redirect") ?? void 0,
            });
        window.location = t.url;
    }
    return (0, r.jsx)(d.$, {
        wrapperClassName: u.iE,
        children: (0, r.jsxs)("div", {
            className: u.zr,
            children: [
                (0, r.jsx)(w.Jq, { className: u.ry, platform: c }),
                (0, r.jsx)(s.D, {
                    variant: "text-lg/bold",
                    className: u.wx,
                    children: m.intl.format(m.t.Pw4vee, { provider: c.name }),
                }),
                (0, r.jsx)(n.E, {
                    variant: "text-md/normal",
                    className: u.rf,
                    children: m.intl.format(m.t.rHlSVB, { provider: c.name }),
                }),
                (0, r.jsx)(i.$n, {
                    size: i.$n.Sizes.LARGE,
                    color: i.$n.Colors.BRAND,
                    onClick: p,
                    children: m.intl.string(m.t["+NJGEj"]),
                }),
            ],
        }),
    });
});
