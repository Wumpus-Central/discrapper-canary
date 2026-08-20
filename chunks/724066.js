"use strict";
let i;
n.d(t, { I: () => c, Av: () => u, hs: () => d, QO: () => h }), n(321073);
var r = n(173875),
    a = n(874373),
    s = n(882035),
    l = n(375708);
async function o() {
    return Promise.all([
        Promise.resolve().then(n.bind(n, 375708)),
        Promise.resolve().then(n.bind(n, 528399)),
        n.e("47587").then(n.bind(n, 401262)),
        n.e("950106").then(n.bind(n, 477729)),
        n.e("157031").then(n.bind(n, 127898)),
        n.e("882722").then(n.bind(n, 832505)),
        n.e("807754").then(n.bind(n, 247569)),
        n.e("531296").then(n.bind(n, 522851)),
        n.e("308421").then(n.bind(n, 715556)),
        n.e("864931").then(n.bind(n, 711918)),
        Promise.resolve().then(n.bind(n, 1195)),
        n.e("548560").then(n.bind(n, 125075)),
        n.e("356948").then(n.bind(n, 811967)),
        n.e("811817").then(n.bind(n, 56400)),
        Promise.resolve().then(n.bind(n, 670595)),
        n.e("73874").then(n.bind(n, 641641)),
        n.e("207264").then(n.bind(n, 270115)),
        n.e("274380").then(n.bind(n, 216583)),
        n.e("152836").then(n.bind(n, 542127)),
        Promise.resolve().then(n.bind(n, 544482)),
        n.e("469155").then(n.bind(n, 530478)),
        n.e("832414").then(n.bind(n, 527533)),
        n.e("759579").then(n.bind(n, 621590)),
        Promise.resolve().then(n.bind(n, 767243)),
        n.e("104143").then(n.bind(n, 249938)),
        n.e("114680").then(n.bind(n, 525227)),
        n.e("558667").then(n.bind(n, 214598)),
        n.e("956096").then(n.bind(n, 776131)),
        Promise.resolve().then(n.bind(n, 955298)),
        n.e("27613").then(n.bind(n, 731308)),
        n.e("89892").then(n.bind(n, 632847)),
        n.e("934771").then(n.bind(n, 292670)),
        n.e("385653").then(n.bind(n, 862292)),
        Promise.resolve().then(n.bind(n, 800121)),
        n.e("632364").then(n.bind(n, 929895)),
        n.e("541273").then(n.bind(n, 254656)),
        Promise.resolve().then(n.bind(n, 109447)),
        n.e("30939").then(n.bind(n, 477014)),
        n.e("380339").then(n.bind(n, 685054)),
        n.e("203070").then(n.bind(n, 131277)),
        n.e("386846").then(n.bind(n, 31021)),
        n.e("735186").then(n.bind(n, 404009)),
        n.e("341154").then(n.bind(n, 266361)),
        n.e("414316").then(n.bind(n, 221799)),
        n.e("595344").then(n.bind(n, 555091)),
        n.e("660748").then(n.bind(n, 477767)),
        n.e("396656").then(n.bind(n, 378803)),
        n.e("896232").then(n.bind(n, 652699)),
        n.e("756210").then(n.bind(n, 680649)),
        n.e("107671").then(n.bind(n, 736906)),
        n.e("541008").then(n.bind(n, 463123)),
        n.e("993199").then(n.bind(n, 383282)),
        n.e("955529").then(n.bind(n, 444848)),
        n.e("176358").then(n.bind(n, 295813)),
        n.e("155571").then(n.bind(n, 472574)),
        n.e("345464").then(n.bind(n, 93483)),
    ]);
}
i = n(855522).A;
let d = (0, s.h)((e, t) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    localeData: a.default,
    setLoadingStarted: (t) => e({ isLoading: !0, inProgressLocale: t }),
    setLoadingSucceeded: (n) => {
        let { inProgressLocale: i } = t();
        i === n && e({ isLoading: !1, inProgressLocale: void 0, error: void 0 });
    },
    setLoadingFailed: (n, i) => {
        let { inProgressLocale: r } = t();
        r === i && e({ isLoading: !1, inProgressLocale: void 0, error: n });
    },
    setLocaleData: (t) => {
        e({ localeData: t });
    },
}));
function c(e) {
    return d.subscribe((t, n) => {
        null == n.inProgressLocale || null != t.inProgressLocale || (null == t.error && e(n.inProgressLocale));
    });
}
async function u(e) {
    let t = d.getState();
    t.setLoadingStarted(e);
    let a = [];
    l.intl.setLocale(e),
        a.push(),
        a.push(
            (async () => {
                await o(), await (0, r.loadAllMessagesInLocale)(e);
            })(),
        ),
        null != i && (i.setLocale(e), a.push(i.loadPromise)),
        a.push(_(e)),
        a.push(E(e)),
        a.push(A(e)),
        a.push(
            (function (e) {
                let { setTags: t } = n(38405).A;
                return t({ locale: e }), Promise.resolve();
            })(e),
        ),
        await Promise.all(a).catch((n) => t.setLoadingFailed(n, e)),
        t.setLoadingSucceeded(e);
}
async function _(e) {
    let t = d.getState(),
        i = n(873382).v[e];
    if (null == i) return void t.setLocaleData(a.default);
    let r = await i();
    {
        let { registerLocale: t } = n(7467);
        t(e, r);
    }
    t.setLocaleData(r);
}
async function E(e) {}
async function A(e) {
    let t = n(608998).W[e];
    null != t && (await t());
    let i = [],
        r = ("no" === e ? "nb" : e).split("-");
    for (; r.length > 0; ) i.push(r.join("-")), r.pop();
    i.push("en-US"), n(989349).locale(i);
}
function h() {
    return d((e) => e.localeData) ?? a.default;
}
