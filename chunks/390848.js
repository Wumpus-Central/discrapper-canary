a.d(l, { I: () => c });
var s = a(64700),
    t = a(411986);
function c(e) {
    let {
            userId: l,
            applicationId: a,
            isGameRelationship: c,
            location: i,
            onConfirm: n,
            onCancel: d,
            onFinally: p,
        } = e,
        r = s.useCallback(() => {
            t.A.cancelFriendRequest({ userId: l, applicationId: c ? a : null, location: i });
        }, [a, c, i, l]);
    return {
        acceptFriendRequest: s.useCallback(() => {
            t.A.maybeConfirmFriendRequestAccept({
                userId: l,
                applicationId: c ? a : null,
                location: i,
                onConfirm: n,
                onCancel: d,
                onFinally: p,
            });
        }, [a, c, i, d, n, p, l]),
        cancelFriendRequest: r,
    };
}
