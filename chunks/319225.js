n.d(t, { E: () => a });
var l = n(627968);
n(64700);
var s = n(189213),
    i = n(192308),
    r = n(985018);
function o(e) {
    let { transitionState: t, title: n, body: i, onClose: o } = e;
    return (0, l.jsx)(s.Modal, {
        title: n,
        actions: [{ text: r.intl.string(r.t["NX+WJN"]), onClick: o }],
        transitionState: t,
        onClose: o,
        subtitle: i,
    });
}
function a(e) {
    (0, i.openModal)((t) => (0, l.jsx)(o, { ...t, ...e }));
}
