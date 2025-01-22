n.d(t, {
    u: function () {
        return l;
    }
});
var i = n(192379),
    r = n(298213);
function l(e) {
    let { userId: t, applicationId: n, isGameRelationship: l, location: a } = e,
        s = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    r.Z.cancelFriendRequest({
                        userId: t,
                        applicationId: l ? n : null,
                        location: a
                    });
            },
            [n, l, a, t]
        );
    return {
        handleAcceptFriendRequest: i.useCallback(
            (e) => {
                e.stopPropagation(),
                    r.Z.acceptFriendRequest({
                        userId: t,
                        applicationId: l ? n : null,
                        location: a
                    });
            },
            [n, l, a, t]
        ),
        handleCancelFriendRequest: s
    };
}
