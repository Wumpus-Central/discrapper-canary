let i;
r.d(n, {
    Ql: function () {
        return p;
    },
    R_: function () {
        return f;
    },
    _2: function () {
        return h;
    }
});
var a = r(653041);
var o = r(47120);
var s = r(969090);
var l = r(65400),
    u = r(388032),
    c = r(424395),
    d = r(689938);
i = r(330711).Z;
let f = (0, l.F)((e, n) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    setLoadingStarted: (n) =>
        e({
            isLoading: !0,
            inProgressLocale: n
        }),
    setLoadingSucceeded: (r) => {
        let { inProgressLocale: i } = n();
        i === r &&
            e({
                isLoading: !1,
                inProgressLocale: void 0,
                error: void 0
            });
    },
    setLoadingFailed: (r, i) => {
        let { inProgressLocale: a } = n();
        a === i &&
            e({
                isLoading: !1,
                inProgressLocale: void 0,
                error: r
            });
    }
}));
function p(e) {
    return f.subscribe((n, r) => {
        if (null != r.inProgressLocale && null == n.inProgressLocale) null == n.error && e(r.inProgressLocale);
    });
}
async function h(e) {
    let n = f.getState();
    n.setLoadingStarted(e);
    let r = [];
    c.vJ ? (u.intl.setLocale(e), r.push((0, s.loadAllMessagesInLocale)(e))) : (d.Z.setLocale(e), r.push(d.Z.loadPromise)), null != i && (i.setLocale(e), r.push(i.loadPromise)), r.push(_(e)), r.push(m(e)), r.push(g(e)), await Promise.all(r).catch((r) => n.setLoadingFailed(r, e)), n.setLoadingSucceeded(e);
}
async function _(e) {
    let n = r(602473).q[e];
    if (null == n) return;
    let i = await n().default;
    {
        let { registerLocale: n } = r(674091);
        n(e, i);
    }
}
async function m(e) {
    let n = r(352968).y[e];
    null != n && (await n());
    let i = [],
        a = ('no' === e ? 'nb' : e).split('-');
    for (; a.length > 0; ) i.push(a.join('-')), a.pop();
    i.push('en-US'), r(913527).locale(i);
}
function g(e) {
    let { setTags: n } = r(960048).Z;
    return n({ locale: e }), Promise.resolve();
}
