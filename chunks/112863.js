n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(37234),
    a = n(703656),
    l = n(981631),
    o = n(388032),
    c = n(573099),
    d = n(286359);
function u() {
    return (0, i.jsxs)('div', {
        className: c.wrapper,
        children: [
            (0, i.jsx)('img', {
                className: c.icon,
                alt: '',
                src: d
            }),
            (0, i.jsxs)('div', {
                className: c.info,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-lg/bold',
                        children: o.intl.string(o.t.ZHNSYW)
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: o.intl.string(o.t.kCj5pq)
                    })
                ]
            }),
            (0, i.jsx)(r.Button, {
                color: r.Button.Colors.PRIMARY,
                onClick: () => {
                    (0, a.uL)(l.Z5c.GUILD_DISCOVERY), (0, s.xf)();
                },
                size: r.Button.Sizes.LARGE,
                children: o.intl.string(o.t.JFlifn)
            })
        ]
    });
}
