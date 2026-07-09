"use strict";
let i;
n.d(t, { I: () => c, Av: () => u, hs: () => d, QO: () => h }), n(321073);
var r = n(919523),
    a = n(874373),
    s = n(265690),
    l = n(375708);
async function o() {
    return Promise.all([
        Promise.resolve().then(n.bind(n, 375708)),
        Promise.resolve().then(n.bind(n, 458206)),
        n.e("2773").then(n.bind(n, 982772)),
        n.e("71268").then(n.bind(n, 961903)),
        n.e("36845").then(n.bind(n, 743292)),
        n.e("2247").then(n.bind(n, 69626)),
        n.e("82013").then(n.bind(n, 864204)),
        n.e("28724").then(n.bind(n, 687583)),
        Promise.resolve().then(n.bind(n, 788077)),
        n.e("4223").then(n.bind(n, 189090)),
        Promise.resolve().then(n.bind(n, 116112)),
        n.e("72974").then(n.bind(n, 603773)),
        Promise.resolve().then(n.bind(n, 477480)),
        Promise.resolve().then(n.bind(n, 645704)),
        n.e("94599").then(n.bind(n, 163930)),
        Promise.resolve().then(n.bind(n, 322798)),
        n.e("28967").then(n.bind(n, 64666)),
        Promise.resolve().then(n.bind(n, 297897)),
        n.e("96766").then(n.bind(n, 21197)),
        n.e("27705").then(n.bind(n, 900640)),
        n.e("95530").then(n.bind(n, 289489)),
        Promise.resolve().then(n.bind(n, 491404)),
        n.e("59172").then(n.bind(n, 111215)),
        n.e("27079").then(n.bind(n, 931642)),
        n.e("50720").then(n.bind(n, 15395)),
        n.e("2179").then(n.bind(n, 405198)),
        Promise.resolve().then(n.bind(n, 745699)),
        n.e("38912").then(n.bind(n, 316771)),
        Promise.resolve().then(n.bind(n, 76660)),
        n.e("54574").then(n.bind(n, 244957)),
        n.e("80012").then(n.bind(n, 873063)),
        Promise.resolve().then(n.bind(n, 432632)),
        n.e("41520").then(n.bind(n, 566707)),
        Promise.resolve().then(n.bind(n, 963458)),
        n.e("56048").then(n.bind(n, 458899)),
        n.e("428").then(n.bind(n, 41959)),
        n.e("47521").then(n.bind(n, 587416)),
        n.e("2481").then(n.bind(n, 301454)),
        Promise.resolve().then(n.bind(n, 152429)),
        n.e("19303").then(n.bind(n, 655450)),
        n.e("42613").then(n.bind(n, 574004)),
        n.e("98627").then(n.bind(n, 778414)),
        n.e("13762").then(n.bind(n, 151001)),
        n.e("95569").then(n.bind(n, 865096)),
        Promise.resolve().then(n.bind(n, 639790)),
        n.e("45587").then(n.bind(n, 580350)),
        n.e("56898").then(n.bind(n, 843929)),
        n.e("50235").then(n.bind(n, 671702)),
        n.e("93678").then(n.bind(n, 559965)),
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
        let { registerLocale: t } = n(77967);
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
