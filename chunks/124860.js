n.d(t, {
    Cd: () => m,
    YR: () => b,
}),
    n(388685),
    n(415506);
var l = n(54381),
    r = n(473749),
    i = n(481060),
    s = n(447097),
    a = n(873124),
    o = n(248902),
    d = n(160511),
    u = n(51693),
    c = n(973810),
    h = n(388032);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function g(e, t) {
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
function m(e) {
    var t, n;
    let { mfaChallenge: h, mfaFinish: m, onEarlyClose: p, onClose: b, headerAlignStart: S, width: x = 440 } = e,
        [j, y] = r.useState(null != (n = null == (t = h.methods[0]) ? void 0 : t.type) ? n : "select"),
        [v, C] = r.useState(j),
        Z = async (e) => {
            let { mfaType: t, data: n } = e;
            await m({
                mfaType: t,
                data: n,
                ticket: h.ticket,
            }),
                null != b && b();
        },
        w = {
            mfaChallenge: h,
            finish: Z,
            setSlide: y,
            onClose: p,
            headerAlignStart: S,
        };
    return (0, l.jsxs)(i.MyZ, {
        activeSlide: j,
        width: x,
        onSlideReady: C,
        children: [
            (0, l.jsx)(i.Mi4, {
                id: "select",
                children: (0, l.jsx)(o.Z, f({}, w)),
            }),
            (0, l.jsx)(i.Mi4, {
                id: "webauthn",
                children: (0, l.jsx)(c.Z, f({}, w)),
            }),
            (0, l.jsx)(i.Mi4, {
                id: "totp",
                children: (0, l.jsx)(u.Z, g(f({}, w), { isSlideReady: "totp" === v })),
            }),
            (0, l.jsx)(i.Mi4, {
                id: "sms",
                children: (0, l.jsx)(d.Z, g(f({}, w), { isSlideReady: "sms" === v })),
            }),
            (0, l.jsx)(i.Mi4, {
                id: "backup",
                children: (0, l.jsx)(s.Z, g(f({}, w), { isSlideReady: "backup" === v })),
            }),
            (0, l.jsx)(i.Mi4, {
                id: "password",
                children: (0, l.jsx)(a.Z, g(f({}, w), { isSlideReady: "password" === v })),
            }),
        ],
    });
}
function p(e) {
    let { mfaChallenge: t, finish: n, transitionState: r, onClose: s } = e;
    return (0, l.jsx)(i.Y0X, {
        transitionState: r,
        size: i.CgR.SMALL,
        "aria-label": h.intl.string(h.t.saHocI),
        parentComponent: "MFAModal",
        children: (0, l.jsx)(m, {
            mfaChallenge: t,
            mfaFinish: n,
            onClose: s,
            onEarlyClose: s,
        }),
    });
}
function b(e, t, n) {
    (0, i.h7j)(
        (n) =>
            (0, l.jsx)(
                p,
                f(
                    {
                        finish: t,
                        mfaChallenge: e,
                    },
                    n,
                ),
            ),
        {
            onCloseCallback: () => {
                n(Error(h.intl.string(h.t.N2yb9a)));
            },
        },
    );
}
