t.r(o), t.d(o, { default: () => v }), t(610138), t(216116), t(78328), t(815648), t(47120);
var n = t(200651);
t(192379);
var r = t(481060),
    a = t(457330),
    s = t(726542),
    i = t(77987),
    l = t(787025),
    c = t(656649),
    d = t(388032),
    u = t(555873);
let v = (0, i.e)(function (e) {
    let { match: o } = e,
        t = o.params.type,
        i = s.Z.get(t);
    if (null == i)
        return (0, n.jsx)(l.G, {
            children: (0, n.jsx)(r.Text, {
                className: u.error,
                variant: 'text-md/normal',
                color: 'text-warning',
                children: d.intl.string(d.t.WLDKSU)
            })
        });
    async function v() {
        var e, o, n;
        let r = new URLSearchParams(window.location.search),
            { body: s } = await a.Z.authorize(t, {
                location: 'Connection Intermediate',
                twoWayLink: null != r.get('two_way_link') ? 'true' === r.get('two_way_link') : void 0,
                twoWayLinkType: null !== (e = r.get('two_way_link_type')) && void 0 !== e ? e : void 0,
                userCode: null !== (o = r.get('two_way_user_code')) && void 0 !== o ? o : void 0,
                successRedirect: null !== (n = r.get('success_redirect')) && void 0 !== n ? n : void 0
            });
        window.location = s.url;
    }
    return (0, n.jsx)(l.G, {
        wrapperClassName: u.wrapper,
        children: (0, n.jsxs)('div', {
            className: u.root,
            children: [
                (0, n.jsx)(c.KJ, {
                    className: u.logos,
                    platform: i
                }),
                (0, n.jsx)(r.X6q, {
                    variant: 'text-lg/bold',
                    className: u.header,
                    children: d.intl.format(d.t.Pw4veX, { provider: i.name })
                }),
                (0, n.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: u.body,
                    children: d.intl.format(d.t.rHlSVF, { provider: i.name })
                }),
                (0, n.jsx)(r.zxk, {
                    size: r.zxk.Sizes.LARGE,
                    color: r.zxk.Colors.BRAND,
                    onClick: v,
                    children: d.intl.string(d.t['+NJGEh'])
                })
            ]
        })
    });
});
