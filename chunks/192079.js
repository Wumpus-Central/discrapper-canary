t.d(n, {
    ER: () => d,
    kk: () => f,
    s$: () => p
}),
    t(47120),
    t(392711);
var r = t(19780),
    i = t(5192),
    l = t(700785),
    o = t(427679),
    a = t(157925),
    s = t(981631),
    c = t(71080),
    u = t(388032);
function d(e, n, t, r) {
    let l = n[0],
        o = i.ZP.getName(e, t, l),
        a = null != r ? r : n.length;
    return 1 === a && null != l
        ? o
        : null == l
          ? u.NW.formatToPlainString(u.t.chmM9P, { count: a })
          : u.NW.formatToPlainString(u.t.GhkJ29, {
                name: o,
                count: a - 1
            });
}
function f(e, n) {
    switch (e) {
        case c.aC.OWNER:
            return u.NW.string(u.t.icuNBA);
        case c.aC.ADMINISTRATOR:
            return u.NW.string(u.t.eTmN5e);
        case c.aC.MEMBER:
        case c.aC.ROLE:
            return n ? u.NW.string(u.t.Hw3XW1) : u.NW.string(u.t.YieyPj);
        case c.aC.EMPTY_STATE:
    }
    return null;
}
function p(e) {
    let n = o.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == n ? void 0 : n.topic,
        media_session_id: r.ZP.getMediaSessionId(),
        request_to_speak_state: l.Uu(s.Plq.REQUEST_TO_SPEAK, e) ? a.BM.EVERYONE : a.BM.NO_ONE,
        stage_instance_id: null == n ? void 0 : n.id
    };
}
