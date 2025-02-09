let i;
n.d(t, {
    Ql: () => l,
    R_: () => o,
    _2: () => u
}),
    n(653041),
    n(47120);
var r = n(852985),
    a = n(65400),
    s = n(388032);
i = n(330711).Z;
let o = (0, a.F)((e, t) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    setLoadingStarted: (t) =>
        e({
            isLoading: !0,
            inProgressLocale: t
        }),
    setLoadingSucceeded: (n) => {
        let { inProgressLocale: i } = t();
        i === n &&
            e({
                isLoading: !1,
                inProgressLocale: void 0,
                error: void 0
            });
    },
    setLoadingFailed: (n, i) => {
        let { inProgressLocale: r } = t();
        r === i &&
            e({
                isLoading: !1,
                inProgressLocale: void 0,
                error: n
            });
    }
}));
function l(e) {
    return o.subscribe((t, n) => {
        null != n.inProgressLocale && null == t.inProgressLocale && null == t.error && e(n.inProgressLocale);
    });
}
async function u(e) {
    let t = o.getState();
    t.setLoadingStarted(e);
    let n = [];
    s.intl.setLocale(e), n.push((0, r.loadAllMessagesInLocale)(e)), null != i && (i.setLocale(e), n.push(i.loadPromise)), n.push(c(e)), n.push(d(e)), n.push(f(e)), await Promise.all(n).catch((n) => t.setLoadingFailed(n, e)), t.setLoadingSucceeded(e);
}
async function c(e) {
    let t = n(602473).q[e];
    if (null == t) return;
    let i = await t().default;
    {
        let { registerLocale: t } = n(674091);
        t(e, i);
    }
}
async function d(e) {
    let t = n(352968).y[e];
    null != t && (await t());
    let i = [],
        r = ('no' === e ? 'nb' : e).split('-');
    for (; r.length > 0; ) i.push(r.join('-')), r.pop();
    i.push('en-US'), n(913527).locale(i);
}
function f(e) {
    let { setTags: t } = n(960048).Z;
    return t({ locale: e }), Promise.resolve();
}
