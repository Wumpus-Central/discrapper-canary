n.d(e, { A: () => s });
var o = n(627968);
n(64700);
var r = n(192308),
    t = n(892491);
function s(a) {
    let { source: e, onClose: s } = a;
    (0, r.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([n.e("68011"), n.e("98199"), n.e("92223"), n.e("61376")]).then(
                n.bind(n, 999235),
            );
            return (n) => (0, o.jsx)(a, { ...n, source: e });
        },
        { onCloseCallback: s, backdropStyle: t.F.BLUR },
    );
}
