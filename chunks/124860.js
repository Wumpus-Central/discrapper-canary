r.d(t, {
    Cd: () => p,
    YR: () => b
}),
    r(47120),
    r(411104);
var n = r(200651),
    l = r(192379),
    s = r(481060),
    i = r(447097),
    o = r(873124),
    a = r(248902),
    c = r(160511),
    u = r(51693),
    d = r(973810),
    f = r(388032);
function h(e) {
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
function m(e, t) {
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
function p(e) {
    var t, r;
    let { mfaChallenge: f, mfaFinish: p, onEarlyClose: g, onClose: b, width: j = 440 } = e,
        [y, x] = l.useState(null != (r = null == (t = f.methods[0]) ? void 0 : t.type) ? r : 'select'),
        [S, v] = l.useState(y),
        O = async (e) => {
            let { mfaType: t, data: r } = e;
            await p({
                mfaType: t,
                data: r,
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
    return (0, n.jsxs)(s.MyZ, {
        activeSlide: y,
        width: j,
        onSlideReady: v,
        children: [
            (0, n.jsx)(s.Mi4, {
                id: 'select',
                children: (0, n.jsx)(a.Z, h({}, C))
            }),
            (0, n.jsx)(s.Mi4, {
                id: 'webauthn',
                children: (0, n.jsx)(d.Z, h({}, C))
            }),
            (0, n.jsx)(s.Mi4, {
                id: 'totp',
                children: (0, n.jsx)(u.Z, m(h({}, C), { isSlideReady: 'totp' === S }))
            }),
            (0, n.jsx)(s.Mi4, {
                id: 'sms',
                children: (0, n.jsx)(c.Z, m(h({}, C), { isSlideReady: 'sms' === S }))
            }),
            (0, n.jsx)(s.Mi4, {
                id: 'backup',
                children: (0, n.jsx)(i.Z, m(h({}, C), { isSlideReady: 'backup' === S }))
            }),
            (0, n.jsx)(s.Mi4, {
                id: 'password',
                children: (0, n.jsx)(o.Z, m(h({}, C), { isSlideReady: 'password' === S }))
            })
        ]
    });
}
function g(e) {
    let { mfaChallenge: t, finish: r, transitionState: l, onClose: i } = e;
    return (0, n.jsx)(s.Y0X, {
        transitionState: l,
        size: s.CgR.SMALL,
        'aria-label': f.NW.string(f.t.saHocH),
        children: (0, n.jsx)(p, {
            mfaChallenge: t,
            mfaFinish: r,
            onClose: i,
            onEarlyClose: i
        })
    });
}
function b(e, t, r) {
    (0, s.h7j)(
        (r) =>
            (0, n.jsx)(
                g,
                h(
                    {
                        finish: t,
                        mfaChallenge: e
                    },
                    r
                )
            ),
        {
            onCloseCallback: () => {
                r(Error(f.NW.string(f.t.N2yb9f)));
            }
        }
    );
}
