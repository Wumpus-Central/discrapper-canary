n.d(t, {
    Cd: () => p,
    YR: () => b
}),
    n(388685),
    n(415506);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    s = n(447097),
    o = n(873124),
    a = n(248902),
    c = n(160511),
    u = n(51693),
    d = n(973810),
    f = n(388032);
function h(e) {
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
function m(e, t) {
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
function p(e) {
    var t, n;
    let { mfaChallenge: f, mfaFinish: p, onEarlyClose: g, onClose: b, width: j = 440 } = e,
        [y, x] = l.useState(null != (n = null == (t = f.methods[0]) ? void 0 : t.type) ? n : 'select'),
        [S, v] = l.useState(y),
        O = async (e) => {
            let { mfaType: t, data: n } = e;
            await p({
                mfaType: t,
                data: n,
                ticket: f.ticket
            }),
                null != b && b();
        },
        C = {
            mfaChallenge: f,
            finish: O,
            setSlide: x,
            onClose: g
        };
    return (0, r.jsxs)(i.MyZ, {
        activeSlide: y,
        width: j,
        onSlideReady: v,
        children: [
            (0, r.jsx)(i.Mi4, {
                id: 'select',
                children: (0, r.jsx)(a.Z, h({}, C))
            }),
            (0, r.jsx)(i.Mi4, {
                id: 'webauthn',
                children: (0, r.jsx)(d.Z, h({}, C))
            }),
            (0, r.jsx)(i.Mi4, {
                id: 'totp',
                children: (0, r.jsx)(u.Z, m(h({}, C), { isSlideReady: 'totp' === S }))
            }),
            (0, r.jsx)(i.Mi4, {
                id: 'sms',
                children: (0, r.jsx)(c.Z, m(h({}, C), { isSlideReady: 'sms' === S }))
            }),
            (0, r.jsx)(i.Mi4, {
                id: 'backup',
                children: (0, r.jsx)(s.Z, m(h({}, C), { isSlideReady: 'backup' === S }))
            }),
            (0, r.jsx)(i.Mi4, {
                id: 'password',
                children: (0, r.jsx)(o.Z, m(h({}, C), { isSlideReady: 'password' === S }))
            })
        ]
    });
}
function g(e) {
    let { mfaChallenge: t, finish: n, transitionState: l, onClose: s } = e;
    return (0, r.jsx)(i.Y0X, {
        transitionState: l,
        size: i.CgR.SMALL,
        'aria-label': f.intl.string(f.t.saHocH),
        children: (0, r.jsx)(p, {
            mfaChallenge: t,
            mfaFinish: n,
            onClose: s,
            onEarlyClose: s
        })
    });
}
function b(e, t, n) {
    (0, i.h7j)(
        (n) =>
            (0, r.jsx)(
                g,
                h(
                    {
                        finish: t,
                        mfaChallenge: e
                    },
                    n
                )
            ),
        {
            onCloseCallback: () => {
                n(Error(f.intl.string(f.t.N2yb9f)));
            }
        }
    );
}
