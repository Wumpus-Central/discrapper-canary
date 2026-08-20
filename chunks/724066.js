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
        Promise.resolve().then(n.bind(n, 762774)),
        n.e("90758").then(n.bind(n, 779365)),
        n.e("413789").then(n.bind(n, 893292)),
        n.e("667676").then(n.bind(n, 409175)),
        n.e("882082").then(n.bind(n, 925332)),
        n.e("974655").then(n.bind(n, 836226)),
        n.e("694629").then(n.bind(n, 242052)),
        n.e("688668").then(n.bind(n, 201623)),
        n.e("909686").then(n.bind(n, 37589)),
        Promise.resolve().then(n.bind(n, 665802)),
        n.e("646335").then(n.bind(n, 494210)),
        n.e("877169").then(n.bind(n, 207944)),
        n.e("743510").then(n.bind(n, 227893)),
        Promise.resolve().then(n.bind(n, 153648)),
        n.e("293017").then(n.bind(n, 794176)),
        n.e("188159").then(n.bind(n, 715138)),
        n.e("460011").then(n.bind(n, 179046)),
        n.e("382911").then(n.bind(n, 878274)),
        Promise.resolve().then(n.bind(n, 183313)),
        n.e("902758").then(n.bind(n, 796101)),
        n.e("177521").then(n.bind(n, 563528)),
        n.e("743698").then(n.bind(n, 869801)),
        Promise.resolve().then(n.bind(n, 231972)),
        n.e("743596").then(n.bind(n, 4967)),
        n.e("725375").then(n.bind(n, 102722)),
        n.e("540872").then(n.bind(n, 92539)),
        n.e("791387").then(n.bind(n, 236502)),
        Promise.resolve().then(n.bind(n, 618235)),
        n.e("175800").then(n.bind(n, 298411)),
        n.e("17263").then(n.bind(n, 667378)),
        n.e("439462").then(n.bind(n, 201605)),
        n.e("660580").then(n.bind(n, 794063)),
        Promise.resolve().then(n.bind(n, 878400)),
        n.e("247907").then(n.bind(n, 752622)),
        n.e("984136").then(n.bind(n, 990459)),
        Promise.resolve().then(n.bind(n, 948202)),
        n.e("532040").then(n.bind(n, 605819)),
        n.e("677348").then(n.bind(n, 501967)),
        n.e("162489").then(n.bind(n, 347936)),
        n.e("884969").then(n.bind(n, 955216)),
        n.e("783983").then(n.bind(n, 833394)),
        n.e("171375").then(n.bind(n, 867698)),
        n.e("369659").then(n.bind(n, 751286)),
        n.e("747131").then(n.bind(n, 125238)),
        n.e("566301").then(n.bind(n, 765612)),
        n.e("102057").then(n.bind(n, 463888)),
        n.e("411451").then(n.bind(n, 323318)),
        n.e("936731").then(n.bind(n, 592278)),
        n.e("157114").then(n.bind(n, 815681)),
        n.e("400819").then(n.bind(n, 927614)),
        n.e("669990").then(n.bind(n, 995269)),
        n.e("381396").then(n.bind(n, 897407)),
        n.e("166081").then(n.bind(n, 459864)),
        n.e("912876").then(n.bind(n, 964583)),
        n.e("154443").then(n.bind(n, 88646)),
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
