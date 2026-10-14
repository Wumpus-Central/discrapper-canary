o.d(e, { A: () => i });
var t = o(477900);
o(582128);
var n = o(192308),
    r = o(892491),
    s = o(327337);
function i(a) {
    let { source: e, onClose: i } = a;
    (0, n.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([o.e("450530"), o.e("298199"), o.e("392223"), o.e("61376")]).then(
                o.bind(o, 999235),
            );
            return (o) => (0, t.jsx)(a, { ...o, source: e });
        },
        { modalKey: s.Yd, onCloseCallback: i, backdropStyle: r.F.BLUR, stackingBehavior: "stack" },
    );
}
