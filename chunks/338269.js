n.d(t, { _: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(812206),
    a = n(531826);
function s(e) {
    let { applicationId: t, channelId: s, launchParams: o, message: c, onShare: d } = e,
        u = r.Z.getApplication(t),
        h =
            null !=
            (0, a.ZP)({
                application: u,
                channelId: s
            })
                ? l.u1M
                : l.z1l;
    (0, l.ZDy)(
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
