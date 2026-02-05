"use strict";
n.d(t, { Ob: () => s, Oe: () => a });
var r = n(11541);
let i = {};
function a(e) {
    return null == i[e] && (i[e] = {}), i[e];
}
function s(e, t) {
    if (0 === t.length) return !1;
    let n = a(e);
    return (
        t.forEach((e) => {
            let t = n[e.userId],
                i = e.joinSourceType ?? t?.joinSourceType ?? null;
            (null == i || i === r.UP.UNSPECIFIED) && null != e.sourceInviteCode && (i = r.UP.INVITE),
                (n[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode: e.sourceInviteCode ?? t?.sourceInviteCode ?? null,
                    joinSourceType: i,
                    inviterId: e.inviterId ?? t?.inviterId ?? null,
                    integrationType: e.integrationType ?? t?.integrationType ?? null,
                    joinSourceApplicationId: e.joinSourceApplicationId ?? t?.joinSourceApplicationId ?? null,
                    joinSourceChannelId: e.joinSourceChannelId ?? t?.joinSourceChannelId ?? null,
                });
        }),
        !0
    );
}
