o.r(t), o.d(t, { default: () => v }), o(35282), o(65234), o(111804), o(490233), o(97749), o(388685);
var n = o(54381);
o(473749);
var r = o(755721),
    a = o(481060),
    l = o(457330),
    i = o(726542),
    s = o(77987),
    c = o(787025),
    d = o(656649),
    u = o(388032),
    f = o(519959);
let v = (0, s.e)(function (e) {
    let { match: t } = e,
        o = t.params.type,
        s = i.Z.get(o);
    if (null == s)
        return (0, n.jsx)(c.G, {
            children: (0, n.jsx)(a.Text, {
                className: f.error,
                variant: "text-md/normal",
                color: "text-feedback-warning",
                children: u.intl.string(u.t.WLDKSb),
            }),
        });
    async function v() {
        var e, t, n;
        let r = new URLSearchParams(window.location.search),
            { body: a } = await l.Z.authorize(o, {
                location: "Connection Intermediate",
                twoWayLink: null != r.get("two_way_link") ? "true" === r.get("two_way_link") : void 0,
                twoWayLinkType: null != (e = r.get("two_way_link_type")) ? e : void 0,
                userCode: null != (t = r.get("two_way_user_code")) ? t : void 0,
                successRedirect: null != (n = r.get("success_redirect")) ? n : void 0,
            });
        window.location = a.url;
    }
    return (0, n.jsx)(c.G, {
        wrapperClassName: f.wrapper,
        children: (0, n.jsxs)("div", {
            className: f.root,
            children: [
                (0, n.jsx)(d.KJ, {
                    className: f.logos,
                    platform: s,
                }),
                (0, n.jsx)(a.Heading, {
                    variant: "text-lg/bold",
                    className: f.header,
                    children: u.intl.format(u.t.Pw4vee, { provider: s.name }),
                }),
                (0, n.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: f.body,
                    children: u.intl.format(u.t.rHlSVB, { provider: s.name }),
                }),
                (0, n.jsx)(r.zx, {
                    size: r.zx.Sizes.LARGE,
                    color: r.zx.Colors.BRAND,
                    onClick: v,
                    children: u.intl.string(u.t["+NJGEj"]),
                }),
            ],
        }),
    });
});
