n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(195043),
    r = n(193658),
    o = n(355097),
    c = n(531525),
    d = n(985018),
    u = n(27676);
function _(e) {
    let { currentUser: t, disabled: n, handleDisableAccount: _, handleDeleteAccount: m } = e,
        A = t.isClaimed(),
        g = s.useRef(null);
    return (
        (0, r.A)(g, o.Ew.AccountScrollPositions.DISABLE_ACCOUNT),
        (0, i.jsx)(l.x, {
            setting: c.H.ACCOUNT_DISABLE_ACCOUNT,
            children: (0, i.jsx)("div", {
                ref: g,
                children: (0, i.jsx)(a.D0$, {
                    label: d.intl.string(d.t.ZKsIks),
                    description: A ? d.intl.string(d.t.TIh3Yj) : d.intl.string(d.t.czsGA8),
                    children: (0, i.jsxs)(a.ButtonGroup, {
                        size: "sm",
                        className: u.U,
                        children: [
                            A
                                ? (0, i.jsx)(a.Button, {
                                      variant: "critical-primary",
                                      size: "sm",
                                      text: d.intl.string(d.t.jf5GGb),
                                      disabled: n,
                                      onClick: _,
                                  })
                                : null,
                            (0, i.jsx)(l.x, {
                                setting: c.H.ACCOUNT_DELETE_ACCOUNT,
                                children: (0, i.jsx)(a.Button, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: d.intl.string(d.t["8lQ2rR"]),
                                    disabled: n,
                                    onClick: m,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        })
    );
}
