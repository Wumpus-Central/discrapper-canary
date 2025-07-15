s.d(t, { Z: () => a });
var n = s(255367);
s(73800);
var r = s(703656),
    i = s(153069),
    o = s(577658);
let a = (e) => {
    let { onClose: t } = e;
    return (0, n.jsx)('div', {
        className: o.container,
        children: (0, n.jsx)(i.Z, {
            transitionTo: (e) => {
                (0, r.uL)(e);
            },
            replaceWith: (e) => {
                (0, r.dL)(e);
            },
            authBoxClassName: o.card,
            closeLogin: t
        })
    });
};
