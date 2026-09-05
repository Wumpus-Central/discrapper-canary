let i;
n.d(t, { I: () => c, Av: () => u, hs: () => d, QO: () => h }), n(321073);
var r = n(632296),
    a = n(874373),
    s = n(882035),
    l = n(375708);
async function o() {
    return Promise.all([
        Promise.resolve().then(n.bind(n, 375708)),
        Promise.resolve().then(n.bind(n, 314341)),
        n.e("135001").then(n.bind(n, 48448)),
        n.e("341448").then(n.bind(n, 419259)),
        n.e("264572").then(n.bind(n, 649975)),
        n.e("155841").then(n.bind(n, 536984)),
        n.e("716460").then(n.bind(n, 693351)),
        n.e("230880").then(n.bind(n, 438691)),
        n.e("937494").then(n.bind(n, 341621)),
        n.e("561547").then(n.bind(n, 436166)),
        n.e("772493").then(n.bind(n, 704796)),
        Promise.resolve().then(n.bind(n, 977241)),
        n.e("644154").then(n.bind(n, 104129)),
        n.e("757238").then(n.bind(n, 893845)),
        n.e("170571").then(n.bind(n, 376134)),
        Promise.resolve().then(n.bind(n, 273665)),
        n.e("117268").then(n.bind(n, 356863)),
        n.e("41298").then(n.bind(n, 805161)),
        n.e("398082").then(n.bind(n, 95769)),
        n.e("254150").then(n.bind(n, 719589)),
        n.e("289982").then(n.bind(n, 473933)),
        Promise.resolve().then(n.bind(n, 256416)),
        n.e("620689").then(n.bind(n, 25448)),
        n.e("525416").then(n.bind(n, 968987)),
        n.e("203041").then(n.bind(n, 63928)),
        Promise.resolve().then(n.bind(n, 328157)),
        n.e("803461").then(n.bind(n, 144612)),
        n.e("358114").then(n.bind(n, 728441)),
        n.e("875997").then(n.bind(n, 227564)),
        n.e("641066").then(n.bind(n, 645617)),
        Promise.resolve().then(n.bind(n, 763052)),
        n.e("709703").then(n.bind(n, 637818)),
        n.e("475166").then(n.bind(n, 344045)),
        n.e("869853").then(n.bind(n, 431788)),
        n.e("591751").then(n.bind(n, 954874)),
        Promise.resolve().then(n.bind(n, 799719)),
        n.e("417886").then(n.bind(n, 78637)),
        n.e("554571").then(n.bind(n, 121286)),
        n.e("25212").then(n.bind(n, 680439)),
        Promise.resolve().then(n.bind(n, 259589)),
        n.e("919885").then(n.bind(n, 538524)),
        n.e("826001").then(n.bind(n, 545704)),
        n.e("544104").then(n.bind(n, 249755)),
        n.e("710984").then(n.bind(n, 433083)),
        n.e("163048").then(n.bind(n, 436763)),
        n.e("400744").then(n.bind(n, 384539)),
        n.e("587598").then(n.bind(n, 14429)),
        n.e("353266").then(n.bind(n, 810889)),
        n.e("377022").then(n.bind(n, 428685)),
        n.e("724285").then(n.bind(n, 182732)),
        n.e("390098").then(n.bind(n, 871273)),
        n.e("141432").then(n.bind(n, 621547)),
        n.e("93857").then(n.bind(n, 811448)),
        n.e("808810").then(n.bind(n, 798705)),
        n.e("898377").then(n.bind(n, 670064)),
        n.e("840631").then(n.bind(n, 282858)),
        n.e("757364").then(n.bind(n, 759967)),
        n.e("72289").then(n.bind(n, 791928)),
        n.e("814222").then(n.bind(n, 158301)),
        n.e("799949").then(n.bind(n, 347932)),
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
