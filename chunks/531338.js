o.r(t), o.d(t, { default: () => v }), o(35282), o(65234), o(111804), o(490233), o(97749), o(388685);
var r = o(951288);
o(647438);
var n = o(755721),
    a = o(481060),
    l = o(457330),
    i = o(726542),
    s = o(77987),
    c = o(787025),
    d = o(656649),
    u = o(388032),
    f = o(736902);
let v = (0, s.e)(function (e) {
    let { match: t } = e,
        o = t.params.type,
        s = i.Z.get(o);
    if (null == s)
        return (0, r.jsx)(c.G, {
            children: (0, r.jsx)(a.Text, {
                className: f.error,
                variant: "text-md/normal",
                color: "text-feedback-warning",
                children: u.intl.string(u.t.WLDKSU),
            }),
        });
    async function v() {
        var e, t, r;
        let n = new URLSearchParams(window.location.search),
            { body: a } = await l.Z.authorize(o, {
                location: "Connection Intermediate",
                twoWayLink: null != n.get("two_way_link") ? "true" === n.get("two_way_link") : void 0,
                twoWayLinkType: null != (e = n.get("two_way_link_type")) ? e : void 0,
                userCode: null != (t = n.get("two_way_user_code")) ? t : void 0,
                successRedirect: null != (r = n.get("success_redirect")) ? r : void 0,
            });
        window.location = a.url;
    }
    return (0, r.jsx)(c.G, {
        wrapperClassName: f.wrapper,
        children: (0, r.jsxs)("div", {
            className: f.root,
            children: [
                (0, r.jsx)(d.KJ, {
                    className: f.logos,
                    platform: s,
                }),
                (0, r.jsx)(a.X6q, {
                    variant: "text-lg/bold",
                    className: f.header,
                    children: u.intl.format(u.t.Pw4veX, { provider: s.name }),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: f.body,
                    children: u.intl.format(u.t.rHlSVF, { provider: s.name }),
                }),
                (0, r.jsx)(n.zx, {
                    size: n.zx.Sizes.LARGE,
                    color: n.zx.Colors.BRAND,
                    onClick: v,
                    children: u.intl.string(u.t["+NJGEh"]),
                }),
            ],
        }),
    });
});
