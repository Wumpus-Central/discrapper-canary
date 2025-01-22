r.d(n, {
    j: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(481060);
function o(e) {
    let { application: n, onConfirm: o, onCancel: s } = e;
    return (
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('18367').then(r.bind(r, 557751));
            return (r) =>
                (0, i.jsx)(e, {
                    application: n,
                    onConfirm: o,
                    onCancel: s,
                    ...r
                });
        }),
        Promise.resolve()
    );
}
