"use strict";
n.d(t, { u: () => o });
var i = n(17928),
    r = n(287809),
    s = n(20805),
    a = n(327098);
function o(e) {
    let t = (0, i.bG)([r.default], () => r.default.getUser(e.author_id)),
        { activity: n, embeddedActivity: o } = (0, a.A)(e);
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
    let l = n.assets?.large_image != null || n.assets?.small_image != null,
        d = n.assets?.large_text != null || n.assets?.small_text != null,
        _ = n.name ?? ("game_name" in e.extra ? e.extra.game_name : void 0),
        u = n.details,
        c = n.state,
        E = n.party;
    return {
        isRich: l || d || null != u || null != c || null != E,
        user: t,
        activity: n,
        state: c,
        details: u,
        party: E,
        appName: _,
        embeddedActivity: o,
    };
}
