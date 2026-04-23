n.d(t, { A: () => h });
var a = n(681154),
    l = n(808380),
    r = n(429913),
    i = n(409626),
    s = n(692969),
    o = n(583846),
    d = n(424994),
    c = n(158611),
    u = n(360469),
    m = n(985018);
let _ = { [l.Y.XBOX]: d.a4.XBOX, [l.Y.PLAYSTATION]: d.a4.PLAYSTATION },
    p = { [c.Z.EMBED]: i.Ob.Embed };
function h(e) {
    let t,
        n,
        { entry: l, location: i, baseEntryData: d } = e,
        c = (0, r.h)(l.extra.application_id),
        h = c?.getIconURL(u.iu.LARGE),
        A = l.extra.game_name;
    if (null != l.extra.platform) {
        let e = _[l.extra.platform];
        null != e && (t = { type: e });
    }
    n =
        l.content_type === a.ContentInventoryEntryType.PLAYED_GAME && (0, o.JM)(l) && !(0, o.I5)(l)
            ? m.t.vPg1JT
            : m.t.rPqqts;
    let C = p[i],
        x = {
            onClick: (0, s.A)({
                location: C,
                applicationId: l.extra.application_id,
                source: C,
                trackEntryPointImpression: !0,
                sourceUserId: l.author_id,
            }),
            ariaDescription: m.intl.formatToPlainString(m.t["9sZWVp"], { gameName: A }),
        };
    return {
        ...d,
        thumbnailUrl: h,
        title: A,
        titleClickable: x,
        thumbnailClickable: x,
        userDescription: n,
        providerIconProps: t,
    };
}
