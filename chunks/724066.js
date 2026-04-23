"use strict";
let i;
n.d(t, { I: () => _, Av: () => u, hs: () => d, QO: () => h }), n(321073);
var r = n(919523),
    s = n(874373),
    a = n(265690),
    o = n(985018);
async function l() {
    return Promise.all([
        Promise.resolve().then(n.bind(n, 985018)),
        Promise.resolve().then(n.bind(n, 571247)),
        Promise.resolve().then(n.bind(n, 327105)),
        n.e("81863").then(n.bind(n, 705018)),
        n.e("14122").then(n.bind(n, 625265)),
        n.e("14304").then(n.bind(n, 710787)),
        n.e("47555").then(n.bind(n, 16590)),
        Promise.resolve().then(n.bind(n, 661023)),
        n.e("34409").then(n.bind(n, 412848)),
        Promise.resolve().then(n.bind(n, 602339)),
        Promise.resolve().then(n.bind(n, 853513)),
        n.e("83488").then(n.bind(n, 693699)),
        n.e("9964").then(n.bind(n, 360615)),
        n.e("90020").then(n.bind(n, 437519)),
        Promise.resolve().then(n.bind(n, 221314)),
        n.e("10147").then(n.bind(n, 499214)),
        n.e("44414").then(n.bind(n, 395277)),
        Promise.resolve().then(n.bind(n, 693227)),
        n.e("22255").then(n.bind(n, 564082)),
        n.e("93016").then(n.bind(n, 837451)),
        n.e("46240").then(n.bind(n, 756195)),
        Promise.resolve().then(n.bind(n, 864386)),
        Promise.resolve().then(n.bind(n, 425548)),
        Promise.resolve().then(n.bind(n, 576709)),
        n.e("35027").then(n.bind(n, 783198)),
        n.e("67861").then(n.bind(n, 582068)),
        Promise.resolve().then(n.bind(n, 516761)),
        n.e("39353").then(n.bind(n, 452832)),
        Promise.resolve().then(n.bind(n, 466919)),
        n.e("62875").then(n.bind(n, 311350)),
        n.e("50163").then(n.bind(n, 911070)),
        n.e("31828").then(n.bind(n, 275007)),
        n.e("10142").then(n.bind(n, 490285)),
        n.e("42270").then(n.bind(n, 844045)),
        Promise.resolve().then(n.bind(n, 368662)),
        n.e("73746").then(n.bind(n, 224585)),
        n.e("88508").then(n.bind(n, 335993)),
        n.e("33249").then(n.bind(n, 365720)),
        n.e("44912").then(n.bind(n, 962995)),
        n.e("967").then(n.bind(n, 237146)),
        n.e("8304").then(n.bind(n, 594387)),
        n.e("30920").then(n.bind(n, 445563)),
        n.e("60658").then(n.bind(n, 430825)),
    ]);
}
i = n(855522).A;
let d = (0, a.h)((e, t) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    localeData: s.default,
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
function _(e) {
    return d.subscribe((t, n) => {
        null == n.inProgressLocale || null != t.inProgressLocale || (null == t.error && e(n.inProgressLocale));
    });
}
async function u(e) {
    let t = d.getState();
    t.setLoadingStarted(e);
    let s = [];
    o.intl.setLocale(e),
        s.push(),
        s.push(
            (async () => {
                await l(), await (0, r.loadAllMessagesInLocale)(e);
            })(),
        ),
        null != i && (i.setLocale(e), s.push(i.loadPromise)),
        s.push(c(e)),
        s.push(E(e)),
        s.push(
            (function (e) {
                let { setTags: t } = n(38405).A;
                return t({ locale: e }), Promise.resolve();
            })(e),
        ),
        await Promise.all(s).catch((n) => t.setLoadingFailed(n, e)),
        t.setLoadingSucceeded(e);
}
async function c(e) {
    let t = d.getState(),
        i = n(873382).v[e];
    if (null == i) return void t.setLocaleData(s.default);
    let r = await i();
    {
        let { registerLocale: t } = n(77967);
        t(e, r);
    }
    t.setLocaleData(r);
}
async function E(e) {
    let t = n(608998).W[e];
    null != t && (await t());
    let i = [],
        r = ("no" === e ? "nb" : e).split("-");
    for (; r.length > 0; ) i.push(r.join("-")), r.pop();
    i.push("en-US"), n(989349).locale(i);
}
function h() {
    return d((e) => e.localeData) ?? s.default;
}
