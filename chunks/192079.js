e.d(t, {
    ER: () => u,
    kk: () => _,
    s$: () => h
}),
    e(724458),
    e(47120),
    e(392711);
var i = e(19780),
    l = e(5192),
    r = e(700785),
    a = e(427679),
    s = e(157925),
    c = e(981631),
    o = e(71080),
    d = e(388032);
function u(n, t, e, i) {
    let r = t[0],
        a = l.ZP.getName(n, e, r),
        s = null != i ? i : t.length;
    return 1 === s && null != r
        ? a
        : null == r
          ? d.intl.formatToPlainString(d.t.chmM9P, { count: s })
          : d.intl.formatToPlainString(d.t.GhkJ29, {
                name: a,
                count: s - 1
            });
}
function _(n, t) {
    switch (n) {
        case o.aC.OWNER:
            return d.intl.string(d.t.icuNBA);
        case o.aC.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5e);
        case o.aC.MEMBER:
        case o.aC.ROLE:
            return t ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
        case o.aC.EMPTY_STATE:
    }
    return null;
}
function h(n) {
    let t = a.Z.getStageInstanceByChannel(n.id);
    return {
        channel_id: n.id,
        guild_id: n.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: i.Z.getMediaSessionId(),
        request_to_speak_state: r.Uu(c.Plq.REQUEST_TO_SPEAK, n) ? s.BM.EVERYONE : s.BM.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id
    };
}
