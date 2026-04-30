n.d(t, { JA: () => R, Tv: () => N, bA: () => b, xu: () => M });
var i = n(284009),
    l = n.n(i),
    r = n(735438),
    s = n.n(r),
    a = n(228366),
    o = n(465532),
    u = n(608299),
    d = n(58149),
    c = n(584682),
    h = n(9588),
    p = n(267102),
    m = n(376708),
    f = n(976860),
    E = n(378570),
    g = n(253932),
    A = n(761640),
    _ = n(31717),
    S = n(309010),
    I = n(977997),
    y = n(625494),
    C = n(37411),
    T = n(652215),
    v = n(746080);
function R(e, t, n) {
    if (!(0, m.C$)(e.id)) return void (0, h.E)();
    p.Uw.dispatch(T.jej.POPOUT_CLOSE);
    let i = !s().isEmpty(I.A.getVoiceStatesForChannel(e.id));
    if (t || !g.SY.getSetting() || __OVERLAY__ || i) {
        a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, E.N9)(e, { source: n }) : (0, E.iN)(e.id);
        return;
    }
    l()(null != e.parent_id, "all threads must have parents");
    let r = e.getGuildId();
    if (null != r && null != A.Ay.getGuildSidebarState(r)) {
        a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, E.N9)(e, { source: n }) : (0, E.iN)(e.id);
        return;
    }
    let o = S.A.getChannelId();
    e.parent_id === o || (0, v.mP)(o) || (0, E.iN)(e.parent_id),
        (0, f.pX)(
            T.BVt.CHANNEL_THREAD_VIEW((0, c.j)(e), (0, v.mP)(o) ? v.VV.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: C.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            y._.dispatch(T.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function N(e, t, n) {
    if (
        (l()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        l()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, d.zV)(T.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
        p.Uw.dispatch(T.jej.POPOUT_CLOSE),
        S.A.getChannelId() !== e.id && (0, E.iN)(e.id),
        "" === _.A.getDraft(e.id, _.C.FirstThreadMessage))
    ) {
        let t = _.A.getDraft(e.id, _.C.ChannelMessage);
        o.A.saveDraft(e.id, "", _.C.ChannelMessage), o.A.saveDraft(e.id, t, _.C.FirstThreadMessage);
    }
    setTimeout(() => {
        a.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: n });
    }, 0);
}
function M(e, t) {
    (0, f.pX)(T.BVt.CHANNEL(e, (0, v.mP)(t) ? v.VV.GUILD_HOME : t)),
        a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
}
function b(e) {
    a.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        u.A.clearAll(e, _.C.FirstThreadMessage),
        a.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: _.C.FirstThreadMessage }),
        a.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: _.C.ThreadSettings });
}
