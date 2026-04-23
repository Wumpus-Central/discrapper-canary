n.d(t, { JA: () => D, Tv: () => h, bA: () => b, xu: () => g });
var i = n(284009),
    r = n.n(i),
    a = n(735438),
    s = n.n(a),
    _ = n(228366),
    l = n(465532),
    o = n(608299),
    E = n(58149),
    d = n(584682),
    c = n(9588),
    u = n(267102),
    I = n(376708),
    A = n(976860),
    T = n(378570),
    S = n(253932),
    N = n(761640),
    O = n(31717),
    R = n(309010),
    f = n(977997),
    C = n(625494),
    p = n(37411),
    m = n(652215),
    L = n(746080);
function D(e, t, n) {
    if (!(0, I.C$)(e.id)) return void (0, c.E)();
    u.Uw.dispatch(m.jej.POPOUT_CLOSE);
    let i = !s().isEmpty(f.A.getVoiceStatesForChannel(e.id));
    if (t || !S.SY.getSetting() || __OVERLAY__ || i) {
        _.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, T.N9)(e, { source: n }) : (0, T.iN)(e.id);
        return;
    }
    r()(null != e.parent_id, "all threads must have parents");
    let a = e.getGuildId();
    if (null != a && null != N.Ay.getGuildSidebarState(a)) {
        _.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, T.N9)(e, { source: n }) : (0, T.iN)(e.id);
        return;
    }
    let l = R.A.getChannelId();
    e.parent_id === l || (0, L.mP)(l) || (0, T.iN)(e.parent_id),
        (0, A.pX)(
            m.BVt.CHANNEL_THREAD_VIEW((0, d.j)(e), (0, L.mP)(l) ? L.VV.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: p.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            C._.dispatch(m.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function h(e, t, n) {
    if (
        (r()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        r()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, E.zV)(m.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
        u.Uw.dispatch(m.jej.POPOUT_CLOSE),
        R.A.getChannelId() !== e.id && (0, T.iN)(e.id),
        "" === O.A.getDraft(e.id, O.C.FirstThreadMessage))
    ) {
        let t = O.A.getDraft(e.id, O.C.ChannelMessage);
        l.A.saveDraft(e.id, "", O.C.ChannelMessage), l.A.saveDraft(e.id, t, O.C.FirstThreadMessage);
    }
    setTimeout(() => {
        _.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: n });
    }, 0);
}
function g(e, t) {
    (0, A.pX)(m.BVt.CHANNEL(e, (0, L.mP)(t) ? L.VV.GUILD_HOME : t)),
        _.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
}
function b(e) {
    _.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        o.A.clearAll(e, O.C.FirstThreadMessage),
        _.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: O.C.FirstThreadMessage }),
        _.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: O.C.ThreadSettings });
}
