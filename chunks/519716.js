n.r(t),
    n.d(t, {
        default: () => m,
    }),
    n(747238),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var a = n(627968);
n(64700);
var r = n(421380),
    l = n(397927),
    i = n(77468),
    s = n(573648),
    o = n(114716),
    c = n(321987),
    d = n(950198),
    u = n(985018),
    f = n(859409);
let m = (0, o.C)(function (e) {
    let { match: t } = e,
        n = t.params.type,
        o = s.A.get(n);
    if (null == o)
        return (0, a.jsx)(c.$, {
            children: (0, a.jsx)(l.Text, {
                className: f.z3,
                variant: "text-md/normal",
                color: "text-feedback-warning",
                children: u.intl.string(u.t.WLDKSb),
            }),
        });
    async function m() {
        var e, t, a;
        let r = new URLSearchParams(window.location.search),
            { body: l } = await i.A.authorize(n, {
                location: "Connection Intermediate",
                twoWayLink: null != r.get("two_way_link") ? "true" === r.get("two_way_link") : void 0,
                twoWayLinkType: null != (e = r.get("two_way_link_type")) ? e : void 0,
                userCode: null != (t = r.get("two_way_user_code")) ? t : void 0,
                successRedirect: null != (a = r.get("success_redirect")) ? a : void 0,
            });
        window.location = l.url;
    }
    return (0, a.jsx)(c.$, {
        wrapperClassName: f.iE,
        children: (0, a.jsxs)("div", {
            className: f.zr,
            children: [
                (0, a.jsx)(d.Jq, {
                    className: f.ry,
                    platform: o,
                }),
                (0, a.jsx)(l.Heading, {
                    variant: "text-lg/bold",
                    className: f.wx,
                    children: u.intl.format(u.t.Pw4vee, {
                        provider: o.name,
                    }),
                }),
                (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    className: f.rf,
                    children: u.intl.format(u.t.rHlSVB, {
                        provider: o.name,
                    }),
                }),
                (0, a.jsx)(r.$n, {
                    size: r.$n.Sizes.LARGE,
                    color: r.$n.Colors.BRAND,
                    onClick: m,
                    children: u.intl.string(u.t["+NJGEj"]),
                }),
            ],
        }),
    });
});
