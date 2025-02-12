n.d(t, { Z: () => o });
var i,
    r = n(200651);
n(192379);
var l = n(481060),
    s = n(767851),
    a = (((i = {}).ARROW_DOWN = 'arrow_down'), (i.CROSS = 'cross'), i);
function o(e) {
    let { type: t } = e;
    return (0, r.jsx)('div', {
        className: s.dividerContainer,
        children: (0, r.jsx)('div', {
            className: s.dividerIconContainer,
            children: (function (e) {
                switch (e) {
                    case 'arrow_down':
                        return (0, r.jsx)(l.cQm, {
                            size: 'md',
                            color: 'currentColor',
                            className: s.dividierIcon
                        });
                    case 'cross':
                        return (0, r.jsx)(l.Dio, {
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
o.Type = a;
