n.d(e, { O: () => u, i: () => d });
var i = n(627968),
    l = n(397927),
    r = n(985018);
function u(t) {
    let { body: e, ...r } = t;
    (0, l.mMO)(async () => {
        let { VoidConfirmModal: t } = await Promise.resolve().then(n.bind(n, 397927));
        return (n) =>
            (0, i.jsx)(t, { ...n, ...r, children: (0, i.jsx)(l.Text, { variant: "text-md/normal", children: e }) });
    });
}
function d(t) {
    let { message: e } = t;
    u({ header: r.intl.string(r.t.OjbtDm), confirmText: r.intl.string(r.t.BddRzS), body: e });
}
