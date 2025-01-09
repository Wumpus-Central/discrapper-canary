n.d(t, {
    _: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(812206),
    a = n(531826);
function s(e) {
    let { applicationId: t, channelId: s, launchParams: o, message: c, onShare: d } = e,
        u = l.Z.getApplication(t),
        h =
            null !=
            (0, a.ZP)({
                application: u,
                channelId: s
            })
                ? r.POPOUT_MODAL_CONTEXT
                : r.DEFAULT_MODAL_CONTEXT;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await n.e('83098').then(n.bind(n, 137021));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channelId: s,
                    launchParams: o,
                    message: c,
                    onShare: d,
                    ...n
                });
        },
        {
            modalKey: 'activity-share-moment-modal',
            contextKey: h,
            onCloseCallback: () => {
                d(!1);
            }
        }
    );
}
