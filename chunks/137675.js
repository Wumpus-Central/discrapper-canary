n.d(t, { O: () => r, i: () => o });
var i = n(627968),
    s = n(192308),
    l = n(834730),
    a = n(985018);
function r(e) {
    let { body: t, ...a } = e;
    (0, s.openModalLazy)(async () => {
        let { VoidConfirmModal: e } = await n.e("77260").then(n.bind(n, 397927));
        return (n) =>
            (0, i.jsx)(e, { ...n, ...a, children: (0, i.jsx)(l.E, { variant: "text-md/normal", children: t }) });
    });
}
function o(e) {
    let { message: t } = e;
    r({ header: a.intl.string(a.t.OjbtDm), confirmText: a.intl.string(a.t.BddRzS), body: t });
}
