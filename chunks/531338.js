o.r(t), o.d(t, { default: () => f }), o(35282), o(65234), o(111804), o(490233), o(97749), o(388685);
var n = o(255367);
o(73800);
var r = o(481060),
    a = o(457330),
    l = o(726542),
    s = o(77987),
    i = o(787025),
    c = o(656649),
    d = o(388032),
    u = o(664237);
let f = (0, s.e)(function (e) {
    let { match: t } = e,
        o = t.params.type,
        s = l.Z.get(o);
    if (null == s)
        return (0, n.jsx)(i.G, {
            children: (0, n.jsx)(r.Text, {
                className: u.error,
                variant: 'text-md/normal',
                color: 'text-warning',
                children: d.intl.string(d.t.WLDKSU)
            })
        });
    async function f() {
        var e, t, n;
        let r = new URLSearchParams(window.location.search),
            { body: l } = await a.Z.authorize(o, {
                location: 'Connection Intermediate',
                twoWayLink: null != r.get('two_way_link') ? 'true' === r.get('two_way_link') : void 0,
                twoWayLinkType: null != (e = r.get('two_way_link_type')) ? e : void 0,
                userCode: null != (t = r.get('two_way_user_code')) ? t : void 0,
                successRedirect: null != (n = r.get('success_redirect')) ? n : void 0
            });
        window.location = l.url;
    }
    return (0, n.jsx)(i.G, {
        wrapperClassName: u.wrapper,
        children: (0, n.jsxs)('div', {
            className: u.root,
            children: [
                (0, n.jsx)(c.KJ, {
                    className: u.logos,
                    platform: s
                }),
                (0, n.jsx)(r.X6q, {
                    variant: 'text-lg/bold',
                    className: u.header,
                    children: d.intl.format(d.t.Pw4veX, { provider: s.name })
                }),
                (0, n.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: u.body,
                    children: d.intl.format(d.t.rHlSVF, { provider: s.name })
                }),
                (0, n.jsx)(r.zxk, {
                    size: r.zxk.Sizes.LARGE,
                    color: r.zxk.Colors.BRAND,
                    onClick: f,
                    children: d.intl.string(d.t['+NJGEh'])
                })
            ]
        })
    });
});
