n.d(t, {
    Ay: () => c,
    sy: () => o,
}),
    n(65821);
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(652215);

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
        (0, l.mMO)(
            async () => {
                let { default: t } = await n.e("28429").then(n.bind(n, 549404));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        a(s({}, n), {
                            isTotp: e,
                        }),
                    );
            },
            {
                onCloseCallback: t,
                onCloseRequest: i.FXj,
            },
        );
    });
}
let c = {
    enableMFA: async function () {
        await new Promise((e) => {
            (0, l.mMO)(async () => {
                let { default: t } = await Promise.all([n.e("6665"), n.e("78811")]).then(n.bind(n, 333737));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        a(s({}, n), {
                            handleEnableMFASuccess: e,
                        }),
                    );
            });
        }),
            await o();
    },
};
