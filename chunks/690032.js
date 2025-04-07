n.d(t, { o: () => a }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
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
