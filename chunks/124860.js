n.d(t, {
    C: () => b,
    MFAModal: () => p,
    Y: () => j,
}),
    n(388685),
    n(415506);
var r = n(54381),
    l = n(473749),
    i = n(481060),
    s = n(949399),
    a = n(447097),
    o = n(873124),
    c = n(248902),
    d = n(160511),
    u = n(51693),
    f = n(973810),
    h = n(388032);
function g(e) {
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
function b(e) {
    var t, n;
    let { mfaChallenge: h, mfaFinish: b, onEarlyClose: p, onClose: j, headerAlignStart: y, width: x = 440 } = e,
        [S, v] = l.useState(null != (n = null == (t = h.methods[0]) ? void 0 : t.type) ? n : "select"),
        [C, Z] = l.useState(S),
        O = async (e) => {
            let { mfaType: t, data: n } = e;
            await b({
                mfaType: t,
                data: n,
                ticket: h.ticket,
            }),
                null != j && j();
        },
        w = {
            mfaChallenge: h,
            finish: O,
            setSlide: v,
            onClose: p,
            headerAlignStart: y,
        };
    return (0, r.jsxs)(i.MyZ, {
        activeSlide: S,
        width: x,
        onSlideReady: Z,
        children: [
            (0, r.jsx)(i.Mi4, {
                id: "select",
                children: (0, r.jsx)(c.Z, g({}, w)),
            }),
            (0, r.jsx)(i.Mi4, {
                id: "webauthn",
                children: (0, r.jsx)(f.Z, g({}, w)),
            }),
            (0, r.jsx)(i.Mi4, {
                id: "totp",
                children: (0, r.jsx)(u.Z, m(g({}, w), { isSlideReady: "totp" === C })),
            }),
            (0, r.jsx)(i.Mi4, {
                id: "sms",
                children: (0, r.jsx)(d.Z, m(g({}, w), { isSlideReady: "sms" === C })),
            }),
            (0, r.jsx)(i.Mi4, {
                id: "backup",
                children: (0, r.jsx)(s.Z, g({}, w)),
            }),
            (0, r.jsx)(i.Mi4, {
                id: "backup_ack",
                children: (0, r.jsx)(a.Z, m(g({}, w), { isSlideReady: "backup_ack" === C })),
            }),
            (0, r.jsx)(i.Mi4, {
                id: "password",
                children: (0, r.jsx)(o.Z, m(g({}, w), { isSlideReady: "password" === C })),
            }),
        ],
    });
}
function p(e) {
    let { mfaChallenge: t, finish: n, transitionState: l, onClose: s } = e;
    return (0, r.jsx)(i.Y0X, {
        transitionState: l,
        size: i.CgR.SMALL,
        "aria-label": h.intl.string(h.t.saHocI),
        parentComponent: "MFAModal",
        children: (0, r.jsx)(b, {
            mfaChallenge: t,
            mfaFinish: n,
            onClose: s,
            onEarlyClose: s,
        }),
    });
}
function j(e, t, n) {
    (0, i.h7j)(
        (n) =>
            (0, r.jsx)(
                p,
                g(
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
