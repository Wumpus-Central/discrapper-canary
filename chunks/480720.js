n.d(t, {
    A: () => f,
});
var r = n(64700),
    l = n(734057),
    i = n(309010),
    a = n(203982),
    s = n(969151),
    o = n(108959),
    c = n(90804),
    u = n(748975),
    d = n(652215);

function f(e) {
    let { onTransition: t } = e;
    r.useEffect(() => {
        async function e(e) {
            let { location: n } = e,
                r = (0, s.H)(n);
            if (null == r || !(0, o.A)(r)) return;
            i.A.getVoiceChannelId() !== r &&
                (await (0, c.A)({
                    channelId: r,
                }));
            let a = l.A.getChannel(r),
                d = null == a ? void 0 : a.guild_id;
            setTimeout(() => {
                (0, u.A)(d, n), null == t || t();
            }, 0);
        }
        return (
            a._.subscribe(d.jej.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                a._.unsubscribe(d.jej.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
