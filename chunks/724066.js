(n.d(t, { I: () => c, Av: () => u, hs: () => d, QO: () => h }), n(321073));
var i = n(632296),
    r = n(874373),
    a = n(882035),
    s = n(855522),
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
        n.e("780558").then(n.bind(n, 95645)),
        n.e("937494").then(n.bind(n, 341621)),
        n.e("561547").then(n.bind(n, 436166)),
        n.e("772493").then(n.bind(n, 704796)),
        Promise.resolve().then(n.bind(n, 977241)),
        n.e("644154").then(n.bind(n, 104129)),
        n.e("394503").then(n.bind(n, 784890)),
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
        Promise.resolve().then(n.bind(n, 954874)),
        n.e("332229").then(n.bind(n, 225380)),
        Promise.resolve().then(n.bind(n, 799719)),
        Promise.resolve().then(n.bind(n, 737117)),
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
        n.e("572186").then(n.bind(n, 264865)),
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
        n.e("760971").then(n.bind(n, 4998)),
        n.e("170371").then(n.bind(n, 293838)),
        n.e("779226").then(n.bind(n, 673441)),
    ]);
}
let d = (0, a.h)((e, t) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    localeData: r.default,
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
    let r = [];
    (l.intl.setLocale(e),
        r.push(),
        r.push(
            (async () => {
                (await o(), await (0, i.loadAllMessagesInLocale)(e));
            })(),
        ),
        s.A.setLocale(e),
        r.push(s.A.loadPromise),
        r.push(_(e)),
        r.push(E(e)),
        r.push(A(e)),
        r.push(
            (function (e) {
                let { setTags: t } = n(38405).A;
                return (t({ locale: e }), Promise.resolve());
            })(e),
        ),
        await Promise.all(r).catch((n) => t.setLoadingFailed(n, e)),
        t.setLoadingSucceeded(e));
}
async function _(e) {
    let t = d.getState(),
        i = n(873382).v[e];
    if (null == i) return void t.setLocaleData(r.default);
    let a = await i();
    {
        let { registerLocale: t } = n(7467);
        t(e, a);
    }
    t.setLocaleData(a);
}
async function E(e) {}
async function A(e) {
    let t = n(608998).W[e];
    null != t && (await t());
    let i = [],
        r = ("no" === e ? "nb" : e).split("-");
    for (; r.length > 0;) (i.push(r.join("-")), r.pop());
    (i.push("en-US"), n(536637).locale(i));
}
function h() {
    return d((e) => e.localeData) ?? r.default;
}
