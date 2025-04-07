o.r(t), o.d(t, { default: () => f }), o(35282), o(65234), o(111804), o(490233), o(97749), o(388685);
var r = o(200651);
o(192379);
var n = o(481060),
    a = o(457330),
    s = o(726542),
    l = o(77987),
    i = o(787025),
    c = o(656649),
    d = o(388032),
    u = o(664237);
let f = (0, l.e)(function (e) {
    let { match: t } = e,
        o = t.params.type,
        l = s.Z.get(o);
    if (null == l)
        return (0, r.jsx)(i.G, {
            children: (0, r.jsx)(n.Text, {
                className: u.error,
                variant: 'text-md/normal',
                color: 'text-warning',
                children: d.NW.string(d.t.WLDKSU)
            })
        });
    async function f() {
        var e, t, r;
        let n = new URLSearchParams(window.location.search),
            { body: s } = await a.Z.authorize(o, {
                location: 'Connection Intermediate',
                twoWayLink: null != n.get('two_way_link') ? 'true' === n.get('two_way_link') : void 0,
                twoWayLinkType: null != (e = n.get('two_way_link_type')) ? e : void 0,
                userCode: null != (t = n.get('two_way_user_code')) ? t : void 0,
                successRedirect: null != (r = n.get('success_redirect')) ? r : void 0
            });
        window.location = s.url;
    }
    return (0, r.jsx)(i.G, {
        wrapperClassName: u.wrapper,
        children: (0, r.jsxs)('div', {
            className: u.root,
            children: [
                (0, r.jsx)(c.KJ, {
                    className: u.logos,
                    platform: l
                }),
                (0, r.jsx)(n.X6q, {
                    variant: 'text-lg/bold',
                    className: u.header,
                    children: d.NW.format(d.t.Pw4veX, { provider: l.name })
                }),
                (0, r.jsx)(n.Text, {
                    variant: 'text-md/normal',
                    className: u.body,
                    children: d.NW.format(d.t.rHlSVF, { provider: l.name })
                }),
                (0, r.jsx)(n.zxk, {
                    size: n.zxk.Sizes.LARGE,
                    color: n.zxk.Colors.BRAND,
                    onClick: f,
                    children: d.NW.string(d.t['+NJGEh'])
                })
            ]
        })
    });
});
