r.d(n, {
    o: function () {
        return p;
    }
});
var i = r(315314);
var a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(593473),
    d = r(591759);
let f = (e) => {
        if (null == e || '' === e) return null;
        try {
            let n = new URL(e);
            return d.Z.isDiscordHostname(n.hostname) || window.location.host === n.host ? n : null;
        } catch (e) {
            return null;
        }
    },
    p = (e) => {
        let n = (0, c.parse)(e);
        return {
            desktop: f(n.desktop_link),
            mobile: f(n.mobile_link)
        };
    };
