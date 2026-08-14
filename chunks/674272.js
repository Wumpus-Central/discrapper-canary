t.d(e, { A: () => s });
var n = t(477900);
t(582128);
var o = t(192308),
    r = t(892491);
function s(a) {
    let { source: e, onClose: s } = a;
    (0, o.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([t.e("944467"), t.e("298199"), t.e("392223"), t.e("61376")]).then(
                t.bind(t, 999235),
            );
            return (t) => (0, n.jsx)(a, { ...t, source: e });
        },
        { onCloseCallback: s, backdropStyle: r.F.BLUR, stackingBehavior: "stack" },
    );
}
