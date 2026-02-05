n.d(t, { C: () => a, m: () => l });
var i = n(627968);
n(64700);
var r = n(397927);
let a = "command-share-modal";
function l(e) {
    let {
        applicationId: t,
        channel: l,
        command: s,
        previewMessage: o,
        requireLaunchChannel: d,
        contextKey: c,
        onShareResult: u,
    } = e;
    (0, r.mMO)(
        async () => {
            let { ApplicationCommandShareModal: e } = await n.e("33885").then(n.bind(n, 962156));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channel: l,
                    command: s,
                    previewMessage: o,
                    onShareResult: u,
                    requireLaunchChannel: d,
                    ...n,
                });
        },
        {
            modalKey: a,
            contextKey: c,
            onCloseCallback: () => {
                u(!1);
            },
        },
    );
}
