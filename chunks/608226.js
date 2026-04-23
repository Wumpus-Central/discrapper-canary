n.d(t, { O: () => r });
var l = n(627968);
n(64700);
var i = n(192308);
function r(e, t) {
    return (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e("86743").then(n.bind(n, 572874));
        return (n) =>
            (0, l.jsx)(i, {
                ...n,
                onConfirm: () => {
                    n.onClose(), t();
                },
                channel: e,
            });
    });
}
