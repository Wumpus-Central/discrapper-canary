n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(98207),
    a = n(579872),
    o = n(900686),
    c = n(518142),
    d = n(195043),
    u = n(662758),
    _ = n(179690),
    p = n(531525),
    m = n(985018);

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

function A(e, t) {
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

function f(e) {
    let { backupCodes: t, hasTOTPEnabled: n, currentUser: f } = e,
        h = i.useCallback((e) => {
            (0, l.qfG)(
                (t) =>
                    (0, r.jsx)(
                        c.A,
                        A(g({}, t), {
                            password: e,
                        }),
                    ),
                {
                    stackingBehavior: "stack",
                },
            );
        }, []),
        b = i.useCallback(() => {
            (0, l.qfG)((e) =>
                (0, r.jsx)(
                    u.default,
                    A(g({}, e), {
                        handleSubmit: (e) =>
                            s.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                h(e);
                            }),
                        title: m.intl.string(m.t.PsQmzU),
                        actionText: m.intl.string(m.t.ajkYcF),
                    }),
                ),
            );
        }, [h]),
        E = i.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: n } = e;
                        return "* "
                            .concat(n.substr(0, 4), "-")
                            .concat(n.substr(4), " ")
                            .concat(t ? "(used)" : "");
                    })
                    .join("\r\n"),
                n = m.intl.formatToPlainString(m.t["uYWwh/"], {
                    email: f.email,
                });
            return "".concat(n, "\r\n\r\n").concat(e);
        }, [t, f.email]),
        x = i.useMemo(
            () =>
                t.length > 0
                    ? (0, r.jsx)(o.A, {
                          fileContents: E,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, r.jsx)(l.Button, {
                              variant: "primary",
                              size: "sm",
                              text: m.intl.string(m.t.qZZUy6),
                          }),
                      })
                    : (0, r.jsx)(d.x, {
                          setting: p.H.ACCOUNT_VIEW_BACKUP_CODES,
                          children: (0, r.jsx)(l.Button, {
                              variant: "primary",
                              size: "sm",
                              text: m.intl.string(m.t.xZEzbu),
                              onClick: b,
                          }),
                      }),
            [t.length, E, b],
        ),
        O = i.useCallback(() => {
            a.A.show({
                title: m.intl.string(m.t["D+aE7g"]),
                body: m.intl.string(m.t.EA4ZEk),
                cancelText: m.intl.string(m.t["ETE/oC"]),
                onConfirm: () => s.A.disable(),
            });
        }, []);
    return (0, r.jsx)(l.D0$, {
        label: m.intl.string(m.t.EPVq00),
        description: m.intl.string(m.t.bQwxib),
        children: (0, r.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [
                x,
                n &&
                    (0, r.jsx)(d.x, {
                        setting: p.H.ACCOUNT_REMOVE_2FA,
                        children: (0, r.jsx)(l.Button, {
                            variant: "critical-secondary",
                            size: "sm",
                            text: m.intl.string(m.t["D+aE7g"]),
                            onClick: O,
                        }),
                    }),
                !n &&
                    (0, r.jsx)(d.x, {
                        setting: p.H.ACCOUNT_ENABLE_2FA,
                        children: (0, r.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: m.intl.string(m.t.cDgKte),
                            onClick: _.Ay.enableMFA,
                        }),
                    }),
            ],
        }),
    });
}
