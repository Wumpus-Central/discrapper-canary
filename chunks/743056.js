n.d(t, { u: () => o });
var r = n(192379),
    i = n(298213);
function o(e) {
    let { userId: t, applicationId: n, isGameRelationship: o, location: a, friendToken: s, onConfirm: l, onCancel: c } = e,
        u = r.useCallback(() => {
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
                friendToken: s,
                onConfirm: l,
                onCancel: c
            });
        }, [n, s, o, a, c, l, t]),
        cancelFriendRequest: u
    };
}
