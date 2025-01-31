l.d(n, { Z: () => o });
var t = l(423875),
    i = l(740605),
    r = l(206583),
    a = l(616922),
    s = l(388032);
function o(e) {
    let n,
        { entry: l, baseEntryData: o } = e,
        { provider: u, image_url: c } = l.extra.media,
        d = l.extra.artist.name,
        m = {
            onClick: () => (0, i.o)(a.Hw.ALBUM, l.extra.media.external_parent_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar6, { itemName: l.extra.media.parent_title })
        },
        h = {
            onClick: () => (0, i.o)(a.Hw.ARTIST, l.extra.artist.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar6, { itemName: d })
        };
    return (
        u === t.p.SPOTIFY && (n = { type: r.kG.SPOTIFY }),
        {
            ...o,
            title: d,
            thumbnailUrl: c,
            titleClickable: h,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription: s.t.CcVI1d,
            providerIconProps: n
        }
    );
}
