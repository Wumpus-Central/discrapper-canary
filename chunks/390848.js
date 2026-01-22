n.d(t, {
    I: () => a,
});
var r = n(64700),
    i = n(607272);

function a(e) {
    let { userId: t, applicationId: n, isGameRelationship: a, location: s, onConfirm: o, onCancel: l } = e,
        c = r.useCallback(() => {
            i.A.cancelFriendRequest({
                userId: t,
                applicationId: a ? n : null,
                location: s,
            });
        }, [n, a, s, t]);
    return {
        acceptFriendRequest: r.useCallback(() => {
            i.A.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: a ? n : null,
                location: s,
                onConfirm: o,
                onCancel: l,
            });
        }, [n, a, s, l, o, t]),
        cancelFriendRequest: c,
    };
}
