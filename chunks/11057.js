"use strict";
let r;
n.d(t, { Av: () => d, I: () => c, QO: () => h, hs: () => u }), n(321073);
var i = n(932433),
    a = n(113309),
    s = n(265690),
    o = n(985018),
    l = n(815680);
r = n(855522).A;
let u = (0, s.h)((e, t) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    localeData: a.default,
    setLoadingStarted: (t) => e({ isLoading: !0, inProgressLocale: t }),
    setLoadingSucceeded: (n) => {
        let { inProgressLocale: r } = t();
        r === n && e({ isLoading: !1, inProgressLocale: void 0, error: void 0 });
    },
    setLoadingFailed: (n, r) => {
        let { inProgressLocale: i } = t();
        i === r && e({ isLoading: !1, inProgressLocale: void 0, error: n });
    },
    setLocaleData: (t) => {
        e({ localeData: t });
    },
}));
function c(e) {
    return u.subscribe((t, n) => {
        null == n.inProgressLocale || null != t.inProgressLocale || (null == t.error && e(n.inProgressLocale));
    });
}
async function d(e) {
    let t = u.getState();
    t.setLoadingStarted(e);
    let n = [];
    o.intl.setLocale(e),
        n.push(),
        n.push(
            (async () => {
                await (0, l.O)(), await (0, i.loadAllMessagesInLocale)(e);
            })(),
        ),
        null != r && (r.setLocale(e), n.push(r.loadPromise)),
        n.push(_(e)),
        n.push(f(e)),
        n.push(p(e)),
        await Promise.all(n).catch((n) => t.setLoadingFailed(n, e)),
        t.setLoadingSucceeded(e);
}
async function _(e) {
    let t = u.getState(),
        r = n(873382).v[e];
    if (null == r) return void t.setLocaleData(a.default);
    let i = await r();
    {
        let { registerLocale: t } = n(77967);
        t(e, i);
    }
    t.setLocaleData(i);
}
async function f(e) {
    let t = n(608998).W[e];
    null != t && (await t());
    let r = [],
        i = ("no" === e ? "nb" : e).split("-");
    for (; i.length > 0; ) r.push(i.join("-")), i.pop();
    r.push("en-US"), n(989349).locale(r);
}
function p(e) {
    let { setTags: t } = n(728458).A;
    return t({ locale: e }), Promise.resolve();
}
function h() {
    return u((e) => e.localeData) ?? a.default;
}
