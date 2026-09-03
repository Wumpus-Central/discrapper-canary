n.d(t, { G4: () => o, On: () => c, Xd: () => a.Xd, d4: () => l, ly: () => s, oK: () => d }), n(107123);
var i = n(698441),
    r = n(95701),
    a = n(172799);
function s(e) {
    let t = e.guild_scheduled_event;
    return null != t && (0, i.d6)(t);
}
function l(e) {
    return e.target_type === a.yV.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function o(e) {
    return e.target_type === a.yV.STREAM && null != e.target_user;
}
function d(e) {
    return e.target_type === a.yV.EMBEDDED_APPLICATION;
}
function c(e) {
    return "number" == typeof e.type
        ? e.type
        : e.type === a.Xd.GROUP_DM || (null != e.channel && (0, r.MK)(e.channel.type))
          ? a.Xd.GROUP_DM
          : e.type === a.Xd.FRIEND || (null == e.guild && null != e.inviter)
            ? a.Xd.FRIEND
            : a.Xd.GUILD;
}
