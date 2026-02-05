"use strict";
n.d(t, { G4: () => u, On: () => _, Xd: () => a.Xd, d4: () => l, ly: () => o, oK: () => d }), n(107123);
var r = n(698441),
    i = n(95701),
    a = n(172799);
function s(e) {
    return e.type === a.Xd.GROUP_DM || (null != e.channel && (0, i.MK)(e.channel.type));
}
function o(e) {
    let t = e.guild_scheduled_event;
    return null != t && (0, r.d6)(t);
}
function l(e) {
    return e.target_type === a.yV.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function u(e) {
    return e.target_type === a.yV.STREAM && null != e.target_user;
}
function c(e) {
    return e.type === a.Xd.FRIEND || (null == e.guild && null != e.inviter);
}
function d(e) {
    return e.target_type === a.yV.EMBEDDED_APPLICATION;
}
function _(e) {
    return "number" == typeof e.type ? e.type : s(e) ? a.Xd.GROUP_DM : c(e) ? a.Xd.FRIEND : a.Xd.GUILD;
}
