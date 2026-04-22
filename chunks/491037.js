n.d(t, { W: () => a });
var i = n(627968);
n(64700);
var l = n(192308);
function a(e) {
    let { message: t, initialAnswerId: a } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("80966").then(n.bind(n, 801285));
        return (n) => (0, i.jsx)(e, { ...n, message: t, initialAnswerId: a });
    });
}
