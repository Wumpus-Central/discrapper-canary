s.d(t, { Z: () => a });
var r = s(200651);
s(192379);
var n = s(703656),
    o = s(153069),
    i = s(577658);
let a = (e) => {
    let { onClose: t } = e;
    return (0, r.jsx)('div', {
        className: i.container,
        children: (0, r.jsx)(o.Z, {
            transitionTo: (e) => {
                (0, n.uL)(e);
            },
            replaceWith: (e) => {
                (0, n.dL)(e);
            },
            authBoxClassName: i.card,
            closeLogin: t
        })
    });
};
