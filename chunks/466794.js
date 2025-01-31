n.d(t, { X: () => r });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(900047);
function r(e) {
    let { tooltipText: t, textColor: n } = e;
    return (0, i.jsxs)('span', {
        className: a.tooltipTextContainer,
        children: [
            (0, i.jsx)(l.SrA, {
                size: 'md',
                color: 'currentColor',
                className: a.nitroWheel
            }),
            (0, i.jsx)(l.Text, {
                className: a.tooltipText,
                variant: 'text-sm/medium',
                color: null != n ? n : 'text-normal',
                children: t
            })
        ]
    });
}
