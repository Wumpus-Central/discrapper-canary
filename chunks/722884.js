n.d(t, { A: () => a });
var i = n(627968),
    l = n(192308),
    s = n(131955);
function a(e) {
    let { channel: t } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await n.e("85221").then(n.bind(n, 318532));
            return (n) => (0, i.jsx)(e, { channel: t, ...n });
        },
        { modalKey: s.e$ },
    );
}
