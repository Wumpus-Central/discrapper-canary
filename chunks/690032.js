n.d(t, { o: () => a }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(593473),
    i = n(591759);
let o = (e) => {
        if (null == e || '' === e) return null;
        try {
            let t = new URL(e);
            return i.Z.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null;
        } catch (e) {
            return null;
        }
    },
    a = (e) => {
        let t = (0, r.parse)(e);
        return {
            desktop: o(t.desktop_link),
            mobile: o(t.mobile_link)
        };
    };
