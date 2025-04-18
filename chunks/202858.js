n.d(t, {
    Yn: () => o,
    ZP: () => c
}),
    n(415506);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(981631);
function a(e) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
        (0, i.ZDy)(
            async () => {
                let { default: t } = await Promise.all([n.e('76540'), n.e('59787')]).then(n.bind(n, 628908));
                return (n) => (0, r.jsx)(t, l(a({}, n), { isTotp: e }));
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
            (0, i.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e('53419'), n.e('23746')]).then(n.bind(n, 837651));
                return (n) => (0, r.jsx)(t, l(a({}, n), { handleEnableMFASuccess: e }));
            });
        }),
            await o();
    }
};
