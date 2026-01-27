n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(98207),
    a = n(557722),
    o = n(662758),
    c = n(615715),
    d = n(87707),
    u = n(652215),
    _ = n(53516),
    p = n(985018),
    m = n(139674);

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

function A(e) {
    let t,
        n,
        { currentUser: A, togglingSMS: f } = e,
        [h, b] = i.useState(!1),
        E = i.useCallback(
            (e) => {
                e.preventDefault(), b(!h);
            },
            [h],
        ),
        x = i.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, l.qfG)(
                (t) =>
                    (0, r.jsx)(
                        c.default,
                        g(
                            {
                                reason: a.d.USER_SETTINGS_UPDATE,
                            },
                            t,
                            e,
                        ),
                    ),
                {
                    modalKey: _.V,
                },
            );
        }, []),
        O = i.useCallback(() => {
            x();
        }, [x]),
        C = i.useCallback(() => {
            null == A.phone
                ? x({
                      onAddedPhone: s.A.enableSMS,
                  })
                : s.A.enableSMS();
        }, [A, x]),
        I = i.useCallback(() => {
            (0, l.qfG)((e) => {
                var t, n;
                return (0, r.jsx)(
                    o.default,
                    ((t = g({}, e)),
                    (n = n =
                        {
                            handleSubmit: s.A.disableSMS,
                            title: p.intl.string(p.t.KLWnit),
                            children: p.intl.string(p.t["W0/Duf"]),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            });
        }, []),
        T = i.useCallback((e) => (null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4))), []),
        S = null != A.phone,
        j = A.hasFlag(u.nhx.MFA_SMS);
    if (S || j) {
        let e = h ? A.phone : T(A.phone);
        n = (0, r.jsxs)(l.Text, {
            variant: "text-sm/normal",
            children: [
                p.intl.format(p.t.PXVoEO, {
                    phoneNumber: e,
                }),
                (0, r.jsx)(l.MzZ, {
                    onClick: E,
                    className: m.vN,
                    children: h ? p.intl.string(p.t.FfltIN) : p.intl.string(p.t.llArAg),
                }),
            ],
        });
    }
    if (j)
        t = (0, r.jsx)(l.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: p.intl.string(p.t.KLWnit),
            loading: f,
            onClick: I,
        });
    else {
        let e = (0, d.B)(A);
        t = (0, r.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [
                (0, r.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: null != e ? e : p.intl.string(p.t.DZQe23),
                    onClick: C,
                    loading: f,
                    disabled: null != e,
                }),
                S
                    ? (0, r.jsx)(l.Button, {
                          variant: "secondary",
                          size: "sm",
                          text: p.intl.string(p.t.Ulqq6K),
                          onClick: O,
                      })
                    : null,
            ],
        });
    }
    return (0, r.jsxs)(l.D0$, {
        label: p.intl.string(p.t.uHAJ5v),
        description: p.intl.string(p.t.fspJ4H),
        children: [n, t],
    });
}
