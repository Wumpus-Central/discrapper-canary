"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(189213),
    s = n(192308),
    a = n(375708);
function o(e) {
    let { title: t, subtitle: n, confirmText: o = a.intl.string(a.t.BddRzS) } = e;
    return (0, s.openModal)((e) =>
        (0, i.jsx)(r.Modal, { ...e, title: t, subtitle: n, actions: [{ text: o, onClick: e.onClose }] }),
    );
}
