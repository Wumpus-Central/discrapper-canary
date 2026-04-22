s.d(t, { A: () => l });
var i = s(627968);
s(64700);
var n = s(192308),
    r = s(985018);
function l() {
    function e() {
        (0, n.openModalLazy)(async () => {
            let { default: e } = await Promise.all([s.e("56423"), s.e("25280")]).then(s.bind(s, 987482));
            return (t) => (0, i.jsx)(e, { source: "Screenshare Unavailable", ...t });
        });
    }
    (0, n.openModalLazy)(async () => {
        let { default: t } = await s.e("11487").then(s.bind(s, 792866));
        return (s) =>
            (0, i.jsx)(t, {
                ...s,
                header: r.intl.string(r.t.GFr0GR),
                body: r.intl.string(r.t.QSk6E8),
                confirmText: r.intl.string(r.t["BK8LK+"]),
                onConfirm: e,
            });
    });
}
