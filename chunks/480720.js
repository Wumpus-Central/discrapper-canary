"use strict";
n.d(t, { A: () => h });
var i = n(64700),
    s = n(734057),
    l = n(309010),
    r = n(203982),
    a = n(969151),
    o = n(108959),
    c = n(90804),
    d = n(748975),
    u = n(652215);
function h(e) {
    let { onTransition: t } = e;
    i.useEffect(() => {
        async function e(e) {
            let { location: n } = e,
                i = (0, a.H)(n);
            if (null == i || !(0, o.A)(i)) return;
            l.A.getVoiceChannelId() !== i && (await (0, c.A)({ channelId: i }));
            let r = s.A.getChannel(i),
                u = r?.guild_id;
            setTimeout(() => {
                (0, d.A)(u, n), t?.();
            }, 0);
        }
        return (
            r._.subscribe(u.jej.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                r._.unsubscribe(u.jej.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
