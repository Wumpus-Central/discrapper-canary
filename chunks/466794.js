n.d(t, { X: () => a });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(299491);
function a(e) {
    let { tooltipText: t, textColor: n } = e;
    return (0, r.jsxs)('span', {
        className: o.tooltipTextContainer,
        children: [
            (0, r.jsx)(i.SrA, {
                size: 'md',
                color: 'currentColor',
                className: o.nitroWheel
            }),
            (0, r.jsx)(i.Text, {
                className: o.tooltipText,
                variant: 'text-sm/medium',
                color: null != n ? n : 'text-default',
                children: t
            })
        ]
    });
}
