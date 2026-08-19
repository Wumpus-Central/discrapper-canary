"use strict";
n.d(t, { Ob: () => s, Oe: () => a });
var i = n(11541);
let r = {};
function a(e) {
    return null == r[e] && (r[e] = {}), r[e];
}
function s(e, t) {
    if (0 === t.length) return !1;
    let n = a(e);
    return (
        t.forEach((e) => {
            let t = n[e.userId],
                r = e.joinSourceType ?? t?.joinSourceType ?? null;
            (null == r || r === i.UP.UNSPECIFIED) && null != e.sourceInviteCode && (r = i.UP.INVITE),
                (n[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode: e.sourceInviteCode ?? t?.sourceInviteCode ?? null,
                    joinSourceType: r,
                    inviterId: e.inviterId ?? t?.inviterId ?? null,
                    integrationType: e.integrationType ?? t?.integrationType ?? null,
                    joinSourceApplicationId: e.joinSourceApplicationId ?? t?.joinSourceApplicationId ?? null,
                    joinSourceChannelId: e.joinSourceChannelId ?? t?.joinSourceChannelId ?? null,
                });
        }),
        !0
    );
}
