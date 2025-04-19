let r;
n.d(t, {
    Ql: () => c,
    R_: () => l,
    _2: () => u
}),
    n(539854),
    n(388685),
    n(35282);
var i = n(164484),
    a = n(993192),
    o = n(388032),
    s = n(252517);
r = n(330711).Z;
let l = (0, a.F)((e, t) => ({
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
function c(e) {
    return l.subscribe((t, n) => {
        null != n.inProgressLocale && null == t.inProgressLocale && null == t.error && e(n.inProgressLocale);
    });
}
async function u(e) {
    let t = l.getState();
    t.setLoadingStarted(e);
    let n = [];
    o.intl.setLocale(e),
        n.push(),
        n.push(
            (async () => {
                await (0, s.f)(), await (0, i.loadAllMessagesInLocale)(e);
            })()
        ),
        null != r && (r.setLocale(e), n.push(r.loadPromise)),
        n.push(d(e)),
        n.push(f(e)),
        n.push(_(e)),
        await Promise.all(n).catch((n) => t.setLoadingFailed(n, e)),
        t.setLoadingSucceeded(e);
}
async function d(e) {
    let t = n(602473).q[e];
    if (null == t) return;
    let r = await t().default;
    {
        let { registerLocale: t } = n(674091);
        t(e, r);
    }
}
async function f(e) {
    let t = n(352968).y[e];
    null != t && (await t());
    let r = [],
        i = ('no' === e ? 'nb' : e).split('-');
    for (; i.length > 0; ) r.push(i.join('-')), i.pop();
    r.push('en-US'), n(913527).locale(r);
}
function _(e) {
    let { setTags: t } = n(960048).Z;
    return t({ locale: e }), Promise.resolve();
}
