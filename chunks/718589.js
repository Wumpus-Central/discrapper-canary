n.d(t, { Z: () => r });
var i = n(981631),
    l = n(388032);
function r(e) {
    let { channel: t, embeddedApps: n } = e;
    if (t.type === i.d4z.GUILD_VOICE) {
        if (null == n || !(n.length > 0)) return;
        {
            let e = n.map((e) => e.application.name);
            return l.intl.formatToPlainString(l.t.LmYuHR, { activeActivities: e.join(', ') });
        }
    }
}
