var A = _(855986),
    n = _(97352),
    l = _(975571),
    T = _(722178),
    N = _(580630),
    E = _(682901),
    r = _(792996);
_.d(
    e,
    {},
    {
        C: function (t, e) {
            let _ = t?.id != null && "" !== t.id ? t.id : e;
            if ("" === _) return null;
            let A = t?.linkText != null && "" !== t.linkText ? t.linkText : r.intl.string(r.t["sBp+u0"]);
            return { url: l.A.getArticleURL(_), linkText: A };
        },
        a: function (t) {
            let e = "...",
                _ = (0, A.bG)([n.A], () => n.A.isLoadedForSKU(E.pe.TIER_2));
            if (-1 !== t.indexOf("{price}") && _)
                try {
                    let t = T.Ay.getDefaultPrice(E.gD.PREMIUM_MONTH_TIER_2);
                    e = (0, N.$g)(t.amount, t.currency);
                } catch {}
            return t.replace(/\{price\}/g, e);
        },
    },
);
