"use strict";
n.d(t, { u: () => r });
var l = n(17928),
    i = n(287809),
    s = n(20805),
    a = n(327098);
function r(e) {
    let t = (0, l.bG)([i.default], () => i.default.getUser(e.author_id)),
        { activity: n, embeddedActivity: r } = (0, a.A)(e);
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
        c = n.assets?.large_text != null || n.assets?.small_text != null,
        u = n.name ?? ("game_name" in e.extra ? e.extra.game_name : void 0),
        d = n.details,
        h = n.state,
        m = n.party;
    return {
        isRich: o || c || null != d || null != h || null != m,
        user: t,
        activity: n,
        state: h,
        details: d,
        party: m,
        appName: u,
        embeddedActivity: r,
    };
}
