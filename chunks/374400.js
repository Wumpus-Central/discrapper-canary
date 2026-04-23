"use strict";
n.d(t, { Z: () => a }), n(323874), n(14289), n(35956);
var r = n(492462),
    i = n(998218);
let s = (e) => {
        if (null == e || "" === e) return null;
        try {
            let t = new URL(e);
            return i.A.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null;
        } catch (e) {
            return null;
        }
    },
    a = (e) => {
        let t = (0, r.parse)(e);
        return { desktop: s(t.desktop_link), mobile: s(t.mobile_link) };
    };
