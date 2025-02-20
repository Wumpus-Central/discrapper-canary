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
            let { location: n } = e,
                r = (0, a.pY)(n);
            if (null == r || !(0, s.Z)(r)) return;
            l.Z.getVoiceChannelId() !== r && (await (0, c.Z)({ channelId: r }));
            let o = i.Z.getChannel(r),
                d = null == o ? void 0 : o.guild_id;
            setTimeout(() => {
                (0, u.Z)(d, n), null == t || t();
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
