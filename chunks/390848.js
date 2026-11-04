var i = c(582128),
    n = c(393426);
c.d(
    a,
    {},
    {
        I: function (e) {
            let {
                    userId: a,
                    applicationId: c,
                    isGameRelationship: t,
                    location: p,
                    onConfirm: u,
                    onCancel: l,
                    onFinally: s,
                } = e,
                d = i.useCallback(() => {
                    n.A.cancelFriendRequest({ userId: a, applicationId: t ? c : null, location: p });
                }, [c, t, p, a]);
            return {
                acceptFriendRequest: i.useCallback(() => {
                    n.A.maybeConfirmFriendRequestAccept({
                        userId: a,
                        applicationId: t ? c : null,
                        location: p,
                        onConfirm: u,
                        onCancel: l,
                        onFinally: s,
                    });
                }, [c, t, p, l, u, s, a]),
                cancelFriendRequest: d,
            };
        },
    },
);
