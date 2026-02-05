n.d(t, { E: () => a });
var i = n(627968);
n(64700);
var s = n(158954),
    r = n(397927),
    l = n(985018);
function o(e) {
    let { transitionState: t, title: n, body: r, onClose: o } = e;
    return (0, i.jsx)(s.Modal, {
        title: n,
        actions: [{ text: l.intl.string(l.t["NX+WJN"]), onClick: o }],
        transitionState: t,
        onClose: o,
        subtitle: r,
    });
}
function a(e) {
    (0, r.qfG)((t) => (0, i.jsx)(o, { ...t, ...e }));
}
