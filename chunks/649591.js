n.d(t, { j: () => a });
var i = n(200651);
n(192379);
var r = n(481060);
function a(e) {
    let { application: t, onConfirm: a, onCancel: s } = e;
    return (
        (0, r.ZDy)(async () => {
            let { default: e } = await n.e('18367').then(n.bind(n, 557751));
            return (n) =>
                (0, i.jsx)(e, {
                    application: t,
                    onConfirm: a,
                    onCancel: s,
                    ...n
                });
        }),
        Promise.resolve()
    );
}
