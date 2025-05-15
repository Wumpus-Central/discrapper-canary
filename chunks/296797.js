n.d(t, { Z: () => p });
var r = n(73800),
    i = n(592125),
    l = n(944486),
    a = n(585483),
    o = n(16609),
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
                a = null != (n = (0, o.pY)(r)) ? n : (0, o.wq)(r);
            if (null == a || !(0, s.Z)(a)) return;
            l.Z.getVoiceChannelId() !== a && (await (0, c.Z)({ channelId: a }));
            let d = i.Z.getChannel(a),
                p = null == d ? void 0 : d.guild_id;
            setTimeout(() => {
                (0, u.Z)(p, r), null == t || t();
            }, 0);
        }
        return (
            a.S.subscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                a.S.unsubscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
