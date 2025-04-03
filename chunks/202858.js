n.d(t, {
    Yn: () => g,
    ZP: () => p
}),
    n(411104),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(283693),
    a = n(481060),
    l = n(816814),
    o = n(981631),
    c = n(388032);
function d(e) {
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
function u(e, t) {
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
function m(e) {
    var { onError: t, onSuccess: n, PasswordConfirm: a } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['onError', 'onSuccess', 'PasswordConfirm']);
    let [g, p] = i.useState('');
    return (0, r.jsx)(
        a,
        u(d({}, m), {
            handleSubmit: (e) => l.Z.enableMFAStart(e),
            onError: (e) => {
                ('object' == typeof e && null != e && (0, s.nr)(e, 'code') && 'number' == typeof e.code ? e.code : 0) === o.evJ.MFA_INVALID_SECRET ? (n(g), m.onClose()) : t(e);
            },
            onPasswordChange: p,
            title: c.NW.string(c.t.cDgKtb),
            actionText: c.NW.string(c.t['3PatS0']),
            skipErrorMsgAbortCode: o.evJ.MFA_INVALID_SECRET
        })
    );
}
function g() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, a.ZDy)(
            async () => {
                let { default: t } = await Promise.all([n.e('76540'), n.e('69422')]).then(n.bind(n, 628908));
                return (n) => (0, r.jsx)(t, u(d({}, n), { isTotp: e }));
            },
            {
                onCloseCallback: t,
                onCloseRequest: o.VqG
            }
        );
    });
}
let p = {
    enableMFA: async function () {
        let e = await new Promise((e, t) => {
            (0, a.ZDy)(async () => {
                let { default: i } = await n.e('24642').then(n.bind(n, 279837));
                return (n) =>
                    (0, r.jsx)(
                        m,
                        u(d({}, n), {
                            onSuccess: e,
                            onError: t,
                            PasswordConfirm: i
                        })
                    );
            });
        });
        await new Promise((t) => {
            (0, a.ZDy)(async () => {
                let { default: i } = await Promise.all([n.e('53419'), n.e('23746')]).then(n.bind(n, 837651));
                return (n) =>
                    (0, r.jsx)(
                        i,
                        u(d({}, n), {
                            password: e,
                            handleEnableMFASuccess: t
                        })
                    );
            });
        }),
            await g();
    }
};
