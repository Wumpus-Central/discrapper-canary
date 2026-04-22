n.d(t, { C: () => a, m: () => l });
var i = n(627968);
n(64700);
var r = n(192308);
let a = "command-share-modal";
function l(e) {
    let {
        applicationId: t,
        channel: l,
        command: s,
        previewMessage: o,
        requireLaunchChannel: d,
        contextKey: u,
        onShareResult: c,
    } = e;
    (0, r.openModalLazy)(
        async () => {
            let { ApplicationCommandShareModal: e } = await n.e("33885").then(n.bind(n, 962156));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channel: l,
                    command: s,
                    previewMessage: o,
                    onShareResult: c,
                    requireLaunchChannel: d,
                    ...n,
                });
        },
        {
            modalKey: a,
            contextKey: u,
            onCloseCallback: () => {
                c(!1);
            },
        },
    );
}
