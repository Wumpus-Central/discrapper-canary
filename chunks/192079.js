t.d(n, {
    ER: function () {
        return d;
    },
    kk: function () {
        return h;
    },
    s$: function () {
        return m;
    }
}),
    t(724458),
    t(47120),
    t(392711);
var i = t(19780),
    l = t(5192),
    r = t(700785),
    a = t(427679),
    s = t(157925),
    c = t(981631),
    o = t(71080),
    u = t(388032);
function d(e, n, t, i) {
    let r = n[0],
        a = l.ZP.getName(e, t, r),
        s = null != i ? i : n.length;
    return 1 === s && null != r
        ? a
        : null == r
          ? u.intl.formatToPlainString(u.t.chmM9P, { count: s })
          : u.intl.formatToPlainString(u.t.GhkJ29, {
                name: a,
                count: s - 1
            });
}
function h(e, n) {
    switch (e) {
        case o.aC.OWNER:
            return u.intl.string(u.t.icuNBA);
        case o.aC.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5e);
        case o.aC.MEMBER:
        case o.aC.ROLE:
            return n ? u.intl.string(u.t.Hw3XW1) : u.intl.string(u.t.YieyPj);
        case o.aC.EMPTY_STATE:
    }
    return null;
}
function m(e) {
    let n = a.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == n ? void 0 : n.topic,
        media_session_id: i.Z.getMediaSessionId(),
        request_to_speak_state: r.Uu(c.Plq.REQUEST_TO_SPEAK, e) ? s.BM.EVERYONE : s.BM.NO_ONE,
        stage_instance_id: null == n ? void 0 : n.id
    };
}
