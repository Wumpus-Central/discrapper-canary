"use strict";
n.d(t, { A: () => u, R: () => d });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(308528),
    a = n(607272),
    o = n(985018),
    c = n(595351);
function d(e) {
    let { userId: t } = e,
        n = s.useCallback(
            (e) => {
                e.stopPropagation(), r.A.openPrivateChannel({ recipientIds: [t] });
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: c.Ze,
        children: (0, i.jsx)(l.e2v, {
            size: "sm",
            children: (0, i.jsx)(l.$nd, { variant: "secondary", onClick: n, text: o.intl.string(o.t["g33r/P"]) }),
        }),
    });
}
function u(e) {
    let { userId: t, applicationId: n } = e,
        [r, d] = s.useState(!1),
        [u, h] = s.useState(!1),
        A = s.useCallback(
            async (e) => {
                e.stopPropagation(), h(!0);
                try {
                    await a.A.cancelFriendRequest({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    h(!1);
                }
            },
            [n, t],
        ),
        m = s.useCallback(
            async (e) => {
                e.stopPropagation(), d(!0);
                try {
                    await a.A.maybeConfirmFriendRequestAccept({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    d(!1);
                }
            },
            [n, t],
        );
    return (0, i.jsx)("div", {
        className: c.Ze,
        children: (0, i.jsxs)(l.e2v, {
            size: "sm",
            children: [
                (0, i.jsx)(l.$nd, {
                    variant: "active",
                    onClick: m,
                    text: o.intl.string(o.t.Zcibdf),
                    loading: r,
                    disabled: u,
                }),
                (0, i.jsx)(l.$nd, {
                    variant: "secondary",
                    onClick: A,
                    text: o.intl.string(o.t.xuio0C),
                    loading: u,
                    disabled: r,
                }),
            ],
        }),
    });
}
