n.d(t, {
    ER: () => d,
    kk: () => p,
    s$: () => m,
}),
    n(388685),
    n(392711);
var r = n(19780),
    i = n(5192),
    l = n(700785),
    o = n(427679),
    a = n(157925),
    s = n(981631),
    c = n(71080),
    u = n(388032);
function d(e, t, n, r) {
    let l = t[0],
        o = i.ZP.getName(e, n, l),
        a = null != r ? r : t.length;
    return 1 === a && null != l
        ? o
        : null == l
          ? u.intl.formatToPlainString(u.t.chmM9P, { count: a })
          : u.intl.formatToPlainString(u.t.GhkJ29, {
                name: o,
                count: a - 1,
            });
}
function p(e, t) {
    switch (e) {
        case c.aC.OWNER:
            return u.intl.string(u.t.icuNBA);
        case c.aC.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5e);
        case c.aC.MEMBER:
        case c.aC.ROLE:
            return t ? u.intl.string(u.t.Hw3XW1) : u.intl.string(u.t.YieyPj);
        case c.aC.EMPTY_STATE:
    }
    return null;
}
function m(e) {
    let t = o.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: r.Z.getMediaSessionId(),
        request_to_speak_state: l.Uu(s.Plq.REQUEST_TO_SPEAK, e) ? a.BM.EVERYONE : a.BM.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id,
    };
}
