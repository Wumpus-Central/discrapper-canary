n.d(t, {
    $P: () => u,
    P1: () => f,
    TY: () => c,
    Tx: () => o,
    VR: () => _,
    W6: () => l,
    wx: () => a.wx
});
var i = n(924301),
    r = n(131704),
    a = n(245335);
function s(e) {
    return e.type === a.wx.GROUP_DM || (null != e.channel && (0, r.bc)(e.channel.type));
}
function o(e) {
    let t = e.guild_scheduled_event;
    return null != t && (0, i.Ld)(t);
}
function l(e) {
    return e.target_type === a.Iq.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function u(e) {
    return null != e.channel && null != e.stage_instance;
}
function c(e) {
    return e.target_type === a.Iq.STREAM && null != e.target_user;
}
function d(e) {
    return e.type === a.wx.FRIEND || (null == e.guild && null != e.inviter);
}
function f(e) {
    return e.target_type === a.Iq.EMBEDDED_APPLICATION;
}
function _(e) {
    return 'number' == typeof e.type ? e.type : s(e) ? a.wx.GROUP_DM : d(e) ? a.wx.FRIEND : a.wx.GUILD;
}
