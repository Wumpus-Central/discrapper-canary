"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(189213),
    s = n(375708);
function l(e) {
    let { title: t, subtitle: n, confirmText: l = s.intl.string(s.t.BddRzS) } = e;
    return (0, r.openModal)((e) =>
        (0, i.jsx)(a.Modal, { ...e, title: t, subtitle: n, actions: [{ text: l, onClick: e.onClose }] }),
    );
}
