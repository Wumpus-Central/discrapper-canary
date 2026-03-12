"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(607272),
    a = n(985018),
    o = n(595351);
function c(e) {
    let { userId: t, applicationId: n } = e,
        [c, d] = s.useState(!1),
        [u, h] = s.useState(!1),
        A = s.useCallback(
            async (e) => {
                e.stopPropagation(), h(!0);
                try {
                    await r.A.cancelFriendRequest({
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
                    await r.A.maybeConfirmFriendRequestAccept({
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
        className: o.Ze,
        children: (0, i.jsxs)(l.e2v, {
            size: "sm",
            children: [
                (0, i.jsx)(l.$nd, {
                    variant: "active",
                    onClick: m,
                    text: a.intl.string(a.t.Zcibdf),
                    loading: c,
                    disabled: u,
                }),
                (0, i.jsx)(l.$nd, {
                    variant: "secondary",
                    onClick: A,
                    text: a.intl.string(a.t.xuio0C),
                    loading: u,
                    disabled: c,
                }),
            ],
        }),
    });
}
