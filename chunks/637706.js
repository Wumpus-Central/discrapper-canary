var l = n(855986),
    r = n(97352),
    i = n(975571),
    u = n(448645),
    o = n(580630),
    a = n(682901),
    s = n(792996);
n.d(
    t,
    {},
    {
        C: function (e, t) {
            let n = e?.id != null && "" !== e.id ? e.id : t;
            if ("" === n) return null;
            let l = e?.linkText != null && "" !== e.linkText ? e.linkText : s.intl.string(s.t["sBp+u0"]);
            return { url: i.A.getArticleURL(n), linkText: l };
        },
        a: function (e) {
            let t = "...",
                n = (0, l.bG)([r.A], () => r.A.isLoadedForSKU(a.pe.TIER_2));
            if (-1 !== e.indexOf("{price}") && n)
                try {
                    let e = u.Ay.getDefaultPrice(a.gD.PREMIUM_MONTH_TIER_2);
                    t = (0, o.$g)(e.amount, e.currency);
                } catch {}
            return e.replace(/\{price\}/g, t);
        },
    },
);
