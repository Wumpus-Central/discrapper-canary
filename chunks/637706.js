var A = _(855986),
    n = _(97352),
    l = _(975571),
    r = _(448645),
    E = _(580630),
    N = _(682901),
    i = _(792996);
_.d(
    t,
    {},
    {
        C: function (e, t) {
            let _ = e?.id != null && "" !== e.id ? e.id : t;
            if ("" === _) return null;
            let A = e?.linkText != null && "" !== e.linkText ? e.linkText : i.intl.string(i.t["sBp+u0"]);
            return { url: l.A.getArticleURL(_), linkText: A };
        },
        a: function (e) {
            let t = "...",
                _ = (0, A.bG)([n.A], () => n.A.isLoadedForSKU(N.pe.TIER_2));
            if (-1 !== e.indexOf("{price}") && _)
                try {
                    let e = r.Ay.getDefaultPrice(N.gD.PREMIUM_MONTH_TIER_2);
                    t = (0, E.$g)(e.amount, e.currency);
                } catch {}
            return e.replace(/\{price\}/g, t);
        },
    },
);
