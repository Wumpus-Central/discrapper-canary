var i = n(136722);
n(855986);
var r = n(717125),
    a = n(734057),
    s = n(488926),
    l = n(652215);
n.d(
    t,
    {},
    {
        S: function (e, t) {
            var n;
            let o =
                null != (n = a.A.getChannel(t)) && l.kvI.GUILD_VOCAL.has(n.type)
                    ? i.kg(l.xBc.VIEW_CHANNEL, l.xBc.CONNECT)
                    : l.xBc.VIEW_CHANNEL;
            return r.A.isChannelGated(e, t) || s.MJ(o, a.A.getChannel(t));
        },
    },
);
