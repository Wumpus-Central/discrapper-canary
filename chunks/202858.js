r.d(t, {
    Yn: () => y,
    ZP: () => p
}),
    r(411104),
    r(47120);
var n = r(200651),
    i = r(192379),
    o = r(283693),
    l = r(481060),
    c = r(816814),
    a = r(981631),
    s = r(388032);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function b(e) {
    var { onError: t, onSuccess: r, PasswordConfirm: l } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['onError', 'onSuccess', 'PasswordConfirm']);
    let [y, p] = i.useState('');
    return (0, n.jsx)(
        l,
        u(d({}, b), {
            handleSubmit: (e) => c.Z.enableMFAStart(e),
            onError: (e) => {
                ('object' == typeof e && null != e && (0, o.nr)(e, 'code') && 'number' == typeof e.code ? e.code : 0) === a.evJ.MFA_INVALID_SECRET ? (r(y), b.onClose()) : t(e);
            },
            onPasswordChange: p,
            title: s.NW.string(s.t.cDgKtb),
            actionText: s.NW.string(s.t['3PatS0']),
            skipErrorMsgAbortCode: a.evJ.MFA_INVALID_SECRET
        })
    );
}
function y() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((t) => {
        (0, l.ZDy)(
            async () => {
                let { default: t } = await Promise.all([r.e('76540'), r.e('26660')]).then(r.bind(r, 628908));
                return (r) => (0, n.jsx)(t, u(d({}, r), { isTotp: e }));
            },
            {
                onCloseCallback: t,
                onCloseRequest: a.VqG
            }
        );
    });
}
let p = {
    enableMFA: async function () {
        let e = await new Promise((e, t) => {
            (0, l.ZDy)(async () => {
                let { default: i } = await r.e('24642').then(r.bind(r, 279837));
                return (r) =>
                    (0, n.jsx)(
                        b,
                        u(d({}, r), {
                            onSuccess: e,
                            onError: t,
                            PasswordConfirm: i
                        })
                    );
            });
        });
        await new Promise((t) => {
            (0, l.ZDy)(async () => {
                let { default: i } = await Promise.all([r.e('62729'), r.e('23746')]).then(r.bind(r, 837651));
                return (r) =>
                    (0, n.jsx)(
                        i,
                        u(d({}, r), {
                            password: e,
                            handleEnableMFASuccess: t
                        })
                    );
            });
        }),
            await y();
    }
};
