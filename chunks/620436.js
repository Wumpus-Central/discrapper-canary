n.d(t, {
    Z: function () {
        return o;
    }
});
var i,
    r,
    l = n(200651);
n(192379);
var a = n(481060),
    s = n(673744);
((i = r || (r = {})).ARROW_DOWN = 'arrow_down'), (i.CROSS = 'cross');
function o(e) {
    let { type: t } = e;
    return (0, l.jsx)('div', {
        className: s.dividerContainer,
        children: (0, l.jsx)('div', {
            className: s.dividerIconContainer,
            children: (function (e) {
                switch (e) {
                    case 'arrow_down':
                        return (0, l.jsx)(a.ArrowSmallDownIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: s.dividierIcon
                        });
                    case 'cross':
                        return (0, l.jsx)(a.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: s.dividierIcon
                        });
                    default:
                        return null;
                }
            })(t)
        })
    });
}
o.Type = r;
