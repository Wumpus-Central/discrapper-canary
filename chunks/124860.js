(n.d(t, {
    Cd: () => g,
    YR: () => p
}),
    n(388685),
    n(415506));
var l = n(255367),
    r = n(73800),
    s = n(481060),
    i = n(447097),
    a = n(873124),
    o = n(248902),
    d = n(160511),
    c = n(51693),
    u = n(973810),
    h = n(388032);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    var t, n;
    let { mfaChallenge: h, mfaFinish: g, onEarlyClose: x, onClose: p, width: j = 440 } = e,
        [b, y] = r.useState(null != (n = null == (t = h.methods[0]) ? void 0 : t.type) ? n : 'select'),
        [S, v] = r.useState(b),
        C = async (e) => {
            let { mfaType: t, data: n } = e;
            (await g({
                mfaType: t,
                data: n,
                ticket: h.ticket
            }),
                null != p && p());
        },
        Z = {
            mfaChallenge: h,
            finish: C,
            setSlide: y,
            onClose: x
        };
    return (0, l.jsxs)(s.MyZ, {
        activeSlide: b,
        width: j,
        onSlideReady: v,
        children: [
            (0, l.jsx)(s.Mi4, {
                id: 'select',
                children: (0, l.jsx)(o.Z, f({}, Z))
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'webauthn',
                children: (0, l.jsx)(u.Z, f({}, Z))
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'totp',
                children: (0, l.jsx)(c.Z, m(f({}, Z), { isSlideReady: 'totp' === S }))
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'sms',
                children: (0, l.jsx)(d.Z, m(f({}, Z), { isSlideReady: 'sms' === S }))
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'backup',
                children: (0, l.jsx)(i.Z, m(f({}, Z), { isSlideReady: 'backup' === S }))
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'password',
                children: (0, l.jsx)(a.Z, m(f({}, Z), { isSlideReady: 'password' === S }))
            })
        ]
    });
}
function x(e) {
    let { mfaChallenge: t, finish: n, transitionState: r, onClose: i } = e;
    return (0, l.jsx)(s.Y0X, {
        transitionState: r,
        size: s.CgR.SMALL,
        'aria-label': h.intl.string(h.t.saHocH),
        parentComponent: 'MFAModal',
        children: (0, l.jsx)(g, {
            mfaChallenge: t,
            mfaFinish: n,
            onClose: i,
            onEarlyClose: i
        })
    });
}
function p(e, t, n) {
    (0, s.h7j)(
        (n) =>
            (0, l.jsx)(
                x,
                f(
                    {
                        finish: t,
                        mfaChallenge: e
                    },
                    n
                )
            ),
        {
            onCloseCallback: () => {
                n(Error(h.intl.string(h.t.N2yb9f)));
            }
        }
    );
}
