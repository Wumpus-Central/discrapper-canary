n.d(t, {
    ER: () => u,
    kk: () => m,
    s$: () => _
}),
    n(724458),
    n(47120),
    n(392711);
var i = n(19780),
    l = n(5192),
    a = n(700785),
    r = n(427679),
    s = n(157925),
    o = n(981631),
    c = n(71080),
    d = n(388032);
function u(e, t, n, i) {
    let a = t[0],
        r = l.ZP.getName(e, n, a),
        s = null != i ? i : t.length;
    return 1 === s && null != a
        ? r
        : null == a
          ? d.intl.formatToPlainString(d.t.chmM9P, { count: s })
          : d.intl.formatToPlainString(d.t.GhkJ29, {
                name: r,
                count: s - 1
            });
}
function m(e, t) {
    switch (e) {
        case c.aC.OWNER:
            return d.intl.string(d.t.icuNBA);
        case c.aC.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5e);
        case c.aC.MEMBER:
        case c.aC.ROLE:
            return t ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
        case c.aC.EMPTY_STATE:
    }
    return null;
}
function _(e) {
    let t = r.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: i.Z.getMediaSessionId(),
        request_to_speak_state: a.Uu(o.Plq.REQUEST_TO_SPEAK, e) ? s.BM.EVERYONE : s.BM.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id
    };
}
