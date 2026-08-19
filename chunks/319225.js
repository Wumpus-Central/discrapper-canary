n.d(e, { E: () => u });
var r = n(477900);
n(582128);
var i = n(189213),
    o = n(192308),
    s = n(375708);
function a(t) {
    let { transitionState: e, title: n, body: o, onClose: a } = t;
    return (0, r.jsx)(i.Modal, {
        title: n,
        actions: [{ text: s.intl.string(s.t["NX+WJN"]), onClick: a }],
        transitionState: e,
        onClose: a,
        subtitle: o,
    });
}
function u(t) {
    (0, o.openModal)((e) => (0, r.jsx)(a, { ...e, ...t }));
}
