n.d(t, { Z: () => d }), n(301563);
var r = n(200651);
n(192379);
var i = n(433517),
    o = n(481060),
    a = n(358085);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {
    show(e) {
        (0, o.ZDy)(async () => {
            let { default: t } = await n.e('2435').then(n.bind(n, 821606));
            return (n) => (0, r.jsx)(t, u(l({}, n), { url: e }));
        });
    },
    getBlockedDomains() {
        if ((0, a.isDesktop)()) {
            let e = i.K.get('BlockedDomainsV2');
            return Promise.resolve(null == e ? [] : e.split('\n'));
        }
        return Promise.resolve([]);
    },
    saveBlockedDomains(e) {
        (0, a.isDesktop)() && i.K.set('BlockedDomainsV2', e.join('\n'));
    }
};
