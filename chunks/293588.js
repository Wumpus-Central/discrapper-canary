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
        contextKey: c,
        onShareResult: u,
    } = e;
    (0, r.openModalLazy)(
        async () => {
            let { ApplicationCommandShareModal: e } = await Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("87963"),
                n.e("37266"),
                n.e("55057"),
                n.e("76021"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("98765"),
                n.e("92414"),
                n.e("47417"),
                n.e("21055"),
                n.e("54436"),
                n.e("6698"),
                n.e("90184"),
                n.e("52286"),
                n.e("38752"),
            ]).then(n.bind(n, 541712));
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
