n.d(t, {
    MFAModal: () => b,
    a: () => j,
    t: () => m,
}),
    n(896048),
    n(65821);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(83726),
    a = n(815502),
    o = n(947737),
    d = n(314428),
    c = n(542229),
    u = n(467181),
    f = n(365126),
    h = n(985018);
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
function p(e, t) {
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
    var t, n;
    let { mfaChallenge: h, mfaFinish: m, onEarlyClose: b, onClose: j, headerAlignStart: y, width: S = 440 } = e,
        [x, v] = l.useState(null != (t = null == (n = h.methods[0]) ? void 0 : n.type) ? t : "select"),
        [A, C] = l.useState(x),
        O = async (e) => {
            let { mfaType: t, data: n } = e;
            await m({
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
            onClose: b,
            headerAlignStart: y,
        };
    return (0, r.jsxs)(i.tN_, {
        activeSlide: x,
        width: S,
        onSlideReady: C,
        children: [
            (0, r.jsx)(i.q7S, {
                id: "select",
                children: (0, r.jsx)(d.A, g({}, w)),
            }),
            (0, r.jsx)(i.q7S, {
                id: "webauthn",
                children: (0, r.jsx)(f.A, g({}, w)),
            }),
            (0, r.jsx)(i.q7S, {
                id: "totp",
                children: (0, r.jsx)(u.A, p(g({}, w), { isSlideReady: "totp" === A })),
            }),
            (0, r.jsx)(i.q7S, {
                id: "sms",
                children: (0, r.jsx)(c.A, p(g({}, w), { isSlideReady: "sms" === A })),
            }),
            (0, r.jsx)(i.q7S, {
                id: "backup",
                children: (0, r.jsx)(s.A, g({}, w)),
            }),
            (0, r.jsx)(i.q7S, {
                id: "backup_ack",
                children: (0, r.jsx)(a.A, p(g({}, w), { isSlideReady: "backup_ack" === A })),
            }),
            (0, r.jsx)(i.q7S, {
                id: "password",
                children: (0, r.jsx)(o.A, p(g({}, w), { isSlideReady: "password" === A })),
            }),
        ],
    });
}
function b(e) {
    let { mfaChallenge: t, finish: n, transitionState: l, onClose: s } = e;
    return (0, r.jsx)(i.EOs, {
        "data-migration-pending": !0,
        transitionState: l,
        size: i.rIJ.SMALL,
        "aria-label": h.intl.string(h.t.saHocI),
        parentComponent: "MFAModal",
        children: (0, r.jsx)(m, {
            mfaChallenge: t,
            mfaFinish: n,
            onClose: s,
            onEarlyClose: s,
        }),
    });
}
function j(e, t, n) {
    (0, i.qfG)(
        (n) =>
            (0, r.jsx)(
                b,
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
