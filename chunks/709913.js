n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(98207),
    o = n(579872),
    l = n(900686),
    c = n(518142),
    u = n(195043),
    d = n(662758),
    f = n(179690),
    p = n(531525),
    _ = n(985018);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { backupCodes: t, hasTOTPEnabled: n, currentUser: h } = e,
        g = i.useCallback((e) => {
            (0, a.qfG)((t) => (0, r.jsx)(c.A, E(m({}, t), { password: e })), { stackingBehavior: "stack" });
        }, []),
        b = i.useCallback(() => {
            (0, a.qfG)((e) =>
                (0, r.jsx)(
                    d.default,
                    E(m({}, e), {
                        handleSubmit: (e) =>
                            s.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                g(e);
                            }),
                        title: _.intl.string(_.t.PsQmzU),
                        actionText: _.intl.string(_.t.ajkYcF),
                    }),
                ),
            );
        }, [g]),
        y = i.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: n } = e;
                        return "* "
                            .concat(n.substr(0, 4), "-")
                            .concat(n.substr(4), " ")
                            .concat(t ? "(used)" : "");
                    })
                    .join("\r\n"),
                n = _.intl.formatToPlainString(_.t["uYWwh/"], { email: h.email });
            return "".concat(n, "\r\n\r\n").concat(e);
        }, [t, h.email]),
        O = i.useMemo(
            () =>
                t.length > 0
                    ? (0, r.jsx)(l.A, {
                          fileContents: y,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, r.jsx)(a.Button, {
                              variant: "primary",
                              size: "sm",
                              text: _.intl.string(_.t.qZZUy6),
                          }),
                      })
                    : (0, r.jsx)(u.x, {
                          setting: p.H.ACCOUNT_VIEW_BACKUP_CODES,
                          children: (0, r.jsx)(a.Button, {
                              variant: "primary",
                              size: "sm",
                              text: _.intl.string(_.t.xZEzbu),
                              onClick: b,
                          }),
                      }),
            [t.length, y, b],
        ),
        A = i.useCallback(() => {
            o.A.show({
                title: _.intl.string(_.t["D+aE7g"]),
                body: _.intl.string(_.t.EA4ZEk),
                cancelText: _.intl.string(_.t["ETE/oC"]),
                onConfirm: () => s.A.disable(),
            });
        }, []);
    return (0, r.jsx)(a.D0$, {
        label: _.intl.string(_.t.EPVq00),
        description: _.intl.string(_.t.bQwxib),
        children: (0, r.jsxs)(a.ButtonGroup, {
            size: "sm",
            children: [
                O,
                n &&
                    (0, r.jsx)(u.x, {
                        setting: p.H.ACCOUNT_REMOVE_2FA,
                        children: (0, r.jsx)(a.Button, {
                            variant: "critical-secondary",
                            size: "sm",
                            text: _.intl.string(_.t["D+aE7g"]),
                            onClick: A,
                        }),
                    }),
                !n &&
                    (0, r.jsx)(u.x, {
                        setting: p.H.ACCOUNT_ENABLE_2FA,
                        children: (0, r.jsx)(a.Button, {
                            variant: "primary",
                            size: "sm",
                            text: _.intl.string(_.t.cDgKte),
                            onClick: f.Ay.enableMFA,
                        }),
                    }),
            ],
        }),
    });
}
