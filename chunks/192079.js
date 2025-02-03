t.d(n, {
    ER: () => u,
    kk: () => _,
    s$: () => h
}),
    t(724458),
    t(47120),
    t(392711);
var l = t(19780),
    i = t(5192),
    r = t(700785),
    a = t(427679),
    s = t(157925),
    o = t(981631),
    c = t(71080),
    d = t(388032);
function u(e, n, t, l) {
    let r = n[0],
        a = i.ZP.getName(e, t, r),
        s = null != l ? l : n.length;
    return 1 === s && null != r
        ? a
        : null == r
          ? d.intl.formatToPlainString(d.t.chmM9P, { count: s })
          : d.intl.formatToPlainString(d.t.GhkJ29, {
                name: a,
                count: s - 1
            });
}
function _(e, n) {
    switch (e) {
        case c.aC.OWNER:
            return d.intl.string(d.t.icuNBA);
        case c.aC.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5e);
        case c.aC.MEMBER:
        case c.aC.ROLE:
            return n ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
        case c.aC.EMPTY_STATE:
    }
    return null;
}
function h(e) {
    let n = a.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == n ? void 0 : n.topic,
        media_session_id: l.Z.getMediaSessionId(),
        request_to_speak_state: r.Uu(o.Plq.REQUEST_TO_SPEAK, e) ? s.BM.EVERYONE : s.BM.NO_ONE,
        stage_instance_id: null == n ? void 0 : n.id
    };
}
