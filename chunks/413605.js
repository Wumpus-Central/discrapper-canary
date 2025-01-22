r.d(n, {
    $P: function () {
        return c;
    },
    P1: function () {
        return p;
    },
    TY: function () {
        return d;
    },
    Tx: function () {
        return l;
    },
    VR: function () {
        return h;
    },
    W6: function () {
        return u;
    },
    wx: function () {
        return o.wx;
    }
});
var i = r(924301),
    a = r(131704),
    o = r(245335);
function s(e) {
    return e.type === o.wx.GROUP_DM || (null != e.channel && (0, a.bc)(e.channel.type));
}
function l(e) {
    let n = e.guild_scheduled_event;
    return null != n && (0, i.Ld)(n);
}
function u(e) {
    return e.target_type === o.Iq.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function c(e) {
    return null != e.channel && null != e.stage_instance;
}
function d(e) {
    return e.target_type === o.Iq.STREAM && null != e.target_user;
}
function f(e) {
    return e.type === o.wx.FRIEND || (null == e.guild && null != e.inviter);
}
function p(e) {
    return e.target_type === o.Iq.EMBEDDED_APPLICATION;
}
function h(e) {
    return 'number' == typeof e.type ? e.type : s(e) ? o.wx.GROUP_DM : f(e) ? o.wx.FRIEND : o.wx.GUILD;
}
