let i, a;
r.d(n, {
    Z: function () {
        return _;
    }
});
var o = r(411104);
var s = r(594174),
    l = r(195270);
let u = () => {
    throw Error('updateModal has not been implemented.');
};
{
    let e = r(169480);
    (i = e.showModal), (u = e.updateModalProps), (a = r(952265).Mr);
}
let c = 60008;
function d() {
    var e, n;
    return null !== (n = null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.mfaEnabled) && void 0 !== n && n;
}
function f(e, n) {
    return (e.body && e.body.code === c) || (n && 429 === e.status);
}
function p(e) {
    let { promiseFn: n, resolve: r, reject: o, modalProps: s = {}, hooks: { onEarlyClose: l } = {} } = e;
    if (null == i) {
        null == l || l();
        return;
    }
    let c = i(_, d, s);
    function d() {
        null == l || l();
    }
    function f(e) {
        a(c), r(e);
    }
    function p(e) {
        a(c), o(e);
    }
    function _(e) {
        return (
            u(c, _, d, {
                ...s,
                isLoading: !0
            }),
            h({
                promiseFn: n,
                resolve: f,
                reject: p,
                code: e,
                mfaCodeHandler: m,
                isModalOpen: !0
            })
        );
    }
    function m(e) {
        let { res: n } = e;
        u(c, _, d, {
            ...s,
            error: n.body.message
        });
    }
}
function h(e) {
    let { promiseFn: n, resolve: r, reject: i, code: a, mfaCodeHandler: o = p, isModalOpen: s = !1, ...l } = e;
    return n(null != a ? { code: a } : {}).then(r, (e) => {
        if (f(e, s))
            return o({
                promiseFn: n,
                resolve: r,
                reject: i,
                res: e,
                ...l
            });
        i(e);
    });
}
function _(e, n) {
    let { checkEnabled: r = d(), ...i } = null != n ? n : {};
    return new Promise((n, a) => {
        ((0, l.d)(r) ? p : h)({
            promiseFn: e,
            resolve: n,
            reject: a,
            ...i
        });
    });
}
