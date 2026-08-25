c.d(a, { I: () => t });
var i = c(582128),
    n = c(411986);
function t(e) {
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
}
