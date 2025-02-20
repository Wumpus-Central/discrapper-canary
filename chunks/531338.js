t.r(o), t.d(o, { default: () => f }), t(301563), t(610138), t(216116), t(78328), t(815648), t(47120);
var r = t(200651);
t(192379);
var n = t(481060),
    a = t(457330),
    s = t(726542),
    i = t(77987),
    l = t(787025),
    c = t(656649),
    d = t(388032),
    u = t(364384);
let f = (0, i.e)(function (e) {
    let { match: o } = e,
        t = o.params.type,
        i = s.Z.get(t);
    if (null == i)
        return (0, r.jsx)(l.G, {
            children: (0, r.jsx)(n.Text, {
                className: u.error,
                variant: 'text-md/normal',
                color: 'text-warning',
                children: d.NW.string(d.t.WLDKSU)
            })
        });
    async function f() {
        var e, o, r;
        let n = new URLSearchParams(window.location.search),
            { body: s } = await a.Z.authorize(t, {
                location: 'Connection Intermediate',
                twoWayLink: null != n.get('two_way_link') ? 'true' === n.get('two_way_link') : void 0,
                twoWayLinkType: null !== (e = n.get('two_way_link_type')) && void 0 !== e ? e : void 0,
                userCode: null !== (o = n.get('two_way_user_code')) && void 0 !== o ? o : void 0,
                successRedirect: null !== (r = n.get('success_redirect')) && void 0 !== r ? r : void 0
            });
        window.location = s.url;
    }
    return (0, r.jsx)(l.G, {
        wrapperClassName: u.wrapper,
        children: (0, r.jsxs)('div', {
            className: u.root,
            children: [
                (0, r.jsx)(c.KJ, {
                    className: u.logos,
                    platform: i
                }),
                (0, r.jsx)(n.X6q, {
                    variant: 'text-lg/bold',
                    className: u.header,
                    children: d.NW.format(d.t.Pw4veX, { provider: i.name })
                }),
                (0, r.jsx)(n.Text, {
                    variant: 'text-md/normal',
                    className: u.body,
                    children: d.NW.format(d.t.rHlSVF, { provider: i.name })
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
