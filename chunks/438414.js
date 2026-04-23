n.d(t, { A: () => o });
var a = n(205327),
    l = n(261020),
    r = n(424994),
    i = n(272984),
    s = n(985018);
function o(e) {
    let t,
        { entry: n, baseEntryData: o } = e,
        d = n.extra.entries[0].media,
        c = d.artists[0],
        { title: u, provider: m, image_url: _ } = d,
        p = c.name,
        h = {
            onClick: () => (0, l.n)(i.M0.TRACK, d.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, { itemName: u }),
        },
        A = {
            onClick: () => (0, l.n)(i.M0.ARTIST, c.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, { itemName: p }),
        };
    return (
        m === a.X.SPOTIFY && (t = { type: r.a4.SPOTIFY }),
        {
            ...o,
            title: u,
            subtitle: p,
            thumbnailUrl: _,
            titleClickable: h,
            subtitleClickable: A,
            thumbnailClickable: h,
            userDescription: s.t.CcVI1T,
            providerIconProps: t,
        }
    );
}
