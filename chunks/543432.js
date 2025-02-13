n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(441336);
function o(e) {
    let { userCount: t } = e;
    return (0, i.jsxs)('div', {
        className: r.container,
        children: [
            (0, i.jsx)(l.BFJ, {
                size: 'xxs',
                color: 'currentColor',
                className: r.peopleIcon
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: r.userCountText,
                children: t
            })
        ]
    });
}
