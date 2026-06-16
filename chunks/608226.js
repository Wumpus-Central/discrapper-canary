a.d(n, { O: () => t });
var r = a(627968);
a(64700);
var s = a(192308);
function t(e, n) {
    return (0, s.openModalLazy)(async () => {
        let { default: s } = await Promise.all([a.e("60773"), a.e("43267"), a.e("62433"), a.e("86743")]).then(
            a.bind(a, 572874),
        );
        return (a) =>
            (0, r.jsx)(s, {
                ...a,
                onConfirm: () => {
                    a.onClose(), n();
                },
                channel: e,
            });
    });
}
