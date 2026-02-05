n.d(t, { A: () => u });
var l = n(64700),
    a = n(429913),
    r = n(139675),
    s = n(998218),
    i = n(583846),
    o = n(424994),
    d = n(360469),
    c = n(985018);
function u(e) {
    let t,
        { entry: n, baseEntryData: u } = e,
        m = (0, a.h)(n.extra.application_id),
        p = m?.getIconURL(128),
        A = (0, r.uD)(n.extra.application_id, n.extra.media_assets_large_image, [d.iu.LARGE, d.iu.LARGE]),
        h = n.extra.media_title,
        C = n.extra.media_subtitle,
        E = (0, i.Hd)(n) ? c.t["LH+Z3y"] : c.t.YuKgml,
        x = { type: o.a4.CRUNCHYROLL },
        N = l.useMemo(() => {
            if (null == n.extra.url) return;
            let e = s.A.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [n.extra.url]);
    return (
        null != N &&
            (t = { href: s.A.format(N), ariaDescription: c.intl.formatToPlainString(c.t.aFFQ3g, { title: h }) }),
        {
            ...u,
            thumbnailUrl: A ?? p,
            title: h,
            titleClickable: t,
            thumbnailClickable: t,
            subtitle: C,
            userDescription: E,
            providerIconProps: x,
        }
    );
}
