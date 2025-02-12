n.d(t, { Z: () => h });
var i,
    l = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(873546),
    o = n(481060),
    c = n(74344),
    d = (((i = d || {})[(i.ACCEPT = 0)] = 'ACCEPT'), (i[(i.DENY = 1)] = 'DENY'), (i[(i.DEFAULT = 2)] = 'DEFAULT'), i);
function u(e) {
    let { icon: t, tooltip: n, onClick: i, actionType: r = 2, shouldHighlight: d } = e;
    return (0, l.jsx)(o.ua7, {
        text: n,
        children: (e) =>
            (0, l.jsx)(o.P3F, {
                ...e,
                'aria-label': n,
                onClick: i,
                className: a()(c.actionButton, {
                    [c.actionAccept]: 0 === r,
                    [c.actionDeny]: 1 === r,
                    [c.highlight]: d,
                    [c.actionButtonMobile]: s.tq
                }),
                children: (0, l.jsx)(t, {
                    className: c.icon,
                    color: 'currentColor'
                })
            })
    });
}
u.ActionTypes = d;
let h = u;
