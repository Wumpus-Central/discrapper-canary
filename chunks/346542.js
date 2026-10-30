n.d(t, { G4: () => d, On: () => u, Xd: () => s.Xd, d4: () => o, ly: () => l, oK: () => c });
var i = n(294630);
n(107123);
var r = n(698441),
    a = n(95701),
    s = n(172799);
function l(e) {
    let t = e.guild_scheduled_event;
    return null != t && (0, r.d6)(t);
}
function o(e) {
    return e.target_type === i.y.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function d(e) {
    return e.target_type === i.y.STREAM && null != e.target_user;
}
function c(e) {
    return e.target_type === i.y.EMBEDDED_APPLICATION;
}
function u(e) {
    return "number" == typeof e.type
        ? e.type
        : e.type === s.Xd.GROUP_DM || (null != e.channel && (0, a.MK)(e.channel.type))
          ? s.Xd.GROUP_DM
          : e.type === s.Xd.FRIEND || (null == e.guild && null != e.inviter)
            ? s.Xd.FRIEND
            : s.Xd.GUILD;
}
