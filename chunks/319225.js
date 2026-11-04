var r = n(477900);
n(582128);
var i = n(189213),
    s = n(192308),
    u = n(792996);
function a(t) {
    let { transitionState: e, title: n, body: s, onClose: a } = t;
    return (0, r.jsx)(i.a, {
        title: n,
        actions: [{ text: u.intl.string(u.t["NX+WJN"]), onClick: a }],
        transitionState: e,
        onClose: a,
        subtitle: s,
    });
}
n.d(
    e,
    {},
    {
        E: function (t) {
            (0, s.qf)((e) => (0, r.jsx)(a, { ...e, ...t }));
        },
    },
);
