n.d(t, {
    $P: () => c,
    P1: () => f,
    TY: () => u,
    Tx: () => s,
    VR: () => _,
    W6: () => l,
    wx: () => a.wx
});
var r = n(924301),
    i = n(131704),
    a = n(245335);
function o(e) {
    return e.type === a.wx.GROUP_DM || (null != e.channel && (0, i.bc)(e.channel.type));
}
function s(e) {
    let t = e.guild_scheduled_event;
    return null != t && (0, r.Ld)(t);
}
function l(e) {
    return e.target_type === a.Iq.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function c(e) {
    return null != e.channel && null != e.stage_instance;
}
function u(e) {
    return e.target_type === a.Iq.STREAM && null != e.target_user;
}
function d(e) {
    return e.type === a.wx.FRIEND || (null == e.guild && null != e.inviter);
}
function f(e) {
    return e.target_type === a.Iq.EMBEDDED_APPLICATION;
}
function _(e) {
    return 'number' == typeof e.type ? e.type : o(e) ? a.wx.GROUP_DM : d(e) ? a.wx.FRIEND : a.wx.GUILD;
}
