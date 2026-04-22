"use strict";
n.d(t, { G4: () => l, On: () => d, Xd: () => s.Xd, d4: () => o, ly: () => a, oK: () => u }), n(107123);
var r = n(698441),
    i = n(95701),
    s = n(172799);
function a(e) {
    let t = e.guild_scheduled_event;
    return null != t && (0, r.d6)(t);
}
function o(e) {
    return e.target_type === s.yV.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function l(e) {
    return e.target_type === s.yV.STREAM && null != e.target_user;
}
function u(e) {
    return e.target_type === s.yV.EMBEDDED_APPLICATION;
}
function d(e) {
    return "number" == typeof e.type
        ? e.type
        : e.type === s.Xd.GROUP_DM || (null != e.channel && (0, i.MK)(e.channel.type))
          ? s.Xd.GROUP_DM
          : e.type === s.Xd.FRIEND || (null == e.guild && null != e.inviter)
            ? s.Xd.FRIEND
            : s.Xd.GUILD;
}
