t.d(n, { Z: () => s });
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(388032),
    a = t(144172);
function s(e) {
    let { sendStartNotification: n, setSendStartNotification: t } = e,
        s = n ? r.intl.string(r.t.xAT8lJ) : r.intl.string(r.t['Y+18hY']);
    return (0, l.jsx)('div', {
        className: a.notificationToggle,
        children: (0, l.jsx)(i.XZJ, {
            type: i.XZJ.Types.INVERTED,
            size: 14,
            className: a.__invalid_checkbox,
            value: n,
            onChange: function () {
                t(!n);
            },
            children: (0, l.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: (0, l.jsx)(i.ua7, {
                    position: 'bottom',
                    tooltipClassName: a.tooltip,
                    text: r.intl.string(r.t['4A/xnZ']),
                    'aria-label': r.intl.string(r.t['4A/xnZ']),
                    children: (e) =>
                        (0, l.jsx)('span', {
                            ...e,
                            children: s
                        })
                })
            })
        })
    });
}
