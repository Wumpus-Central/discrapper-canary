n.d(t, { I: () => i });
var r = n(64700),
    l = n(607272);
function i(e) {
    let {
            userId: t,
            applicationId: n,
            isGameRelationship: i,
            location: a,
            onConfirm: o,
            onCancel: u,
            onFinally: s,
        } = e,
        d = r.useCallback(() => {
            l.A.cancelFriendRequest({ userId: t, applicationId: i ? n : null, location: a });
        }, [n, i, a, t]);
    return {
        acceptFriendRequest: r.useCallback(() => {
            l.A.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: i ? n : null,
                location: a,
                onConfirm: o,
                onCancel: u,
                onFinally: s,
            });
        }, [n, i, a, u, o, s, t]),
        cancelFriendRequest: d,
    };
}
