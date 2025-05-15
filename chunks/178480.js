n.d(t, {
    LF: () => u,
    RB: () => f,
    a3: () => s,
    hn: () => d,
    mH: () => c,
    r: () => l
});
var r = n(695346),
    i = n(709054),
    o = n(497089),
    a = n(925928);
let s = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, a.ZP)({
            since: e,
            getFormatter: t ? a.d0 : a.Zk
        });
    },
    l = (e, t) => e.acked || (t !== r.uL && i.default.compare(t, e.id) >= 0);
function c(e, t, n) {
    let r = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: 'notification-center-item',
        local_id: 'incoming_friend_requests_'.concat(e.id, '_').concat(r),
        deeplink: 'https://discord.com/users/'.concat(e.id),
        type: o.O7.INCOMING_FRIEND_REQUESTS,
        id: r,
        applicationId: n
    };
}
function u(e, t, n) {
    let r = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: 'notification-center-item',
        local_id: 'incoming_game_friend_requests_'.concat(e.id, '_').concat(r),
        deeplink: 'https://discord.com/users/'.concat(e.id),
        type: o.O7.INCOMING_GAME_FRIEND_REQUESTS,
        id: r,
        applicationId: n
    };
}
function d(e) {
    return {
        acked: !1,
        enableBadge: !0,
        id: i.default.fromTimestamp(new Date().getTime()),
        kind: 'notification-center-item',
        local_id: 'mobile_update_available_'.concat(e.build),
        type: o.O7.MOBILE_NATIVE_UPDATE_AVAILABLE,
        deeplink: e.urls.install.toString()
    };
}
let f = (e) => e.type === o.DY.RECENT_MENTION || e.type === o.DY.REPLY_MENTION;
