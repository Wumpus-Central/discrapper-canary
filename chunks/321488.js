n.d(t, { Z: () => h });
var i,
    l = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(873546),
    o = n(481060),
    d = n(74344),
    c = (((i = c || {})[(i.ACCEPT = 0)] = 'ACCEPT'), (i[(i.DENY = 1)] = 'DENY'), (i[(i.DEFAULT = 2)] = 'DEFAULT'), i);
function u(e) {
    let { icon: t, tooltip: n, onClick: i, actionType: r = 2, shouldHighlight: c } = e;
    return (0, l.jsx)(o.ua7, {
        text: n,
        children: (e) =>
            (0, l.jsx)(o.P3F, {
                ...e,
                'aria-label': n,
                onClick: i,
                className: a()(d.actionButton, {
                    [d.actionAccept]: 0 === r,
                    [d.actionDeny]: 1 === r,
                    [d.highlight]: c,
                    [d.actionButtonMobile]: s.tq
                }),
                children: (0, l.jsx)(t, {
                    className: d.icon,
                    color: 'currentColor'
                })
            })
    });
}
u.ActionTypes = c;
let h = u;
