o.r(n), o(610138), o(216116), o(78328), o(815648), o(47120);
var t = o(200651);
o(192379);
var r = o(481060),
    i = o(457330),
    a = o(726542),
    s = o(77987),
    l = o(787025),
    c = o(656649),
    u = o(388032),
    d = o(555873);
n.default = (0, s.e)(function (e) {
    let { match: n } = e,
        o = n.params.type,
        s = a.Z.get(o);
    if (null == s)
        return (0, t.jsx)(l.G, {
            children: (0, t.jsx)(r.Text, {
                className: d.error,
                variant: 'text-md/normal',
                color: 'text-warning',
                children: u.intl.string(u.t.WLDKSU)
            })
        });
    async function f() {
        var e, n, t;
        let r = new URLSearchParams(window.location.search),
            { body: a } = await i.Z.authorize(o, {
                location: 'Connection Intermediate',
                twoWayLink: null != r.get('two_way_link') ? 'true' === r.get('two_way_link') : void 0,
                twoWayLinkType: null !== (e = r.get('two_way_link_type')) && void 0 !== e ? e : void 0,
                userCode: null !== (n = r.get('two_way_user_code')) && void 0 !== n ? n : void 0,
                successRedirect: null !== (t = r.get('success_redirect')) && void 0 !== t ? t : void 0
            });
        window.location = a.url;
    }
    return (0, t.jsx)(l.G, {
        wrapperClassName: d.wrapper,
        children: (0, t.jsxs)('div', {
            className: d.root,
            children: [
                (0, t.jsx)(c.KJ, {
                    className: d.logos,
                    platform: s
                }),
                (0, t.jsx)(r.Heading, {
                    variant: 'text-lg/bold',
                    className: d.header,
                    children: u.intl.format(u.t.Pw4veX, { provider: s.name })
                }),
                (0, t.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: d.body,
                    children: u.intl.format(u.t.rHlSVF, { provider: s.name })
                }),
                (0, t.jsx)(r.Button, {
                    size: r.Button.Sizes.LARGE,
                    color: r.Button.Colors.BRAND,
                    onClick: f,
                    children: u.intl.string(u.t['+NJGEh'])
                })
            ]
        })
    });
});
