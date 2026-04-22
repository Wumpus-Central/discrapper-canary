n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(192308),
    r = n(892491);
function s(e) {
    let { source: t, onClose: s } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await n.e("61376").then(n.bind(n, 999235));
            return (n) => (0, i.jsx)(e, { ...n, source: t });
        },
        { onCloseCallback: s, backdropStyle: r.F.BLUR },
    );
}
