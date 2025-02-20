n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(838645);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let o = {
    showAgeVerification: (e) => {
        (0, a.ZDy)(async () => {
            let { default: t } = await n.e('12014').then(n.bind(n, 879367));
            return (n) => (0, r.jsx)(t, l({}, e, n));
        });
    },
    showAgeVerificationGetStartedModal: () => {
        (0, a.ZDy)(async () => {
            let { default: e } = await n.e('80144').then(n.bind(n, 634997));
            return (t) => (0, r.jsx)(e, l({}, t));
        });
    },
    shouldShowTiggerPawtect: function () {
        return (0, i.H1)({ location: 'age-verify-utils' });
    },
    useShouldShowTiggerPawtect: function () {
        return (0, i.s8)({ location: 'age-verify-utils' });
    }
};
