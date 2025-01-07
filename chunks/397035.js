t.d(n, {
    Z: function () {
        return d;
    }
});
var l = t(192379),
    i = t(835473),
    r = t(81063),
    a = t(591759),
    o = t(561308),
    s = t(206583),
    c = t(701488),
    u = t(388032);
function d(e) {
    let n,
        { entry: t, baseEntryData: d } = e,
        m = (0, i.q)(t.extra.application_id),
        f = null == m ? void 0 : m.getIconURL(128),
        p = (0, r.getAssetImage)(t.extra.application_id, t.extra.media_assets_large_image, [c.Si.LARGE, c.Si.LARGE]),
        h = t.extra.media_title,
        x = t.extra.media_subtitle,
        v = (0, o.Jg)(t) ? u.t['LH+Z39'] : u.t.YuKgmp,
        C = { type: s.kG.CRUNCHYROLL },
        g = l.useMemo(() => {
            if (null == t.extra.url) return;
            let e = a.Z.safeParseWithQuery(t.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [t.extra.url]);
    return (
        null != g &&
            (n = {
                href: a.Z.format(g),
                ariaDescription: u.intl.formatToPlainString(u.t.aFFQ3t, { title: h })
            }),
        {
            ...d,
            thumbnailUrl: null != p ? p : f,
            title: h,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: x,
            userDescription: v,
            providerIconProps: C
        }
    );
}
