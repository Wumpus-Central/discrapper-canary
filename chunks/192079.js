n.d(t, {
    ER: () => d,
    kk: () => p,
    s$: () => m
}),
    n(388685),
    n(392711);
var r = n(19780),
    i = n(5192),
    a = n(700785),
    l = n(427679),
    o = n(157925),
    s = n(981631),
    c = n(71080),
    u = n(388032);
function d(e, t, n, r) {
    let a = t[0],
        l = i.ZP.getName(e, n, a),
        o = null != r ? r : t.length;
    return 1 === o && null != a
        ? l
        : null == a
          ? u.NW.formatToPlainString(u.t.chmM9P, { count: o })
          : u.NW.formatToPlainString(u.t.GhkJ29, {
                name: l,
                count: o - 1
            });
}
function p(e, t) {
    switch (e) {
        case c.aC.OWNER:
            return u.NW.string(u.t.icuNBA);
        case c.aC.ADMINISTRATOR:
            return u.NW.string(u.t.eTmN5e);
        case c.aC.MEMBER:
        case c.aC.ROLE:
            return t ? u.NW.string(u.t.Hw3XW1) : u.NW.string(u.t.YieyPj);
        case c.aC.EMPTY_STATE:
    }
    return null;
}
function m(e) {
    let t = l.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: r.Z.getMediaSessionId(),
        request_to_speak_state: a.Uu(s.Plq.REQUEST_TO_SPEAK, e) ? o.BM.EVERYONE : o.BM.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id
    };
}
