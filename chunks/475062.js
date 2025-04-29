s.d(t, { Z: () => a });
var n = s(255367);
s(73800);
var r = s(703656),
    o = s(153069),
    i = s(577658);
let a = (e) => {
    let { onClose: t } = e;
    return (0, n.jsx)('div', {
        className: i.container,
        children: (0, n.jsx)(o.Z, {
            transitionTo: (e) => {
                (0, r.uL)(e);
            },
            replaceWith: (e) => {
                (0, r.dL)(e);
            },
            authBoxClassName: i.card,
            closeLogin: t
        })
    });
};
