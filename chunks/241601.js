let r;
n.d(t, {
    Ql: () => l,
    R_: () => s,
    _2: () => c
}),
    n(653041),
    n(47120),
    n(301563);
var i = n(164484),
    o = n(372793),
    a = n(388032);
r = n(330711).Z;
let s = (0, o.F)((e, t) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    setLoadingStarted: (t) =>
        e({
            isLoading: !0,
            inProgressLocale: t
        }),
    setLoadingSucceeded: (n) => {
        let { inProgressLocale: r } = t();
        r === n &&
            e({
                isLoading: !1,
                inProgressLocale: void 0,
                error: void 0
            });
    },
    setLoadingFailed: (n, r) => {
        let { inProgressLocale: i } = t();
        i === r &&
            e({
                isLoading: !1,
                inProgressLocale: void 0,
                error: n
            });
    }
}));
function l(e) {
    return s.subscribe((t, n) => {
        null != n.inProgressLocale && null == t.inProgressLocale && null == t.error && e(n.inProgressLocale);
    });
}
async function c(e) {
    let t = s.getState();
    t.setLoadingStarted(e);
    let n = [];
    a.NW.setLocale(e), n.push((0, i.loadAllMessagesInLocale)(e)), null != r && (r.setLocale(e), n.push(r.loadPromise)), n.push(u(e)), n.push(d(e)), n.push(f(e)), await Promise.all(n).catch((n) => t.setLoadingFailed(n, e)), t.setLoadingSucceeded(e);
}
async function u(e) {
    let t = n(602473).q[e];
    if (null == t) return;
    let r = await t().default;
    {
        let { registerLocale: t } = n(674091);
        t(e, r);
    }
}
async function d(e) {
    let t = n(352968).y[e];
    null != t && (await t());
    let r = [],
        i = ('no' === e ? 'nb' : e).split('-');
    for (; i.length > 0; ) r.push(i.join('-')), i.pop();
    r.push('en-US'), n(913527).locale(r);
}
function f(e) {
    let { setTags: t } = n(960048).Z;
    return t({ locale: e }), Promise.resolve();
}
