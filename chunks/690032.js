n.d(t, { o: () => o }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(593473),
    i = n(591759);
let a = (e) => {
        if (null == e || '' === e) return null;
        try {
            let t = new URL(e);
            return i.Z.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null;
        } catch (e) {
            return null;
        }
    },
    o = (e) => {
        let t = (0, r.parse)(e);
        return {
            desktop: a(t.desktop_link),
            mobile: a(t.mobile_link)
        };
    };
