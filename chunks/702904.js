n.d(t, { A: () => l });
var a = n(627968);
n(64700);
var i = n(192308),
    r = n(985018);
function l() {
    function e() {
        (0, i.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("57568"), n.e("44602"), n.e("25280")]).then(n.bind(n, 987482));
            return (t) => (0, a.jsx)(e, { source: "Screenshare Unavailable", ...t });
        });
    }
    (0, i.openModalLazy)(async () => {
        let { default: t } = await n.e("11487").then(n.bind(n, 792866));
        return (n) =>
            (0, a.jsx)(t, {
                ...n,
                header: r.intl.string(r.t.GFr0GR),
                body: r.intl.string(r.t.QSk6E8),
                confirmText: r.intl.string(r.t["BK8LK+"]),
                onConfirm: e,
            });
    });
}
