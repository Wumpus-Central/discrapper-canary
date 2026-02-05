"use strict";
n.d(t, { E: () => o });
var s = n(627968);
n(64700);
var i = n(158954),
    r = n(397927),
    l = n(985018);
function a(e) {
    let { transitionState: t, title: n, body: r, onClose: a } = e;
    return (0, s.jsx)(i.Modal, {
        title: n,
        actions: [{ text: l.intl.string(l.t["NX+WJN"]), onClick: a }],
        transitionState: t,
        onClose: a,
        subtitle: r,
    });
}
function o(e) {
    (0, r.qfG)((t) => (0, s.jsx)(a, { ...t, ...e }));
}
