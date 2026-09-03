n.d(t, { u: () => a });
var l = n(17928),
    i = n(287809),
    s = n(20805),
    r = n(327098);
function a(e) {
    let t = (0, l.bG)([i.default], () => i.default.getUser(e.author_id)),
        { activity: n, embeddedActivity: a } = (0, r.A)(e);
    if (null == n)
        return {
            isRich: !1,
            appName: (0, s.zD)(e) ? e.extra.game_name : void 0,
            user: t,
            activity: void 0,
            embeddedActivity: void 0,
            state: void 0,
            details: void 0,
            party: void 0,
        };
    let o = n.assets?.large_image != null || n.assets?.small_image != null,
        u = n.assets?.large_text != null || n.assets?.small_text != null,
        c = n.name ?? ("game_name" in e.extra ? e.extra.game_name : void 0),
        d = n.details,
        h = n.state,
        m = n.party;
    return {
        isRich: o || u || null != d || null != h || null != m,
        user: t,
        activity: n,
        state: h,
        details: d,
        party: m,
        appName: c,
        embeddedActivity: a,
    };
}
