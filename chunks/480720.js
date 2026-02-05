n.d(t, { A: () => h });
var i = n(64700),
    l = n(734057),
    s = n(309010),
    a = n(203982),
    r = n(969151),
    o = n(108959),
    d = n(90804),
    c = n(748975),
    u = n(652215);
function h(e) {
    let { onTransition: t } = e;
    i.useEffect(() => {
        async function e(e) {
            let { location: n } = e,
                i = (0, r.H)(n);
            if (null == i || !(0, o.A)(i)) return;
            s.A.getVoiceChannelId() !== i && (await (0, d.A)({ channelId: i }));
            let a = l.A.getChannel(i),
                u = a?.guild_id;
            setTimeout(() => {
                (0, c.A)(u, n), t?.();
            }, 0);
        }
        return (
            a._.subscribe(u.jej.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                a._.unsubscribe(u.jej.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
