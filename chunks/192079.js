n.d(t, {
    ER: () => c,
    kk: () => f,
    s$: () => _
}),
    n(724458),
    n(47120),
    n(392711);
var i = n(19780),
    r = n(5192),
    a = n(700785),
    l = n(427679),
    u = n(157925),
    o = n(981631),
    d = n(71080),
    s = n(388032);
function c(e, t, n, i) {
    let a = t[0],
        l = r.ZP.getName(e, n, a),
        u = null != i ? i : t.length;
    return 1 === u && null != a
        ? l
        : null == a
          ? s.intl.formatToPlainString(s.t.chmM9P, { count: u })
          : s.intl.formatToPlainString(s.t.GhkJ29, {
                name: l,
                count: u - 1
            });
}
function f(e, t) {
    switch (e) {
        case d.aC.OWNER:
            return s.intl.string(s.t.icuNBA);
        case d.aC.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5e);
        case d.aC.MEMBER:
        case d.aC.ROLE:
            return t ? s.intl.string(s.t.Hw3XW1) : s.intl.string(s.t.YieyPj);
        case d.aC.EMPTY_STATE:
    }
    return null;
}
function _(e) {
    let t = l.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: i.Z.getMediaSessionId(),
        request_to_speak_state: a.Uu(o.Plq.REQUEST_TO_SPEAK, e) ? u.BM.EVERYONE : u.BM.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id
    };
}
