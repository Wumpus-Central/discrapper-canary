n.d(t, {
    Z: function () {
        return o;
    }
});
var i,
    r,
    l = n(200651);
n(192379);
var s = n(481060),
    a = n(673744);
((i = r || (r = {})).ARROW_DOWN = 'arrow_down'), (i.CROSS = 'cross');
function o(e) {
    let { type: t } = e;
    return (0, l.jsx)('div', {
        className: a.dividerContainer,
        children: (0, l.jsx)('div', {
            className: a.dividerIconContainer,
            children: (function (e) {
                switch (e) {
                    case 'arrow_down':
                        return (0, l.jsx)(s.ArrowSmallDownIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: a.dividierIcon
                        });
                    case 'cross':
                        return (0, l.jsx)(s.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: a.dividierIcon
                        });
                    default:
                        return null;
                }
            })(t)
        })
    });
}
o.Type = r;
