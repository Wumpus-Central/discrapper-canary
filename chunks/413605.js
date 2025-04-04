n.d(t, {
    $P: () => c,
    P1: () => f,
    TY: () => u,
    Tx: () => s,
    VR: () => _,
    W6: () => l,
    wx: () => o.wx
});
var r = n(924301),
    i = n(131704),
    o = n(245335);
function a(e) {
    return e.type === o.wx.GROUP_DM || (null != e.channel && (0, i.bc)(e.channel.type));
}
function s(e) {
    let t = e.guild_scheduled_event;
    return null != t && (0, r.Ld)(t);
}
function l(e) {
    return e.target_type === o.Iq.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function c(e) {
    return null != e.channel && null != e.stage_instance;
}
function u(e) {
    return e.target_type === o.Iq.STREAM && null != e.target_user;
}
function d(e) {
    return e.type === o.wx.FRIEND || (null == e.guild && null != e.inviter);
}
function f(e) {
    return e.target_type === o.Iq.EMBEDDED_APPLICATION;
}
function _(e) {
    return 'number' == typeof e.type ? e.type : a(e) ? o.wx.GROUP_DM : d(e) ? o.wx.FRIEND : o.wx.GUILD;
}
