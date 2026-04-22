n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(452027),
    l = n(825484),
    a = n(821609),
    r = n(985018),
    o = n(656161);
function d(e) {
    let { currentUser: t, disabled: n, handleDisableAccount: d, handleDeleteAccount: u } = e,
        c = t.isClaimed();
    return (0, i.jsx)(s.D, {
        label: r.intl.string(r.t.ZKsIks),
        description: c ? r.intl.string(r.t.TIh3Yj) : r.intl.string(r.t.czsGA8),
        children: (0, i.jsxs)(l.e, {
            size: "sm",
            className: o.U,
            children: [
                c
                    ? (0, i.jsx)(a.$, {
                          variant: "critical-primary",
                          size: "sm",
                          text: r.intl.string(r.t.jf5GGb),
                          disabled: n,
                          onClick: d,
                      })
                    : null,
                (0, i.jsx)(a.$, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: r.intl.string(r.t["8lQ2rR"]),
                    disabled: n,
                    onClick: u,
                }),
            ],
        }),
    });
}
