"use strict";
n.d(t, { b: () => c, o: () => u });
var i = n(627968);
n(64700);
var r = n(156828),
    s = n(192308),
    a = n(391973),
    o = n(574172),
    l = n(38502),
    d = n(644434),
    _ = n(392164);
async function u() {
    (0, a.Vz)(d.G, l.A.getDefaultLayout(d.G, 4), 4);
    let e = (0, r.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("62731"),
                n.e("34786"),
                n.e("93812"),
                n.e("93103"),
                n.e("24170"),
                n.e("44575"),
                n.e("97278"),
                n.e("8555"),
                n.e("35313"),
                n.e("49328"),
                n.e("34268"),
                n.e("69295"),
                n.e("98765"),
                n.e("68883"),
                n.e("44236"),
                n.e("97386"),
                n.e("92414"),
                n.e("65437"),
                n.e("84812"),
                n.e("92803"),
                n.e("99011"),
                n.e("40393"),
                n.e("17637"),
                n.e("43765"),
                n.e("25979"),
                n.e("33297"),
                n.e("33773"),
                n.e("23297"),
                n.e("95752"),
                n.e("92754"),
                n.e("51440"),
                n.e("53668"),
                n.e("62092"),
                n.e("27752"),
                n.e("52338"),
                n.e("49319"),
                n.e("9931"),
                n.e("35614"),
                n.e("46277"),
                n.e("93764"),
                n.e("65848"),
                n.e("21420"),
                n.e("42282"),
                n.e("81297"),
                n.e("13988"),
                n.e("67925"),
                n.e("61763"),
                n.e("64879"),
                n.e("8018"),
                n.e("77259"),
                n.e("51299"),
                n.e("6214"),
                n.e("92847"),
                n.e("66512"),
                n.e("10730"),
                n.e("92867"),
                n.e("37886"),
                n.e("25013"),
                n.e("92007"),
                n.e("28499"),
                n.e("78467"),
                n.e("17965"),
                n.e("88109"),
                n.e("96086"),
                n.e("44030"),
                n.e("12925"),
            ]).then(n.bind(n, 888250)),
        webpackId: 888250,
        name: "AppOverlay",
    });
    await o.open(_.f, (t) => (0, i.jsx)(e, { withTitleBar: !1, windowKey: t }), {
        outOfProcessOverlay: !0,
        focusable: !1,
    });
}
function c(e, t) {
    let r = (0, s.modalContextFromAppContext)(t);
    (0, s.openModalLazy)(
        async () => {
            let { default: r } = await n.e("93783").then(n.bind(n, 129802));
            return (n) => (0, i.jsx)(r, { ...n, location: e, appContext: t });
        },
        null != r ? { contextKey: r } : void 0,
    );
}
