"use strict";
n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(375708);
function a() {
    function e() {
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("81013"), n.e("44602"), n.e("25280")]).then(n.bind(n, 987482));
            return (t) => (0, i.jsx)(e, { source: "Screenshare Unavailable", ...t });
        });
    }
    (0, r.openModalLazy)(async () => {
        let { default: t } = await n.e("11487").then(n.bind(n, 792866));
        return (n) =>
            (0, i.jsx)(t, {
                ...n,
                header: s.intl.string(s.t.GFr0GR),
                body: s.intl.string(s.t.QSk6E8),
                confirmText: s.intl.string(s.t["BK8LK+"]),
                onConfirm: e,
            });
    });
}
