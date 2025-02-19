t.d(n, {
    ER: () => s,
    kk: () => _,
    s$: () => E
}),
    t(47120),
    t(392711);
var i = t(19780),
    l = t(5192),
    r = t(700785),
    u = t(427679),
    a = t(157925),
    o = t(981631),
    d = t(71080),
    c = t(388032);
function s(e, n, t, i) {
    let r = n[0],
        u = l.ZP.getName(e, t, r),
        a = null != i ? i : n.length;
    return 1 === a && null != r
        ? u
        : null == r
          ? c.NW.formatToPlainString(c.t.chmM9P, { count: a })
          : c.NW.formatToPlainString(c.t.GhkJ29, {
                name: u,
                count: a - 1
            });
}
function _(e, n) {
    switch (e) {
        case d.aC.OWNER:
            return c.NW.string(c.t.icuNBA);
        case d.aC.ADMINISTRATOR:
            return c.NW.string(c.t.eTmN5e);
        case d.aC.MEMBER:
        case d.aC.ROLE:
            return n ? c.NW.string(c.t.Hw3XW1) : c.NW.string(c.t.YieyPj);
        case d.aC.EMPTY_STATE:
    }
    return null;
}
function E(e) {
    let n = u.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == n ? void 0 : n.topic,
        media_session_id: i.Z.getMediaSessionId(),
        request_to_speak_state: r.Uu(o.Plq.REQUEST_TO_SPEAK, e) ? a.BM.EVERYONE : a.BM.NO_ONE,
        stage_instance_id: null == n ? void 0 : n.id
    };
}
