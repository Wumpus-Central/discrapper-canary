n.d(t, {
    X: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(900047);
function a(e) {
    let { tooltipText: t, textColor: n } = e;
    return (0, i.jsxs)('span', {
        className: l.tooltipTextContainer,
        children: [
            (0, i.jsx)(r.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: l.nitroWheel
            }),
            (0, i.jsx)(r.Text, {
                className: l.tooltipText,
                variant: 'text-sm/medium',
                color: null != n ? n : 'text-normal',
                children: t
            })
        ]
    });
}
