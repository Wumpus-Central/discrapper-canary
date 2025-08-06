n.d(t, { Z: () => h });
var r = n(73800),
    i = n(592125),
    l = n(944486),
    a = n(585483),
    s = n(16609),
    o = n(917107),
    c = n(89425),
    u = n(197386),
    d = n(981631);
function h(e) {
    let { onTransition: t } = e;
    r.useEffect(() => {
        async function e(e) {
            let { location: n } = e,
                r = (0, s.p)(n);
            if (null == r || !(0, o.Z)(r)) return;
            l.Z.getVoiceChannelId() !== r && (await (0, c.Z)({ channelId: r }));
            let a = i.Z.getChannel(r),
                d = null == a ? void 0 : a.guild_id;
            setTimeout(() => {
                ((0, u.Z)(d, n), null == t || t());
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
