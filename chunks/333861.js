n.d(t, {
    M: function () {
        return o;
    },
    s: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(522474),
    a = n(981631);
let s = 'command-share-modal';
function o(e) {
    let { applicationId: t, channel: o, command: c, previewMessage: d } = e,
        u = l.Z.getWindowOpen(a.KJ3.ACTIVITY_POPOUT) ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
    (0, r.openModalLazy)(
        async () => {
            let { ApplicationCommandShareModal: e } = await n.e('53682').then(n.bind(n, 683958));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channel: o,
                    command: c,
                    previewMessage: d,
                    ...n
                });
        },
        {
            modalKey: s,
            contextKey: u
        }
    );
}
