n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(37234),
    l = n(703656),
    a = n(981631),
    o = n(388032),
    c = n(791119),
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
            (0, i.jsx)(r.zxk, {
                color: r.zxk.Colors.PRIMARY,
                onClick: () => {
                    (0, l.uL)(a.Z5c.GUILD_DISCOVERY), (0, s.xf)();
                },
                size: r.zxk.Sizes.LARGE,
                children: o.intl.string(o.t.JFlifn)
            })
        ]
    });
}
