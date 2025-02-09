n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140);
async function s(e) {
    let t = await (0, r.ZDy)(
        async () => {
            let { default: t } = await Promise.all([n.e('8739'), n.e('60301')]).then(n.bind(n, 677012));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    ...e
                });
        },
        {
            onCloseCallback: () => {
                a.Z.dispatch({
                    type: 'INTERACTION_IFRAME_MODAL_CLOSE',
                    applicationId: e.application.id
                });
            }
        }
    );
    a.Z.dispatch({
        type: 'INTERACTION_IFRAME_MODAL_KEY_CREATE',
        modalKey: t
    });
}
