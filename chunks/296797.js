n.d(t, { Z: () => p });
var r = n(192379),
    i = n(592125),
    l = n(944486),
    o = n(585483),
    a = n(16609),
    s = n(917107),
    c = n(89425),
    u = n(197386),
    d = n(981631);
function p(e) {
    let { onTransition: t } = e;
    r.useEffect(() => {
        async function e(e) {
            var n;
            let { location: r } = e,
                o = null != (n = (0, a.pY)(r)) ? n : (0, a.wq)(r);
            if (null == o || !(0, s.Z)(o)) return;
            l.Z.getVoiceChannelId() !== o && (await (0, c.Z)({ channelId: o }));
            let d = i.Z.getChannel(o),
                p = null == d ? void 0 : d.guild_id;
            setTimeout(() => {
                (0, u.Z)(p, r), null == t || t();
            }, 0);
        }
        return (
            o.S.subscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                o.S.unsubscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
