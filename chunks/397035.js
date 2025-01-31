l.d(n, { Z: () => d });
var t = l(192379),
    i = l(835473),
    r = l(81063),
    a = l(591759),
    s = l(561308),
    o = l(206583),
    u = l(701488),
    c = l(388032);
function d(e) {
    let n,
        { entry: l, baseEntryData: d } = e,
        m = (0, i.q)(l.extra.application_id),
        h = null == m ? void 0 : m.getIconURL(128),
        p = (0, r.getAssetImage)(l.extra.application_id, l.extra.media_assets_large_image, [u.Si.LARGE, u.Si.LARGE]),
        x = l.extra.media_title,
        v = l.extra.media_subtitle,
        f = (0, s.Jg)(l) ? c.t['LH+Z39'] : c.t.YuKgmp,
        C = { type: o.kG.CRUNCHYROLL },
        g = t.useMemo(() => {
            if (null == l.extra.url) return;
            let e = a.Z.safeParseWithQuery(l.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [l.extra.url]);
    return (
        null != g &&
            (n = {
                href: a.Z.format(g),
                ariaDescription: c.intl.formatToPlainString(c.t.aFFQ3t, { title: x })
            }),
        {
            ...d,
            thumbnailUrl: null != p ? p : h,
            title: x,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: v,
            userDescription: f,
            providerIconProps: C
        }
    );
}
