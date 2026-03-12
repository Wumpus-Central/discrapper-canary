"use strict";
n.d(t, { I: () => s });
var r = n(64700),
    i = n(607272);
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
        c = r.useCallback(() => {
            i.A.cancelFriendRequest({ userId: t, applicationId: s ? n : null, location: a });
        }, [n, s, a, t]);
    return {
        acceptFriendRequest: r.useCallback(() => {
            i.A.maybeConfirmFriendRequestAccept({
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
