let i;
n.d(t, { I: () => c, Av: () => u, hs: () => d, QO: () => h }), n(321073);
var r = n(632296),
    a = n(874373),
    s = n(882035),
    l = n(375708);
async function o() {
    return Promise.all([
        Promise.resolve().then(n.bind(n, 375708)),
        Promise.resolve().then(n.bind(n, 422411)),
        n.e("258327").then(n.bind(n, 678538)),
        n.e("240406").then(n.bind(n, 570165)),
        n.e("56366").then(n.bind(n, 583741)),
        n.e("203163").then(n.bind(n, 731094)),
        n.e("910486").then(n.bind(n, 986485)),
        n.e("152454").then(n.bind(n, 797669)),
        n.e("39404").then(n.bind(n, 807207)),
        n.e("118577").then(n.bind(n, 586760)),
        n.e("556967").then(n.bind(n, 268378)),
        Promise.resolve().then(n.bind(n, 270103)),
        n.e("11412").then(n.bind(n, 61567)),
        n.e("631608").then(n.bind(n, 545067)),
        n.e("816589").then(n.bind(n, 98908)),
        Promise.resolve().then(n.bind(n, 513687)),
        n.e("136022").then(n.bind(n, 25525)),
        n.e("793716").then(n.bind(n, 341535)),
        n.e("278424").then(n.bind(n, 556427)),
        n.e("337536").then(n.bind(n, 27267)),
        n.e("563824").then(n.bind(n, 235955)),
        Promise.resolve().then(n.bind(n, 39470)),
        n.e("267255").then(n.bind(n, 671210)),
        n.e("215890").then(n.bind(n, 57129)),
        n.e("665807").then(n.bind(n, 15762)),
        Promise.resolve().then(n.bind(n, 72191)),
        n.e("36395").then(n.bind(n, 175398)),
        n.e("481452").then(n.bind(n, 730215)),
        n.e("436303").then(n.bind(n, 375058)),
        n.e("307348").then(n.bind(n, 871423)),
        Promise.resolve().then(n.bind(n, 701974)),
        n.e("165697").then(n.bind(n, 969944)),
        n.e("552712").then(n.bind(n, 394107)),
        n.e("931319").then(n.bind(n, 905322)),
        n.e("844841").then(n.bind(n, 922704)),
        Promise.resolve().then(n.bind(n, 841365)),
        n.e("164776").then(n.bind(n, 876891)),
        n.e("436509").then(n.bind(n, 211180)),
        n.e("327198").then(n.bind(n, 887725)),
        Promise.resolve().then(n.bind(n, 148155)),
        n.e("806295").then(n.bind(n, 211850)),
        n.e("102807").then(n.bind(n, 559626)),
        n.e("208922").then(n.bind(n, 1889)),
        n.e("433186").then(n.bind(n, 579129)),
        n.e("979102").then(n.bind(n, 573549)),
        n.e("368358").then(n.bind(n, 22277)),
        n.e("270632").then(n.bind(n, 310235)),
        n.e("470556").then(n.bind(n, 334551)),
        n.e("993616").then(n.bind(n, 553875)),
        n.e("217951").then(n.bind(n, 181666)),
        n.e("643612").then(n.bind(n, 711127)),
        n.e("343550").then(n.bind(n, 206285)),
        n.e("825947").then(n.bind(n, 977110)),
        n.e("132436").then(n.bind(n, 943679)),
        n.e("824547").then(n.bind(n, 490094)),
        n.e("233517").then(n.bind(n, 186492)),
        n.e("652898").then(n.bind(n, 50617)),
        n.e("748543").then(n.bind(n, 846210)),
        n.e("389436").then(n.bind(n, 729079)),
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
    i.push("en-US"), n(536637).locale(i);
}
function h() {
    return d((e) => e.localeData) ?? a.default;
}
