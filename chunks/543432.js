n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(128304);
function o(e) {
    let { userCount: t } = e;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsx)(i.BFJ, {
                size: 'xxs',
                color: 'currentColor',
                className: l.peopleIcon
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: l.userCountText,
                children: t
            })
        ]
    });
}
