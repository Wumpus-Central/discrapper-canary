n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(195043),
    o = n(193658),
    l = n(355097),
    c = n(531525),
    u = n(985018),
    d = n(943626);
function f(e) {
    let { currentUser: t, disabled: n, handleDisableAccount: f, handleDeleteAccount: p } = e,
        _ = t.isClaimed(),
        h = i.useRef(null);
    return (
        (0, o.A)(h, l.Ew.AccountScrollPositions.DISABLE_ACCOUNT),
        (0, r.jsx)(s.x, {
            setting: c.H.ACCOUNT_DISABLE_ACCOUNT,
            children: (0, r.jsx)("div", {
                ref: h,
                children: (0, r.jsx)(a.D0$, {
                    label: u.intl.string(u.t.ZKsIks),
                    description: _ ? u.intl.string(u.t.TIh3Yj) : u.intl.string(u.t.czsGA8),
                    children: (0, r.jsxs)(a.ButtonGroup, {
                        size: "sm",
                        className: d.U,
                        children: [
                            _
                                ? (0, r.jsx)(a.Button, {
                                      variant: "critical-primary",
                                      size: "sm",
                                      text: u.intl.string(u.t.jf5GGb),
                                      disabled: n,
                                      onClick: f,
                                  })
                                : null,
                            (0, r.jsx)(s.x, {
                                setting: c.H.ACCOUNT_DELETE_ACCOUNT,
                                children: (0, r.jsx)(a.Button, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: u.intl.string(u.t["8lQ2rR"]),
                                    disabled: n,
                                    onClick: p,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
