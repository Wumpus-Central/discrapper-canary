n.d(t, { Z: () => a });
var r,
    i = n(200651);
n(192379);
var s = n(481060),
    l = n(691331);
function a(e) {
    let { type: t } = e;
    return (0, i.jsx)('div', {
        className: l.dividerContainer,
        children: (0, i.jsx)('div', {
            className: l.dividerIconContainer,
            children: (function (e) {
                switch (e) {
                    case 'arrow_down':
                        return (0, i.jsx)(s.cQm, {
                            size: 'md',
                            color: 'currentColor',
                            className: l.dividierIcon
                        });
                    case 'cross':
                        return (0, i.jsx)(s.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: l.dividierIcon
                        });
                    default:
                        return null;
                }
            })(t)
        })
    });
}
a.Type = (((r = {}).ARROW_DOWN = 'arrow_down'), (r.CROSS = 'cross'), r);
