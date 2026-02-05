"use strict";
n.d(t, { JA: () => C, Tv: () => b, bA: () => R, xu: () => N });
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(73153),
    l = n(465532),
    u = n(58149),
    c = n(584682),
    d = n(9588),
    _ = n(267102),
    f = n(376708),
    p = n(976860),
    h = n(378570),
    m = n(253932),
    g = n(761640),
    E = n(31717),
    A = n(309010),
    I = n(977997),
    T = n(203982),
    y = n(37411),
    S = n(652215),
    v = n(746080);
function C(e, t, n) {
    if (!(0, f.C$)(e.id)) return void (0, d.E)();
    _.Uw.dispatch(S.jej.POPOUT_CLOSE);
    let r = !s().isEmpty(I.A.getVoiceStatesForChannel(e.id));
    if (t || !m.SY.getSetting() || __OVERLAY__ || r) {
        o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, h.N9)(e, { source: n }) : (0, h.iN)(e.id);
        return;
    }
    i()(null != e.parent_id, "all threads must have parents");
    let a = e.getGuildId();
    if (null != a && null != g.Ay.getGuildSidebarState(a)) {
        o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, h.N9)(e, { source: n }) : (0, h.iN)(e.id);
        return;
    }
    let l = A.A.getChannelId();
    e.parent_id === l || (0, v.mP)(l) || (0, h.iN)(e.parent_id),
        (0, p.pX)(
            S.BVt.CHANNEL_THREAD_VIEW((0, c.j)(e), (0, v.mP)(l) ? v.VV.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: y.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            T._.dispatch(S.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function b(e, t, n) {
    if (
        (i()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        i()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, u.zV)(S.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
        _.Uw.dispatch(S.jej.POPOUT_CLOSE),
        A.A.getChannelId() !== e.id && (0, h.iN)(e.id),
        "" === E.A.getDraft(e.id, E.C.FirstThreadMessage))
    ) {
        let t = E.A.getDraft(e.id, E.C.ChannelMessage);
        l.A.saveDraft(e.id, "", E.C.ChannelMessage), l.A.saveDraft(e.id, t, E.C.FirstThreadMessage);
    }
    setTimeout(() => {
        o.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: n });
    }, 0);
}
function N(e, t) {
    (0, p.pX)(S.BVt.CHANNEL(e, (0, v.mP)(t) ? v.VV.GUILD_HOME : t)),
        o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
}
function R(e) {
    o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        o.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: E.C.FirstThreadMessage }),
        o.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: E.C.ThreadSettings });
}
