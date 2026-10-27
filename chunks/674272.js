n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(892491),
    s = n(327337);
function l(e) {
    let { source: t, onClose: l } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("450530"),
                n.e("454048"),
                n.e("809915"),
                n.e("592731"),
                n.e("298199"),
                n.e("392223"),
                n.e("61376"),
            ]).then(n.bind(n, 999235));
            return (n) => (0, i.jsx)(e, { ...n, source: t });
        },
        { modalKey: s.Yd, onCloseCallback: l, backdropStyle: a.F.BLUR, stackingBehavior: "stack" },
    );
}
