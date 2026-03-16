n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(98207),
    r = n(579872),
    o = n(900686),
    d = n(518142),
    c = n(662758),
    u = n(179690),
    _ = n(985018);
function m(e) {
    let { backupCodes: t, hasTOTPEnabled: n, currentUser: m } = e,
        g = s.useCallback((e) => {
            (0, l.qfG)((t) => (0, i.jsx)(d.A, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        A = s.useCallback(() => {
            (0, l.qfG)((e) =>
                (0, i.jsx)(c.default, {
                    ...e,
                    handleSubmit: (e) =>
                        a.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            g(e);
                        }),
                    title: _.intl.string(_.t.PsQmzU),
                    actionText: _.intl.string(_.t.ajkYcF),
                }),
            );
        }, [g]),
        h = s.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: n } = e;
                        return `* ${n.substr(0, 4)}-${n.substr(4)} ${t ? "(used)" : ""}`;
                    })
                    .join("\r\n"),
                n = _.intl.formatToPlainString(_.t["uYWwh/"], { email: m.email });
            return `${n}\r
\r
${e}`;
        }, [t, m.email]),
        x = s.useMemo(
            () =>
                t.length > 0
                    ? (0, i.jsx)(o.A, {
                          fileContents: h,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, i.jsx)(l.Button, {
                              variant: "primary",
                              size: "sm",
                              text: _.intl.string(_.t.qZZUy6),
                          }),
                      })
                    : (0, i.jsx)(l.Button, {
                          variant: "primary",
                          size: "sm",
                          text: _.intl.string(_.t.xZEzbu),
                          onClick: A,
                      }),
            [t.length, h, A],
        ),
        p = s.useCallback(() => {
            r.A.show({
                title: _.intl.string(_.t["D+aE7g"]),
                body: _.intl.string(_.t.EA4ZEk),
                cancelText: _.intl.string(_.t["ETE/oC"]),
                onConfirm: () => a.A.disable(),
            });
        }, []);
    return (0, i.jsx)(l.D0$, {
        label: _.intl.string(_.t.EPVq00),
        description: _.intl.string(_.t.bQwxib),
        children: (0, i.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [
                x,
                n &&
                    (0, i.jsx)(l.Button, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: _.intl.string(_.t["D+aE7g"]),
                        onClick: p,
                    }),
                !n &&
                    (0, i.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: _.intl.string(_.t.cDgKte),
                        onClick: u.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
