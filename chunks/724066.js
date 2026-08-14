"use strict";
let i;
n.d(t, { I: () => c, Av: () => u, hs: () => d, QO: () => h }), n(321073);
var r = n(982253),
    a = n(874373),
    s = n(882035),
    l = n(375708);
async function o() {
    return Promise.all([
        Promise.resolve().then(n.bind(n, 375708)),
        Promise.resolve().then(n.bind(n, 571247)),
        n.e("266179").then(n.bind(n, 782926)),
        n.e("747834").then(n.bind(n, 327105)),
        n.e("281863").then(n.bind(n, 705018)),
        n.e("806338").then(n.bind(n, 776409)),
        n.e("814122").then(n.bind(n, 625265)),
        n.e("314304").then(n.bind(n, 710787)),
        n.e("6565").then(n.bind(n, 366340)),
        n.e("847555").then(n.bind(n, 16590)),
        Promise.resolve().then(n.bind(n, 662731)),
        n.e("468464").then(n.bind(n, 983283)),
        n.e("110004").then(n.bind(n, 661023)),
        n.e("534409").then(n.bind(n, 412848)),
        Promise.resolve().then(n.bind(n, 602339)),
        n.e("155314").then(n.bind(n, 853513)),
        n.e("183488").then(n.bind(n, 693699)),
        n.e("809964").then(n.bind(n, 360615)),
        n.e("290020").then(n.bind(n, 437519)),
        Promise.resolve().then(n.bind(n, 221314)),
        n.e("510147").then(n.bind(n, 499214)),
        n.e("44414").then(n.bind(n, 395277)),
        n.e("301691").then(n.bind(n, 567926)),
        Promise.resolve().then(n.bind(n, 693227)),
        n.e("222255").then(n.bind(n, 564082)),
        n.e("693016").then(n.bind(n, 837451)),
        n.e("386795").then(n.bind(n, 483110)),
        n.e("846240").then(n.bind(n, 756195)),
        Promise.resolve().then(n.bind(n, 864386)),
        n.e("479165").then(n.bind(n, 425548)),
        n.e("558724").then(n.bind(n, 275695)),
        n.e("435027").then(n.bind(n, 783198)),
        n.e("67861").then(n.bind(n, 582068)),
        Promise.resolve().then(n.bind(n, 516761)),
        n.e("239353").then(n.bind(n, 230451)),
        Promise.resolve().then(n.bind(n, 466919)),
        n.e("362875").then(n.bind(n, 311350)),
        n.e("950163").then(n.bind(n, 911070)),
        n.e("410142").then(n.bind(n, 490285)),
        n.e("142270").then(n.bind(n, 844045)),
        n.e("373746").then(n.bind(n, 224585)),
        n.e("690434").then(n.bind(n, 449817)),
        n.e("63052").then(n.bind(n, 806343)),
        n.e("844912").then(n.bind(n, 962995)),
        n.e("793004").then(n.bind(n, 933287)),
        n.e("108304").then(n.bind(n, 594387)),
        n.e("430920").then(n.bind(n, 445563)),
        n.e("560658").then(n.bind(n, 430825)),
        n.e("330167").then(n.bind(n, 802986)),
        n.e("250992").then(n.bind(n, 329139)),
        n.e("777487").then(n.bind(n, 774418)),
        n.e("945577").then(n.bind(n, 592080)),
        n.e("486726").then(n.bind(n, 818085)),
        n.e("959827").then(n.bind(n, 503582)),
        n.e("282328").then(n.bind(n, 240651)),
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
