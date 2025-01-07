t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(876215),
    i = t(758713),
    r = t(835473),
    a = t(810568),
    o = t(168524),
    s = t(561308),
    c = t(206583),
    u = t(96513),
    d = t(701488),
    m = t(388032);
let f = {
        [i.z.XBOX]: c.kG.XBOX,
        [i.z.PLAYSTATION]: c.kG.PLAYSTATION
    },
    p = { [u._.EMBED]: a.m1.Embed };
function h(e) {
    let n,
        t,
        { entry: i, location: a, baseEntryData: c } = e,
        u = (0, r.q)(i.extra.application_id),
        h = null == u ? void 0 : u.getIconURL(d.Si.LARGE),
        x = i.extra.game_name;
    if (null != i.extra.platform) {
        let e = f[i.extra.platform];
        null != e && (n = { type: e });
    }
    t = i.content_type === l.s.PLAYED_GAME ? ((0, s.kr)(i) && !(0, s.n2)(i) ? m.t.vPg1JS : m.t.rPqqtr) : m.t.rPqqtr;
    let v = p[a],
        C = {
            onClick: (0, o.Z)({
                location: v,
                applicationId: i.extra.application_id,
                source: v,
                trackEntryPointImpression: !0,
                sourceUserId: i.author_id
            }),
            ariaDescription: m.intl.formatToPlainString(m.t['9sZWVl'], { gameName: x })
        };
    return {
        ...c,
        thumbnailUrl: h,
        title: x,
        titleClickable: C,
        thumbnailClickable: C,
        userDescription: t,
        providerIconProps: n
    };
}
