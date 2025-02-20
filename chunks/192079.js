n.d(e, {
    ER: () => d,
    kk: () => f,
    s$: () => N
}),
    n(47120),
    n(392711);
var i = n(19780),
    r = n(5192),
    a = n(700785),
    l = n(427679),
    o = n(157925),
    u = n(981631),
    s = n(71080),
    c = n(388032);
function d(t, e, n, i) {
    let a = e[0],
        l = r.ZP.getName(t, n, a),
        o = null != i ? i : e.length;
    return 1 === o && null != a
        ? l
        : null == a
          ? c.NW.formatToPlainString(c.t.chmM9P, { count: o })
          : c.NW.formatToPlainString(c.t.GhkJ29, {
                name: l,
                count: o - 1
            });
}
function f(t, e) {
    switch (t) {
        case s.aC.OWNER:
            return c.NW.string(c.t.icuNBA);
        case s.aC.ADMINISTRATOR:
            return c.NW.string(c.t.eTmN5e);
        case s.aC.MEMBER:
        case s.aC.ROLE:
            return e ? c.NW.string(c.t.Hw3XW1) : c.NW.string(c.t.YieyPj);
        case s.aC.EMPTY_STATE:
    }
    return null;
}
function N(t) {
    let e = l.Z.getStageInstanceByChannel(t.id);
    return {
        channel_id: t.id,
        guild_id: t.guild_id,
        topic: null == e ? void 0 : e.topic,
        media_session_id: i.Z.getMediaSessionId(),
        request_to_speak_state: a.Uu(u.Plq.REQUEST_TO_SPEAK, t) ? o.BM.EVERYONE : o.BM.NO_ONE,
        stage_instance_id: null == e ? void 0 : e.id
    };
}
