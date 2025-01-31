n.d(t, { o: () => s }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(593473),
    r = n(591759);
let a = (e) => {
        if (null == e || '' === e) return null;
        try {
            let t = new URL(e);
            return r.Z.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null;
        } catch (e) {
            return null;
        }
    },
    s = (e) => {
        let t = (0, i.parse)(e);
        return {
            desktop: a(t.desktop_link),
            mobile: a(t.mobile_link)
        };
    };
