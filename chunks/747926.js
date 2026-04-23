"use strict";
n.d(t, { JA: () => C, Tv: () => O, bA: () => b, xu: () => R });
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(73153),
    l = n(465532),
    u = n(608299),
    c = n(58149),
    d = n(584682),
    _ = n(9588),
    f = n(267102),
    p = n(376708),
    h = n(976860),
    E = n(378570),
    m = n(253932),
    g = n(761640),
    A = n(31717),
    I = n(309010),
    T = n(977997),
    S = n(203982),
    y = n(37411),
    N = n(652215),
    v = n(746080);
function C(e, t, n) {
    if (!(0, p.C$)(e.id)) return void (0, _.E)();
    f.Uw.dispatch(N.jej.POPOUT_CLOSE);
    let r = !a().isEmpty(T.A.getVoiceStatesForChannel(e.id));
    if (t || !m.SY.getSetting() || __OVERLAY__ || r) {
        o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, E.N9)(e, { source: n }) : (0, E.iN)(e.id);
        return;
    }
    i()(null != e.parent_id, "all threads must have parents");
    let s = e.getGuildId();
    if (null != s && null != g.Ay.getGuildSidebarState(s)) {
        o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e.parent_id }),
            null != n ? (0, E.N9)(e, { source: n }) : (0, E.iN)(e.id);
        return;
    }
    let l = I.A.getChannelId();
    e.parent_id === l || (0, v.mP)(l) || (0, E.iN)(e.parent_id),
        (0, h.pX)(
            N.BVt.CHANNEL_THREAD_VIEW((0, d.j)(e), (0, v.mP)(l) ? v.VV.GUILD_HOME : e.parent_id, e.id),
            e.isForumPost() ? { source: y.H9.FORUM } : void 0,
        ),
        setTimeout(() => {
            S._.dispatch(N.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e.id });
        }, 0);
}
function O(e, t, n) {
    if (
        (i()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"),
        i()(!__OVERLAY__, "Cannot create threads in the overlay."),
        (0, c.zV)(N.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
        f.Uw.dispatch(N.jej.POPOUT_CLOSE),
        I.A.getChannelId() !== e.id && (0, E.iN)(e.id),
        "" === A.A.getDraft(e.id, A.C.FirstThreadMessage))
    ) {
        let t = A.A.getDraft(e.id, A.C.ChannelMessage);
        l.A.saveDraft(e.id, "", A.C.ChannelMessage), l.A.saveDraft(e.id, t, A.C.FirstThreadMessage);
    }
    setTimeout(() => {
        o.h.dispatch({ type: "SIDEBAR_CREATE_THREAD", parentChannelId: e.id, parentMessageId: t?.id, location: n });
    }, 0);
}
function R(e, t) {
    (0, h.pX)(N.BVt.CHANNEL(e, (0, v.mP)(t) ? v.VV.GUILD_HOME : t)),
        o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: t });
}
function b(e) {
    o.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e }),
        u.A.clearAll(e, A.C.FirstThreadMessage),
        o.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: A.C.FirstThreadMessage }),
        o.h.dispatch({ type: "DRAFT_CLEAR", channelId: e, draftType: A.C.ThreadSettings });
}
