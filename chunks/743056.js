n.d(t, { u: () => o });
var r = n(73800),
    i = n(298213);
function o(e) {
    let { userId: t, applicationId: n, isGameRelationship: o, location: a, onConfirm: s, onCancel: l } = e,
        c = r.useCallback(() => {
            i.Z.cancelFriendRequest({
                userId: t,
                applicationId: o ? n : null,
                location: a
            });
        }, [n, o, a, t]);
    return {
        acceptFriendRequest: r.useCallback(() => {
            i.Z.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: o ? n : null,
                location: a,
                onConfirm: s,
                onCancel: l
            });
        }, [n, o, a, l, s, t]),
        cancelFriendRequest: c
    };
}
