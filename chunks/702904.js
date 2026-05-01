n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(985018);
function r() {
    function e() {
        (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("81013"), n.e("44602"), n.e("25280")]).then(n.bind(n, 987482));
            return (t) => (0, i.jsx)(e, { source: "Screenshare Unavailable", ...t });
        });
    }
    (0, l.openModalLazy)(async () => {
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
