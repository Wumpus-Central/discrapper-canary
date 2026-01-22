n.d(t, {
    Z: () => s,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(492462),
    i = n(998218);
let a = (e) => {
        if (null == e || "" === e) return null;
        try {
            let t = new URL(e);
            return i.A.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null;
        } catch (e) {
            return null;
        }
    },
    s = (e) => {
        let t = (0, r.parse)(e);
        return {
            desktop: a(t.desktop_link),
            mobile: a(t.mobile_link),
        };
    };
