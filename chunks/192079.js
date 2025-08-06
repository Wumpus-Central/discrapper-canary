n.d(t, {
    ER: () => d,
    kk: () => f,
    s$: () => _,
}),
    n(388685),
    n(392711);
var r = n(19780),
    i = n(5192),
    o = n(700785),
    a = n(427679),
    s = n(157925),
    l = n(981631),
    c = n(71080),
    u = n(388032);
function d(e, t, n, r) {
    let o = t[0],
        a = i.ZP.getName(e, n, o),
        s = null != r ? r : t.length;
    return 1 === s && null != o
        ? a
        : null == o
          ? u.intl.formatToPlainString(u.t.chmM9P, { count: s })
          : u.intl.formatToPlainString(u.t.GhkJ29, {
                name: a,
                count: s - 1,
            });
}
function f(e, t) {
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
function _(e) {
    let t = a.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: r.Z.getMediaSessionId(),
        request_to_speak_state: o.Uu(l.Plq.REQUEST_TO_SPEAK, e) ? s.BM.EVERYONE : s.BM.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id,
    };
}
