n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(98207),
    l = n(579872),
    o = n(900686),
    c = n(518142),
    d = n(195043),
    u = n(662758),
    _ = n(179690),
    m = n(531525),
    A = n(985018);
function g(e) {
    let { backupCodes: t, hasTOTPEnabled: n, currentUser: g } = e,
        E = s.useCallback((e) => {
            (0, r.qfG)((t) => (0, i.jsx)(c.A, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        h = s.useCallback(() => {
            (0, r.qfG)((e) =>
                (0, i.jsx)(u.default, {
                    ...e,
                    handleSubmit: (e) =>
                        a.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            E(e);
                        }),
                    title: A.intl.string(A.t.PsQmzU),
                    actionText: A.intl.string(A.t.ajkYcF),
                }),
            );
        }, [E]),
        p = s.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: n } = e;
                        return `* ${n.substr(0, 4)}-${n.substr(4)} ${t ? "(used)" : ""}`;
                    })
                    .join("\r\n"),
                n = A.intl.formatToPlainString(A.t["uYWwh/"], { email: g.email });
            return `${n}\r
\r
${e}`;
        }, [t, g.email]),
        C = s.useMemo(
            () =>
                t.length > 0
                    ? (0, i.jsx)(o.A, {
                          fileContents: p,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, i.jsx)(r.Button, {
                              variant: "primary",
                              size: "sm",
                              text: A.intl.string(A.t.qZZUy6),
                          }),
                      })
                    : (0, i.jsx)(d.x, {
                          setting: m.H.ACCOUNT_VIEW_BACKUP_CODES,
                          children: (0, i.jsx)(r.Button, {
                              variant: "primary",
                              size: "sm",
                              text: A.intl.string(A.t.xZEzbu),
                              onClick: h,
                          }),
                      }),
            [t.length, p, h],
        ),
        x = s.useCallback(() => {
            l.A.show({
                title: A.intl.string(A.t["D+aE7g"]),
                body: A.intl.string(A.t.EA4ZEk),
                cancelText: A.intl.string(A.t["ETE/oC"]),
                onConfirm: () => a.A.disable(),
            });
        }, []);
    return (0, i.jsx)(r.D0$, {
        label: A.intl.string(A.t.EPVq00),
        description: A.intl.string(A.t.bQwxib),
        children: (0, i.jsxs)(r.ButtonGroup, {
            size: "sm",
            children: [
                C,
                n &&
                    (0, i.jsx)(d.x, {
                        setting: m.H.ACCOUNT_REMOVE_2FA,
                        children: (0, i.jsx)(r.Button, {
                            variant: "critical-secondary",
                            size: "sm",
                            text: A.intl.string(A.t["D+aE7g"]),
                            onClick: x,
                        }),
                    }),
                !n &&
                    (0, i.jsx)(d.x, {
                        setting: m.H.ACCOUNT_ENABLE_2FA,
                        children: (0, i.jsx)(r.Button, {
                            variant: "primary",
                            size: "sm",
                            text: A.intl.string(A.t.cDgKte),
                            onClick: _.Ay.enableMFA,
                        }),
                    }),
            ],
        }),
    });
}
