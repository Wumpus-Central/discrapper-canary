n.d(t, {
    Yn: () => o,
    ZP: () => c
}),
    n(415506);
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(981631);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function o() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, r.ZDy)(
            async () => {
                let { default: t } = await Promise.all([n.e('76540'), n.e('69422')]).then(n.bind(n, 628908));
                return (n) => (0, i.jsx)(t, a(l({}, n), { isTotp: e }));
            },
            {
                onCloseCallback: t,
                onCloseRequest: s.VqG
            }
        );
    });
}
let c = {
    enableMFA: async function () {
        await new Promise((e) => {
            (0, r.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e('91926'), n.e('23746')]).then(n.bind(n, 837651));
                return (n) => (0, i.jsx)(t, a(l({}, n), { handleEnableMFASuccess: e }));
            });
        }),
            await o();
    }
};
