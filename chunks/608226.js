a.d(n, { O: () => t });
var r = a(477900);
a(582128);
var s = a(192308);
function t(e, n) {
    return (0, s.openModalLazy)(async () => {
        let { default: s } = await Promise.all([
            a.e("304350"),
            a.e("265696"),
            a.e("201050"),
            a.e("460773"),
            a.e("356664"),
            a.e("399624"),
            a.e("387634"),
            a.e("479971"),
            a.e("736621"),
            a.e("543267"),
            a.e("62433"),
            a.e("286743"),
        ]).then(a.bind(a, 572874));
        return (a) =>
            (0, r.jsx)(s, {
                ...a,
                onConfirm: () => {
                    (a.onClose(), n());
                },
                channel: e,
            });
    });
}
