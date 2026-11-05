let i = new Set(["conjure.town", "conjure.city"]),
    r = /^\/([0-9]{17,20})\/[a-z0-9-]{1,48}(?:\/([A-Za-z0-9_-]{16,200}\.[A-Za-z0-9_-]{16,64}))?\/?$/;
n.d(
    t,
    {},
    {
        t: function (e) {
            if ("https:" !== e.protocol && "http:" !== e.protocol) return null;
            let t = e.host?.toLowerCase().replace(/^www[.]/, "");
            if (null == t || !i.has(t)) return null;
            let n = e.pathname?.match(r);
            return null == n ? null : { applicationId: n[1], ticket: n[2] ?? null };
        },
    },
);
