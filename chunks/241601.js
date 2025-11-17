let r;
n.d(t, {
    Ql: () => u,
    R_: () => c,
    _2: () => d,
    jY: () => h,
}),
    n(539854),
    n(388685),
    n(35282);
var i = n(963225),
    a = n(150924),
    o = n(748521),
    s = n(388032),
    l = n(252517);
r = n(330711).Z;
let c = (0, o.F)((e, t) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    localeData: a.default,
    setLoadingStarted: (t) =>
        e({
            isLoading: !0,
            inProgressLocale: t,
        }),
    setLoadingSucceeded: (n) => {
        let { inProgressLocale: r } = t();
        r === n &&
            e({
                isLoading: !1,
                inProgressLocale: void 0,
                error: void 0,
            });
    },
    setLoadingFailed: (n, r) => {
        let { inProgressLocale: i } = t();
        i === r &&
            e({
                isLoading: !1,
                inProgressLocale: void 0,
                error: n,
            });
    },
    setLocaleData: (t) => {
        e({ localeData: t });
    },
}));
function u(e) {
    return c.subscribe((t, n) => {
        null != n.inProgressLocale && null == t.inProgressLocale && null == t.error && e(n.inProgressLocale);
    });
}
async function d(e) {
    let t = c.getState();
    t.setLoadingStarted(e);
    let n = [];
    s.intl.setLocale(e),
        n.push(),
        n.push(
            (async () => {
                await (0, l.f)(), await (0, i.loadAllMessagesInLocale)(e);
            })(),
        ),
        null != r && (r.setLocale(e), n.push(r.loadPromise)),
        n.push(f(e)),
        n.push(_(e)),
        n.push(p(e)),
        await Promise.all(n).catch((n) => t.setLoadingFailed(n, e)),
        t.setLoadingSucceeded(e);
}
async function f(e) {
    let t = c.getState(),
        r = n(602473).q[e];
    if (null == r) return void t.setLocaleData(a.default);
    let i = await r();
    {
        let { registerLocale: t } = n(74570);
        t(e, i);
    }
    t.setLocaleData(i);
}
async function _(e) {
    let t = n(352968).y[e];
    null != t && (await t());
    let r = [],
        i = ("no" === e ? "nb" : e).split("-");
    for (; i.length > 0; ) r.push(i.join("-")), i.pop();
    r.push("en-US"), n(913527).locale(r);
}
function p(e) {
    let { setTags: t } = n(960048).Z;
    return t({ locale: e }), Promise.resolve();
}
function h() {
    let e = c((e) => e.localeData);
    return null != e ? e : a.default;
}
