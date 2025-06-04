n.d(t, { u: () => a });
var r = n(73800),
    i = n(298213);
function a(e) {
    let { userId: t, applicationId: n, isGameRelationship: a, location: o, onConfirm: s, onCancel: l } = e,
        c = r.useCallback(() => {
            i.Z.cancelFriendRequest({
                userId: t,
                applicationId: a ? n : null,
                location: o
            });
        }, [n, a, o, t]);
    return {
        acceptFriendRequest: r.useCallback(() => {
            i.Z.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: a ? n : null,
                location: o,
                onConfirm: s,
                onCancel: l
            });
        }, [n, a, o, l, s, t]),
        cancelFriendRequest: c
    };
}
