n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(704454),
    a = n(81643),
    s = n(469775);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = {
    showAgeVerification: (e) => {
        var { onClose: t } = e,
            o = f(e, ['onClose']);
        (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e('12014').then(n.bind(n, 879367));
                return (t) => (0, r.jsx)(e, c({}, o, t));
            },
            {
                modalKey: s.z,
                onCloseCallback: t
            }
        );
    },
    showAgeVerificationGetStartedModal: (e) => {
        if ((0, a.kJ)() && (0, o.G7)('age_verification_utils'))
            return void (0, i.ZDy)(async () => {
                let { default: t } = await n.e('22447').then(n.bind(n, 686768));
                return (n) => (0, r.jsx)(t, d(c({}, n), { entryPoint: e }));
            });
        (0, i.ZDy)(async () => {
            let { default: t } = await n.e('80144').then(n.bind(n, 634997));
            return (n) => (0, r.jsx)(t, d(c({}, n), { entryPoint: e }));
        });
    },
    openUrl: (e) => {
        window.open(e, '_blank');
    }
};
