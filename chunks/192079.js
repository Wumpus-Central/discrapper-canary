n.d(e, {
    ER: () => c,
    kk: () => f,
    s$: () => _
}),
    n(724458),
    n(47120),
    n(392711);
var i = n(19780),
    a = n(5192),
    r = n(700785),
    l = n(427679),
    o = n(157925),
    u = n(981631),
    s = n(71080),
    d = n(388032);
function c(t, e, n, i) {
    let r = e[0],
        l = a.ZP.getName(t, n, r),
        o = null != i ? i : e.length;
    return 1 === o && null != r
        ? l
        : null == r
          ? d.intl.formatToPlainString(d.t.chmM9P, { count: o })
          : d.intl.formatToPlainString(d.t.GhkJ29, {
                name: l,
                count: o - 1
            });
}
function f(t, e) {
    switch (t) {
        case s.aC.OWNER:
            return d.intl.string(d.t.icuNBA);
        case s.aC.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5e);
        case s.aC.MEMBER:
        case s.aC.ROLE:
            return e ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
        case s.aC.EMPTY_STATE:
    }
    return null;
}
function _(t) {
    let e = l.Z.getStageInstanceByChannel(t.id);
    return {
        channel_id: t.id,
        guild_id: t.guild_id,
        topic: null == e ? void 0 : e.topic,
        media_session_id: i.Z.getMediaSessionId(),
        request_to_speak_state: r.Uu(u.Plq.REQUEST_TO_SPEAK, t) ? o.BM.EVERYONE : o.BM.NO_ONE,
        stage_instance_id: null == e ? void 0 : e.id
    };
}
