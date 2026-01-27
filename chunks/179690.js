n.d(t, {
    Ay: () => c,
    sy: () => o,
}),
    n(65821);
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(652215);

function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        (0, s.mMO)(
            async () => {
                let { default: t } = await n.e("28429").then(n.bind(n, 549404));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        a(r({}, n), {
                            isTotp: e,
                        }),
                    );
            },
            {
                onCloseCallback: t,
                onCloseRequest: l.FXj,
            },
        );
    });
}
let c = {
    enableMFA: async function () {
        await new Promise((e) => {
            (0, s.mMO)(async () => {
                let { default: t } = await Promise.all([n.e("14882"), n.e("78811")]).then(n.bind(n, 333737));
                return (n) =>
                    (0, i.jsx)(
                        t,
                        a(r({}, n), {
                            handleEnableMFASuccess: e,
                        }),
                    );
            });
        }),
            await o();
    },
};
