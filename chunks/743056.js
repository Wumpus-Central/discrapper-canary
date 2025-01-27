r.d(n, {
    u: function () {
        return o;
    }
});
var i = r(192379),
    a = r(298213);
function o(e) {
    let { userId: n, applicationId: r, isGameRelationship: o, location: s, friendToken: l } = e,
        u = i.useCallback(() => {
            a.Z.cancelFriendRequest({
                userId: n,
                applicationId: o ? r : null,
                location: s
            });
        }, [r, o, s, n]);
    return {
        acceptFriendRequest: i.useCallback(() => {
            a.Z.acceptFriendRequest({
                userId: n,
                applicationId: o ? r : null,
                location: s,
                friendToken: l
            });
        }, [r, l, o, s, n]),
        cancelFriendRequest: u
    };
}
