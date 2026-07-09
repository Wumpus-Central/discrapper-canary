t.d(e, { A: () => s });
var n = t(627968);
t(64700);
var o = t(192308),
    r = t(892491);
function s(a) {
    let { source: e, onClose: s } = a;
    (0, o.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([t.e("93227"), t.e("98199"), t.e("92223"), t.e("61376")]).then(
                t.bind(t, 999235),
            );
            return (t) => (0, n.jsx)(a, { ...t, source: e });
        },
        { onCloseCallback: s, backdropStyle: r.F.BLUR, stackingBehavior: "stack" },
    );
}
