n.d(t, { A: () => o });
var l = n(205327),
    a = n(261020),
    r = n(424994),
    s = n(272984),
    i = n(985018);
function o(e) {
    let t,
        { entry: n, baseEntryData: o } = e,
        d = n.extra.entries[0].media,
        c = d.artists[0],
        { title: u, provider: m, image_url: p } = d,
        A = c.name,
        h = {
            onClick: () => (0, a.n)(s.M0.TRACK, d.external_id),
            ariaDescription: i.intl.formatToPlainString(i.t.xTsar2, { itemName: u }),
        },
        C = {
            onClick: () => (0, a.n)(s.M0.ARTIST, c.external_id),
            ariaDescription: i.intl.formatToPlainString(i.t.xTsar2, { itemName: A }),
        };
    return (
        m === l.X.SPOTIFY && (t = { type: r.a4.SPOTIFY }),
        {
            ...o,
            title: u,
            subtitle: A,
            thumbnailUrl: p,
            titleClickable: h,
            subtitleClickable: C,
            thumbnailClickable: h,
            userDescription: i.t.CcVI1T,
            providerIconProps: t,
        }
    );
}
