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
                n.e("45580"),
                n.e("96126"),
                n.e("81463"),
                n.e("24826"),
                n.e("9420"),
                n.e("75889"),
                n.e("56844"),
                n.e("29549"),
                n.e("12085"),
                n.e("12667"),
                n.e("59835"),
                n.e("88619"),
                n.e("65146"),
                n.e("92485"),
                n.e("97622"),
                n.e("24515"),
                n.e("47080"),
                n.e("19983"),
                n.e("35475"),
                n.e("20538"),
                n.e("18893"),
                n.e("78775"),
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
                n.e("98765"),
                n.e("66707"),
                n.e("17989"),
                n.e("80012"),
                n.e("1518"),
                n.e("23354"),
                n.e("28083"),
                n.e("20590"),
                n.e("80830"),
                n.e("79745"),
                n.e("35395"),
                n.e("46844"),
                n.e("45413"),
                n.e("64850"),
                n.e("70104"),
                n.e("2564"),
                n.e("47417"),
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
