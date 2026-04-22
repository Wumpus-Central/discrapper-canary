n.d(t, { A: () => h, R: () => u });
var s = n(627968),
    a = n(64700),
    l = n(825484),
    i = n(821609),
    r = n(308528),
    o = n(607272),
    d = n(985018),
    c = n(897968);
function u(e) {
    let { userId: t } = e,
        n = a.useCallback(
            (e) => {
                e.stopPropagation(), r.A.openPrivateChannel({ recipientIds: [t] });
            },
            [t],
        );
    return (0, s.jsx)("div", {
        className: c.Ze,
        children: (0, s.jsx)(l.e, {
            size: "sm",
            children: (0, s.jsx)(i.$, { variant: "secondary", onClick: n, text: d.intl.string(d.t["g33r/P"]) }),
        }),
    });
}
function h(e) {
    let { userId: t, applicationId: n } = e,
        [r, u] = a.useState(!1),
        [h, _] = a.useState(!1),
        A = a.useCallback(
            async (e) => {
                e.stopPropagation(), _(!0);
                try {
                    await o.A.cancelFriendRequest({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    _(!1);
                }
            },
            [n, t],
        ),
        m = a.useCallback(
            async (e) => {
                e.stopPropagation(), u(!0);
                try {
                    await o.A.maybeConfirmFriendRequestAccept({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    u(!1);
                }
            },
            [n, t],
        );
    return (0, s.jsx)("div", {
        className: c.Ze,
        children: (0, s.jsxs)(l.e, {
            size: "sm",
            children: [
                (0, s.jsx)(i.$, {
                    variant: "active",
                    onClick: m,
                    text: d.intl.string(d.t.Zcibdf),
                    loading: r,
                    disabled: h,
                }),
                (0, s.jsx)(i.$, {
                    variant: "secondary",
                    onClick: A,
                    text: d.intl.string(d.t.xuio0C),
                    loading: h,
                    disabled: r,
                }),
            ],
        }),
    });
}
