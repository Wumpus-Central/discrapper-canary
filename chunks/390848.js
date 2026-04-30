"use strict";
n.d(t, { I: () => s });
var i = n(64700),
    r = n(430159);
function s(e) {
    let {
            userId: t,
            applicationId: n,
            isGameRelationship: s,
            location: a,
            onConfirm: o,
            onCancel: l,
            onFinally: u,
        } = e,
        c = i.useCallback(() => {
            r.A.cancelFriendRequest({ userId: t, applicationId: s ? n : null, location: a });
        }, [n, s, a, t]);
    return {
        acceptFriendRequest: i.useCallback(() => {
            r.A.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: s ? n : null,
                location: a,
                onConfirm: o,
                onCancel: l,
                onFinally: u,
            });
        }, [n, s, a, l, o, u, t]),
        cancelFriendRequest: c,
    };
}
