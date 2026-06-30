"use strict";
n.d(t, { C: () => s, m: () => a });
var i = n(627968);
n(64700);
var r = n(192308);
let s = "command-share-modal";
function a(e) {
    let {
        applicationId: t,
        channel: a,
        command: o,
        previewMessage: l,
        requireLaunchChannel: u,
        contextKey: c,
        onShareResult: d,
    } = e;
    (0, r.openModalLazy)(
        async () => {
            let { ApplicationCommandShareModal: e } = await Promise.all([
                n.e("18712"),
                n.e("99099"),
                n.e("98892"),
                n.e("97690"),
                n.e("87103"),
                n.e("46934"),
                n.e("812"),
                n.e("52865"),
                n.e("87960"),
                n.e("57215"),
                n.e("22535"),
                n.e("31481"),
                n.e("41603"),
                n.e("62279"),
                n.e("67454"),
                n.e("37634"),
                n.e("42157"),
                n.e("94635"),
                n.e("28367"),
                n.e("81647"),
                n.e("76602"),
                n.e("21921"),
                n.e("40402"),
                n.e("40258"),
                n.e("8555"),
                n.e("6949"),
                n.e("46070"),
                n.e("17249"),
                n.e("90365"),
                n.e("89088"),
                n.e("17989"),
                n.e("67861"),
                n.e("1518"),
                n.e("23354"),
                n.e("20590"),
                n.e("80830"),
                n.e("79745"),
                n.e("35395"),
                n.e("45413"),
                n.e("46844"),
                n.e("64850"),
                n.e("70104"),
                n.e("2564"),
                n.e("71477"),
                n.e("16988"),
                n.e("36946"),
                n.e("92639"),
                n.e("40963"),
                n.e("90480"),
                n.e("13491"),
                n.e("83689"),
            ]).then(n.bind(n, 541712));
            return (n) =>
                (0, i.jsx)(e, {
                    applicationId: t,
                    channel: a,
                    command: o,
                    previewMessage: l,
                    onShareResult: d,
                    requireLaunchChannel: u,
                    ...n,
                });
        },
        {
            modalKey: s,
            contextKey: c,
            onCloseCallback: () => {
                d(!1);
            },
        },
    );
}
