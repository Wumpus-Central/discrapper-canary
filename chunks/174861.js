(t(508300), t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162));
var n = t(281445);
let o = /^[0-9]+$/,
    a = new Set(Object.values(n.X));
function i(e) {
    return null == e || "string" == typeof e;
}
t.d(
    r,
    {},
    {
        GF: function (e) {
            try {
                var r, t;
                let n = e.replace(/-/g, "+").replace(/_/g, "/"),
                    l = n.padEnd(4 * Math.ceil(n.length / 4), "="),
                    c = atob(l),
                    p = Uint8Array.from(c, (e) => e.charCodeAt(0)),
                    s = new TextDecoder().decode(p),
                    u = JSON.parse(s);
                if (
                    !(
                        "string" == typeof u.name &&
                        "string" == typeof u.game_id &&
                        i(u.plan_name) &&
                        i(u.image_url) &&
                        i(u.region_name) &&
                        i(u.ip) &&
                        i(u.port) &&
                        (null == (r = u.sku_id) || "" === r || ("string" == typeof r && o.test(r))) &&
                        (null == (t = u.provider) || ("string" == typeof t && a.has(t)))
                    )
                )
                    return null;
                return u;
            } catch {
                return null;
            }
        },
        gG: function (e) {
            return `${location.protocol}//${location.host}/game-servers/share/${(function (e) {
                let r = JSON.stringify(e),
                    t = new TextEncoder().encode(r),
                    n = "";
                for (let e of t) n += String.fromCharCode(e);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
            })(e)}`;
        },
    },
);
