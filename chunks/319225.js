i.d(n, { E: () => o });
var e = i(627968);
i(64700);
var r = i(189213),
    l = i(192308),
    s = i(375708);
function a(t) {
    let { transitionState: n, title: i, body: l, onClose: a } = t;
    return (0, e.jsx)(r.Modal, {
        title: i,
        actions: [{ text: s.intl.string(s.t["NX+WJN"]), onClick: a }],
        transitionState: n,
        onClose: a,
        subtitle: l,
    });
}
function o(t) {
    (0, l.openModal)((n) => (0, e.jsx)(a, { ...n, ...t }));
}
