n.d(t, { O: () => r });
var i = n(627968);
n(64700);
var l = n(397927);
function r(e, t) {
    return (0, l.mMO)(async () => {
        let { default: l } = await n.e("33372").then(n.bind(n, 58935));
        return (n) =>
            (0, i.jsx)(l, {
                ...n,
                onConfirm: () => {
                    n.onClose(), t();
                },
                channel: e,
            });
    });
}
