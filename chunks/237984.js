"use strict";
n.d(t, { b: () => _, o: () => d });
var r = n(627968);
n(64700);
var i = n(156828),
    s = n(192308),
    a = n(391973),
    o = n(574172),
    l = n(555528),
    u = n(644434),
    c = n(392164);
async function d() {
    (0, a.Vz)(u.G, l.A.getDefaultLayout(u.G, 4), 4);
    let e = (0, i.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("41927"),
                n.e("10614"),
                n.e("93812"),
                n.e("93103"),
                n.e("92493"),
                n.e("25412"),
                n.e("97278"),
                n.e("374"),
                n.e("8555"),
                n.e("35313"),
                n.e("40396"),
                n.e("99011"),
                n.e("28936"),
                n.e("68883"),
                n.e("64243"),
                n.e("97386"),
                n.e("755"),
                n.e("48330"),
                n.e("92414"),
                n.e("94857"),
                n.e("16419"),
                n.e("82561"),
                n.e("45253"),
                n.e("87306"),
                n.e("47742"),
                n.e("37372"),
                n.e("95752"),
                n.e("9648"),
                n.e("34519"),
                n.e("56403"),
                n.e("74372"),
                n.e("84560"),
                n.e("46277"),
                n.e("93764"),
                n.e("31667"),
                n.e("13066"),
                n.e("26730"),
                n.e("18496"),
                n.e("21420"),
                n.e("93142"),
                n.e("21908"),
                n.e("72684"),
                n.e("64879"),
                n.e("27482"),
                n.e("1636"),
                n.e("70233"),
                n.e("59965"),
                n.e("94432"),
                n.e("10730"),
                n.e("81125"),
                n.e("69242"),
                n.e("17965"),
                n.e("57466"),
                n.e("88109"),
                n.e("20844"),
                n.e("44030"),
                n.e("12925"),
            ]).then(n.bind(n, 176019)),
        webpackId: 176019,
        name: "AppOverlay",
    });
    await o.open(c.f, (t) => (0, r.jsx)(e, { withTitleBar: !1, windowKey: t }), {
        outOfProcessOverlay: !0,
        focusable: !1,
    });
}
function _(e, t) {
    let i = (0, s.modalContextFromAppContext)(t);
    (0, s.openModalLazy)(
        async () => {
            let { default: i } = await n.e("68823").then(n.bind(n, 599466));
            return (n) => (0, r.jsx)(i, { ...n, location: e, appContext: t });
        },
        null != i ? { contextKey: i } : void 0,
    );
}
