let i, r;
n.d(t, { Z: () => _ }), n(411104);
var a = n(594174),
    s = n(195270);
let o = () => {
    throw Error('updateModal has not been implemented.');
};
{
    let e = n(169480);
    (i = e.showModal), (o = e.updateModalProps), (r = n(952265).Mr);
}
let l = 60008;
function u() {
    var e, t;
    return null !== (t = null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.mfaEnabled) && void 0 !== t && t;
}
function c(e, t) {
    return (e.body && e.body.code === l) || (t && 429 === e.status);
}
function d(e) {
    let { promiseFn: t, resolve: n, reject: a, modalProps: s = {}, hooks: { onEarlyClose: l } = {} } = e;
    if (null == i) {
        null == l || l();
        return;
    }
    let u = i(p, c, s);
    function c() {
        null == l || l();
    }
    function d(e) {
        r(u), n(e);
    }
    function _(e) {
        r(u), a(e);
    }
    function p(e) {
        return (
            o(u, p, c, {
                ...s,
                isLoading: !0
            }),
            f({
                promiseFn: t,
                resolve: d,
                reject: _,
                code: e,
                mfaCodeHandler: h,
                isModalOpen: !0
            })
        );
    }
    function h(e) {
        let { res: t } = e;
        o(u, p, c, {
            ...s,
            error: t.body.message
        });
    }
}
function f(e) {
    let { promiseFn: t, resolve: n, reject: i, code: r, mfaCodeHandler: a = d, isModalOpen: s = !1, ...o } = e;
    return t(null != r ? { code: r } : {}).then(n, (e) => {
        if (c(e, s))
            return a({
                promiseFn: t,
                resolve: n,
                reject: i,
                res: e,
                ...o
            });
        i(e);
    });
}
function _(e, t) {
    let { checkEnabled: n = u(), ...i } = null != t ? t : {};
    return new Promise((t, r) => {
        ((0, s.d)(n) ? d : f)({
            promiseFn: e,
            resolve: t,
            reject: r,
            ...i
        });
    });
}
