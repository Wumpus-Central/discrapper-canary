r.r(t), r.d(t, { default: () => _ }), r(323874), r(14289), r(35956);
var a = r(627968);
r(64700);
var n = r(862482),
    s = r(834730),
    i = r(534514),
    o = r(77468),
    l = r(573648),
    d = r(114716),
    c = r(321987),
    u = r(950198),
    m = r(985018),
    w = r(614597);
let _ = (0, d.C)(function (e) {
    let { match: t } = e,
        r = t.params.type,
        d = l.A.get(r);
    if (null == d)
        return (0, a.jsx)(c.$, {
            children: (0, a.jsx)(s.E, {
                className: w.z3,
                variant: "text-md/normal",
                color: "text-feedback-warning",
                children: m.intl.string(m.t.WLDKSb),
            }),
        });
    async function _() {
        let e = new URLSearchParams(window.location.search),
            { body: t } = await o.A.authorize(r, {
                location: "Connection Intermediate",
                twoWayLink: null != e.get("two_way_link") ? "true" === e.get("two_way_link") : void 0,
                twoWayLinkType: e.get("two_way_link_type") ?? void 0,
                userCode: e.get("two_way_user_code") ?? void 0,
                successRedirect: e.get("success_redirect") ?? void 0,
            });
        window.location = t.url;
    }
    return (0, a.jsx)(c.$, {
        wrapperClassName: w.iE,
        children: (0, a.jsxs)("div", {
            className: w.zr,
            children: [
                (0, a.jsx)(u.Jq, { className: w.ry, platform: d }),
                (0, a.jsx)(i.D, {
                    variant: "text-lg/bold",
                    className: w.wx,
                    children: m.intl.format(m.t.Pw4vee, { provider: d.name }),
                }),
                (0, a.jsx)(s.E, {
                    variant: "text-md/normal",
                    className: w.rf,
                    children: m.intl.format(m.t.rHlSVB, { provider: d.name }),
                }),
                (0, a.jsx)(n.$n, {
                    size: n.$n.Sizes.LARGE,
                    color: n.$n.Colors.BRAND,
                    onClick: _,
                    children: m.intl.string(m.t["+NJGEj"]),
                }),
            ],
        }),
    });
});
