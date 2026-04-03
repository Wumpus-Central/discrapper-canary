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
                n.e("57174"),
                n.e("41927"),
                n.e("93812"),
                n.e("11478"),
                n.e("91757"),
                n.e("49924"),
                n.e("8555"),
                n.e("91652"),
                n.e("40396"),
                n.e("90365"),
                n.e("28936"),
                n.e("68859"),
                n.e("48330"),
                n.e("92414"),
                n.e("94857"),
                n.e("48840"),
                n.e("49559"),
                n.e("18976"),
                n.e("35139"),
                n.e("37372"),
                n.e("59135"),
                n.e("97283"),
                n.e("91139"),
                n.e("8018"),
                n.e("76122"),
                n.e("79463"),
                n.e("53662"),
                n.e("93142"),
                n.e("17537"),
                n.e("21420"),
                n.e("54816"),
                n.e("31646"),
                n.e("11902"),
                n.e("1636"),
                n.e("70144"),
                n.e("10730"),
                n.e("515"),
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
