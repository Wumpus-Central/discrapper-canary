n.d(e, { u: () => a });
var l = n(17928),
    r = n(287809),
    i = n(20805),
    o = n(327098);
function a(t) {
    let e = (0, l.bG)([r.default], () => r.default.getUser(t.author_id)),
        { activity: n, embeddedActivity: a } = (0, o.A)(t);
    if (null == n)
        return {
            isRich: !1,
            appName: (0, i.zD)(t) ? t.extra.game_name : void 0,
            user: e,
            activity: void 0,
            embeddedActivity: void 0,
            state: void 0,
            details: void 0,
            party: void 0,
        };
    let s = n.assets?.large_image != null || n.assets?.small_image != null,
        u = n.assets?.large_text != null || n.assets?.small_text != null,
        c = n.name ?? ("game_name" in t.extra ? t.extra.game_name : void 0),
        d = n.details,
        x = n.state,
        C = n.party;
    return {
        isRich: s || u || null != d || null != x || null != C,
        user: e,
        activity: n,
        state: x,
        details: d,
        party: C,
        appName: c,
        embeddedActivity: a,
    };
}
