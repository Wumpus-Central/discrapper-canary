n.d(t, {
    S: () => c,
});
var r = n(136722);
n(311907);
var i = n(717125),
    a = n(734057),
    s = n(488926),
    o = n(652215);

function l(e) {
    return null != e && o.kvI.GUILD_VOCAL.has(e.type) ? r.kg(o.xBc.VIEW_CHANNEL, o.xBc.CONNECT) : o.xBc.VIEW_CHANNEL;
}

function c(e, t) {
    let n = l(a.A.getChannel(t));
    return i.A.isChannelGated(e, t) || s.MJ(n, a.A.getChannel(t));
}
