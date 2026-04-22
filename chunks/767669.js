n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(192308),
    a = n(821609),
    r = n(452027),
    o = n(825484),
    d = n(98207),
    u = n(579872),
    c = n(900686),
    g = n(518142),
    m = n(662758),
    _ = n(407186),
    A = n(985018);
function h(e) {
    let { backupCodes: t, hasTOTPEnabled: n, currentUser: h } = e,
        p = s.useCallback((e) => {
            (0, l.openModal)((t) => (0, i.jsx)(g.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        x = s.useCallback(() => {
            (0, l.openModal)((e) =>
                (0, i.jsx)(m.default, {
                    ...e,
                    handleSubmit: (e) =>
                        d.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            p(e);
                        }),
                    title: A.intl.string(A.t.PsQmzU),
                    actionText: A.intl.string(A.t.ajkYcF),
                }),
            );
        }, [p]),
        E = s.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: n } = e;
                        return `* ${n.substr(0, 4)}-${n.substr(4)} ${t ? "(used)" : ""}`;
                    })
                    .join("\r\n"),
                n = A.intl.formatToPlainString(A.t["uYWwh/"], { email: h.email });
            return `${n}\r
\r
${e}`;
        }, [t, h.email]),
        T = s.useMemo(
            () =>
                t.length > 0
                    ? (0, i.jsx)(c.A, {
                          fileContents: E,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, i.jsx)(a.$, {
                              variant: "primary",
                              size: "sm",
                              text: A.intl.string(A.t.qZZUy6),
                          }),
                      })
                    : (0, i.jsx)(a.$, { variant: "primary", size: "sm", text: A.intl.string(A.t.xZEzbu), onClick: x }),
            [t.length, E, x],
        ),
        S = s.useCallback(() => {
            u.A.show({
                title: A.intl.string(A.t["D+aE7g"]),
                body: A.intl.string(A.t.EA4ZEk),
                cancelText: A.intl.string(A.t["ETE/oC"]),
                onConfirm: () => d.A.disable(),
            });
        }, []);
    return (0, i.jsx)(r.D, {
        label: A.intl.string(A.t.EPVq00),
        description: A.intl.string(A.t.bQwxib),
        children: (0, i.jsxs)(o.e, {
            size: "sm",
            children: [
                T,
                n &&
                    (0, i.jsx)(a.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: A.intl.string(A.t["D+aE7g"]),
                        onClick: S,
                    }),
                !n &&
                    (0, i.jsx)(a.$, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(A.t.cDgKte),
                        onClick: _.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
