n.d(t, { A: () => u });
var a = n(64700),
    l = n(429913),
    r = n(139675),
    i = n(998218),
    s = n(583846),
    o = n(424994),
    d = n(360469),
    c = n(985018);
function u(e) {
    let t,
        { entry: n, baseEntryData: u } = e,
        m = (0, l.h)(n.extra.application_id),
        _ = m?.getIconURL(128),
        p = (0, r.uD)(n.extra.application_id, n.extra.media_assets_large_image, [d.iu.LARGE, d.iu.LARGE]),
        h = n.extra.media_title,
        A = n.extra.media_subtitle,
        C = (0, s.Hd)(n) ? c.t["LH+Z3y"] : c.t.YuKgml,
        x = { type: o.a4.CRUNCHYROLL },
        f = a.useMemo(() => {
            if (null == n.extra.url) return;
            let e = i.A.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [n.extra.url]);
    return (
        null != f &&
            (t = { href: i.A.format(f), ariaDescription: c.intl.formatToPlainString(c.t.aFFQ3g, { title: h }) }),
        {
            ...u,
            thumbnailUrl: p ?? _,
            title: h,
            titleClickable: t,
            thumbnailClickable: t,
            subtitle: A,
            userDescription: C,
            providerIconProps: x,
        }
    );
}
