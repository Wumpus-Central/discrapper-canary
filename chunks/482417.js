l.d(n, { Z: () => o }), l(47120);
var t = l(423875),
    i = l(740605),
    r = l(206583),
    a = l(616922),
    s = l(388032);
function o(e) {
    let n,
        { entry: l, baseEntryData: o } = e,
        u = l.extra.entries[0].media,
        c = u.artists[0],
        { title: d, provider: m, image_url: h } = u,
        p = c.name,
        x = {
            onClick: () => (0, i.o)(a.Hw.TRACK, u.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar6, { itemName: d })
        },
        v = {
            onClick: () => (0, i.o)(a.Hw.ARTIST, c.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar6, { itemName: p })
        };
    return (
        m === t.p.SPOTIFY && (n = { type: r.kG.SPOTIFY }),
        {
            ...o,
            title: d,
            subtitle: p,
            thumbnailUrl: h,
            titleClickable: x,
            subtitleClickable: v,
            thumbnailClickable: x,
            userDescription: s.t.CcVI1d,
            providerIconProps: n
        }
    );
}
