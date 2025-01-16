t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(200651);
t(192379);
var i = t(481060),
    a = t(388032),
    r = t(246774);
function o(e) {
    let { sendStartNotification: n, setSendStartNotification: t } = e,
        o = n ? a.intl.string(a.t.xAT8lJ) : a.intl.string(a.t['Y+18hY']);
    return (0, l.jsx)('div', {
        className: r.notificationToggle,
        children: (0, l.jsx)(i.Checkbox, {
            type: i.Checkbox.Types.INVERTED,
            size: 14,
            className: r.__invalid_checkbox,
            value: n,
            onChange: function () {
                t(!n);
            },
            children: (0, l.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: (0, l.jsx)(i.Tooltip, {
                    position: 'bottom',
                    tooltipClassName: r.tooltip,
                    text: a.intl.string(a.t['4A/xnZ']),
                    'aria-label': a.intl.string(a.t['4A/xnZ']),
                    children: (e) =>
                        (0, l.jsx)('span', {
                            ...e,
                            children: o
                        })
                })
            })
        })
    });
}
