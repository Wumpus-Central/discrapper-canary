n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(195043),
    r = n(193658),
    o = n(355097),
    d = n(531525),
    c = n(985018),
    u = n(27676);
function _(e) {
    let { currentUser: t, disabled: n, handleDisableAccount: _, handleDeleteAccount: g } = e,
        m = t.isClaimed(),
        A = s.useRef(null);
    return (
        (0, r.A)(A, o.Ew.AccountScrollPositions.DISABLE_ACCOUNT),
        (0, i.jsx)(a.x, {
            setting: d.H.ACCOUNT_DISABLE_ACCOUNT,
            children: (0, i.jsx)("div", {
                ref: A,
                children: (0, i.jsx)(l.D0$, {
                    label: c.intl.string(c.t.ZKsIks),
                    description: m ? c.intl.string(c.t.TIh3Yj) : c.intl.string(c.t.czsGA8),
                    children: (0, i.jsxs)(l.ButtonGroup, {
                        size: "sm",
                        className: u.U,
                        children: [
                            m
                                ? (0, i.jsx)(l.Button, {
                                      variant: "critical-primary",
                                      size: "sm",
                                      text: c.intl.string(c.t.jf5GGb),
                                      disabled: n,
                                      onClick: _,
                                  })
                                : null,
                            (0, i.jsx)(a.x, {
                                setting: d.H.ACCOUNT_DELETE_ACCOUNT,
                                children: (0, i.jsx)(l.Button, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: c.intl.string(c.t["8lQ2rR"]),
                                    disabled: n,
                                    onClick: g,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
