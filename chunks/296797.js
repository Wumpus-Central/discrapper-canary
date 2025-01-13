n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(192379),
    l = n(592125),
    r = n(944486),
    a = n(585483),
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
                i = (0, s.p)(n);
            if (null == i || !(0, o.Z)(i)) return;
            r.Z.getVoiceChannelId() !== i && (await (0, c.Z)({ channelId: i }));
            let a = l.Z.getChannel(i),
                u = null == a ? void 0 : a.guild_id;
            setTimeout(() => {
                (0, d.Z)(u, n), null == t || t();
            }, 0);
        }
        return (
            a.S.subscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                a.S.unsubscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
