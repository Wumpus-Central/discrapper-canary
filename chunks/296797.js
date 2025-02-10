n.d(t, { Z: () => h });
var i = n(192379),
    l = n(592125),
    a = n(944486),
    r = n(585483),
    s = n(16609),
    o = n(917107),
    c = n(89425),
    d = n(197386),
    u = n(981631);
function h(e) {
    let { onTransition: t } = e;
    i.useEffect(() => {
        async function e(e) {
            let { location: n } = e,
                i = (0, s.pY)(n);
            if (null == i || !(0, o.Z)(i)) return;
            a.Z.getVoiceChannelId() !== i && (await (0, c.Z)({ channelId: i }));
            let r = l.Z.getChannel(i),
                u = null == r ? void 0 : r.guild_id;
            setTimeout(() => {
                (0, d.Z)(u, n), null == t || t();
            }, 0);
        }
        return (
            r.S.subscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                r.S.unsubscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
