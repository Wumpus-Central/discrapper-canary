n.d(t, {
    u: () => o,
});
var r = n(311907),
    i = n(287809),
    a = n(20805),
    s = n(327098);

function o(e) {
    var t, n, o, l, c;
    let u = (0, r.bG)([i.default], () => i.default.getUser(e.author_id)),
        { activity: d, embeddedActivity: f } = (0, s.A)(e);
    if (null == d)
        return {
            isRich: !1,
            appName: (0, a.zD)(e) ? e.extra.game_name : void 0,
            user: u,
            activity: void 0,
            embeddedActivity: void 0,
            state: void 0,
            details: void 0,
            party: void 0,
        };
    let p =
            (null == (n = d.assets) ? void 0 : n.large_image) != null ||
            (null == (o = d.assets) ? void 0 : o.small_image) != null,
        _ =
            (null == (l = d.assets) ? void 0 : l.large_text) != null ||
            (null == (c = d.assets) ? void 0 : c.small_text) != null,
        h = null != (t = d.name) ? t : "game_name" in e.extra ? e.extra.game_name : void 0,
        m = d.details,
        g = d.state,
        E = d.party;
    return {
        isRich: p || _ || null != m || null != g || null != E,
        user: u,
        activity: d,
        state: g,
        details: m,
        party: E,
        appName: h,
        embeddedActivity: f,
    };
}
