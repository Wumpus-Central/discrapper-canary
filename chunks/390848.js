"use strict";
n.d(t, { I: () => a });
var i = n(64700),
    r = n(411986);
function a(e) {
    let {
            userId: t,
            applicationId: n,
            isGameRelationship: a,
            location: s,
            onConfirm: l,
            onCancel: o,
            onFinally: d,
        } = e,
        c = i.useCallback(() => {
            r.A.cancelFriendRequest({ userId: t, applicationId: a ? n : null, location: s });
        }, [n, a, s, t]);
    return {
        acceptFriendRequest: i.useCallback(() => {
            r.A.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: a ? n : null,
                location: s,
                onConfirm: l,
                onCancel: o,
                onFinally: d,
            });
        }, [n, a, s, o, l, d, t]),
        cancelFriendRequest: c,
    };
}
