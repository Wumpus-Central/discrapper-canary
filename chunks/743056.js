n.d(t, { u: () => a });
var i = n(192379),
    r = n(298213);
function a(e) {
    let { userId: t, applicationId: n, isGameRelationship: a, location: s, friendToken: o, onConfirm: l, onCancel: u } = e,
        c = i.useCallback(() => {
            r.Z.cancelFriendRequest({
                userId: t,
                applicationId: a ? n : null,
                location: s
            });
        }, [n, a, s, t]);
    return {
        acceptFriendRequest: i.useCallback(() => {
            r.Z.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: a ? n : null,
                location: s,
                friendToken: o,
                onConfirm: l,
                onCancel: u
            });
        }, [n, o, a, s, u, l, t]),
        cancelFriendRequest: c
    };
}
