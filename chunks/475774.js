r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(570140);
async function s(e) {
    let n = await (0, a.openModalLazy)(
        async () => {
            let { default: n } = await Promise.all([r.e('8739'), r.e('57650')]).then(r.bind(r, 677012));
            return (r) =>
                (0, i.jsx)(n, {
                    ...r,
                    ...e
                });
        },
        {
            onCloseCallback: () => {
                o.Z.dispatch({
                    type: 'INTERACTION_IFRAME_MODAL_CLOSE',
                    applicationId: e.application.id
                });
            }
        }
    );
    o.Z.dispatch({
        type: 'INTERACTION_IFRAME_MODAL_KEY_CREATE',
        modalKey: n
    });
}
