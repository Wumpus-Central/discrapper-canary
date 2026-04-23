"use strict";
n.d(t, { u: () => o });
var r = n(311907),
    i = n(287809),
    s = n(20805),
    a = n(327098);
function o(e) {
    let t = (0, r.bG)([i.default], () => i.default.getUser(e.author_id)),
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
        u = n.assets?.large_text != null || n.assets?.small_text != null,
        c = n.name ?? ("game_name" in e.extra ? e.extra.game_name : void 0),
        d = n.details,
        _ = n.state,
        f = n.party;
    return {
        isRich: l || u || null != d || null != _ || null != f,
        user: t,
        activity: n,
        state: _,
        details: d,
        party: f,
        appName: c,
        embeddedActivity: o,
    };
}
