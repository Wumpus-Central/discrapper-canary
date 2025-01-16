var i,
    r,
    l = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    o = n(873546),
    c = n(481060),
    d = n(423360);
function u(e) {
    let { icon: t, tooltip: n, onClick: i, actionType: r = 2, shouldHighlight: a } = e;
    return (0, l.jsx)(c.Tooltip, {
        text: n,
        children: (e) =>
            (0, l.jsx)(c.Clickable, {
                ...e,
                'aria-label': n,
                onClick: i,
                className: s()(d.actionButton, {
                    [d.actionAccept]: 0 === r,
                    [d.actionDeny]: 1 === r,
                    [d.highlight]: a,
                    [d.actionButtonMobile]: o.tq
                }),
                children: (0, l.jsx)(t, {
                    className: d.icon,
                    color: 'currentColor'
                })
            })
    });
}
((i = r || (r = {}))[(i.ACCEPT = 0)] = 'ACCEPT'), (i[(i.DENY = 1)] = 'DENY'), (i[(i.DEFAULT = 2)] = 'DEFAULT'), (u.ActionTypes = r), (t.Z = u);
