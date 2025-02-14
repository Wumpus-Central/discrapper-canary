n.d(t, {
    M: () => o,
    s: () => s
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(522474),
    a = n(981631);
let s = 'command-share-modal';
function o(e) {
    let { applicationId: t, channel: o, command: d, previewMessage: c, requireLaunchChannel: u, onShareResult: h } = e,
        m = r.Z.getWindowOpen(a.KJ3.ACTIVITY_POPOUT) ? l.u1M : l.z1l;
    (0, l.ZDy)(
        async () => {
            let { ApplicationCommandShareModal: e } = await n.e('53682').then(n.bind(n, 683958));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channel: o,
                    command: d,
                    previewMessage: c,
                    onShareResult: h,
                    requireLaunchChannel: u,
                    ...n
                });
        },
        {
            modalKey: s,
            contextKey: m,
            onCloseCallback: () => {
                h(!1);
            }
        }
    );
}
