n.d(t, { u: () => a });
var r = n(73800),
    i = n(298213);
function a(e) {
    let { userId: t, applicationId: n, isGameRelationship: a, location: o, friendToken: s, onConfirm: l, onCancel: c } = e,
        u = r.useCallback(() => {
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
                friendToken: s,
                onConfirm: l,
                onCancel: c
            });
        }, [n, s, a, o, c, l, t]),
        cancelFriendRequest: u
    };
}
