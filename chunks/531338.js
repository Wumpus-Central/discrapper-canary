(o.r(t), o.d(t, { default: () => p }), o(35282), o(65234), o(111804), o(490233), o(97749), o(388685));
var n = o(255367);
o(73800);
var r = o(755721),
    a = o(481060),
    l = o(457330),
    s = o(726542),
    i = o(77987),
    c = o(787025),
    d = o(656649),
    u = o(388032),
    f = o(664237);
let p = (0, i.e)(function (e) {
    let { match: t } = e,
        o = t.params.type,
        i = s.Z.get(o);
    if (null == i)
        return (0, n.jsx)(c.G, {
            children: (0, n.jsx)(a.Text, {
                className: f.error,
                variant: 'text-md/normal',
                color: 'text-feedback-warning',
                children: u.intl.string(u.t.WLDKSU)
            })
        });
    async function p() {
        var e, t, n;
        let r = new URLSearchParams(window.location.search),
            { body: a } = await l.Z.authorize(o, {
                location: 'Connection Intermediate',
                twoWayLink: null != r.get('two_way_link') ? 'true' === r.get('two_way_link') : void 0,
                twoWayLinkType: null != (e = r.get('two_way_link_type')) ? e : void 0,
                userCode: null != (t = r.get('two_way_user_code')) ? t : void 0,
                successRedirect: null != (n = r.get('success_redirect')) ? n : void 0
            });
        window.location = a.url;
    }
    return (0, n.jsx)(c.G, {
        wrapperClassName: f.wrapper,
        children: (0, n.jsxs)('div', {
            className: f.root,
            children: [
                (0, n.jsx)(d.KJ, {
                    className: f.logos,
                    platform: i
                }),
                (0, n.jsx)(a.X6q, {
                    variant: 'text-lg/bold',
                    className: f.header,
                    children: u.intl.format(u.t.Pw4veX, { provider: i.name })
                }),
                (0, n.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    className: f.body,
                    children: u.intl.format(u.t.rHlSVF, { provider: i.name })
                }),
                (0, n.jsx)(r.zx, {
                    size: r.zx.Sizes.LARGE,
                    color: r.zx.Colors.BRAND,
                    onClick: p,
                    children: u.intl.string(u.t['+NJGEh'])
                })
            ]
        })
    });
});
