n(855986);
var i = n(734057),
    r = n(576705),
    a = n(309010),
    s = n(652215);
function l(e) {
    if (null == e) return !1;
    if (s.kvI.CALLABLE.has(e.type)) return !0;
    let t = r.A.can(s.xBc.USE_SOUNDBOARD, e),
        n = r.A.can(s.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n;
}
n.d(
    t,
    {},
    {
        Ay: l,
        lI: function () {
            let e = a.Ay.getVoiceChannelId();
            return l(i.A.getChannel(e));
        },
    },
);
