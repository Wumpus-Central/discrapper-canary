(n(323874), n(14289), n(35956), n(508300));
let i = new Set(["conjure.town", "conjure.city"]),
    r = /^\/([0-9]{17,20})\/[a-z0-9-]{1,48}(?:\/([A-Za-z0-9_-]{16,200}\.[A-Za-z0-9_-]{16,64}))?\/?$/;
function a(e) {
    if ("https:" !== e.protocol && "http:" !== e.protocol) return null;
    let t = e.host?.toLowerCase().replace(/^www[.]/, "");
    if (null == t || !i.has(t)) return null;
    let n = e.pathname?.match(r);
    return null == n ? null : { applicationId: n[1], ticket: n[2] ?? null };
}
n.d(
    t,
    {},
    {
        BL: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            try {
                let n = e.split(".", 1)[0].replace(/-/g, "+").replace(/_/g, "/"),
                    i = JSON.parse(atob(n)).exp;
                return "number" == typeof i && 1e3 * i <= t;
            } catch {
                return !1;
            }
        },
        Pl: function (e, t) {
            return null == t ? e : `${e}/${t}`;
        },
        iW: function (e) {
            try {
                return a(new URL(e))?.ticket ?? null;
            } catch {
                return null;
            }
        },
        tY: a,
    },
);
