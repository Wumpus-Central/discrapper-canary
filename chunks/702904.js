"use strict";
n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(985018);
function r() {
    function e() {
        (0, s.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
            return (t) => (0, i.jsx)(e, { source: "Screenshare Unavailable", ...t });
        });
    }
    (0, s.mMO)(async () => {
        let { default: t } = await n.e("11487").then(n.bind(n, 792866));
        return (n) =>
            (0, i.jsx)(t, {
                ...n,
                header: l.intl.string(l.t.GFr0GR),
                body: l.intl.string(l.t.QSk6E8),
                confirmText: l.intl.string(l.t["BK8LK+"]),
                onConfirm: e,
            });
    });
}
