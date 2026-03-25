"use strict";
n.d(t, { b: () => _, o: () => d });
var r = n(627968);
n(64700);
var i = n(156828),
    s = n(397927),
    a = n(391973),
    o = n(574172),
    l = n(555528),
    u = n(644434),
    c = n(392164);
async function d() {
    let e = { outOfProcessOverlay: !0, focusable: !1 };
    (0, a.Vz)(u.G, l.A.getDefaultLayout(u.G, 4), 4);
    let t = (0, i.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("41927"),
                n.e("43965"),
                n.e("3795"),
                n.e("14138"),
                n.e("8555"),
                n.e("49924"),
                n.e("28936"),
                n.e("68859"),
                n.e("40396"),
                n.e("13088"),
                n.e("48330"),
                n.e("92414"),
                n.e("94857"),
                n.e("48840"),
                n.e("49559"),
                n.e("42006"),
                n.e("37372"),
                n.e("16783"),
                n.e("91139"),
                n.e("3183"),
                n.e("55948"),
                n.e("97283"),
                n.e("8018"),
                n.e("62452"),
                n.e("24202"),
                n.e("93142"),
                n.e("2057"),
                n.e("17537"),
                n.e("74352"),
                n.e("21420"),
                n.e("48592"),
                n.e("5873"),
                n.e("1636"),
                n.e("30819"),
                n.e("70144"),
                n.e("10730"),
                n.e("97127"),
                n.e("96170"),
                n.e("52694"),
                n.e("27482"),
                n.e("71447"),
                n.e("12925"),
            ]).then(n.bind(n, 176019)),
        webpackId: 176019,
        name: "AppOverlay",
    });
    await o.open(c.f, (e) => (0, r.jsx)(t, { withTitleBar: !1, windowKey: e }), e);
}
function _(e, t) {
    let i = (0, s.TId)(t);
    (0, s.mMO)(
        async () => {
            let { default: i } = await n.e("68823").then(n.bind(n, 599466));
            return (n) => (0, r.jsx)(i, { ...n, location: e, appContext: t });
        },
        null != i ? { contextKey: i } : void 0,
    );
}
