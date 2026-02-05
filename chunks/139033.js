"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(732955),
    a = n(397927),
    s = n(985018);
function o(e) {
    let { title: t, subtitle: n, confirmText: o = s.intl.string(s.t.BddRzS) } = e;
    return (0, a.qfG)((e) =>
        (0, r.jsx)(i.aFV, { ...e, title: t, subtitle: n, actions: [{ text: o, onClick: e.onClose }] }),
    );
}
