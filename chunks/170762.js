var i = r(200651);
r(192379);
var a = r(481060),
    o = r(921944),
    s = r(388032),
    l = r(961335);
let u = (e) => {
    let { markAsDismissed: n } = e;
    return (0, i.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, i.jsx)(a.HeartIcon, {
                size: 'md',
                color: 'currentColor',
                className: l.icon
            }),
            (0, i.jsx)('div', {
                className: l.content,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    children: s.intl.string(s.t['xdRf6+'])
                })
            }),
            (0, i.jsx)(a.Clickable, {
                onClick: () => n(o.L.UNKNOWN),
                children: (0, i.jsx)(a.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: l.close
                })
            })
        ]
    });
};
n.Z = u;
