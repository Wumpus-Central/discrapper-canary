n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(98207),
    r = n(579872),
    o = n(900686),
    d = n(518142),
    c = n(662758),
    u = n(407186),
    m = n(985018);
function g(e) {
    let { backupCodes: t, hasTOTPEnabled: n, currentUser: g } = e,
        _ = s.useCallback((e) => {
            (0, l.qfG)((t) => (0, i.jsx)(d.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        x = s.useCallback(() => {
            (0, l.qfG)((e) =>
                (0, i.jsx)(c.default, {
                    ...e,
                    handleSubmit: (e) =>
                        a.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            _(e);
                        }),
                    title: m.intl.string(m.t.PsQmzU),
                    actionText: m.intl.string(m.t.ajkYcF),
                }),
            );
        }, [_]),
        A = s.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: n } = e;
                        return `* ${n.substr(0, 4)}-${n.substr(4)} ${t ? "(used)" : ""}`;
                    })
                    .join("\r\n"),
                n = m.intl.formatToPlainString(m.t["uYWwh/"], { email: g.email });
            return `${n}\r
\r
${e}`;
        }, [t, g.email]),
        h = s.useMemo(
            () =>
                t.length > 0
                    ? (0, i.jsx)(o.A, {
                          fileContents: A,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, i.jsx)(l.Button, {
                              variant: "primary",
                              size: "sm",
                              text: m.intl.string(m.t.qZZUy6),
                          }),
                      })
                    : (0, i.jsx)(l.Button, {
                          variant: "primary",
                          size: "sm",
                          text: m.intl.string(m.t.xZEzbu),
                          onClick: x,
                      }),
            [t.length, A, x],
        ),
        p = s.useCallback(() => {
            r.A.show({
                title: m.intl.string(m.t["D+aE7g"]),
                body: m.intl.string(m.t.EA4ZEk),
                cancelText: m.intl.string(m.t["ETE/oC"]),
                onConfirm: () => a.A.disable(),
            });
        }, []);
    return (0, i.jsx)(l.D0$, {
        label: m.intl.string(m.t.EPVq00),
        description: m.intl.string(m.t.bQwxib),
        children: (0, i.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [
                h,
                n &&
                    (0, i.jsx)(l.Button, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: m.intl.string(m.t["D+aE7g"]),
                        onClick: p,
                    }),
                !n &&
                    (0, i.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: m.intl.string(m.t.cDgKte),
                        onClick: u.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
