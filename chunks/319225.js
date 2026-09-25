n.d(e, { E: () => u });
var r = n(477900);
n(582128);
var i = n(189213),
    s = n(192308),
    o = n(375708);
function a(t) {
    let { transitionState: e, title: n, body: s, onClose: a } = t;
    return (0, r.jsx)(i.a, {
        title: n,
        actions: [{ text: o.intl.string(o.t["NX+WJN"]), onClick: a }],
        transitionState: e,
        onClose: a,
        subtitle: s,
    });
}
function u(t) {
    (0, s.openModal)((e) => (0, r.jsx)(a, { ...e, ...t }));
}
