"use strict";
n.d(t, { A: () => s });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(375708);
function s() {
    function e() {
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("39981"), n.e("44602"), n.e("25280")]).then(n.bind(n, 987482));
            return (t) => (0, i.jsx)(e, { source: "Screenshare Unavailable", ...t });
        });
    }
    (0, r.openModalLazy)(async () => {
        let { default: t } = await n.e("11487").then(n.bind(n, 792866));
        return (n) =>
            (0, i.jsx)(t, {
                ...n,
                header: a.intl.string(a.t.GFr0GR),
                body: a.intl.string(a.t.QSk6E8),
                confirmText: a.intl.string(a.t["BK8LK+"]),
                onConfirm: e,
            });
    });
}
